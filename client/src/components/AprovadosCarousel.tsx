import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, GraduationCap } from "lucide-react";

interface Acceptance {
  university: string;
  course: string;
}

interface Aprovado {
  name: string;
  headline: string;
  image: string;
  acceptances: Acceptance[];
  note?: string;
}

const aprovados: Aprovado[] = [
  {
    name: "Gabriela Houch",
    headline: "Medicina",
    image: "/images/aprovados/gabriela.jpg",
    acceptances: [{ university: "Ohio University", course: "Medicina" }],
    note: "+ 9 universidades internacionais e 4 universidades brasileiras",
  },
  {
    name: "João Vitor Marinelli",
    headline: "Aprovado em 5 universidades internacionais",
    image: "/images/aprovados/joao-vitor.jpg",
    acceptances: [
      { university: "Universidade McGill", course: "Ciências Ambientais" },
      { university: "Universidade de Toronto", course: "Life Sciences" },
      { university: "University of Western Ontario", course: "Bioquímica" },
      { university: "Universidade Simon Fraser", course: "Microbiologia e Imunologia" },
      { university: "Universidade de Victoria", course: "Ciências Gerais" },
    ],
  },
  {
    name: "Leon Jankov",
    headline: "Philosophy, Politics and Economics",
    image: "/images/aprovados/leon.jpg",
    acceptances: [
      { university: "Warwick University", course: "Philosophy, Politics and Economics" },
      { university: "The University of Manchester", course: "Philosophy, Politics and Economics" },
    ],
  },
  {
    name: "Maximiliano Hopf",
    headline: "Ciências da Computação",
    image: "/images/aprovados/maximiliano.jpg",
    acceptances: [{ university: "FEI", course: "Ciências da Computação" }],
  },
  {
    name: "João Marco Pereira",
    headline: "Engenharia da Computação",
    image: "/images/aprovados/joao-marco.jpg",
    acceptances: [{ university: "FIAP", course: "Engenharia da Computação" }],
  },
  {
    name: "Pedro Henrique D'Amaro",
    headline: "Administração",
    image: "/images/aprovados/pedro.jpg",
    acceptances: [{ university: "Mackenzie", course: "Administração" }],
  },
  {
    name: "Gabriel Camisa Nova do Amaral",
    headline: "Administração",
    image: "/images/aprovados/gabriel.jpg",
    acceptances: [{ university: "IBMEC", course: "Administração" }],
  },
];

export default function AprovadosCarousel() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + aprovados.length) % aprovados.length);
  };

  return (
    <div className="relative mt-8 mx-auto max-w-sm">
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <div
          className="flex items-start transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {aprovados.map((aluno) => {
            const multiple = aluno.acceptances.length > 1;
            return (
              <div key={aluno.name} className="w-full shrink-0">
                <div className="group rounded-2xl overflow-hidden bg-white border border-border hover-lift">
                  {/* Full promotional card graphic */}
                  <div className="relative aspect-square bg-brand-sky">
                    <img
                      src={aluno.image}
                      alt={`Card de aprovação de ${aluno.name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-teal)] text-white text-xs font-bold px-3 py-1.5 shadow-lg animate-pop-in">
                      <Check size={14} strokeWidth={3} />
                      Aprovado
                    </span>

                    {/* Prev/next arrows, anchored to the image */}
                    <button
                      onClick={() => go(-1)}
                      aria-label="Aluno anterior"
                      className="absolute top-1/2 left-3 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white shadow-lg hover:scale-110 hover:bg-brand-navy transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => go(1)}
                      aria-label="Próximo aluno"
                      className="absolute top-1/2 right-3 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white shadow-lg hover:scale-110 hover:bg-[var(--brand-teal-strong)] transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Clean recap */}
                  <div className="p-6 min-h-[300px]">
                    <h4 className="text-xl font-bold text-brand-navy">{aluno.name}</h4>
                    <p className="text-brand-blue font-medium mt-1">{aluno.headline}</p>
                    <div className="my-4 border-t border-border" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      {multiple ? "Aprovado(a) em" : "Aprovado(a) em"}
                    </p>
                    <ul className="space-y-2">
                      {aluno.acceptances.map((acc) => (
                        <li key={acc.university} className="flex items-start gap-2">
                          <GraduationCap
                            size={16}
                            className="text-brand-teal shrink-0 mt-0.5"
                          />
                          <span className="text-sm leading-snug">
                            <span className="font-bold text-brand-navy">
                              {acc.university}
                            </span>
                            {multiple && (
                              <span className="text-muted-foreground"> — {acc.course}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {aluno.note && (
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                        {aluno.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {aprovados.map((aluno, i) => (
          <button
            key={aluno.name}
            onClick={() => setIndex(i)}
            aria-label={`Ver aprovação de ${aluno.name}`}
            aria-current={i === index}
            className="p-1.5"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-teal" : "w-2 bg-border"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
