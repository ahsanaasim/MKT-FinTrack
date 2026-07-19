# FinTrack

Editorial merchandising finance web app — credit cards, investments, NPS, payments, and an encrypted statement vault.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui (New York / Radix) + lucide-react
- IBM Plex Sans · Zinc palette · primary `#18181b`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app starts on the marketing landing page.

## Preview states

Use the floating **States** control (bottom-right) to switch Loading / Empty / Error / Plan limit / Permission / Ready on any screen.

## Key routes

| Route | Screen |
|-------|--------|
| `/` | Landing |
| `/auth/login` · `/auth/register` · `/auth/forgot` | Auth |
| `/dashboard` | User home |
| `/accounts` | Integrations & sync |
| `/review` · `/upload` · `/payments` | Data & payments |
| `/vault` · `/notifications` · `/settings` | Vault, alerts, settings |
| `/dashboard/onboarding/step-1` … `step-8` | Onboarding wizard |
| `/admin` | Internal system health (not in user nav) |

## Deploy

Root `vercel.json` is configured for Next.js on Vercel (`npm run build`).
