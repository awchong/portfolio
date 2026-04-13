'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Lightbox } from '@/app/components/Lightbox';
import lbStyles from '@/app/components/Lightbox.module.css';
import styles from './page.module.css';

// ─── Data ────────────────────────────────────────────────────

type VpCardItem = {
  kind: 'vpcard';
  caption: string;
  title: string;
  body: string;
};

type ImageItem = {
  kind: 'image';
  caption: string;
  src: string;
  alt: string;
  cropWidth: number;
  cropHeight: number;
  objectPosition: string;
};

type ActiveItem = VpCardItem | ImageItem;

const VP_CARDS: VpCardItem[] = [
  {
    kind: 'vpcard',
    caption: 'Value prop 1: Create community without the overhead',
    title: 'Build a chat-based community on Messenger',
    body: 'Plan events, find support and share information with your community, all in one place. No Facebook group needed.',
  },
  {
    kind: 'vpcard',
    caption: 'Value prop 2: Appeal to scale',
    title: 'Bring up to 5,000 real-world connections online',
    body: 'Create a community space on Messenger for any group or organization and give it room to grow.',
  },
  {
    kind: 'vpcard',
    caption: 'Value prop 3: Safety and control',
    title: 'Use simple tools to help your community thrive',
    body: 'Unlock admin tools to help you safely manage your community so you can focus on building relationships.',
  },
];

// DOM order: approval images first so they stack above trust-safety at mobile
const SOL02_IMAGES = [
  {
    kind: 'image' as const,
    caption: 'Require approval to join: off state',
    src: '/images/cs01-sol02-top.png',
    alt: 'Require approval to join toggle in off state',
    containerClass: styles.sol02ImgTopLeft,
    objectPosition: 'center',
    cropWidth: 4680,
    cropHeight: 1352,
  },
  {
    kind: 'image' as const,
    caption: 'Require approval to join: on state',
    src: '/images/cs01-sol02-bottom.png',
    alt: 'Require approval to join toggle in on state',
    containerClass: styles.sol02ImgBottomLeft,
    objectPosition: 'center',
    cropWidth: 4680,
    cropHeight: 1352,
  },
  {
    kind: 'image' as const,
    caption: 'Disclosure',
    src: '/images/cs01-sol02-right.png',
    alt: 'About this community panel showing visibility and safety disclosures',
    containerClass: styles.sol02ImgRight,
    objectPosition: 'bottom',
    cropWidth: 4680,
    cropHeight: 4204,
  },
];

// ─── Component ───────────────────────────────────────────────

export function SolutionsSection() {
  const [active, setActive] = useState<ActiveItem | null>(null);

  return (
    <>
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
                {VP_CARDS.map((card) => (
                  <div
                    key={card.caption}
                    className={styles.vpCard}
                    onClick={() => setActive(card)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActive(card)}
                    aria-label={`Enlarge: ${card.caption}`}
                  >
                    <p className={styles.vpCardTitle}>{card.title}</p>
                    <p className={styles.vpCardBody}>{card.body}</p>
                  </div>
                ))}
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
                {/*
                  DOM order: approval images first, trust-safety last.
                  At desktop, absolute positioning overrides order.
                  At mobile (flex-column), this gives the correct visual stack:
                  approval-off → approval-on → disclosure (top to bottom).
                */}
                {SOL02_IMAGES.map((img) => (
                  <div
                    key={img.src}
                    className={img.containerClass}
                    onClick={() => setActive(img)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActive(img)}
                    aria-label={`Enlarge: ${img.caption}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: img.objectPosition }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <Lightbox caption={active.caption} onClose={() => setActive(null)}>
          {active.kind === 'vpcard' ? (
            <div className={lbStyles.vpCardEnlarged}>
              <p className={lbStyles.vpCardEnlargedTitle}>{active.title}</p>
              <p className={lbStyles.vpCardEnlargedBody}>{active.body}</p>
            </div>
          ) : (
            /*
              Render the same crop the page shows: matching aspect ratio,
              objectFit: cover, and objectPosition. Width is constrained to
              fit within both 80vw and 75vh.
            */
            <div
              className={lbStyles.imgCroppedContainer}
              style={{
                aspectRatio: `${active.cropWidth} / ${active.cropHeight}`,
                width: `min(80vw, calc(75vh * ${active.cropWidth} / ${active.cropHeight}))`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                style={{ objectPosition: active.objectPosition }}
              />
            </div>
          )}
        </Lightbox>
      )}
    </>
  );
}
