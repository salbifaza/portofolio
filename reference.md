# Portfolio Revamp: Design References

Sections I want to borrow from other sites, and how each should map onto my portfolio.

Notes were taken from the sites' page text only. Fonts, colors, spacing and animations were **not** observable that way, so those are marked "TBD: inspect live site" and need a manual look in DevTools or a screen recording.

## Section map (proposed page order)

| # | Section | Reference | Source |
|---|---------|-----------|--------|
| 1 | Hero | Mike Wilcock | https://mikewilcockdesign.com/ |
| 2 | Skills strip | Pasted list (see below) | Likely Mike Wilcock's hero tags; not confirmed |
| 2b | Tools / tech stack | Jay | https://www.itsjay.us/?ref=okaydev.co |
| 3 | Services | Mike Wilcock | https://mikewilcockdesign.com/ |
| 4 | Work (projects) | Arturo Spatino | https://www.arturospatino.com/ |
| 5 | Work timeline (career) | Alex Van Holtz, "Work & Life", work only | https://alexvanholtz.com/?ref=okaydev.co |
| 6 | Values | Alex Van Holtz | https://alexvanholtz.com/?ref=okaydev.co |
| 7 | Contact / footer | Astapable | https://astapable.com/#apps |

---

## 1. Hero: Mike Wilcock

- **Top bar:** logo/name on the left. Nav on the right: Work, About, Services, and a "Start a project" CTA.
- **H1:** the name, followed by one confident statement. His is "I design and build websites and apps with a lot of movement in them."
- **Audience line:** states who it's for. His is "Startups, small businesses and fellow studios, mostly."
- **Skill tags** sit above and below the intro. They repeat in the page text, so they are probably a looping ticker (not confirmed).
- **Scroll cue:** "↓ Scroll, gently." plus a "See the work →" link.
- **Small parenthetical labels** such as "(Hello)" and "(Next)".
- **Motion:** there is a "(Pause motion)" control further down, so the page has continuous motion with an accessibility opt-out. Worth copying.
- **Adapt for me:** write my own one-line statement (data engineering and AI engineering, not "websites"), an audience line, and a "See the work →" link.
- TBD: fonts, colors, hero animation. Inspect the live site.

## 2. Skills strip

Pasted from the user:

```
Webflow
Next.js
Apps
Design
Build
Motion
```

- These are the same words as Mike Wilcock's hero capability tags, so this is probably his ticker. Confirm.
- **Adapt for me:** replace with my stack, for example Airflow, dbt, Flink, Iceberg, ClickHouse, Kafka, Trino, and so on.
- Implementation idea: a looping marquee that respects `prefers-reduced-motion` and shares the pause control with the hero.

### 2b. Tools / tech stack: Jay (https://www.itsjay.us/?ref=okaydev.co)

Added as the reference for the tools section. The skills strip above covers the capability words, and this covers the tool logos.

- **Section title:** "Professional at", with a stylized label above it reading "MODERN TECHSTACK".
- **Content:** ten tool **logos**, each linking to the tool's official site (React, Next.js, TypeScript, GSAP, Motion, Tailwind CSS, Contentful, Supabase, Vercel, Figma).
- **Layout:** the logos appear in two identical rows in the page text, which suggests a looping marquee (not confirmed).
- **Adapt for me:** the same pattern with my tools as logos, each linking to the tool's site (for example Airflow, dbt, Flink, Iceberg, ClickHouse, Kafka, Trino).
- TBD: logo color treatment, marquee speed and direction, typography. Inspect the live site.

## 3. Services: Mike Wilcock ("What I do")

- Heading "What I do" with an "All services →" link at the top right.
- **Four numbered cards** (01 to 04). Each has a number plus an arrow, a title, and a one-line description. Each card is a link.
  - 01 Websites: "Marketing sites and portfolios, designed and built with motion baked in."
  - 02 Shopify: "Custom Shopify themes built around your brand and products."
  - 03 Webflow: "Webflow builds your team can edit on their own."
  - 04 Apps: "Mobile app UI / UX development, from early flows to launch."
- **Closing CTA** under the cards: "Got something in mind?" and a "Let's talk" link.
- **Adapt for me:** four services that describe what I actually offer, for example batch pipelines, streaming and CDC, lakehouse, and data platform / GitOps.
- TBD: card hover effect, grid breakpoints.

## 4. Work (projects): Arturo Spatino

- "Work" heading, a one-line intro ("A selection of projects across…"), and a "View all" link to `/work`.
- **Two featured project cards** side by side. Each card links to its own detail page (`/work/<slug>`) and holds a cover image, the project name, and a category tag (for example "Web app" or "App, Web app").
- An **"Explorations"** block ("Design passions & experiments") shows a four-image set.
- A **logo grid** of clients and partners sits below, probably a looping strip.
- **Adapt for me:** featured cards for the best repos (`stream-flink-fluss`, `lakehouse-iceberg-stream`, `data-platform-gitops`, `batch-airflow-dlt-dbt`). Each needs a cover image, which can be an architecture diagram, and a detail page. Use the Explorations block for smaller experiments.
- TBD: hover and scroll behavior, card sizing, typography.

## 5. Work timeline: Alex Van Holtz ("Work & Life", work only)

Take the structure, drop the personal/life entries.

- **Heading** with an italic emphasis word ("Scroll back _with me_"), plus a short intro.
- **Year row** (bold years, newest to oldest) at the top. It probably works as navigation.
- **Reverse-chronological entries.** Each has:
  - year and date range
  - location (for example "Remote")
  - company
  - role, with progression where relevant ("Senior → Principal")
  - a short narrative paragraph
  - a "What I worked on" bullet list
  - an optional "Client projects" sub-section (title, year, description, tech stack)
  - optional photos
- **What I want:** a scrollable timeline where the year row jumps to and highlights the current entry, and where each company can open to its full detail (impact, stack, projects).
- **Adapt for me:** one entry per company, work only.
- TBD: whether the year row is clickable or scroll-linked, and how entries expand. Inspect the live site.

## 6. Values: Alex Van Holtz ("How I _work_")

- Heading with an italic emphasis word, a short underline, and a one-line intro ("What I try to stick to, at work and everywhere else.").
- An optional photo comes first.
- **Six numbered principles** (01 to 06) in a vertical list. Each has a number, a short title (for example "Choose kindness", "Small, steady steps"), and a 2 to 3 sentence first-person paragraph.
- **Adapt for me:** write my own 4 to 6 principles in my voice. The content has to be mine, not copied.
- TBD: typography and spacing.

## 7. Contact / footer: Astapable

- **Headline** across three stacked lines ("Let's discuss your / next / hire").
- **Two side-by-side buttons:** "Email Me" (a `mailto:` link) and "Book a Call" (an external Google Calendar scheduling link).
- **Footer info block:**
  - name
  - title
  - school
  - location
  - a decorative SVG
  - a version and updated-date line ("v.2.1. Updated 09/10/2026")
- **Adapt for me:** a headline in my own words, with Email and Book-a-call buttons. Needs a Google Calendar booking link or similar.
- TBD: headline typography, button style, decorative SVG.

---

## Open questions

- Should the skills strip be the same marquee as the hero, or a separate section?
- Do the timeline entries need photos, or text only?
- Is a pause-motion control needed? (Mike Wilcock has one; I'd recommend it.)
- Which projects count as "featured" for the work section?
- Which existing sections of the current site are being replaced?

## Next steps

1. Inspect each reference site in a browser (fonts, colors, motion) and fill in the TBD items.
2. Collect my own content: hero line, service descriptions, work history, values.
3. Pick a layout system for the existing Next.js and Tailwind setup in this repo.
