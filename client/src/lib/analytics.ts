/**
 * Consentimento de cookies + Google Analytics.
 *
 * COMO ATIVAR O GOOGLE ANALYTICS:
 * 1. Crie uma propriedade GA4 e copie o ID de medição (formato "G-XXXXXXXXXX").
 * 2. Cole o ID em GA_MEASUREMENT_ID abaixo.
 * O Analytics só carrega DEPOIS que o usuário aceitar os cookies.
 */
export const GA_MEASUREMENT_ID = ""; // ex.: "G-XXXXXXXXXX"

export const CONSENT_KEY = "im-cookie-consent";
export type ConsentValue = "accepted" | "rejected";

export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadGoogleAnalytics() {
  if (loaded) return;
  if (!GA_MEASUREMENT_ID) {
    // Nenhum ID configurado ainda; nada a carregar.
    return;
  }
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

/** Custom event used by the footer link to reopen the cookie preferences. */
export const OPEN_COOKIE_PREFS = "open-cookie-preferences";

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFS));
}
