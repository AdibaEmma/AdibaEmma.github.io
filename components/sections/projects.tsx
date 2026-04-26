"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/constants";
import {
  PILLARS,
  PILLAR_LABEL,
  PILLAR_TAGLINE,
  Pillar,
  pillarUppercase,
} from "@/lib/brand";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCover } from "@/components/ui/project-cover";
import { cn } from "@/lib/utils";

type Filter = "all" | Pillar;
const FILTERS: Filter[] = ["all", ...PILLARS];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.pillars.includes(filter)),
    [filter],
  );

  // Counts per filter for the chip badges
  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: projects.length,
      engineer: 0,
      builder: 0,
      thinker: 0,
      founder: 0,
    };
    projects.forEach((p) => p.pillars.forEach((pl) => (c[pl] += 1)));
    return c;
  }, []);

  return (
    <section className="relative pt-24 pb-32">
      <div className="container-edit">
        <div className="flex items-baseline justify-between mb-12">
          <p className="section-tag">(Index ／ 03)</p>
          <p className="eyebrow hidden md:block">
            — {projects.length} entries · across four pillars
          </p>
        </div>

        <Reveal>
          <h1 className="display-xl font-display leading-[0.9]">
            Selected
            <br />
            <span className="italic accent-text">work.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-[var(--foreground)]/70 text-base md:text-lg">
            Sorted by pillar, not by date. Engineer is client work at GTN.
            Builder is exploratory. Thinker is the lab. Founder is venture work
            with users and revenue intent. Filter to see the shape of each.
          </p>
        </Reveal>

        {/* Filter chips — driven entirely by PILLARS */}
        <Reveal
          delay={0.25}
          className="mt-16 flex flex-wrap gap-2 border-b border-hairline pb-6"
        >
          {FILTERS.map((c) => {
            const active = filter === c;
            const label = c === "all" ? "All" : PILLAR_LABEL[c];
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "label-mono uppercase rounded-full px-4 py-2 border transition-all flex items-center gap-2",
                  active
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]"
                    : "border-hairline text-[var(--ink-muted)] hover:text-[var(--foreground)]",
                )}
              >
                <span>{label}</span>
                <span
                  className={cn(
                    "tabular-nums text-[0.65rem]",
                    active
                      ? "text-[var(--accent-foreground)]/60"
                      : "text-[var(--ink-muted)]",
                  )}
                >
                  {counts[c]}
                </span>
              </button>
            );
          })}
          <span className="label-mono ml-auto self-center text-[var(--ink-muted)]">
            ／ {filtered.length} shown
            {filter !== "all" && (
              <span className="ml-2 italic accent-text">
                — {PILLAR_TAGLINE[filter as Pillar]}
              </span>
            )}
          </span>
        </Reveal>

        {/* Editorial bento — every 3rd card spans full width for visual rhythm */}
        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const isWide = i % 3 === 0;
              const span = isWide ? "md:col-span-12" : "md:col-span-6";
              const primaryPillar = p.pillars[0];
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "group relative col-span-12 overflow-hidden rounded-md border border-hairline bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent-glow)] transition-[border-color,box-shadow] duration-500",
                    span,
                  )}
                >
                  <a
                    href={p.liveUrl || p.githubUrl || "#"}
                    target={p.liveUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={cn(
                      "block",
                      isWide ? "md:grid md:grid-cols-2 md:items-stretch" : "",
                    )}
                  >
                    {/* Visual area — real screenshot OR typographic draft cover */}
                    <div
                      className={cn(
                        "relative overflow-hidden",
                        isWide ? "aspect-[16/10] md:aspect-auto md:min-h-[360px]" : "aspect-[16/10]",
                      )}
                    >
                      {p.image ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={p.title}
                            className="h-full w-full object-cover object-top brightness-[0.85] saturate-90 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent" />
                        </>
                      ) : (
                        <ProjectCover
                          title={p.title}
                          tagline={p.tagline}
                          pillar={primaryPillar}
                        />
                      )}

                      {/* Pillar tag — top-left, mono caps, lime */}
                      <div className="absolute top-3 left-3 label-mono accent-text uppercase tracking-[0.18em] flex items-center gap-2">
                        <span>●</span>
                        <span>{pillarUppercase(primaryPillar)}</span>
                        {p.pillars.length > 1 && (
                          <span className="text-[var(--ink-muted)] normal-case lowercase">
                            +{p.pillars.length - 1}
                          </span>
                        )}
                      </div>

                      {/* Role — top-right (replaces year) */}
                      <div className="absolute top-3 right-3 label-mono text-[var(--foreground)] mix-blend-difference">
                        {p.role}
                      </div>

                      {/* Reveal-on-hover metric strip */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <div className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 label-mono flex items-center justify-between">
                          <span>✶ {p.impact}</span>
                          {p.liveUrl && <span className="opacity-70">↗ open</span>}
                        </div>
                      </div>
                    </div>

                    {/* Copy column */}
                    <div className="flex flex-col p-6 md:p-8 gap-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="label-mono text-[var(--ink-muted)]">
                          {p.year}
                        </p>
                        <span className="label-mono accent-text">↗</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
                        {p.title}
                      </h3>
                      <p className="font-display italic text-lg md:text-xl text-[var(--foreground)]/80">
                        {p.tagline}
                      </p>
                      <p className="text-sm md:text-base text-[var(--ink-secondary)] max-w-prose">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="label-mono px-2 py-0.5 rounded-full border border-hairline text-[var(--ink-muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="border-t border-hairline pt-3 mt-2 flex items-center justify-between">
                        <span className="label-mono accent-text">
                          ✶ {p.impact}
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <Reveal className="mt-20 text-center label-mono text-[var(--ink-muted)]">
          ／ More chapters in the works · come back soon ／
        </Reveal>
      </div>
    </section>
  );
}
