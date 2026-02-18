"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/work/project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

type Filter = "all" | "website" | "crm" | "automation";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "CRM", value: "crm" },
  { label: "Automation", value: "automation" },
];

interface WorkGridProps {
  projects: Project[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.services.includes(activeFilter));
  }, [activeFilter, projects]);

  const countByFilter = useMemo(() => {
    return {
      all: projects.length,
      website: projects.filter((project) => project.services.includes("website")).length,
      crm: projects.filter((project) => project.services.includes("crm")).length,
      automation: projects.filter((project) => project.services.includes("automation")).length,
    } satisfies Record<Filter, number>;
  }, [projects]);

  return (
    <div className="space-y-8">
      <div className="section-frame flex flex-wrap items-center justify-between gap-4 p-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter.value;
            return (
              <Button
                key={filter.value}
                type="button"
                variant={active ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full px-4 text-[11px] uppercase tracking-[0.1em]"
              >
                {filter.label}
                <span className="ml-2 rounded-full bg-white/25 px-1.5 py-0.5 text-[10px]">
                  {countByFilter[filter.value]}
                </span>
              </Button>
            );
          })}
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.11em] text-[var(--color-muted)]">
          Showing {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="section-frame p-5 text-sm text-[var(--color-muted)]">
          No projects match this filter yet.
        </p>
      ) : null}
    </div>
  );
}
