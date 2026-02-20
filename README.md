# @blackroad/web

Next.js 15 dashboard for BlackRoad OS. Displays agents, metrics, and system status.

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
```

## Development

```bash
npm run typecheck  # Type-check
npm test           # Run tests
npm run build      # Production build
npm run format     # Prettier
```

## Structure

```
src/
  app/              # Next.js App Router pages
  components/
    ui/             # Button, Card, Badge
    layout/         # Header, Sidebar
    agents/         # Agent cards and grid
    metrics/        # Metric displays
  lib/              # API client, utilities, brand constants
  hooks/            # useAgents, useMetrics, useWebSocket
  stores/           # Zustand (agent-store, ui-store)
test/               # Vitest test suites
```

## Brand System

- Hot Pink `#FF1D6C`, Amber `#F5A623`, Violet `#9C27B0`, Electric Blue `#2979FF`
- Golden Ratio spacing: 8, 13, 21, 34, 55, 89, 144px

## License

Copyright (c) 2025-2026 BlackRoad OS, Inc. All Rights Reserved.
