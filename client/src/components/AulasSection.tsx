import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Monitor,
  School,
  Check,
  BookOpen,
  GraduationCap,
  PenTool,
  Trophy,
  MessageCircle,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import AprovadosCarousel from "@/components/AprovadosCarousel";
import { openWhatsapp } from "@/data/site";

const formats = [
  {
    icon: Monitor,
    bg: "linear-gradient(150deg, #1d4ed8, #1a56db)",
    title: "Aulas Online",
    description:
      "Flexibilidade e comodidade. Aulas ao vivo por plataforma segura, com suporte técnico completo.",
    features: [
      "Horários flexíveis",
      "Sem deslocamento",
      "Acesso de qualquer lugar",
      "Gravação das aulas",
    ],
  },
  {
    icon: School,
    bg: "linear-gradient(150deg, #10b981, #059669)",
    title: "Aulas Presenciais",
    description:
      "Atendimento personalizado em nosso espaço especializado, com recursos pedagógicos avançados.",
    features: [
      "Ambiente dedicado",
      "Interação direta",
      "Recursos pedagógicos",
      "Acompanhamento integral",
    ],
  },
];

const disciplines = [
  {
    icon: BookOpen,
    title: "Ensino Fundamental",
    description: "Reforço escolar especializado com abordagem personalizada.",
  },
  {
    icon: GraduationCap,
    title: "Ensino Médio",
    description: "Preparação acadêmica com foco em desempenho e aprendizagem.",
  },
  {
    icon: Trophy,
    title: "Preparação para Vestibular",
    description: "Reforço intensivo e revisão de conteúdos para ENEM e vestibulares.",
  },
  {
    icon: PenTool,
    title: "Alfabetização e Letramento",
    description: "Desenvolvimento de competências fundamentais de leitura e escrita.",
  },
];

export default function AulasSection() {
  return (
    <section id="aulas" className="py-20 md:py-28 bg-white">
      <div className="container">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Aulas Particulares
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Reforço escolar especializado para todos os níveis. Do ensino fundamental até a
            faculdade, com abordagem personalizada e baseada em evidências.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <Reveal key={format.title} delay={index * 0.12} scale>
                <div
                  className="group relative h-full rounded-3xl p-8 text-white overflow-hidden hover-lift shine"
                  style={{ background: format.bg }}
                >
                  <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {format.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-5">
                      {format.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {format.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/95"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25 shrink-0">
                            <Check size={12} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Todas as Disciplinas
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <Reveal key={discipline.title} delay={index * 0.06} scale>
                <Card className="group h-full p-6 text-center border-border hover-lift shine">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--brand-sky)] text-brand-blue flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">{discipline.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {discipline.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Aprovados */}
        <Reveal scale>
          <div className="relative rounded-3xl bg-brand-sky border border-border p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[var(--brand-teal)]/15 blur-3xl animate-drift" />
            <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-[var(--brand-blue)]/15 blur-3xl animate-drift" />

            <div className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-teal border border-border animate-pop-in">
              <Trophy size={16} className="animate-bob" />
              Nossos Aprovados
            </div>
            <AprovadosCarousel />
            <p className="relative mt-8 text-foreground">
              Quer também conquistar sua aprovação? Converse conosco.
            </p>
            <Button
              onClick={openWhatsapp}
              size="lg"
              className="relative mt-5 bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white gap-2 shine hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} className="animate-bob" />
              Falar no WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
