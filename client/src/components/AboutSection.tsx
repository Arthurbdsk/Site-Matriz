import { Card } from "@/components/ui/card";
import {
  Brain,
  Heart,
  Users,
  Award,
  Lightbulb,
  Target,
  GraduationCap,
  Sparkles,
  Quote,
  Compass,
  Eye,
  HeartHandshake,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: Lightbulb,
    tint: "#1d4ed8",
    title: "Ciência Aplicada",
    description: "Práticas e intervenções baseadas em evidências e dados avaliativos.",
  },
  {
    icon: Heart,
    tint: "#f97316",
    title: "Humanidade",
    description: "Cada pessoa é única, respeitada integralmente em sua singularidade.",
  },
  {
    icon: Users,
    tint: "#10b981",
    title: "Interdisciplinaridade",
    description: "Integração real entre saúde, educação e terapias especializadas.",
  },
  {
    icon: Award,
    tint: "#1d4ed8",
    title: "Excelência",
    description: "Equipe qualificada, atualização contínua e práticas de alto padrão técnico.",
  },
  {
    icon: Target,
    tint: "#10b981",
    title: "Individualização",
    description: "Intervenções planejadas de forma personalizada, respeitando ritmo e contexto.",
  },
  {
    icon: Brain,
    tint: "#f97316",
    title: "Ética e Responsabilidade",
    description: "Conduta profissional rigorosa em todas as ações.",
  },
];

const specializations = [
  {
    title: "Neurociência",
    description:
      "Especialista em Transtornos de Neurodesenvolvimento pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.",
  },
  {
    title: "Saúde Mental",
    description:
      "Especialista em Psiquiatria e Saúde Mental da Infância e Adolescência pelo Child Behavior Institute of Miami.",
  },
  {
    title: "Licenciatura",
    description:
      "Graduação em Pedagogia pela Faculdade de Educação da Universidade de São Paulo.",
  },
  {
    title: "Consultoria",
    description:
      "Palestrante, consultora educacional e atuação em orientação parental em saúde mental e neurodesenvolvimento.",
  },
];

const teamPillars = [
  {
    icon: Award,
    title: "Renomados",
    description: "Formação nas mais prestigiadas universidades da América Latina.",
  },
  {
    icon: Sparkles,
    title: "Especialistas",
    description: "Profissionais com expertise em suas respectivas áreas de atuação.",
  },
  {
    icon: Heart,
    title: "Dedicados",
    description: "Comprometidos com o desenvolvimento integral de cada paciente.",
  },
];

const pillars = [
  {
    icon: Compass,
    tint: "#1d4ed8",
    title: "Missão",
    text: "Proporcionar desenvolvimento humano integral por meio da integração de ciência, saúde mental, educação e terapias especializadas.",
  },
  {
    icon: Eye,
    tint: "#10b981",
    title: "Visão",
    text: "Ser referência nacional e internacional em intervenções de neurodesenvolvimento, saúde mental e educação.",
  },
  {
    icon: HeartHandshake,
    tint: "#f97316",
    title: "Compromisso",
    text: "Cada pessoa é respeitada em sua singularidade, história e tempo. Aprender é processo, não produto.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 -right-24 w-80 h-80 rounded-full bg-[var(--brand-blue)]/5 blur-3xl animate-drift" />
      <div className="absolute bottom-1/3 -left-24 w-80 h-80 rounded-full bg-[var(--brand-teal)]/5 blur-3xl animate-drift" />
      <div className="container relative">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            O Instituto Matriz de Neurodesenvolvimento é um centro especializado em saúde,
            educação e desenvolvimento humano, com atuação interdisciplinar e baseada em
            evidências científicas.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Com mais de <strong className="text-brand-navy">20 anos de experiência</strong>,
            o Instituto Matriz é a consolidação de uma prática madura, ética e responsável,
            tendo acompanhado mais de{" "}
            <strong className="text-brand-navy">1.000 famílias</strong>, inclusive em
            projetos internacionais.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.06}>
                <Card className="group h-full p-6 hover-lift shine border-border">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: `${value.tint}1a`, color: value.tint }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Founder */}
        <Reveal className="mb-20" scale>
          <div className="rounded-3xl bg-brand-sky border border-border overflow-hidden hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="group relative min-h-[520px] lg:min-h-[640px] overflow-hidden bg-brand-navy">
                <img
                  src="/images/hero-michelle.jpg"
                  alt="Michelle Bedeschi, fundadora e diretora do Instituto Matriz"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-brand-navy/90 backdrop-blur-sm px-8 py-6">
                  <h3 className="text-2xl font-bold text-white">Michelle Bedeschi</h3>
                  <p className="text-white/85 text-sm mt-1">Fundadora e Diretora</p>
                  <p className="text-white/75 text-sm">
                    Especialista em Neurociência e Neuropsicopedagoga
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-foreground leading-relaxed">
                  À frente do Instituto Matriz, Michelle Bedeschi alia rigor científico a
                  uma abordagem humana e acolhedora, garantindo que cada avaliação,
                  intervenção e programa seja planejado de forma individualizada.
                </p>

                <div className="mt-6 flex gap-4 rounded-2xl bg-white p-5 border border-border hover-lift">
                  <Quote className="text-brand-teal shrink-0 animate-bob" size={28} />
                  <p className="text-brand-navy font-medium leading-relaxed italic">
                    Cada pessoa é única. Nosso compromisso é compreender sua história e
                    potencializar seu desenvolvimento de forma completa e integrada.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specializations.map((spec) => (
                    <Card
                      key={spec.title}
                      className="group flex gap-3 p-4 border-border hover-lift shine"
                    >
                      <GraduationCap
                        className="text-brand-blue shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold text-brand-navy text-sm">
                          {spec.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {spec.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Membro da Sociedade Brasileira de Neurociências e Comportamento e
                  colaboradora da Sociedade Brasileira de Neuropsicopedagogia.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Team */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Nossa Equipe
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            O Instituto Matriz é composto por profissionais de alto nível, selecionados por
            critérios rigorosos de excelência técnica, ética profissional e alinhamento
            científico.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {teamPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.08} scale>
                <Card className="group h-full p-8 text-center hover-lift shine border-border">
                  <div className="relative w-14 h-14 mx-auto rounded-2xl bg-[var(--brand-sky)] text-brand-teal flex items-center justify-center mb-4 pulse-ring transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={26} className="relative z-10" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Mission / Vision / Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14 border-t border-border">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.08} scale>
                <Card className="group h-full p-8 text-center hover-lift shine border-border">
                  <div
                    className="relative w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 pulse-ring transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ backgroundColor: `${pillar.tint}1a`, color: pillar.tint }}
                  >
                    <Icon size={26} className="relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
