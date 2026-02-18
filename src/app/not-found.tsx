import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-20 md:pt-28">
      <div className="mx-auto max-w-2xl rounded-xl border border-[#E5E7EB] bg-white p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F25A2B]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1C1F26]">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
          The page you requested does not exist or may have moved.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </Section>
  );
}
