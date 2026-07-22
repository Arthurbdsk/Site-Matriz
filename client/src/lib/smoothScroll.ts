import Lenis from "lenis";

/**
 * Site-wide smooth (eased/inertia) scrolling, powered by Lenis.
 *
 * This replaces a hand-rolled wheel-event version that turned out unreliable
 * across real browsers/trackpads. Lenis is a well-tested library that
 * normalizes wheel, trackpad, touch, and keyboard scrolling consistently.
 *
 * The instance is kept in module scope so lib/scroll.ts's scrollToSection()
 * can drive Lenis directly for nav-link jumps instead of calling raw
 * window.scrollTo() — calling that directly while Lenis is active would
 * have the two fight over the scroll position every frame.
 */
let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initSmoothScroll(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  });
  lenisInstance = lenis;

  let rafId = 0;
  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisInstance = null;
  };
}
