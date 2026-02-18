"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-4 md:px-5 lg:px-6 xl:px-7">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[1.1rem] font-extrabold uppercase tracking-[0.1em] text-[var(--color-primary)]">AVD</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]/80 lg:block">
            Web Systems
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "uppercase tracking-[0.12em] text-[12px] font-semibold transition-colors",
                    active
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild className="hidden h-10 px-5 text-xs uppercase tracking-[0.08em] md:inline-flex">
            <Link href="/contact">Book Consultation</Link>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-secondary)] md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-3 px-4 py-4 md:px-5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className={cn(
                    "rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-[0.12em]",
                    active
                      ? "bg-[var(--color-surface-soft)] text-[var(--color-primary)]"
                      : "text-[var(--color-text)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-1 h-10 text-xs uppercase tracking-[0.08em]">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
