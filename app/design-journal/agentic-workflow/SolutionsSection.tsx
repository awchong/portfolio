'use client';

import { useState } from 'react';
import { Lightbox } from '@/app/components/Lightbox';
import lbStyles from '@/app/components/Lightbox.module.css';
import styles from './page.module.css';

// ─── Data ────────────────────────────────────────────────────

type VpCardItem = {
  kind: 'vpcard';
  caption: string;
  title: string;
  body: string;
};

type ActiveItem = VpCardItem;

const VP_CARDS: VpCardItem[] = [
  {
    kind: 'vpcard',
    caption: 'Strategy & Execution Routing',
    title: 'Building the pipeline',
    body: 'I landed on a two-model setup: Claude for strategy and design; Gemini CLI for the grunt work in between; then back to Claude for pixel polish and review.',
  },
  {
    kind: 'vpcard',
    caption: 'Session Continuity',
    title: 'Solving the context problem',
    body: 'I moved to structured state files—BRIEF.md, DECISIONS.md, STATUS.md. Feeding those in meant I wasn\'t starting from zero every session.',
  },
  {
    kind: 'vpcard',
    caption: 'Advanced Prompting',
    title: 'Writing prompts that did more work',
    body: 'Less describing what I wanted, more specifying the full picture: context, constraints, what done looked like, and what to avoid.',
  },
];

// ─── Component ───────────────────────────────────────────────

export function SolutionsSection() {
  const [active, setActive] = useState<ActiveItem | null>(null);

  return (
    <>
      <section className={styles.solutions}>
        <div className="container">
          <span className={styles.sectionLabel}>My Approach</span>

          <div className={styles.solutionsContent}>

            {/* Row 1: Building the pipeline | Writing prompts that did more work upfront */}
            <div className={styles.solutionsRow}>

              {/* Col 1 — Building the pipeline */}
              <div className={styles.sol01Col}>
                <span className={styles.solNum}>01</span>
                <p className={styles.solTitle}>Building the pipeline</p>
                <div className={styles.solBody}>
                  <p>
                    The real shift was stopping to think about the workflow itself instead of
                    just grinding through the build. I landed on a two-model setup: Claude
                    for strategy, planning, and canonical code and design decisions; Gemini CLI
                    for the grunt work in between; then back to Claude for pixel polish,
                    code review, and anything touching deployment.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    Once I stopped treating every task the same way and started routing
                    intentionally, the quality and consistency of the output improved noticeably.
                  </p>
                </div>
                <div className={styles.vpCards}>
                  {VP_CARDS.map((card) => (
                    <div
                      key={card.caption}
                      className={styles.vpCard}
                      onClick={() => setActive(card)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setActive(card)}
                      aria-label={`Enlarge: ${card.caption}`}
                    >
                      <p className={styles.vpCardTitle}>{card.title}</p>
                      <p className={styles.vpCardBody}>{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 2 — Writing prompts that did more work upfront */}
              <div className={styles.sol02Col}>
                <span className={styles.solNum}>02</span>
                <p className={styles.solTitle}>Writing prompts that did more work upfront</p>
                <div className={styles.solBody}>
                  <p>
                    Once I had the pipeline and the state files in place, the last piece was
                    tightening how I actually wrote prompts. Less describing what I wanted,
                    more specifying the full picture: the context, the constraints, what done
                    looked like, and what to avoid.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    Anticipating problems before they happened instead of reacting to bad
                    output after the fact.
                  </p>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-line)', borderRadius: '8px', height: '179px', width: '440px' }}>
                  <span style={{ color: 'var(--color-gray)', fontSize: '12px' }}>Prompt Engineering Visualization</span>
                </div>
              </div>

            </div>

            {/* Row 2: Solving the context problem */}
            <div className={styles.solutionsRow}>

              {/* Col 1 — Solving the context problem */}
              <div className={styles.sol01Col}>
                <span className={styles.solNum}>03</span>
                <p className={styles.solTitle}>Solving the context problem</p>
                <div className={styles.solBody}>
                  <p>
                    Early on I was re-explaining the same decisions over and over at the start
                    of every session. It was a real time sink. I asked Claude how to handle
                    it, and the answer was simple: structured state files.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    BRIEF.md for the project framing, DECISIONS.md for anything already locked
                    in, STATUS.md for where things stood. Feeding those in at the start of each
                    session meant I wasn&rsquo;t starting from zero every time. It felt like
                    overhead to set up. It wasn&rsquo;t.
                  </p>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-line)', borderRadius: '8px', height: '179px', width: '440px' }}>
                  <span style={{ color: 'var(--color-gray)', fontSize: '12px' }}>Workflow Visualization Placeholder</span>
                </div>
              </div>

              {/* Col 2 — Ditching Figma (mostly) */}
              <div className={styles.sol02Col}>
                <span className={styles.solNum}>04</span>
                <p className={styles.solTitle}>Ditching Figma (mostly)</p>
                <div className={styles.solBody}>
                  <p>
                    I started this project the way I&rsquo;d always started projects: design in
                    Figma first, then hand off to code. I even set up the Figma MCP early on,
                    using Claude to help me build out layouts and pages there before touching
                    the codebase.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    It didn&rsquo;t last long. Once I saw how quickly we could spin up hi-fidelity
                    previews directly in code, going back to Figma started to feel like an
                    unnecessary detour. I was essentially doing the work twice. So I mostly
                    stopped &mdash; and the build got faster almost immediately.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    In hindsight, I think I was unconsciously mapping an old mental model onto
                    a new kind of workflow. The design-then-handoff sequence made sense when two
                    different people were doing those two things. When it&rsquo;s just you and
                    an AI that can do both, that boundary dissolves pretty quickly.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <Lightbox caption={active.caption} onClose={() => setActive(null)}>
          {active.kind === 'vpcard' && (
            <div className={lbStyles.vpCardEnlarged}>
              <p className={lbStyles.vpCardEnlargedTitle}>{active.title}</p>
              <p className={lbStyles.vpCardEnlargedBody}>{active.body}</p>
            </div>
          )}
        </Lightbox>
      )}
    </>
  );
}
