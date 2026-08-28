export const site = {
  name: "Instituto Matriz de Neurodesenvolvimento",
  shortName: "Instituto Matriz",
  phone: "(11) 98464-0809",
  phoneRaw: "5511984640809",
  email: "contato@institutomatriz.com.br",
  address: {
    line1: "Alameda Madeira, 222",
    line2: "Conjunto 92, Barueri",
    cep: "CEP 06454-010",
    city: "Barueri, São Paulo",
  },
  hours: {
    weekdays: "Segunda a sexta, 7h às 21h",
    saturday: "Sábado, 8h às 15h",
  },
};

export const whatsappMessage =
  "Olá! Gostaria de saber mais sobre o Instituto Matriz e agendar um atendimento.";

export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const openWhatsapp = () => {
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

/** `id` items scroll to a section on the home page; `href` items navigate to a standalone route. */
export const navItems: { label: string; id?: string; href?: string }[] = [
  { label: "Início", id: "home" },
  { label: "Quem Somos", id: "about" },
  { label: "Nosso Espaço", id: "espaco" },
  { label: "Áreas de Atuação", id: "services" },
  { label: "Público", id: "audience" },
  { label: "Aulas", id: "aulas" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", id: "contact" },
];
