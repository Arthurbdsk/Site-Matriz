import { useEffect } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import NossoEspacoSection from "@/components/NossoEspacoSection";
import ServicesSection from "@/components/ServicesSection";
import AudienceSection from "@/components/AudienceSection";
import AulasSection from "@/components/AulasSection";
import FaqSection, { faqs } from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Seo from "@/components/Seo";
import { MessageCircle } from "lucide-react";
import { openWhatsapp } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";
import { PENDING_SCROLL_KEY } from "@/hooks/useSectionNav";
import {
  medicalClinicSchema,
  organizationSchema,
  buildFaqSchema,
} from "@/data/schema";

export default function Home() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleCtaClick = () => handleNavClick("contact");

  // Picks up a section id left by useSectionNav when arriving here from
  // another page (e.g. clicking "Quem Somos" while on /blog).
  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_SCROLL_KEY);
    if (pending) {
      sessionStorage.removeItem(PENDING_SCROLL_KEY);
      const t = window.setTimeout(() => scrollToSection(pending), 60);
      return () => window.clearTimeout(t);
    }
  }, []);

  return (
    <>
      <Seo
        title="Clínica de Autismo e TDAH em Barueri e Alphaville | Instituto Matriz"
        description="Clínica multidisciplinar em Barueri (bairro Alphaville), SP, especializada em autismo (TEA), TDAH, TOD e neurodesenvolvimento infantil. Avaliação, diagnóstico e terapias com mais de 20 anos de experiência e mais de 1.000 famílias acompanhadas."
        path="/"
        image="https://www.institutomatriz.com.br/images/logo.png"
        jsonLd={[medicalClinicSchema, organizationSchema, buildFaqSchema(faqs)]}
      />

      <div className="min-h-screen flex flex-col bg-white">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          <HeroSection />
          <CredentialsSection />
          <AboutSection />
          <DifferentialsSection />
          <ProcessSection />
          <NossoEspacoSection />
          <ServicesSection />
          <AudienceSection />
          <AulasSection />
          <FaqSection />
          <CtaBand onSchedule={handleCtaClick} />
          <ContactSection />
        </main>
        <Footer />

        <button
          onClick={openWhatsapp}
          aria-label="Falar no WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--brand-teal)] text-white shadow-lg hover:bg-[var(--brand-teal-strong)] hover:scale-110 transition-transform animate-bob"
        >
          <span className="absolute inset-0 rounded-full bg-[var(--brand-teal)] opacity-40 animate-ping" />
          <MessageCircle size={26} className="relative z-10" />
        </button>

        <CookieConsent />
        <AccessibilityWidget />
      </div>
    </>
  );
}
