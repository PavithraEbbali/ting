import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/content';
import SmoothScroll from '@/components/SmoothScroll';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

/**
 * Ting sets its own type in Circular Std, which is a licensed face. Figtree is
 * the closest open geometric humanist sans and keeps the same tall x-height
 * and tight tracking.
 */
const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: SITE.metaTitle,
  description: SITE.metaDescription,
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    type: 'website',
    siteName: `${SITE.brandName} ${SITE.retailerLabel}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04061e',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <head>
        {/* Entrance reveals must never hide content when JS is unavailable. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-90 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
