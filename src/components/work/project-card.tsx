import {ArrowIcon} from "@/components/ui/arrow-icon";
import Image from "next/image";
import Link from "next/link";
import type {Project} from "@/types/project";
export function ProjectCard({project,headingLevel=2}:{project:Project;headingLevel?:2|3}){const Heading=headingLevel===3?"h3":"h2";return <article className={"project project-"+project.slug}><Link className="project-image" href={"/work/"+project.slug} aria-label={"Explore "+project.title}><Image src={project.coverImage.src} alt={project.coverImage.alt} width={project.coverImage.width} height={project.coverImage.height} sizes="(max-width:720px) 100vw, 66vw" unoptimized/></Link><div className="project-caption"><Heading><Link href={"/work/"+project.slug}>{project.title}<ArrowIcon direction="up-right"/></Link></Heading><p>{project.brief}</p></div></article>}
