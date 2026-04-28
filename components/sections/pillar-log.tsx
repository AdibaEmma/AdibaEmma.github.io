import Link from 'next/link'
import { PILLARS, pillarUppercase } from '@/lib/brand'
import {
  PILLAR_ENTRIES,
  timeAgo,
  type PillarEntry,
} from '@/lib/pillar-log'

/**
 * Pillar Log — live evidence for each of the four pillars.
 *
 * The Engineer entry is fetched once in the page server component (for ISR
 * caching) and passed down. The other three are authored in
 * `lib/pillar-log.ts`. Together they replace the "trust me" version of the
 * four-pillar identity with a dated artifact per pillar.
 */
export function PillarLog({ engineer }: { engineer: PillarEntry }) {
  const nowIso = new Date().toISOString()

  const entries: Record<(typeof PILLARS)[number], PillarEntry> = {
    engineer,
    builder: PILLAR_ENTRIES.builder,
    thinker: PILLAR_ENTRIES.thinker,
    founder: PILLAR_ENTRIES.founder,
  }

  return (
    <section
      id="pillar-log"
      aria-label="Pillar log — latest evidence per pillar"
      className="relative py-16 md:py-24 border-t border-hairline overflow-hidden"
    >
      <div className="container-edit">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <p className="section-tag">(Pillar Log ／ 04)</p>
          <p className="eyebrow hidden md:flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            <span>— Live · refreshed hourly</span>
          </p>
        </div>

        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="display-xl font-display">
            Four pillars.{' '}
            <span className="italic accent-text">Four artifacts</span>,
            <br />
            dated and current.
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--ink-muted)] max-w-xl">
            Most portfolios claim. This one shows the most recent shipped commit,
            experiment, note, and venture milestone — refreshed at the edge.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-hairline">
          {PILLARS.map((p, i) => {
            const entry = entries[p]
            const ago = timeAgo(entry.date, nowIso)
            const isExternal = entry.href?.startsWith('http')
            return (
              <li
                key={p}
                className="group relative bg-[var(--background)] p-6 md:p-8 flex flex-col min-h-[220px]"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="label-mono uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    ／{(i + 1).toString().padStart(2, '0')} ·{' '}
                    <span className="text-[var(--foreground)]">
                      {pillarUppercase(p)}
                    </span>
                  </span>
                  <span className="label-mono text-[var(--ink-muted)]">
                    {ago}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl leading-tight text-[var(--foreground)]">
                  {entry.headline}
                </h3>

                {entry.detail && (
                  <p className="mt-3 text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
                    {entry.detail}
                  </p>
                )}

                {entry.href && (
                  <div className="mt-auto pt-6">
                    {isExternal ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-edit label-mono uppercase text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                      >
                        ↗ {entry.cta ?? 'open'}
                      </a>
                    ) : (
                      <Link
                        href={entry.href}
                        className="link-edit label-mono uppercase text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                      >
                        → {entry.cta ?? 'open'}
                      </Link>
                    )}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <p className="mt-8 label-mono text-[var(--ink-muted)] max-w-2xl">
          The engineer cell calls the public GitHub events API on the server
          (cached at the edge). The other three are authored manually as
          milestones land.
        </p>
      </div>
    </section>
  )
}
