"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { roles } from "@/lib/constants";
import { PILLARS, pillarUppercase } from "@/lib/brand";

// 3D scene only on client (heavy bundle, mouse-driven)
const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Atmospheric glow */}
      <div className="hero-glow" aria-hidden />

      {/* 3D scene — fills viewport, sits behind type on the right */}
      <div className="absolute inset-0 md:left-[35%] z-0 opacity-90 md:opacity-100">
        <HeroScene />
      </div>

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
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-start justify-between gap-6"
        >
          <div className="section-tag">
            <span>(Index ／ 01)</span>
          </div>
          <div className="hidden md:block text-right">
            <p className="label-mono text-[var(--muted-foreground)]">
              Portfolio · Vol. <span className="accent-text">02</span>
            </p>
            <p className="label-mono text-[var(--muted-foreground)] mt-1">
              Edition {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>

        {/* Center: massive editorial type */}
        <div className="relative flex-1 flex items-center">
          <div className="w-full grid md:grid-cols-12 items-center gap-6">
            <div className="md:col-span-7">
              {/* Pillar eyebrow — the four-pillar identity, in fixed order */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
                className="label-mono accent-text mb-5 flex flex-wrap items-center gap-x-2 gap-y-1"
              >
                {PILLARS.map((p, i) => (
                  <span key={p} className="flex items-center gap-2">
                    <span>{pillarUppercase(p)}</span>
                    {i < PILLARS.length - 1 && (
                      <span className="text-[var(--ink-muted)]">·</span>
                    )}
                  </span>
                ))}
              </motion.p>

              <motion.h1
                className="display-mega font-display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Emmanuel
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    className="block italic accent-text"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Adiba
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 max-w-xl"
              >
                <p className="font-sans text-base md:text-lg text-[var(--foreground)]/80 leading-relaxed">
                  Shipping client products at{" "}
                  <span className="accent-text font-medium">GTN</span>, running
                  solo ventures from Ghana, and quietly experimenting at the
                  seam between{" "}
                  <em className="italic-display">code and cognition</em>. Based
                  in Bolgatanga.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-5 hidden md:block">
              {/* Reserved for sphere — kept empty for visual breathing */}
            </div>
          </div>
        </div>

        {/* Meta strip — coords + real availability status (in flow, not absolute) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="hidden md:flex justify-end items-center gap-6 label-mono text-[var(--ink-muted)] mb-6 pb-6 border-b border-hairline"
        >
          <span>
            LAT <span className="text-[var(--foreground)]">10.78°N</span>
          </span>
          <span>
            LNG <span className="text-[var(--foreground)]">0.85°W</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="text-[var(--foreground)]">
              Available · Q2 2026
            </span>
          </span>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid md:grid-cols-12 gap-6 items-end"
        >
          {/* Role rotator */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-2">(Currently)</p>
            <div className="font-display text-2xl md:text-3xl h-10 overflow-hidden">
              <motion.div
                key={roleIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="italic">{roles[roleIdx]}</span>
              </motion.div>
            </div>
          </div>

          {/* CTAs */}
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
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
