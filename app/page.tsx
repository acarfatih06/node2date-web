import dynamic from 'next/dynamic';
import Header from './components/Header';
import ClientWrapper from './components/ClientWrapper';
import FooterWrapper from './components/FooterWrapper';

// Lazy-load below-fold components for better initial bundle size
const TechShowcase = dynamic(() => import('./components/TechShowcase'));
const FAQSection = dynamic(() => import('./components/FAQSection'));
const FoundersNote = dynamic(() => import('./components/FoundersNote'));

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/30 via-purple-50/20 to-pink-50/30 text-gray-900" style={{ backgroundColor: '#faf8fc' }}>
      <Header />
      <ClientWrapper />
      <TechShowcase />
      <FAQSection />
      <FoundersNote />
      <FooterWrapper />
    </div>
  );
}
