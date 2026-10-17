"use client";
import {useState} from "react";
import type {Project} from "@/types/project";
import {ProjectCard} from "./project-card";
export function WorkGrid({projects}:{projects:Project[]}){
 const[active,setActive]=useState("All work");
 const choices=["All work","Digital products","Websites"];
 const visible=active==="All work"?projects:projects.filter(p=>active==="Websites"?p.slug==="son-of-juliet":p.slug!=="son-of-juliet");
 return <><div className="work-filters" aria-label="Filter work">{choices.map(choice=><button key={choice} type="button" aria-pressed={active===choice} onClick={()=>setActive(choice)}>{choice}</button>)}</div><p className="results-count" role="status">{visible.length} {visible.length===1?"project":"projects"}</p><div className="work-grid">{visible.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></>;
}
