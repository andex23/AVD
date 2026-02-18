import Link from "next/link";
import { footerColumns, siteConfig } from "@/content/site";
import { Section } from "@/components/layout/section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] text-white">
      <Section className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-[var(--color-primary)]">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
              Websites built to perform. Systems built to scale. Website delivery is the core, with CRM and automation integrated where needed.
            </p>
            <p className="mt-5 text-sm text-white/80">{siteConfig.location}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/95">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}-${link.href}`}>
                    <Link href={link.href} className="text-sm text-white/80 transition hover:text-[var(--color-primary)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium">Get useful business updates</p>
              <p className="text-sm text-white/75">
                Optional newsletter for web performance and systems integration insights.
              </p>
            </div>
            <form className="flex w-full max-w-md items-center gap-2">
              <Input
                type="email"
                placeholder="Work email"
                className="border-white/30 bg-white text-[var(--color-text)]"
                aria-label="Newsletter email"
              />
              <Button type="button" className="min-w-[110px]">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>Built with a website-first approach and structured integration standards.</p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
