'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-violet-100/50 bg-white/70 backdrop-blur-xl"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* N2D Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/30">
              <span className="text-xl font-bold text-white">N2D</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline">Node2Date</span>
          </motion.div>
          
          {/* Coming Soon Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-md hidden md:block"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-violet-600">Coming Soon</span>
              <span className="text-xs font-semibold text-violet-600">65%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-violet-100/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/30 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Support */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="mailto:support@node2date.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-violet-200/50 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600 flex-shrink-0"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Support</span>
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
