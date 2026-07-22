import { useEffect, useState } from "react";
import { Accessibility, Contrast, Type, X } from "lucide-react";

const CONTRAST_KEY = "im-a11y-contrast";
const TEXT_SIZE_KEY = "im-a11y-text-size";

function readBool(key: string) {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    const contrast = readBool(CONTRAST_KEY);
    const text = readBool(TEXT_SIZE_KEY);
    setHighContrast(contrast);
    setLargeText(text);
    document.documentElement.toggleAttribute("data-high-contrast", contrast);
    document.documentElement.toggleAttribute("data-large-text", text);
  }, []);

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.documentElement.toggleAttribute("data-high-contrast", next);
    try {
      localStorage.setItem(CONTRAST_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  };

  const toggleLargeText = () => {
    const next = !largeText;
    setLargeText(next);
    document.documentElement.toggleAttribute("data-large-text", next);
    try {
      localStorage.setItem(TEXT_SIZE_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Opções de acessibilidade"
          className="w-72 rounded-2xl bg-white border border-border shadow-2xl p-5"
          style={{ animation: "pop-in 0.25s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-brand-navy text-sm">Acessibilidade</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar opções de acessibilidade"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:bg-[var(--brand-sky)] hover:text-brand-navy transition-colors -mr-2"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={toggleContrast}
              aria-pressed={highContrast}
              className="w-full flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 min-h-[44px] text-left text-sm font-medium text-brand-navy hover:bg-[var(--brand-sky)] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Contrast size={18} />
                Alto contraste
              </span>
              <span
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  highContrast ? "bg-[var(--brand-teal)]" : "bg-border"
                }`}
              >
                <span
                  className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform"
                  style={{ transform: highContrast ? "translateX(18px)" : "translateX(2px)" }}
                />
              </span>
            </button>

            <button
              onClick={toggleLargeText}
              aria-pressed={largeText}
              className="w-full flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 min-h-[44px] text-left text-sm font-medium text-brand-navy hover:bg-[var(--brand-sky)] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Type size={18} />
                Aumentar texto
              </span>
              <span
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  largeText ? "bg-[var(--brand-teal)]" : "bg-border"
                }`}
              >
                <span
                  className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform"
                  style={{ transform: largeText ? "translateX(18px)" : "translateX(2px)" }}
                />
              </span>
            </button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            O site também é compatível com leitores de tela e totalmente navegável pelo
            teclado (use Tab para percorrer os links e botões).
          </p>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar opções de acessibilidade" : "Abrir opções de acessibilidade"}
        aria-expanded={open}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-navy text-white shadow-lg hover:bg-[var(--brand-blue)] hover:scale-110 transition-transform"
      >
        <Accessibility size={26} />
      </button>
    </div>
  );
}
