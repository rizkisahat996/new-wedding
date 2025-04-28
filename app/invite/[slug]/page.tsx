import { notFound } from 'next/navigation';
import { getInvitationBySlug } from '@/lib/db';
import { LanguageProvider } from '@/components/LanguageContext';
import Hero from '@/components/invitation/Hero';
import WeddingDetails from '@/components/invitation/WeddingDetails';
import Gallery from '@/components/invitation/Gallery';
import BackgroundSection from '@/components/invitation/BackgroundSection';
import Footer from '@/components/invitation/Footer';
import FadeOnScroll from '@/components/utils/FadeOnScroll';
import LanguageToggle from '@/components/LanguageToggle';
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const invitation = await getInvitationBySlug(params.slug);
  
  if (!invitation) {
    return {
      title: 'Invitation Not Found - Alfredo & Mei Wedding',
    };
  }
  
  return {
    title: `${invitation.guestName} - You're Invited to Alfredo & Mei's Wedding`,
    description: `${invitation.guestName} is cordially invited to the wedding of Alfredo and Mei. Join us on June 12, 2025.`,
  };
}

export default async function InvitationPage({ params }: PageProps) {
  const invitation = await getInvitationBySlug(params.slug);
  
  if (!invitation) {
    notFound();
  }
  
  return (
    <LanguageProvider>
      <main className="bg-pearl">
        <FadeOnScroll />
        <LanguageToggle />
        <Hero guestName={invitation.guestName} />
        <WeddingDetails />
        <Gallery />
        <BackgroundSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}