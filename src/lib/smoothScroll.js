import Lenis from "lenis";

let lenis = null;
let reduceMotion = false;

export function initSmoothScroll() {
  reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return () => {};

  lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    smoothWheel: true,
  });

  let rafId = 0;
  const raf = (time) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToTarget(target, options = {}) {
  const { offset = -76 } = options;
  const node =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!node) return;

  if (lenis) {
    lenis.scrollTo(node, { offset, duration: 1.3 });
  } else {
    node.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }
}

export function pauseSmoothScroll() {
  lenis?.stop();
}

export function resumeSmoothScroll() {
  lenis?.start();
}
