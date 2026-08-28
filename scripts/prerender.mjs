// Static prerendering step.
//
// The site is a client-rendered Vite/React SPA: the HTML Vite builds is an
// empty <div id="root"></div> with a <script> tag, so any crawler that
// doesn't execute JavaScript (most AI crawlers, fast-path search bots) sees
// no content at all. This script runs *after* `vite build`: it serves the
// built dist/public folder locally, visits every route in a real headless
// browser, waits for the app to finish rendering, and overwrites each
// route's HTML file with the fully-rendered DOM snapshot.
//
// This is prerendering, not SSR-with-hydration: main.tsx still does a plain
// `createRoot(...).render()` on load, so real visitors briefly see the
// static snapshot (great first paint + what crawlers read) and then React
// takes over normally a moment later.

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, statSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Locally we use the full `puppeteer` package with its bundled Chromium.
// On Vercel that binary can't start (the build image lacks libnspr4 and other
// shared libraries Chrome needs), so there we use puppeteer-core driving
// @sparticuz/chromium, which ships a Chromium built for exactly that
// environment.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({ headless: true });
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist", "public");
const PORT = 4173;
const SITE_ORIGIN = "https://www.institutomatriz.com.br";

// Slugs are read straight from the data files so adding a post or a condition
// page never requires touching this script.
function slugsFrom(relPath) {
  const source = readFileSync(path.join(ROOT, relPath), "utf-8");
  return [...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

// Posts live in posts.ts plus the posts-extra*.ts batches it merges in.
// Discovered rather than listed, so adding a new batch of articles never
// requires editing this script.
const DATA_DIR = "client/src/data";
const POST_FILES = [
  path.join(DATA_DIR, "posts.ts"),
  // Any posts-*.ts batch (posts-extra1.ts, posts-local.ts, ...) other than
  // posts.ts itself, which is already listed above.
  ...readdirSync(path.join(ROOT, DATA_DIR))
    .filter((f) => f.startsWith("posts-") && f.endsWith(".ts"))
    .map((f) => path.join(DATA_DIR, f)),
  ...readdirSync(path.join(ROOT, DATA_DIR, "pilares"))
    .filter((f) => f.endsWith(".ts") && f !== "related.ts" && f !== "referencias.ts")
    .map((f) => path.join(DATA_DIR, "pilares", f)),
];

const ROUTES = [
  "/",
  "/blog",
  ...POST_FILES.flatMap(slugsFrom).map((slug) => `/blog/${slug}`),
  ...slugsFrom("client/src/data/conditions.ts").map((slug) => `/condicoes/${slug}`),
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let filePath = path.join(DIST, decodeURIComponent(req.url.split("?")[0]));
      const stat = existsSync(filePath) ? statSync(filePath) : null;
      if (stat?.isDirectory()) {
        // e.g. /blog resolving to dist/public/blog/ from a prior prerender run.
        filePath = path.join(filePath, "index.html");
      } else if (!stat) {
        // No exact file match (route not prerendered yet, or a client-side
        // route) -> SPA fallback, same as a real static host would do.
        filePath = path.join(DIST, "index.html");
      }
      try {
        const data = await readFile(filePath);
        const ext = path.extname(filePath);
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle0" });

  // Wait for the real page content to mount before snapshotting.
  await page.waitForSelector("#main-content", { timeout: 15000 }).catch(() => {});
  // Small settle delay for any staggered entrance animations to finish
  // mounting their final DOM (content itself doesn't depend on animation
  // state, but this avoids racing the very first paint).
  await new Promise((r) => setTimeout(r, 300));

  const html = await page.content();
  await page.close();

  const outDir =
    route === "/" ? DIST : path.join(DIST, route.replace(/^\//, ""));
  const outFile = path.join(outDir, "index.html");
  await import("node:fs/promises").then(({ mkdir, writeFile }) =>
    mkdir(outDir, { recursive: true }).then(() => writeFile(outFile, html, "utf-8")),
  );
  return { route, bytes: html.length, outFile };
}

// Priority is a relative hint to crawlers, not a ranking factor by itself:
// the home page and the condition pages are the commercial pages we most
// want indexed and re-crawled, blog content is supporting material.
function priorityFor(route) {
  if (route === "/") return "1.0";
  if (route.startsWith("/condicoes/")) return "0.8";
  if (route === "/blog") return "0.6";
  return "0.5";
}

async function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (route) =>
      `  <url>\n` +
      `    <loc>${SITE_ORIGIN}${route}</loc>\n` +
      `    <lastmod>${today}</lastmod>\n` +
      `    <priority>${priorityFor(route)}</priority>\n` +
      `  </url>`,
  ).join("\n");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  const { writeFile } = await import("node:fs/promises");
  await writeFile(path.join(DIST, "sitemap.xml"), xml, "utf-8");
  console.log(`  ✓ sitemap.xml (${ROUTES.length} URLs)`);
}

async function main() {
  if (!existsSync(DIST)) {
    console.error(`dist/public not found at ${DIST} — run "vite build" first.`);
    process.exit(1);
  }

  const server = await startStaticServer();
  const browser = await launchBrowser();

  console.log(`Prerendering ${ROUTES.length} route(s)...`);
  const results = [];
  for (const route of ROUTES) {
    try {
      const result = await prerenderRoute(browser, route);
      results.push(result);
      console.log(`  ✓ ${route.padEnd(40)} ${result.bytes.toLocaleString()} bytes`);
    } catch (err) {
      console.error(`  ✗ ${route} failed:`, err.message);
    }
  }

  await browser.close();
  server.close();

  await writeSitemap();

  console.log(`\nDone. Prerendered ${results.length}/${ROUTES.length} routes.`);
}

main();
