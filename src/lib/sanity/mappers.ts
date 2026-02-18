import type { Project, ProjectImage, ProjectService } from "@/types/project";

interface PortableTextSpan {
  _type: "span";
  text: string;
}

interface PortableTextBlock {
  _type: "block";
  children?: PortableTextSpan[];
}

interface SanityImageAsset {
  url?: string;
}

interface SanityImage {
  asset?: SanityImageAsset;
  alt?: string;
}

interface SanityProject {
  title?: string;
  slug?: string;
  client?: string;
  industry?: string;
  services?: ProjectService[];
  coverImage?: SanityImage;
  gallery?: SanityImage[];
  brief?: string | PortableTextBlock[];
  approach?: string | PortableTextBlock[];
  build?: string | PortableTextBlock[];
  outcome?: string | PortableTextBlock[];
  palette?: string[];
  liveUrl?: string;
  publishedAt?: string;
  timeline?: string;
  tags?: string[];
  featured?: boolean;
}

function portableTextToString(value: string | PortableTextBlock[] | undefined): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }

      return block.children
        .filter((child) => child._type === "span")
        .map((child) => child.text)
        .join("");
    })
    .filter(Boolean)
    .join("\n\n");
}

function mapImage(image: SanityImage | undefined, fallbackAlt: string): ProjectImage {
  return {
    src: image?.asset?.url ?? "/images/projects/project-atlas-website.svg",
    alt: image?.alt ?? fallbackAlt,
    width: 1200,
    height: 760,
  };
}

export function mapSanityProject(input: SanityProject): Project {
  const title = input.title ?? "Untitled Project";

  return {
    title,
    slug: input.slug ?? "untitled-project",
    client: input.client ?? "Unknown Client",
    industry: input.industry ?? "General",
    services: input.services ?? ["website"],
    coverImage: mapImage(input.coverImage, `${title} cover image`),
    gallery:
      input.gallery?.map((item, index) =>
        mapImage(item, `${title} gallery image ${index + 1}`),
      ) ?? [],
    brief: portableTextToString(input.brief),
    approach: portableTextToString(input.approach),
    build: portableTextToString(input.build),
    outcome: portableTextToString(input.outcome),
    palette: input.palette,
    liveUrl: input.liveUrl,
    publishedAt: input.publishedAt ?? new Date().toISOString().slice(0, 10),
    timeline: input.timeline ?? "TBD",
    tags: input.tags ?? [],
    featured: input.featured ?? false,
  };
}
