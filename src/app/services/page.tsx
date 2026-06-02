import type { Metadata } from 'next'
import { CONTACT } from '@/lib/contact'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Leather, Vinyl & Upholstery Restoration Services',
  description:
    'Professional furniture, leather, vinyl, recliner, cushion, pet damage, auto, boat, RV, and commercial upholstery restoration in Bucks County, Philadelphia, Princeton, and South Jersey.',
  openGraph: {
    title: 'Restoration Services | Premier Leather & Upholstery',
    url: '/services',
  },
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">All Services</p>
            <h1 className="font-serif text-h1 text-white mb-4">
              Leather, Vinyl & Upholstery Restoration Services
            </h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-8">
              Professional repair, restoration, refinishing, recoloring, foam replacement, and upholstery
              services for residential and commercial clients. Mobile service available throughout Bucks
              County, Philadelphia, Princeton, and South Jersey.
            </p>
            <p className="text-small text-white/40 mb-8">
              Accurate pricing requires photos. We cannot provide estimates by phone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={CONTACT.smsHref}
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Text Photos For A Free Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold font-sans px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Request Estimate Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <ServicesGrid />
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

