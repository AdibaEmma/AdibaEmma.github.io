"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "@/components/ui/reveal";

export function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rot = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div className="container-edit">
        <div className="flex items-baseline justify-between mb-16">
          <p className="section-tag">(Profile ／ 02)</p>
          <p className="eyebrow hidden md:block">— Origin story</p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <Reveal>
              <h2 className="display-xl font-display">
                Engineer.
                <br />
                <span className="italic">Builder</span>.
                <br />
                Thinker.
                <br />
                <span className="italic accent-text">Founder</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <Link href="/about" className="btn-magnetic btn-magnetic--ghost">
                <span>Full biography</span>
                <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <RevealText
              className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight"
              text="I design and ship resilient systems — from payment platforms moving real money to microservice trading engines and HR tools. I care about clean architecture, small surface areas, and code that quietly survives."
            />

            <Reveal delay={0.4} className="mt-12 grid grid-cols-2 gap-6 max-w-xl">
              <div>
                <p className="display-lg font-display">4+</p>
                <p className="label-mono text-[var(--muted-foreground)] mt-1">
                  Years shipping production software
                </p>
              </div>
              <div>
                <p className="display-lg font-display">15K+</p>
                <p className="label-mono text-[var(--muted-foreground)] mt-1">
                  Users served by systems I&rsquo;ve built
                </p>
              </div>
              <div>
                <p className="display-lg font-display">3</p>
                <p className="label-mono text-[var(--muted-foreground)] mt-1">
                  Solo ventures shipped &mdash; in production
                </p>
              </div>
              <div>
                <p className="display-lg font-display">48h</p>
                <p className="label-mono text-[var(--muted-foreground)] mt-1">
                  Door-to-door GearDockGH delivery in Bolgatanga
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Floating editorial watermark — bleeds off the bottom-left, behind everything */}
      <motion.div
        style={{ y, rotate: rot }}
        className="absolute -left-12 md:-left-24 -bottom-20 md:-bottom-40 font-display italic text-[10rem] md:text-[18rem] leading-none text-[var(--ink-muted)] opacity-[0.045] pointer-events-none select-none -z-10"
        aria-hidden
      >
        about
      </motion.div>
    </section>
  );
}
