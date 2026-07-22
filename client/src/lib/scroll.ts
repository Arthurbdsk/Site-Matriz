import { getLenis } from "@/lib/smoothScroll";

/**
 * Custom smooth-scroll animation for nav-link jumps.
 *
 * Native `scrollIntoView({ behavior: "smooth" })` / CSS `scroll-behavior: smooth`
 * get silently downgraded to an instant jump by Chromium whenever the OS has
 * "reduce animations" enabled (Windows Settings > Accessibility > Visual effects).
 * Since smooth in-page navigation is an explicit feature here (not just a
 * decorative flourish), this rolls its own animation so it isn't at the mercy
 * of that browser heuristic.
 *
 * When Lenis (site-wide smooth scroll, see lib/smoothScroll.ts) is active,
 * this delegates to it instead of calling window.scrollTo() directly — Lenis
 * tracks its own virtual scroll position every frame, so a raw scrollTo()
 * call while it's running gets fought/overridden on the next tick.
 */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function scrollToSection(id: string, offset = 88) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -offset, duration: 1.1 });
    return;
  }

  const startY = window.scrollY;
  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - offset,
  );
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return;
  }

  const duration = 700;
  const start = Date.now();

  // setInterval (wall-clock time) instead of requestAnimationFrame: rAF gets
  // throttled or fully paused in backgrounded/hidden tabs in some browsers,
  // which would leave the animation stuck partway through.
  const interval = window.setInterval(() => {
    const t = Math.min((Date.now() - start) / duration, 1);
    // behavior: "auto" is required here: the page sets CSS scroll-behavior:
    // smooth, and without an explicit override each of these calls would
    // trigger its own native smooth-scroll animation on top of the last,
    // fighting this loop instead of landing where it's told.
    window.scrollTo({ top: startY + distance * easeInOutCubic(t), behavior: "auto" });
    if (t >= 1) window.clearInterval(interval);
  }, 16);
}
