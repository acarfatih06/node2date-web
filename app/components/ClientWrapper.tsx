'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import HeroSection from './HeroSection';

export default function ClientWrapper() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (email: string): Promise<void> => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to join waitlist');
      }

      // Success toast
      toast.success('Welcome to the waitlist!', {
        description: `We'll reach out to ${email} soon. Check your inbox!`,
        duration: 5000,
      });

    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Error toast
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Something went wrong. Please try again.';
      
      toast.error('Failed to join waitlist', {
        description: errorMessage,
        duration: 4000,
      });
      
      // Re-throw error so HeroSection can handle email clearing
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return <HeroSection onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
}
