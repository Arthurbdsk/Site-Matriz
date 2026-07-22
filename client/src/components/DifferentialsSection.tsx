import {
  BrainCircuit,
  Users,
  ClipboardCheck,
  HeartHandshake,
  Microscope,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const differentials = [
  {
    icon: BrainCircuit,
    tint: "#1d4ed8",
    title: "Neurociência aplicada",
    description:
      "Intervenções fundamentadas em evidências científicas e no funcionamento real do cérebro.",
  },
  {
    icon: Users,
    tint: "#10b981",
    title: "Equipe interdisciplinar",
    description:
      "Saúde, educação e terapias especializadas conversando em um único plano de cuidado.",
  },
  {
    icon: ClipboardCheck,
    tint: "#f97316",
    title: "Plano individualizado",
    description:
      "Cada avaliação e cada programa é desenhado para a história e o ritmo da pessoa.",
  },
  {
    icon: HeartHandshake,
    tint: "#10b981",
    title: "Cuidado humano",
    description:
      "Acolhimento verdadeiro, respeito à singularidade e parceria com a família.",
  },
  {
    icon: Microscope,
    tint: "#1d4ed8",
    title: "Avaliação criteriosa",
    description:
      "Diagnóstico e acompanhamento com instrumentos validados e mensuração de resultados.",
  },
  {
    icon: Sparkles,
    tint: "#f97316",
    title: "Do início à autonomia",
    description:
      "Acompanhamento contínuo de crianças, adolescentes e adultos em cada fase.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] px-6 py-16 md:px-14 md:py-20 bg-[linear-gradient(150deg,#16267a,#1d4ed8)]">
          <div className="absolute -top-20 right-6 w-72 h-72 rounded-full bg-[var(--brand-teal)]/25 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-[var(--brand-orange)]/20 blur-3xl animate-drift" />

          <Reveal className="relative max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white mb-5 animate-pop-in">
              Por que o Instituto Matriz
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O Diferencial do Instituto Matriz
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              Neurociência, excelência científica e cuidado humano em cada atendimento,
              para crianças, adolescentes e adultos.
            </p>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07} scale>
                  <div className="group h-full rounded-2xl bg-white p-7 hover-lift shine">
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 pulse-ring transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: `${item.tint}1a`, color: item.tint }}
                    >
                      <Icon size={26} className="relative z-10" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
