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
    caption: 'Step 1: I mapped the DAG for the site architecture.',
    title: 'Visualizing the logic',
    body: 'I had to stop writing prompts and start drawing boxes. Breaking the site into a DAG made every task predictable.',
  },
  {
    kind: 'vpcard',
    caption: 'Step 2: I built a reflection loop for my components.',
    title: 'Self-correcting code',
    body: 'I set up a feedback loop where my agent would review its own UI code, catching those annoying hydration errors before they hit my screen.',
  },
  {
    kind: 'vpcard',
    caption: 'Step 3: I delegated the research to a sub-agent.',
    title: 'Context-aware research',
    body: 'Instead of searching docs manually, I gave my agent the tools to find what I needed, when I needed it.',
  },
];

// ─── Component ───────────────────────────────────────────────

export function SolutionsSection() {
  const [active, setActive] = useState<ActiveItem | null>(null);

  return (
    <>
      <section className={styles.solutions}>
        <div className="container">
          <span className={styles.sectionLabel}>Solutions</span>

          <div className={styles.solutionsGrid}>

            {/* Sol 01 — Architectural Framework */}
            <div className={styles.sol01Col}>
              <span className={styles.solNum}>01</span>
              <p className={styles.solTitle}>Building my own orchestration framework</p>
              <p className={styles.solBody}>
                I had to move beyond simple linear chains. I built a custom orchestration layer 
                using state machines and directed graphs. This allowed me to handle branching 
                logic and retry attempts without losing my mind. It was about making the 
                process observable so I could see exactly where it was failing.
              </p>
              <p className={styles.solMetric}>
                I cut my manual intervention by about 40% once this was live.
              </p>
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

            {/* Sol 02 — Requirement Engineering */}
            <div className={styles.sol02Col}>
              <span className={styles.solNum}>02</span>
              <p className={styles.solTitle}>Treating prompts like software specs</p>
              <p className={styles.solBody}>
                I learned that reliability in agentic workflows isn&rsquo;t about &ldquo;vibing.&rdquo; 
                It&rsquo;s about rigorous requirement engineering. I started treating my prompts 
                like software specs—defining strict schemas for inputs and outputs and mapping 
                out edge cases before I ever hit &ldquo;run.&rdquo;
              </p>
              <div style={{ marginTop: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-line)', borderRadius: '8px', height: '179px', width: '440px' }}>
                <span style={{ color: 'var(--color-gray)', fontSize: '12px' }}>Solution 02 Image Placeholder</span>
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
