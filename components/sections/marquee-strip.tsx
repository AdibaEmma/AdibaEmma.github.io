"use client";

import { Marquee } from "@/components/ui/marquee";
import { skills } from "@/lib/constants";

export function MarqueeStrip() {
  const allSkills = [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.messaging,
    ...skills.devops,
  ];

  return (
    <section
      aria-label="Tech stack"
      className="relative border-y border-hairline overflow-hidden bg-[var(--surface)]"
    >
      <div className="py-6">
        <Marquee
          items={allSkills.map((s, i) => (
            <span
              key={s.name + i}
              className="font-display text-3xl md:text-5xl tracking-tight"
            >
              {s.name}
            </span>
          ))}
        />
      </div>
      <div className="py-6 border-t border-hairline">
        <Marquee
          reverse
          slow
          items={[
            <span key="a" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              clean architecture
            </span>,
            <span key="b" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              microservices
            </span>,
            <span key="c" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              event streams
            </span>,
            <span key="d" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              SOLID · KISS · YAGNI
            </span>,
            <span key="e" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              shipping software
            </span>,
            <span key="f" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              ml engineering
            </span>,
            <span key="g" className="font-display italic text-2xl md:text-3xl text-[var(--muted-foreground)]">
              from bolgatanga
            </span>,
          ]}
        />
      </div>
    </section>
  );
}
