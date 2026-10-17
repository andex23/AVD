export const siteConfig = {
  name: "Acestar Villam Domum",
  shortName: "AVD",
  url: "https://avd-six.vercel.app",
  description: "AVD brings design and development together to make clear, useful websites and digital products.",
};
export const navLinks = [
  {href:"/work",label:"Work"},
  {href:"/services",label:"Services"},
  {href:"/systems",label:"Systems"},
  {href:"/about",label:"Studio"},
  {href:"/contact",label:"Start a project"},
] as const;
export type PageKey = "home"|"work"|"services"|"systems"|"about"|"contact"|"privacy"|"terms";
export const pageMetadata: Record<PageKey,{title:string;description:string;ogImage:string}> = {
  home:{title:"AVD — Design & development",description:siteConfig.description,ogImage:"/og/home-og.svg"},
  work:{title:"Work — AVD",description:"Independent digital products and websites, with real previews and a clear account of what each build does.",ogImage:"/og/work-og.svg"},
  services:{title:"Services — AVD",description:"Website strategy, interface design and development, with clear scope and practical handover.",ogImage:"/og/services-og.svg"},
  systems:{title:"Connected systems — AVD",description:"Plan how information moves from a website to the people and tools that need it.",ogImage:"/og/systems-og.svg"},
  about:{title:"The studio — AVD",description:"A considered approach to useful digital work, from the first question to a working interface.",ogImage:"/og/about-og.svg"},
  contact:{title:"Start a project — AVD",description:"Prepare, review and download a project brief in your browser.",ogImage:"/og/contact-og.svg"},
  privacy:{title:"Privacy — AVD",description:"How this website and its local project-brief tool handle information.",ogImage:"/og/default-og.svg"},
  terms:{title:"Using this website — AVD",description:"Information about project examples, external links and local downloads.",ogImage:"/og/default-og.svg"},
};
