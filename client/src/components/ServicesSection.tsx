import {
  Brain,
  Stethoscope,
  ClipboardList,
  Dumbbell,
  BookOpen,
  Check,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Brain,
    bg: "linear-gradient(150deg, #1d4ed8, #1a56db)",
    title: "Saúde Mental e Neurodesenvolvimento",
    items: [
      "Neuropsicologia",
      "Psicologia",
      "Análise do Comportamento Aplicada (ABA)",
      "Modelo Denver de Intervenção Precoce (ESDM)",
      "Terapia Cognitivo-Comportamental (TCC)",
      "Reabilitação Cognitiva",
      "Neuromodulação Não-Invasiva",
    ],
  },
  {
    icon: Stethoscope,
    bg: "linear-gradient(150deg, #10b981, #059669)",
    title: "Terapias Integradas",
    items: [
      "Fonoaudiologia",
      "Terapia Ocupacional (Integração Sensorial)",
      "Fisioterapia Neurofuncional e Ortopédica",
      "Psicomotricidade",
      "Arteterapia",
      "Musicoterapia",
      "Terapia Assistida por Equinos",
      "Neuropedagogia",
    ],
  },
  {
    icon: ClipboardList,
    bg: "linear-gradient(150deg, #f97316, #ea580c)",
    title: "Avaliações Especializadas",
    items: [
      "Avaliação Neuropsicológica",
      "Avaliação Interdisciplinar",
      "Avaliação Neuropedagógica",
    ],
  },
  {
    icon: Dumbbell,
    bg: "linear-gradient(150deg, #16267a, #1d4ed8)",
    title: "Saúde Física e Nutricional",
    items: ["Condicionamento Físico", "Nutrição"],
  },
  {
    icon: BookOpen,
    bg: "linear-gradient(150deg, #0ea5a4, #10b981)",
    title: "Educação e Aprendizagem",
    items: [
      "Reforço Escolar",
      "Tutoria",
      "Acompanhamento Pedagógico",
      "Psicopedagogia",
      "Alfabetização e Letramento",
      "Preparação para Vestibular",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-10 -right-24 w-80 h-80 rounded-full bg-[var(--brand-teal)]/5 blur-3xl animate-drift" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-[var(--brand-orange)]/5 blur-3xl animate-drift" />

      <div className="container relative">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-sky)] px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 animate-pop-in">
            Cuidado completo em um só lugar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            O Instituto Matriz atua em todo o espectro do neurodesenvolvimento, promovendo
            avaliação, acompanhamento e intervenção de forma integrada.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08} scale>
                <div
                  className="group relative h-full rounded-3xl p-8 text-white overflow-hidden hover-lift shine"
                  style={{ background: service.bg }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-5 leading-tight">
                      {service.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-white/95"
                        >
                          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/25 shrink-0">
                            <Check size={12} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
