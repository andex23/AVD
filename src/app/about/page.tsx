import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { homeProcess } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Section className="pb-10 pt-14 md:pt-18">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26] md:text-[52px] md:leading-[1.15]">
            About AVD
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#4B5563]">
            We build fast, structured websites and connect the systems behind them.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <Card className="p-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26]">Philosophy</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4B5563]">
            Clarity beats cleverness. Website development is the primary service. CRM and automation are integration layers that support operations once the core website foundation is strong.
          </p>
        </Card>
      </Section>

      <Section>
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26]">Process</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {homeProcess.map((step) => (
              <Card key={step.title} className="p-5">
                <h3 className="text-lg font-semibold text-[#1C1F26]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-[#1C1F26]">Team</h2>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
              Cross-functional senior web engineers, UX practitioners, and systems integrators.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-[#1C1F26]">How We Work</h2>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
              Remote-first collaboration with structured weekly check-ins across US and EU-friendly time zones.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
