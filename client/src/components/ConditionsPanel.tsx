import { useState } from "react";
import { Brain, BookOpen, HeartPulse, Dna, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Condition {
  name: string;
  desc: string;
}

interface Category {
  icon: LucideIcon;
  tint: string;
  short: string;
  full: string;
  items: Condition[];
}

const categories: Category[] = [
  {
    icon: Brain,
    tint: "#1d4ed8",
    short: "Neurodesenvolvimento",
    full: "Transtornos do Neurodesenvolvimento",
    items: [
      { name: "TEA", desc: "Diferenças na comunicação, interação social e comportamento." },
      { name: "TDAH", desc: "Desatenção, hiperatividade e impulsividade que impactam o dia a dia." },
      { name: "TOD", desc: "Padrão persistente de irritabilidade e desafio a figuras de autoridade." },
      { name: "Demais comprometimentos neurológicos", desc: "Avaliação e acompanhamento de outras condições neurológicas." },
    ],
  },
  {
    icon: BookOpen,
    tint: "#10b981",
    short: "Aprendizagem",
    full: "Transtornos de Aprendizagem",
    items: [
      { name: "DPAC", desc: "Dificuldade em processar e interpretar sons e a fala." },
      { name: "Dislexia", desc: "Dificuldade específica na leitura e no reconhecimento de palavras." },
      { name: "Discalculia", desc: "Dificuldade na compreensão de números e cálculos." },
      { name: "Disgrafia", desc: "Dificuldade na escrita à mão e na coordenação motora fina." },
      { name: "Disortografia", desc: "Dificuldade em aplicar corretamente as regras ortográficas." },
    ],
  },
  {
    icon: HeartPulse,
    tint: "#f97316",
    short: "Saúde Mental",
    full: "Transtornos de Saúde Mental",
    items: [
      { name: "Depressão", desc: "Acompanhamento clínico do humor deprimido e da perda de interesse." },
      { name: "Ansiedade", desc: "Manejo de preocupações excessivas e sintomas ansiosos." },
      { name: "Esquizofrenia", desc: "Acompanhamento especializado e contínuo." },
      { name: "Outras condições emocionais", desc: "Suporte para diferentes demandas emocionais." },
    ],
  },
  {
    icon: Dna,
    tint: "#16267a",
    short: "Específicas",
    full: "Condições Específicas",
    items: [
      { name: "Síndrome de Down", desc: "Estimulação e acompanhamento do desenvolvimento global." },
      { name: "Síndrome Xia-Gibbs", desc: "Acompanhamento de condição genética rara." },
      { name: "Síndromes Genéticas Raras", desc: "Planos individualizados para condições raras." },
    ],
  },
];

export default function ConditionsPanel() {
  const [active, setActive] = useState(0);
  const current = categories[active];
  const ActiveIcon = current.icon;

  return (
    <Reveal scale>
      <div className="rounded-3xl bg-white border border-border p-4 md:p-6 shadow-sm">
        <div className="grid lg:grid-cols-[300px_1fr] gap-5">
          {/* Category selector */}
          <div
            role="tablist"
            aria-label="Categorias de condições"
            className="flex lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0"
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
              e.preventDefault();
              const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
              const next = (active + dir + categories.length) % categories.length;
              setActive(next);
              document.getElementById(`condition-tab-${next}`)?.focus();
            }}
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = i === active;
              return (
                <button
                  key={cat.full}
                  id={`condition-tab-${i}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`condition-panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 shrink-0 lg:shrink"
                  style={{
                    background: isActive ? cat.tint : "transparent",
                    color: isActive ? "#fff" : "var(--brand-navy)",
                    boxShadow: isActive ? "0 12px 30px -12px rgba(0,0,0,0.35)" : "none",
                  }}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.2)" : `${cat.tint}1a`,
                      color: isActive ? "#fff" : cat.tint,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-tight truncate">
                      {cat.short}
                    </span>
                    <span
                      className="block text-[11px] leading-tight"
                      style={{ color: isActive ? "rgba(255,255,255,0.75)" : undefined, opacity: isActive ? 1 : 0.6 }}
                    >
                      {cat.items.length} condições
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active category content */}
          <div
            key={active}
            id={`condition-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`condition-tab-${active}`}
            tabIndex={0}
            className="rounded-2xl p-5 md:p-7 relative overflow-hidden"
            style={{ background: `${current.tint}0a` }}
          >
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20"
              style={{ background: current.tint }}
            />

            <div className="relative flex items-center gap-3 mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white animate-pop-in"
                style={{ background: current.tint }}
              >
                <ActiveIcon size={24} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy">{current.full}</h4>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.items.map((item, idx) => (
                <div
                  key={item.name}
                  className="group rounded-xl bg-white border border-border p-4 hover-lift animate-pop-in cursor-default"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: current.tint }}
                    />
                    <span className="font-bold text-brand-navy text-sm">{item.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
