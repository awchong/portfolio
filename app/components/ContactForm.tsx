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
      // Optional: reset form
      const form = document.querySelector('form') as HTMLFormElement;
      form?.reset();
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <h2 className={styles.header}>Let’s Talk</h2>
            <p className={styles.subheader}>
              Available for content design strategy, mentorship, or just a coffee in the Mission.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            {state?.success ? (
              <div className={styles.successMessage}>
                <p>Message sent!</p>
                <button 
                  onClick={() => setState(null)} 
                  className={styles.resetButton}
                >
                  Send another message
                </button>
              </div>
            ) : (
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
                    rows={5}
                    className={styles.textarea}
                  />
                </div>

                {state?.error && (
                  <p className={styles.errorMessage}>{state.error}</p>
                )}

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
