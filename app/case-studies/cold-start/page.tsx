import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';

export const metadata: Metadata = {
  title: 'Cold Start — Allen Chong',
  description:
    'Using targeted UXR to diagnose why new communities stagnated after launch. Crafting behavioral nudges and social scaffolding to drive first-week engagement for both admins and members.',
};

export default function ColdStart() {
  return (
    <>
      {/* Nav divider */}
      <div className={styles.navDivider} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroUpperGroup}>
                <div className={styles.heroTitleGroup}>
                  <div className={styles.heroBreadcrumb}>
                    <span className={styles.heroIndex}>02</span>
                    <span className={styles.heroChips}>
                      Behavioral Design · Engagement &amp; Retention · Onboarding
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    Solving a two-sided cold start problem, from day one
                  </h1>
                </div>
                <p className={styles.heroSubhead}>
                  New communities were being created but not surviving. The problem wasn&rsquo;t
                  growth: it was activation.
                </p>
              </div>
              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>ROLE</span>
                  <p className={styles.heroRoleText}>
                    I was the sole content designer on this effort. I partnered with a UXR team to
                    run a targeted study where participants created and joined communities for a
                    month, then came in for in-person interviews and iterative prototype testing. I
                    shaped both the research synthesis and the solutions we tested, working across
                    Product and Design to ship them.
                  </p>
                </div>
                <p className={styles.heroMetric}>
                  Average member count doubled within the first week
                </p>
              </div>
            </div>

            <div className={styles.heroMockup}>
              <Image
                src="/images/cs02-hero.png"
                alt="Messenger Communities home screen showing member activity"
                fill
                style={{ objectFit: 'contain', objectPosition: 'top center' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Challenge ── */}
      <section className={styles.challenge}>
        <div className="container">
          <span className={styles.sectionLabel}>Challenge</span>
          <p className={styles.challengeBody}>
            Community creation was growing steadily, but newly formed groups stagnated almost
            immediately. Message sends per user stayed flat, and a significant number of members
            disengaged within two weeks of joining. The culprit was a classic cold start problem on
            both sides. Admins arrived at a blank community with no idea how to spark conversation.
            Members joined an empty space with no social cues to orient them.
          </p>
        </div>
      </section>

      <div className={styles.divider} />

      <SolutionsSection />

      <div className={styles.divider} />

      {/* ── Outcome ── */}
      <section className={styles.outcome}>
        <div className="container">
          <div className={styles.outcomeGrid}>

            <div className={styles.outcomeLeft}>
              <div className={styles.outcomeResults}>
                <span className={styles.sectionLabel}>Outcome</span>
                <ul className={styles.outcomeList}>
                  <li>Average member count: 2.7 → 5.3</li>
                  <li>Per-user message sends: 1.9 → 5.1 in first week</li>
                  <li>Active participation stabilized at ~28%</li>
                  <li>
                    Welcome banner component organically adopted across Messenger; integrated into
                    design system
                  </li>
                </ul>
              </div>
              <div className={styles.pullQuotes}>
                <div className={styles.pullQuote}>
                  <div className="pull-quote-rule" />
                  <p className={styles.pullQuoteText}>
                    &ldquo;If this wasn&rsquo;t here, I wouldn&rsquo;t know what we&rsquo;re
                    supposed to do.&rdquo;
                  </p>
                </div>
                <div className={styles.pullQuote}>
                  <div className="pull-quote-rule" />
                  <p className={styles.pullQuoteText}>
                    &ldquo;If I know one of my friends is in the chat, that would make me want to
                    join more.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.outcomeRight}>
              <span className={styles.sectionLabel}>Methods &amp; Disciplines</span>
              <div className={styles.methodsGrid}>
                <div className={styles.methodsBold}>
                  <p>Behavioral Design</p>
                  <p>Engagement &amp; Retention</p>
                  <p>Onboarding</p>
                </div>
                <div className={styles.methodsRegular}>
                  <p>Cross-functional Collaboration</p>
                  <p>Design Systems</p>
                  <p>Progressive Disclosure</p>
                  <p>Rapid Prototyping</p>
                  <p>Scaffolding</p>
                  <p>User Research</p>
                  <p>UX Writing</p>
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
            <a href="https://linkedin.com/in/allenchong" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://allenchong.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Substack
            </a>
            <a href="mailto:hello@allenchong.studio">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
