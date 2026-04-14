'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Lightbox } from '@/app/components/Lightbox';
import lbStyles from '@/app/components/Lightbox.module.css';
import styles from './page.module.css';

// ─── Data ────────────────────────────────────────────────────

type ImageItem = {
  kind: 'image';
  caption: string;
  src: string;
  alt: string;
  cropWidth: number;
  cropHeight: number;
  objectPosition: string;
  /** Optional cap on lightbox display width — use when native image resolution is low */
  maxDisplayWidth?: number;
};

const SOL01_IMAGES: ImageItem[] = [
  {
    kind: 'image',
    caption: 'New community invite banner: 0 members',
    src: '/images/invite-banner-start-LG2.png',
    alt: 'Invite banner showing a new community with 0 members',
    cropWidth: 47,
    cropHeight: 22,
    objectPosition: 'center',
  },
  {
    kind: 'image',
    caption: 'New community invite banner: 5 members',
    src: '/images/invite-banner-end-LG2.png',
    alt: 'Invite banner showing a new community with 5 members',
    cropWidth: 47,
    cropHeight: 22,
    objectPosition: 'center',
  },
];

const SOL02_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'New community welcome banner: replaces invite banner',
  src: '/images/welcome-banner-new2.png',
  alt: 'New community welcome banner shown to all members on entry',
  cropWidth: 631,
  cropHeight: 250,
  objectPosition: 'center',
};

const SOL03_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'New community home: member side',
  src: '/images/member-cold-start-new2.png',
  alt: 'New community home screen showing member experience with pinned chat and social cues',
  cropWidth: 195,
  cropHeight: 422,
  objectPosition: 'top',
};

// ─── Component ───────────────────────────────────────────────

export function SolutionsSection() {
  const [active, setActive] = useState<ImageItem | null>(null);

  return (
    <>
      <section className={styles.solutions}>
        <div className="container">
          <span className={styles.sectionLabel}>Solutions</span>

          <div className={styles.solutionsContent}>

            {/* ── Row 1: Sol 01 + Sol 02 ── */}
            <div className={styles.solutionsRow}>

              {/* Sol 01 — Dynamic invite banner for admins */}
              <div className={styles.sol01Col}>
                <span className={styles.solNum}>01</span>
                <p className={styles.solTitle}>Dynamic invite banner for admins</p>
                <p className={styles.solBody}>
                  To address the blank-slate problem admins faced after creation, I designed an
                  invite banner with dynamic content and a progress bar that surfaced data showing
                  a direct correlation between early member count and community longevity. Rather
                  than just prompting admins to invite people, it gave them a concrete, motivating
                  reason to act.
                </p>
                <div className={styles.solMetrics}>
                  <p className={styles.solMetric}>Average member count: 2.7 → 5.3</p>
                  <p className={styles.solMetric}>Active participation stabilized at ~28%</p>
                </div>
                <div className={styles.sol01Images}>
                  {SOL01_IMAGES.map((img) => (
                    <div
                      key={img.src}
                      className={styles.sol01Img}
                      onClick={() => setActive(img)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setActive(img)}
                      aria-label={`Enlarge: ${img.caption}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: 'contain', objectPosition: img.objectPosition }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sol 02 — Customizable welcome banner */}
              <div className={styles.sol02Col}>
                <span className={styles.solNum}>02</span>
                <p className={styles.solTitle}>Customizable welcome banner</p>
                <p className={styles.solBody}>
                  I designed a lightweight but high-visibility welcome banner that gave admins a
                  tool to greet members and set the tone from day one. Deliberately low-effort to
                  customize, high-impact for members entering an unfamiliar space.
                </p>
                <div className={styles.solMetrics}>
                  <p className={styles.solMetric}>
                    Per-user message sends: 1.9 → 5.1 in the first week
                  </p>
                  <p className={styles.solMetric}>
                    Component later adopted across Messenger and integrated into the design system
                  </p>
                </div>
                <div
                  className={styles.sol02Img}
                  onClick={() => setActive(SOL02_IMAGE)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(SOL02_IMAGE)}
                  aria-label={`Enlarge: ${SOL02_IMAGE.caption}`}
                >
                  <Image
                    src={SOL02_IMAGE.src}
                    alt={SOL02_IMAGE.alt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: SOL02_IMAGE.objectPosition }}
                  />
                </div>
              </div>

            </div>

            {/* ── Row 2: Sol 03 (full-width row, image on right) ── */}
            <div className={styles.sol03Row}>

              {/* Sol 03 text — left column */}
              <div className={styles.sol03TextCol}>
                <span className={styles.solNum}>03</span>
                <p className={styles.solTitle}>Reducing member cold start</p>
                <p className={styles.solBody}>
                  Working with the product and design team, I helped shape three interconnected
                  solutions to reduce friction for new members: making the admin welcome banner
                  visible to all members on entry; introducing a pinned Main chat and customizable
                  chat sections to reduce ambiguity; and adding text previews and participant info
                  to each chat, giving members social proof to feel confident enough to participate.
                </p>
                <div className={styles.solMetrics}>
                  <p className={styles.solMetric}>User feedback:</p>
                  <p className={styles.solMetric}>&ldquo;If this wasn&rsquo;t here, I wouldn&rsquo;t know what we&rsquo;re supposed to do.&rdquo;</p>
                  <p className={styles.solMetric}>&ldquo;If I know one of my friends is in the chat, that would make me want to join more.&rdquo;</p>
                </div>
              </div>

              {/* Sol 03 image — right column, phone screenshot */}
              <div className={styles.sol03ImageCol}>
                <div className={styles.sol03ImageOuter}>
                  <div
                    className={styles.sol03ImageInner}
                    onClick={() => setActive(SOL03_IMAGE)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActive(SOL03_IMAGE)}
                    aria-label={`Enlarge: ${SOL03_IMAGE.caption}`}
                  >
                    <Image
                      src={SOL03_IMAGE.src}
                      alt={SOL03_IMAGE.alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: SOL03_IMAGE.objectPosition }}
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <Lightbox caption={active.caption} onClose={() => setActive(null)}>
          <div
            className={lbStyles.imgCroppedContainer}
            style={{
              aspectRatio: `${active.cropWidth} / ${active.cropHeight}`,
              width: `min(80vw, calc(75vh * ${active.cropWidth} / ${active.cropHeight}))`,
              ...(active.maxDisplayWidth != null && { maxWidth: `${active.maxDisplayWidth}px` }),
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
            />
          </div>
        </Lightbox>
      )}
    </>
  );
}
