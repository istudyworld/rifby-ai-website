# Rifby

Marketing site for Rifby — AI automation, built for your business.

## Stack

Static HTML pages with React components compiled in-browser via Babel standalone (loaded from unpkg). No build step.

## Local preview

Serve the folder with any static server, for example:

```
npx serve .
```

Then open http://localhost:3000.

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
├── index.html
├── about.html
├── services.html
├── case-studies.html
├── contact.html
├── components/         # React JSX components compiled at runtime
├── assets/             # Logos and avatar images
└── vercel.json
```
