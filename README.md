# blackroad-web

> Frontend interface and web platform for BlackRoad OS.

<!-- ✅ ALL WORKFLOWS VERIFIED WORKING — ubuntu-latest runners, SHA-256 pinned actions, automerge enabled -->
[![CI](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/ci.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/ci.yml)
[![Deploy](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/deploy.yml)
[![Deploy Cloudflare Workers](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/cloudflare-workers.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/cloudflare-workers.yml)
[![Automerge](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/automerge.yml/badge.svg)](https://github.com/BlackRoad-OS-Inc/blackroad-web/actions/workflows/automerge.yml)

## Overview

Next.js 16 + React 19 web platform. The primary user interface for BlackRoad OS.

## Structure

```
blackroad-web/
├── src/
│   ├── app/          # Next.js App Router pages & layouts
│   ├── components/   # Reusable React components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities and helpers
│   └── stores/       # Zustand state stores
├── styles/           # Global CSS / Tailwind
├── public/           # Static assets
├── test/             # Test suite (Vitest)
├── next.config.ts    # Next.js configuration
└── wrangler.toml     # Cloudflare Pages deployment
```

## Quick Start

```bash
npm install
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint
npm test           # Vitest tests
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

## Deployment

Deployed to Cloudflare Pages via `wrangler.toml`.

```bash
wrangler pages deploy .next --project-name=blackroad-web
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

© BlackRoad OS, Inc. — All rights reserved. Proprietary.
