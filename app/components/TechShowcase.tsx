'use client';

import { motion } from 'framer-motion';
import { Globe2, Shield, Smartphone } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';
import { useTranslation } from 'react-i18next';

export default function TechShowcase() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-24 lg:px-8 relative min-h-screen flex items-center" style={{ backgroundColor: 'rgba(139, 92, 246, 0.08)' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-400/15 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('tech.titlePrefix')}{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              {t('tech.titleAccent')}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t('tech.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1: Real-Time Translation */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-violet-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-violet-500/50"
          >
            <motion.div 
              initial={{ opacity: 0.05 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-32 w-32 bg-violet-500/10 blur-3xl" 
            />
            
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg"
              >
                <Globe2 className="h-7 w-7 text-white" />
              </motion.div>
              
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {t('tech.card1.title')}
              </h3>
              <p className="leading-7 text-gray-600">
                {t('tech.card1.body')}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                  {t('tech.card1.tag1')}
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                  {t('tech.card1.tag2')}
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                  {t('tech.card1.tag3')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: React Native Performance */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
            }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-violet-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-violet-500/50"
          >
            <motion.div 
              initial={{ opacity: 0.05 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-32 w-32 bg-indigo-500/10 blur-3xl" 
            />
            
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-lg"
              >
                <Smartphone className="h-7 w-7 text-white" />
              </motion.div>
              
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {t('tech.card2.title')}
              </h3>
              <p className="leading-7 text-gray-600">
                {t('tech.card2.body')}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                  {t('tech.card2.tag1')}
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                  {t('tech.card2.tag2')}
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                  {t('tech.card2.tag3')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Secure & Private */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
            }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-violet-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-violet-500/50 md:col-span-2 lg:col-span-1"
          >
            <motion.div 
              initial={{ opacity: 0.05 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-32 w-32 bg-purple-500/10 blur-3xl" 
            />
            
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg"
              >
                <Shield className="h-7 w-7 text-white" />
              </motion.div>
              
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {t('tech.card3.title')}
              </h3>
              <p className="leading-7 text-gray-600">
                {t('tech.card3.body')}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  {t('tech.card3.tag1')}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  {t('tech.card3.tag2')}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  {t('tech.card3.tag3')}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
