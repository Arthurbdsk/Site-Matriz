import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { openWhatsapp } from "@/data/site";
import { useState } from "react";

const faqs = [
  {
    q: "Quais faixas etárias o Instituto atende?",
    a: "Atendemos crianças, adolescentes e adultos. Cada plano é individualizado conforme a fase de desenvolvimento, o contexto e os objetivos da pessoa.",
  },
  {
    q: "Quais condições são acompanhadas?",
    a: "Transtornos do neurodesenvolvimento como TEA, TDAH e TOD, transtornos de aprendizagem como dislexia, discalculia, disgrafia e disortografia, além de condições de saúde mental e síndromes específicas.",
  },
  {
    q: "Como começa o atendimento?",
    a: "Tudo começa com um primeiro contato pelo WhatsApp ou telefone. A partir daí agendamos o acolhimento inicial e, quando indicado, a avaliação especializada.",
  },
  {
    q: "As aulas particulares são online ou presenciais?",
    a: "Oferecemos as duas modalidades. As aulas online são ao vivo por plataforma segura, com gravação. As presenciais acontecem em nosso espaço, com recursos pedagógicos dedicados.",
  },
  {
    q: "O trabalho é baseado em evidências científicas?",
    a: "Sim. Todas as intervenções seguem práticas fundamentadas em evidências, com instrumentos validados, mensuração de resultados e acompanhamento contínuo.",
  },
  {
    q: "Onde fica o Instituto Matriz?",
    a: "Estamos na Alameda Madeira, 222, Conjunto 92, em Barueri, São Paulo. O atendimento é de segunda a sexta das 8h às 19h e aos sábados das 8h às 13h.",
  },
];

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border px-5 hover-lift transition-colors duration-300 ${
        open
          ? "border-[var(--brand-blue)]/30 bg-[var(--brand-sky)]"
          : "border-border bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-base font-semibold text-brand-navy transition-transform duration-200 group-hover:translate-x-0.5">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "bg-[var(--brand-blue)] text-white rotate-180" : "bg-[var(--brand-sky)] text-brand-blue"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>
      <div
        id={id}
        role="region"
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-sky)] px-4 py-1.5 text-sm font-semibold text-brand-blue animate-pop-in">
              <HelpCircle size={16} className="animate-bob" />
              Perguntas Frequentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-5 mb-4">
              Ainda com dúvidas?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Reunimos as perguntas mais comuns. Se precisar de algo mais específico, a
              nossa equipe responde rápido pelo WhatsApp.
            </p>
            <Button
              onClick={openWhatsapp}
              className="bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white gap-2 shine hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Button>
          </Reveal>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.07}>
                <FaqItem q={faq.q} a={faq.a} id={`faq-panel-${index}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
