import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <div className={styles.navDivider} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`${styles.aboutContainer} ${styles.heroInner}`}>
          <span className={styles.heroLabel}>About me</span>
          <h1 className={styles.heroTitle}>
            A designer who started<br />in the classroom.
          </h1>
          <p className={styles.heroSubhead}>
            I&rsquo;ve designed at scale for Meta, Autodesk, and Elevate, but the
            foundation was built teaching bilingual elementary school in DC.
          </p>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Bio / How'd I get here? ── */}
      <section className={styles.section}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.sectionTitle}>How&rsquo;d I get here?</h2>
          <div className={styles.grid}>
            <div className={styles.textCol}>
              <p>
                I grew up in a bilingual household. English at school, Cantonese at home
                with my grandmother. Language was never just words; it was connection,
                culture, and identity.
              </p>
              <p>
                My younger sibling is disabled and non-verbal. Watching my family
                navigate systems of communication, and seeing what clicked versus what
                failed, gave me an early, visceral education in clarity and empathy.
              </p>
              <p>
                When I became a teacher in a dual immersion, full-inclusion classroom,
                the challenge wasn&rsquo;t just language. It was designing learning
                experiences that could meet every student where they were. The same
                lesson had to challenge a gifted reader, support an English learner,
                and reach a student who needed a completely different entry point.
                That&rsquo;s where I internalized what good design actually does: it
                doesn&rsquo;t pick a user and optimize for them. It finds the
                structures that work across the widest range of people, and makes
                everyone&rsquo;s experience better in the process.
              </p>
              <p>
                That instinct followed me into tech. As the sole content designer on a
                zero-to-one product launch at Meta, I helped grow Messenger Communities
                from nothing to 2M+ daily active users, applying the same thinking
                I&rsquo;d honed in a classroom: meet people where they are, reduce
                friction, and design for the edges.
              </p>
            </div>
            <div className={styles.bioImage}>
              <Image
                src="/images/allen-grandma.png"
                alt="Allen with his grandmother"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Career & Education ── */}
      <section className={styles.careerSection}>
        <div className={`${styles.aboutContainer} ${styles.careerGrid}`}>
          <div className={styles.careerLeft}>
            {/* Career */}
            <div className={styles.careerGroup}>
              <h2 className={styles.careerTitle}>Career</h2>
              <div className={styles.itemList}>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>Staff Content Designer</span>
                  <span className={styles.itemSub}>Messenger @ Meta</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>Principal Content Strategist</span>
                  <span className={styles.itemSub}>Elevate Labs</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>Senior Curriculum Designer</span>
                  <span className={styles.itemSub}>IXL Learning</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>Test Development Associate</span>
                  <span className={styles.itemSub}>AIR Assessment</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>Teacher</span>
                  <span className={styles.itemSub}>DC Public Schools</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={styles.careerGroup}>
              <h2 className={styles.careerTitle}>Education</h2>
              <div className={styles.itemList}>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>M.Ed., Education</span>
                  <span className={styles.itemSub}>George Washington University · 2010</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemHeader}>B.A., Political Science</span>
                  <span className={styles.itemSub}>Vassar College · 2008</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.careerRight}>
            <div className={styles.skillGroup}>
              <h2 className={styles.careerTitle}>Other skills</h2>
              
              <div className={styles.skillItem}>
                <span className={styles.skillLabel}>Languages</span>
                <span className={styles.skillValue}>
                  English (native), Spanish (conversational), Cantonese (heritage)
                </span>
              </div>

              <div className={styles.skillItem}>
                <span className={styles.skillLabel}>Design tools</span>
                <span className={styles.skillValue}>
                  Figma, InDesign, Illustrator, Canva, Sketch
                </span>
              </div>

              <div className={styles.skillItem}>
                <span className={styles.skillLabel}>AI tools & workflows</span>
                <span className={styles.skillValue}>
                  Prompt engineering, Claude (claude.ai, Claude Code, API), Gemini CLI, ChatGPT;
                  using LLMs for content critique, design iteration, and product development
                </span>
              </div>

              <div className={styles.skillItem}>
                <span className={styles.skillLabel}>UX experience</span>
                <span className={styles.skillValue}>
                  UX writing, content strategy, product thinking, content-first design,
                  microcopy, wireframing, design systems, information architecture,
                  accessibility, localization/internationalization, voice & tone
                </span>
              </div>

              <div className={styles.skillItem}>
                <span className={styles.skillLabel}>Marketing & brand</span>
                <span className={styles.skillValue}>
                  Social campaign creative, paid media content, cross-functional
                  collaboration with brand and growth teams, adapting voice for marketing
                  contexts across platforms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Personal ── */}
      <section className={styles.section}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.sectionTitle}>Personal</h2>
          <div className={styles.grid}>
            <div className={styles.textCol}>
              <p>Barry&rsquo;s Bootcamp cult member; judo novice</p>
              <p>
                Scuba diver; logged dives with manta rays, sea turtles, and sharks in
                Raja Ampat
              </p>
              <p>Language nerd; currently picking up Japanese</p>
              <p>
                Developing an original mobile game about media literacy and persuasion
              </p>
              <p>
                Uses AI as a thinking partner and accelerant: built this site with
                Claude Code
              </p>
            </div>
            <div className={styles.personalImage}>
              <Image
                src="/images/manta-ray.png"
                alt="Manta ray underwater"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.navDivider} />

      {/* ── Footer ── */}
      <footer>
        <div className={`${styles.aboutContainer} ${styles.footer}`}>
          <span>© 2026 Allen Chong</span>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/allenchong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://allenchong.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            <a href="mailto:hello@allenchong.studio">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
