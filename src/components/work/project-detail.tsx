import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
  nextProjects: Project[];
}

const sectionClass = "grid gap-6 border-b border-[#E5E7EB] py-10 md:grid-cols-[260px_1fr]";

export function ProjectDetail({ project, nextProjects }: ProjectDetailProps) {
  return (
    <>
      <Section className="pb-10 pt-14 md:pb-12 md:pt-18">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5563]">
            Case Study
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#1C1F26] md:text-5xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[#4B5563]">
            {project.tags.map((tag) => (
              <Badge key={`${project.slug}-tag-${tag}`} variant={tag === "Website" ? "accent" : "neutral"}>
                {tag}
              </Badge>
            ))}
            <span>Timeline: {project.timeline}</span>
            {project.liveUrl ? (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#162A4F] underline-offset-4 hover:underline">
                Visit Live Site
              </Link>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              width={project.coverImage.width}
              height={project.coverImage.height}
              sizes="100vw"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <Section className="py-0">
        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Overview</h2>
          <p className="text-base leading-relaxed text-[#374151]">{project.brief}</p>
        </div>

        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Challenge</h2>
          <p className="text-base leading-relaxed text-[#374151]">
            The team needed a structured website that could communicate clearly and route high-intent leads into a consistent follow-up process.
          </p>
        </div>

        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Approach</h2>
          <p className="text-base leading-relaxed text-[#374151]">{project.approach}</p>
        </div>

        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Build</h2>
          <p className="text-base leading-relaxed text-[#374151]">{project.build}</p>
        </div>

        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Outcome</h2>
          <p className="text-base leading-relaxed text-[#374151]">{project.outcome}</p>
        </div>

        <div className={sectionClass}>
          <h2 className="text-xl font-semibold text-[#1C1F26]">Palette / UI Notes</h2>
          <div className="space-y-4">
            {project.palette && project.palette.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {project.palette.map((color) => (
                  <div key={`${project.slug}-${color}`} className="flex items-center gap-2">
                    <span
                      className="inline-block h-7 w-7 rounded border border-[#D1D5DB]"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                    <span className="font-mono text-xs text-[#4B5563]">{color}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-base leading-relaxed text-[#374151]">
                UI system centered on structured typography, restrained accents, and clear section hierarchy.
              </p>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1C1F26]">Next Projects</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {nextProjects.map((nextProject) => (
              <Card key={nextProject.slug} className="p-5">
                <p className="text-sm text-[#4B5563]">{nextProject.industry}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1C1F26]">{nextProject.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{nextProject.brief}</p>
                <Button asChild variant="secondary" className="mt-5">
                  <Link href={`/work/${nextProject.slug}`}>View case study</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
