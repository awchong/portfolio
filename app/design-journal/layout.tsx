'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

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
    tagline: 'Agentic Orchestration \u00b7 Multi-model',
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

export default function DesignJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const yearGroups = groupByYear(ENTRIES);

  return (
    <div className={styles.shell}>
      {/* ── Left panel — index ── */}
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

      {/* ── Right panel — entry content ── */}
      <main className={styles.content}>
        <div className={styles.contentInner} key={pathname}>
          {children}
        </div>
      </main>
    </div>
  );
}
