import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { openWhatsapp } from "@/data/site";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-28 bg-brand-sky">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-float-slow" />
          <div className="absolute top-40 -left-24 w-96 h-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />

          <div className="container relative">
            <Reveal className="max-w-3xl mx-auto text-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors mb-6"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Voltar para o início
              </Link>

              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 shadow-sm animate-pop-in">
                Blog do Instituto Matriz
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
                Conteúdo sobre neurodesenvolvimento, saúde mental e educação
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                Estamos preparando artigos escritos pela nossa equipe multidisciplinar
                para apoiar famílias, educadores e profissionais da área.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <Reveal scale className="max-w-2xl mx-auto text-center">
              <div className="relative w-20 h-20 mx-auto rounded-3xl bg-[var(--brand-sky)] text-brand-blue flex items-center justify-center mb-6 pulse-ring">
                <Newspaper size={34} className="relative z-10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Em breve, novos conteúdos por aqui
              </h2>
              <p className="text-foreground leading-relaxed mb-8">
                Enquanto o blog é publicado, fale diretamente com a nossa equipe pelo
                WhatsApp para tirar dúvidas sobre avaliações, terapias ou agendamento.
              </p>
              <button
                onClick={openWhatsapp}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white text-sm font-semibold px-6 py-3 shine hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} className="animate-bob" />
                Falar no WhatsApp
              </button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
      <AccessibilityWidget />
    </div>
  );
}
