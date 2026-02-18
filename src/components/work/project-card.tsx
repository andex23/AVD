import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group section-frame overflow-hidden border-[var(--color-border)] p-0">
      <div className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-soft)]">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          width={project.coverImage.width}
          height={project.coverImage.height}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-[var(--color-surface)]/95 px-4 py-3 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--color-primary)]">{project.industry}</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.11em] text-[var(--color-muted)]">{project.timeline}</p>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold leading-tight text-[var(--color-text)]">
            <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 hover:text-[var(--color-primary)]">
              {project.title}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {project.brief}
          </p>
        </div>

        <div className="soft-divider pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={`${project.slug}-${tag}`}
                variant={tag === "Website" ? "accent" : "neutral"}
                className="rounded-full px-3"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
