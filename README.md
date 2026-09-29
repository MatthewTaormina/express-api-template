# express-api-template

A minimal **Express 5 + TypeScript 7** REST API template, designed to run behind a reverse proxy.

## Stack

| | |
|---|---|
| Runtime | Node.js 24 (Active LTS) |
| Package manager | pnpm 12 |
| Framework | Express 5 |
| Language | TypeScript 7 |
| Dev runner | tsx (esbuild-powered) |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server (hot-reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the server listens on |

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Returns `{"status":"ok"}` |

## Project Structure

```
src/
├── index.ts          # App entry point
└── routes/
    └── health.ts     # Health check route
```

## Notes

- **Proxy trust**: `app.set('trust proxy', 1)` is enabled. The API expects to sit behind exactly one upstream reverse proxy (nginx, Caddy, etc.) and will honour `X-Forwarded-*` headers from it.
- **No URL versioning**: Routes are not prefixed with `/v1` etc. Version via deployment/proxy if needed.