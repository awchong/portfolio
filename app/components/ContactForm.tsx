'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions/send-email';
import styles from './ContactForm.module.css';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className={styles.submitButton}
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setState(null);
    const result = await sendEmail(formData);
    setState(result);
    
    if (result.success) {
      const form = document.querySelector('form') as HTMLFormElement;
      form?.reset();
    }
  }

  if (state?.success) {
    return (
      <div className={styles.successMessage}>
        <p>Message sent!</p>
        <button 
          onClick={() => setState(null)} 
          className={styles.resetButton}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Your name"
          className={styles.input}
        />
      </div>
      
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="Your email"
          className={styles.input}
        />
      </div>
      
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          placeholder="How can I help?"
          rows={4}
          className={styles.textarea}
        />
      </div>

      {state?.error && (
        <p className={styles.errorMessage}>{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}
