'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';
import { openContactForm } from '../../components/ContactFormModal';

export default function AgenticWorkflow() {
  return (
    <>
      <div className={styles.navDivider} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroUpperGroup}>
                <div className={styles.heroTitleGroup}>
                  <div className={styles.heroBreadcrumb}>
                    <span className={styles.heroIndex}>Journal Entry / 001</span>
                    <span className={styles.heroChips}>
                      Agentic Orchestration · Multi-model Workflows · Requirement Engineering
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    Agentic Workflow
                  </h1>
                </div>
                <p className={styles.heroSubhead}>
                  I needed to move fast without breaking things. This is the documentation of how 
                  I moved from simple prompting to a production-ready agentic architecture 
                  under an impossible deadline.
                </p>
              </div>

              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Context</span>
                  <p className={styles.heroRoleText}>
                    I led the architectural design and implementation of this system, but really, 
                    this was a survival strategy. I had to define the orchestration patterns 
                    and state management that allowed me to automate the most grueling parts of 
                    this build.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.heroMockup}>
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--color-line)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px'
              }}>
                <span style={{ color: 'var(--color-gray)', fontSize: '12px' }}>Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Challenge ── */}
      <section className={styles.challenge}>
        <div className="container">
          <span className={styles.sectionLabel}>Challenge</span>
          <div className={styles.challengeBody}>
            <p>
              I hit a wall ten days before my launch date. I had been trying to build my portfolio 
              using a restricted, template-based site builder, but it felt like wearing a 
              straitjacket. I needed more control, more precision, and a bespoke Next.js stack 
              was the only way forward. The problem? I had never built a production Next.js 
              app, and I had exactly 240 hours to go from zero to live.
            </p>
            <p style={{ marginTop: '24px' }}>
              The friction was immediate. Mid-sprint, I hit Claude&rsquo;s usage limits, leaving 
              me stranded in the middle of a complex layout refactor. The exhaustion of the 
              learning curve was real—debugging hydration errors at 3 AM while trying to 
              internalize React Server Components. I realized very quickly that I couldn&rsquo;t 
              just &ldquo;vibe code&rdquo; my way through this. To survive the timeline, I had 
              to stop asking for code and start architecting a multi-model pipeline that 
              could handle the heavy lifting while I focused on the design.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Solutions ── */}
      <SolutionsSection />

      <div className={styles.divider} />

      {/* ── Outcome & Learnings ── */}
      <section className={styles.outcome}>
        <div className="container">
          <div className={styles.outcomeGrid}>

            <div className={styles.outcomeLeft}>
              <div className={styles.outcomeResults}>
                <span className={styles.sectionLabel}>Outcome &amp; Learnings</span>
                <ul className={styles.outcomeList}>
                  <li>I successfully stood up a multi-agent orchestration layer that actually works.</li>
                  <li>I cut manual intervention for complex reasoning tasks by about 40%.</li>
                  <li>I learned that requirement engineering is the secret sauce for LLM reliability.</li>
                  <li>Structured state management saved me from a dozen potential 3 AM meltdowns.</li>
                </ul>
              </div>
              <div className={styles.pullQuote}>
                <div className="pull-quote-rule" />
                <p className={styles.pullQuoteText}>
                  &ldquo;Moving from prompts to agentic workflows changed everything. It 
                  wasn&rsquo;t just about speed; it was about building something I could 
                  actually trust.&rdquo;
                </p>
              </div>
            </div>

            <div className={styles.outcomeRight}>
              <span className={styles.sectionLabel}>Tools &amp; Logic</span>
              <div className={styles.methodsGrid}>
                <div className={styles.methodsBold}>
                  <p>Agentic Orchestration</p>
                  <p>Multi-model Workflows</p>
                  <p>Requirement Engineering</p>
                </div>
                <div className={styles.methodsRegular}>
                  <p>State Machine Design</p>
                  <p>Prompt Engineering</p>
                  <p>System Architecture</p>
                  <p>Error Recovery Patterns</p>
                  <p>Performance Optimization</p>
                  <p>LLM Observability</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className={styles.navDivider} />
      <footer>
        <div className={`container ${styles.footer}`}>
          <span>© 2026 Allen Chong</span>
          <div className={styles.footerLinks}>
            <a
              href="https://linkedin.com/in/allenchong"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://allenchong.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Substack
            </a>
            <button onClick={openContactForm} className={styles.footerLinkButton}>Contact</button>
          </div>
        </div>
      </footer>
    </>
  );
}
