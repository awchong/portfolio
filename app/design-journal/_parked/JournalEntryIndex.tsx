'use client';

/*
  Parked component — not currently rendered.
  Originally lived inline in `app/design-journal/layout.tsx` as the left-rail
  entry index. Now lives under `_parked/` so Next.js's private-folder
  convention signals that this directory is intentionally non-active code.

  To revive: in `app/design-journal/layout.tsx`, import this component and
  wrap children in the original .shell / <main className={styles.content}>
  structure. See docs/design-journal/001-agentic-sprint/DECISIONS.md
  (section: "Left Rail — Parked") for the full revival recipe.
*/

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './journal-layout.module.css';

interface JournalEntry {
  slug: string;
  title: string;
  tagline: string;
  year: number;
  entryNumber: string;
}

const ENTRIES: JournalEntry[] = [
  {
    slug: 'agentic-workflow',
    title: 'Bootstrapping an agentic workflow',
    tagline: 'Agentic Orchestration · Multi-model',
    year: 2026,
    entryNumber: '001',
  },
];

function groupByYear(entries: JournalEntry[]) {
  const groups: { year: number; entries: JournalEntry[] }[] = [];
  for (const entry of entries) {
    const existing = groups.find((g) => g.year === entry.year);
    if (existing) {
      existing.entries.push(entry);
    } else {
      groups.push({ year: entry.year, entries: [entry] });
    }
  }
  return groups.sort((a, b) => b.year - a.year);
}

export default function JournalEntryIndex() {
  const pathname = usePathname();
  const yearGroups = groupByYear(ENTRIES);

  return (
    <aside className={styles.sidebar}>
      <span className={styles.sidebarHeading}>Design journal</span>

      {yearGroups.map((group) => (
        <div key={group.year} className={styles.yearGroup}>
          <span className={styles.yearLabel}>{group.year}</span>
          {group.entries.map((entry) => {
            const href = `/design-journal/${entry.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={entry.slug}
                href={href}
                className={`${styles.entryItem} ${isActive ? styles.entryItemActive : ''}`}
              >
                <span className={styles.entryTitle}>{entry.title}</span>
                <span className={styles.entryTagline}>{entry.tagline}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
