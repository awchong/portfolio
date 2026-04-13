'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';
import { openContactForm } from '../../components/ContactFormModal';

export default function NamingArchitecture() {
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
                    <span className={styles.heroIndex}>03</span>
                    <span className={styles.heroChips}>
                      Content Strategy · Localization · Taxonomy Design
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    Unifying naming architecture across Messenger and Instagram
                  </h1>
                </div>
                <p className={styles.heroSubhead}>
                  Reconciling two years of fragmented, internally confusing naming across IG and
                  Messenger into a unified, localization-ready taxonomy built to scale across
                  Meta&rsquo;s community ecosystem.
                </p>
              </div>

              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Role</span>
                  <p className={styles.heroRoleText}>Staff Content Designer, Messenger</p>
                </div>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Impact</span>
                  <p className={styles.heroRoleText}>Successful cross-app reconciliation</p>
                </div>
              </div>
            </div>

            <div className={styles.heroMockup}>
              <Image
                src="/images/cs03-hero.png"
                alt="Naming architecture unification project"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
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
            As Messenger and Instagram Community products evolved in parallel, so did their
            vocabularies. By 2024, we had &ldquo;Channels,&rdquo; &ldquo;Chats,&rdquo;
            &ldquo;Groups,&rdquo; and &ldquo;Communities&rdquo; all performing similar functions
            but using different names — sometimes even within the same app. This wasn&rsquo;t just
            a branding issue; it was causing user confusion, localization bloat, and making
            cross-app feature parity impossible to explain.
          </p>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Solutions ── */}
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
                  <li>
                    Established a single source of truth for community terminology across Meta
                  </li>
                  <li>
                    Reduced localization overhead by consolidating redundant strings across apps
                  </li>
                  <li>
                    Simplified the &ldquo;Omnipicker&rdquo; experience, making it easier for users
                    to find and join communities
                  </li>
                  <li>Aligned Messenger and IG roadmaps around a unified content system</li>
                </ul>
              </div>
              <div className={styles.pullQuote}>
                <div className="pull-quote-rule" />
                <p className={styles.pullQuoteText}>
                  &ldquo;This is the first time both teams are actually speaking the same language.
                  It makes everything from design to dev so much faster.&rdquo;
                </p>
              </div>
            </div>

            <div className={styles.outcomeRight}>
              <span className={styles.sectionLabel}>Methods &amp; Disciplines</span>
              <div className={styles.methodsGrid}>
                <div className={styles.methodsBold}>
                  <p>Content strategy</p>
                  <p>Localization</p>
                  <p>Taxonomy design</p>
                </div>
                <div className={styles.methodsRegular}>
                  <p>Cross-app alignment</p>
                  <p>Information architecture</p>
                  <p>Stakeholder management</p>
                  <p>String consolidation</p>
                  <p>Terminology management</p>
                  <p>UX writing systems</p>
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
