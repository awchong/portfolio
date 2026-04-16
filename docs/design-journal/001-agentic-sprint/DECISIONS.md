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

This page uses the same grid structure as the existing case studies (e.g. `cold-start`). Any agent working on this section must read `app/case-studies/cold-start/SolutionsSection.tsx` before making layout changes.

- **Outer wrapper**: `solutionsContent` — flex column, `gap: 32px`, `margin-top: 32px` from the section label
- **Each row**: `solutionsRow` — flex row, `gap: 80px`, two columns side by side
- **Columns**: `sol01Col` (left) and `sol02Col` (right) — each 440px wide
- **Rule**: two solutions per row maximum. A third solution gets its own `solutionsRow` below, occupying `sol01Col` only
- **Number labels**: each solution has a `solNum` span (`01`, `02`, `03`) above the title

Do not use `solutionsGrid`, inline `marginTop`, or any other ad-hoc structure. The pattern is established and must be followed exactly.

### Layout variant (canonical name: Split)

Both solution rows on this page are **Split** — two columns, two solutions side by side, text stacked above image/cards within each column. This is the canonical name for this pattern; use it in code comments and future documentation.

Row 1 (sols 01 + 02): text + VP cards (left), text + placeholder image (right).
Row 2 (sols 03 + 04): text + `decisionsImg` (left), text only (right). Two solutions with no shared images — Split remains the correct variant (not Stack, which is single-solution only).

Responsive behavior: at ≤1056px, both columns stack via `flex-direction: column`. Internal order within each column is preserved — text remains above image after reflow. Both columns become full-width.

## Image System

### Taxonomy

All images on this page are classified under the two-tier system from the site-wide DECISIONS.md. The tier determines whether a lightbox is required.

**Hero images (no lightbox):**
- `heroSlideImg` — full-width slide deck photo below hero text. Atmosphere and context; no legibility obligation.
- `webBuilderImg` — 75% width, in the Context section. Illustrates the old site builder; ambient, not evidence of a specific design decision.
- `usageLimitsImg` — 28% width in the Context section two-column row. Illustrates the usage limits problem; ambient illustration, not a UI artifact requiring inspection.

**Solution images (lightbox required):**
- `decisionsImg` — full width of its 440px column, in sol 03 ("Solving the context problem"). This is a screenshot of a DECISIONS.md file. It is evidence of the structured state file approach and contains UI text. **Lightbox required; currently not implemented.** Flag for a future session.

**Borderline — treat as hero for now:**
- `sessionImg` — full width of `outcomeRight` column, in the Takeaways section. Shows Claude session history. No specific UI text that requires legibility; serves as ambient visual evidence of the volume of sessions. No lightbox needed unless the content is updated to show decision-level detail.

### Sizing

All image containers on this page use percentage-based or fluid widths — conformant with the site-wide rule that image containers must never use fixed pixel widths.

| Image | Current sizing | Notes |
|---|---|---|
| `heroSlideImg` | `width: 100%` | Full-width hero; correct |
| `webBuilderImg` | `width: 75%` | 75% of content area, centered; correct |
| `usageLimitsImg` | `width: 100%` of a `28%` wrapper | Wrapper is percentage-based; correct |
| `decisionsImg` | `width: 100%` of its 440px column | Scales with column; correct |
| `sessionImg` | `width: 100%` of `outcomeRight` (flex: 1) | Fluid; correct |

No `clamp()` is used on any image container. This page was built concurrently with the `clamp()` standard being established. The current sizing is acceptable as-is — all containers are already fluid and proportional. Retrofit to `clamp()` only if a specific responsive issue is reported.

## Voice & Tone
The system now prioritizes a first-person, candid, and personable voice.
- **Goal**: To document the experiment as a senior designer talking to peers, prioritizing technical rationale and "gritty" implementation details over corporate reporting.
