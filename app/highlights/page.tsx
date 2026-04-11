'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import styles from './page.module.css';

// Lazy load Wistia player for performance
const WistiaPlayer = dynamic(
  () => import('@wistia/wistia-player-react').then((mod) => mod.WistiaPlayer),
  { ssr: false }
);

export default function Highlights() {
  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />

      {/* Nav divider */}
      <div className={styles.navDivider} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.highlightsContainer}>
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>HIGHLIGHTS</span>
            <h1 className={styles.heroTitle}>
              Good content design leaves a mark — whatever form it takes.
            </h1>
            <p className={styles.heroSubhead}>
              Marketing creative, curriculum, and educational games: work that 
              sharpened the instincts I bring to every product.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Section 1: Games ── */}
      <section className={styles.section}>
        <div className={styles.highlightsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>GAMES</span>
            <h2 className={styles.itemTitle}>Commas game · Elevate Labs</h2>
          </div>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLeft}>
              <div className={styles.itemBody}>
                <p className={styles.mainText}>
                  The challenge was making something inherently dry — commas — 
                  feel playful and worth coming back to, in a catalog of 44 
                  competing games.
                </p>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>CONTRIBUTIONS</span>
                  <p className={styles.itemText}>
                    Designed the game from the ground up: spec, mechanics, and all instructional copy<br />
                    Leaned into a quirky, whimsical content voice to make even the driest rules feel like a game worth playing<br />
                    Managed a small team of contract writers to scale production
                  </p>
                </div>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>OUTCOME</span>
                  <p className={styles.outcomeBody}>
                    50K+ monthly users. Ranked 4th out of 44 for positive user feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.mediaContainer}>
                <div className={styles.wistiaCommas}>
                  <WistiaPlayer mediaId='eiztoj7cvc' aspect={0.4615} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Section 2: Curriculum ── */}
      <section className={styles.section}>
        <div className={styles.highlightsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>CURRICULUM</span>
            <h2 className={styles.itemTitle}>Language arts skill library · IXL Learning</h2>
          </div>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLeft}>
              <div className={styles.itemBody}>
                <p className={styles.mainText}>
                  Built a Common Core-aligned Language Arts skill library 
                  spanning grades 3–12 — from spec to finished content.
                </p>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>CONTRIBUTIONS</span>
                  <p className={styles.itemText}>
                    Authored specs and content for several flagship skills, including comparing literary illustrations, classifying logical fallacies, and correcting errors in everyday use<br />
                    Managed a team of 12 writers and editors to scale production across grade levels<br />
                    Wrote all prompts, explanations, and instructional language
                  </p>
                </div>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>OUTCOME</span>
                  <p className={styles.outcomeBody}>
                    Adopted as a core ELA offering across IXL&rsquo;s full grade 3–12 curriculum.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.tryThemOut}>
                <span className={styles.subLabel}>TRY THEM OUT</span>
                <div className={styles.tryLinks}>
                  <a href="#" className={styles.tryLink}><span>Classify logical fallacies</span> <span className={styles.arrow}>→</span></a>
                  <a href="#" className={styles.tryLink}><span>Compare literary illustrations</span> <span className={styles.arrow}>→</span></a>
                  <a href="#" className={styles.tryLink}><span>Correct errors in everyday use</span> <span className={styles.arrow}>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Section 3: Marketing (Meta) ── */}
      <section className={styles.section}>
        <div className={styles.highlightsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>MARKETING</span>
            <h2 className={styles.itemTitle}>Back-to-school campaign · Messenger @ Meta</h2>
          </div>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLeft}>
              <div className={styles.itemBody}>
                <p className={styles.mainText}>
                  A seasonal campaign to drive awareness and adoption of 
                  Messenger Communities among students at the start of the 
                  school year. Built around Reels visibility, feature education, 
                  and peak seasonal intent.
                </p>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>CONTRIBUTIONS</span>
                  <p className={styles.itemText}>
                    Conceptualized and wrote all campaign content: copy, captions, and CTAs across placements<br />
                    Co-created storyboard and creative direction with the marketing team<br />
                    Signed off on final design and coordinated localization across markets
                  </p>
                </div>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>OUTCOME</span>
                  <p className={styles.outcomeBody}>
                    Reached users at scale through Meta&rsquo;s global distribution channels. Note: I was also the content designer for the product itself.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.instagramWrapper}>
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/C-s1MdvynHe/" 
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%' }}
                >
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Section 4: Marketing (Growth) ── */}
      <section className={styles.section}>
        <div className={styles.highlightsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>MARKETING</span>
            <h2 className={styles.itemTitle}>Growth campaign · Elevate Labs</h2>
          </div>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLeft}>
              <div className={styles.itemBody}>
                <p className={styles.mainText}>
                  Elevate needed paid creative that could perform on TikTok 
                  and Instagram without feeling like an ad, so I made 
                  the app itself the star.
                </p>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>CONTRIBUTIONS</span>
                  <p className={styles.itemText}>
                    Pitched the concept: leveraging existing in-app content as the creative hook<br />
                    Wrote all copy variations<br />
                    Collaborated with Growth Marketing and an external agency, iterating based on performance data and platform metrics
                  </p>
                </div>
                <div className={styles.subGroup}>
                  <span className={styles.subLabel}>OUTCOME</span>
                  <p className={styles.outcomeBody}>
                    ROAS improved from 70% to 130%.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.mediaContainer}>
                <div className={styles.wistiaGrowth}>
                  <WistiaPlayer mediaId='5z0n60x5ad' aspect={0.5625} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.navDivider} />

      {/* ── Footer ── */}
      <footer>
        <div className={`${styles.highlightsContainer} ${styles.footer}`}>
          <span>© 2026 Allen Chong</span>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/allenchong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://allenchong.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            <a href="mailto:hello@allenchong.studio">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
