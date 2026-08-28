import { Sparkles, MapPin, Clock, ShieldCheck } from "lucide-react";

const messages = [
  { icon: ShieldCheck, text: "Mais de 20 anos de experiência clínica e pedagógica" },
  { icon: Sparkles, text: "Mais de 1.000 famílias acompanhadas" },
  { icon: MapPin, text: "Barueri, São Paulo" },
  { icon: Clock, text: "Segunda a sexta, 7h às 21h" },
  { icon: ShieldCheck, text: "Abordagem baseada em evidências científicas" },
];

export default function TopBar() {
  const loop = [...messages, ...messages];

  return (
    <div className="group/marquee bg-brand-navy text-white/90 text-xs md:text-sm">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track marquee-reverse py-2">
          {loop.map((message, index) => {
            const Icon = message.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-6 whitespace-nowrap"
              >
                <Icon size={14} className="text-[var(--brand-teal)] animate-bob" />
                {message.text}
                <span className="ml-4 text-white/25">/</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
