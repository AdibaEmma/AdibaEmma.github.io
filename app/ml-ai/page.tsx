import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { PILLAR_LABEL, pillarUppercase } from "@/lib/brand";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML / AI",
  description:
    "Machine Learning and AI explorations by Emmanuel Adiba — at the intersection of code and cognition.",
};

export default function MLAIPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-12 md:pt-16">
        <section className="container-edit pt-24 pb-32 relative">
          <div className="hero-glow" aria-hidden />

          <div className="flex items-baseline justify-between mb-6">
            <p className="section-tag">
              ({pillarUppercase("thinker")} · 04)
            </p>
            <p className="eyebrow hidden md:block">— Drafting</p>
          </div>
          <Reveal delay={0.05}>
            <p className="eyebrow accent-text mb-8">
              The {PILLAR_LABEL.thinker} pillar — the lab.
            </p>
          </Reveal>

          <Reveal>
            <h1 className="display-xl font-display leading-[0.9]">
              Where code
              <br />
              meets <span className="italic accent-text">cognition.</span>
            </h1>
          </Reveal>

          <div className="mt-20 grid lg:grid-cols-12 gap-10">
            <Reveal delay={0.1} className="lg:col-span-7 space-y-6">
              <p className="font-display text-2xl md:text-3xl leading-tight">
                A quiet lab is being built — at the seam between engineering and
                psychology, between deterministic systems and the messy logic of
                human decision-making.
              </p>
              <p className="text-[var(--foreground)]/75 text-base md:text-lg leading-relaxed max-w-xl">
                Expect explorations in classical ML, applied LLM tooling, and
                small experiments in cognitive modeling. Posts and code drops
                land here as they finish.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="lg:col-span-5">
              <div className="rounded-md border border-hairline p-8 bg-[var(--surface)] space-y-4">
                <p className="eyebrow">(Drafts queued)</p>
                <ul className="space-y-3">
                  {[
                    "Vector search for semantic resume parsing",
                    "Fine-tuning Llama on Stoic philosophy",
                    "Behavioral economics in payment UX",
                    "Bayesian models for personal forecasting",
                  ].map((d, i) => (
                    <li
                      key={d}
                      className="flex gap-3 items-baseline border-b border-hairline pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="label-mono text-[var(--muted-foreground)] tabular-nums">
                        ／0{i + 1}
                      </span>
                      <span className="font-display text-lg">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="mt-16">
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="btn-magnetic btn-magnetic--primary"
              >
                <span>Subscribe via brief</span>
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
