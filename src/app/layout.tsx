import type { Metadata } from 'next';
import { Montserrat, Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Techscholars - Innovative Technology Solutions',
    template: '%s | Techscholars',
  },
  description: 'Techscholars delivers cutting-edge technology solutions, web development, AI integration, and expert consultancy to elevate your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${merriweather.variable}`}>
      <head>
      </head>
      <body className={`antialiased font-sans bg-gray-100 text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}