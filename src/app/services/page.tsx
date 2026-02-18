import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("services");

const websiteServices = [
  {
    title: "Corporate Websites",
    details: "Clear, structured websites for organizations requiring trust, clarity, and scale.",
    deliverables: "IA, design system, full page build, QA, deployment",
    timeline: "5-10 weeks",
    scope: "Starting from 12 pages",
  },
  {
    title: "E-commerce Websites",
    details: "Conversion-focused storefront builds with performant templates and analytics readiness.",
    deliverables: "Storefront UX, product templates, event tracking, checkout support",
    timeline: "6-12 weeks",
    scope: "Starting from 25 SKUs",
  },
  {
    title: "Landing Pages / Campaigns",
    details: "Fast campaign pages with clear messaging, testing hooks, and measurable goals.",
    deliverables: "Page copy structure, build, event setup, launch support",
    timeline: "2-4 weeks",
    scope: "Starting from 1 campaign flow",
  },
  {
    title: "Rebuilds / Performance + SEO Fixes",
    details: "Refactor outdated websites for speed, accessibility, crawlability, and maintainability.",
    deliverables: "Audit, rebuild plan, implementation, baseline SEO and performance improvements",
    timeline: "4-8 weeks",
    scope: "Starting from technical audit",
  },
];

const integrationServices = [
  {
    title: "CRM Setup",
    details:
      "Provider examples: HubSpot, Zoho, Airtable, Notion, and custom stacks depending on operational fit.",
  },
  {
    title: "AI Automation",
    details:
      "Workflow orchestration with Zapier, Make, or n8n including AI-assisted classification and routing steps.",
  },
  {
    title: "Analytics",
    details:
      "GA4, Meta Pixel, and conversion event mapping to maintain clear reporting after launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-10 pt-14 md:pt-18">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26] md:text-[52px] md:leading-[1.15]">
            Services
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#4B5563]">
            Website delivery first. Integration where it matters.
          </p>
        </div>
      </Section>

      <Section id="website-development" className="pt-4">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26] md:text-4xl">Website Development (Primary)</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {websiteServices.map((service) => (
              <Card key={service.title} className="p-6">
                <h3 className="text-xl font-semibold text-[#1C1F26]">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#4B5563]">{service.details}</p>
                <ul className="mt-4 space-y-1 text-sm text-[#4B5563]">
                  <li>
                    <span className="font-semibold text-[#1C1F26]">Deliverables:</span> {service.deliverables}
                  </li>
                  <li>
                    <span className="font-semibold text-[#1C1F26]">Timeline:</span> {service.timeline}
                  </li>
                  <li>
                    <span className="font-semibold text-[#1C1F26]">Starting scope:</span> {service.scope}
                  </li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26] md:text-4xl">Integration Layer (Secondary)</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {integrationServices.map((service) => (
              <Card key={service.title} className="p-6">
                <h3 className="text-xl font-semibold text-[#1C1F26]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{service.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Card className="p-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26] md:text-4xl">What You Get</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4B5563]">
            Performance baseline, SEO essentials, analytics configuration, documentation, and team handover training.
          </p>
        </Card>
      </Section>
    </>
  );
}
