import { useEffect, useState } from "react";

interface PreloaderProps {
  onReveal: () => void;
}

export default function Preloader({ onReveal }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();
    const duration = 2200;
    let finished = false;

    // Driven by wall-clock time via setInterval rather than requestAnimationFrame,
    // so it still completes even if the tab starts out backgrounded/hidden (rAF
    // is throttled or fully paused for hidden tabs in most browsers).
    const interval = window.setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setProgress(Math.round(eased * 100));
      if (p >= 1 && !finished) {
        finished = true;
        window.clearInterval(interval);
        setExiting(true);
        onReveal();
        window.setTimeout(() => {
          setGone(true);
          document.body.style.overflow = "";
        }, 950);
      }
    }, 40);

    return () => {
      window.clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onReveal]);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      aria-hidden
    >
      {/* Curtain panels (split reveal) */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(1200px_600px_at_50%_120%,#16267a,#0a1230)]"
        style={{
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.7s cubic-bezier(0.76,0,0.24,1) 0.25s",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(1200px_600px_at_50%_-20%,#16267a,#0a1230)]"
        style={{
          transform: exiting ? "translateY(100%)" : "translateY(0)",
          transition: "transform 0.7s cubic-bezier(0.76,0,0.24,1) 0.25s",
        }}
      />

      {/* Center content */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        style={{
          opacity: exiting ? 0 : 1,
          transform: exiting ? "scale(1.08)" : "scale(1)",
          transition: "opacity 0.35s ease, transform 0.5s ease",
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Expanding pulse rings behind the logo */}
          {[0, 0.6, 1.2].map((d, i) => (
            <span
              key={i}
              className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border border-white/25 preloader-ring"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
          {/* Soft glow */}
          <span className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-[var(--brand-teal)]/20 blur-3xl" />

          <img
            src="/images/logo-transparente.png"
            alt="Instituto Matriz de Neurodesenvolvimento"
            className="relative z-10 w-40 md:w-56 preloader-node"
            style={{ animationDelay: "0.15s" }}
          />
        </div>

        {/* Progress */}
        <div className="mt-9 flex items-center gap-3 w-56">
          <div className="h-1 flex-1 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#1d4ed8,#10b981,#f97316)]"
              style={{ width: `${progress}%`, transition: "width 0.15s ease-out" }}
            />
          </div>
          <span className="text-xs font-semibold text-white/70 tabular-nums w-9 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
