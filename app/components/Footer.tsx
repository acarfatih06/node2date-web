'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram, X } from 'lucide-react';
import { fadeInUp } from './animations';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onSocialClick: (e: React.MouseEvent, platform: string) => void;
}

export default function Footer({ onSocialClick }: FooterProps) {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="border-t border-violet-200/50 px-6 py-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/20">
              <span className="text-sm font-bold text-white">N2D</span>
            </div>
            <span className="text-sm text-gray-600">
              {t('footer.copyright')}
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <motion.a
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              href="#"
              className="text-gray-600 transition-colors"
            >
              {t('footer.privacy')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              href="mailto:support@node2date.com"
              className="text-gray-600 transition-colors"
            >
              {t('footer.contact')}
            </motion.a>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => onSocialClick(e, 'X')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/50 bg-white/80 text-gray-600 shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600"
              aria-label="X (formerly Twitter)"
            >
              <X className="h-4 w-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/fatih-yusuf-a%C3%A7ar-083661143/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/50 bg-white/80 text-gray-600 shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => onSocialClick(e, 'Instagram')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/50 bg-white/80 text-gray-600 shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
