export interface PostSection {
  /** Phrased as a question a parent would actually search. */
  heading: string;
  /** First paragraph must answer the heading directly before elaborating. */
  paragraphs: string[];
  bullets?: string[];
}

export interface PostLink {
  label: string;
  path: string;
}

/** Explicit FAQ block rendered at the end of in-depth articles. */
export interface PostFaq {
  q: string;
  a: string;
}

/**
 * A single figure shown in the "em números" block. Every stat carries its own
 * source inline, because an unattributed number on a health site is worse than
 * no number at all.
 */
export interface PostStat {
  value: string;
  label: string;
  source: string;
}

/**
 * Scientific reference. Institutional sources (DSM-5-TR, CID-11, Ministério da
 * Saúde, CDC, AAP) are preferred over individual papers so the list stays
 * verifiable and stable over time.
 */
export interface PostReference {
  /** Author or issuing institution. */
  source: string;
  title: string;
  /** Journal, publisher or institutional body. */
  publication: string;
  year: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tint: string;
  readingMinutes: number;
  date: string;
  intro: string[];
  /** Key figures shown right after the intro. */
  stats?: PostStat[];
  sections: PostSection[];
  /** Present on the in-depth pillar articles; drives the FAQPage schema. */
  faq?: PostFaq[];
  /** Present on the in-depth pillar articles. */
  references?: PostReference[];
  /** Filled in by posts.ts: cross-links to condition pages and sibling posts. */
  related: PostLink[];
}

export type RawPost = Omit<BlogPost, "related">;

export const BLUE = "#1d4ed8";
export const TEAL = "#10b981";
export const ORANGE = "#f97316";
export const NAVY = "#16267a";
