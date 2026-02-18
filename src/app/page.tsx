import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/work/project-card";
import { getFeaturedProjects } from "@/lib/projects/repository";
import { createPageMetadata } from "@/lib/seo";
import { getAssetByKey } from "@/content/assets";
import { homeProcess } from "@/content/site";

export const metadata: Metadata = createPageMetadata("home");

const serviceCards = [
  {
    title: "Website Development",
    description:
      "Primary service. Structured websites engineered for performance, clarity, and conversion.",
  },
  {
    title: "Brand-ready Design System",
    description:
      "Consistent UI foundations delivered as part of the website build for scalable updates.",
  },
  {
    title: "CRM Setup",
    description:
      "Integration layer for lead capture, pipeline structure, and sales handoff consistency.",
  },
  {
    title: "AI Automation",
    description:
      "Workflow automations connecting form events, CRM actions, and internal notifications.",
  },
];

const performanceStats = [
  { label: "Typical build speed", value: "5-10 weeks" },
  { label: "Systems integrated", value: "CRM + automation" },
  { label: "Launch readiness", value: "Performance + SEO" },
];

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects(3);

  const heroDesktop = getAssetByKey("heroDesktopMockup");
  const heroMobile = getAssetByKey("heroMobileMockup");
  const crmOverlay = getAssetByKey("crmStatusOverlay");
  const automationBadge = getAssetByKey("automationBadge");
  const projectPreview = getAssetByKey("projectMockOne");
  const workflowPreview = getAssetByKey("systemsWorkflow");

  return (
    <>
      <Section reveal="dramatic" className="pb-10 pt-18 md:pb-12 md:pt-24">
        <div className="motion-sequence space-y-10 text-center">
          <h1 className="type-display mx-auto max-w-5xl text-[var(--color-text)]">
            Websites Built to Perform. Systems Built to Scale.
          </h1>

          <p className="type-lead measure mx-auto max-w-3xl">
            Acestar Villam Domum designs high-performance websites and integrates CRM and automation to create connected digital foundations for modern organizations.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full px-7 text-xs uppercase tracking-[0.09em]">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full px-7 text-xs uppercase tracking-[0.09em]">
              <Link href="/work">View Work</Link>
            </Button>
          </div>

          <div className="mx-auto grid w-full max-w-5xl gap-3 border-y border-[var(--color-border)] py-5 sm:grid-cols-3">
            {performanceStats.map((stat) => (
              <div key={stat.label} className="px-2 py-1 text-left sm:px-4 sm:text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--color-text)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section reveal="dramatic" className="bg-white py-9 md:py-12">
        <div className="motion-sequence mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
          <h2 className="type-h2 max-w-2xl text-[var(--color-text)]">Live Product Preview</h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-right">
            One system view across desktop and mobile with CRM and automation status surfaced in context.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.24fr_0.76fr] xl:items-stretch">
          <div className="group section-frame overflow-hidden p-4 md:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">Website Layer</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Desktop</p>
            </div>
            {heroDesktop ? (
              <Image
                src={heroDesktop.path}
                alt={heroDesktop.alt}
                width={heroDesktop.width}
                height={heroDesktop.height}
                sizes="(max-width: 1279px) 100vw, 62vw"
                className="h-full min-h-[330px] w-full rounded-lg border border-[var(--color-border)] object-cover transition-transform duration-700 group-hover:scale-[1.018]"
                priority
              />
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-[0.58fr_0.42fr] xl:grid-cols-1">
            <div className="float-slow section-frame p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">Website Layer</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Mobile</p>
              </div>
              {heroMobile ? (
                <Image
                  src={heroMobile.path}
                  alt={heroMobile.alt}
                  width={heroMobile.width}
                  height={heroMobile.height}
                  sizes="(max-width: 767px) 100vw, 35vw"
                  className="mx-auto h-full max-h-[500px] w-auto rounded-lg border border-[var(--color-border)]"
                  priority
                />
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
              <div className="float-fast section-frame p-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">CRM Connected</p>
                {crmOverlay ? (
                  <Image
                    src={crmOverlay.path}
                    alt={crmOverlay.alt}
                    width={crmOverlay.width}
                    height={crmOverlay.height}
                    sizes="(max-width: 639px) 100vw, 22vw"
                    className="h-auto w-full rounded-lg"
                  />
                ) : null}
              </div>

              <div className="section-frame p-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">Automation Active</p>
                {automationBadge ? (
                  <Image
                    src={automationBadge.path}
                    alt={automationBadge.alt}
                    width={automationBadge.width}
                    height={automationBadge.height}
                    sizes="(max-width: 639px) 100vw, 22vw"
                    className="h-auto w-full rounded-lg"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section reveal="normal" className="bg-white pt-8">
        <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div className="motion-sequence space-y-6">
            <h2 className="type-h2 text-[var(--color-text)]">Connected Digital Foundations</h2>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Website delivery comes first. Integration layers are added only where they create measurable operational improvement.
            </p>

            <div className="space-y-3">
              {serviceCards.map((card, index) => (
                <Card key={card.title} className="p-4 md:p-5">
                  <div className="flex items-start gap-4">
                    <p className="min-w-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">{card.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{card.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {projectPreview ? (
            <div className="motion-sequence space-y-4">
              <div className="section-frame overflow-hidden p-4">
                <Image
                  src={projectPreview.path}
                  alt={projectPreview.alt}
                  width={projectPreview.width}
                  height={projectPreview.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full rounded-lg border border-[var(--color-border)]"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Website structure", "CRM routing", "Automation triggers"].map((item) => (
                  <div key={item} className="section-frame p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--color-primary)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Section>

      <Section reveal="soft">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="section-frame border-[var(--color-border-strong)] p-7">
            <p className="kicker-label">Speed</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
              Deploy in weeks, not months
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
              Scope stays clear, decisions are documented, and delivery cadence remains predictable.
            </p>
          </Card>
          <Card className="section-frame border-[var(--color-border-strong)] p-7">
            <p className="kicker-label">Integration</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
              Connect systems properly
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
              Website, CRM, and automation are connected as one operating layer instead of isolated tools.
            </p>
          </Card>
        </div>
      </Section>

      <Section reveal="normal" className="bg-white">
        <div className="space-y-8">
          <div className="motion-sequence space-y-4">
            <p className="kicker-label">Process</p>
            <h2 className="type-h2 text-[var(--color-text)]">Discover. Design. Build. Integrate. Optimize.</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {homeProcess.map((step, index) => (
              <Card key={step.title} className="section-frame p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--color-primary)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
              </Card>
            ))}
          </div>

          {workflowPreview ? (
            <div className="section-frame overflow-hidden p-4">
              <Image
                src={workflowPreview.path}
                alt={workflowPreview.alt}
                width={workflowPreview.width}
                height={workflowPreview.height}
                sizes="100vw"
                className="h-auto w-full rounded-lg border border-[var(--color-border)]"
              />
            </div>
          ) : null}
        </div>
      </Section>

      <Section reveal="soft">
        <div className="space-y-8">
          <div className="motion-sequence flex flex-wrap items-center justify-between gap-4">
            <h2 className="type-h2 text-[var(--color-text)]">Featured Work</h2>
            <Button asChild variant="secondary" className="text-xs uppercase tracking-[0.08em]">
              <Link href="/work">View All Work</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section reveal="dramatic" className="pb-20 md:pb-24">
        <Card className="border-[var(--color-primary)] bg-[var(--color-primary)] p-8 md:p-10">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Ready to ship a faster, clearer web presence?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Start with a structured website build. Integrate CRM and automation only where it improves operations.
          </p>
          <Button asChild variant="secondary" className="mt-6 border-white text-white hover:bg-white/10">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </Card>
      </Section>
    </>
  );
}
