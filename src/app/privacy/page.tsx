import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <Section className="pt-14 md:pt-18">
      <article className="mx-auto max-w-3xl space-y-8 rounded-xl border border-[#E5E7EB] bg-white p-7 md:p-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26]">Privacy Policy</h1>
          <p className="text-sm text-[#4B5563]">Effective date: February 18, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Information We Collect</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            We collect information you provide through contact forms, consultation requests, and direct communication. This may include name, organization, email, phone number, project scope, timeline, and budget details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">How We Use Information</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            Information is used to evaluate project fit, respond to inquiries, provide proposals, and improve website performance. We do not sell personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Analytics</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            We may use analytics tools to understand page usage and conversion behavior. Analytics data is used in aggregate form for service improvement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Contact</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            For privacy-related requests, contact hello@acestarvillamdomum.com.
          </p>
        </section>
      </article>
    </Section>
  );
}
