import {ArrowIcon} from "@/components/ui/arrow-icon";
import type {Metadata} from "next";
import Link from "next/link";
import {getFeaturedProjects} from "@/lib/projects/repository";
import {ProjectCard} from "@/components/work/project-card";
import {createPageMetadata} from "@/lib/seo";
export const metadata:Metadata=createPageMetadata("home");
export default async function HomePage(){const projects=await getFeaturedProjects(3);return <>
<section className="home-opening wrap"><h1>Digital work.<br/>Made useful.</h1><div className="home-intro"><p>We bring design and development together to make websites people understand—and tools they can use.</p><Link className="text-link" href="/work">Explore the work <ArrowIcon direction="down-right"/></Link></div></section>
<section className="home-work wrap" aria-label="Selected work">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</section>
<section className="studio-statement"><div className="wrap statement-grid"><h2>Good design<br/>has a job to do.</h2><div><p>It should make something clearer, easier or more useful. That principle connects a small website to the systems behind a business.</p><p>From the first conversation to a working build, the focus stays on what people need to do.</p><Link className="text-link" href="/services">How we can help <ArrowIcon direction="up-right"/></Link></div></div></section>
<section className="home-services wrap"><p className="large-copy">One connected process.<br/>A considered result.</p><div><Link href="/services#website-development"><span>Websites & interfaces</span><ArrowIcon direction="up-right"/></Link><Link href="/systems"><span>Tools & integrations</span><ArrowIcon direction="up-right"/></Link><Link href="/about"><span>Our way of working</span><ArrowIcon direction="up-right"/></Link></div></section></>}
