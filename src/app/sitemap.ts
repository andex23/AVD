import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects/repository";
import { siteConfig } from "@/content/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/systems",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const projectSlugs = await getProjectSlugs();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectEntries = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries];
}
