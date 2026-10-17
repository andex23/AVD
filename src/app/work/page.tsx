import type {Metadata} from "next";
import {createPageMetadata} from "@/lib/seo";
import {getAllProjects} from "@/lib/projects/repository";
import {WorkGrid} from "@/components/work/work-grid";
export const metadata:Metadata=createPageMetadata("work");
export default async function WorkPage(){const projects=await getAllProjects();return <><div className="page-opening wrap"><h1>Work with<br/>a point of view.</h1><p className="opening-copy">Independent products and websites. Different starting points, each built around something people want to do.</p></div><section className="wrap work-collection" aria-label="Project collection"><WorkGrid projects={projects}/></section></>}
