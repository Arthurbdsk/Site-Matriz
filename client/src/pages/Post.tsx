import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/data/site";
import { getPostBySlug } from "@/data/posts";
import { buildArticleSchema, buildFaqSchema, buildPostBreadcrumbSchema } from "@/data/schema";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  // Pillar articles carry an explicit FAQ block; the shorter ones expose their
  // question-shaped headings instead, so both kinds emit FAQPage schema.
  const faqForSchema =
    post.faq && post.faq.length > 0
      ? post.faq
      : post.sections.map((s) => ({ q: s.heading, a: s.paragraphs.join(" ") }));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        jsonLd={[
          buildArticleSchema(post),
          buildPostBreadcrumbSchema(post.title, `/blog/${post.slug}`),
          buildFaqSchema(faqForSchema),
        ]}
      />
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="main-content" className="flex-1">
        <article>
          <header className="relative overflow-hidden py-16 md:py-20 bg-brand-sky">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-float-slow" />
            <div className="absolute top-40 -left-24 w-96 h-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />

            <div className="container relative">
              <Reveal className="max-w-3xl mx-auto text-center">
                <Link
                  href="/blog"
                  className="group mx-auto mb-6 flex w-fit items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Voltar para o blog
                </Link>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                  <span
                    className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white animate-pop-in"
                    style={{ backgroundColor: post.tint }}
                  >
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {post.readingMinutes} min de leitura
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                  {post.title}
                </h1>

                {post.intro.map((p, i) => (
                  <p
                    key={i}
                    className={`text-lg text-foreground leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </header>

          {post.stats && post.stats.length > 0 && (
            <div className="pt-12 md:pt-16 bg-white">
              <div className="container max-w-3xl mx-auto">
                <Reveal scale>
                  <section aria-label="Dados sobre o tema">
                    <h2 className="text-xl font-bold text-brand-navy mb-5">
                      O tema em números
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {post.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-border bg-brand-sky p-5"
                        >
                          <p
                            className="text-3xl font-bold leading-none mb-2"
                            style={{ color: post.tint }}
                          >
                            {stat.value}
                          </p>
                          <p className="text-foreground leading-snug mb-2">{stat.label}</p>
                          <p className="text-xs text-muted-foreground leading-snug">
                            Fonte: {stat.source}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>
              </div>
            </div>
          )}

          <div className="py-16 md:py-20 bg-white">
            <div className="container max-w-3xl mx-auto space-y-12">
              {post.sections.map((section, index) => (
                <Reveal key={section.heading} delay={index * 0.04}>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-snug">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className={`text-foreground leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-5 space-y-3 rounded-2xl border border-border bg-brand-sky p-6">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="shrink-0 mt-0.5"
                              style={{ color: post.tint }}
                            />
                            <span className="text-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}

              {post.faq && post.faq.length > 0 && (
                <Reveal>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 leading-snug">
                      Perguntas frequentes
                    </h2>
                    <dl className="space-y-5">
                      {post.faq.map((item) => (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-border bg-brand-sky p-6"
                        >
                          <dt className="font-bold text-brand-navy leading-snug mb-2">
                            {item.q}
                          </dt>
                          <dd className="text-foreground leading-relaxed">{item.a}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </Reveal>
              )}

              {post.references && post.references.length > 0 && (
                <Reveal>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-snug">
                      Referências
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Este conteúdo tem caráter informativo e não substitui avaliação
                      profissional individualizada.
                    </p>
                    <ol className="space-y-3 list-decimal pl-5">
                      {post.references.map((ref) => (
                        <li key={ref.title} className="text-sm text-muted-foreground leading-relaxed">
                          {ref.source}. <cite className="not-italic font-medium text-foreground">{ref.title}</cite>. {ref.publication}, {ref.year}.
                        </li>
                      ))}
                    </ol>
                  </section>
                </Reveal>
              )}
            </div>
          </div>

          <div className="pb-16 md:pb-20 bg-white">
            <div className="container">
              <Reveal scale>
                <div
                  className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-14 text-center animate-gradient"
                  style={{
                    background: `linear-gradient(120deg, ${post.tint}, var(--brand-teal), ${post.tint})`,
                  }}
                >
                  <div className="absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl animate-drift" />
                  <div className="relative">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl mx-auto">
                      Tem dúvidas sobre o desenvolvimento do seu filho?
                    </h2>
                    <p className="text-white/85 text-base mt-4 max-w-xl mx-auto">
                      Nossa equipe multidisciplinar em Barueri pode ajudar. Agende uma
                      conversa inicial.
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
          </div>

          {post.related.length > 0 && (
            <section className="py-16 md:py-20 bg-brand-sky">
              <div className="container">
                <Reveal className="max-w-3xl mx-auto text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                    Continue lendo
                  </h2>
                </Reveal>
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.related.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="group flex items-center justify-between gap-3 rounded-2xl bg-white border border-border p-5 hover-lift"
                    >
                      <span className="font-semibold text-brand-navy leading-snug">
                        {link.label}
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-brand-blue shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
