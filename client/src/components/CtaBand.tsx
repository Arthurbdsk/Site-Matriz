import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { openWhatsapp } from "@/data/site";

interface CtaBandProps {
  onSchedule: () => void;
}

export default function CtaBand({ onSchedule }: CtaBandProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <Reveal scale>
          <div className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center animate-gradient bg-[linear-gradient(120deg,var(--brand-blue),var(--brand-teal),var(--brand-blue))]">
            <div className="absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl animate-drift" />
            <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-drift" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl animate-float-slow" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
                Dê o primeiro passo na evolução e autonomia de quem você ama
              </h2>
              <p className="text-white/85 text-lg mt-5 max-w-2xl mx-auto">
                Estamos aqui para responder suas dúvidas e agendar o seu atendimento.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={openWhatsapp}
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90 gap-2 h-12 px-7 text-base shine hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <MessageCircle size={20} className="animate-bob" />
                  Falar no WhatsApp
                </Button>
                <Button
                  onClick={onSchedule}
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10 gap-2 h-12 px-7 text-base bg-transparent hover:-translate-y-1 transition-all"
                >
                  <CalendarCheck size={20} />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
