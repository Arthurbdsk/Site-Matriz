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
  sections: PostSection[];
  /** Filled in by posts.ts: cross-links to condition pages and sibling posts. */
  related: PostLink[];
}

export type RawPost = Omit<BlogPost, "related">;

export const BLUE = "#1d4ed8";
export const TEAL = "#10b981";
export const ORANGE = "#f97316";
export const NAVY = "#16267a";
