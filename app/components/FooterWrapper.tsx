'use client';

import { toast } from 'sonner';
import Footer from './Footer';

export default function FooterWrapper() {
  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    toast.info(`${platform} account coming soon!`, {
      description: 'Follow us for updates and announcements.',
      duration: 4000,
    });
  };

  return <Footer onSocialClick={handleSocialClick} />;
}
