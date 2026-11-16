# Design.md: theme extracted from mikewilcockdesign.com

Extracted from the site's published CSS, HTML and JS on 2026-10-21. Values marked **(observed)** come straight from the stylesheet. Anything marked **(inferred)** is my reading of class names and layout, not confirmed behavior.

This file captures the visual system (tokens and patterns) so my portfolio can share the same overall feel. Copy and branding are not part of it: the logo, wordmark, text and imagery must be my own. Both fonts are free to use (Archivo is on Google Fonts under OFL, Geist Mono is open source).

Stack of the reference site: Next.js (Turbopack build), Tailwind v4 utilities, Lenis smooth scroll (found in one JS chunk), no GSAP or Framer Motion detected. This repo is also Next.js and Tailwind, so the tokens map over directly.

---

## 1. Mood

Dark, editorial, motion-heavy. Warm off-black background, warm off-white text, a single periwinkle-blue accent. Huge condensed uppercase display type against tiny uppercase monospace labels. Thin hairline dividers instead of boxes and shadows. Motion is everywhere, but there is a pause control and it respects `prefers-reduced-motion`.

## 2. Color tokens (observed)

```css
:root {
  --color-bg:        #111010;  /* page background, warm near-black */
  --color-surface:   #1a1918;  /* raised surfaces / cards */
  --color-text:      #edeae4;  /* primary text, warm off-white */
  --color-muted:     #b9b4ac;  /* body copy */
  --color-subtle:    #a8a39b;
  --color-label:     #8f8a82;  /* mono labels, eyebrows */
  --color-faint:     #86817a;  /* smallest field labels */

  --color-accent:    #7fa8ff;  /* the only brand color */
  --color-on-accent: #111010;  /* text on accent fills */

  --color-hairline:      #edeae41f; /* dividers (text color at 12%) */
  --color-chip-border:   #edeae433; /* 20% */
  --color-toggle-border: #edeae426; /* 15% */
  --color-outline:       #edeae440; /* 25% */

  --color-positive: #6fdc8c;
  --color-negative: #ff6b6b;
}
```

Rules:
- Every border and divider is the text color at low opacity, never a separate gray.
- The accent is used sparingly: CTA fill, status dots, small numbers, the logo block, hover fills and text selection.
- `::selection` is accent background with dark text (it flips on some elements).
- Outlined display text uses `-webkit-text-stroke: 1px #edeae473` with a transparent fill.

## 3. Typography (observed)

| Role | Font | Notes |
|------|------|-------|
| Display / body | **Archivo** (variable) | Weight axis 100–900, **width axis 62–125%** |
| Labels / UI | **Geist Mono** | 400 only, uppercase, tracked |

Fallback for Archivo is `local(Arial)`, with size-adjust overrides to limit layout shift.

The look comes from Archivo's **width axis**, set with `font-variation-settings`:

```css
--fvs-display: "wdth" 70,  "wght" 800;  /* tall, tight, uppercase headlines */
--fvs-row:     "wdth" 88,  "wght" 700;
--fvs-italic:  "wdth" 115, "wght" 250;  /* wide, light italic accents */
/* hover/stretch targets */
--stretch-to:  "wdth" 118, "wght" 400;
```

Type recipes:

| Use | Spec |
|-----|------|
| Page / service title | `uppercase`, `clamp(64px, 14vw, 240px)`, `line-height: .86`, display variation, overflow hidden (for line-mask reveals) |
| Marquee words | `clamp(48px, 8vw, 128px)`, line-height 1.05; alternate **outlined uppercase** (`wdth 78, wght 800`) and **wide light italic** (`wdth 120, wght 250`) |
| Statement / lead | `clamp(24px, 2.6vw, 38px)`, line-height 1.2, letter-spacing `-.01em`, `max-width: 26–30ch`, `text-wrap: pretty` |
| Body | `19px / 1.55`, `--color-muted`, `max-width: 46ch` (a shorter variant is `clamp(18px, 1.6vw, 22px) / 1.45`, `36ch`) |
| Eyebrow / label | Geist Mono, `12px`, `letter-spacing: .06em`, uppercase, `--color-label` (11px variant in `--color-faint`) |
| Chip | `14px`, `padding: 8px 14px`, 1px `--color-chip-border`, fully rounded |

Mixing a heavy condensed uppercase word with a light wide italic word in one headline is the signature move. The header logo does it too ("Michael" condensed uppercase and the rest in wide italic, with an accent-colored block).

## 4. Spacing, radius, layout (observed)

```css
--spacing-gutter:   clamp(20px, 4vw, 56px);   /* page side padding */
--spacing-page-top: clamp(120px, 18vh, 180px);/* space under the fixed header */
--radius-badge: 4px;
--radius-image: 6px;
--radius-card:  8px;
--radius-icon:  18px;
--radius-pill:  100px;
```

- Breakpoints: 40, 48, 64, 80, 96rem (Tailwind v4 defaults, plus a custom 901px switch to the mobile header).
- Sections are separated by full-width 1px hairlines. There are almost no shadows or filled cards.
- Intro rows use `grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))` with large gaps (`32px` / `clamp(32px, 6vw, 96px)`).
- Horizontal overflow is clipped on `body` (`overflow-x: clip`). Containers use container queries so display type can fit its box (`100cqi`).

## 5. Components

### Header (observed)
- Fixed, three-column grid: logo, centered status, links.
- Background is a fade: `linear-gradient(#111010 10%, transparent)`.
- Status text is mono, 11px, uppercase, with a dimmed slash separator.
- Links are mono, 12px, uppercase, with a 6px accent dot on the active item.
- CTA is a pill with accent fill and dark text, `padding: 10px 16px`, weight 500.
- Below 901px the links and status hide, and a pill "menu" button appears with two 1.5px bars that animate on a `.5s` ease-out.

### Hero (inferred from copy + classes)
- Large name or statement, a one-line audience sentence, a looping capability ticker, a scroll cue ("↓ Scroll, gently.") and a "See the work →" link.

### Skills / logo marquee (observed)
- Rows with a hairline top and bottom, `padding: 14px 0`, `overflow: hidden`.
- Track is `width: max-content`, `will-change: transform`, with two copies for a seamless loop.
- Items are separated by a **rotated 14px accent square** (a diamond).
- Words alternate between outlined uppercase and light wide italic. On hover, an outlined word fills in (`.4s` color transition).
- Logos in the strip sit at `opacity: .45` and go to `1` on hover.

### Services (inferred layout, observed tokens)
- Four numbered cards (01–04), each a full link with an arrow. The number is mono and accent colored.
- Service detail pages use a mono "← back" link, a huge uppercase title with the accent number beside it, a hairline, and a two-column intro (statement on the left, CTA aligned right).

### Buttons and chips (observed)
- Primary: pill, accent fill, dark text.
- Secondary: pill with a 1px `--color-outline` border, transparent fill, mono uppercase.
- Chip: pill with `--color-chip-border`, 14px text.
- Hover/focus: fills to accent, and focus-visible shows a `2px solid accent` outline with `4px` offset.

### Media / video (observed)
- A 72px round play toggle with a 1px outline and a 60% bg blur-ish fill. On hover it turns accent colored. There is a "(Pause motion)" control.

### Footer (observed)
- Top hairline, `padding: clamp(80px, 14vh, 160px)` top.
- A giant uppercase word set with `font-size: min(18vw, 100cqi / ems)`, `line-height: .86`, `white-space: nowrap`, clickable.
- Under it, a mono row (12px, uppercase, `--color-label`) with the email in `--color-text`, social links, and a "back to top" button.

## 6. Motion (observed + inferred)

```css
--ease-out:    cubic-bezier(.16, 1, .3, 1);   /* reveals, menu */
--ease-in-out: cubic-bezier(.76, 0, .24, 1);  /* transitions */
--default-transition-duration: .15s;
```

- **Master switch:** `html[data-motion="on"]` gates all animation, so the pause control and reduced-motion both work from one place.
- **Line reveals:** elements with `[data-in]` start at `translateY(115%)` inside an `overflow: hidden` mask and slide up. `[data-clipin]` starts at `opacity: 0` until revealed.
- **Accent words:** `.accent-words` splits a headline into masked words.
- **Logo fill:** the accent block in the logo has a child that scales from `scaleY(0)` with `transform-origin: bottom`, so it fills on hover (inferred).
- **Smooth scroll:** Lenis.
- **Reduced motion:** every animation is wrapped in `prefers-reduced-motion: no-preference`. Fine-pointer effects are also gated with `(pointer: fine)`.
- Typical timings: `.15s` default, `.3s` icon and background, `.4s` marquee hover, `.5s` menu bars.

## 7. Accessibility notes to keep

- Keep the motion master switch plus a visible "Pause motion" control.
- Contrast: `#edeae4` on `#111010` is high; `--color-label` (`#8f8a82`) and `--color-faint` (`#86817a`) are lower, so check them against WCAG AA before using them for anything essential.
- Touch targets: the reference uses `min-height: 44px` on back links.

## 8. Tailwind v4 mapping (starting point for this repo)

```css
@import "tailwindcss";

@theme {
  --color-bg: #111010;
  --color-surface: #1a1918;
  --color-text: #edeae4;
  --color-muted: #b9b4ac;
  --color-label: #8f8a82;
  --color-accent: #7fa8ff;
  --color-on-accent: #111010;
  --color-hairline: #edeae41f;

  --font-sans: "Archivo", "Archivo Fallback", sans-serif;
  --font-mono: "Geist Mono", monospace;

  --radius-pill: 100px;
  --radius-card: 8px;
  --spacing-gutter: clamp(20px, 4vw, 56px);

  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out: cubic-bezier(.76, 0, .24, 1);
}
```

Note that this repo has a `tailwind.config.ts`, which suggests Tailwind v3. Check `package.json` first. On v3 the same tokens go under `theme.extend` instead of `@theme`. Load fonts with `next/font/google` (`Archivo` with `axes: ['wdth']`, and `Geist_Mono`).

## 9. Not captured

- Exact hero layout and the hero's scroll-linked motion (needs the live page or a recording).
- Hover micro-interactions on service cards and project tiles.
- Image treatment (aspect ratios, crops, filters).
- Whether the marquee speed reacts to scroll velocity.

Take a screen recording of the live site if any of these matter.
