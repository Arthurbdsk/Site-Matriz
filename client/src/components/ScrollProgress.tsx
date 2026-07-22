import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-1.5 bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="relative h-full animate-gradient bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-teal),var(--brand-orange),var(--brand-blue))] bg-[length:200%_100%] transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(16,185,129,0.6)]"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(16,185,129,0.9)] animate-pulse" />
      </div>
    </div>
  );
}
