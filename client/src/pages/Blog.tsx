import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Seo from "@/components/Seo";
import { openWhatsapp } from "@/data/site";
import { posts, postCategories } from "@/data/posts";
import { buildBlogSchema } from "@/data/schema";

export default function Blog() {
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visible = filter ? posts.filter((p) => p.category === filter) : posts;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title="Blog do Instituto Matriz | Neurodesenvolvimento, saúde mental e educação"
        description="Artigos sobre autismo, TDAH, regulação emocional, linguagem e rotina infantil, escritos pela equipe multidisciplinar do Instituto Matriz para famílias."
        path="/blog"
        jsonLd={buildBlogSchema(posts)}
      />
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden py-16 md:py-24 bg-brand-sky">
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

              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 shadow-sm animate-pop-in">
                Blog do Instituto Matriz
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
                Conteúdo sobre neurodesenvolvimento, saúde mental e educação
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                Artigos escritos pela nossa equipe multidisciplinar para apoiar famílias
                que convivem com autismo, TDAH, dificuldades de fala, sensibilidade
                sensorial e desafios do dia a dia.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="container">
            <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setFilter(null)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  filter === null
                    ? "bg-brand-navy text-white"
                    : "bg-[var(--brand-sky)] text-brand-navy hover:bg-[var(--brand-sky-2)]"
                }`}
              >
                Todos os temas
              </button>
              {postCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    filter === category
                      ? "bg-brand-navy text-white"
                      : "bg-[var(--brand-sky)] text-brand-navy hover:bg-[var(--brand-sky-2)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post, index) => (
                <Reveal key={post.slug} delay={(index % 3) * 0.06} scale>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 hover-lift"
                  >
                    <span
                      className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold text-white mb-4"
                      style={{ backgroundColor: post.tint }}
                    >
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-brand-navy leading-snug mb-3 transition-colors group-hover:text-brand-blue">
                      {post.title}
                    </h2>
                    <p className="text-sm text-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={13} />
                        {post.readingMinutes} min de leitura
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                        Ler artigo
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24 bg-white">
          <div className="container">
            <Reveal scale>
              <div className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-14 text-center animate-gradient bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-teal)] to-[var(--brand-blue)]">
                <div className="absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl animate-drift" />
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl mx-auto">
                    Precisa de orientação para o caso do seu filho?
                  </h2>
                  <p className="text-white/85 text-base mt-4 max-w-xl mx-auto">
                    Nossa equipe está em Barueri, SP, e pode ajudar com avaliação e
                    acompanhamento especializado.
                  </p>
                  <button
                    onClick={openWhatsapp}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-brand-navy hover:bg-white/90 shine hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={20} className="animate-bob" />
                    Falar no WhatsApp
                  </button>
                </div>
              </div>
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
