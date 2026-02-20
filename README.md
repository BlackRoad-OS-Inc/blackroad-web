# blackroad-web

Frontend interface and web platform for BlackRoad OS.

## Quick Start

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint
```

## Tech Stack

- Next.js 15 + React 19
- TypeScript
- BlackRoad Brand System (Golden Ratio spacing, brand gradient)

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |

## Deployment

Deploys to Railway on push to `main`. See `railway.toml` for config.

Uses `output: 'standalone'` for optimized container builds.

## License

Proprietary - BlackRoad OS, Inc. All rights reserved.
