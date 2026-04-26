"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { journey } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animated progress along the path
  const pathHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-16 md:py-24 border-t border-hairline overflow-hidden"
    >
      {/* Vertical "JOURNEY" spine — runs along the right edge, replaces the
          old centered italic watermark that was eating the content.
          Mono caps, lime, sticks to the side like a magazine spine. */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden
        className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 -z-10 select-none pointer-events-none flex-col items-center gap-3"
      >
        <span className="block h-12 w-px bg-[var(--accent)]/40" />
        <span
          className="label-mono accent-text uppercase tracking-[0.45em]"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          journey · 2016 → now
        </span>
        <span className="block h-12 w-px bg-[var(--accent)]/40" />
      </motion.div>

      {/* Faint editorial mark — bleeds off the bottom-left edge only,
          so it never overlaps content. */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden
        className="absolute -left-12 -bottom-24 md:-bottom-40 font-display italic text-[10rem] md:text-[16rem] leading-none text-[var(--ink-muted)] opacity-[0.04] pointer-events-none select-none -z-10"
      >
        path
      </motion.div>

      <div className="container-edit relative">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <p className="section-tag">(Journey ／ 04)</p>
          <p className="eyebrow hidden md:block">
            — {journey.length} chapters · 2016 → now
          </p>
        </div>

        <Reveal>
          <h2 className="display-xl font-display mb-6 max-w-4xl">
            Not a résumé.
            <br />
            <span className="italic accent-text">A path.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[var(--foreground)]/70 max-w-xl mb-20 md:mb-32 text-base md:text-lg">
            From a final-year project in Sunyani to building products from
            Bolgatanga — every chapter taught me something the next one needed.
          </p>
        </Reveal>

        {/* Path */}
        <div className="relative grid grid-cols-12 gap-4 md:gap-8">
          {/* Vertical path rail */}
          <div className="hidden md:block absolute left-[calc(8.333%-0.5px)] top-0 bottom-0 w-px bg-[var(--hairline)]" />
          <motion.div
            style={{ height: pathHeight }}
            className="hidden md:block absolute left-[calc(8.333%-0.5px)] top-0 w-px bg-[var(--accent)] origin-top"
          />

          {/* Year rail (left) — sticky context */}
          <div className="hidden md:flex md:col-span-1 flex-col items-end pr-2">
            <div className="sticky top-32 label-mono text-[var(--muted-foreground)] text-right">
              <p>SPAN</p>
              <p className="accent-text mt-1 font-display text-2xl not-italic">
                2016
              </p>
              <p className="font-display text-2xl">↓</p>
              <p className="accent-text font-display text-2xl">now</p>
            </div>
          </div>

          {/* Chapters list */}
          <ol className="col-span-12 md:col-span-11 space-y-0">
            {journey.map((step, i) => (
              <Chapter key={step.id} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Chapter({
  step,
  index,
}: {
  step: (typeof journey)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"],
  });
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);
  const dotOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const isEdu = step.type === "education";

  return (
    <li
      ref={ref}
      className="relative grid grid-cols-12 gap-4 md:gap-8 py-12 md:py-16 border-t border-hairline first:border-t-0"
    >
      {/* Path dot */}
      <motion.span
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="hidden md:block absolute left-[-9px] top-[5.5rem] h-[18px] w-[18px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] z-10"
        aria-hidden
      />

      {/* Year & chapter */}
      <div className="col-span-12 md:col-span-3 md:pl-4">
        <Reveal>
          <p className="label-mono text-[var(--muted-foreground)] mb-2">
            {step.chapter} ·{" "}
            <span className="accent-text">{step.chapterLabel}</span>
          </p>
          <p className="font-display italic text-3xl md:text-4xl leading-none">
            {step.yearStart}
            {step.yearEnd ? (
              <span className="text-[var(--muted-foreground)]"> → {step.yearEnd}</span>
            ) : (
              <span className="text-[var(--muted-foreground)]"> → now</span>
            )}
          </p>
          <p className="label-mono text-[var(--muted-foreground)] mt-2">
            {step.period}
          </p>
          <p className="label-mono accent-text mt-1">
            [{isEdu ? "EDUCATION" : (step as { type_label?: string }).type_label?.toUpperCase()}]
          </p>
        </Reveal>
      </div>

      {/* Content */}
      <div className="col-span-12 md:col-span-9">
        <Reveal delay={0.05 + index * 0.03}>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight">
            {step.title}
          </h3>
          <p className="label-mono text-[var(--muted-foreground)] mb-5">
            {step.org} · {step.location}
          </p>

          <p className="font-display italic text-xl md:text-2xl text-[var(--foreground)]/80 mb-8 max-w-2xl leading-snug">
            {step.summary}
          </p>

          <ul className="space-y-2 max-w-2xl mb-8">
            {step.bullets.map((b, idx) => (
              <li key={idx} className="text-[var(--foreground)]/80 flex gap-3">
                <span className="accent-text shrink-0">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {step.technologies.map((t) => (
              <span
                key={t}
                className="label-mono px-2.5 py-1 rounded-full border border-hairline"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </li>
  );
}
