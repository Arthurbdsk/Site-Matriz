import { useState } from "react";
import { ImageIcon, Expand } from "lucide-react";
import Reveal from "@/components/Reveal";

interface SpacePhoto {
  src: string;
  caption: string;
}

const photos: SpacePhoto[] = [
  { src: "/images/espaco/recepcao.jpg", caption: "Recepção acolhedora" },
  { src: "/images/espaco/sala-espera.jpg", caption: "Sala de espera" },
  { src: "/images/espaco/sala-sensorial.jpg", caption: "Sala sensorial" },
  { src: "/images/espaco/integracao-sensorial.jpg", caption: "Integração sensorial" },
  { src: "/images/espaco/nutricao.jpg", caption: "Espaço de nutrição" },
  { src: "/images/espaco/consultorio.jpg", caption: "Consultórios" },
  { src: "/images/espaco/psicologia.jpg", caption: "Sala de psicologia" },
  { src: "/images/espaco/mural.jpg", caption: "Mural das famílias" },
  { src: "/images/espaco/corredor.jpg", caption: "Nossos corredores" },
  { src: "/images/espaco/acolhimento.jpg", caption: "Ambiente de acolhimento" },
];

function Tile({ photo }: { photo: SpacePhoto }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-[var(--brand-sky)] hover-lift">
      {!failed ? (
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          onError={() => setFailed(true)}
          className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--brand-sky)] to-white text-brand-blue/70 transition-transform duration-500 group-hover:scale-105">
          <ImageIcon size={30} className="animate-bob" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12"
      >
        <Expand size={16} />
      </span>
    </div>
  );
}

export default function NossoEspacoSection() {
  return (
    <section id="espaco" className="py-20 md:py-28 bg-brand-sky relative overflow-hidden">
      <div className="absolute top-10 -left-16 w-72 h-72 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[var(--brand-orange)]/10 blur-3xl animate-drift" />

      <div className="container relative">
        <Reveal className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 shadow-sm animate-pop-in">
            Conheça nosso ambiente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Nosso Espaço
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Um ambiente pensado para o cuidado e o desenvolvimento. Salas especializadas,
            recursos terapêuticos e espaços acolhedores para cada etapa da jornada.
          </p>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.05} scale className="break-inside-avoid">
              <Tile photo={photo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
