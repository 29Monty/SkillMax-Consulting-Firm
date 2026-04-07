# SkillMax Consulting

Production-ready Next.js + TypeScript consulting site template.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Copy `.env.example` to `.env.local` and set your keys.

3. Run dev server:
```bash
pnpm dev
```

## Deployment
- Push to GitHub and connect to Vercel.
- Add environment variables in Vercel dashboard (do not expose service role key to client).

## Supabase
- Create tables in `migrations/001_init.sql` via SQL editor.
- Configure RLS policies and add an admin account by setting `profiles.role` to `admin`.

## Notes
- API routes: `/api/chat`, `/api/bookings`, `/api/admin/stats`
- Use `OPENAI_API_KEY` server-side for chat.
