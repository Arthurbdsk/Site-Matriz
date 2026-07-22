import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { navItems, openWhatsapp } from "@/data/site";
import AppLogo from "@/components/AppLogo";
import { useSectionNav } from "@/hooks/useSectionNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goToSection = useSectionNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    goToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 glass transition-shadow duration-300 ${
        scrolled ? "shadow-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Ir para o início"
        >
          <AppLogo size={44} variant="dark" loading="eager" className="[&_p]:hidden sm:[&_p]:block" />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-blue transition-colors rounded-md hover:bg-[var(--brand-sky)]"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--brand-teal)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id!)}
                className="group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-blue transition-colors rounded-md hover:bg-[var(--brand-sky)]"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--brand-teal)] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={openWhatsapp}
            className="hidden sm:inline-flex bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white gap-2 shine hover:-translate-y-0.5 transition-transform"
          >
            <MessageCircle size={18} className="animate-bob" />
            WhatsApp
          </Button>

          <button
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-[var(--brand-sky)] rounded-md transition-colors text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="relative block w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className="lg:hidden overflow-hidden border-t border-border bg-white transition-[grid-template-rows] duration-300 ease-out grid"
        style={{ gridTemplateRows: isMenuOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item, index) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground hover:text-brand-blue hover:bg-[var(--brand-sky)] rounded-md transition-all duration-300 min-h-[44px] flex items-center"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-12px)",
                    transitionDelay: isMenuOpen ? `${index * 0.04}s` : "0s",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id!)}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground hover:text-brand-blue hover:bg-[var(--brand-sky)] rounded-md transition-all duration-300 min-h-[44px]"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-12px)",
                    transitionDelay: isMenuOpen ? `${index * 0.04}s` : "0s",
                  }}
                >
                  {item.label}
                </button>
              ),
            )}
            <Button
              onClick={() => {
                openWhatsapp();
                setIsMenuOpen(false);
              }}
              className="w-full bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white mt-2 gap-2 shine"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
