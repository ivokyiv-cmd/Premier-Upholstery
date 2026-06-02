import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { areas } from '@/data/areas'

export function ServiceAreaSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <p className="label-text mb-4">Service Areas</p>
          <h2 className="font-serif text-h2 text-black mb-4">Mobile Restoration Near You</h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body text-gray-dark max-w-2xl mx-auto">
            Premier Leather & Upholstery provides mobile service throughout Bucks County, Montgomery County,
            Philadelphia, Princeton, Cherry Hill, and South Jersey. We come to your home or business.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-soft bg-off-white text-small font-sans text-gray-dark hover:border-gold hover:text-leather transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              {area.city}, {area.state}
            </Link>
          ))}
        </div>

        <div className="bg-off-white rounded-md p-6 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-small text-gray-dark leading-relaxed mb-2">
            Extended service to Jersey City, NJ and New York City may be available for larger projects
            or scheduled multi-stop service days.
          </p>
          <p className="text-small text-gray-mid">Contact us to discuss your location.</p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-small font-semibold font-sans text-leather hover:text-espresso transition-colors"
          >
            View all service areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
