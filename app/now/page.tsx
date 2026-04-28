import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Emmanuel Adiba is working on this month — a /now page in the spirit of nownownow.com.",
};

// Updated monthly. Dated paragraph + a small list. Honest, present-tense.
const LAST_UPDATED = "April 26, 2026";

export default function NowPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-12 md:pt-16">
        <section className="container-edit pt-16 pb-32 relative">
          <div className="hero-glow" aria-hidden />

          <div className="flex items-baseline justify-between mb-12">
            <p className="section-tag">(Now ／ live)</p>
            <p className="eyebrow hidden md:block">
              — Updated {LAST_UPDATED}
            </p>
          </div>

          <Reveal>
            <h1 className="display-xl font-display leading-[0.9]">
              What I&rsquo;m
              <br />
              <span className="italic accent-text">doing now.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 max-w-2xl">
            <p className="font-display text-2xl md:text-3xl leading-snug text-[var(--foreground)]/90">
              Heads-down on{" "}
              <span className="italic-display accent-text">ImportBrain</span> —
              wiring the FX-tracking engine to live cedi quotes, then shipping
              the first paid tier to the 8 of 20 founder-spot signups. In
              parallel: crafting an{" "}
              <span className="italic-display">MCP server</span> for the
              Compliance Scorecard at Global Tech Network, shaping the new org
              structure for{" "}
              <span className="italic-display accent-text">CashCupGolf</span>,
              and writing a long essay on how Stoic philosophy maps onto
              resilient distributed systems.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-16">
            <p className="eyebrow mb-4">(This week — 5 things)</p>
            <ul className="border-t border-hairline">
              {[
                "Building the ImportBrain alerts engine — RabbitMQ + cron",
                "Crafting the Compliance Scorecard MCP server at GTN",
                "Designing the new org structure for CashCupGolf",
                "Sketching Wayve's onboarding flow with my partner",
                "Re-reading Marcus Aurelius — Meditations, Book IV",
                "Mentoring two engineers from GTN",
              ].map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-hairline"
                >
                  <span className="col-span-1 label-mono text-[var(--ink-muted)] tabular-nums">
                    /0{i + 1}
                  </span>
                  <span className="col-span-11 font-display text-lg md:text-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.45} className="mt-20 grid md:grid-cols-3 gap-6">
            <div className="border border-hairline rounded-md p-5">
              <p className="eyebrow mb-2">(Reading)</p>
              <p className="font-display text-lg">
                Designing Data-Intensive Applications · Kleppmann
              </p>
            </div>
            <div className="border border-hairline rounded-md p-5">
              <p className="eyebrow mb-2">(Listening)</p>
              <p className="font-display text-lg">
                Burna Boy · Twice as Tall — on repeat
              </p>
            </div>
            <div className="border border-hairline rounded-md p-5">
              <p className="eyebrow mb-2">(Thinking about)</p>
              <p className="font-display text-lg">
                Cognition as a distributed-systems problem
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6} className="mt-20 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="btn-magnetic btn-magnetic--primary"
              >
                <span>Want to collaborate?</span>
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <p className="label-mono text-[var(--ink-muted)]">
              ※ This page is in the spirit of{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="link-edit"
              >
                nownownow.com
              </a>
              {" — updated monthly."}
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
