import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  Award,
  Users,
  HeartHandshake,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { openWhatsapp } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";

const quickStats = [
  { icon: Award, label: "20+ anos de experiência", tint: "#1d4ed8" },
  { icon: Users, label: "1.000+ famílias atendidas", tint: "#f97316" },
  { icon: HeartHandshake, label: "Atendimento humanizado", tint: "#10b981" },
];

const paths = [
  {
    icon: GraduationCap,
    bg: "linear-gradient(150deg, #1d4ed8, #1a56db)",
    title: "Aulas Particulares e Reforço Escolar",
    description:
      "Apoio pedagógico personalizado para destravar o potencial de aprendizado. Do ensino fundamental à faculdade, com abordagem baseada em evidências.",
    button: "Quero Aprender",
    target: "aulas",
  },
  {
    icon: HeartPulse,
    bg: "linear-gradient(150deg, #10b981, #059669)",
    title: "Terapias Integradas e Acolhimento",
    description:
      "Cuidado completo e multidisciplinar para a saúde da mente e do corpo. Neuropsicologia, fonoaudiologia, terapia ocupacional e muito mais.",
    button: "Quero me Cuidar",
    target: "services",
  },
];

export default function HeroSection() {
  const scrollTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-float-slow" />
      <div className="absolute top-40 -left-24 w-96 h-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--brand-orange)]/10 blur-3xl animate-drift" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-16">
        <div className="max-w-2xl text-left shrink-0">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-navy shadow-sm hover-lift">
              <span className="relative w-2 h-2 rounded-full bg-[var(--brand-teal)] pulse-ring" />
              Clínica Multidisciplinar
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.08] text-brand-navy">
              Dê o primeiro passo na evolução de{" "}
              <span className="brand-gradient-text">quem você ama</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Centro especializado em saúde, educação e neurodesenvolvimento. Mais de 20
              anos de experiência e mais de 1.000 famílias acompanhadas com abordagem
              interdisciplinar baseada em evidências científicas.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={openWhatsapp}
                size="lg"
                className="bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white gap-2 text-base h-12 px-7 shine hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <MessageCircle size={20} className="animate-bob" />
                Falar no WhatsApp
              </Button>
              <Button
                onClick={() => scrollTo("about")}
                size="lg"
                className="group bg-brand-navy hover:bg-[var(--brand-blue)] text-white gap-2 text-base h-12 px-7 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Saiba mais
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {quickStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <span
                    key={stat.label}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/70 border border-border px-4 py-2 text-sm font-medium text-brand-navy shadow-sm hover-lift"
                  >
                    <Icon
                      size={16}
                      style={{ color: stat.tint }}
                      className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                    />
                    {stat.label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>

          <div className="hidden xl:flex flex-1 items-center justify-center">
            <img
              src="/images/logo-transparente.png"
              alt=""
              aria-hidden="true"
              loading="eager"
              className="w-full max-w-[1400px] pointer-events-none select-none animate-float-slow"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={0.35 + index * 0.12} scale>
                <div
                  className="group relative h-full rounded-3xl p-8 text-white overflow-hidden flex flex-col hover-lift shine"
                  style={{ background: path.bg }}
                >
                  <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed flex-1">
                      {path.description}
                    </p>
                    <button
                      onClick={() => scrollTo(path.target)}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-transform group-hover:scale-105"
                    >
                      {path.button}
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-brand-blue transition-colors"
            aria-label="Rolar para saber mais"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Saiba mais
            </span>
            <ChevronDown size={22} className="animate-scroll-cue" />
          </button>
        </div>
      </div>
    </section>
  );
}
