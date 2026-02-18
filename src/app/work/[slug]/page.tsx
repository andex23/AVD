import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/work/project-detail";
import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/projects/repository";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata("work");
  }

  const title = `${project.title} | Case Study`;
  const description = `${project.client} (${project.industry}) case study covering website delivery and systems integration outcomes.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/work/${project.slug}`),
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
          alt: project.coverImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const nextProjects = allProjects.filter((item) => item.slug !== project.slug).slice(0, 2);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.brief,
    datePublished: project.publishedAt,
    dateModified: project.publishedAt,
    image: [absoluteUrl(project.coverImage.src)],
    author: {
      "@type": "Organization",
      name: "Acestar Villam Domum",
    },
    publisher: {
      "@type": "Organization",
      name: "Acestar Villam Domum",
    },
    mainEntityOfPage: absoluteUrl(`/work/${project.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <ProjectDetail project={project} nextProjects={nextProjects} />
    </>
  );
}
