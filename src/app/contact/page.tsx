import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = createPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 pt-14 md:pt-18">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-[#1C1F26] md:text-[52px] md:leading-[1.15]">
            Start a Project
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#4B5563]">
            Tell us what you need. We&apos;ll reply with next steps.
          </p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-6 md:p-8">
            <ContactForm />
          </Card>

          <Card className="h-fit p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[#1C1F26]">Direct Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-[#4B5563]">
              <p>
                <span className="font-semibold text-[#1C1F26]">Email:</span> {siteConfig.email}
              </p>
              <p>
                <span className="font-semibold text-[#1C1F26]">WhatsApp:</span>{" "}
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#162A4F] underline-offset-4 hover:underline"
                >
                  Open chat
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#1C1F26]">Location:</span> {siteConfig.location}
              </p>
            </div>

            <p className="mt-6 rounded-md border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-sm text-[#166534]">
              We&apos;ll respond within {siteConfig.responseSla}.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
