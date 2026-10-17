import { projectsSeed } from "@/content/projects.seed";
export async function getAllProjects(){return projectsSeed;}
export async function getProjectBySlug(slug:string){return projectsSeed.find(project=>project.slug===slug)??null;}
export async function getFeaturedProjects(limit=3){return projectsSeed.filter(project=>project.featured).slice(0,limit);}
export async function getProjectSlugs(){return projectsSeed.map(project=>project.slug);}
