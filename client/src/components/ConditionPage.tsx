import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/data/site";
import {
  buildMedicalWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/data/schema";

export interface ConditionQA {
  /** Heading phrased as a real question a parent would search. */
  question: string;
  /** First sentence(s) must answer the question directly before elaborating. */
  answer: string[];
}

export interface RelatedLink {
  label: string;
  path: string;
}

export interface ConditionPageProps {
  icon: LucideIcon;
  tint: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string;
  /** Short lead paragraph(s) shown right under the title, before the Q&A sections. */
  intro: string[];
  signs?: { title: string; items: string[] };
  qas: ConditionQA[];
  related: RelatedLink[];
}

export default function ConditionPage({
  icon: Icon,
  tint,
  eyebrow,
  title,
  metaTitle,
  metaDescription,
  path,
  intro,
  signs,
  qas,
  related,
}: ConditionPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqForSchema = qas.map((qa) => ({ q: qa.question, a: qa.answer.join(" ") }));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title={metaTitle}
        description={metaDescription}
        path={path}
        jsonLd={[
          buildMedicalWebPageSchema({
            title: metaTitle,
            description: metaDescription,
            path,
            aboutName: title,
          }),
          buildBreadcrumbSchema(title, path),
          buildFaqSchema(faqForSchema),
        ]}
      />
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="main-content" className="flex-1">
        <article>
          <section className="relative overflow-hidden py-16 md:py-20 bg-brand-sky">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-float-slow" />
            <div className="absolute top-40 -left-24 w-96 h-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />

            <div className="container relative">
              <Reveal className="max-w-3xl mx-auto text-center">
                <Link
                  href="/"
                  className="group mx-auto mb-6 flex w-fit items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Voltar para o início
                </Link>

                <div
                  className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5 pulse-ring"
                  style={{ backgroundColor: `${tint}1a`, color: tint }}
                >
                  <Icon size={30} className="relative z-10" />
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold mb-5 shadow-sm animate-pop-in" style={{ color: tint }}>
                  {eyebrow}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
                  {title}
                </h1>
                {intro.map((p, i) => (
                  <p
                    key={i}
                    className={`text-lg text-foreground leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </section>

          {signs && (
            <section className="py-16 md:py-20 bg-white">
              <div className="container">
                <Reveal className="max-w-3xl mx-auto" scale>
                  <div className="rounded-3xl bg-white border border-border p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">
                      {signs.title}
                    </h2>
                    <ul className="space-y-3">
                      {signs.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="shrink-0 mt-0.5"
                            style={{ color: tint }}
                          />
                          <span className="text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                      Esta lista é apenas informativa. O diagnóstico e a indicação de
                      tratamento devem sempre ser feitos por profissionais qualificados,
                      a partir de uma avaliação individualizada.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          )}

          <section className={`py-16 md:py-20 ${signs ? "bg-brand-sky" : "bg-white"}`}>
            <div className="container max-w-3xl mx-auto space-y-10">
              {qas.map((qa, index) => (
                <Reveal key={qa.question} delay={index * 0.05}>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    {qa.question}
                  </h2>
                  {qa.answer.map((p, i) => (
                    <p
                      key={i}
                      className={`text-foreground leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 bg-white">
            <div className="container">
              <Reveal scale>
                <div
                  className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-16 text-center animate-gradient"
                  style={{
                    background: `linear-gradient(120deg, ${tint}, var(--brand-teal), ${tint})`,
                  }}
                >
                  <div className="absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl animate-drift" />
                  <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-drift" />
                  <div className="relative">
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
                      Quer conversar com nossa equipe sobre {title}?
                    </h2>
                    <p className="text-white/85 text-base mt-4 max-w-xl mx-auto">
                      Fale pelo WhatsApp e agende uma avaliação com nossos especialistas.
                    </p>
                    <Button
                      onClick={openWhatsapp}
                      size="lg"
                      className="relative mt-7 bg-white text-brand-navy hover:bg-white/90 gap-2 h-12 px-7 text-base shine hover:-translate-y-0.5"
                    >
                      <MessageCircle size={20} className="animate-bob" />
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {related.length > 0 && (
            <section className="py-16 md:py-20 bg-brand-sky">
              <div className="container">
                <Reveal className="max-w-3xl mx-auto text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                    Conteúdos relacionados
                  </h2>
                </Reveal>
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="group flex items-center justify-between gap-3 rounded-2xl bg-white border border-border p-5 hover-lift"
                    >
                      <span className="font-semibold text-brand-navy">
                        {link.label}
                      </span>
                      <ArrowLeft
                        size={18}
                        className="rotate-180 text-brand-blue shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
      <CookieConsent />
      <AccessibilityWidget />
    </div>
  );
}
