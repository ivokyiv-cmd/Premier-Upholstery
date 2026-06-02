import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileBar } from '@/components/layout/StickyMobileBar'
import { SchemaLocal } from '@/components/seo/SchemaLocal'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.premierleatherupholstery.com'),
  title: {
    default: 'Premier Leather & Upholstery | Mobile Leather, Vinyl & Furniture Restoration',
    template: '%s | Premier Leather & Upholstery',
  },
  description:
    'Mobile leather, vinyl, furniture, recliner, cushion, pet damage, commercial, auto, boat, and RV upholstery restoration serving Bucks County, Philadelphia, Princeton, and South Jersey.',
  keywords: [
    'leather restoration',
    'upholstery repair',
    'furniture restoration',
    'recliner repair',
    'cushion refilling',
    'foam replacement',
    'pet damage repair',
    'vinyl repair',
    'Bucks County',
    'Philadelphia',
    'Princeton NJ',
    'South Jersey',
    'mobile leather restoration',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Premier Leather & Upholstery',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-off-white text-black antialiased pb-[60px] md:pb-0">
        <SchemaLocal />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  )
}
