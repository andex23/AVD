export const siteConfig = {
  name: "Acestar Villam Domum",
  shortName: "AVD",
  url: "https://acestarvillamdomum.com",
  description:
    "AVD builds high-performance websites and integrates CRM and automation to create connected digital foundations.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@acestarvillamdomum.com",
  phone: "+1 (555) 010-2480",
  whatsapp: "https://wa.me/15550102480",
  location: "Remote-first, United States",
  responseSla: "2 business days",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services#website-development" },
      { label: "Brand-ready Design Systems", href: "/services#website-development" },
      { label: "Performance + SEO Rebuilds", href: "/services#website-development" },
    ],
  },
  {
    title: "Systems",
    links: [
      { label: "CRM Architecture", href: "/systems#crm-architecture" },
      { label: "Automation Workflows", href: "/systems#automation-workflows" },
      { label: "Reporting", href: "/systems#reporting" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book Consultation", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
] as const;

export const homeProcess = [
  {
    title: "Discover",
    description:
      "Define goals, audiences, and constraints before design decisions are made.",
  },
  {
    title: "Design",
    description:
      "Create structured page systems and copy hierarchy for clear communication.",
  },
  {
    title: "Build",
    description:
      "Ship a fast, responsive website with reliable foundations and clean code.",
  },
  {
    title: "Integrate",
    description:
      "Connect CRM, analytics, and automation workflows where they improve operations.",
  },
  {
    title: "Optimize",
    description:
      "Review performance, conversion behavior, and reporting for measurable iteration.",
  },
] as const;

export type PageKey =
  | "home"
  | "work"
  | "services"
  | "systems"
  | "about"
  | "contact"
  | "privacy"
  | "terms";

export const pageMetadata: Record<
  PageKey,
  { title: string; description: string; ogImage: string }
> = {
  home: {
    title: "AVD | Websites Built to Perform",
    description:
      "AVD delivers high-performance websites and integrates CRM and automation for connected digital foundations.",
    ogImage: "/og/home-og.svg",
  },
  work: {
    title: "Selected Work | Acestar Villam Domum",
    description:
      "Explore websites and integrated systems delivered for growing organizations across sectors.",
    ogImage: "/og/work-og.svg",
  },
  services: {
    title: "Services | Website Delivery First",
    description:
      "Website development first, with CRM and automation integration where it improves operations.",
    ogImage: "/og/services-og.svg",
  },
  systems: {
    title: "Systems Integration | AVD",
    description:
      "Connect lead capture, CRM pipelines, and automation workflows into one measurable operating layer.",
    ogImage: "/og/systems-og.svg",
  },
  about: {
    title: "About AVD | Structured Web Studio",
    description:
      "AVD is a website-first studio focused on clarity, speed, and integrated digital systems.",
    ogImage: "/og/about-og.svg",
  },
  contact: {
    title: "Start a Project | Acestar Villam Domum",
    description:
      "Share project goals, timeline, and budget. AVD replies with practical next steps.",
    ogImage: "/og/contact-og.svg",
  },
  privacy: {
    title: "Privacy Policy | Acestar Villam Domum",
    description:
      "Read how AVD handles website data, contact details, and analytics information.",
    ogImage: "/og/default-og.svg",
  },
  terms: {
    title: "Terms & Conditions | Acestar Villam Domum",
    description:
      "Review terms governing AVD website use, service engagement, and project delivery.",
    ogImage: "/og/default-og.svg",
  },
};
