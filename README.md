# Salbi Faza Rinaldi: portfolio

Personal portfolio built with Next.js 15, React 18 and Tailwind 3. Dark editorial theme, no animation library.

## Run

```bash
npm install
npm run dev        # http://localhost:9002
npm run typecheck  # the build ignores type errors, so run this too
npm test           # Vitest, pure logic only
npm run build
```

## Add a project

1. Add an entry to `src/content/projects.ts` with a unique slug, a category tag and a case study.
2. Use `detail: 'summary'` until the detail is approved for publishing. Summary projects show only the summary.
3. Optionally drop a cover image in `public/covers/` and set `cover`. Without one, a typographic cover is generated.

The page is pre-rendered at `/work/<slug>`.

## Launch checklist

- [ ] Owner approves the drafted copy and any employer-project detail.
- [ ] Booking link supplied for "Book a Call" (`src/content/profile.ts`).
- [ ] Host confirmed (Netlify or GitHub Pages; the site stays compatible with both).
