import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Alfredo & Mei Wedding',
    default: 'Alfredo & Mei Wedding Invitation',
  },
  description: 'Wedding invitation for Alfredo and Mei',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-ivory text-dark">
        {children}
      </body>
    </html>
  );
}