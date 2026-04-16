'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';

export default function AgenticWorkflow() {
  return (
    <>
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

          <Image
            src="/images/design-journal/agentic-workflow/slide-deck.png"
            alt=""
            width={4756}
            height={3332}
            className={styles.heroSlideImg}
            priority
          />
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
              much mileage that got me. I eventually upgraded to an actual website using
              a site builder, which was a step up from Google Slides. But that came with its
              own frustrations: limited control over design and layout, clunky tools, weird
              baked-in padding constraints I could never fully design around. I wanted the
              autonomy of a custom build—no more arbitrary limitations, just the freedom to
              execute my design vision exactly as intended.
            </p>
            <Image
              src="/images/design-journal/agentic-workflow/web-builder.png"
              alt=""
              width={2992}
              height={3332}
              className={styles.webBuilderImg}
            />
            <p style={{ marginTop: '24px' }}>
              This refresh was also the perfect opportunity to go deeper on something
              I&rsquo;d been wanting to explore: building a genuine agentic workflow.
              So I decided to rebuild the site from scratch in Next.js, despite having
              zero experience with coding. The learning curve was steep. I was
              internalizing React Server Components, debugging hydration errors
              I didn&rsquo;t fully understand yet, and making meaningful architectural
              decisions — all at the same time, all solo, with no one to gut-check
              anything with.
            </p>
            <div className={styles.challengeFinalRow}>
              <p className={styles.challengeFinalText}>
                The bigger problem surfaced quickly. I was burning through Claude&rsquo;s
                usage limits on messy, incomplete prompts. As anyone who knows me can
                tell you, I love to talk — and at first I approached this the same way,
                like a conversation: iterative, exploratory, thinking out loud. I quickly
                learned that doesn&rsquo;t scale here. Every vague or under-specified request
                cost me in tokens, in bad output, and in time cleaning up the mess. I may
                have vented to Claude once or twice. It was, after all, my
                only collaborator on this.
              </p>
              <div className={styles.challengeUsageLimitsWrap}>
                <Image
                  src="/images/design-journal/agentic-workflow/usage-limits.png"
                  alt=""
                  width={1672}
                  height={1280}
                  className={styles.usageLimitsImg}
                />
              </div>
            </div>
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
                    The site shipped (you're looking at it!). But the more useful outcome was the workflow I 
                    developed along the way.
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
              <Image
                src="/images/design-journal/agentic-workflow/claude-screenshot-sessions.png"
                alt=""
                width={916}
                height={3332}
                className={styles.sessionImg}
              />
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

    </>
  );
}
