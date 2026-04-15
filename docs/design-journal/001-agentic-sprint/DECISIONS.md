# Architectural Decisions: Journal Entry / 001

## Template Forking
We are using the established `paradigm-shift` layout as our structural foundation but pivoting the identity entirely.
- **Identity Shift**: All "Case Study" references have been migrated to "Journal Entry / 001".
- **Labeling Evolution**:
  - `Role` → `Context`
  - `Methods` → `Tools & Logic`
  - `Case Study` → `Journal Entry`

## Component Strategy: Local Duplication
To maintain development speed and allow for independent UI evolution, we've duplicated components (like `SolutionsSection.tsx`) directly into the `app/case-studies/agentic-workflow/` folder.
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

## Voice & Tone
The system now prioritizes a first-person, candid, and personable voice.
- **Goal**: To document the experiment as a senior designer talking to peers, prioritizing technical rationale and "gritty" implementation details over corporate reporting.
