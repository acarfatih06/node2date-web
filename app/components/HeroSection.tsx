'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Apple, Chrome } from 'lucide-react';
import { heroSequence } from './animations';
import PhoneMockup from './PhoneMockup';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onSubmit: (email: string) => Promise<void>;
  isSubmitting: boolean;
}

export default function HeroSection({ onSubmit, isSubmitting }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    try {
      await onSubmit(email);
      // Clear email only on successful submission
      setEmail('');
    } catch (error) {
      // Keep email if submission failed
      // Error is already handled in ClientWrapper
    }
  };

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40 min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-violet-600 to-purple-600 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroSequence}
              className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              {t('hero.headline.prefix')}{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.headline.accent')}
              </span>
              {' '}{t('hero.headline.suffix')}
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroSequence}
              className="mb-10 max-w-xl text-lg leading-8 text-gray-600"
            >
              {t('hero.subheadline')}
              {' '}
              Powered by{' '}
              <span className="font-semibold text-violet-600">Node.js</span> &{' '}
              <span className="font-semibold text-violet-600">Google Cloud AI</span>.
            </motion.p>

            {/* Email Waitlist Form */}
            <motion.form
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroSequence}
              onSubmit={handleSubmit}
              noValidate
              className="max-w-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('hero.emailPlaceholder')}
                  required
                  className="flex-1 rounded-full border border-violet-200/50 bg-white/80 px-6 py-4 text-gray-900 placeholder-gray-400 shadow-sm backdrop-blur-sm transition-all focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(139, 92, 246, 0)',
                      '0 0 0 10px rgba(139, 92, 246, 0)',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-violet-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-violet-500/50 disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    t('hero.button.loading')
                  ) : (
                    <>
                      {t('hero.button.label')}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </div>
              
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-gray-500">{t('hero.betaLabel')}</span>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-200/50 bg-white/80 shadow-sm">
                    <Apple className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-200/50 bg-white/80 shadow-sm">
                    <Chrome className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {t('hero.note')}
              </p>
            </motion.form>
          </div>

          {/* Right Side - iPhone Mockup */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroSequence}
            className="relative order-1 lg:order-2 flex justify-center items-start flex-shrink-0"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
