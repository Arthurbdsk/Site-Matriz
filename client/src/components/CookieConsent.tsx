import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import {
  getConsent,
  setConsent,
  loadGoogleAnalytics,
  OPEN_COOKIE_PREFS,
} from "@/lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
    if (!consent) {
      // Aparece com um pequeno atraso para uma entrada suave.
      const t = window.setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      }, 900);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    };
    window.addEventListener(OPEN_COOKIE_PREFS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS, reopen);
  }, []);

  const close = () => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), 400);
  };

  const accept = () => {
    setConsent("accepted");
    loadGoogleAnalytics();
    close();
  };

  const reject = () => {
    setConsent("rejected");
    close();
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-[70] w-[calc(100%-3rem)] max-w-md"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="relative rounded-2xl bg-white border border-border shadow-2xl p-6">
        <button
          onClick={reject}
          aria-label="Fechar aviso de cookies"
          className="absolute top-2 right-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:bg-[var(--brand-sky)] hover:text-brand-navy transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4">
          <div className="relative w-11 h-11 rounded-2xl bg-[var(--brand-sky)] text-brand-orange flex items-center justify-center shrink-0 pulse-ring">
            <Cookie size={22} className="relative z-10" />
          </div>
          <div>
            <h3 className="font-bold text-brand-navy">Nós usamos cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Utilizamos cookies para melhorar a sua experiência e entender como o site é
              usado. Você pode aceitar todos ou continuar apenas com os essenciais.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 rounded-full bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white text-sm font-semibold px-5 py-2.5 shine hover:-translate-y-0.5 transition-all"
          >
            Aceitar todos
          </button>
          <button
            onClick={reject}
            className="flex-1 rounded-full border border-border text-brand-navy hover:bg-[var(--brand-sky)] text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Apenas essenciais
          </button>
        </div>

        <a
          href="#"
          className="mt-3 block text-center text-xs text-muted-foreground hover:text-brand-blue transition-colors"
        >
          Política de Privacidade
        </a>
      </div>
    </div>
  );
}
