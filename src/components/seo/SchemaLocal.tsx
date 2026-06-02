import { CONTACT } from '@/lib/contact'

export function SchemaLocal() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Premier Leather & Upholstery',
    description:
      'Mobile leather, vinyl, furniture, recliner, cushion, and upholstery restoration serving Bucks County, Philadelphia, Princeton, and South Jersey.',
    url: 'https://www.premierleatherupholstery.com',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    areaServed: [
      'Bucks County, PA',
      'Montgomery County, PA',
      'Philadelphia, PA',
      'Princeton, NJ',
      'Cherry Hill, NJ',
      'South Jersey',
    ],
    serviceType: [
      'Furniture Restoration',
      'Leather Restoration',
      'Vinyl Repair',
      'Recliner Repair',
      'Cushion Refilling',
      'Foam Replacement',
      'Pet Damage Repair',
      'Commercial Upholstery Repair',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
