# Emmanuel Adiba - Portfolio v2

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 15 and Turbopack
- 🎨 Modern UI with Tailwind CSS and Framer Motion
- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🚀 Optimized performance with Vercel
- 📊 Skills visualization with progress bars
- 📬 Contact form integration
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Package Manager:** PNPM

## Getting Started

### Prerequisites

- Node.js 18+ 
- PNPM installed globally

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AdibaEmma/portfolio-v2.git
cd portfolio-v2
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## Project Structure

```
portfolio-v2/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/              # UI components
├── lib/                   # Utilities and constants
├── public/               # Static assets
│   ├── images/          # Images
│   └── files/           # Documents
└── styles/              # Global styles
```

## Configuration

### Email Service

To enable the contact form, configure one of these email services:

**Resend:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`

**SendGrid:**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to `.env.local`: `SENDGRID_API_KEY=your_key`

### Custom Domain

1. Add your domain in Vercel project settings
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## License

MIT License - feel free to use this project for your own portfolio!

## Author

**Emmanuel Adiba**
- GitHub: [@AdibaEmma](https://github.com/AdibaEmma)
- LinkedIn: [Emmanuel Adiba](https://linkedin.com/in/adiba-emmanuel)
- Twitter: [@emmanuel_adiba](https://twitter.com/emmanuel_adiba)