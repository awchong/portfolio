This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## System Architecture & Workflow
This site was developed using an agentic pipeline to ensure design fidelity and system integrity without manual styling.

- **Orchestration**: Managed via a combination of Claude Code and Gemini CLI.
- **Figma Integration**: Leveraged the Model Context Protocol (MCP) via `figma-developer-mcp` to pull live design specs directly from Figma API nodes (e.g., node-id=0-1) into React components.
- **State Management**: Used a "Source of Truth" methodology with local markdown files (`DECISIONS.md`, `STATUS.md`, `BRIEF.md`) to maintain design system constraints and project state across isolated agent sessions.
- **Technical Resolution**: Managed manual debugging of Next.js 15+ Server/Client component boundaries, specifically for third-party media embeds (Wistia) and metadata routing conflicts.

## Workflow Reflections
Optimizations for future agentic builds based on this project's execution:

### Tiered Agent Logic
- **Phase 1 (Strategy)**: Use Claude Code for project planning, architectural definitions, and creating "Source of Truth" artifacts.
- **Phase 2 (Execution)**: Use Gemini CLI for high-volume execution ("grunt work") and auditing code against Figma API data via MCP.
- **Phase 3 (Governance)**: Re-engage Claude Code for final system-wide checks, dependency auditing, and conflict resolution before merging to production.

### Context Continuity
Maintaining a persistent `STATUS.md` with a `BACKLOG` section is essential for preventing model drift when switching between different CLI tools or session windows.

### Direct-to-Code Shift
Evaluate bypassing Figma for component-level design in future iterations. Designing natively in the browser via AI agents eliminates "translation loss" between static mockups and functional code, allowing for immediate iteration on responsive behavior and interactive states.
