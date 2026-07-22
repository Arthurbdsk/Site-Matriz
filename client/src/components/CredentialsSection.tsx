import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const institutions = [
  "Universidade de São Paulo (FEUSP)",
  "Santa Casa de São Paulo (FCMSCSP)",
  "Child Behavior Institute of Miami",
  "Sociedade Brasileira de Neurociências e Comportamento (SBNeC)",
  "Sociedade Brasileira de Neuropsicopedagogia (SBNPp)",
];

export default function CredentialsSection() {
  const loop = [...institutions, ...institutions];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container">
        <Reveal className="text-center mb-8" scale>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Formação e afiliações científicas
          </p>
        </Reveal>
      </div>

      <div className="group/marquee marquee-mask overflow-hidden">
        <div className="marquee-track">
          {loop.map((institution, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-6 whitespace-nowrap"
            >
              <span className="w-9 h-9 rounded-xl bg-[var(--brand-sky)] text-brand-blue flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <GraduationCap size={18} />
              </span>
              <span className="text-brand-navy font-semibold">{institution}</span>
              <span className="ml-4 text-border">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
