import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { areas } from '@/data/areas'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Mobile Leather & Upholstery Restoration Service Areas',
  description:
    'Mobile leather, vinyl, furniture, and upholstery restoration serving Doylestown, Warrington, Warminster, Newtown, Yardley, Philadelphia, Princeton, Cherry Hill, and surrounding areas.',
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  const paAreas = areas.filter((a) => a.state === 'PA')
  const njAreas = areas.filter((a) => a.state === 'NJ')

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]} />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Service Areas</p>
            <h1 className="font-serif text-h1 text-white mb-4">
              Mobile Leather & Upholstery Restoration вЂ” Areas We Serve
            </h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-8">
              We provide mobile leather, vinyl, furniture, and upholstery restoration throughout Bucks County,
              Montgomery County, Philadelphia, Princeton, Cherry Hill, and South Jersey. We come to you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-wide">
          {/* Pennsylvania */}
          <div className="mb-12">
            <h2 className="font-serif text-h2 text-black mb-2">Pennsylvania</h2>
            <span className="block w-10 h-px bg-gold mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-start gap-4 bg-white rounded-md border border-gray-soft p-5 hover:shadow-hover hover:border-gold/40 transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-sans font-semibold text-body text-black group-hover:text-leather transition-colors mb-1">
                      {area.city}, {area.state}
                    </h3>
                    {area.county && (
                      <p className="text-small text-gray-mid">{area.county}</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-soft group-hover:text-gold ml-auto flex-shrink-0 mt-0.5 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* New Jersey */}
          <div>
            <h2 className="font-serif text-h2 text-black mb-2">New Jersey</h2>
            <span className="block w-10 h-px bg-gold mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {njAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-start gap-4 bg-white rounded-md border border-gray-soft p-5 hover:shadow-hover hover:border-gold/40 transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-sans font-semibold text-body text-black group-hover:text-leather transition-colors mb-1">
                      {area.city}, {area.state}
                    </h3>
                    {area.county && (
                      <p className="text-small text-gray-mid">{area.county}</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-soft group-hover:text-gold ml-auto flex-shrink-0 mt-0.5 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Extended areas note */}
          <div className="mt-10 bg-white rounded-md border border-gray-soft p-6 md:p-8">
            <h3 className="font-sans font-semibold text-h4 text-black mb-2">Extended Service Areas</h3>
            <p className="text-body text-gray-dark">
              Extended service to Jersey City, NJ and New York City may be available for larger projects or
              scheduled multi-stop service days. Contact us to discuss your location and project scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

