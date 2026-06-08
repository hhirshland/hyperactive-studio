# Hyperactive Studio — Brand Styleguide

> **Purpose:** Canonical reference for Hyperactive's current brand identity ("Product Lab"). Use this document when writing copy, designing UI, generating assets, or building agents that represent Hyperactive Studio.
>
> **Scope:** This reflects the **live production design** as of 2026. It does not cover exploratory brand directions (Salon, Atelier, Meridian, Endowment, Studio).

---

## Brand at a Glance

| Attribute | Value |
|---|---|
| **Legal / formal name** | Hyperactive Studio |
| **Wordmark** | `hyperactive` + `studio` (lowercase) |
| **Concept** | Product Lab — modular, operator-grade, technical |
| **Positioning** | AI deployment partner for investment firms |
| **Domain** | hyperactivestudio.xyz |
| **Contact** | henry@hyperactivestudio.xyz |

**One-line positioning:**

> Hyperactive partners with investment firms to provide strategic input and hands-on deployment of AI systems — not slide decks, but workflows running inside the firm.

---

## Positioning & Value Proposition

### What we do

Hyperactive is a technical partner that embeds with investment firms to:

1. Map high-friction internal workflows (diligence, screening, portfolio monitoring, reporting, legal, ops)
2. Build firm-specific context layers from templates, criteria, and institutional knowledge
3. Deploy agentic AI workflows with human review where judgment matters
4. Ship production systems that improve with every run

### What we are not

- Not an AI strategy consultancy (we ship, not just recommend)
- Not a generic SaaS vendor (we integrate with existing stacks)
- Not model-locked (model-agnostic by design)
- Not hype-driven (no sci-fi aesthetics, no AI buzzword copy)

### Core differentiators

- **Engineering that understands operations** — we turn ambiguous fund processes into interfaces, data flows, and shipping plans
- **Fund workflow fluency** — memos, screeners, diligence, and CRM context are the starting vocabulary
- **Human review stays central** — high-risk decisions stay with people
- **Built on your stack** — no forced migration before value is proven
- **Improves from use** — feedback, evals, and house style become institutional knowledge

### Signature line

> The deliverable is not a recommendation. It is a workflow running inside the firm.

---

## Audience

### Primary

- Fund-of-funds teams
- GP relations teams
- Investment committee (IC) members at private equity and venture firms
- Family-office CIOs

### Secondary

- GPs of portfolio companies where LPs need AI literacy delivered top-down

### Firm types we serve

Private equity · Venture capital · Fund of funds · Family office · Other investment firms

### What they value (priority order)

1. **Signal over noise** — short claims, backed by primary evidence
2. **Peer credibility** — who else trusts you, in their own words
3. **Continuity** — sense of having seen more than one cycle
4. **Discretion** — no screaming, no gradients, no growth-hacking vocabulary
5. **Throughput** — one pre-read and one call, not a six-week sales motion

### Reader context

Assume the reader is a senior allocator or operator with a full calendar. They are skeptical of AI hype but open to practical systems that save time and improve judgment. Write for someone who will skim on a phone between meetings.

---

## Voice & Tone

### Principles

| Principle | Rule |
|---|---|
| **Declarative** | Sentences end. State the position, then evidence it. Avoid hedges ("we believe," "we think we can"). |
| **Evidence-backed** | Every adjective earns its place with a number, a name, or a primary source. |
| **Operator-first** | Sound like someone who ships systems, not someone who sells visions. |
| **Respect the calendar** | A subordinate sentence is a tax on a partner's morning. Trim. |
| **Technical but accessible** | Use domain vocabulary (diligence, IC, portfolio monitoring) without jargon for its own sake. |

### We sound like

- A thoughtful operator who has built things
- A technical partner, not a vendor
- Direct, confident, understated
- Someone who understands fund workflows from the inside

### We do not sound like

- A startup pitch deck
- An AI hype agency
- A heritage/conservative financial institution (that's a different brand direction)
- Generic SaaS marketing

### Vocabulary — use freely

- Workflow, deploy, ship, build, integrate
- Agentic, context layer, evals, review gates
- Diligence, screening, portfolio monitoring, IC, memo
- Judgment, human review, operating rhythm
- Production, incremental, iterate

### Vocabulary — avoid

| Avoid | Why |
|---|---|
| unlock, leverage AI, transform with AI | AI-agency clichés |
| supercharge, next-gen, revolutionary | Hype language |
| synergy, paradigm shift, disruptive | Corporate filler |
| we believe, we think, we hope | Hedging |
| cutting-edge, state-of-the-art | Empty superlatives |
| AI-powered (as a lead adjective) | Overused; be specific about what the system does |

### Copy patterns

**Headlines:** Short, specific, outcome-oriented. Lead with what we do, not who we are.

- Good: "AI deployment for your investment firm"
- Good: "A technical partner for operational redesign."
- Avoid: "Transform your enterprise for the AI Era." (too generic / hype-y)

**Subheads:** One to two sentences. Explain the mechanism, not the vision.

- Good: "We start by deeply understanding your workflows and key business context, then build agentic systems that help your team spend less time on manual work and more time on judgment."

**Callouts:** Single declarative statements that reframe expectations.

- Good: "The deliverable is not a recommendation. It is a workflow running inside the firm."
- Good: "You get reliable AI systems, not slide decks."

**Section labels:** Uppercase mono annotations, 1–3 words.

- Examples: `About`, `Why Hyperactive`, `Core offer`, `case study`

---

## Visual Identity — "Product Lab"

The visual system reads as a **modular product lab**: grid backgrounds, annotation tags, status dots, mono IDs, and terminal-style UI chrome. It should feel like a thoughtful operator's workspace — contemporary, precise, and competent — not a sci-fi AI product or a heritage financial institution.

### Design philosophy

1. **Structure over decoration** — grids, rules, and numbered rows do the visual work
2. **Mono for metadata** — IDs, labels, tags, and status indicators use monospace
3. **One accent doing real work** — teal signals progress and action; blue and orange are secondary
4. **Whitespace is confidence** — generous section padding, restrained element density
5. **Product-tool motifs** — status dots, tag pills, terminal chrome, numbered badges

---

## Typography

### Font families

| Role | Font | CSS variable | Usage |
|---|---|---|---|
| **Display & body** | Inter | `--font-inter` | Headlines, body copy, buttons, navigation |
| **Annotations & metadata** | JetBrains Mono | `--font-jetbrains-mono` | Section labels, tags, IDs, status text, filenames |

Both fonts are loaded via Google Fonts (`next/font/google`).

### Type scale

| Element | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Hero H1 | `clamp(2.25rem, 5vw, 3.75rem)` | 600 (semibold) | tight | 1.08 |
| Section H2 | `text-3xl` / `sm:text-4xl` (30–36px) | 600 | tight | default |
| Card H3 | `text-sm`–`text-lg` (14–18px) | 600 | default | relaxed |
| Body (primary) | 16–17px | 400 | default | relaxed (1.625) |
| Body (secondary) | 14px (`text-sm`) | 400 | default | relaxed |
| Buttons / nav | 13px | 500 (medium) | default | default |
| Annotations / tags | 11px | 400–600 | 0.02–0.04em | default |
| Wordmark "hyperactive" | 15px | 600 | tight | default |
| Wordmark "studio" | 11px (annotation) | 400 | 0.02em | uppercase |
| Footer copyright | 11px | 400 (mono) | default | default |

### Typography rules

- **Headlines:** Inter semibold, tight tracking. No serif. No all-caps headlines.
- **Body:** Inter regular, muted color for secondary paragraphs.
- **Section labels:** Always JetBrains Mono, 11px, uppercase, muted-light color. Use the `.annotation` pattern.
- **Numbered items:** Mono IDs (`01`, `02`, …) in muted-light, tabular nums.
- **Emphasis in headlines:** Use muted color for secondary clause, or `.hand-note` blue underline — not bold alone.
- **No drop caps, no serif body, no italic display type.**

---

## Color Palette

### Core neutrals

| Name | Hex | CSS token | Role |
|---|---|---|---|
| **Ink** | `#141414` | `--foreground`, `--primary` | Primary text, primary buttons |
| **Ink Light** | `#2A2A2A` | `--primary-light` | Button hover states |
| **Paper** | `#FAFAFA` | `--background` | Page background |
| **Surface** | `#FFFFFF` | `--surface` | Cards, panels, elevated elements |
| **Surface Alt** | `#F3F3F3` | `--surface-alt` | Alternate sections, hover fills |
| **Muted** | `#71717A` | `--muted` | Secondary body text |
| **Muted Light** | `#A1A1AA` | `--muted-light` | Annotations, labels, IDs |
| **Border** | `#E4E4E7` | `--border` | Default borders, dividers |
| **Border Strong** | `#D4D4D8` | `--border-strong` | Hover borders, emphasis rules |
| **Grid Line** | `rgba(0, 0, 0, 0.04)` | `--grid-line` | Lab grid overlay |

### Brand accents

| Name | Hex | CSS token | Role |
|---|---|---|---|
| **Teal** | `#0D9373` | `--teal` | Primary accent — CTAs, active states, success, links, progress |
| **Teal Light** | `#10B890` | `--teal-light` | Lighter teal variant |
| **Teal Dark** | `#0A7A5F` | `--teal-dark` | Darker teal variant |
| **Teal Muted** | `rgba(13, 147, 115, 0.08)` | `--teal-muted` | Teal tinted backgrounds, badges |
| **Blue** | `#2563EB` | `--blue` | Info, data highlights, hand-note underline |
| **Blue Light** | `#3B82F6` | `--blue-light` | Lighter blue variant |
| **Blue Dark** | `#1D4ED8` | `--blue-dark` | Darker blue variant |
| **Blue Muted** | `rgba(37, 99, 235, 0.08)` | `--blue-muted` | Blue tinted backgrounds |
| **Orange** | `#F06D2D` | `--orange` | Energy, alerts, emphasis, pending states |
| **Orange Light** | `#F5874F` | `--orange-light` | Lighter orange variant |
| **Orange Dark** | `#D45A1F` | `--orange-dark` | Darker orange variant |
| **Orange Muted** | `rgba(240, 109, 45, 0.08)` | `--orange-muted` | Orange tinted backgrounds |

### Color usage hierarchy

1. **Ink on Paper** — default for all text and primary UI
2. **Teal** — the workhorse accent. Use for: numbered badges, callout borders, status-dot "live", links, progress indicators
3. **Blue** — sparingly. Hand-note highlights, info states, data accents
4. **Orange** — sparingly. Pending/warning status dots, energy moments
5. **Never use gradients.** Flat colors only.

### Dark sections

Some sections (Offer, Contact) invert to dark backgrounds:

| Element | Value |
|---|---|
| Background | `#141414` (foreground/ink) |
| Grid lines | `rgba(255, 255, 255, 0.04)` |
| Primary text | `#FFFFFF` |
| Secondary text | `rgba(255, 255, 255, 0.55)` |
| Tertiary / labels | `rgba(255, 255, 255, 0.30)` |
| Card borders | `rgba(255, 255, 255, 0.08)` |
| Card backgrounds | `rgba(255, 255, 255, 0.03)` |
| Primary CTA | White button, ink text, hover `white/90` |

### Text selection

- Background: `rgba(10, 143, 108, 0.15)` (teal tint)
- Text: ink (`#141414`)

---

## Layout & Spacing

### Container

```
max-width: 72rem (max-w-6xl)
horizontal padding: 1.5rem (px-6) → 2rem on lg (lg:px-8)
```

### Section spacing

```
vertical padding: py-24 (6rem) → lg:py-32 (8rem) on large screens
section dividers: border-t border-border
```

### Grid system

- Content typically constrained to `max-w-3xl` for hero/narrative text
- Two-column layouts: `lg:grid-cols-5` (2+3 split) or `lg:grid-cols-2`
- Card grids: `sm:grid-cols-3` for pillar/feature rows

### Lab grid backgrounds

Two grid densities, applied via CSS classes:

| Class | Grid size | Usage |
|---|---|---|
| `.grid-bg` | 40px × 40px | Hero, major sections |
| `.grid-bg-dense` | 20px × 20px | Denser texture areas |

Grid lines use `--grid-line` color. On dark sections, override to white at 4% opacity.

---

## UI Components & Patterns

### Buttons

**Primary (light sections):**
```
rounded-md bg-foreground text-white text-[13px] font-medium
hover: bg-primary-light (#2A2A2A)
padding: px-6 py-3 (hero) or px-4 py-1.5 (nav)
```

**Secondary:**
```
rounded-md border border-border bg-surface text-foreground text-[13px] font-medium
hover: bg-surface-alt, border-border-strong
```

**Primary (dark sections):**
```
rounded-md bg-white text-foreground font-semibold
hover: bg-white/90
```

### Cards

```
rounded-lg border border-border bg-surface p-5/p-6
hover: border-border-strong, shadow-sm
```

Numbered badge (top-left):
```
h-6 w-6 rounded-md bg-teal-muted
font-mono text-[10px] font-semibold text-teal
content: "01", "02", etc.
```

### Section labels (annotations)

```css
font-family: JetBrains Mono
font-size: 11px
letter-spacing: 0.02em
color: muted-light (#A1A1AA)
text-transform: uppercase
```

Color variants: `.annotation-teal`, `.annotation-blue`, `.annotation-orange`

### Tags

Pill-shaped metadata labels:
```
font-mono, 11px, uppercase, letter-spacing 0.04em
padding: 4px 10px
border-radius: 4px (light) or 3px (dark sections)
border: 1px solid border-color
```

Variants: `.tag-teal`, `.tag-blue`, `.tag-orange` — each with matching border, text, and muted background.

### Status dots

6px circles indicating state:

| State | Color | CSS class |
|---|---|---|
| Live / active | Teal `#0D9373` | `.status-dot.live` |
| Pending / warning | Orange `#F06D2D` | `.status-dot.pending` |
| Idle / inactive | Muted Light `#A1A1AA` | `.status-dot.idle` |

Always paired with mono label text.

### Hand-note highlight

Blue underline effect for emphasis within headlines:
```css
.hand-note::after {
  background: #2563EB at 13% opacity
  height: 35% of text, slightly rotated/skewed
  border-radius: irregular (3px 4px 2px 5px)
}
```

Use sparingly — one phrase per hero maximum.

### Callout blocks

Left-border accent with tinted background:
```
border-left: 2px solid teal
background: teal-muted
padding: px-4 py-3
rounded-md
```

Optional teal icon (lightning bolt) before text.

### Terminal / window chrome

For workflow cards and process visualizations:
```
Top bar: status-dot + mono filename (e.g., "workflow_scope.md")
Border-bottom separator
Content area with numbered steps
Footer metadata in mono (e.g., "4 moves")
```

Dark section variant: white at 6–8% opacity borders, 3% opacity backgrounds.

### Numbered list rows

Two-column grid for service/differentiator lists:
```
grid-cols-[auto_1fr]
Left: mono ID ("01") in muted-light, tabular-nums
Right: title (semibold) + description (muted, text-sm)
Separators: border-b border-border
Hover: bg-surface-alt/40
```

### Border radius

| Element | Radius |
|---|---|
| Buttons | 6px (`rounded-md`) |
| Cards | 8px (`rounded-lg`) |
| Tags (small) | 3–4px (`rounded-[3px]`) |
| Badges | 6px (`rounded-md`) |
| Status dots | 50% (circle) |

---

## Motion & Animation

### Easing

Custom cubic-bezier for all transitions: `[0.22, 1, 0.36, 1]` (smooth deceleration)

### Scroll reveals

```
opacity: 0 → 1
translateY: 20px → 0
duration: 400ms
stagger: 60–80ms between items
```

### Hover interactions

- Cards: `border-border-strong` + `shadow-sm`, optional `y: -2` lift
- Callouts: subtle `x: 2` shift
- Buttons: background color transition, 150ms
- Logo: `scale-105` on hover

### Rules

- Motion should feel precise, not playful
- One reveal animation per section — no bouncing, no spring physics
- Duration: 150ms (micro) to 400ms (reveals)
- Never use parallax, particle effects, or gradient animations

---

## Logo & Wordmark

### Wordmark treatment

```
hyperactive          ← Inter, 15px, semibold, tight tracking, lowercase
studio               ← JetBrains Mono, 11px, uppercase annotation, reduced opacity (40–50%)
```

Always lowercase "hyperactive". "studio" is secondary and rendered in mono.

### Logo mark

- Image: `/hyperactive-logo.png`
- Sizes: 36×36 (header), 32×32 (footer)
- Alt text: "Hyperactive Studio"
- Hover: subtle scale (105%)

### Usage rules

- Wordmark and logo mark appear together in header/footer
- Do not use all-caps "HYPERACTIVE"
- Do not separate "hyperactive" from "studio" across lines without the logo
- Do not apply color filters or effects to the logo
- No monogram-only usage defined yet (final logo system TBD)

---

## Imagery & Photography

### Current approach

The Product Lab identity is **typography- and structure-driven**. Imagery is minimal on the live site. When images are needed:

### Do

- Clean product screenshots and workflow UI captures
- Abstract grid/texture backgrounds (already built into the system)
- Simple icons (stroke-based, 2px weight, currentColor)

### Do not

- Gradient-mesh "AI sci-fi" backgrounds
- Glowing neural-network diagrams
- Robot, circuit, or brain clichés
- Stock photography of handshakes, glass skyscrapers, or server racks
- Sepia filters or vintage photo treatments
- Illustrated characters or mascots

---

## Anti-Patterns

### Visual

- Gradient backgrounds or gradient text
- More than one accent color competing in the same viewport
- Serif fonts anywhere
- Rounded-full pill buttons (use `rounded-md`)
- Drop shadows heavier than `shadow-sm` / `shadow-md`
- Neon or saturated colors outside the defined palette
- Dark mode as default (dark sections are intentional inversions, not a theme)

### Copy

- Starting sentences with "We believe" or "Our mission is"
- Using "AI" as the first word in a headline
- Feature lists without context ("Fast. Reliable. Secure.")
- Testimonials without attribution
- Vague superlatives without evidence

### Brand

- Positioning as a heritage/endowment brand (wrong direction)
- Positioning as a generic AI startup
- Over-promising timelines or capabilities
- Using competitor names in marketing copy

---

## SEO & Metadata

### Default title

```
Hyperactive Studio | AI Workflows for Investment Firms
```

### Default description

```
Hyperactive helps private equity, venture capital, and fund-of-funds teams turn AI experiments into production workflows that save time and improve decision-making.
```

### Keywords (reference)

AI workflows for private equity, AI workflows for venture capital, AI for fund of funds, investment operations AI, agentic workflows for funds, investment memo automation, portfolio news tracking, fund diligence AI

---

## Technical Reference

### CSS custom properties (source: `src/app/globals.css`)

All tokens are defined in `:root` and mapped to Tailwind via `@theme inline`.

### Tailwind color classes

```
bg-background, text-foreground, bg-primary, bg-primary-light
bg-surface, bg-surface-alt, text-muted, text-muted-light
border-border, border-border-strong
bg-teal, text-teal, bg-teal-muted, bg-teal-light, bg-teal-dark
bg-blue, text-blue, bg-blue-muted
bg-orange, text-orange, bg-orange-muted
font-sans (Inter), font-mono (JetBrains Mono)
```

### Utility classes

```
.grid-bg, .grid-bg-dense
.annotation, .annotation-teal, .annotation-blue, .annotation-orange
.tag, .tag-teal, .tag-blue, .tag-orange
.hand-note
.status-dot, .status-dot.live, .status-dot.pending, .status-dot.idle
```

### Font loading

```tsx
// src/app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";
// Variables: --font-inter, --font-jetbrains-mono
```

---

## Agent Instructions

When generating content or designs for Hyperactive Studio, follow these rules:

1. **Always use the Product Lab identity** — Inter + JetBrains Mono, ink/paper palette, teal accent
2. **Write for investment firm operators** — PE, VC, FoF, family office audience
3. **Be declarative and specific** — no hedging, no AI clichés
4. **Prefer structure over decoration** — grids, numbered rows, mono labels, status dots
5. **Ship-focused messaging** — emphasize workflows, deployment, and production systems
6. **Keep accent colors disciplined** — teal does the work; blue and orange are rare
7. **Match existing copy patterns** — review hero, about, and offer sections for tone calibration
8. **Do not invent heritage/serif/painted aesthetics** — those are separate explorations, not current brand

---

## Open Items

The following are not yet finalized. Provide these if you want the styleguide to be more complete:

| Item | Status | Notes |
|---|---|---|
| Final logo system | TBD | Currently uses `hyperactive-logo.png` + wordmark; no formal logo guidelines |
| Brand photography | TBD | No photography direction defined for Product Lab |
| Illustration style | TBD | No illustration system; icons are inline SVG only |
| Email / document templates | TBD | No formal template for proposals, one-pagers, or email signatures |
| Social media formats | TBD | No channel-specific sizing or tone guidance |
| Competitive positioning statement | Partial | Value prop is clear; formal competitive framing not documented |
| Client testimonial / logo usage | TBD | Client names appear on site; no logo usage policy documented |
| Print / PDF guidelines | TBD | Web-first system; no print color or margin specs |

---

*Last updated: June 2026 · Source: live production site (hyperactivestudio.xyz) and `src/app/globals.css`*
