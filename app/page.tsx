import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alfredo & Mei - Wedding Invitation',
  description: 'Join us for the wedding celebration of Alfredo and Mei on June 12, 2025',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory px-4 text-center">
      <div className="mb-6">
        <Image
          src="/icons/cross.svg"
          alt="Cross"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      
      <h1 className="font-serif text-5xl md:text-6xl mb-6">
        Alfredo & Mei
      </h1>
      
      <p className="text-xl md:text-2xl mb-6">
        We're getting married on June 12, 2025
      </p>
      
      <div className="max-w-md text-center mb-12">
        <p className="italic text-lg">
          This is our wedding invitation website. Please use your personalized link to view your invitation.
        </p>
      </div>
      
      <div className="border-t border-gold w-20 mb-10"></div>
      
      <Link
        href="/admin/login"
        className="text-gold hover:underline"
      >
        Admin Login
      </Link>
    </div>
  );
}