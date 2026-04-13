'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';
import { openContactForm } from '../../components/ContactFormModal';

export default function ParadigmShift() {
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
                    <span className={styles.heroIndex}>01</span>
                    <span className={styles.heroChips}>
                      Product Positioning · Trust &amp; Safety · UX Writing
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    Launching a new product category inside a private-messaging app
                  </h1>
                </div>
                <p className={styles.heroSubhead}>
                  Owning the product positioning for a zero-to-one launch that required users to
                  rethink what Messenger is. Building the trust architecture that made
                  discoverability feel safe.
                </p>
              </div>

              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Role</span>
                  <p className={styles.heroRoleText}>Staff Content Designer, Messenger</p>
                </div>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>Impact</span>
                  <p className={styles.heroRoleText}>~23% lift in community creation within 6 weeks</p>
                </div>
              </div>
            </div>

            <div className={styles.heroMockup}>
              <Image
                src="/images/cs01-hero.png"
                alt="Messenger Communities discoverability and onboarding flow"
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
            Messenger has always meant private communication between friends and family — a mental
            model reinforced by the rollout of end-to-end encryption in 2023–24. Messenger
            Communities introduced something categorically different: semi-public, interest-based
            groups that anyone could discover and join. The product didn&rsquo;t need better copy.
            It needed a new mental model.
          </p>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Solutions ── */}
      <section className={styles.solutions}>
        <div className="container">
          <span className={styles.sectionLabel}>Solutions</span>

          <div className={styles.solutionsGrid}>

            {/* Sol 01 — Reframing the value proposition */}
            <div className={styles.sol01Col}>
              <span className={styles.solNum}>01</span>
              <p className={styles.solTitle}>Reframing the value proposition</p>
              <p className={styles.solBody}>
                The initial value props were PM-drafted and growth-oriented — accurate internally,
                but not built around how a real user evaluates something new. I rewrote them around
                user-centered needs surfaced by research: building community without the overhead
                of a Facebook group, the appeal of scale, and the need to feel in control.
              </p>
              <p className={styles.solMetric}>
                ~23% lift in new community creation within 6 weeks of NUX launch
              </p>
              <div className={styles.vpCards}>
                <div className={styles.vpCard}>
                  <p className={styles.vpCardTitle}>Build a chat-based community on Messenger</p>
                  <p className={styles.vpCardBody}>
                    Plan events, find support and share information with your community, all in one
                    place. No Facebook group needed.
                  </p>
                </div>
                <div className={styles.vpCard}>
                  <p className={styles.vpCardTitle}>
                    Bring up to 5,000 real-world connections online
                  </p>
                  <p className={styles.vpCardBody}>
                    Create a community space on Messenger for any group or organization and give it
                    room to grow.
                  </p>
                </div>
                <div className={styles.vpCard}>
                  <p className={styles.vpCardTitle}>
                    Use simple tools to help your community thrive
                  </p>
                  <p className={styles.vpCardBody}>
                    Unlock admin tools to help you safely manage your community so you can focus on
                    building relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Sol 02 — Building a trust and safety content system */}
            <div className={styles.sol02Col}>
              <span className={styles.solNum}>02</span>
              <p className={styles.solTitle}>Building a trust and safety content system</p>
              <p className={styles.solBody}>
                Discoverability only works if users feel safe. I shaped the &ldquo;Request to
                Join&rdquo; feature concept and its content experience — giving admins meaningful
                control over membership while clearly communicating the public nature of communities
                to new members. I partnered with Legal to translate moderation requirements into
                plain, reassuring language.
              </p>
              <p className={styles.sol02MetricA}>
                ~14% increase in new community creation the month following launch
              </p>
              <p className={styles.sol02MetricB}>
                ~39% of new communities opted into request-to-join
              </p>
              <div className={styles.sol02Images}>
                <div className={styles.sol02ImgRight}>
                  <Image
                    src="/images/cs01-sol02-right.png"
                    alt="About this community panel showing visibility and safety disclosures"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                  />
                </div>
                <div className={styles.sol02ImgTopLeft}>
                  <Image
                    src="/images/cs01-sol02-top.png"
                    alt="Require approval to join toggle in off state"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className={styles.sol02ImgBottomLeft}>
                  <Image
                    src="/images/cs01-sol02-bottom.png"
                    alt="Require approval to join toggle in on state"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Outcome ── */}
      <section className={styles.outcome}>
        <div className="container">
          <div className={styles.outcomeGrid}>

            <div className={styles.outcomeLeft}>
              <div className={styles.outcomeResults}>
                <span className={styles.sectionLabel}>Outcome</span>
                <ul className={styles.outcomeList}>
                  <li>~23% lift in community creation within 6 weeks of NUX launch</li>
                  <li>
                    ~14% increase in new community creation the month following trust &amp; safety
                    launch
                  </li>
                  <li>~39% of new communities opted into request-to-join</li>
                  <li>Majority of surveyed users reported improved clarity</li>
                </ul>
              </div>
              <div className={styles.pullQuote}>
                <div className="pull-quote-rule" />
                <p className={styles.pullQuoteText}>
                  &ldquo;This makes sense. It makes sense you can search for the things you&rsquo;re
                  interested in.&rdquo;
                </p>
              </div>
            </div>

            <div className={styles.outcomeRight}>
              <span className={styles.sectionLabel}>Methods &amp; Disciplines</span>
              <div className={styles.methodsGrid}>
                <div className={styles.methodsBold}>
                  <p>Product positioning</p>
                  <p>Trust &amp; safety</p>
                  <p>UX writing</p>
                </div>
                <div className={styles.methodsRegular}>
                  <p>A/B testing</p>
                  <p>Content strategy</p>
                  <p>Cross-functional collaboration</p>
                  <p>Instructional design</p>
                  <p>Mental model design</p>
                  <p>Onboarding</p>
                  <p>User research</p>
                  <p>Value proposition design</p>
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
