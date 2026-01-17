'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp } from './animations';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-violet-200/50 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-violet-600"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 mt-1"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-violet-600" />
          ) : (
            <Plus className="h-5 w-5 text-violet-600" />
          )}
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.2, ease: 'easeInOut' }
        }}
        className="overflow-hidden"
      >
        <div className="pb-5 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const faqData = [
  {
    question: "What makes Node2Date unique?",
    answer: "It's the first dating app to integrate real-time AI translation, allowing you to match and chat globally without language barriers."
  },
  {
    question: "How accurate is the translation?",
    answer: "We use advanced Neural Machine Translation (NMT) via Google Cloud AI to ensure context-aware and human-like conversations."
  },
  {
    question: "Is there any lag in the chat?",
    answer: "No. Our Node.js backend infrastructure is optimized for millisecond-fast processing, ensuring a seamless real-time experience."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All communications are end-to-end encrypted and processed through secure, automated APIs with a zero-knowledge policy."
  },
  {
    question: "How do you handle fake profiles?",
    answer: "We enforce mandatory OTP (One-Time Password) verification and AI-assisted photo validation to ensure authentic connections."
  },
  {
    question: "Why should I join the waitlist?",
    answer: "Waitlist members receive priority beta access, a 'Founding Member' badge, and 3 months of free Premium features."
  },
  {
    question: "Which devices are supported?",
    answer: "Node2Date will launch simultaneously on iOS and Android, built on a high-performance React Native architecture."
  },
  {
    question: "Are you open to partnerships?",
    answer: "Yes. For investment or strategic partnership inquiries, please reach out to us at founder@node2date.com"
  }
];

export default function FAQSection() {
  return (
    <section className="px-6 py-24 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-violet-300/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 h-72 w-72 rounded-full bg-purple-300/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-2xl border border-violet-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
