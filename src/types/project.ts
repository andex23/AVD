export type ProjectService = "website" | "crm" | "automation" | "branding";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  industry: string;
  services: ProjectService[];
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  brief: string;
  approach: string;
  build: string;
  outcome: string;
  palette?: string[];
  liveUrl?: string;
  publishedAt: string;
  timeline: string;
  tags: string[];
  featured?: boolean;
}
