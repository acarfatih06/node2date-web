'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp } from './animations';
import { useTranslation } from 'react-i18next';

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
    questionKey: "faq.q1",
    answerKey: "faq.a1"
  },
  {
    questionKey: "faq.q2",
    answerKey: "faq.a2"
  },
  {
    questionKey: "faq.q3",
    answerKey: "faq.a3"
  },
  {
    questionKey: "faq.q4",
    answerKey: "faq.a4"
  },
  {
    questionKey: "faq.q5",
    answerKey: "faq.a5"
  },
  {
    questionKey: "faq.q6",
    answerKey: "faq.a6"
  },
  {
    questionKey: "faq.q7",
    answerKey: "faq.a7"
  },
  {
    questionKey: "faq.q8",
    answerKey: "faq.a8"
  }
];

export default function FAQSection() {
  const { t } = useTranslation();

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
            {t('faq.titlePrefix')}{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              {t('faq.titleAccent')}
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
              <FAQItem
                key={index}
                question={t(faq.questionKey)}
                answer={t(faq.answerKey)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
