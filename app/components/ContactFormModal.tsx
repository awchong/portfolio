'use client';

import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import styles from './ContactForm.module.css';

export default function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-form', handleOpen);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
    
    return () => {
      window.removeEventListener('open-contact-form', handleOpen);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={styles.closeButton} 
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className={styles.headerGroup}>
          <h2 className={styles.header}>Contact me</h2>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export function openContactForm() {
  window.dispatchEvent(new CustomEvent('open-contact-form'));
}
