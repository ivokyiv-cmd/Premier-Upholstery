import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { areas } from '@/data/areas'

export const metadata: Metadata = {
  title: 'About Premier Leather & Upholstery',
  description:
    'Learn about Premier Leather & Upholstery вЂ” a professional mobile leather, vinyl, furniture, and upholstery restoration service serving Bucks County, Philadelphia, Princeton, and South Jersey.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Craftsmanship',
    description:
      'Every repair is approached with careful attention to material type, color matching, and finish quality. We do not rush.',
  },
  {
    title: 'Honest Estimates',
    description:
      'Photo-based estimates ensure we provide realistic guidance before any commitment. We assess what we can actually see.',
  },
  {
    title: 'Mobile Service',
    description:
      'We built this business around coming to the customer вЂ” at home, at the office, or at a commercial location.',
  },
  {
    title: 'Practical Advice',
    description:
      'Not every piece can or should be repaired. We give honest guidance about what restoration can and cannot achieve.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">About Us</p>
            <h1 className="font-serif text-h1 text-white mb-4">About Premier Leather & Upholstery</h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70">
              Mobile restoration. Photo-based estimates. Professional results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label-text mb-4">Our Story</p>
              <h2 className="font-serif text-h2 text-black mb-4">
                Helping People Save What They Already Own
              </h2>
              <span className="block w-12 h-px bg-gold mb-6" />
              <div className="space-y-4 text-body text-gray-dark leading-relaxed">
                <p>
                  Premier Leather & Upholstery was created to help homeowners and businesses restore the
                  furniture, leather, vinyl, and upholstery they already own. Instead of replacing
                  expensive pieces, many items can be repaired, refinished, recolored, rebuilt, or renewed.
                </p>
                <p>
                  Our work focuses on careful craftsmanship, honest photo-based estimates, professional
                  color matching, and practical solutions that make sense for each customer. We do not
                  oversell services or promise results that are not realistic.
                </p>
                <p>
                  We built the business around mobile service вЂ” coming to you rather than asking you to
                  transport heavy furniture. For most repairs, we can work on-site at your home, apartment,
                  office, restaurant, or commercial space.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-md border border-gray-soft p-5">
                  <div className="w-8 h-px bg-gold mb-3" />
                  <h3 className="font-sans font-semibold text-body text-black mb-2">{value.title}</h3>
                  <p className="text-small text-gray-dark leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why photo estimates */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="label-text mb-4">Our Estimate Process</p>
          <h2 className="font-serif text-h2 text-black mb-4">Why We Start With Photos</h2>
          <span className="block w-12 h-px bg-gold mb-6" />
          <div className="space-y-4 text-body text-gray-dark leading-relaxed mb-8">
            <p>
              Accurate pricing cannot be given over the phone. Every estimate depends on factors that can
              only be assessed visually вЂ” material type, damage severity, color matching requirements, and
              the full scope of repair needed.
            </p>
            <p>
              By starting with photos, we provide honest written estimates based on what we can actually see.
              This protects both parties вЂ” you know what to expect before committing, and we know what we
              are working with before scheduling.
            </p>
          </div>
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      {/* Service areas */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <p className="label-text mb-4">Where We Work</p>
          <h2 className="font-serif text-h2 text-black mb-4">Service Areas</h2>
          <span className="block w-12 h-px bg-gold mb-6" />
          <p className="text-body text-gray-dark mb-8">
            We serve residential and commercial clients throughout Bucks County, Montgomery County,
            Philadelphia, Princeton, Cherry Hill, and South Jersey. Mobile service is available for most
            repairs. Workshop drop-off is available by appointment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="flex items-center gap-2 text-small font-sans text-gray-dark hover:text-leather transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                {area.city}, {area.state}
              </Link>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-small font-semibold font-sans text-leather hover:text-espresso transition-colors"
          >
            View all service areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

