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

// Define the params type as a Promise
export type SlugParamsType = Promise<{ slug: string }>;

// Update the metadata generator to use the Promise type
export async function generateMetadata({ params }: { params: SlugParamsType }): Promise<Metadata> {
  const { slug } = await params;
  const invitation = await getInvitationBySlug(slug);
  
  if (!invitation) {
    return {
      title: 'Invitation Not Found - Alfredo & Mei Wedding',
    };
  }
  
  return {
    title: `${invitation.guestName} - You're Invited to Alfredo & Mei's Wedding`,
    description: `${invitation.guestName} is cordially invited to the wedding of Alfredo and Mei.`,
  };
}

// Update the page component to use the Promise type
export default async function InvitationPage({ params }: { params: SlugParamsType }) {
  const { slug } = await params;
  const invitation = await getInvitationBySlug(slug);
  
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