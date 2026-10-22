export interface SummaryCaseStudy {
  detail: 'summary';
  summary: string;
}

export interface FullCaseStudy {
  detail: 'full';
  summary: string;
  problem: string;
  architecture: string[];
  results: string[];
}

export type CaseStudy = SummaryCaseStudy | FullCaseStudy;

export interface Project {
  slug: string;
  name: string;
  /** Short tag shown on the card, e.g. "Streaming". */
  category: string;
  kind: 'public' | 'employer';
  stack: string[];
  /** Path under public/ (use assetPath). Omit to render the typographic cover. */
  cover?: string;
  /** Public GitHub repo URL. Never set on employer work. */
  repo?: string;
  caseStudy: CaseStudy;
}

export interface Service {
  title: string;
  description: string;
}

export interface Value {
  title: string;
  body: string;
}

export interface Tool {
  name: string;
  href: string;
  /** Path under public/logos. Rendered as a mask so it follows the theme. */
  logo: string;
}

export interface CompanyEntry {
  kind: 'company';
  id: string;
  yearLabel: string;
  startYear: number;
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface EducationEntry {
  kind: 'education';
  id: string;
  yearLabel: string;
  startYear: number;
  institution: string;
  degree: string;
  period: string;
  notes: string;
}

export interface CertificationsEntry {
  kind: 'certifications';
  id: string;
  yearLabel: string;
  startYear: number;
  items: { name: string; date: string }[];
}

export type TimelineEntry = CompanyEntry | EducationEntry | CertificationsEntry;

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
  cv: string;
  /** Booking link for "Book a Call". Null until the owner supplies one; the button is hidden meanwhile. */
  bookingUrl: string | null;
  hero: {
    statement: string;
    audience: string;
    words: string[];
  };
  about: string[];
}
