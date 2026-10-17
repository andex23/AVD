import type {Metadata} from "next";
import {pageMetadata,type PageKey,siteConfig} from "@/content/site";
export function createPageMetadata(page:PageKey):Metadata{
 const meta=pageMetadata[page];const route=page==="home"?"/":page==="about"?"/about":"/"+page;
 return {title:meta.title,description:meta.description,alternates:{canonical:absoluteUrl(route)},openGraph:{title:meta.title,description:meta.description,url:absoluteUrl(route),siteName:siteConfig.name,images:[{url:meta.ogImage,width:1200,height:630,alt:meta.title}],locale:"en_US",type:"website"},twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[meta.ogImage]}};
}
export function absoluteUrl(path:string){return path.startsWith("http")?path:siteConfig.url+(path.startsWith("/")?path:"/"+path)}
