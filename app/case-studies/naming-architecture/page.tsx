'use client';

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
                  Reconciling two years of fractured, redundant naming across Instagram and
                  Messenger into a single unified taxonomy — localization-ready and built to
                  scale across Meta&rsquo;s community ecosystem.
                </p>
              </div>

              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Role</span>
                  <p className={styles.heroRoleText}>
                    I represented Messenger&rsquo;s community messaging pillar as part of a 
                    cross-functional v-team of content designers spanning Instagram and Messenger. 
                    While the taxonomy work was collaborative, I owned the naming architecture for 
                    my pillar, drove alignment across teams, brokered agreement on shared vocabulary, 
                    and led the linguistic audit for my pillar, one of the building blocks of 
                    the unified system.                  </p>
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
            Across Instagram and Messenger, the same feature had accumulated two years of naming debt
            from independent teams building in parallel. Instagram called it a &ldquo;social channel.&rdquo;
            Messenger called it a &ldquo;community chat.&rdquo; The same feature, a space where anyone could
            join and message over shared interests, had two different names depending on which app you opened.
          </p>
          <p className={styles.challengeBodySecond}>
            The problem ran deeper than branding. &ldquo;Broadcast channel&rdquo; had been introduced to
            distinguish one-way from two-way communication, but with &ldquo;social channel&rdquo; largely
            deprecated from the UI, the modifier had become redundant. It localized poorly, confused younger
            audiences, and created internal misalignment across Product, Engineering, and Legal. Six competing
            terms, two apps, one product vision, and no shared vocabulary to hold it together.
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
                  <li>Taxonomy reduced from 6 terms to 4</li>
                  <li>
                    First terminology alignment between Instagram and Messenger for community messaging
                    products
                  </li>
                  <li>&ldquo;Broadcast&rdquo; and &ldquo;social&rdquo; modifiers eliminated</li>                  <li>
                    Channel and chat established as core primitives; community as meta-primitive
                  </li>
                  <li>
                    Engineering, Product, and Legal provided a locked term database, reducing naming
                    negotiation cycles
                  </li>
                  <li>Naming system designed to scale into new verticals without future renames</li>
                </ul>
              </div>
            </div>

            <div className={styles.outcomeRight}>
              <span className={styles.sectionLabel}>Methods &amp; Disciplines</span>
              <div className={styles.methodsGrid}>
                <div className={styles.methodsBold}>
                  <p>Content Strategy</p>
                  <p>Localization</p>
                  <p>Taxonomy Design</p>
                </div>
                <div className={styles.methodsRegular}>
                  <p>Content Design</p>
                  <p>Cross-app Design</p>
                  <p>Cross-functional Collaboration</p>
                  <p>Information Architecture</p>
                  <p>Nomenclature</p>
                  <p>Stakeholder Alignment</p>
                  <p>Systems Thinking</p>
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
