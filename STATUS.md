# Project Status

Last updated: 2026-04-14

---

## Session summary — 2026-04-14 (Terminology Unification & Content Polish)

**Site-wide terminology alignment completed and hero copy refined.**

- **Terminology Alignment:** Replaced all instances of "IG" with "Instagram" and "MSGR" with "Messenger" across Case Study 03, the Home page, and project documentation for professional consistency.
- **Content Polish:** Refined hero titles on About and Highlights pages (removed trailing periods and replaced em dash with a comma) to match the editorial tone of the case study pages.
- **Lightbox Exception:** Implemented a specific 8px padding exception for the Case Study 03 "Omnipicker" wireframe (Sol 03) in lightbox mode. This ensures the annotated wireframe remains readable and properly framed, overriding the global "no-padding" lightbox rule for this specific asset.
- **CI/CD:** Verified all changes with a clean production build (`npm run build`) and merged the `dev` branch into `main`.

---

## Session summary — 2026-04-10 (About me page build)

**About me page built and refined. Navigation and layout fully aligned with Figma.**

- **Files created:** \`site/app/about/page.tsx\`, \`site/app/about/page.module.css\`
- **Design Alignment:** Strictly followed the 80px/72px typography, 960px container (944px content), and section-header-above-grid structure.
- **Image Scaling:** Precisely adjusted the bio image width to 365px to align its bottom edge with the adjacent biography text.
- **Content:** Added "Gemini CLI" to the AI tools & workflows section.

---

## Session summary — 2026-04-10 (Highlights page build & layout refinement)

**Highlights page built in code and refined for layout precision.**

- **Files created:** \`site/app/highlights/page.tsx\`, \`site/app/highlights/page.module.css\`
- **Design Alignment:** Refactored to match Figma's 920px grid (420px columns), 72px/32px serif titles, and section-header-above-grid structure.
- **Media Fixes:** Scaled down oversized video embeds (Commas to 208px width, Growth to 253px) to fit 450px height intent. Applied 0.8 scale to Instagram embed.
- **UX Polish:** Fixed link hover states to exclude arrows from underlines; arrows now follow text with a consistent 8px gap.

---

## Session summary — 2026-04-07 (Nav fixes + lightbox polish)

**Three nav bugs fixed, two lightbox fixes. All committed separately.**

### Nav — active color correction
- **Problem:** \`csToggleColor\` used \`expanded || isCS\`, making "Case studies" turn terracotta the moment the dropdown opened on any page — including Home, Highlights, and About where the user isn't on a CS page.
- **Fix:** Changed to \`isCS\` only. "Case studies" is now terracotta only when the user is actually on a CS page — matching the Figma active state spec.

### Nav — scroll dismisses dropdown (<820px only)
- **Problem:** The narrow-viewport dropdown had no scroll-to-dismiss behavior. Once opened, it persisted until click-outside or second click.
- **Fix:** Added a \`useEffect\` scroll listener that calls \`setExpanded(false)\` — but only when \`window.innerWidth < 820\`. The inline slide-reveal (≥820px) does not dismiss on scroll; it sits in the nav bar and doesn't obscure content.

### Nav — hover underline clipping in expanded inline reveal
- **Problem:** \`.csItemsOuter\` uses \`overflow: hidden\` for the max-width clip animation. With \`line-height: 1\`, the link box height equals the font size (~12.8px), and the \`text-underline-offset: 2px\` underline falls just outside that box — clipped by \`overflow: hidden\`.
- **Fix:** Added \`overflow: visible\` to \`.csItemsOuterExpanded\`. Safe because \`.csItemsInner\` starts at \`opacity: 0\` during the open animation, masking any overflow while the container width transitions from 0.

### Lightbox — sol02 images now show page-matched crop
- **Problem:** The lightbox was showing sol02 images uncropped (raw \`<img>\` tag with \`max-width\`/\`max-height\`), ignoring the \`objectFit: cover\` + \`objectPosition\` crop applied on the page.
- **Fix:** Replaced with \`.imgCroppedContainer\` — a div with inline \`aspect-ratio\` and \`width: min(80vw, calc(75vh × ratio))\` that exactly matches the page crop. Each image now carries \`cropWidth\`, \`cropHeight\`, and \`objectPosition\` props.

### Lightbox — VP cards now preserve portrait aspect ratio
- **Problem:** \`.vpCardEnlarged\` had no \`aspect-ratio\`, so height was content-driven. At 320px wide with 16px/13.6px font sizes, content height was shorter than portrait requires, making the card appear landscape.
- **Fix:** Added \`aspect-ratio: 136/177\` and \`overflow: hidden\` to \`.vpCardEnlarged\` — same portrait shape as the page card, scaled up 2.35×.

### Commits
- \`84cb48c\` — Fix nav active color, scroll dismiss, and hover underline clipping
- \`1b0e4c0\` — Fix lightbox image cropping and VP card portrait aspect ratio

---

## Session summary — 2026-04-07 (CS01 hero centering + outcome stacking fix)

**Two responsive layout fixes on CS01. No new features — CSS corrections only.**

### Hero mockup — center alignment when stacked
- **Problem:** At ≤820px, \`heroInner\` switches to \`flex-direction: column; align-items: flex-start\`, which left-aligned the mockup when stacked below the text.
- **Fix:** Added \`margin-left: auto; margin-right: auto\` to \`.heroMockup\` in the ≤820px breakpoint. Consistent with the \`margin: auto\` centering pattern used for \`.vpCards\` and \`.sol02Images\` in the ≤1056px block.

### Outcome/Methods & Disciplines — stacking at 1056px
- **Problem:** At intermediate widths (720–1056px), the Outcome two-column layout preserved both columns with a reduced gap — causing OUTCOMES and METHODS & DISCIPLINES to get visibly smooshed rather than stacking.
- **Fix:** Moved outcome stacking from ≤720px to ≤1056px — same threshold as Solutions. Both \`outcomeLeft\` and \`outcomeRight\` now go \`width: 100%\` when stacked. A \`border-top: 1px solid var(--color-line)\` + \`padding-top: 32px; margin-top: 32px\` on \`.outcomeRight\` serves as the section separator rule between OUTCOME and METHODS & DISCIPLINES in the stacked state. Removed the now-redundant ≤720px outcome stacking rules.

---

## Session summary — 2026-04-07 (CS01 responsive image sizing — aspect-ratio overhaul)

**Root cause identified and fixed for all three image resizing issues on CS01. No new features — all CSS corrections.**

### Hero mockup (cs01-hero.png)
- **Problem:** Container used fixed \`height: 450px\` at desktop, then jumped abruptly to \`height: 320px\` at the 720px breakpoint. With \`objectFit: contain\`, the rendered image visibly shrank by ~29% at that exact breakpoint.
- **Fix:** Replaced \`height: 450px\` with \`aspect-ratio: 248 / 450\` on \`.heroMockup\`. Added \`width: 100%; max-width: 248px\` at the 820px breakpoint so the container scales proportionally as the viewport narrows. Removed the \`height: 320px\` mobile override entirely — \`aspect-ratio\` now governs height at all viewport sizes.

### Sol01 — VP cards (aspect ratio + padding/font stability)
- **Problem 1:** No \`aspect-ratio\` on \`.vpCard\` — height was content-driven. As the viewport narrowed, text wrapped more and the cards became taller (portrait); wider viewports made them shorter (landscape/square). Shape was highly variable.
- **Fix 1:** Added \`aspect-ratio: 136 / 177\` to \`.vpCard\`. Derived from the Figma layout: three cards in a 440px column = 136px each; vpCards section occupies the bottom 177px of the 480px sol01Col. Existing \`overflow: hidden\` handles any content that exceeds the locked height.
- **Problem 2:** The 720px breakpoint overrode \`.vpCard\` padding to \`20px 16px\` and font sizes to \`9px\`/\`7px\`, causing visible text and spacing jumps at that exact breakpoint.
- **Fix 2:** Removed all 720px overrides for \`.vpCard\`, \`.vpCardTitle\`, and \`.vpCardBody\`. Desktop values (\`32px 24px\` padding, \`10.5px\`/\`8.5px\` text) now apply at every viewport size — consistent with how the hero mockup behaves.
- **Note:** This also resolves the pending "VP card font sizes — complete the mobile override" task from the prior session's queue. Rather than updating the overrides to 9.5px/7.5px, the overrides were removed entirely. Base sizes now apply universally.

### Sol02 — three-image composite (proportional scaling, no stacking)
- **Problem:** At desktop (>1056px), the composite used absolute pixel positions (\`left: 227px\`, \`width: 213px\`, etc.) within a fixed 440×179px container. At the 1056px breakpoint, the container became \`position: relative\` but the children kept pixel positions — causing overflow on viewports narrower than ~488px (iPhone SE and most phones). A prior band-aid added a flex-column stack at 720px, which introduced its own layout weirdness and was directionally wrong.
- **Fix:** Converted the approach to match the hero image pattern — use \`aspect-ratio\` on the container and relative (percentage) positions on the children:
  - At the 1056px breakpoint: changed \`.sol02Images\` from \`height: 179px\` to \`aspect-ratio: 440 / 179\`. Changed all three child image positions from fixed pixels to percentages derived from Figma values (\`left: 51.59%\`, \`width: 48.41%\`, \`top: 12.29%\`, etc.).
  - Removed all 720px stacking rules for sol02 images (\`display: flex\`, \`flex-direction: column\`, per-image overrides).
- **Result:** The 3-image composite now scales as a single proportional unit at every viewport width, with no stacking, no breakpoint jumps. Identical behavior to the hero image.

---

## Session summary — 2026-04-06 (CS01 continued polish — lightbox, layout balance, partial font/image pass)

**Lightbox interaction added. Layout balance resolved. Four tasks started; one partially complete.**

### Lightbox (all 6 interactive images)
- Refactored solutions section: extracted \`SolutionsSection.tsx\` as a \`'use client'\` component so \`page.tsx\` stays a server component and keeps \`export const metadata\`.
- Added \`Lightbox.tsx\` + \`Lightbox.module.css\` as generic reusable overlay: fixed backdrop, Escape key dismiss, body scroll lock, click-outside-to-close.
- All 3 VP cards (Sol01) and all 3 sol02 images are now tappable — open the Lightbox with a caption. VP cards render an enlarged HTML card; images render a full \`<img>\` tag.
- Discriminated union type (\`VpCardItem | ImageItem\`) drives the conditional Lightbox render.

### Layout balance fixes
- **VP card equal height:** Removed \`align-items: flex-start\` from \`.vpCards\` so all three cards match the tallest sibling's height (flex default \`stretch\`).
- **Consistent image widths at stacked breakpoints:** At ≤1056px (stacked layout), \`.vpCards\` and \`.sol02Images\` both use \`width: 440px; max-width: 100%; margin: auto\` so they center-align and match each other's width.
- **Outcome two-column preservation:** Moved Outcome stacking from the ≤1056px breakpoint to ≤720px only. At intermediate widths, Outcome stays two-column with \`gap: 40px\` and \`methodsBold/methodsRegular: white-space: normal\`.

### Partial font size pass (one of four pending tasks)
- \`vpCardTitle\`: 10px → **10.5px** (base only; ≤720px mobile override still 9px — not yet updated)
- \`vpCardBody\`: 8px → **8.5px** (base only; ≤720px mobile override still 7px — not yet updated)

---

## Current phase

All core pages (Home, CS01, CS02, CS03, Highlights, About) are complete in code.

---

## Pages

| Page | Figma | Code |
|------|-------|------|
| Home | ✅ Complete | ✅ Complete (2026-04-06) |
| CS01 — Launching a new product category | ✅ Complete | ✅ Complete + polished (2026-04-06) |
| CS02 — Solving a two-sided cold start problem | ✅ Complete | ✅ Complete |
| CS03 — Unifying naming architecture | ✅ Complete | ✅ Complete |
| Highlights | ✅ Complete | ✅ Complete (2026-04-10) |
| About | ✅ Complete | ✅ Complete (2026-04-10) |
| **Nav** | ✅ Complete | ✅ Complete (2026-04-06) |

---

## Nav — complete (2026-04-01)

- **Component set:** Nav (Figma id: 275:62, v2 page id: 105:199)
- **8 variants:** State (Collapsed | Expanded) × Page (Home | CS01 | CS02 | CS03)
- All 4 main page frames use their Collapsed instance as the live nav
- Expanded-state companion strips (labeled "Expanded state — [Page]") sit
  16px below each main page frame for side-by-side visual reference
- Full spec in DECISIONS.md → "Nav Interaction — Inline Slide-Reveal"

---

## Architecture decisions (finalized)

- Case Studies index page scrapped. Home page case studies section serves as
  the index. Nav "Case studies" link anchors there. Cards link directly to
  individual pages.
- "Next case study" links removed from CS01 and CS02; "View all case studies →"
  removed from CS03. Cross-case-study navigation is handled entirely by the
  nav interaction.
- Individual case study page template: Hero / Challenge / Solutions / Outcome.
  My Role absorbed into Hero as a single-line role descriptor beneath skill chips.

---

## Pending / deprioritized

- CS01 polish (image resize +9%, hanging indent, mobile hamburger nav) — deprioritized
- Hover state implementation (terracotta title shift on case study rows and
  Highlights cards) — decision made in Figma, build deprioritized
- Deployment and hosting setup — future phase
- Case study 03, Sol 03: Align top of image with the paragraph in the left text column, not the number or title of the section

---

## Open questions

- Will subdomain structure carry over to the custom-hosted site, or consolidate
  to a single domain with routes?
- Does the Highlights page need its own case-study-style writeups, or stay
  lightweight as currently designed?

---

## BACKLOG

- [ ] In Highlights and About pages, fix bottom nav responsiveness when viewport narrows; make it match nav bar from Home and Case study pages
- [ ] Wire up "Contact Me" link using Resend + Next.js Server Actions: Implement a minimalist slide-over form that matches the 440px grid and serif typography. Ensure the personal email is never exposed in the client-side code.
- [ ] Repo Sanitization & Architecture Audit: Move inline components to /components, implement PascalCase naming, and remove build debris (.bak/.tmp files) to make the repo recruiter-ready.
- [ ] Resend Integration: Connect the contact form to the Server Action.
