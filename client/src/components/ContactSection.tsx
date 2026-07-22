import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Navigation as NavigationIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { site, openWhatsapp } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-[var(--brand-teal)]/10 blur-3xl animate-drift" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[var(--brand-blue)]/10 blur-3xl animate-drift" />

      <div className="container relative">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-sky)] px-4 py-1.5 text-sm font-semibold text-brand-blue mb-5 animate-pop-in">
            Fale com a gente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Estamos aqui para responder suas dúvidas e agendar sua consulta. Dê o primeiro
            passo na evolução e autonomia de quem você ama.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Reveal>
            <Card className="group p-6 border-border hover-lift shine h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-teal)]/10 text-brand-teal shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">WhatsApp</h3>
                  <p className="text-foreground">{site.phone}</p>
                  <p className="text-sm text-muted-foreground">
                    Resposta rápida via WhatsApp
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="group p-6 border-border hover-lift shine h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-blue)]/10 text-brand-blue shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">Telefone</h3>
                  <p className="text-foreground">{site.phone}</p>
                  <p className="text-sm text-muted-foreground">
                    {site.hours.weekdays}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="group p-6 border-border hover-lift shine h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-blue)]/10 text-brand-blue shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">E-mail</h3>
                  <p className="text-foreground break-all">{site.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Responderemos em até 24h
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="group p-6 border-border hover-lift shine h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--brand-orange)]/10 text-brand-orange shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">Visite-nos</h3>
                  <p className="text-foreground">{site.address.line1}</p>
                  <p className="text-foreground">{site.address.line2}</p>
                  <p className="text-sm text-muted-foreground">{site.address.cep}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={15} />
                    {site.hours.weekdays}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={15} />
                    {site.hours.saturday}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.2} className="sm:col-span-2">
            <Button
              onClick={openWhatsapp}
              className="w-full bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-strong)] text-white flex items-center justify-center gap-2 shine hover:-translate-y-0.5 hover:shadow-lg transition-all"
              size="lg"
            >
              <MessageCircle size={20} className="animate-bob" />
              Conversar no WhatsApp
            </Button>
          </Reveal>
        </div>

        {/* Google Maps */}
        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-brand-sky px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white text-brand-orange shrink-0 animate-bob">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">Como chegar</h3>
                  <p className="text-sm text-muted-foreground">
                    {site.address.line1}, {site.address.line2}, {site.address.cep}
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Alameda+Madeira+222+Barueri+SP+06454-010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-blue)]/90 shine hover-lift transition-all"
              >
                <NavigationIcon size={16} />
                Abrir rota no Google Maps
              </a>
            </div>
            <iframe
              title="Localização do Instituto Matriz"
              src="https://www.google.com/maps?q=Alameda%20Madeira%2C%20222%20-%20Barueri%2C%20SP%2C%2006454-010&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
