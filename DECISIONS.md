# Design & Content Decisions

## Design System

### Colors
- --white, --black, --gray, --line (4 tokens)
- Terracotta (#B87350): used for row/index numbers, "Allen Chong" wordmark
  (Home only — gray on CS pages), active nav states, pull quote border rules,
  and hover states
- Warmer palette explored in Figma v2 but not yet in code
- No color accents beyond terracotta (intentional omission)

### Typography
- Fonts: Instrument Serif + Instrument Sans only
- Negative letter-spacing on headings; positive on labels
- No font weight variation in display type (intentional omission)
- Full size/spacing table documented in code

### Layout
- 960px max-width
- 3rem/1.5rem padding
- Breakpoints: 1056px, 820px, 720px (see "CS01 Responsive Breakpoints" section)
- All section-level padding documented in code

### Components
- Nav: 72px height, white bg, 48px side padding, Instrument Serif 16.8px
  name left / Instrument Sans 12.8px links right. Interaction design
  complete — see "Nav Interaction" section below. Frosted glass + scroll
  behavior deferred to code implementation.
- Case study rows: grid layout + hover states
- CTA style: no persistent underline. Hover state provides underline (global `a:hover` rule). Border-bottom approach was used initially but removed once global hover was implemented.
- Animations: staggered fadeIn
- Index numbers (01/02/03): --line color, decorative not readable
- Company names in body copy: wrapped in <strong> for contrast 
  without callout boxes
- Middot tag separator via CSS ::before, not markup

### Intentional omissions
- No images on homepage (Figma design; placeholder thumbnails used for CS rows are phone mockup screenshots, not decorative imagery)
- No dark mode
- No color accent beyond terracotta
- No font weight variation in display type

### Lightbox — CS01 interactive images (implemented 2026-04-06, updated 2026-04-07)
All 6 tappable elements on the CS01 solutions section (3 VP cards + 3 sol02 screenshots) open a `Lightbox` overlay on click/Enter.
- `Lightbox.tsx` is a generic `'use client'` component: fixed backdrop, `useEffect` for Escape key + body scroll lock, click-outside-to-close via backdrop click.
- `SolutionsSection.tsx` (also `'use client'`) holds all interactive state and imports Lightbox. `page.tsx` stays a pure server component to keep `export const metadata`.
- Discriminated union type (`VpCardItem | ImageItem`) drives the conditional render inside the Lightbox: VP cards render an enlarged HTML card; images render a cropped image container.
- Caption is passed as a prop and rendered as `<figcaption>` inside the Lightbox panel.

**Sol02 image lightbox (updated 2026-04-07):** Each `ImageItem` carries `cropWidth`, `cropHeight`, and `objectPosition`. The lightbox renders a `.imgCroppedContainer` div with inline `aspect-ratio` and `width: min(80vw, calc(75vh × ratio))` so the crop exactly matches the page thumbnail — same `objectFit: cover` + `objectPosition` framing. Rejected earlier approach of raw `<img>` with `max-width`/`max-height` — showed uncropped image, inconsistent with page display.

**VP card lightbox (updated 2026-04-07):** `.vpCardEnlarged` has `aspect-ratio: 136/177` + `overflow: hidden` — same portrait shape as the on-page card, scaled to 320px wide (~2.35×). Rejected content-driven height — produced landscape card at enlarged font sizes.

### VP card micro-typography (updated 2026-04-07)
- Base: `vpCardTitle` 10.5px / `vpCardBody` 8.5px (up from 10/8 — +0.5px for readability)
- Mobile overrides removed (2026-04-07): the earlier 9px/7px mobile overrides caused visible text-size jumps at the 720px breakpoint. Removed entirely — base sizes (10.5px/8.5px) now apply at all viewport widths.
- Earlier attempt to scale to 13.6px/10px was rejected ("looks really bad") — these UI mockup cards intentionally use condensed type

### Home page — code decisions (2026-04-06)
- **CTA links:** `width: fit-content` on `.cta-link` so underline scopes to text width only, not full flex column width
- **CS row images:** `align-items: flex-start` on the row + `objectPosition: top` on the image — top-aligned so the phone UI chrome is visible
- **Nav expanded active state:** `csToggleColor` = terracotta only when `isCS` (on a CS page). Opening the dropdown on Home/Highlights/About does NOT make "Case studies" terracotta — that would falsely imply the user is on a CS page
- **Image files:** `home-case-study-1/2/3.png` in `site/public/images/` — sourced from `portfolio/images/`, not Figma assets (which expire after 7 days)

---

## Interaction & Hover States

### Global link hover state (implemented 2026-04-06)
All `<a>` elements site-wide: terracotta color + font-weight 500 + underline
with 2px offset. Set in `globals.css` via `a:hover`. Nav links and buttons
override with `!important` to beat inline `color` styles.

### Case study rows + Highlights cards
Landed on: title shifts to terracotta on hover only
Rejected: background fill — too app-like, cheapens editorial feel
Rejected: card lift/shadow — same reason
Status: Decision made in Figma; deprioritized pending content
finalization

---

## Writing Rules
- Em dashes are acceptable in hero subheads and as closing punches
  at the end of paragraphs. Not acceptable within body prose.
- Hero titles on About and Highlights pages use a more editorial, 
  punchy style: no trailing periods; commas preferred over em dashes 
  to maintain visual lightness.
- Participial "-ing" verb form in all case study titles
- Two sentences per case study description, consistent length
- <strong> for company names — contrast without callout boxes
- "by design." in italic gray — intentional punchline, consistent
  across files

---

## Case Study Content (Final Approved)

### Titles (parallel "-ing" verb form)
- CS1: Paradigm Shift (title retained — not a verb form, 
  but established before rule)
- CS2: From Creation to Activation (same)
- CS3: "Unified" → "Unifying" (Allen's edit for parallel structure)

### Skill chips
- CS1: Product Positioning · Trust & Safety · UX Writing
  (was: UX Strategy · Systems Design — "Systems Design"
  belonged to CS3)
- CS2: Behavioral Design · Onboarding · Engagement & Retention
  (was: Onboarding · NUX Design — too narrow)
- CS3: Content Strategy · Localization · Taxonomy Design
  (was: Content Design · Naming & IA — too generic)

### Descriptions (two sentences, no em dashes, matched length)
- CS1: "Owning the product positioning for a zero-to-one launch 
  that required users to rethink what Messenger is. Building the 
  trust architecture that made discoverability feel safe."
  (Rejected earlier draft: factually wrong about hierarchy; 
  "Designing" → "Building" to avoid repeating CS2's verb)

- CS2: "Using targeted UXR to diagnose why new communities 
  stagnated after launch. Crafting behavioral nudges and social 
  scaffolding to drive first-week engagement for both admins 
  and members."
  (Em dash removed — reads as AI-generated; "designing" → 
  "crafting" to avoid repeating CS1's verb)

- CS3: "Reconciling two years of naming debt across Instagram and Messenger into a single unified taxonomy — localization-ready and built to scale across Meta’s community ecosystem."  (Cut from longer draft with em dashes; "resolving" → 
  "reconciling" — more specific and active)

---

## Figma Wireframe
- Frame size: 393×852 (iPhone 16 spec)
- Rebuilt from scratch after initial wrong dimensions
- Color: full grayscale (rejected color — too distracting 
  for wireframe stage)
- Location: Allen's "Image playground" page in Figma
- Home page wireframe: complete
- Hover state variants: started but unfinished due to 
  API error (action vs. actions); deprioritized

---

## Case Study Page Drafts

All three case study pages are finalized and ready for Figma layout.

### CS1 — Launching a new product category inside a private-messaging app
- **Hero subhead:** Messenger Communities required users to fundamentally rethink what Messenger is for — and content design had to lead the way.
- **Skill chips:** Product Positioning · Trust & Safety · UX Writing
- **Sections:** Challenge, My Role, Solutions (Reframing the value proposition; Building a trust and safety content system), Outcome
- **Key metrics:** ~23% lift in community creation within 6 weeks of NUX launch; ~14% increase the month following T&S launch; ~39% of new communities opted into request-to-join
- **User quote:** "This makes sense. It makes sense you can search for the things you're interested in."

### CS2 — Solving a two-sided cold start problem, from day one
- **Hero subhead:** New communities were being created but not surviving. The problem wasn't growth — it was activation.
- **Skill chips:** Behavioral Design · Onboarding · Engagement & Retention
- **Sections:** Challenge, My Role, Solutions (Dynamic invite banner for admins; Customizable welcome banner; Reducing member cold start), Outcome
- **Key metrics:** Average member count 2.7 → 5.3; per-user message sends 1.9 → 5.1 in first week; active participation stabilized at ~28%; welcome banner adopted into Messenger design system
- **User quotes:** "If this wasn't here, I wouldn't know what we're supposed to do." / "If I know one of my friends is in the chat, that would make me want to join more."

### CS3 — Unifying naming architecture across Messenger and Instagram
- **Hero subhead:** The same feature had six competing names across two apps. Localization teams were flagging contradictions. Users were confused. The problem wasn't the product — it was the language.
- **Skill chips:** Content Strategy · Localization · Taxonomy Design
- **Sections:** Challenge, My Role, Solutions (Architecting "community" as a meta-primitive; Developing a unified product taxonomy; Future-proofing for new verticals), Outcome
- **Key metrics:** Taxonomy reduced from 6 terms to 4; first terminology alignment between Instagram and Messenger; "broadcast" and "social" modifiers eliminated; locked term database delivered to Engineering, Product, and Legal
- **Closing note:** Naming system designed to scale into new verticals — by design.

---

## CS01 Case Study Page Layout (Figma — 2026-04-01)

### Section spacing rhythm
- **Standard bottom padding:** 96px from last content element to section bottom edge
- **Standard top offset to section label:** 80px from section top
- **Gap from label to body copy:** 37px (label h=13 + 24px gap)
- **Visual section-to-section gap** (content bottom → next label): 80 + 1 (divider) + 80 = 161px — generous, intentional
- Reference: matches Home page `pb-[96px]` rhythm

### Hero (updated)
- Phone mockup resized from 248×248 to **248×450** — reveals additional channel rows below the home page crop
- Mockup drives hero height: 116 (top offset) + 450 (mockup) + 96 (padding) = **662px** total hero height
- Teaser → reveal dynamic: home page shows cropped 148px thumbnail; CS01 shows full phone-height mockup. Preserve this across CS02 and CS03.
- Left text column (title, subhead, stat, chips, role line) remains top-aligned; mockup height drives section height

### My Role — absorbed into hero
- My Role section removed as a standalone page section
- Role description condensed to a single line beneath the skill chips in the Hero:
  _"Sole content designer — zero-to-one launch, company-level priority."_
- Positioned at y=415 within Hero (16px below chips), Instrument Sans Regular 13.6px, color #767672
- Rationale: My Role was orphaned with insufficient content to justify its own section break. Single-line absorption reads as a compact waypoint without consuming vertical rhythm.

### Solutions — image middle-alignment
- Sol01 artifact images (three value prop cards) shifted down 38px within their column to share a horizontal midpoint with Sol02 images
- Common midpoint: y≈508 in Solutions-frame coordinates
- Sol01 column (252:1902) expanded from h=435 to h=480 to accommodate
- Sol02 images (Frame 15) and column unchanged — they were the taller column and set the target midpoint
- Do not bottom-align (breaks image-to-copy connection); do not top-align (makes layout look accidental). Middle-align is the intentional compositional choice.

### Outcome — pull quote treatment
- Left border rule added: 3px wide rectangle, color #B87350 (terracotta), height 34px (text h=26 + 4px top/bottom padding)
- Quote text shifted 15px right (to x=255) with width trimmed to 705px to maintain 960px right edge
- Quote remains Instrument Serif Italic, 16px, #767672 — border rule alone provides sufficient distinction
- Rationale: the border signals a considered design element without adding typographic weight that would compete with the section headings

### Final CS01 frame dimensions (updated 2026-04-01)
| Section | y-position | height |
|---|---|---|
| Nav | 0 | 72 |
| Hero | 73 | 530 |
| Challenge | 604 | 189 |
| Solutions | 794 | 605 |
| Outcome | 1400 | 315 |
| Footer | 1716 | 64 |
| **Frame total** | — | **1824** |

Note: "Next case study" link removed from CS01 and CS02; "View all case studies →" removed from CS03. These are replaced by the nav interaction (separate task).

---

## Spacing & Typography Normalization Pass (2026-04-01)

Audit confirmed all typography and layout values are consistent across CS01, CS02, CS03. No typographic changes were needed.

### Confirmed standard values

| Property | Standard value |
|---|---|
| Body copy | Instrument Sans Regular, 13.6px, lh 1.75 |
| Section labels | Instrument Sans Regular, 10.4px, uppercase, tracking 1.2px |
| Solution block titles | Instrument Serif Regular, 20px, lh 1.2 |
| Metrics / stat lines | Instrument Sans Regular, 13.6px, lh 1.65 |
| Pull quotes | Instrument Serif Italic, 16px, lh 1.6 |
| Hero title | Instrument Serif Regular, 48px, lh 1.15 |
| Hero subhead | Instrument Sans Regular, 15.6px, lh 1.6 |
| Hero coral metric | Removed from hero (2026-04-14) — impact lives in Solutions + Outcome, not the hero |
| Pull quote border | 3px wide, #b87350, 34px tall (CS01 + CS02 only; CS03 has no user quote) |
| Left content edge | x = 240px across all three frames |
| Section padding | 40px top + bottom |
| Section-to-section gap | 1px divider only (no margin) |

### One inconsistency normalized
- **CS03 Solutions:** gap between Sol02 row and Sol03 row was 40px; normalized to **32px** to match CS01/CS02 and the Sol01→Sol02 gap within the same frame. Changed `itemSpacing` on Frame 48 (261:3122) from 40 → 32.

### Methods & Disciplines vs. hero chip labels — all three confirmed matching
All three frames pass: bolded M&D skills exactly mirror the hero breadcrumb discipline tags.

### Chip label ordering (final)
Ordering is alphabetical by first word. Figma is authoritative. Hero breadcrumb and Methods & Disciplines bolded skills are internally consistent in all three frames:
- CS01: Product Positioning · Trust & Safety · UX Writing
- CS02: Behavioral Design · Engagement & Retention · Onboarding
- CS03: Content Strategy · Localization · Taxonomy Design

### Updated frame totals
| Frame | New height |
|---|---|
| CS01 | 1824px |
| CS02 | 2260px |
| CS03 | 3513px |

---

## Subdomain Structure
- casestudies.allenchong.studio
- selectedwork.allenchong.studio
- Note: moving to custom hosted site; subdomain structure
  may change

---

## Nav Interaction — Inline Slide-Reveal (2026-04-01)

### Behavior
Clicking "Case studies" in the nav expands it inline. Clicking again
(or anywhere outside) collapses it. Applies to all pages: Home, CS01,
CS02, CS03.

### States

**Collapsed (default):**
`Case studies  |  Highlights  |  About`

**Expanded:**
`Case studies:    01. Paradigm shift  |  02. Cold start  |  03. Naming architecture    Highlights    About`

"Highlights" and "About" remain in place at full opacity — they do not
move, hide, or change color when the Case studies section expands or
collapses. The expansion is inline and inserts only to the right of
"Case studies:".

The "Case studies" label shifts left; the CS list fades/slides in from
the right simultaneously. Duration: 200–250ms.

### Active state rules

| Page    | Collapsed nav              | Expanded nav                        |
|---------|----------------------------|-------------------------------------|
| Home    | All links in gray          | All links in gray                   |
| CS01    | "Case studies" in coral    | "01. Paradigm shift" in coral       |
| CS02    | "Case studies" in coral    | "02. Cold start" in coral           |
| CS03    | "Case studies" in coral    | "03. Naming architecture" in coral  |

"Allen Chong" wordmark: terracotta on Home (collapsed + expanded), gray #767672 on all CS pages (collapsed + expanded).

### Figma component structure

Component set: **Nav** (id: 275:62) — 8 variants, two properties:
- `State`: Collapsed | Expanded
- `Page`: Home | CS01 | CS02 | CS03

Each main page frame uses the `State=Collapsed` instance for its page.
Expanded-state companion strips (labeled) are positioned directly below
each page frame for visual reference.

### Responsive behavior — implemented (2026-04-06)

**Breakpoint: 820px** (calculated from rendered widths):
- 48px left padding + 69px wordmark + 32px min-gap + 614px expanded links + 48px right padding = 811px minimum → 820px breakpoint

**≥820px — inline slide-reveal** (as designed in Figma):
- `max-width: 0 → 520px` clip container + `opacity`/`translateX` fade-slide, 220ms ease
- Colon appended to "Case studies" label while expanded
- Click-outside or second click collapses
- Scroll does NOT dismiss — the inline reveal sits in the nav bar and doesn't obscure content
- `overflow: visible` on `.csItemsOuterExpanded` so hover underlines aren't clipped by the animation container (safe because items start at `opacity: 0`)

**<820px — hover dropdown:**
- Stacked vertical submenu, absolutely positioned below the nav bar
- Triggered by `onMouseEnter`/`onMouseLeave` on `.csMenu` (JS-controlled, not CSS `:hover`)
- An invisible `::after` bridge (30px tall) fills the gap between the button and the
  dropdown, so the cursor can move to the dropdown without triggering `onMouseLeave`
- Clicking "Case studies" while expanded closes it; button is blurred on close so
  CSS `:focus-within` doesn't keep the dropdown visible; 300ms `justClosedRef` guard
  prevents `onMouseEnter` from re-opening immediately
- Scroll dismisses the dropdown — menu obscures page content so scroll-to-close is expected UX

Note: The earlier recommendation of `NAV_EXPAND_MIN_WIDTH = 1024` with an anchor
fallback was superseded. The hover dropdown is a better UX than navigating away, and
820px is the true collision threshold.

### Mobile hamburger (≤600px) — planned, not yet implemented (2026-04-06)
Below 600px the regular links disappear entirely and a hamburger icon takes their place. Tapping it opens a dropdown that shows all destinations flat — no sub-tap for case studies:
- "CASE STUDIES" section label (gray, uppercase, 10.4px)
- 01. Paradigm shift (indented 12px, cs01Color)
- 02. Cold start (indented, cs02Color)
- 03. Naming architecture (indented, cs03Color)
- Highlights (top-level, highlightsColor)
- About (top-level, aboutColor)

Breakpoint rationale: 600px is well below the 820px hover-dropdown threshold, so there's no interaction conflict. At 600px, all three regular nav items still fit in the header without the hamburger; it's a safety net for narrower phones.

---

## CS01 Responsive Breakpoints (updated 2026-04-07)

Three-tier system. The guiding principle across all image elements: use `aspect-ratio` on the container and let width drive height, so size changes are always proportional — no hardcoded heights that cause sudden jumps.

### Breakpoint rationale

**1056px — solutions + outcome stack**
- Mathematical threshold: two 440px columns + 80px gap = 960px = full container width at this viewport (960px container + 2×48px padding = 1056px). Below this, columns overflow with no recovery.
- At this breakpoint: solutionsGrid and outcomeGrid switch to flex-direction: column. All absolutely-positioned sol text children reset to static/flow.
- Sol02 image composite: becomes `position: relative; width: 440px; max-width: 100%; aspect-ratio: 440/179`. Child image positions switch from fixed pixels to percentages (derived from Figma values) so the composite scales as a single unit at any width.
- Hero is unaffected; heroLeft has flex: 1 and the text area is still ~760px wide.

**820px — hero stacks**
- At 820px, heroLeft text area = 820 − 96 − 248 = 476px alongside the fixed 248px mockup. Cramped enough to warrant stacking.
- Hero goes to flex-direction: column, text first, mockup below.
- heroMockup gains `width: 100%; max-width: 248px` so it scales down proportionally on very narrow screens; `aspect-ratio: 248/450` (set in base style) governs height automatically.
- heroTitle scales from 48px → 36px.

**720px — mobile finishing**
- Container padding drops to 24px (handled in globals.css).
- heroTitle further reduced to 32px.
- Footer adjusts height.
- Sol02 images: no special rules — percentage-based composite from the 1056px breakpoint continues to apply and scales correctly at any width, including phone viewports.
- vpCard: no special rules — desktop padding (32px 24px) and font sizes (10.5px/8.5px) apply unchanged at all viewports.
- Outcome: no special rules at 720px — already stacked at 1056px.

### Blueprint principle
The home page uses flex: 1 throughout and scales naturally with no breakpoints. CS01's solutions section cannot do this — absolute positioning within fixed-width columns is inherently non-fluid. The breakpoints compensate by switching layout mode at the mathematical threshold, and `aspect-ratio` + percentage positions ensure each visual element then scales proportionally within its new layout context.

### Layout balance at intermediate widths
At ≤1056px stacked layout:
- `.vpCards` and `.sol02Images` both use `width: 440px; max-width: 100%; margin: auto` so they center in the full-width column and match each other.
- Outcome stacks at ≤1056px (same threshold as Solutions). `.outcomeRight` gets `border-top: 1px solid var(--color-line); padding-top: 32px; margin-top: 32px` as the separator rule between OUTCOME and METHODS & DISCIPLINES in the stacked state.
- Hero mockup: `margin-left: auto; margin-right: auto` added at ≤820px so it centers when stacked below the text column.

### VP card aspect ratio (implemented 2026-04-07)
- `.vpCard` has `aspect-ratio: 136 / 177` — derived from Figma: three cards in a 440px column = 136px each; vpCards occupies the bottom 177px of the 480px sol01Col.
- Existing `overflow: hidden` on `.vpCard` handles content that exceeds the locked height.
- This keeps the card shape consistent (no portrait/landscape/square shifting) as the container narrows.

### Sol02 percentage-based composite (implemented 2026-04-07)
At ≤1056px, child image positions are percentage-based, derived from Figma pixel values divided by the 440×179px composite dimensions:

| Image | left | top | width | height |
|---|---|---|---|---|
| `.sol02ImgRight` | 51.59% (227/440) | 0% | 48.41% (213/440) | 100% |
| `.sol02ImgTopLeft` | 0% | 12.29% (22/179) | 48.18% (212/440) | 34.08% (61/179) |
| `.sol02ImgBottomLeft` | 0% | 53.07% (95/179) | 48.41% (213/440) | 34.64% (62/179) |

When the +9% image resize is applied (next session), recalculate percentages from the updated pixel values and update `aspect-ratio: 440/179` to `aspect-ratio: 480/195`.

---

## Case Study Page Template (canonical — applies to CS01, CS02, CS03)

CS01 is the reference implementation. CS02 and CS03 follow this template exactly unless their Figma content requires a specific deviation.

### File structure

```
app/case-studies/[slug]/
  page.tsx            ← server component; exports metadata; renders all static sections
  page.module.css     ← all styles scoped to this page
  SolutionsSection.tsx ← 'use client' component; holds Lightbox state; imported by page.tsx
```

`page.tsx` must stay a pure server component so `export const metadata` works. Any interactive state (Lightbox, etc.) lives in `SolutionsSection.tsx`.

### Section sequence

```
<div navDivider />
<section hero> … </section>
<div divider />
<section challenge> … </section>
<div divider />
<SolutionsSection />   ← renders its own <div divider /> before the section
<div divider />
<section outcome> … </section>
<div navDivider />     ← reuses navDivider style above the footer
<footer> … </footer>
```

Dividers are `height: 1px; background: var(--color-line)`. No margin between sections — only the divider provides visual separation.

### Hero layout

- **Two columns:** `heroLeft` (`flex: 1`) + `heroMockup` (248px wide, `aspect-ratio: 248/450`, `flex-shrink: 0`)
- `heroInner` is `display: flex; align-items: center` at desktop
- DOM order: text column first, mockup second — this determines stacking order at mobile (text on top, mockup below)
- Mockup uses Next.js `<Image fill>` with `objectFit: contain; objectPosition: top center`
- `heroLeft` structure (top to bottom): `heroUpperGroup` (breadcrumb + title + subhead) → `heroRoleBlock` (ROLE label + first-person paragraph)
- Breadcrumb: terracotta italic index number + gray chip labels separated by middots
- Role block: a single `heroRoleGroup` with a ROLE label (10.4px uppercase, gray) and a first-person paragraph describing scope and ownership (13.6px sans, gray). No Impact label in the hero — impact lives in Solutions (per-intervention metrics) and Outcome (aggregated). This was a deliberate restructure: a cherry-picked metric in the hero is decontextualized and redundant.
- Pull quote: CS01 and CS02 only (CS03 has no user quote); uses `.pull-quote-rule` global class (3px wide, 34px tall, terracotta) + `pullQuoteText` (Instrument Serif Italic 16px, gray)

### Solutions layout

- Two columns (`sol01Col`, `sol02Col`), each `width: 440px; position: relative`
- `solutionsGrid`: `display: flex; gap: 80px; align-items: flex-start`
- Each column has its text children (`solNum`, `solTitle`, `solBody`, `solMetric`) absolutely positioned — top/left values taken from Figma pixel coordinates
- Image assets sit below text in each column, also absolutely positioned
- `solutionsGrid` gap: 32px between label and the two-column grid (`margin-top: 32px`)

### Outcome layout

- Two columns: `outcomeLeft` (`width: 440px; flex-shrink: 0`) + `outcomeRight` (`flex: 1`)
- `outcomeGrid`: `display: flex; gap: 80px; align-items: flex-start`
- Left: OUTCOME label + bullet list + pull quote (if applicable)
- Right: METHODS & DISCIPLINES label + `methodsGrid` (bold skills column | regular skills column)
- `methodsBold` bold skills must exactly match the hero chip labels, in alphabetical order — this is enforced by the Figma source

### Responsive rules (apply to every CS page)

All two-column grids stack at **1056px**. Hero stacks at **820px**. Mobile finishing at **720px**.

**≤1056px:**
- `solutionsGrid`: `flex-direction: column; gap: 56px`
- Solution columns: `position: static; width: 100%; height: auto`; all absolutely-positioned children reset to `position: static; width: 100%`; text children get appropriate `margin-top` values
- Image groups: `position: relative; width: 440px; max-width: 100%; margin: auto` — centers them in the full-width column
- `outcomeGrid`: `flex-direction: column; gap: 0`
- `outcomeLeft`, `outcomeRight`: `width: 100%`
- `outcomeRight` gets `border-top: 1px solid var(--color-line); padding-top: 32px; margin-top: 32px` — the rule separating OUTCOME from METHODS & DISCIPLINES in the stacked state

**≤820px:**
- `heroInner`: `flex-direction: column; align-items: flex-start; gap: 32px`
- `heroTitle`: `font-size: 36px; max-width: 100%`
- `heroMockup`: `width: 100%; max-width: 248px; margin-left: auto; margin-right: auto` — centers the mockup below the text

**≤720px:**
- `heroTitle`: `font-size: 32px`
- Footer: `height: auto; padding: 16px 0`; `footerLinks` gap: 16px
- No special rules for Outcome (already stacked at 1056px) or vpCards/sol02 images

### Image handling pattern

- All images use Next.js `<Image fill>` — the container must be `position: relative` with explicit dimensions or `aspect-ratio`
- Use `aspect-ratio` on containers (never fixed heights) so scaling is always proportional
- At desktop, absolutely-positioned image containers use pixel values from Figma
- At ≤1056px, switch to `position: relative` + `aspect-ratio` on the container; child positions become percentages derived from Figma pixel values ÷ container dimensions

### Nav active state

Each CS page's `getPageId()` returns `'cs01'` / `'cs02'` / `'cs03'`. This makes both "Case studies" (collapsed nav) and the matching numbered link (expanded nav) render in terracotta simultaneously. The wordmark is gray (`#767672`) on all CS pages.

### Footer

Identical across all CS pages: copyright left, LinkedIn / Substack / Contact right. Styles live in each page's `.module.css` (not a shared component) — copy from CS01.

### Image sizing and treatment — case study pages

**Landscape UI screenshots** (e.g. banner components, card artifacts)
- Width: 60% of their containing column, centered
- No background container, padding, or border-radius wrapper — images sit directly on the page
- No fixed height on any ancestor element; ensure no `overflow: hidden` in the ancestor chain that could clip the image

**Portrait phone mockups**
- Width: 40% of their containing column, centered
- Same no-container rule applies — no wrapper background or border

**Grid alignment**
- Solution grids with mixed content (text + image) must use `align-items: flex-start` to ensure images are top-aligned to their column, not vertically centered or stretched

**General principle**
- Images are supporting evidence, not hero moments. Size them so text and metrics read as the primary content.

---

## Highlights Page (implemented 2026-04-10)

### Layout & Grid
- **Widths:** Uses a 920px container (two 420px columns + 80px gap). Honors Figma v2 exactly rather than stretching to the standard 960px container used on CS pages.
- **Header:** Labels (e.g. GAMES) and Titles sit in a 496px header container positioned *above* the two-column grid, matching the Figma visual hierarchy.

### Typography & Hover
- **Titles:** Item titles explicitly set to 32px Instrument Serif (Regular) to distinguish them from the smaller 20px solution block titles on CS pages.
- **Arrows:** "Try them out" links use a targeted span selector (`.tryLink:hover span:not(.arrow)`) to underline the text while keeping the arrow clean during hover.

### Media & Performance
- **Aspect Ratios:** All embeds (Wistia and Instagram) use native aspect ratios without fixed container heights or `overflow: hidden` to prevent cropping.
- **Lazy Loading:** Wistia players are lazy-loaded via `next/dynamic` with `ssr: false`. Instagram script uses `strategy="lazyOnload"`.
- **SSR Strategy:** Page is a `'use client'` component. Metadata export removed.

---

## Session summary — 2026-04-13 (Architectural Refinements & SPA Handling)

### SPA Handling for External Embeds
- **Instagram Embeds:** In a Next.js SPA environment, the Instagram embed script (`embed.js`) does not automatically re-initialize when navigating between routes via client-side transitions.
- **Decision:** Use a `useEffect` hook on pages with embeds to manually trigger `window.instgrm.Embeds.process()` on mount. This ensures `blockquote.instagram-media` elements are transformed into iframes every time the component is mounted, regardless of previous script loading status.

### High-Precision Lightbox Rendering
- **Image Dimensions:** Using small integer proxies (e.g., `212 / 61`) for `aspect-ratio` and `calc()` width calculations in CSS can cause precision errors or invalid operations in modern browser engines when mixed with `vh` units.
- **Decision:** Always use high-precision pixel dimensions from the source file (e.g., 4680 / 1352) for inline `aspect-ratio` and `width` calculations. This ensures the browser's `calc()` engine handles scalar multiplication reliably and prevents container collapse or image clipping.

### Highlights Page Refinements
- **Sidebar Alignment:** The "TRY THEM OUT" link block in the Curriculum section is visually aligned to the **actual post edge** of the 0.8-scaled Instagram embed below it, using a `10%` left padding at desktop widths. This creates a vertical "visual line" that accounts for the scale transform.
- **Typographic Consistency:** Link vertical spacing in sidebars is driven entirely by `line-height: 1.75` (matching adjacent paragraph text), with individual link padding removed. This ensures the baseline rhythm is consistent across both columns of the grid.

### Footer Responsiveness Standardization
- **Decision:** Standardized the footer to maintain its horizontal `row` layout across all viewports on Highlights and About pages, removing the previous `720px` vertical stack. This aligns with the Home and Case Study footer pattern for site-wide consistency.

### Code Consistency Audit — About & Highlights pages (2026-04-14)
Gemini-written pages introduced several inconsistencies vs. Claude-written pages. All fixed:
- **Container:** Gemini used page-local `.aboutContainer` (944px) and `.highlightsContainer` (920px). Both replaced with global `.container` (960px max-width, 48px padding = 864px effective content area). Column widths were fixed-pixel and summed to ~920px — would overflow the 864px content area. Fixed by switching both columns to `flex: 1` on both About (careerLeft/careerRight) and Highlights (sectionLeft/sectionRight).
- **Hero label tokens:** Gemini used raw values (`font-size: 11.2px; letter-spacing: 0.15em; line-height: 1.22`). Replaced with CSS tokens (`var(--text-label)`, `var(--tracking-label)`, `line-height: 1`) to match CS pages.
- **Section padding:** About `.section` had `82.8px` (Figma artifact). Normalized to `80px`.

### Responsive Breakpoints — About & Highlights pages (2026-04-14)
About and Highlights have two distinct column types that warrant different stacking thresholds:
- **820px** — text + fixed-width image columns stack (e.g. About grid with portrait photo). Below 820px the text column would be too narrow beside a fixed image.
- **720px** — text + text columns stack (e.g. About careerGrid, Highlights sectionGrid). Flex columns remain readable further down before stacking.

The single `1056px` breakpoint Gemini used was too aggressive — columns had ample room but were collapsing early. The differentiated thresholds preserve two-column layout for as long as the content allows.

### CS02 Image Treatment (2026-04-14)
- New images exported from Figma with 1px baked-in border at native resolution — sharp at all sizes, no CSS border tricks needed.
- Sol01 and Sol02 images switched from `objectFit: 'cover'` to `objectFit: 'contain'` to prevent the baked-in border from being clipped by `overflow: hidden` on the container. Since image and container aspect ratios match, `contain` shows the full image with no letterbox.
- Hero image (`cs02-hero.png`) retained — the v2 version was visually worse.
- Sol03 phone mockup: `objectPosition` removed from lightbox img so it defaults to `center`, preventing extra bottom space caused by `objectPosition: 'top'` with `object-fit: contain`.

### CS02 Sol03 — Qualitative impact evidence (2026-04-14)
Sol03 ("Reducing member cold start") had no standalone quantitative metric. Both UXR quotes from the Outcome section relate specifically to Sol03's social scaffolding mechanic. Decision: display them in the `solMetrics` block with a "User feedback:" label line, followed by the two quoted lines. Uses the same `solMetric` CSS class as Sol01/Sol02 metrics — no new styling, honest about the evidence type.

### Lightbox Aesthetic (updated 2026-04-14)
- **Decision:** The `.imgCroppedContainer` in `Lightbox.module.css` has NO padding. An earlier version added `padding: 8px`, but this caused a geometry bug: `aspect-ratio` applies to the border box, so with padding the content box had a slightly different ratio than the image, producing ~9px of letterbox on the top and bottom (but not the sides) — visually asymmetric. Removing padding fixes this; the border hugs the image cleanly. `border-radius: 16px` + `overflow: hidden` still frames the image. Applies globally to all lightbox images.
- **Exception (2026-04-14):** The Case Study 03 "Omnipicker" wireframe (Sol 03) uses `lightboxPadding: 8` as an exception to ensure the annotated elements are properly framed within the white background container. This is passed as a prop and applied as an inline style.
