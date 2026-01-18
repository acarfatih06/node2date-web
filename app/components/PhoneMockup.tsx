'use client';

import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MOCKUP_IMAGES = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/4.webp',
];

function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCKUP_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + MOCKUP_IMAGES.length) % MOCKUP_IMAGES.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex justify-center pb-12">
      {/* Glow Effect - Behind the images */}
      <motion.div 
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 -inset-8 bg-gradient-to-tr from-violet-600/30 to-purple-600/30 blur-3xl -z-10" 
      />
      
      {/* Image Container - Fixed size to prevent layout shift */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer w-[280px] h-[560px]"
        onClick={nextImage}
      >
        {/* Image Container with Fade Animation */}
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
              className="object-contain rounded-[3rem]"
              priority={currentIndex === 0}
              sizes="280px"
              unoptimized={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Outside image */}
        <div className="absolute inset-y-0 -left-12 flex items-center pointer-events-none z-10">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-violet-200/50 text-gray-700 hover:text-violet-600 hover:bg-white transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 -right-12 flex items-center pointer-events-none z-10">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-violet-200/50 text-gray-700 hover:text-violet-600 hover:bg-white transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Dots Indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {MOCKUP_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToImage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-violet-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(PhoneMockup);
