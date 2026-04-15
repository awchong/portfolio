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
                    Bootstrapping an agentic workflow
                  </h1>
                </div>
                <p className={styles.heroSubhead}>
                  How I rebuilt my portfolio from scratch using a native agentic workflow — and 
                  what I learned doing it.
                </p>
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

      {/* ── Context ── */}
      <section className={styles.challenge}>
        <div className="container">
          <span className={styles.sectionLabel}>Context</span>
          <div className={styles.challengeBody}>
            <p>
              My portfolio has seen a few iterations over the years. The first version was 
              literally a slide deck — looking back, I&rsquo;m still a little shocked by how 
              much mileage that got me. I eventually upgraded to an actual website built 
              on a site builder, which was a step up from Google Slides but came with its 
              own frustrations: limited control over design and layout, clunky tools, weird 
              baked-in padding issues I could never fully design around. I did my best to 
              work within those constraints, but I eventually hit a ceiling. I wanted to 
              build something from the ground up — greater autonomy, no arbitrary 
              limitations, a real artifact of myself that I could actually execute a vision on.
            </p>
            <p style={{ marginTop: '24px' }}>
              This refresh was also the perfect opportunity to go deeper on something 
              I&rsquo;d been wanting to explore: building a genuine agentic workflow. 
              So I decided to rebuild the site from scratch in Next.js, despite having 
              zero experience shipping a production Next.js app. The learning curve was 
              steep. I was internalizing React Server Components, debugging hydration 
              errors I didn&rsquo;t fully understand yet, and making meaningful architectural 
              decisions — all at the same time, all solo, with no one to gut-check 
              anything with.
            </p>
            <p style={{ marginTop: '24px' }}>
              The bigger problem surfaced quickly. I was burning through Claude&rsquo;s 
              usage limits on messy, incomplete prompts. As anyone who knows me can 
              tell you, I love to talk — and at first I approached this the same way, 
              like a conversation: iterative, exploratory, thinking out loud. I quickly 
              learned that doesn&rsquo;t scale here. Every vague or under-specified request 
              cost me in tokens, in bad output, and in time cleaning up the mess. I may 
              have vented to Claude once or twice. It was, after all, my 
              only collaborator on this.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── My Approach ── */}
      <SolutionsSection />

      <div className={styles.divider} />

      {/* ── Takeaways ── */}
      <section className={styles.outcome}>
        <div className="container">
          <div className={styles.outcomeGrid}>

            <div className={styles.outcomeLeft}>
              <div className={styles.outcomeResults}>
                <span className={styles.sectionLabel}>Takeaways</span>
                <div className={styles.challengeBody}>
                  <p>
                    The site shipped. But the more useful outcome was the workflow I 
                    didn&rsquo;t have at the start.
                  </p>
                  <p style={{ marginTop: '24px' }}>
                    The clearest sign it was working: I stopped hitting usage limits. Not 
                    because I was doing less, but because I was doing it more efficiently. 
                    Better prompts meant fewer round trips, less cleanup, and less wasted 
                    context. The pipeline started moving faster the more disciplined I got 
                    about it.
                  </p>
                  <p style={{ marginTop: '24px' }}>
                    Getting to that pipeline wasn&rsquo;t clean though. Early on I was using 
                    Claude and Gemini interchangeably, which created a Frankenstein situation 
                    fast — inconsistent code, layout decisions that contradicted each other, 
                    no clear source of truth. I had to stop, assess what each model was 
                    actually good at, and redesign the process from scratch. That&rsquo;s when 
                    the routing clicked into place: Claude for strategy and decisions, 
                    Gemini CLI for execution, Claude again for review and polish.
                  </p>
                  <p style={{ marginTop: '24px' }}>
                    A few things I&rsquo;m carrying into future work:
                  </p>
                  <ul className={styles.outcomeList} style={{ marginTop: '16px' }}>
                    <li>Requirement engineering is the unglamorous thing that makes everything else work better</li>
                    <li>Structured state files aren&rsquo;t documentation overhead, they&rsquo;re how you maintain continuity across sessions</li>
                    <li>A multi-model pipeline only scales if the handoffs are intentional, not ad hoc</li>
                  </ul>
                  <p style={{ marginTop: '24px' }}>
                    The next things I want to explore:
                  </p>
                  <ul className={styles.outcomeList} style={{ marginTop: '16px' }}>
                    <li>Writing a Claude skill that automates the handoff between Claude and Gemini CLI entirely, so the pipeline runs without me manually switching between them</li>
                    <li>Using Claude Opus for strategy and speccing now that I have more headroom — having offloaded the grunt work to Gemini CLI (which has much higher usage limits even at free tier), I want to see if Opus produces better specs and higher quality exemplars upstream, and whether that has meaningful downstream effects on Gemini&rsquo;s output quality</li>
                  </ul>
                  <p style={{ marginTop: '24px' }}>
                    This project gave me enough firsthand understanding of where the friction 
                    lives to actually spec both of those out properly.
                  </p>
                </div>
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
