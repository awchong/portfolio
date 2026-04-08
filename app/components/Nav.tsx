'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

// Route slugs — must match actual page routes when built
const CS_ROUTES = {
  cs01: '/case-studies/paradigm-shift',
  cs02: '/case-studies/cold-start',
  cs03: '/case-studies/naming-architecture',
} as const;

type PageId = 'home' | 'cs01' | 'cs02' | 'cs03' | 'highlights' | 'about';

function getPageId(pathname: string): PageId {
  if (pathname === '/') return 'home';
  if (pathname.startsWith(CS_ROUTES.cs01)) return 'cs01';
  if (pathname.startsWith(CS_ROUTES.cs02)) return 'cs02';
  if (pathname.startsWith(CS_ROUTES.cs03)) return 'cs03';
  if (pathname === '/highlights') return 'highlights';
  if (pathname === '/about') return 'about';
  return 'home';
}

export default function Nav() {
  const pathname = usePathname();
  const pageId = getPageId(pathname);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const isCS = pageId === 'cs01' || pageId === 'cs02' || pageId === 'cs03';

  // Tracks whether the cursor is hovering over .csMenu (drives dropdown in narrow mode)
  const [hoverActive, setHoverActive] = useState(false);
  // Prevents onMouseEnter from re-opening the dropdown immediately after a click-to-close
  const justClosedRef = useRef(false);

  // Collapse on route change — useLayoutEffect runs synchronously before paint
  // so the expanded state is already false when the new page renders, preventing
  // a visible flash where the dropdown briefly shows on the destination page.
  useLayoutEffect(() => {
    setExpanded(false);
    setHoverActive(false);
    (document.activeElement as HTMLElement)?.blur();
  }, [pathname]);

  // Collapse when clicking outside the nav
  useEffect(() => {
    if (!expanded) return;
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExpanded(false);
        setHoverActive(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [expanded]);

  // Collapse on scroll — only in dropdown mode (<820px) where the menu obscures content.
  // The inline slide-reveal (≥820px) sits in the nav bar and doesn't need scroll dismissal.
  useEffect(() => {
    if (!expanded) return;
    function handleScroll() {
      if (window.innerWidth < 820) setExpanded(false);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expanded]);

  // Dropdown is visible when hover-active OR click-toggled open
  const dropdownShowing = expanded || hoverActive;

  function handleCsClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (expanded) {
      // Second click: close definitively.
      // Blur the button so :focus-within doesn't keep the dropdown visible,
      // and suppress onMouseEnter for a short window so post-click mouse
      // events can't immediately re-open the menu.
      setExpanded(false);
      setHoverActive(false);
      (e.currentTarget as HTMLButtonElement).blur();
      justClosedRef.current = true;
      setTimeout(() => { justClosedRef.current = false; }, 300);
    } else {
      setExpanded(true);
      justClosedRef.current = false;
    }
  }

  // ── Color logic (DECISIONS.md active state table) ────────────────────────
  const wordmarkColor =
    pageId === 'home' ? 'var(--color-terracotta)' : 'var(--color-gray)';

  // Terracotta only when on a CS page — NOT just because the dropdown is open.
  const csToggleColor =
    isCS ? 'var(--color-terracotta)' : 'var(--color-gray)';

  const cs01Color = pageId === 'cs01' ? 'var(--color-terracotta)' : 'var(--color-gray)';
  const cs02Color = pageId === 'cs02' ? 'var(--color-terracotta)' : 'var(--color-gray)';
  const cs03Color = pageId === 'cs03' ? 'var(--color-terracotta)' : 'var(--color-gray)';

  const highlightsColor =
    pageId === 'highlights' ? 'var(--color-terracotta)' : 'var(--color-gray)';
  const aboutColor =
    pageId === 'about' ? 'var(--color-terracotta)' : 'var(--color-gray)';

  return (
    <header ref={navRef} className={styles.nav}>
      <Link
        href="/"
        className={styles.wordmark}
        style={{ color: wordmarkColor }}
      >
        Allen Chong
      </Link>

      {/*
        Spacer takes up all remaining space between wordmark and links,
        but never shrinks below 32px — preserving the same gap as between
        nav items on either side of the expanded CS menu.
      */}
      <div className={styles.navSpacer} />

      <nav className={styles.links}>
        {/* Case studies: inline slide-reveal (≥820px) or hover dropdown (<820px) */}
        <div
          className={`${styles.csMenu} ${dropdownShowing ? styles.csMenuExpanded : ''}`}
          onMouseEnter={() => {
            if (!justClosedRef.current) setHoverActive(true);
          }}
          onMouseLeave={() => {
            setHoverActive(false);
          }}
        >
          <button
            type="button"
            className={styles.csToggle}
            style={{ color: csToggleColor }}
            onClick={(e) => handleCsClick(e)}
            aria-expanded={expanded}
          >
            Case studies
            {/*
              Colon only renders when expanded AND viewport ≥820px.
              CSS hides it below 820px (dropdown mode has no need for it).
            */}
            {expanded && (
              <span className={styles.csColon} aria-hidden="true">:</span>
            )}
          </button>

          {/* Inline slide-reveal — visible at ≥820px only (hidden via CSS below) */}
          <div
            className={`${styles.csItemsOuter} ${expanded ? styles.csItemsOuterExpanded : ''}`}
          >
            <div
              className={`${styles.csItemsInner} ${expanded ? styles.csItemsInnerExpanded : ''}`}
            >
              <Link href={CS_ROUTES.cs01} className={styles.link} style={{ color: cs01Color }}>
                01. Paradigm shift
              </Link>
              <span className={styles.pipe} aria-hidden="true">|</span>
              <Link href={CS_ROUTES.cs02} className={styles.link} style={{ color: cs02Color }}>
                02. Cold start
              </Link>
              <span className={styles.pipe} aria-hidden="true">|</span>
              <Link href={CS_ROUTES.cs03} className={styles.link} style={{ color: cs03Color }}>
                03. Naming architecture
              </Link>
            </div>
          </div>

          {/* Hover dropdown — visible at <820px only (hidden via CSS above) */}
          <div className={styles.csDropdown}>
            <Link
              href={CS_ROUTES.cs01}
              className={styles.csDropdownLink}
              style={{ color: cs01Color }}
            >
              01. Paradigm shift
            </Link>
            <Link
              href={CS_ROUTES.cs02}
              className={styles.csDropdownLink}
              style={{ color: cs02Color }}
            >
              02. Cold start
            </Link>
            <Link
              href={CS_ROUTES.cs03}
              className={styles.csDropdownLink}
              style={{ color: cs03Color }}
            >
              03. Naming architecture
            </Link>
          </div>
        </div>

        <Link href="/highlights" className={styles.link} style={{ color: highlightsColor }}>
          Highlights
        </Link>
        <Link href="/about" className={styles.link} style={{ color: aboutColor }}>
          About
        </Link>
      </nav>
    </header>
  );
}
