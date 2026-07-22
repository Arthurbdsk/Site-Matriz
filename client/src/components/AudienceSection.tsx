import { Baby, Users2, UserRound, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import ConditionsPanel from "@/components/ConditionsPanel";

const audiences = [
  {
    icon: Baby,
    bg: "linear-gradient(150deg, #1d4ed8, #1a56db)",
    title: "Crianças",
    description:
      "Desenvolvimento integral com foco em aprendizagem, comportamento e habilidades sociais.",
  },
  {
    icon: Users2,
    bg: "linear-gradient(150deg, #10b981, #059669)",
    title: "Adolescentes",
    description:
      "Acompanhamento durante transições importantes, saúde mental e preparação acadêmica.",
  },
  {
    icon: UserRound,
    bg: "linear-gradient(150deg, #f97316, #ea580c)",
    title: "Adultos",
    description:
      "Desenvolvimento de habilidades funcionais, atividades da vida diária e qualidade de vida.",
  },
];

function CountUp({ end, suffix }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { rootMargin: "-60px 0px", threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 md:py-28 bg-brand-sky">
      <div className="container">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Público Atendido
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Atendemos crianças, adolescentes e adultos com uma abordagem personalizada e
            baseada em evidências científicas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Reveal key={audience.title} delay={index * 0.1} scale>
                <div
                  className="group relative h-full rounded-3xl p-8 text-white overflow-hidden hover-lift shine"
                  style={{ background: audience.bg }}
                >
                  <div className="absolute -bottom-12 -right-8 w-44 h-44 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Reveal>
            <div className="rounded-3xl p-8 md:p-10 text-white shadow-lg animate-gradient bg-[linear-gradient(120deg,var(--brand-blue),#1a56db,var(--brand-blue))] hover-lift">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  Anos de Experiência
                </span>
                <TrendingUp className="text-white/80 animate-bob" size={22} />
              </div>
              <p className="text-6xl md:text-7xl font-bold my-4">
                <CountUp end={20} suffix="+" />
              </p>
              <p className="text-white/85">
                Atuando em saúde, educação e neurodesenvolvimento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl p-8 md:p-10 text-white shadow-lg animate-gradient bg-[linear-gradient(120deg,var(--brand-teal),#059669,var(--brand-teal))] hover-lift">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  Famílias Atendidas
                </span>
                <TrendingUp className="text-white/80 animate-bob" size={22} />
              </div>
              <p className="text-6xl md:text-7xl font-bold my-4">
                <CountUp end={1000} suffix="+" />
              </p>
              <p className="text-white/85">
                Com abordagem baseada em evidências científicas.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Conditions */}
        <Reveal className="max-w-3xl mx-auto text-center mb-12" scale>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 shadow-sm animate-pop-in">
            O que acompanhamos
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Condições Atendidas
          </h3>
          <p className="text-foreground leading-relaxed mt-4">
            Atuamos em um amplo espectro de condições, sempre com avaliação criteriosa e
            plano de intervenção individualizado.
          </p>
        </Reveal>

        <ConditionsPanel />
      </div>
    </section>
  );
}
