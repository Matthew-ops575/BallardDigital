# Ballard Digital — Deployment Guide

## Current State

The website is a fully built Next.js 16 landing page ready for production deployment. It is a static site (pre-rendered) with no server-side dependencies.

### Tech Stack
- **Framework:** Next.js 16.2.3 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Language:** TypeScript
- **Build output:** Static HTML (no server required)

### Design System
- **Palette:** Slate + sage (light theme)
  - Background: `#fafaf8` (warm off-white)
  - Foreground: `#2c3330` (warm charcoal)
  - Accent (sage): `#6b7f5e` — icons, checkmarks, positive indicators
  - Ridge (copper): `#8b7355` — all CTAs and action elements
  - Sand: `#c4b59a` — subtle secondary text
  - Slate brand: `#2a3540` — hero and footer background
  - Surface: `#ffffff` — cards and elevated content
- **Hero/Footer:** Dark slate-green gradient (`#2a3540` → `#344a3f` → `#2f3d36`)
- **Font:** Geist Sans (loaded via next/font/google)
- **Typography:** Tight tracking on headings, relaxed line-height on body

### Page Sections (in order)
1. **Navbar** — fixed, backdrop blur, ridge CTA, mobile hamburger menu
2. **Hero** — dark gradient, sage gradient headline, dual CTAs
3. **Problem Stats** — 60% / 50%+ / 0 stat cards + red callout
4. **Comparison** — red X's vs green checks side-by-side
5. **How It Works** — phased Audit → Build → Grow (3 cards)
6. **GEO Explainer** — Traditional SEO vs GEO table + 6 service cards
7. **Industries** — 4 verticals (Home Services, Real Estate, Dental, Legal) with ROI math
8. **Pricing** — Audit + Build (top row), then 3 retainer tiers (Growth / Growth+GEO / Domination)
9. **Proof** — The Wasatch Guide section with Search Console visualization
10. **Why Ballard Digital** — 6 differentiators in 3x2 grid
11. **Audit CTA** — lead capture form with free AI check → paid audit funnel
12. **Footer** — dark slate, links, contact info

---

## Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the company behind Next.js. Zero-config deployment.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
cd /Users/kyleballard/BallardDigital/website
vercel

# For production deployment
vercel --prod
```

Or connect via GitHub:
1. Push repo to GitHub
2. Go to vercel.com → Import Project → select the repo
3. Vercel auto-detects Next.js, no config needed
4. Set custom domain: ballarddigital.com

**Free tier** covers everything this site needs.

### Option 2: Netlify

```bash
# Build the site
npm run build

# The output is in .next/ — Netlify handles this with their Next.js plugin
# Or export as static:
# Add to next.config.ts: output: 'export'
# Then deploy the /out directory
```

1. Push repo to GitHub
2. Go to netlify.com → New site from Git → select repo
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Set custom domain: ballarddigital.com

### Option 3: Cloudflare Pages

Similar to Netlify. Push to GitHub, connect in Cloudflare dashboard, set build command to `npm run build`.

---

## Domain Setup

1. Purchase/transfer `ballarddigital.com` to your registrar
2. In your hosting platform (Vercel/Netlify), add the custom domain
3. Update DNS:
   - If Vercel: point A record to `76.76.21.21` and CNAME `www` to `cname.vercel-dns.com`
   - If Netlify: follow their custom domain instructions
4. SSL is automatic on all three platforms

---

## Pre-Deployment Checklist

### Must do before going live:
- [ ] Replace form with actual submission handler (options below)
- [ ] Set up Google Analytics 4 (add GA_MEASUREMENT_ID to layout.tsx)
- [ ] Set up Google Search Console and verify domain
- [ ] Create Google Business Profile for Ballard Digital
- [ ] Set up hello@ballarddigital.com email (Google Workspace or similar)
- [ ] Add favicon and Open Graph image
- [ ] Test all anchor links on mobile
- [ ] Verify Lighthouse score (target: 95+)

### Form Handling Options:
1. **Formspree** (easiest): Change form action to `https://formspree.io/f/YOUR_ID`
2. **Netlify Forms**: Add `data-netlify="true"` to form tag (if on Netlify)
3. **API Route**: Create `app/api/audit/route.ts` to handle form submission with email notification
4. **Cal.com / Calendly embed**: Replace form with scheduling widget

### Nice to have before launch:
- [ ] Add blog section (can be MDX-based or headless CMS)
- [ ] Add /about page with founder story + operating principles
- [ ] Add /services sub-pages
- [ ] Add /industries sub-pages
- [ ] Register on directories (Clutch, Semrush, DesignRush, UpCity, The Manifest, Goodfirms)
- [ ] Set up LinkedIn page

---

## Local Development

```bash
cd /Users/kyleballard/BallardDigital/website

# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm start
```

---

## File Structure

```
website/
├── app/
│   ├── globals.css          # Tailwind imports + custom styles + color system
│   ├── layout.tsx           # Root layout with metadata + fonts
│   └── page.tsx             # Full landing page (all sections)
├── docs/
│   ├── BALLARD_DIGITAL_UNIFIED_BUSINESS_PLAN.md
│   ├── BALLARD_DIGITAL_MARKET_ANALYSIS_AND_BUSINESS_PLAN.md
│   ├── PLAN_COMPARISON_AND_RECONCILIATION.md
│   └── DEPLOYMENT_GUIDE.md  # This file
├── public/                  # Static assets (add favicon, OG image here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Future Development Notes

### Adding a Blog
Recommended approach: MDX files in `app/blog/[slug]/` with frontmatter for title, date, description. This keeps content in the repo and leverages Next.js static generation.

### Adding Sub-Pages
Each service and industry page should follow the landing page's design system. Use the same component patterns (accent-line labels, border-border cards, ridge CTAs).

### Client Websites
Per the business plan, client sites are built on WordPress (SiteGround or Cloudways). This Next.js site is for ballarddigital.com only. Keep these separate.

### TheWasatchGuide.com
Separate codebase, separate hosting. Linked from this site but not embedded. Same tech stack (Next.js, Tailwind) but different repo.
