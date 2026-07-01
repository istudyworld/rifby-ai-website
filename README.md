# Rifby

Marketing site for Rifby — AI automation, built for your business.

## Stack

Vite + React multi-page app. Each `*.html` at the root is its own entry (`src/entries/*.jsx`)
rendering a page from `src/pages/`. A small Vite plugin rewrites extensionless nav URLs
(`/services` → `/services.html`) in dev/preview; Vercel does the same via `cleanUrls`.

## Local preview

```
npm install
npm run dev      # Vite dev server (default http://localhost:5173)
npm run build    # production build
npm run preview  # preview the build
```

## Deploy

Hosted on Vercel as a static site. `vercel.json` enables `cleanUrls` so `/about` resolves to `about.html`.

## Pages

- `/` — homepage (`index.html`)
- `/about`
- `/services`
- `/case-studies`
- `/contact`

## Structure

```
.
├── index.html / about.html / services.html / case-studies.html / contact.html / privacy.html / terms.html
├── src/
│   ├── entries/        # per-page Vite entry points (home.jsx, about.jsx, ...)
│   ├── pages/          # page components (Home, About, Services, ...)
│   ├── components/     # section components + their co-located CSS
│   └── styles/global.css
├── scripts/            # Playwright helpers (screenshots + mobile audit)
├── assets/ + public/figma/   # images
└── vercel.json
```

## Mobile responsiveness

The site was built pixel-faithful to the **1512px desktop** Figma, then made mobile-responsive
in a per-component pass (July 2026). Every change is **additive and scoped inside a media query**,
so the desktop layout (≥1101px) is unchanged.

**Breakpoints**
- `@media (max-width: 1024px)` — main reflow for components that shipped with *no* responsive rules
  (Home, About). `max-width: 1100px` for components that already had a tablet fallback
  (Services, Case Studies, Contact, Legal).
- `@media (max-width: 600px)` — phone type scale, padding, full-width CTAs. `480px` for the
  global `.container` gutter (60px → 32px → 20px).

**Reusable patterns**
- Fluid headings via `font-size: clamp(min, vw, max)` instead of fixed 68–80px.
- Two-column flex/grid rows → single column; fixed-width children → `width: 100%`.
- Fixed-height `justify-content: space-between` cards → `height: auto` (hug content).
- Absolutely-positioned "canvas" sections (Team, ContactTeam) → hide decorative rings/avatars,
  set the centered content `position: static`.
- Nav collapses the pill + CTA into a hamburger dropdown (`Nav.jsx` `useState`).

**Gotchas (documented so they don't bite again)**
- **Reorder with `display: contents`.** ServiceBlock's media column is DOM-second, so on mobile the
  intro + image fell *below* the detail lists. Set both columns `display: contents` to promote their
  children into one flex flow, then `order:` them (heading → intro/image/tags → lists → process).
- **`display:none` merges adjacent text runs.** AboutHero's heading had inline chip `<img>`s between
  bare text nodes (`Smarter<img>AI`). `display:none` made the runs contiguous → "SmarterAI". Fix:
  `visibility:hidden; width:0; height:0` keeps them as zero-size flex items so the `gap` still
  separates the words.
- **Unstack absolute overlaps.** CaseRow's stat-card-over-photo cluster is a fixed 566px; on mobile
  set the cluster + children `position: static` and stack them (photo, then a full-width stat card).
- **`scripts/audit.mjs` `docOverflow` is unreliable here** (can read 0 while children overflow), so
  the audit now *always* scans for elements escaping the viewport. Decorative elements inside an
  `overflow:hidden` parent (e.g. `.delib-star`) show up as false-positive offenders — always confirm
  against a screenshot.
- **Pre-existing:** the desktop **laptop range (~1025–1450px)** has layout issues (e.g. the About
  hero overlaps at 1280) because the design is a fixed 1512px canvas. Independent of this mobile
  work; needs a separate tablet/desktop-fluid pass.

**Verification scripts** (need `playwright`, already a dev dep):
- `node scripts/audit.mjs <url> 390x844` — overflow + tap-target + font-size audit.
- `node scripts/cap.mjs <url> <WxH> <out.png> [full|<y>:<h>]` — viewport / clip capture.
- `node scripts/shot-el.mjs <url> <W> <prefix> <sel...>` — per-section element screenshots.
