'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { openContactForm } from './components/ContactFormModal';

export default function Home() {
  return (
    <>
      {/* Nav divider — rendered here so it sits outside the container */}
      <div className={styles.navDivider} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Image
            src="/images/avatar.jpg"
            alt="Allen Chong"
            width={96}
            height={96}
            className={styles.avatar}
            priority
          />
          <div className={styles.headline}>
            <span className={styles.headlineLine}>Instructive</span>
            <span className={styles.headlineLine}>&amp; impactful,</span>
            <span className={styles.headlineAccent}>by design</span>
          </div>
          <p className={styles.heroBody}>
            I&rsquo;ve designed products at scale for <strong>Meta</strong>. I&rsquo;ve created educational
            experiences for learners of all ages. Whether I&rsquo;m in big tech or a small classroom,
            my mission is to equip people with the knowledge and skills to understand the world
            and act with autonomy.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className={styles.work}>
        <div className="container">
          <div className={styles.sectionDivider} />
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Case Studies</span>
            <span className={styles.sectionCount}>03</span>
          </div>
          <div className={styles.sectionDivider} />

          {/* CS 01 */}
          <div className={styles.csRow}>
            <div className={styles.csLeft}>
              <div className={styles.csMeta}>
                <span className={styles.csIndex}>01</span>
                <span className={styles.csChips}>Product Positioning · Trust &amp; Safety · UX Writing</span>
              </div>
              <p className={styles.csTitle}>
                Launching a new product category inside a private-messaging app
              </p>
              <p className={styles.csDesc}>
                Owning the product positioning for a zero-to-one launch that required users to
                rethink what Messenger is. Building the trust architecture that made
                discoverability feel safe.
              </p>
              <Link href="/case-studies/paradigm-shift" className="cta-link">
                <span>See more</span> <span className={styles.arrow}>→</span>
              </Link>
            </div>
            <div className={styles.csImage}>
              <Image
                src="/images/home-case-study-1.png"
                alt=""
                fill
                sizes="148px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className={styles.csImageGradient} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.sectionDivider} />

          {/* CS 02 */}
          <div className={styles.csRow}>
            <div className={styles.csLeft}>
              <div className={styles.csMeta}>
                <span className={styles.csIndex}>02</span>
                <span className={styles.csChips}>Behavioral Design · Engagement &amp; Retention · Onboarding</span>
              </div>
              <p className={styles.csTitle}>
                Solving a two-sided cold start problem, from day one
              </p>
              <p className={styles.csDesc}>
                Using targeted UXR to diagnose why new communities stagnated after launch.
                Crafting behavioral nudges and social scaffolding to drive first-week engagement
                for both admins and members.
              </p>
              <Link href="/case-studies/cold-start" className="cta-link">
                <span>See more</span> <span className={styles.arrow}>→</span>
              </Link>
            </div>
            <div className={styles.csImage}>
              <Image
                src="/images/home-case-study-2.png"
                alt=""
                fill
                sizes="148px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className={styles.csImageGradient} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.sectionDivider} />

          {/* CS 03 */}
          <div className={styles.csRow}>
            <div className={styles.csLeft}>
              <div className={styles.csMeta}>
                <span className={styles.csIndex}>03</span>
                <span className={styles.csChips}>Content Strategy · Localization · Taxonomy Design</span>
              </div>
              <p className={styles.csTitle}>
                Unifying naming architecture across Messenger and Instagram
              </p>
              <p className={styles.csDesc}>
                Reconciling years of fragmented, redundant naming across Instagram and Messenger into a
                unified, localization-ready taxonomy built to scale across Meta&rsquo;s community
                messaging ecosystem.
              </p>
              <Link href="/case-studies/naming-architecture" className="cta-link">
                <span>See more</span> <span className={styles.arrow}>→</span>
              </Link>
            </div>
            <div className={styles.csImage}>
              <Image
                src="/images/home-case-study-3.png"
                alt=""
                fill
                sizes="148px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className={styles.csImageGradient} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.sectionDivider} />
        </div>
      </section>

      {/* ── Highlights Teaser ── */}
      <div className={styles.navDivider} />
      <section className={styles.highlights}>
        <div className="container">
          <div className={styles.highlightsHeader}>
            <span className={styles.sectionLabel}>Highlights</span>
            <Link href="/highlights" className="cta-link">
              <span>See more</span> <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightsCard}>
              <span className={styles.highlightsCategory}>Micro-learning game design</span>
              <p className={styles.highlightsTitle}>Commas game</p>
              <p className={styles.highlightsDesc}>
                End-to-end design of a grammar mini-game that reached 50K monthly users and
                ranked 4th of 44 for user satisfaction.
              </p>
            </div>
            <div className={styles.highlightsCard}>
              <span className={styles.highlightsCategory}>Curriculum design</span>
              <p className={styles.highlightsTitle}>Language arts skill library</p>
              <p className={styles.highlightsDesc}>
                A suite of interactive ELA skills covering logical fallacies, literary analysis,
                and everyday grammar, scaled across grades 3&ndash;12 for IXL&rsquo;s core curriculum.
              </p>
            </div>
            <div className={styles.highlightsCard}>
              <span className={styles.highlightsCategory}>Content marketing</span>
              <p className={styles.highlightsTitle}>Back-to-school &amp; growth campaigns</p>
              <p className={styles.highlightsDesc}>
                Full-funnel campaign work for <strong>Meta</strong> and <strong>Elevate</strong>: concept, copy, and
                creative direction across global and performance channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <div className={styles.navDivider} />
      <section className={styles.about}>
        <div className="container">
          <span className={styles.sectionLabel}>About</span>
          <p className={styles.aboutBody}>
            Before designing for big tech, I spent years in education: teaching, then
            state-level assessment development and curriculum design. That background
            informs everything: information architecture, systems thinking, and a deep
            respect for how people learn and process information.
          </p>
          <Link href="/about" className="cta-link">
            <span>About me</span> <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className={styles.navDivider} />
      <footer>
        <div className={`container ${styles.footer}`}>
          <span>© 2026 Allen Chong</span>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/allenchong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://allenchong.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            <button onClick={openContactForm} className={styles.footerLinkButton}>Contact</button>
          </div>
        </div>
      </footer>
    </>
  );
}
