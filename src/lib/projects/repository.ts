import { projectsSeed } from "@/content/projects.seed";
import { sanityClient } from "@/lib/sanity/client";
import { mapSanityProject } from "@/lib/sanity/mappers";
import { projectBySlugQuery, projectsQuery } from "@/lib/sanity/queries";
import type { Project } from "@/types/project";

function sortProjects(projects: Project[]) {
  return [...projects].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

async function fetchProjectsFromSanity(): Promise<Project[] | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    const data = await sanityClient.fetch<unknown[]>(projectsQuery);

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return sortProjects(data.map((item) => mapSanityProject(item as never)));
  } catch {
    return null;
  }
}

async function fetchProjectBySlugFromSanity(slug: string): Promise<Project | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    const data = await sanityClient.fetch<unknown>(projectBySlugQuery, { slug });

    if (!data || typeof data !== "object") {
      return null;
    }

    return mapSanityProject(data as never);
  } catch {
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const sanityProjects = await fetchProjectsFromSanity();

  if (sanityProjects) {
    return sanityProjects;
  }

  return sortProjects(projectsSeed);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const sanityProject = await fetchProjectBySlugFromSanity(slug);

  if (sanityProject) {
    return sanityProject;
  }

  return projectsSeed.find((project) => project.slug === slug) ?? null;
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const allProjects = await getAllProjects();

  return allProjects.filter((project) => project.featured).slice(0, limit);
}

export async function getProjectSlugs(): Promise<string[]> {
  const allProjects = await getAllProjects();
  return allProjects.map((project) => project.slug);
}
