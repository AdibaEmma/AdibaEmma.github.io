/**
 * Brand pillars — the single source of truth.
 *
 * The site is composed around four pillars in a fixed order:
 *   Engineer · Builder · Thinker · Founder
 *
 * Every surface that names a pillar (hero eyebrow, about beats,
 * projects filters, project cards, ml/ai eyebrow) MUST resolve through
 * this constant. No string literals — deleting any pillar word from the
 * source must break or desync the site.
 *
 * Order is canonical. Do not reorder, even alphabetically.
 */

export const PILLARS = ['engineer', 'builder', 'thinker', 'founder'] as const

export type Pillar = (typeof PILLARS)[number]

/** Human-readable, capitalized label for display. */
export const PILLAR_LABEL: Record<Pillar, string> = {
  engineer: 'Engineer',
  builder: 'Builder',
  thinker: 'Thinker',
  founder: 'Founder',
}

/**
 * One-line definitions used as taglines/eyebrow descriptions across the site.
 * Editorial, terse. No buzzwords.
 */
export const PILLAR_TAGLINE: Record<Pillar, string> = {
  engineer: 'Client work at GTN.',
  builder: 'Experiments and side builds.',
  thinker: 'The ML/AI lab.',
  founder: 'Ventures with users and revenue intent.',
}

/** Longer beat description for the about page. */
export const PILLAR_DESCRIPTION: Record<Pillar, string> = {
  engineer:
    'Lead engineer at GTN LLC — NestJS, Laravel, React Native, Stripe Connect, ACH, Prisma, PostgreSQL. I ship Vacation Branson and iTargetGolf as client products, and collaborate on Compliance Scorecard. The job is to make complex payment and operational systems feel quiet and inevitable.',
  builder:
    "What I build when no one's asking. BookLoop, ZCTL, SlamPact — small experiments without a venture attached. Done for the craft, for a question I want to answer, for a primitive I want to feel in my hands.",
  thinker:
    "The lab. Vector search for semantic resume parsing, fine-tuning Llama on Stoic philosophy, behavioral economics applied to payment UX, Bayesian personal forecasting. The seam between deterministic systems and the messy logic of human decision-making — that's where I keep returning.",
  founder:
    'Ventures with users and revenue intent. GearDockGH ships premium imported gear into Ghana on infrastructure I run myself. ImportBrain is the operating system for the country’s mini-importers. Wayve is the AI-powered Ghana travel platform I co-founded as CTO at Zurelix Limited.',
}

/** Bullet points used on /about under each pillar — concrete proof. */
export const PILLAR_BULLETS: Record<Pillar, string[]> = {
  engineer: [
    'GTN — Vacation Branson · iTargetGolf · Compliance Scorecard',
    'Stack — NestJS, Laravel, React Native, Prisma, PostgreSQL',
    'Crafting — payments (Stripe Connect, ACH), MCP servers, real-time UX',
  ],
  builder: [
    'BookLoop — peer-to-peer book lending with DMs',
    'ZCTL — zero-config CLI tooling experiments',
    'SlamPact — group goal-setting with social stakes',
  ],
  thinker: [
    'Vector search for semantic resume parsing',
    'Fine-tuning Llama on Stoic philosophy',
    'Bayesian models for personal forecasting',
    'Behavioral economics in payment UX',
  ],
  founder: [
    'GearDockGH — Ghana e-commerce, in production on Hetzner',
    'ImportBrain — SaaS for mini-importers',
    'Wayve — AI travel platform · co-founder & CTO at Zurelix Limited',
  ],
}

/** Pillar word as a CSS class hint (for accent variation if ever needed). */
export const pillarUppercase = (p: Pillar): string => PILLAR_LABEL[p].toUpperCase()
