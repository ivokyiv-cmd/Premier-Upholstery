import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { areas, getAreaBySlug } from '@/data/areas'
import { CONTACT } from '@/lib/contact'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { getRelatedServices } from '@/data/services'
import { FAQ } from '@/components/sections/FAQ'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Tag } from '@/components/ui/Tag'
import { globalFaqs } from '@/data/faqs'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaBySlug(params.slug)
  if (!area) return {}
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/service-areas/${area.slug}`,
    },
    alternates: { canonical: `/service-areas/${area.slug}` },
  }
}

export default function AreaPage({ params }: Props) {
  const area = getAreaBySlug(params.slug)
  if (!area) notFound()

  const relatedServices = getRelatedServices(area.relatedServices)
  const areaFaqs = globalFaqs.slice(0, 5)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Premier Leather & Upholstery',
    description: area.metaDescription,
    areaServed: { '@type': 'City', name: `${area.city}, ${area.state}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: `${area.city}, ${area.state}` },
            ]}
          />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Service Area</p>
            <h1 className="font-serif text-h1 text-white mb-4">{area.headline}</h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-4">{area.intro}</p>
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
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold font-sans px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Request Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile service note */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="flex items-center gap-4 p-5 bg-off-white rounded-md border border-gray-soft">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <p className="text-small font-sans text-gray-dark">
              <strong className="text-black">Mobile service available in {area.city}.</strong>{' '}
              {area.serviceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <p className="label-text mb-4">Services in {area.city}</p>
          <h2 className="font-serif text-h2 text-black mb-8">
            Restoration Services Available in {area.city}, {area.state}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-md border border-gray-soft p-6 hover:shadow-hover hover:border-gold/40 transition-all duration-200"
              >
                <h3 className="font-serif text-h4 text-black mb-2 group-hover:text-leather transition-colors">
                  {service.title}
                </h3>
                <p className="text-small text-gray-dark mb-3 leading-relaxed">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-small font-semibold font-sans text-leather">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      {/* Nearby towns */}
      <section className="section-padding-sm bg-off-white">
        <div className="container-wide">
          <p className="label-text mb-4">Nearby Areas</p>
          <h2 className="font-serif text-h3 text-black mb-6">Nearby Towns We Also Serve</h2>
          <div className="flex flex-wrap gap-2">
            {area.nearbyTowns.map((town) => (
              <Tag key={town}>{town}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (abbreviated) */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ faqs={areaFaqs} className="bg-white" />

      <FinalCTA />
    </>
  )
}
