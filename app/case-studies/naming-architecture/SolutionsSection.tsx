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
  maxDisplayWidth?: number;
  /** Background color applied in the lightbox:use for images with transparent backgrounds */
  lightboxBg?: string;
  /** Override the lightbox container border-radius:use when the image itself has its own corner treatment */
  lightboxBorderRadius?: number;
};

const SOL01_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'Community hierarchy diagram: the chatnel matrix',
  src: '/images/cs03-sol01-chatnel-matrix.png',
  alt: 'Architectural diagram showing how community, channel, and chat relate as structural primitives',
  cropWidth: 5004,
  cropHeight: 3592,
  objectPosition: 'center',
  lightboxBg: '#fff',
};

const SOL02_BEFORE_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'Naming taxonomy: before (6 competing terms)',
  src: '/images/cs03-sol02-before-table.png',
  alt: 'Table showing the fragmented naming taxonomy before the alignment work',
  cropWidth: 2496,
  cropHeight: 3311,
  objectPosition: 'center',
  lightboxBg: '#fff',
  lightboxBorderRadius: 8,
};

const SOL02_AFTER_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'Naming taxonomy: after (4 unified terms)',
  src: '/images/cs03-sol02-after-table.png',
  alt: 'Table showing the unified naming taxonomy after the alignment work',
  cropWidth: 2496,
  cropHeight: 3183,
  objectPosition: 'center',
  lightboxBg: '#fff',
  lightboxBorderRadius: 8,
};

const SOL03_IMAGE: ImageItem = {
  kind: 'image',
  caption: 'Omnipicker: annotated wireframe for future verticals',
  src: '/images/cs03-sol03-wireframe-omnipicker.png',
  alt: 'Annotated phone wireframe showing the omnipicker designed to scale naming across new verticals',
  cropWidth: 2768,
  cropHeight: 3680,
  objectPosition: 'top',
  lightboxBg: '#fff',
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

            {/* ── Sol 01:Architecting "community" as a meta-primitive ── */}
            <div className={styles.sol01Block}>
              <div>
                <span className={styles.solNum}>01</span>
                <p className={styles.solTitle}>
                  Architecting &ldquo;community&rdquo; as a meta-primitive
                </p>
                <p className={styles.solBody}>
                  The core problem was structural: &ldquo;community&rdquo; meant different things
                  to different teams. I led cross-functional efforts to redefine it not as a UI
                  container but as a shared audience identity — a membership anyone could join
                  around shared interests. This freed social connections to scale across diverse
                  messaging objects without forcing users into a single rigid UI structure.
                </p>
              </div>
              {/* Full-width image at all viewports */}
              <div
                className={styles.sol01Image}
                onClick={() => setActive(SOL01_IMAGE)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActive(SOL01_IMAGE)}
                aria-label={`Enlarge: ${SOL01_IMAGE.caption}`}
              >
                <Image
                  src={SOL01_IMAGE.src}
                  alt={SOL01_IMAGE.alt}
                  fill
                  style={{ objectFit: 'contain', objectPosition: SOL01_IMAGE.objectPosition }}
                />
              </div>
            </div>

            {/* ── Sol 02:Developing a unified product taxonomy ── */}
            <div className={styles.sol02Block}>
              <div>
                <span className={styles.solNum}>02</span>
                <p className={styles.solTitle}>Developing a unified product taxonomy</p>
                <p className={styles.solBody}>
                  I conducted a comprehensive linguistic audit to eliminate term drift and redundant
                  naming patterns across both apps. The goal was a single source of truth:
                  consistent terms, consistent definitions, consistent behavior — regardless of
                  which app you were in.
                </p>
                <div className={styles.solMetrics}>
                  <p className={styles.solMetric}>Taxonomy reduced from 6 terms to 4</p>
                  <p className={styles.solMetric}>
                    First-ever terminology alignment between IG and Messenger for community
                    messaging products
                  </p>
                </div>
              </div>
              {/* Before/after tables: side by side at wide, stacked at ≤1056px */}
              <div className={styles.sol02Images}>
                <div
                  className={`${styles.sol02ImageWrap} ${styles.sol02Before}`}
                  onClick={() => setActive(SOL02_BEFORE_IMAGE)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(SOL02_BEFORE_IMAGE)}
                  aria-label={`Enlarge: ${SOL02_BEFORE_IMAGE.caption}`}
                >
                  <Image
                    src={SOL02_BEFORE_IMAGE.src}
                    alt={SOL02_BEFORE_IMAGE.alt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                </div>
                <div
                  className={`${styles.sol02ImageWrap} ${styles.sol02After}`}
                  onClick={() => setActive(SOL02_AFTER_IMAGE)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(SOL02_AFTER_IMAGE)}
                  aria-label={`Enlarge: ${SOL02_AFTER_IMAGE.caption}`}
                >
                  <Image
                    src={SOL02_AFTER_IMAGE.src}
                    alt={SOL02_AFTER_IMAGE.alt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>

            {/* ── Sol 03:Future-proofing for new verticals ── */}
            <div className={styles.sol03Block}>

              {/* Sol 03 text */}
              <div className={styles.sol03Text}>
                <span className={styles.solNum}>03</span>
                <p className={styles.solTitle}>Future-proofing for new verticals</p>
                <p className={styles.solBody}>
                  The naming system needed to scale beyond general-interest communities into
                  segment-specific models like schools and subscriptions — without requiring new
                  naming conventions each time. I built the architecture to accommodate new
                  verticals by design, not by exception.
                </p>
              </div>

              {/* Sol 03 image:below text, centered at 320px */}
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
              ...(active.lightboxBg != null && { background: active.lightboxBg }),
              ...(active.lightboxBorderRadius != null && { borderRadius: active.lightboxBorderRadius }),
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              style={{ objectPosition: active.objectPosition }}
            />
          </div>
        </Lightbox>
      )}
    </>
  );
}
