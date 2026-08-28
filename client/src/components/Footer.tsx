import { Instagram, Mail, Phone, MapPin, MessageCircle, Sparkles, Clock } from "lucide-react";
import { Link } from "wouter";
import { navItems, site, openWhatsapp } from "@/data/site";
import Reveal from "@/components/Reveal";
import AppLogo from "@/components/AppLogo";
import { openCookiePreferences } from "@/lib/analytics";
import { useSectionNav } from "@/hooks/useSectionNav";
import { conditions } from "@/data/conditions";
import { posts } from "@/data/posts";

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
            <div className="mb-4 transition-transform duration-300 hover:-translate-y-0.5">
              <AppLogo size={48} variant="light" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Centro de referência em terapias multidisciplinares, promovendo mais
              qualidade de vida para TEA, TDAH, Síndrome de Down e demais Transtornos de
              Neurodesenvolvimento. Atendemos famílias de Barueri, Alphaville e região.
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
                      className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.id!)}
                      className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <h4 className="font-bold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm">
              {conditions.map((condition) => (
                <li key={condition.slug}>
                  <Link
                    href={condition.path}
                    className="inline-block text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {condition.navLabel}
                  </Link>
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
                  <br />
                  {site.address.cep}
                </span>
              </div>
              <div className="group flex items-start gap-2 transition-transform duration-200 hover:translate-x-1">
                <Clock size={16} className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span>
                  {site.hours.weekdays}
                  <br />
                  {site.hours.saturday}
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

        <Reveal delay={0.22}>
          <div className="border-t border-white/15 pt-8 pb-8 mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
              <h4 className="font-bold">Do nosso blog</h4>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                Ver todos os artigos
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              {posts.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

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
                <span>Desenvolvido por</span>
                <Sparkles
                  size={14}
                  className="text-[var(--brand-orange)] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                />
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
