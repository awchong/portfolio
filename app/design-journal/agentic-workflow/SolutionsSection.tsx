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

          <div className={styles.solutionsGrid}>

            {/* Column 1 */}
            <div className={styles.sol01Col} style={{ gap: '80px' }}>
              
              {/* Block 01 — Building the pipeline */}
              <div className={styles.solBlock}>
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

              {/* Block 03 — Writing prompts that did more work upfront */}
              <div className={styles.solBlock}>
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

            {/* Column 2 */}
            <div className={styles.sol02Col}>
              
              {/* Block 02 — Solving the context problem */}
              <div className={styles.solBlock}>
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
