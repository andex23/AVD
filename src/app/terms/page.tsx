import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("terms");

export default function TermsPage() {
  return (
    <Section className="pt-14 md:pt-18">
      <article className="mx-auto max-w-3xl space-y-8 rounded-xl border border-[#E5E7EB] bg-white p-7 md:p-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26]">Terms & Conditions</h1>
          <p className="text-sm text-[#4B5563]">Effective date: February 18, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Use of Website</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            By using this website, you agree to use content for lawful and informational purposes only. Unauthorized use of content, brand assets, or source materials is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Service Engagement</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            Project scope, delivery timelines, pricing, and support commitments are defined in written proposals and signed agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Intellectual Property</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            Unless otherwise specified in contract, AVD retains ownership of proprietary methods, reusable frameworks, and pre-existing assets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Liability</h2>
          <p className="text-base leading-relaxed text-[#4B5563]">
            AVD is not liable for indirect, incidental, or consequential damages arising from website use or third-party platform disruptions.
          </p>
        </section>
      </article>
    </Section>
  );
}
