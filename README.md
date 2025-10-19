
# Data Scientist Business Portfolio — Starter (Next.js + Tailwind + TS)

A clean, professional portfolio starter aimed at data scientists / statisticians.
Focus: credibility, case studies, services, and analytics-friendly sections.

## Features
- Next.js App Router (TypeScript)
- TailwindCSS for clean design
- Framer Motion for tasteful micro-interactions
- Content-first: edit JSON under `content/` (projects, services, about, social)
- SEO-ready meta config
- Deploy to Vercel in minutes

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Dev
npm run dev

# 3) Build
npm run build && npm run start
```

## Customize Content
- Edit `content/site.json` (name, tagline, social, analytics IDs)
- Edit `content/about.md`
- Edit `content/projects.json` (add your cases with metrics & stack)
- Edit `content/services.json`
- Company-style headshot: put a square image at `public/avatar.jpg`

## Suggested sections to add
- /publications (if academic); you can generate from BibTeX -> JSON
- /blog (write in MD/MDX)
- /dashboards (embed Plotly or external BI)

## Deploy
Connect the repo to Vercel, set Framework to Next.js, default settings.
