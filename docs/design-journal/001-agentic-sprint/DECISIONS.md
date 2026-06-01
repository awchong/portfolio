# Architectural Decisions: Journal Entry / 001

## Template Forking
We are using the established `paradigm-shift` layout as our structural foundation but pivoting the identity entirely.
- **Identity Shift**: All "Case Study" references have been migrated to "Journal Entry / 001".
- **Labeling Evolution**:
  - `Role` → `Context`
  - `Methods` → `Tools & Logic`
  - `Case Study` → `Journal Entry`

## Component Strategy: Local Duplication
To maintain development speed and allow for independent UI evolution, we've duplicated components (like `SolutionsSection.tsx`) directly into the journal entry's own folder.
- **Why**: This prevents cross-contamination with established case studies while allowing the agentic workflow to evolve its own unique UI patterns without breaking the legacy system.
- **Current path**: `app/design-journal/agentic-workflow/`

## Solutions Section Layout Pattern

This page uses a three-row structure inside `solutionsContent`. Any agent working on this section must read `app/case-studies/cold-start/SolutionsSection.tsx` before making layout changes.

- **Outer wrapper**: `solutionsContent` — flex column, `gap: 32px`, `margin-top: 32px` from the section label
- **Rule**: two solutions per row maximum. A third or fourth solution gets its own row.
- **Number labels**: each solution has a `solNum` span (`01`, `02`, `03`, `04`) above the title. All four solutions are numbered.

Do not use `solutionsGrid`, inline `marginTop`, or any other ad-hoc structure. The pattern is established and must be followed exactly.

### Row structure (current)

**Row 1 — `solutionsRow`**: Sol 01 text (left, `sol01Col`) + `AgenticWorkflowDiagram` (right, `sol02Col`). The diagram carries no `solNum` — it is a visual, not a solution column.

**Row 2 — `splitRow` (canonical name: Split)**: Sol 02 "Writing prompts that did more work upfront" (left, `splitLeftCol`) + Sol 03 "Ditching Figma (mostly)" (right, `splitRightCol`). Both columns are text-only. Note: sol 03 appears in the right column of row 2 and sol 04 in the left column of row 3 — the numbers follow content order, not left-to-right visual order across rows.

**Row 3 — `featureRow` (canonical name: Feature)**: Sol 04 "Solving the context problem" (left, `featureTextCol`) + `featureDecisionsImg` (right, `featureImgCol`). No reflow at any viewport — this row is fixed two-column at all sizes.

Responsive behavior: `solutionsRow` and `splitRow` stack via `flex-direction: column` at ≤1056px. `featureRow` does not reflow. Internal order within each column is preserved after reflow.

### Pipeline diagram figure

The `AgenticWorkflowDiagram` SVG in `sol02Col` is wrapped in `<figure className={styles.diagramFigure}>`. This provides:
- `padding: 32px` uniform inset
- `background-color: rgba(184, 115, 80, 0.05)` — 5% terracotta warm field
- `border: 1px solid var(--color-black)`
- `border-radius: 24px`
- `width: 100%`; `margin: 0` (resets `<figure>` default margins)

Do not remove the `<figure>` wrapper or apply the background directly to the SVG component.

## Image System

### Taxonomy

All images on this page are classified under the two-tier system from the site-wide DECISIONS.md. The tier determines whether a lightbox is required.

**Hero images (no lightbox):**
- `heroSlideImg` — full-width slide deck photo below hero text. Atmosphere and context; no legibility obligation.

**Solution images (lightbox required):**
- `featureDecisionsImg` — full width of `featureImgCol` (right col of featureRow), in sol 04 ("Solving the context problem"). This is a VS Code screenshot of DECISIONS.md. It is evidence of the structured state file approach and contains UI text. **Lightbox required; currently not implemented.** Flag for a future session.

### Sizing

All image containers on this page use percentage-based or fluid widths — conformant with the site-wide rule that image containers must never use fixed pixel widths.

| Image | Current sizing | Notes |
|---|---|---|
| `heroSlideImg` | `width: 100%` | Full-width hero; correct |
| `featureDecisionsImg` | `width: 100%` of `featureImgCol` (flex: 1) | Fluid; correct |

No `clamp()` is used on any image container. The current sizing is acceptable as-is — all containers are fluid and proportional. Retrofit to `clamp()` only if a specific responsive issue is reported.

### Image files (current)

| Class | File | Dimensions |
|---|---|---|
| `heroSlideImg` | `slide-deck-short.png` | 4748×1224 |
| `featureDecisionsImg` | `2x_ROUNDED_decisions-markdown.png` | 5464×6352 (2x retina, rounded) |

The `ROUNDED_decisions-markdown.png` (1x) and session screenshot variants (`CROPPED_claude-screenshot-sessions*.png`) are in `public/images/design-journal/agentic-workflow/` but are not referenced in the page.

## Takeaways Section Layout

The Takeaways section (`section.outcome`) uses a two-column `outcomeGrid` (flex row, `gap: 80px`, `align-items: flex-start`).

### Left column (`outcomeLeft`, `width: 440px`)
Contains `outcomeResults` (flex column, `gap: 24px`):
- `sectionLabel` "Takeaways"
- `challengeBody` with the first three narrative paragraphs + "A few things I'm carrying into future work" heading + `outcomeList`

### Right column (`outcomeRight`, `flex: 1`)
Contains the continuation of the narrative aligned with the left column's body text, followed by Tools & Logic inline — no separate row or divider:
- `challengeBody` (`style={{ marginTop: 0 }}`) with "The next things I want to explore" heading + `outcomeList` + closing paragraph
- `sectionLabel` "Tools & Logic" (`style={{ marginTop: '32px' }}`)
- `methodsGrid` (`style={{ marginTop: '24px' }}`)

### Alignment rule
`outcomeRight` uses `padding-top: calc(var(--text-label) + 24px)` to align its first line of body text with the body text in `outcomeLeft` (accounting for the 10.4px label height + 24px flex gap in `outcomeResults`). At ≤1056px when the grid stacks, this is reset to `padding-top: 0; margin-top: 24px` in the responsive block.

### No session screenshot
The `sessionImg` class and `CROPPED_claude-screenshot-sessions2.png` were removed from this section. The right column is text and metadata only.

## Footer

This page has its own footer (identical in structure to the home page footer). It is rendered inside `page.tsx` after a `navDivider`, with:
- © 2026 Allen Chong
- LinkedIn and Substack as `<a>` links
- Contact wired to `openContactForm` from `../../components/ContactFormModal`

The footer CSS lives in `page.module.css` and mirrors the home page pattern (see comment `/* Same as home page footer */`).

## Left Rail — Parked (entire journal-specific chrome)

The journal originally had a dedicated left rail with three pieces: an entry-index sidebar (entries grouped by year), a fixed terracotta vertical spine at `left: 48px`, and a content column with `padding-left` compensation to make room for the sidebar. The goal is for the journal entry page to look like the case-studies pages, which have no per-section layout chrome — just the root nav and the content column.

All three pieces are now **parked** — kept in the codebase under `app/design-journal/_parked/`, not rendered. The journal layout is a passthrough.

### File locations (post-parking, established 2026-06-01)
- **Layout (active)**: [`app/design-journal/layout.tsx`](../../../app/design-journal/layout.tsx) is now `({ children }) => <>{children}</>`. No `.shell` wrapper, no terracotta spine, no `<main>` wrapper, no fade animation. Children render directly under the root layout — same shape as case-studies pages.
- **Parked entry-index component**: [`app/design-journal/_parked/JournalEntryIndex.tsx`](../../../app/design-journal/_parked/JournalEntryIndex.tsx). Self-contained client component (`'use client'`) that owns its own data (`ENTRIES`), `groupByYear` helper, and `usePathname` call. Not imported anywhere.
- **Parked CSS**: [`app/design-journal/_parked/journal-layout.module.css`](../../../app/design-journal/_parked/journal-layout.module.css). Contains all the original shell/spine/sidebar/content/fade classes (`.shell`, `.shell::before`, `.sidebar`, `.content`, `.contentInner`, `.entryItem`, etc.). Renamed from `layout.module.css` because it no longer drives the active layout.

The `_parked/` directory convention is documented site-wide in [the root `DECISIONS.md`](../../../DECISIONS.md) under "Source Tree Conventions — `_parked/` directories." Short version: `_`-prefixed folders are private to Next.js (never routed), the convention signals "intentionally non-active code, do not delete," and the contents are tree-shaken out of the production bundle.

### Revival recipe

To restore the original chrome and rail:

1. In `app/design-journal/layout.tsx`, add at the top:
   ```tsx
   'use client';
   import { usePathname } from 'next/navigation';
   import JournalEntryIndex from './_parked/JournalEntryIndex';
   import styles from './_parked/journal-layout.module.css';
   ```
2. Replace the passthrough body with the original structure:
   ```tsx
   const pathname = usePathname();
   return (
     <div className={styles.shell}>
       <JournalEntryIndex />
       <main className={styles.content}>
         <div className={styles.contentInner} key={pathname}>{children}</div>
       </main>
     </div>
   );
   ```

That single edit brings back the spine, content padding, fade animation, and entry index. No other files need to change.

## Voice & Tone
The system now prioritizes a first-person, candid, and personable voice.
- **Goal**: To document the experiment as a senior designer talking to peers, prioritizing technical rationale and "gritty" implementation details over corporate reporting.
