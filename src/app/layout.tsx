import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import ClientNavbar from '@/components/client-navbar';
import Footer from '@/components/footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Support Systems',
  description: 'Find Your Therapist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#fbf9f4] font-sans antialiased text-[#0f2d2a]">
        <ClientNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}