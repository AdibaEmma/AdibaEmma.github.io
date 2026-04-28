/**
 * Pillar Log — the source of truth for "live evidence" per pillar.
 *
 * Every claim on the homepage that names a pillar maps back to one entry
 * here. Engineer is fetched live from GitHub (see `lib/github.ts`); the
 * other three are authored by hand because they cite essays and milestones
 * that aren't expressible as a public API call.
 *
 * Keep entries dated. The component computes "n days ago" against the
 * current request time so stale claims surface instead of hiding.
 */

import type { Pillar } from './brand'

export type PillarEntry = {
  pillar: Pillar
  /** Tight headline — verb-led when possible, < 60 chars. */
  headline: string
  /** Optional secondary detail. < 80 chars. */
  detail?: string
  /** ISO date of the underlying event (commit, ship, publish, milestone). */
  date: string
  /** Optional outbound link to the artifact. */
  href?: string
  /** Short label shown next to the link affordance. */
  cta?: string
}

/**
 * Authored entries for Builder, Thinker, Founder.
 * Engineer is overlaid at request-time with the latest public commit.
 */
export const PILLAR_ENTRIES: Record<Exclude<Pillar, 'engineer'>, PillarEntry> = {
  builder: {
    pillar: 'builder',
    headline: 'ZCTL — config-less CLI experiments',
    detail: 'Half-shipped, half-archived. Pure craft.',
    date: '2026-03-12',
    href: 'https://github.com/AdibaEmma',
    cta: 'see the lab',
  },
  thinker: {
    pillar: 'thinker',
    headline: 'MCP server for Compliance Scorecard',
    detail: 'Letting an assistant reason over a live compliance graph instead of a static export.',
    date: '2026-04-08',
    href: '/ml-ai',
    cta: 'read the notes',
  },
  founder: {
    pillar: 'founder',
    headline: 'GearDockGH — premium imports into Ghana',
    detail: 'In production on Hetzner. 50+ orders, 10 categories, 48-hour delivery in Bolgatanga.',
    date: '2026-04-20',
    href: 'https://geardockgh.com',
    cta: 'open the storefront',
  },
}

/** Compute a human-readable "n days/weeks ago" against now. */
export function timeAgo(iso: string, nowIso?: string): string {
  const now = nowIso ? new Date(nowIso) : new Date()
  const then = new Date(iso)
  const diffMs = now.getTime() - then.getTime()
  const day = 1000 * 60 * 60 * 24
  const days = Math.max(0, Math.floor(diffMs / day))
  if (days === 0) return 'today'
  if (days === 1) return '1 day ago'
  if (days < 14) return `${days} days ago`
  if (days < 60) return `${Math.floor(days / 7)} weeks ago`
  if (days < 365) return `${Math.floor(days / 30)} months ago`
  const years = Math.floor(days / 365)
  return years === 1 ? '1 year ago' : `${years} years ago`
}
