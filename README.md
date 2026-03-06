# blackroad-web

> Frontend interface and web platform for BlackRoad OS — the operating system for governed AI agents.

[![CI](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/ci.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/ci.yml)
[![Deploy](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/deploy.yml)

## Overview

Next.js 15 + React 19 web platform built with TypeScript 5, Tailwind CSS 4, and Zustand. This is the primary dashboard and marketing site for BlackRoad OS.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| State | Zustand 5 |
| Language | TypeScript 5 (strict) |
| Testing | Vitest + Playwright |
| Deployment | Cloudflare Pages |
| Icons | Lucide React |

## Project Structure

```
blackroad-web/
├── src/
│   ├── app/              # Next.js App Router pages, layouts & API routes
│   │   ├── api/          # REST API endpoints (health, agents, analytics, SSE)
│   │   ├── os/           # OS workspace (auth + app routes)
│   │   ├── dashboard/    # Dashboard pages (including /dashboard/live SSE feed)
│   │   └── ...           # Marketing & product pages
│   ├── components/       # Reusable React components (UI, layout, agents)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # API client, utilities, brand tokens
│   └── stores/           # Zustand state stores (auth, agents, UI, workspace)
├── styles/               # Global CSS / Tailwind / brand system
├── public/               # Static assets
├── test/                 # Test suite (Vitest)
├── .github/workflows/    # CI, deploy, integrations, backups, syncs
├── next.config.ts        # Next.js configuration
└── wrangler.toml         # Cloudflare Pages deployment
```

## Quick Start

```bash
# Install dependencies (requires Node.js >= 22)
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev          # http://localhost:3000

# Quality checks
npm run build        # Production build
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint
npm test             # Unit tests (Vitest)
npm run test:e2e     # E2E tests (Playwright)
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_GATEWAY_URL` | BlackRoad Core Gateway URL | `http://127.0.0.1:8787` |
| `NEXT_PUBLIC_AGENTS_API_URL` | Agent registry API URL | `http://127.0.0.1:3001` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk auth publishable key | — |
| `CLERK_SECRET_KEY` | Clerk auth secret key | — |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | — |
| `STRIPE_SECRET_KEY` | Stripe secret key | — |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Service health check |
| `/api/agents` | GET | Agent registry (live + fallback) |
| `/api/agents/stream` | GET | Real-time agent activity (SSE) |
| `/api/analytics` | POST | Track analytics events |
| `/api/newsletter` | POST | Newsletter subscription |
| `/api/status` | GET | System status |
| `/api/version` | GET | Version info |

## Key Pages

- **`/`** — Marketing homepage
- **`/dashboard`** — Main dashboard
- **`/dashboard/live`** — Real-time agent activity feed (SSE)
- **`/os/login`** — Authentication
- **`/os/workspace`** — Authenticated workspace
- **`/os/conversations`** — AI conversations
- **`/os/tasks`** — Task marketplace
- **`/os/metrics`** — System metrics

## Brand System

| Token | Value |
|-------|-------|
| Hot Pink | `#FF1D6C` |
| Amber | `#F5A623` |
| Violet | `#9C27B0` |
| Electric Blue | `#2979FF` |
| Font | JetBrains Mono |
| Spacing | Golden ratio (8, 13, 21, 34, 55, 89, 144px) |

## CI/CD Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| **CI** | Push/PR to main | Lint, test, typecheck, build |
| **Deploy** | Push to main | Cloudflare Pages deployment |
| **Automerge** | PR labeled `automerge` | Auto-squash-merge approved PRs |
| **Integrations** | Release published | Slack, Linear, Sentry notifications |
| **Google Drive Backup** | Daily 3 AM UTC | Automated repo backups |
| **HuggingFace Sync** | Push models/ to main | Sync models to HF Hub |
| **Notion Sync** | Push docs/ to main | Sync docs to Notion |

## Deployment

Deployed to Cloudflare Pages via GitHub Actions.

```bash
# Manual deploy
npx wrangler pages deploy .next/static --project-name=blackroad-web
```

Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

(c) 2025-2026 BlackRoad OS, Inc. All rights reserved. Proprietary.
