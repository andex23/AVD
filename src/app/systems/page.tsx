import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";
import { getAssetByKey } from "@/content/assets";

export const metadata: Metadata = createPageMetadata("systems");

export default function SystemsPage() {
  const workflow = getAssetByKey("systemsWorkflow");
  const crmPreview = getAssetByKey("systemsCrmPipeline");

  return (
    <>
      <Section className="pb-10 pt-14 md:pt-18">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26] md:text-[52px] md:leading-[1.15]">
            Systems Integration
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#4B5563]">
            Connect your website to the tools that run your organization.
          </p>
        </div>
      </Section>

      <Section id="crm-architecture" className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Card className="p-6">
            <h2 className="text-3xl font-semibold text-[#1C1F26]">CRM Architecture</h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Lead capture to pipeline to follow-up, with clear data ownership and handoff rules.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#4B5563]">
              <li>Form capture mapped to contact records</li>
              <li>Pipeline stages aligned to your sales process</li>
              <li>Follow-up tasks assigned with SLA visibility</li>
            </ul>
          </Card>

          {crmPreview ? (
            <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
              <Image
                src={crmPreview.path}
                alt={crmPreview.alt}
                width={crmPreview.width}
                height={crmPreview.height}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </div>
      </Section>

      <Section id="automation-workflows">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1C1F26]">Automation Workflows</h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#4B5563]">
            Typical flow: form submit to CRM update to customer email and internal notification. Automation is applied where it reduces manual steps and response time.
          </p>

          {workflow ? (
            <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
              <Image
                src={workflow.path}
                alt={workflow.alt}
                width={workflow.width}
                height={workflow.height}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </div>
      </Section>

      <Section id="reporting">
        <Card className="p-8">
          <h2 className="text-3xl font-semibold text-[#1C1F26]">Reporting</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4B5563]">
            Conversion dashboards and weekly/monthly performance snapshots connect traffic, lead quality, and follow-up outcomes in one reporting layer.
          </p>
        </Card>
      </Section>
    </>
  );
}
