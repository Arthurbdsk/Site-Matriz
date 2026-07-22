import { useState } from "react";

interface AppLogoProps {
  /** Size of the square symbol in px */
  size?: number;
  /** Text color context: dark background -> light text */
  variant?: "dark" | "light";
  /** Show the "Instituto Matriz" wordmark next to the symbol */
  showText?: boolean;
  className?: string;
  /** Use "eager" for above-the-fold placements (e.g. the header) */
  loading?: "eager" | "lazy";
}

/** Brand logo. Uses /images/logo.png (the brain-tree mark, cropped to the icon), falling back to the "IM" gradient monogram if missing. */
export default function AppLogo({
  size = 44,
  variant = "dark",
  showText = true,
  className = "",
  loading = "lazy",
}: AppLogoProps) {
  const [failed, setFailed] = useState(false);

  const titleColor = variant === "light" ? "text-white" : "text-brand-navy";
  const subColor = variant === "light" ? "text-white/60" : "text-muted-foreground";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-sm ring-1 ring-black/5 p-0.5"
        style={{ width: size, height: size }}
      >
        {!failed ? (
          <img
            src="/images/logo.png"
            alt="Instituto Matriz de Neurodesenvolvimento"
            onError={() => setFailed(true)}
            loading={loading}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-teal)] flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-tight">IM</span>
          </div>
        )}
      </div>

      {showText && (
        <div className="text-left leading-tight">
          <p className={`text-sm md:text-base font-bold ${titleColor}`}>
            Instituto Matriz
          </p>
          <p className={`text-[11px] md:text-xs tracking-wide ${subColor}`}>
            de Neurodesenvolvimento
          </p>
        </div>
      )}
    </div>
  );
}
