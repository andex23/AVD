"use client";

import { cn } from "@/lib/utils";
import { type CSSProperties, type ReactNode, useEffect, useMemo, useRef, useState } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  reveal?: "soft" | "normal" | "dramatic";
}

const revealConfig = {
  soft: {
    offset: "14px",
    duration: "520ms",
    step: "64ms",
    threshold: 0.2,
    rootMargin: "0px 0px -14% 0px",
  },
  normal: {
    offset: "26px",
    duration: "760ms",
    step: "92ms",
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px",
  },
  dramatic: {
    offset: "40px",
    duration: "980ms",
    step: "132ms",
    threshold: 0.08,
    rootMargin: "0px 0px -3% 0px",
  },
} as const;

export function Section({
  id,
  children,
  className,
  innerClassName,
  reveal = "normal",
}: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [revealReady, setRevealReady] = useState(false);
  const config = useMemo(() => revealConfig[reveal], [reveal]);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    if (typeof window === "undefined" || typeof window.IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const inInitialViewport = element.getBoundingClientRect().top <= viewportHeight * 1.15;
    setRevealReady(true);
    if (inInitialViewport) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: config.threshold,
        rootMargin: config.rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [config.rootMargin, config.threshold]);

  const style = {
    "--reveal-offset": config.offset,
    "--reveal-duration": config.duration,
    "--reveal-step": config.step,
  } as CSSProperties;

  return (
    <section
      id={id}
      ref={sectionRef}
      data-visible={visible ? "true" : "false"}
      data-reveal={reveal}
      style={style}
      className={cn(
        "section-reveal py-16 md:py-24",
        revealReady && "reveal-init",
        visible && "is-visible",
        className,
      )}
    >
      <div
        className={cn(
          "section-inner mx-auto w-full max-w-[var(--container-max)] px-4 md:px-5 lg:px-6 xl:px-7",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
