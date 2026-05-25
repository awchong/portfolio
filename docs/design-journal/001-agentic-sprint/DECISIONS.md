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

**Ambient evidence images (no lightbox):**
- `sessionImg` — 85% width, centered, below the methods grid in `outcomeRight`. Shows Claude session history. Serves as ambient visual evidence of session volume; no specific UI text requiring legibility. No lightbox needed unless content is updated to show decision-level detail.

### Sizing

All image containers on this page use percentage-based or fluid widths — conformant with the site-wide rule that image containers must never use fixed pixel widths.

| Image | Current sizing | Notes |
|---|---|---|
| `heroSlideImg` | `width: 100%` | Full-width hero; correct |
| `featureDecisionsImg` | `width: 100%` of `featureImgCol` (flex: 1) | Fluid; correct |
| `sessionImg` | `width: 85%`, `margin: 0 auto` | Centered, slightly inset from column edge; correct |

No `clamp()` is used on any image container. The current sizing is acceptable as-is — all containers are fluid and proportional. Retrofit to `clamp()` only if a specific responsive issue is reported.

### Image files (current)

| Class | File | Dimensions |
|---|---|---|
| `heroSlideImg` | `slide-deck-short.png` | 4748×1224 |
| `featureDecisionsImg` | `2x_ROUNDED_decisions-markdown.png` | 5464×6352 (2x retina, rounded) |
| `sessionImg` | `CROPPED_claude-screenshot-sessions2.png` | 2676×4395 |

The `ROUNDED_decisions-markdown.png` (1x) and earlier session screenshot variants are in `public/images/design-journal/agentic-workflow/` but are not currently referenced in the page.

## Footer

This page has its own footer (identical in structure to the home page footer). It is rendered inside `page.tsx` after a `navDivider`, with:
- © 2026 Allen Chong
- LinkedIn and Substack as `<a>` links
- Contact wired to `openContactForm` from `../../components/ContactFormModal`

The footer CSS lives in `page.module.css` and mirrors the home page pattern (see comment `/* Same as home page footer */`).

## Voice & Tone
The system now prioritizes a first-person, candid, and personable voice.
- **Goal**: To document the experiment as a senior designer talking to peers, prioritizing technical rationale and "gritty" implementation details over corporate reporting.
