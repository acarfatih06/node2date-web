'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import HeroSection from './HeroSection';
import { useTranslation } from 'react-i18next';

export default function ClientWrapper() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (email: string): Promise<void> => {
    const trimmed = email.trim();

    // Frontend validation so messages follow selected language
    if (!trimmed) {
      toast.error(t('toast.error.title'), {
        description: t('validation.emailRequired'),
        duration: 4000,
      });
      return;
    }

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error(t('toast.error.title'), {
        description: t('validation.emailInvalid'),
        duration: 4000,
      });
      return;
    }

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
        throw new Error(data.error || data.message || t('toast.error.description'));
      }

      // Success toast
      toast.success(t('toast.success.title'), {
        description: t('toast.success.description', { email }),
        duration: 5000,
      });

    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Error toast
      const errorMessage =
        error instanceof Error
          ? error.message
          : t('toast.error.description');
      
      toast.error(t('toast.error.title'), {
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
