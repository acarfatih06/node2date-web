'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInScale } from './animations';
import { useTranslation } from 'react-i18next';

export default function FoundersNote() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-24 lg:px-8 relative min-h-screen flex items-center" style={{ backgroundColor: 'rgba(139, 92, 246, 0.08)' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-400/15 blur-3xl"></div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInScale}
        className="mx-auto max-w-4xl"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl border border-violet-200/50 bg-white/80 p-12 shadow-xl backdrop-blur-sm"
        >
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-600">
              {t('founder.badge')}
            </h2>
            <p className="mb-6 text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl">
              "{t('founder.quote')}"
            </p>
            
            <div className="flex items-center gap-5 pt-4 border-t border-violet-200/50">
              <motion.div 
                whileHover={{ scale: 1.08, rotate: 5 }}
                className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg ring-4 ring-violet-500/25"
              >
                <Image
                  src="/fatih2.webp"
                  alt="Fatih Açar"
                  width={120}
                  height={120}
                  priority
                  className="object-cover"
                  style={{ 
                    objectPosition: 'center center',
                    transform: 'scale(1.25)'
                  }}
                />
              </motion.div>
              <div>
                <p className="text-xl font-bold text-gray-900">{t('founder.name')}</p>
                <p className="text-sm text-gray-600">{t('founder.title')}</p>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 italic">
              {t('founder.status')}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
