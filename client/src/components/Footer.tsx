import { Instagram, Mail, Phone, MapPin, MessageCircle, Heart } from "lucide-react";
import { Link } from "wouter";
import { navItems, site, openWhatsapp } from "@/data/site";
import Reveal from "@/components/Reveal";
import AppLogo from "@/components/AppLogo";
import { openCookiePreferences } from "@/lib/analytics";
import { useSectionNav } from "@/hooks/useSectionNav";

const services = [
  "Neuropsicologia e Psicologia",
  "Fonoaudiologia",
  "Terapia Ocupacional e Fisioterapia",
  "Terapias Integradas",
  "Educação e Aprendizagem",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = useSectionNav();

  return (
    <footer className="relative bg-brand-navy text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-drift" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[var(--brand-blue)]/20 blur-3xl animate-drift" />

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <Reveal>
            <div className="mb-4 w-fit transition-transform duration-300 hover:-translate-y-0.5">
              <AppLogo size={48} variant="light" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Centro de referência em terapias multidisciplinares, promovendo mais
              qualidade de vida para TEA, TDAH, Síndrome de Down e demais Transtornos de
              Neurodesenvolvimento.
            </p>
            <button
              onClick={openWhatsapp}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand-teal)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--brand-teal-strong)] shine hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={16} className="animate-bob" />
              Falar no WhatsApp
            </button>
          </Reveal>

          <Reveal delay={0.06}>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--brand-teal)] scale-0 transition-transform duration-200 group-hover:scale-100" />
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.id!)}
                      className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--brand-teal)] scale-0 transition-transform duration-200 group-hover:scale-100" />
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {services.map((service) => (
                <li
                  key={service}
                  className="transition-transform duration-200 hover:translate-x-1 hover:text-white/90"
                >
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="group flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <Phone size={16} className="transition-transform duration-300 group-hover:scale-125" />
                <span>{site.phone}</span>
              </div>
              <div className="group flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <Mail size={16} className="transition-transform duration-300 group-hover:scale-125" />
                <span className="break-all">{site.email}</span>
              </div>
              <div className="group flex items-start gap-2 transition-transform duration-200 hover:translate-x-1">
                <MapPin size={16} className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span>
                  {site.address.line1}, {site.address.line2}
                </span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/institutomatriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--brand-teal)] hover:text-white hover:-translate-y-1 hover:rotate-6 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="border-t border-white/15 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
              <p>
                © {currentYear} Instituto Matriz de Neurodesenvolvimento. Todos os
                direitos reservados.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <button
                  onClick={openCookiePreferences}
                  className="hover:text-white transition-colors"
                >
                  Preferências de cookies
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
              <a
                href="https://www.instagram.com/socialy_webdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span>Feito com</span>
                <Heart
                  size={14}
                  className="text-[var(--brand-orange)] fill-[var(--brand-orange)] transition-transform duration-300 group-hover:scale-125"
                />
                <span>por</span>
                <span className="font-semibold text-white/80 group-hover:text-white inline-flex items-center gap-1">
                  <Instagram size={14} className="transition-transform duration-300 group-hover:rotate-6" />
                  Socialy
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
