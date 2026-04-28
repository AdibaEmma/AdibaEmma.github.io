/**
 * Fetch the most recent public commit for a GitHub user.
 *
 * Uses the unauthenticated public events endpoint (60 req/hr per IP, plenty
 * for a portfolio with ISR caching). Always returns a usable shape — on
 * failure we hand back a degraded fallback so the UI never collapses.
 */

import type { PillarEntry } from './pillar-log'

const USERNAME = 'AdibaEmma'
const REVALIDATE_SECONDS = 60 * 60 // 1 hour

type GitHubPushEvent = {
  type: 'PushEvent'
  created_at: string
  repo: { name: string }
  payload: {
    commits?: Array<{ sha: string; message: string }>
  }
}

type GitHubEvent = GitHubPushEvent | { type: string; created_at: string }

export async function fetchEngineerEntry(): Promise<PillarEntry> {
  const fallback: PillarEntry = {
    pillar: 'engineer',
    headline: 'Lead engineer at GTN — Stripe Connect, ACH, MCP',
    detail: 'Vacation Branson · iTargetGolf · Compliance Scorecard',
    date: new Date().toISOString(),
    href: 'https://github.com/AdibaEmma',
    cta: 'github',
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'emmanuel-adiba-portfolio',
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    )
    if (!res.ok) return fallback

    const events = (await res.json()) as GitHubEvent[]
    const push = events.find(
      (e): e is GitHubPushEvent => e.type === 'PushEvent',
    )
    const commit = push?.payload?.commits?.[push.payload.commits.length - 1]
    if (!push || !commit) return fallback

    // Sanitize: first line of message, trimmed, capped at 70 chars.
    const message = commit.message.split('\n')[0].trim()
    const headline = message.length > 70 ? `${message.slice(0, 67)}…` : message
    const sha = commit.sha.slice(0, 7)
    const repo = push.repo.name

    return {
      pillar: 'engineer',
      headline: headline || `Latest push to ${repo}`,
      detail: `${repo} · ${sha}`,
      date: push.created_at,
      href: `https://github.com/${repo}/commit/${commit.sha}`,
      cta: 'view commit',
    }
  } catch {
    return fallback
  }
}
