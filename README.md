## The Blueprint

Personal roadmap site for Umar — built with Next.js, GSAP, and custom UI components.

Key sections:

- Hero: Intro and high-level positioning.
- Goals: Current focus areas and constraints.
- Plans: Horizontally scrolling life roadmap with pinned scroll.
- Projects: Bento-style grid of projects with scroll-triggered reveals.
- Footer: Contact and closing.

### Scroll Counter

A global scroll percentage counter is rendered in the layout and updates as you move through the page:

- Tracks total page progress using `window.scrollY` and `ScrollTrigger.maxScroll(window)`.
- Includes the pinned horizontal scroll distance from the Plans section.
- Stays visible (top-left) across all sections, including Projects.

### Tech Stack

- Next.js App Router
- React
- GSAP + `ScrollTrigger` + `@gsap/react`
- Tailwind CSS (via `@tailwindcss/postcss`)

## Getting Started

Install dependencies (recommended: pnpm):

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Then open http://localhost:3000 in your browser.

To build for production:

```bash
pnpm build
pnpm start
```
