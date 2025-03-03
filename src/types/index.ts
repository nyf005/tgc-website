export * from './service';

export interface Stat {
  number: string;
  label: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

export interface PageContent {
  title: string;
  description: string;
  sections: Section[];
}

export type SectionType = 
  | 'hero' 
  | 'services' 
  | 'stats' 
  | 'values' 
  | 'team' 
  | 'cta' 
  | 'successStories' 
  | 'journey' 
  | 'insights';

export interface Section {
  id: string;
  type: SectionType;
  title?: string;
  subtitle?: string;
  description?: string;
  background?: 'white' | 'blue' | 'gray' | 'stone';
  content: any; // Specific content varies by section type
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  industry: string;
  region: string;
  image: string;
  slug: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: keyof typeof import("@/lib/images").images.insights;
  slug: string;
  date: string;
  readTime: string;
  author?: string;
}

export interface JobPosition {
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface CompanyValue {
  title: string;
  description: string;
}