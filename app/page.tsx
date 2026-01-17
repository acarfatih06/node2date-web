'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  Globe2, 
  Shield, 
  Smartphone, 
  Mail, 
  Linkedin, 
  Instagram,
  Send,
  Sparkles,
  Apple,
  Chrome,
  Plus,
  Minus,
  X
} from 'lucide-react';

// Animation Variants for Reusability
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
    }
  }
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 0.15s delay between each card
      delayChildren: 0.2
    }
  }
};

const heroSequence: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// FAQ Components
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

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, just log to console
    console.log('Waitlist signup:', email);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you for joining our waitlist! We'll reach out to ${email} soon.`);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    alert(`${platform} account coming soon! Follow us for updates.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/30 via-purple-50/20 to-pink-50/30 text-gray-900" style={{ backgroundColor: '#faf8fc' }}>
      {/* Header */}
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

      {/* Hero Section with iPhone Mockup */}
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

      {/* Technology Showcase - Bento Grid with Stagger */}
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
              Powered by{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Next-Gen Tech
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Built on a foundation of cutting-edge technology to deliver seamless, 
              secure, and lightning-fast experiences.
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
                
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Real-Time Translation</h3>
                <p className="leading-7 text-gray-600">
                  Instant message translation using advanced{' '}
                  <span className="font-semibold text-violet-600">Cloud APIs</span>. 
                  Connect with anyone, anywhere, in real-time across 100+ languages.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    Google Cloud AI
                  </span>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    NLP
                  </span>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    100+ Languages
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
                
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Built with React Native</h3>
                <p className="leading-7 text-gray-600">
                  Native performance with smooth{' '}
                  <span className="font-semibold text-indigo-600">60FPS animations</span>. 
                  Optimized for both iOS and Android with a single, powerful codebase.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    React Native
                  </span>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    60FPS
                  </span>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    Cross-Platform
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
                
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Secure & Private</h3>
                <p className="leading-7 text-gray-600">
                  Enterprise-grade security with{' '}
                  <span className="font-semibold text-purple-600">OTP verification</span> and{' '}
                  <span className="font-semibold text-purple-600">end-to-end privacy</span>. 
                  Your data is protected at every step.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    OTP Auth
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    E2E Privacy
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    Secure
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <FAQItem
                question="What makes Node2Date unique?"
                answer="It's the first dating app to integrate real-time AI translation, allowing you to match and chat globally without language barriers."
              />
              <FAQItem
                question="How accurate is the translation?"
                answer="We use advanced Neural Machine Translation (NMT) via Google Cloud AI to ensure context-aware and human-like conversations."
              />
              <FAQItem
                question="Is there any lag in the chat?"
                answer="No. Our Node.js backend infrastructure is optimized for millisecond-fast processing, ensuring a seamless real-time experience."
              />
              <FAQItem
                question="Is my data secure?"
                answer="Yes. All communications are end-to-end encrypted and processed through secure, automated APIs with a zero-knowledge policy."
              />
              <FAQItem
                question="How do you handle fake profiles?"
                answer="We enforce mandatory OTP (One-Time Password) verification and AI-assisted photo validation to ensure authentic connections."
              />
              <FAQItem
                question="Why should I join the waitlist?"
                answer="Waitlist members receive priority beta access, a 'Founding Member' badge, and 3 months of free Premium features."
              />
              <FAQItem
                question="Which devices are supported?"
                answer="Node2Date will launch simultaneously on iOS and Android, built on a high-performance React Native architecture."
              />
              <FAQItem
                question="Are you open to partnerships?"
                answer="Yes. For investment or strategic partnership inquiries, please reach out to us at founder@node2date.com"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Note / Vision Section */}
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
                Founder's Note
              </h2>
              <p className="mb-6 text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl">
                "We are building the future of borderless dating. A world where language 
                is no longer a barrier to finding meaningful connections."
              </p>
              
              <div className="flex items-center gap-5 pt-4 border-t border-violet-200/50">
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg ring-4 ring-violet-500/25"
                >
                  <Image
                    src="/fatih2.jpg"
                    alt="Fatih Açar"
                    width={120}
                    height={120}
                    className="object-cover"
                    style={{ 
                      objectPosition: 'center center',
                      transform: 'scale(1.25)'
                    }}
                  />
                </motion.div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Fatih Acar</p>
                  <p className="text-sm text-gray-600">Founder & CEO, Node2Date</p>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-gray-500 italic">
                Currently in Early Access development phase.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
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
                © 2026 Node2Date Inc.
              </span>
            </div>

            <div className="flex gap-6 text-sm">
              <motion.a
                whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                href="#"
                className="text-gray-600 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                href="mailto:support@node2date.com"
                className="text-gray-600 transition-colors"
              >
                Contact
              </motion.a>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleSocialClick(e, 'X')}
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
                onClick={(e) => handleSocialClick(e, 'Instagram')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/50 bg-white/80 text-gray-600 shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
