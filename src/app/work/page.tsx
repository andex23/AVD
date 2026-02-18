import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { WorkGrid } from "@/components/work/work-grid";
import { getAllProjects } from "@/lib/projects/repository";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("work");

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <>
      <Section reveal="dramatic" className="pb-8 pt-16 md:pb-10 md:pt-20">
        <div className="motion-sequence space-y-5">
          <p className="kicker-label">Case Studies</p>
          <h1 className="type-h2 max-w-3xl text-[var(--color-text)] md:text-[52px] md:leading-[1.12]">
            Selected Work
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Websites and integrated systems built for growing organizations.
          </p>
        </div>
      </Section>

      <Section reveal="normal" className="pb-14 pt-2 md:pb-18 md:pt-2">
        <WorkGrid projects={projects} />
      </Section>
    </>
  );
}
