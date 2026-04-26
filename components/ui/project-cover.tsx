"use client";

import { Pillar, pillarUppercase } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * Typographic project cover — used when a project has no real screenshot.
 * Editorial draft-cover treatment: faint pillar word as background watermark,
 * project title in display serif, tagline in mono.
 *
 * Honest about the absence of a real shot, more on-brand than stock photos.
 */
export function ProjectCover({
  title,
  tagline,
  pillar,
  className,
}: {
  title: string;
  tagline?: string;
  pillar: Pillar;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-[var(--bg-elevated)]",
        className,
      )}
      aria-hidden
    >
      {/* faint diagonal grid backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern
            id={`pc-grid-${pillar}-${title.replace(/\s+/g, "")}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#pc-grid-${pillar}-${title.replace(/\s+/g, "")})`}
        />
      </svg>

      {/* huge italic pillar word, bleeding off the bottom-right */}
      <span
        className="absolute -right-4 -bottom-10 md:-bottom-16 font-display italic text-[7rem] md:text-[12rem] leading-none text-[var(--accent)]/[0.07] select-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        {pillarUppercase(pillar).toLowerCase()}
      </span>

      {/* hairline frame */}
      <div className="absolute inset-3 border border-[var(--rule)] pointer-events-none" />

      {/* content */}
      <div className="relative h-full flex flex-col p-6 md:p-8">
        {/* corner mark */}
        <div className="flex items-start justify-between label-mono text-[var(--ink-muted)]">
          <span className="text-[var(--accent)]">●</span>
          <span>※ draft cover</span>
        </div>

        {/* center title */}
        <div className="flex-1 flex flex-col justify-end">
          <p className="label-mono text-[var(--accent)] mb-3 uppercase tracking-[0.18em]">
            {pillarUppercase(pillar)}
          </p>
          <h3 className="font-display text-3xl md:text-5xl leading-[0.95] mb-2">
            {title}
          </h3>
          {tagline && (
            <p className="font-display italic text-base md:text-lg text-[var(--ink-secondary)] max-w-[28ch]">
              {tagline}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
