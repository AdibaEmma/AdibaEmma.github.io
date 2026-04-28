"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 border-t border-hairline overflow-hidden">
      <div className="hero-glow" aria-hidden />

      <div className="container-edit relative">
        <div className="flex items-baseline justify-between mb-12">
          <p className="section-tag">(Contact ／ 06)</p>
          <p className="eyebrow hidden md:block">— Inbox open</p>
        </div>

        <Reveal>
          <h2 className="display-mega font-display leading-[0.85]">
            Have an
            <br />
            <span className="italic accent-text">idea?</span>
            <br />
            Let&rsquo;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 max-w-xl">
          <p className="text-lg text-[var(--foreground)]/75">
            I take on a small number of engagements per quarter — engineering
            for teams that care about the details.
          </p>
        </Reveal>

        <Reveal delay={0.35} className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-magnetic btn-magnetic--primary"
            >
              <span>Start a conversation</span>
              <span aria-hidden>→</span>
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link href="/contact" className="btn-magnetic btn-magnetic--ghost">
              <span>Or fill the brief</span>
              <span aria-hidden>↗</span>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
