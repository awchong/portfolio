import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { SolutionsSection } from './SolutionsSection';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Paradigm Shift — Allen Chong',
  description:
    'Launching a new product category inside a private-messaging app. A case study in product positioning, trust & safety, and UX writing.',
};

export default function ParadigmShift() {
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
                  Messenger Communities required users to fundamentally rethink what Messenger is
                  for — and content design had to lead the way.
                </p>
              </div>
              <div className={styles.heroRoleBlock}>
                <div className={styles.heroRoleGroup}>
                  <span className={styles.heroRoleLabel}>ROLE</span>
                  <p className={styles.heroRoleText}>
                    I was the sole content designer on this zero-to-one launch, a company-level
                    priority. Working across Product, Design, Research, and Legal, I owned the
                    product identity, the new user experience, and the trust and safety content
                    strategy from the ground up.
                  </p>
                </div>
                <p className={styles.heroMetric}>~23% lift in community creation post-launch</p>
              </div>
            </div>

            <div className={styles.heroMockup}>
              <Image
                src="/images/cs01-hero.png"
                alt="Messenger Communities channel list showing College of Arts &amp; Sciences"
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
            Messenger has always meant private communication between friends and family — a mental
            model reinforced by the rollout of end-to-end encryption in 2023–24. Messenger
            Communities introduced something categorically different: semi-public, interest-based
            groups that anyone could discover and join. The product didn&rsquo;t need better copy.
            It needed a new mental model.
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
      <div className={styles.navDivider} />

      <ContactForm />

      <div className={styles.navDivider} />

      {/* ── Footer ── */}
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
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

