import Link from 'next/link'
import { MapPin } from 'lucide-react'

const primaryLocations = [
  { label: 'Philadelphia', href: '/service-areas/philadelphia-pa' },
  { label: 'Bucks County', href: '/service-areas/doylestown-pa' },
  { label: 'Doylestown', href: '/service-areas/doylestown-pa' },
  { label: 'Warrington', href: '/service-areas/warrington-pa' },
  { label: 'Warminster', href: '/service-areas/warminster-pa' },
  { label: 'Newtown', href: '/service-areas/newtown-pa' },
  { label: 'Richboro', href: '/service-areas/richboro-pa' },
  { label: 'Yardley', href: '/service-areas/yardley-pa' },
  { label: 'Southampton', href: '/service-areas/bensalem-pa' },
  { label: 'Bensalem', href: '/service-areas/bensalem-pa' },
  { label: 'Montgomery County', href: '/service-areas/horsham-pa' },
  { label: 'Princeton, NJ', href: '/service-areas/princeton-nj' },
  { label: 'Cherry Hill, NJ', href: '/service-areas/cherry-hill-nj' },
]

interface ServiceAreasInlineProps {
  serviceTitle?: string
}

export function ServiceAreasInline({ serviceTitle }: ServiceAreasInlineProps) {
  return (
    <section className="section-padding-sm bg-off-white border-t border-gray-soft">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <p className="font-sans font-semibold text-body text-black">Areas We Serve</p>
            </div>
            <p className="text-small text-gray-mid max-w-xs">
              {serviceTitle
                ? `${serviceTitle} is available throughout:`
                : 'Mobile service available throughout:'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {primaryLocations.map((loc) => (
              <Link
                key={loc.label}
                href={loc.href}
                className="px-3 py-1.5 rounded-sm border border-gray-soft bg-white text-small font-sans text-gray-dark hover:border-gold hover:text-leather transition-colors duration-150"
              >
                {loc.label}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="px-3 py-1.5 rounded-sm border border-gold/40 bg-gold/5 text-small font-semibold font-sans text-leather hover:bg-gold/10 transition-colors duration-150"
            >
              All Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
