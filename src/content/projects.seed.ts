import { Project } from "@/types/project";

export const projectsSeed: Project[] = [
  {
    title: "Atlas Health Group",
    slug: "atlas-health-group",
    client: "Atlas Health Group",
    industry: "Healthcare",
    services: ["website", "crm", "automation"],
    coverImage: {
      src: "/images/projects/project-atlas-website.svg",
      alt: "Atlas Health Group corporate website",
      width: 1200,
      height: 760,
    },
    gallery: [
      {
        src: "/images/projects/project-atlas-website.svg",
        alt: "Atlas Health Group homepage",
        width: 1200,
        height: 760,
      },
      {
        src: "/images/systems/crm-pipeline-preview.svg",
        alt: "Atlas Health Group CRM pipeline",
        width: 1200,
        height: 620,
      },
    ],
    brief:
      "Atlas Health needed a clear corporate website to consolidate multiple service lines and improve inbound lead quality.",
    approach:
      "We restructured information architecture around service categories, then mapped inquiry points to CRM-ready forms by department.",
    build:
      "Built a 24-page Next.js website with optimized templates, role-based contact flows, and HubSpot-compatible lead routing.",
    outcome:
      "Qualified inquiries increased by 41% in the first quarter while bounce rate dropped by 27%.",
    palette: ["#162A4F", "#F6F7F9", "#1C1F26", "#F25A2B"],
    liveUrl: "https://example.com/atlas-health",
    publishedAt: "2025-12-15",
    timeline: "8 weeks",
    tags: ["Website", "CRM", "Automation"],
    featured: true,
  },
  {
    title: "Northstar Ventures",
    slug: "northstar-ventures",
    client: "Northstar Ventures",
    industry: "Investment",
    services: ["website", "crm"],
    coverImage: {
      src: "/images/projects/project-northstar-portal.svg",
      alt: "Northstar Ventures website and intake portal",
      width: 1200,
      height: 760,
    },
    gallery: [
      {
        src: "/images/projects/project-northstar-portal.svg",
        alt: "Northstar Ventures overview page",
        width: 1200,
        height: 760,
      },
    ],
    brief:
      "Northstar required a website refresh and a disciplined lead intake process for partner submissions.",
    approach:
      "We simplified the content model, built trust-focused pages, and connected form submissions directly to stage-based CRM pipelines.",
    build:
      "Delivered a performance-first marketing site plus Airtable CRM integration with internal scoring and follow-up triggers.",
    outcome:
      "Average lead response time moved from 48 hours to under 6 hours.",
    palette: ["#162A4F", "#E5E7EB", "#FFFFFF", "#F25A2B"],
    liveUrl: "https://example.com/northstar",
    publishedAt: "2025-09-30",
    timeline: "6 weeks",
    tags: ["Website", "CRM"],
    featured: true,
  },
  {
    title: "Riverstone Retail",
    slug: "riverstone-retail",
    client: "Riverstone Retail",
    industry: "Retail & E-commerce",
    services: ["website", "automation"],
    coverImage: {
      src: "/images/projects/project-riverstone-commerce.svg",
      alt: "Riverstone Retail ecommerce storefront",
      width: 1200,
      height: 760,
    },
    gallery: [
      {
        src: "/images/projects/project-riverstone-commerce.svg",
        alt: "Riverstone Retail product category page",
        width: 1200,
        height: 760,
      },
    ],
    brief:
      "Riverstone had fragmented campaign pages and no connected post-purchase follow-up flow.",
    approach:
      "We rebuilt the storefront templates and created event-based automation for order updates and internal notifications.",
    build:
      "Implemented conversion-focused landing architecture, GA4 events, and Make automation for customer lifecycle messaging.",
    outcome:
      "Checkout conversion improved by 22% and campaign deployment time reduced by half.",
    palette: ["#162A4F", "#F6F7F9", "#4B5563", "#F25A2B"],
    liveUrl: "https://example.com/riverstone",
    publishedAt: "2025-07-10",
    timeline: "7 weeks",
    tags: ["Website", "Automation"],
    featured: true,
  },
  {
    title: "Summit Education",
    slug: "summit-education",
    client: "Summit Education",
    industry: "Education",
    services: ["website", "crm", "automation"],
    coverImage: {
      src: "/images/projects/project-summit-dashboard.svg",
      alt: "Summit Education admissions website",
      width: 1200,
      height: 760,
    },
    gallery: [
      {
        src: "/images/projects/project-summit-dashboard.svg",
        alt: "Summit Education admissions funnel screens",
        width: 1200,
        height: 760,
      },
      {
        src: "/images/systems/workflow-diagram.svg",
        alt: "Summit admissions workflow integration diagram",
        width: 1280,
        height: 520,
      },
    ],
    brief:
      "Summit needed to modernize admissions outreach while keeping stakeholder reporting transparent.",
    approach:
      "We created focused program pages and connected inquiry flows to CRM stages with automated follow-up reminders.",
    build:
      "Delivered a modular admissions site, Zoho-ready CRM schema, and weekly conversion reports.",
    outcome:
      "Inquiry-to-consultation conversion rose by 34% over two enrollment cycles.",
    palette: ["#162A4F", "#FFFFFF", "#16A34A", "#F25A2B"],
    liveUrl: "https://example.com/summit",
    publishedAt: "2025-05-01",
    timeline: "9 weeks",
    tags: ["Website", "CRM", "Automation"],
    featured: false,
  },
];
