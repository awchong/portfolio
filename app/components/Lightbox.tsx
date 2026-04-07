'use client';

import { useEffect } from 'react';
import styles from './Lightbox.module.css';

interface LightboxProps {
  caption: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Lightbox({ caption, onClose, children }: LightboxProps) {
  useEffect(() => {
    // Prevent body scroll while open
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    /* Click the backdrop to dismiss */
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      {/* Stop propagation so clicking the content doesn't close */}
      <figure
        className={styles.panel}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
    </div>
  );
}
