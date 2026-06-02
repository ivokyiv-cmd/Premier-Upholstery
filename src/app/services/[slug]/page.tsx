import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, MessageSquare, FileText, Phone } from 'lucide-react'
import { services, getServiceBySlug, getRelatedServices } from '@/data/services'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { FAQ } from '@/components/sections/FAQ'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { TrustSection } from '@/components/sections/TrustSection'
import { ServiceAreasInline } from '@/components/sections/ServiceAreasInline'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import Image from 'next/image'
import { CONTACT } from '@/lib/contact'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedServices)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: { '@type': 'LocalBusiness', name: 'Premier Leather & Upholstery' },
    areaServed: [
      'Philadelphia, PA',
      'Bucks County, PA',
      'Doylestown, PA',
      'Newtown, PA',
      'Princeton, NJ',
      'Cherry Hill, NJ',
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO — коричневый фон, как на всех страницах ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <HeroBackground />

        <div className="relative container-wide">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="label-text text-gold/70 mb-5">{service.title}</p>
            <h1 className="font-serif text-4xl md:text-[2.8rem] lg:text-h1 text-white mb-5 leading-tight">
              {service.heroHeadline} in Bucks County &amp; Philadelphia
            </h1>
            <p className="text-body-lg text-white/70 mb-3 leading-relaxed max-w-2xl mx-auto">
              {service.intro.split('.')[0]}. Professional results throughout Philadelphia, Bucks County,
              Doylestown, Newtown, Princeton, and Cherry Hill.
            </p>
            <p className="text-small text-white/35 mb-8 font-sans">
              Accurate pricing requires photos. We cannot provide estimates by phone.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={CONTACT.smsHref} className="btn-gold px-7 py-3.5 text-sm">
                <MessageSquare className="w-4 h-4" strokeWidth={2} />
                Text Photos For A Free Quote
              </a>
              <a href="/contact" className="btn-outline-white px-7 py-3.5 text-sm">
                <FileText className="w-4 h-4" strokeWidth={2} />
                Request Estimate
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['Mobile Service Available', 'Free Photo Estimates', 'Color Matching Specialists', 'Philadelphia & Bucks County'].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-small text-white/40 font-sans">
                  <span className="w-1 h-1 rounded-full bg-gold/60" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER — под hero, на всю ширину, без обрезки ── */}
      {service.bannerImage && (
        <div className="w-full">
          <Image
            src={service.bannerImage}
            alt={`${service.title} — Premier Leather & Upholstery`}
            width={1920}
            height={600}
            className="w-full h-auto block"
            priority
          />
        </div>
      )}

      {/* ── BEFORE & AFTER PROJECTS ── */}
      {service.projects.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="label-text mb-4">Real Work. Real Results.</p>
              <h2 className="font-serif text-h2 text-black mb-4">
                {service.title} — Before & After Projects
              </h2>
              <span className="block w-12 h-px bg-gold mx-auto mb-6" />
              <p className="text-body text-gray-dark max-w-xl mx-auto">
                Every project below is real work completed for clients in Philadelphia, Bucks County,
                Princeton, and South Jersey. Drag the sliders to compare.
              </p>
            </div>

            <div className="space-y-20">
              {service.projects.map((project, i) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Slider */}
                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <BeforeAfterSlider
                      beforeSrc={project.before.src}
                      afterSrc={project.after.src}
                      beforeAlt={project.before.alt}
                      afterAlt={project.after.alt}
                    />
                    {project.before.caption && project.after.caption && (
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <p className="text-small text-gray-mid font-sans text-center leading-snug">
                          Before: {project.before.caption}
                        </p>
                        <p className="text-small text-gray-mid font-sans text-center leading-snug">
                          After: {project.after.caption}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="gold">{service.title}</Badge>
                      {project.location && <Badge variant="soft">{project.location}</Badge>}
                    </div>
                    <h3 className="font-serif text-h3 text-black mb-4">{project.title}</h3>
                    <span className="block w-10 h-px bg-gold mb-5" />
                    <p className="text-body text-gray-dark leading-relaxed mb-5">{project.description}</p>

                    <p className="text-small font-semibold font-sans text-black mb-3 uppercase tracking-wider">
                      Services Performed
                    </p>
                    <ul className="space-y-1.5 mb-7">
                      {project.servicesPerformed.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-small text-gray-dark font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={CONTACT.smsHref}
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-gold"
                    >
                      <MessageSquare className="w-4 h-4" />
                      I have a similar project — Text Photos
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PHOTO QUOTE CTA ── */}
      <section className="section-padding-sm bg-off-white">
        <div className="container-wide">
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      {/* ── SERVICE DETAILS ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="label-text mb-4">What We Address</p>
              <h2 className="font-serif text-h3 text-black mb-6">Common Problems We Solve</h2>
              <ul className="space-y-2.5">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <span className="text-body text-gray-dark">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-text mb-4">Scope of Work</p>
              <h2 className="font-serif text-h3 text-black mb-6">What This Service Includes</h2>
              <ul className="space-y-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-body text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE SERVICE NOTE ── */}
      <section className="bg-off-white py-6">
        <div className="container-wide">
          <div className="flex items-center gap-4 p-5 bg-white rounded-md border border-gray-soft">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <p className="text-small font-sans text-gray-dark">
              <strong className="text-black">Mobile service available.</strong>{' '}
              {service.title} is available at your home or business throughout Philadelphia, Bucks County,
              Doylestown, Newtown, Yardley, Princeton, Cherry Hill, and surrounding areas.
              Workshop drop-off also available by appointment.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY REPAIR ── */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <p className="label-text mb-4">Cost Comparison</p>
          <h2 className="font-serif text-h2 text-black mb-4">Why Repair Instead of Replace?</h2>
          <span className="block w-12 h-px bg-gold mb-6" />
          <p className="text-body-lg text-gray-dark leading-relaxed mb-8">{service.whyRepair}</p>
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <TrustSection />

      {/* ── FAQ ── */}
      <FAQ faqs={service.faqs} className="bg-white" />

      {/* ── AREAS WE SERVE ── */}
      <ServiceAreasInline serviceTitle={service.title} />

      {/* ── RELATED SERVICES ── */}
      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <p className="label-text mb-4">Related Services</p>
            <h2 className="font-serif text-h3 text-black mb-8">You May Also Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group block bg-off-white rounded-md border border-gray-soft p-6 hover:shadow-hover hover:border-gold/40 transition-all duration-200"
                >
                  <h3 className="font-serif text-h4 text-black mb-2 group-hover:text-leather transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-small text-gray-dark mb-3 leading-relaxed">{rel.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-small font-semibold font-sans text-leather">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── END CTA ── */}
      <section className="section-padding bg-espresso">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Get Started</p>
            <h2 className="font-serif text-h2 text-white mb-4">Get Your Free {service.title} Estimate</h2>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-body-lg text-white/65 mb-3">
              Text photos of the damaged area and full furniture piece for a fast, accurate written quote.
            </p>
            <p className="text-small text-white/35 mb-10">
              Pricing cannot be given by phone — photos let us assess material, damage, and color matching
              requirements accurately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CONTACT.smsHref} className="btn-gold px-8 py-4 text-base">
                <MessageSquare className="w-5 h-5" />
                Text Photos For A Free Quote
              </a>
              <a href="/contact" className="btn-outline-white px-8 py-4 text-base">
                <FileText className="w-5 h-5" />
                Request Estimate Online
              </a>
            </div>
            <p className="mt-6 text-small text-white/25">
              Questions only?{' '}
              <a href={CONTACT.phoneHref} className="text-white/40 hover:text-white/60 transition-colors">
                <Phone className="w-3 h-3 inline mr-1" />
                Call With Questions: {CONTACT.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
