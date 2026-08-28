import { site } from "@/data/site";
import { SITE_ORIGIN } from "@/components/Seo";

/** MedicalClinic schema for the home page and contact section. */
export const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  alternateName: site.shortName,
  url: SITE_ORIGIN,
  telephone: `+${site.phoneRaw}`,
  email: site.email,
  image: `${SITE_ORIGIN}/images/logo.png`,
  logo: `${SITE_ORIGIN}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Barueri",
    addressRegion: "SP",
    postalCode: "06454-010",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: [
    "Transtornos do Neurodesenvolvimento",
    "Psicologia",
    "Fonoaudiologia",
    "Terapia Ocupacional",
    "Neuropsicologia",
  ],
  areaServed: {
    "@type": "City",
    name: "Barueri",
  },
};

/** Organization schema (brand-level, independent of the clinic's physical address). */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/images/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.phoneRaw}`,
    email: site.email,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

/** Builds FAQPage schema from an array of { q, a } pairs. */
export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** BreadcrumbList schema for content pages nested under /condicoes/. */
export function buildBreadcrumbSchema(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_ORIGIN },
      {
        "@type": "ListItem",
        position: 2,
        name: "Áreas de Atuação",
        item: `${SITE_ORIGIN}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageName,
        item: `${SITE_ORIGIN}${path}`,
      },
    ],
  };
}

/** BreadcrumbList schema for the /blog/* posts. */
export function buildPostBreadcrumbSchema(postTitle: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: postTitle,
        item: `${SITE_ORIGIN}${path}`,
      },
    ],
  };
}

/** Article schema for a blog post. */
export function buildArticleSchema(post: {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_ORIGIN}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_ORIGIN}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "pt-BR",
    author: {
      "@type": "Organization",
      name: site.name,
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/images/logo.png`,
      },
    },
  };
}

/** Blog schema listing every post, for the /blog index. */
export function buildBlogSchema(posts: { slug: string; title: string; metaDescription: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog do ${site.shortName}`,
    url: `${SITE_ORIGIN}/blog`,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/images/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      url: `${SITE_ORIGIN}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}

/** MedicalWebPage schema for the /condicoes/* content pages. */
export function buildMedicalWebPageSchema(opts: {
  title: string;
  description: string;
  path: string;
  aboutName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: opts.title,
    description: opts.description,
    url: `${SITE_ORIGIN}${opts.path}`,
    about: {
      "@type": "MedicalCondition",
      name: opts.aboutName,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/images/logo.png`,
      },
    },
    inLanguage: "pt-BR",
  };
}
