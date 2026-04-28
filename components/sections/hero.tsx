"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { roles } from "@/lib/constants";
import { PILLARS, pillarUppercase, type Pillar } from "@/lib/brand";
import { PILLAR_ENTRIES, type PillarEntry } from "@/lib/pillar-log";
import { PillarOverlay } from "@/components/sections/pillar-overlay";

// 3D scene only on client (heavy bundle, mouse-driven). A faint static SVG
// is rendered while the chunk loads so we don't flash empty space.
const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 400 320"
          className="w-3/4 max-w-[420px] opacity-30"
          aria-hidden
        >
          {(
            [
              [0, 1],
              [0, 2],
              [0, 3],
              [1, 2],
              [1, 3],
              [2, 3],
            ] as const
          ).map(([a, b], i) => {
            const v: Array<[number, number]> = [
              [200, 90],
              [110, 240],
              [290, 240],
              [200, 195],
            ];
            return (
              <line
                key={i}
                x1={v[a][0]}
                y1={v[a][1]}
                x2={v[b][0]}
                y2={v[b][1]}
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1"
                className="text-[var(--accent)]"
              />
            );
          })}
        </svg>
      </div>
    ),
  },
);

export function HeroSection({
  engineerEntry,
}: {
  engineerEntry: PillarEntry;
}) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [focusedPillar, setFocusedPillar] = useState<Pillar | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reducedMotion]);

  // Combine server-fetched engineer entry with the authored entries so the
  // overlay shows live data for Engineer and authored data for the rest.
  const overlayEntries = {
    engineer: engineerEntry,
    builder: PILLAR_ENTRIES.builder,
    thinker: PILLAR_ENTRIES.thinker,
    founder: PILLAR_ENTRIES.founder,
  };

  // When reduced motion is requested, skip framer's initial offsets entirely.
  const fade = reducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Atmospheric glow — dialed back, no longer competes with type */}
      <div className="hero-glow" aria-hidden />

      {/* 3D scene — constrained to the right column, faded at the left edge so
          it cannot bleed across the H1 typography. Pointer events live on
          this layer so vertex clicks work; the masked region is unhittable. */}
      <div
        className="absolute inset-y-0 right-0 left-0 md:left-[42%] z-0 opacity-70 md:opacity-90"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
        }}
      >
        <HeroScene
          onVertexClick={setFocusedPillar}
          focusedPillar={focusedPillar}
        />
      </div>

      {/* Hint that the form is interactive — small lime tag aligned to the
          masked region. Only shown when no pillar is focused. */}
      {!focusedPillar && (
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="hidden md:flex absolute bottom-44 right-8 z-10 items-center gap-2 label-mono text-[var(--ink-muted)] pointer-events-none"
          aria-hidden
        >
          <span className="h-px w-8 bg-[var(--accent)]/60" />
          <span>Click a pillar</span>
        </motion.div>
      )}

      {/* Hairline grid overlay */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay"
      >
        <defs>
          <pattern id="hg" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hg)" />
      </svg>

      <div className="container-edit relative z-10 min-h-[100svh] flex flex-col justify-between pt-32 pb-12">
        {/* Top eyebrow — index left, availability right */}
        <motion.div
          {...fade}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-start justify-between gap-6"
        >
          <div className="section-tag">
            <span>(Index ／ 01)</span>
          </div>
          <div className="hidden md:flex items-center gap-2 label-mono text-[var(--ink-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="text-[var(--foreground)]">Available now</span>
          </div>
        </motion.div>

        {/* Center: massive editorial type */}
        <div className="relative flex-1 flex items-center">
          <div className="w-full grid md:grid-cols-12 items-center gap-6">
            <div className="md:col-span-7">
              {/* Pillar eyebrow — demoted from accent to muted ink. The
                  tetrahedron carries the accent for this concept now. */}
              <motion.p
                {...fade}
                transition={{ duration: 1, delay: 0.25 }}
                className="label-mono text-[var(--ink-muted)] mb-5 flex flex-wrap items-center gap-x-2 gap-y-1"
              >
                {PILLARS.map((p, i) => (
                  <span key={p} className="flex items-center gap-2">
                    <span>{pillarUppercase(p)}</span>
                    {i < PILLARS.length - 1 && (
                      <span className="text-[var(--ink-muted)] opacity-50">·</span>
                    )}
                  </span>
                ))}
              </motion.p>

              <motion.h1
                className="display-mega font-display"
                {...fade}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reducedMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Emmanuel
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block italic accent-text"
                    initial={reducedMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Adiba
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                {...fade}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 max-w-xl"
              >
                <p className="font-sans text-base md:text-lg text-[var(--foreground)]/80 leading-relaxed">
                  Shipping client products at GTN, running solo ventures from
                  Ghana, and experimenting at the seam between{" "}
                  <em className="italic-display">code and cognition</em>. Based
                  in Bolgatanga.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-5 hidden md:block">
              {/* Reserved space — sphere lives in the canvas behind */}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid md:grid-cols-12 gap-6 items-end pt-6 border-t border-hairline"
        >
          {/* Role rotator — all noun phrases now, so "(Currently) X" reads */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-2">(Currently)</p>
            <div className="font-display text-2xl md:text-3xl h-10 overflow-hidden">
              <motion.div
                key={roleIdx}
                initial={reducedMotion ? false : { y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="italic">{roles[roleIdx]}</span>
              </motion.div>
            </div>
          </div>

          {/* CTAs — primary sits on dark ground (canvas is masked left-of-7),
              so contrast is preserved */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.25}>
              <Link href="/contact" className="btn-magnetic btn-magnetic--primary">
                <span>Hire me</span>
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/projects" className="btn-magnetic btn-magnetic--ghost">
                <span>Selected work</span>
                <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
          </div>

          {/* Scroll cue */}
          <div className="md:col-span-3 flex md:justify-end items-end">
            <a href="#about" className="group flex items-center gap-3">
              <span className="label-mono text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                Scroll
              </span>
              <span className="relative h-12 w-px bg-[var(--hairline)] overflow-hidden block">
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-[var(--accent)]"
                  animate={reducedMotion ? { y: 0 } : { y: ["-100%", "200%"] }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <PillarOverlay
        pillar={focusedPillar}
        entries={overlayEntries}
        onClose={() => setFocusedPillar(null)}
      />
    </section>
  );
}
