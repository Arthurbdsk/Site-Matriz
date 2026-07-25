import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  /** Canonical path, e.g. "/condicoes/autismo". Combined with the site origin. */
  path: string;
  /** One or more JSON-LD objects (schema.org). Each becomes its own <script> tag. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Absolute image URL for Open Graph / Twitter cards. */
  image?: string;
}

const SITE_ORIGIN = "https://www.institutomatriz.com.br";
const MANAGED_ATTR = "data-seo-managed";

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets per-page title, meta description/OG tags, canonical link, and
 * schema.org JSON-LD. Plain DOM mutation (no react-helmet dependency) —
 * this runs during the client render, and since the site is prerendered
 * with a headless browser after build (see scripts/prerender.mjs), these
 * mutations are captured in the static HTML crawlers actually receive.
 */
export default function Seo({ title, description, path, jsonLd, image }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${path}`;
    document.title = title;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
      description,
    );

    upsertLink("canonical", url);

    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      },
      title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      },
      description,
    );
    upsertMeta(
      'meta[property="og:url"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      },
      url,
    );
    upsertMeta(
      'meta[property="og:type"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:type");
        return m;
      },
      "website",
    );
    if (image) {
      upsertMeta(
        'meta[property="og:image"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:image");
          return m;
        },
        image,
      );
    }
    upsertMeta(
      'meta[name="twitter:card"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "twitter:card");
        return m;
      },
      "summary_large_image",
    );

    // Replace any JSON-LD script(s) this component previously injected.
    document
      .querySelectorAll(`script[type="application/ld+json"][${MANAGED_ATTR}]`)
      .forEach((el) => el.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const item of items) {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute(MANAGED_ATTR, "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      }
    }
  }, [title, description, path, image, jsonLd]);

  return null;
}

export { SITE_ORIGIN };
