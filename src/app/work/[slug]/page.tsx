import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ProjectDetail} from "@/components/work/project-detail";
import {getAllProjects,getProjectBySlug,getProjectSlugs} from "@/lib/projects/repository";
import {absoluteUrl,createPageMetadata} from "@/lib/seo";
interface Props{params:Promise<{slug:string}>}
export async function generateStaticParams(){return(await getProjectSlugs()).map(slug=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const{slug}=await params;const project=await getProjectBySlug(slug);if(!project)return createPageMetadata("work");return{title:project.title+" — AVD",description:project.brief,alternates:{canonical:absoluteUrl("/work/"+project.slug)},openGraph:{title:project.title,description:project.brief,images:[{url:project.coverImage.src,width:1440,height:1000,alt:project.coverImage.alt}]}}}
export default async function ProjectPage({params}:Props){const{slug}=await params;const project=await getProjectBySlug(slug);if(!project)notFound();const nextProjects=(await getAllProjects()).filter(p=>p.slug!==slug).slice(0,2);return <ProjectDetail project={project} nextProjects={nextProjects}/>}
