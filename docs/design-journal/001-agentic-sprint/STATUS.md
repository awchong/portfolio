# Project Status: Journal Entry / 001

## COMPLETED
- [x] **Path Migration**: Directory structure created at `/app/design-journal/agentic-workflow/`.
- [x] **UI Scaffolding**: Layout, CSS modules, and component skeletons established.
- [x] **Structural & Tonal Pivot**: Labels (`Context`, `Tools & Logic`, `Journal Entry`) and first-person voice implemented.
- [x] **Baseline Documentation**: `BRIEF.md`, `DECISIONS.md`, and `STATUS.md` initialized.
- [x] **Context Section Simplified**: Removed `webBuilderImg` (web-builder-landscape.png) and the `challengeFinalRow` (usage-limits.png + two-column layout). Context section is now plain paragraphs. Associated CSS classes deleted: `webBuilderImg`, `challengeFinalRow`, `challengeFinalText`, `challengeUsageLimitsWrap`, `usageLimitsImg`.
- [x] **Hero/Context Divider Removed**: The `divider` element between the Hero and Context sections has been removed.
- [x] **Solutions Renumbered**: Sol 03 "Ditching Figma (mostly)" now carries `solNum 03`. "Solving the context problem" renumbered to sol 04. All four solutions are now explicitly numbered.
- [x] **Pipeline Diagram Wrapped**: `AgenticWorkflowDiagram` in `sol02Col` wrapped in `<figure class="diagramFigure">` with warm terracotta background, border, and 24px radius.
- [x] **Images Updated**: `featureDecisionsImg` → `2x_ROUNDED_decisions-markdown.png` (2x retina, rounded corners; 5464×6352).
- [x] **Session Screenshot Removed**: `sessionImg` and `.sessionImg` CSS deleted entirely. The Takeaways right column is text and metadata only.
- [x] **Footer Added**: © 2026 Allen Chong with LinkedIn, Substack, and Contact links. Wired to `openContactForm`.
- [x] **Takeaways Section Restructured**: Narrative split across two columns. Left: label + first 3 paragraphs + "A few things" list. Right: "The next things" list + closing paragraph + Tools & Logic label + methods grid. Right column body text aligned with left via `padding-top: calc(var(--text-label) + 24px)`. No separate Tools & Logic row; no image in the section.
- [x] **Left Rail Parked (entire journal chrome)**: The journal entry page should look like the case-studies pages — no per-section left-side chrome. All three pieces of the original journal-specific layout are now parked under `app/design-journal/_parked/`:
  - Entry-index sidebar: [JournalEntryIndex.tsx](../../../app/design-journal/_parked/JournalEntryIndex.tsx). Not imported anywhere.
  - Layout CSS (shell, spine, sidebar, content, fade): [journal-layout.module.css](../../../app/design-journal/_parked/journal-layout.module.css). Renamed from `layout.module.css` because it no longer drives the active layout.
  - [`app/design-journal/layout.tsx`](../../../app/design-journal/layout.tsx) is now a passthrough: `({ children }) => <>{children}</>`. Children render directly under the root layout, same as case-studies pages.
  - The `_parked/` directory follows the project-wide convention documented in the root [DECISIONS.md](../../../DECISIONS.md) ("Source Tree Conventions — `_parked/` directories"). Next.js treats `_`-prefixed folders as private (non-routed), and the unused code is tree-shaken from the production bundle.

## CURRENT STATE OF THE LEFT RAIL
There is no left rail. The journal entry page now renders with the same left-side structure as the case-studies pages — just the root nav at the top and the centered content column. No sidebar, no terracotta spine, no padding compensation.

## NEXT STEPS
- [ ] **Decide what (if anything) goes on the left side**: With the journal-specific chrome parked, the page mirrors case-studies. Decide whether to design a new left-side element or keep parity with case-studies permanently. If permanent, the parked files (`JournalEntryIndex.tsx`, the layout-module CSS classes) can be deleted in a future cleanup.
- [ ] **Lightbox for `featureDecisionsImg`**: Sol 04 image (`2x_ROUNDED_decisions-markdown.png`) contains legible UI text and requires a lightbox. No lightbox mechanism currently exists on this page. Flag for a future session.
- [ ] **Validation**: Full audit of the `agentic-workflow` page across all viewport sizes.
