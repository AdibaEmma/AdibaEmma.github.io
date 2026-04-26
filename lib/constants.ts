export const siteConfig = {
  name: 'Emmanuel Adiba',
  title: 'Software Engineer · Ghana',
  description:
    'Software engineer building resilient, distributed systems — from fintech and trading engines to commerce and travel platforms. Currently exploring the seam between engineering, ML/AI, and human cognition.',
  url: 'https://emmanuel-adiba.vercel.app',
  email: 'eabaagah@gmail.com',
  phone: ['+233556137400'],
  location: 'Bolgatanga, Upper East — Ghana',
  social: {
    twitter: 'https://www.twitter.com/emmanuel_adiba',
    linkedin: 'https://www.linkedin.com/in/adiba-emmanuel/',
    facebook: 'https://www.facebook.com/adiba.emmanuel.5',
    github: 'https://www.github.com/AdibaEmma',
  },
}

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'ML/AI', href: '/ml-ai' },
  { name: 'Now', href: '/now' },
  { name: 'Contact', href: '/contact' },
]

// Aligned to CV
export const skills = {
  languages: [
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
  ],
  frontend: [
    { name: 'React', icon: 'devicon-react-plain' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Redux', icon: 'devicon-redux-plain' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
  ],
  backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain' },
    { name: 'Hibernate', icon: 'devicon-hibernate-plain' },
    { name: 'Spring Cloud', icon: 'devicon-spring-plain' },
  ],
  database: [
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'DynamoDB', icon: 'devicon-amazonwebservices-original' },
    { name: 'Flyway', icon: 'devicon-postgresql-plain' },
  ],
  messaging: [
    { name: 'Apache Kafka', icon: 'devicon-apachekafka-original' },
    { name: 'RabbitMQ', icon: 'devicon-rabbitmq-plain' },
    { name: 'Redis', icon: 'devicon-redis-plain' },
    { name: 'WebSockets', icon: 'devicon-socketio-original' },
  ],
  devops: [
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
    { name: 'GitHub Actions', icon: 'devicon-github-original' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
    { name: 'Digital Ocean', icon: 'devicon-digitalocean-plain' },
    { name: 'Heroku', icon: 'devicon-heroku-plain' },
  ],
  testing: [
    { name: 'Jest', icon: 'devicon-jest-plain' },
    { name: 'JUnit', icon: 'devicon-java-plain' },
    { name: 'Mockito', icon: 'devicon-java-plain' },
    { name: 'Mockk', icon: 'devicon-kotlin-plain' },
  ],
  api: [
    { name: 'REST', icon: 'devicon-graphql-plain' },
    { name: 'GraphQL', icon: 'devicon-graphql-plain' },
    { name: 'Swagger', icon: 'devicon-swagger-plain' },
  ],
}

/**
 * Project type — every entry MUST carry `pillars` (one or more) and `role`
 * (precise ownership language). See lib/brand.ts for the canonical pillar list.
 *
 * Ownership language rules:
 *   GTN client work → "Lead Engineer at GTN" / "Engineer at GTN" — never "I built", "my product"
 *   Builder work    → "Solo build"
 *   Founder work    → "Founder & Engineer" / "Co-founder & CTO"
 */
import type { Pillar } from './brand'

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  technologies: string[]
  pillars: Pillar[]
  role: string
  // Legacy category — kept for back-compat in code paths that still reference it.
  category?: string
  year: string
  image: string
  imageSecondary?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  impact: string
}

export const projects: Project[] = [
  // ── FOUNDER ─────────────────────────────────────────────────────────────
  {
    id: 'geardockgh',
    title: 'GearDockGH',
    tagline: 'Your Setup. Your Edge.',
    description:
      "Solo venture, in production. An e-commerce platform delivering premium imported gear to Ghana's remote workers, creators, and gamers — verified, priced in cedis, at the door in 48 hours. Self-hosted on Hetzner.",
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Stripe', 'Hetzner'],
    pillars: ['founder'],
    role: 'Founder & Engineer',
    category: 'fullstack',
    githubUrl: '',
    liveUrl: 'https://geardockgh.com',
    image: '/images/works/geardockgh.png',
    featured: true,
    impact: '50+ orders · 10 categories · 48h delivery',
    year: '2025',
  },
  {
    id: 'importbrain',
    title: 'ImportBrain',
    tagline: 'The cedi moved. Do you know your margins?',
    description:
      "Solo SaaS venture. The operating system for Ghana's mini-importers — shipments, suppliers, FX tracking, cedi flow, all in one command centre. Replaces spreadsheets and prayer with a real margin engine.",
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Recharts'],
    pillars: ['founder'],
    role: 'Founder & Engineer',
    category: 'fullstack',
    githubUrl: '',
    liveUrl: 'https://importbrain.app',
    image: '/images/works/importbrain-dashboard.png',
    imageSecondary: '/images/works/importbrain-landing.png',
    featured: true,
    impact: 'FX tracking · ROI engine · live cedi quotes',
    year: '2025',
  },
  {
    id: 'wayve',
    title: 'Wayve',
    tagline: 'Plan Ghana together. Travel in flow.',
    description:
      'Pre-seed venture, co-founded as CTO at Zurelix Limited. A calm AI travel companion for all 16 regions of Ghana — discover authentic places, plan with friends, split expenses fairly, keep every memory.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Vector Search'],
    pillars: ['founder'],
    role: 'Co-founder & CTO',
    category: 'fullstack',
    githubUrl: '',
    liveUrl: 'https://wayve.app',
    image: '/images/works/wayve.png',
    featured: true,
    impact: 'AI companion · 16 regions · group planning',
    year: '2025',
  },

  // ── ENGINEER (GTN client work — I am NOT the owner) ─────────────────────
  {
    id: 'itargetgolf',
    title: 'iTargetGolf',
    tagline: 'Hole-in-one tournaments, online.',
    description:
      "Lead engineer at GTN LLC on iTargetGolf — a tournament platform that brings real-money hole-in-one contests online. Houses Cash Cup Golf and other tournament formats, with Stripe Connect for payouts, React Native for the player app, and NestJS + Prisma on the back end.",
    technologies: ['NestJS', 'React Native', 'Stripe Connect', 'Prisma', 'PostgreSQL'],
    pillars: ['engineer'],
    role: 'Lead Engineer at GTN',
    category: 'fullstack',
    image: '/images/works/itargetgolf.png',
    featured: true,
    impact: 'Client product · GTN LLC · Cash Cup Golf live',
    year: '2024 →',
  },
  {
    id: 'vacation-branson',
    title: 'Vacation Branson',
    tagline: '4-day, 3-night Ozarks packages.',
    description:
      'Lead engineer at GTN on Vacation Branson — a vacation package marketplace bundling hotel stays with show tickets and local attractions in Branson, Missouri. Resort partnerships, Stripe Connect payouts, ACH, and a host-operations dashboard, all on NestJS + React + Prisma.',
    technologies: ['NestJS', 'React', 'Stripe Connect', 'ACH', 'Prisma', 'PostgreSQL'],
    pillars: ['engineer'],
    role: 'Lead Engineer at GTN',
    category: 'fullstack',
    image: '/images/works/vacation-branson.png',
    featured: true,
    impact: 'Client product · GTN LLC · resort partnerships live',
    year: '2024 →',
  },
  {
    id: 'compliance-scorecard',
    title: 'Compliance Scorecard',
    tagline: 'SaaS governance for MSPs.',
    description:
      "Engineer on the GTN client team for Compliance Scorecard — the SaaS governance program for MSPs. Currently crafting an MCP server so the assistant can reason against the live compliance graph instead of a static export.",
    technologies: ['Laravel', 'NestJS', 'MCP', 'PostgreSQL', 'TypeScript'],
    pillars: ['engineer'],
    role: 'Engineer at GTN',
    category: 'backend',
    image: '/images/works/compliance-scorecard.png',
    featured: true,
    impact: 'Client product · GTN LLC · MCP server in flight',
    year: '2025',
  },

  // ── BUILDER (exploratory; no venture intent) ────────────────────────────
  {
    id: 'bookloop',
    title: 'BookLoop',
    tagline: 'What if libraries had a book DM?',
    description:
      "Solo build. A peer-to-peer book lending experiment with social DMs around each title. Done for the craft of mapping social graphs onto inventory — not a venture, just a question I wanted to answer.",
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Liveblocks'],
    pillars: ['builder'],
    role: 'Solo build',
    category: 'fullstack',
    image: '',
    featured: true,
    impact: 'Exploratory · no users yet',
    year: '2024',
  },
  {
    id: 'zctl',
    title: 'ZCTL',
    tagline: 'Zero-config CLI tooling experiments.',
    description:
      'Solo build. A series of small CLI experiments around config-less developer tooling — turning the friction of setup into a single command. Half-shipped, half-archived, all teaching.',
    technologies: ['TypeScript', 'Bun', 'oclif', 'Node'],
    pillars: ['builder'],
    role: 'Solo build',
    category: 'devtools',
    image: '',
    featured: true,
    impact: 'Exploratory · craft work',
    year: '2024',
  },
  {
    id: 'slampact',
    title: 'SlamPact',
    tagline: 'Group goal-setting with social stakes.',
    description:
      'Solo build. An experiment in group goal-setting where missing your stake costs you the room. Built to learn betting market design and group-state coordination — no plan to monetize.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    pillars: ['builder'],
    role: 'Solo build',
    category: 'fullstack',
    image: '',
    featured: true,
    impact: 'Exploratory · learning project',
    year: '2024',
  },
]

export const roles = [
  'Software Engineer',
  'Distributed Systems Builder',
  'Fullstack Engineer',
  'Backend Architect',
  'ML/AI Curious',
  'Product-minded',
  'Lifelong Learner',
]

// Combined into a single chronological journey (oldest → newest)
export const journey = [
  {
    id: 'university',
    type: 'education' as const,
    period: '2016 — 2020',
    yearStart: 2016,
    yearEnd: 2020,
    title: 'BSc, Computer Engineering',
    org: 'University of Energy and Natural Resources',
    location: 'Sunyani, Ghana',
    chapter: 'Chapter 01',
    chapterLabel: 'Foundations',
    summary:
      'Studied computer engineering — software, systems, signal processing. Wrote my first line of production code for fellow students; finished a web app as the final-year project.',
    bullets: [
      'Specialized in software engineering and system design',
      'Shipped small web projects for fellow students',
      'Built a production web application as final-year project',
    ],
    technologies: ['C', 'Python', 'JavaScript', 'Computer Engineering'],
  },
  {
    id: 'turntabl',
    type: 'work' as const,
    period: 'Sep 2021 — Aug 2023',
    yearStart: 2021,
    yearEnd: 2023,
    title: 'Software Engineer',
    org: 'Turntabl Ghana',
    location: 'Accra, Ghana',
    chapter: 'Chapter 02',
    chapterLabel: 'Going deep',
    summary:
      'Two formative years on the JVM — Kotlin, Java, Spring Boot — building real-time systems and a microservice trading engine that moved real revenue.',
    bullets: [
      'Pioneered a tech news aggregator on Kotlin / Spring Boot / PostgreSQL — 15,000+ users with real-time delivery',
      'Designed ORM diagrams and orchestrated database migrations using DrawIO and Flyway',
      'Engineered a high-performing microservice trading engine in Java + Redis — 20% monthly revenue lift',
    ],
    technologies: ['Kotlin', 'Spring Boot', 'Java', 'PostgreSQL', 'Redis', 'Flyway'],
    type_label: 'Full-time',
  },
  {
    id: 'softmelon',
    type: 'work' as const,
    period: 'Oct 2021 — Aug 2022',
    yearStart: 2021,
    yearEnd: 2022,
    title: 'Software Developer',
    org: 'Softmelon Engineering',
    location: 'Accra, Ghana',
    chapter: 'Chapter 03',
    chapterLabel: 'Leading delivery',
    summary:
      'Coordinated cross-functional delivery on a CRM platform. First taste of running a project end-to-end — leadership, scope, documentation, ship dates.',
    bullets: [
      'Coordinated a cross-functional engineering team to deliver CRM software ahead of schedule',
      'Pioneered a product feature that drove a 40% surge in user engagement',
      'Streamlined documentation and reduced required meetings by 70%',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
    type_label: 'Full-time',
  },
  {
    id: 'sendafrika',
    type: 'work' as const,
    period: 'Sep 2023 — Jan 2024',
    yearStart: 2023,
    yearEnd: 2024,
    title: 'Software Developer',
    org: 'SendAfrika',
    location: 'Accra, Ghana',
    chapter: 'Chapter 04',
    chapterLabel: 'Fintech, in motion',
    summary:
      "A short, intense fintech sprint — KYC and authentication for SendAfrika's flagship product. NestJS, MongoDB, money on the wire.",
    bullets: [
      "Built authentication and KYC modules for SendAfrika's flagship product on NestJS + MongoDB",
      '40% increase in user onboarding efficiency',
      'Established structured documentation and standardized testing — 30% team productivity lift',
    ],
    technologies: ['NestJS', 'MongoDB', 'TypeScript', 'JWT', 'KYC APIs'],
    type_label: 'Contract',
  },
  {
    id: 'gtn',
    type: 'work' as const,
    period: 'Feb 2024 — Present',
    yearStart: 2024,
    yearEnd: null,
    title: 'Software Developer',
    org: 'Global Tech Network',
    location: 'Orlando, FL · Remote',
    chapter: 'Chapter 05',
    chapterLabel: 'Today',
    summary:
      'Leading the OITs Web project — React, NestJS, MySQL, WebSockets. Building real-time UX, hardening engineering practices, and shipping more in less time.',
    bullets: [
      'Spearheading OITs Web on React, NestJS, MySQL, and WebSockets — 40% increase in deadline efficiency',
      'Established a structured documentation process and standardized testing methods',
      'Lifted team productivity by 30% and cut feature dev time by 25%',
    ],
    technologies: ['React', 'NestJS', 'MySQL', 'WebSockets', 'TypeScript'],
    type_label: 'Remote',
  },
  {
    id: 'founder',
    type: 'work' as const,
    period: '2025 — Present',
    yearStart: 2025,
    yearEnd: null,
    title: 'Founder · Engineer',
    org: 'Independent — GearDockGH · ImportBrain · Wayve',
    location: 'Ghana',
    chapter: 'Chapter 06',
    chapterLabel: 'Building things I want to exist',
    summary:
      'Independently shipping products for Ghana — a verified electronics store, a mini-import command centre, and a calm AI travel companion. Engineering the things I want to exist.',
    bullets: [
      'GearDockGH — premium imported gear, priced in cedis, delivered in 48 hours',
      "ImportBrain — operating system for Ghana's mini-importers",
      'Wayve — AI travel companion for all 16 regions of Ghana',
    ],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'OpenAI', 'TypeScript'],
    type_label: 'Founder',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Engineering',
  institution: 'University of Energy and Natural Resources',
  location: 'Sunyani, Ghana',
  period: '2016 - 2020',
  achievements: [
    'Specialized in software engineering and system design',
    'Shipped small web projects for fellow students',
    'Built a production web application as final-year project',
  ],
}

// Backwards-compat alias used by some components
export const workExperience = journey
  .filter((j) => j.type === 'work')
  .map((j) => ({
    id: j.id,
    company: j.org,
    position: j.title,
    location: j.location,
    period: j.period,
    type: j.type_label ?? 'Full-time',
    achievements: j.bullets,
    technologies: j.technologies,
  }))

export const aboutContent = {
  intro: 'Engineer. Builder. Thinker. Founder.',
  description: `Four pillars, in that order. Lead engineer at GTN LLC by day — shipping Vacation Branson, iTargetGolf, and Compliance Scorecard as client work on NestJS, Laravel, React Native, and Stripe Connect.

After hours: experiments under BookLoop, ZCTL, and SlamPact — solo builds done for the craft, not for a venture. No users to serve, just questions to answer.

The lab runs in parallel. Vector search for semantic resume parsing, fine-tuning Llama on Stoic philosophy, behavioral economics applied to payment UX. The seam between deterministic systems and the messy logic of human decision-making.

And the ventures: GearDockGH live on Hetzner, ImportBrain in private beta, Wayve pre-seed at Zurelix Limited where I'm co-founder & CTO. More in the pipeline.`,
  resumePath: '/files/Emmanuel_Adiba_CV.pdf',
}
