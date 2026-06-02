import type { Metadata } from 'next'

const baseUrl = 'https://www.premierleatherupholstery.com'

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/images/hero/hero-og.jpg',
}: {
  title: string
  description: string
  path: string
  ogImage?: string
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      images: [{ url: `${baseUrl}${ogImage}`, width: 1200, height: 630, alt: title }],
      type: 'website',
      siteName: 'Premier Leather & Upholstery',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
    alternates: { canonical: `${baseUrl}${path}` },
  }
}
