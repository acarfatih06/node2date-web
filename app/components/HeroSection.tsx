'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Smartphone, Apple, Chrome } from 'lucide-react';
import { heroSequence } from './animations';

interface HeroSectionProps {
  onSubmit: (email: string) => Promise<void>;
  isSubmitting: boolean;
}

export default function HeroSection({ onSubmit, isSubmitting }: HeroSectionProps) {
  const [email, setEmail] = useState('');

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

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroSequence}
              className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Love Has{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                No Language
              </span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroSequence}
              className="mb-10 max-w-xl text-lg leading-8 text-gray-600"
            >
              Experience seamless, real-time translated dating. Chat in your native language, 
              connect globally. Powered by{' '}
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
              className="max-w-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
                    'Joining...'
                  ) : (
                    <>
                      Join Waitlist
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </div>
              
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-gray-500">Beta launching soon on</span>
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
                Be the first to experience borderless dating. No spam, ever.
              </p>
            </motion.form>
          </div>

          {/* Right Side - iPhone Mockup Placeholder */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroSequence}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div 
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-violet-600/30 to-purple-600/30 blur-3xl" 
              />
              
              {/* iPhone Mockup */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[9/19.5] w-full max-w-[260px] mx-auto overflow-hidden rounded-[2.5rem] border-8 border-gray-800 bg-gray-950 shadow-2xl"
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-7 w-40 -translate-x-1/2 rounded-b-3xl bg-gray-800" />
                
                {/* Placeholder for App Screenshot */}
                <div className="relative h-full w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
                  <div className="flex h-full items-center justify-center p-8">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="mb-4 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600">
                          <Smartphone className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 font-medium">
                        App Chat Screen
                      </p>
                      <p className="mt-2 text-xs text-zinc-500">
                        Replace with your
                        <br />
                        3D mockup image
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
