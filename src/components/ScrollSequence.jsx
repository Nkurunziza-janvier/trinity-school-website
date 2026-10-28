import { useEffect, useRef } from "react";

const FRAME_COUNT = 300;
const POSTER = "/ezgif-frame-001.jpg";

const frameSrc = (index) =>
  `/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ScrollSequence({ children, onPhaseChange }) {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const onPhaseChangeRef = useRef(onPhaseChange);

  useEffect(() => {
    onPhaseChangeRef.current = onPhaseChange;
  }, [onPhaseChange]);

  useEffect(() => {
    const track = trackRef.current;
    const canvas = canvasRef.current;
    if (!track || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const images = new Array(FRAME_COUNT);
    const ready = new Uint8Array(FRAME_COUNT);

    let vw = 0;
    let vh = 0;
    let dpr = 1;
    let eased = 0;
    let lastKey = "";
    let firstPaint = false;
    let running = true;
    let rafId = 0;
    let started = false;
    let lastPhase = -1;

    const resize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;

      const pixelBudget = 8_000_000;
      const maxDpr = Math.sqrt(pixelBudget / Math.max(1, vw * vh));
      dpr = clamp(window.devicePixelRatio || 1, 1, Math.min(2, maxDpr));

      canvas.width = Math.max(1, Math.round(vw * dpr));
      canvas.height = Math.max(1, Math.round(vh * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      lastKey = "";
    };

    const markReady = (index) => {
      ready[index] = 1;
      lastKey = "";
    };

    const startLoading = () => {
      if (started) return;
      started = true;

      for (let i = 0; i < FRAME_COUNT; i += 1) {
        const img = new Image();
        img.decoding = "async";
        img.fetchPriority = i < 16 ? "high" : "low";
        img.src = frameSrc(i);
        images[i] = img;

        if (img.complete && img.naturalWidth > 0) {
          markReady(i);
        } else {
          img.onload = () => markReady(i);
        }
      }
    };

    const nearestReady = (index) => {
      if (ready[index]) return index;
      for (let d = 1; d < FRAME_COUNT; d += 1) {
        const before = index - d;
        const after = index + d;
        if (before >= 0 && ready[before]) return before;
        if (after < FRAME_COUNT && ready[after]) return after;
      }
      return -1;
    };

    const paint = (index, alpha) => {
      const img = images[index];
      if (!img || !ready[index]) return false;

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return false;

      const scale = Math.max(vw / iw, vh / ih);
      const dw = iw * scale;
      const dh = ih * scale;

      ctx.globalAlpha = alpha;
      ctx.drawImage(img, (vw - dw) / 2, (vh - dh) / 2, dw, dh);
      return true;
    };

    const render = (position) => {
      const base = Math.floor(position);
      const nextIndex = Math.min(base + 1, FRAME_COUNT - 1);
      const blend = position - base;

      const first = nearestReady(base);
      if (first === -1) return;

      let second = first;
      if (blend > 0.01) {
        const candidate = nearestReady(nextIndex);
        if (candidate !== -1) second = candidate;
      }

      const key = `${first}:${second}:${blend.toFixed(3)}`;
      if (key === lastKey) return;
      lastKey = key;

      if (!paint(first, 1)) return;
      if (second !== first && blend > 0.01) paint(second, blend);
      ctx.globalAlpha = 1;

      if (!firstPaint) {
        firstPaint = true;
        canvas.style.opacity = "1";
      }
    };

    const tick = () => {
      if (!running) return;

      const rect = track.getBoundingClientRect();
      const trackTop = rect.top + window.scrollY;
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0
          ? clamp((window.scrollY - trackTop) / scrollable, 0, 1)
          : 0;

      const target = progress * (FRAME_COUNT - 1);

      if (reduceMotion) {
        eased = target;
      } else {
        eased += (target - eased) * 0.14;
        if (Math.abs(target - eased) < 0.001) eased = target;
      }

      const phase = Math.min(2, Math.floor(progress * 3));
      if (phase !== lastPhase) {
        lastPhase = phase;
        onPhaseChangeRef.current?.(phase);
      }

      render(eased);
      rafId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startLoading();
          observer.disconnect();
        }
      },
      { rootMargin: "1600px 0px" }
    );
    observer.observe(track);

    rafId = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={trackRef}
      className="relative h-[500vh] w-full bg-forest-950"
    >
      <div
        className="sticky top-0 h-dvh w-full overflow-hidden bg-forest-950 bg-cover bg-center"
        style={{ backgroundImage: `url("${POSTER}")` }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-[1200ms] ease-out"
        />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </section>
  );
}
