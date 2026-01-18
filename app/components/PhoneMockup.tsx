'use client';

import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { fadeInScale } from './animations';

const MOCKUP_IMAGES = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/4.webp',
  '/5.webp',
  '/6.webp',
];

function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCKUP_IMAGES.length);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInScale}
      className="relative w-full flex justify-center"
    >
      {/* iPhone 15 Pro Mockup Frame */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl cursor-pointer"
        onClick={nextImage}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[1.5rem] z-20" />
        
        {/* Screen Container */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
          {/* Blurred Image with Glassmorphism */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={MOCKUP_IMAGES[currentIndex]}
                alt={`App screenshot ${currentIndex + 1}`}
                fill
                className="object-cover blur-[2px] scale-105"
                priority={currentIndex === 0}
                sizes="280px"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-violet-500/8 to-transparent backdrop-blur-sm" />
              
              {/* Coming Soon Badge */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="px-6 py-3 rounded-full bg-white/25 backdrop-blur-lg border-2 border-white/50 shadow-2xl"
                >
                  <span className="text-white font-bold text-base tracking-wide drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                    Coming Soon
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Bottom Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full" />
        
        {/* Dots Indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {MOCKUP_IMAGES.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-violet-600'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(PhoneMockup);
