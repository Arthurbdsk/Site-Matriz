import { PhoneCall, ClipboardList, Route, LineChart } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: PhoneCall,
    tint: "#1d4ed8",
    title: "Primeiro contato",
    description:
      "Você fala com a nossa equipe, conta a sua necessidade e agendamos o acolhimento inicial.",
  },
  {
    icon: ClipboardList,
    tint: "#10b981",
    title: "Avaliação especializada",
    description:
      "Realizamos avaliação neuropsicológica, interdisciplinar ou neuropedagógica conforme o caso.",
  },
  {
    icon: Route,
    tint: "#f97316",
    title: "Plano individualizado",
    description:
      "Montamos um plano de intervenção personalizado, com objetivos claros e mensuráveis.",
  },
  {
    icon: LineChart,
    tint: "#16267a",
    title: "Acompanhamento contínuo",
    description:
      "Executamos, medimos resultados e ajustamos o percurso junto com a família.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-[var(--brand-blue)]/5 blur-3xl animate-drift" />

      <div className="container relative">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Um percurso claro, do primeiro contato ao acompanhamento contínuo.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-0.5 overflow-hidden rounded-full bg-border">
            <div className="h-full w-full animate-gradient bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-teal),var(--brand-orange),var(--brand-blue))] bg-[length:200%_100%]" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.12} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative group">
                    <div
                      className="w-[76px] h-[76px] rounded-2xl shadow-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: step.tint }}
                    >
                      <Icon size={30} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-sm font-bold flex items-center justify-center shadow border border-border animate-pop-in"
                      style={{ color: step.tint }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mt-5 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
