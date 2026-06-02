import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Before & After Leather & Upholstery Restoration Gallery',
  description:
    'Before and after photos from real leather restoration, recliner repair, furniture restoration, cushion refilling, auto interior, and boat upholstery projects in Philadelphia, Bucks County, and South Jersey.',
  alternates: { canonical: '/gallery' },
}

const categories = [
  { label: 'All Projects', slug: null },
  { label: 'Leather Restoration', slug: 'leather-restoration' },
  { label: 'Furniture Restoration', slug: 'furniture-restoration' },
  { label: 'Recliner Repair', slug: 'recliner-repair' },
  { label: 'Cushion Refilling', slug: 'cushion-refilling-foam-replacement' },
  { label: 'Auto Interior Repair', slug: 'auto-interior-repair' },
  { label: 'Boat Upholstery', slug: 'boat-upholstery' },
  { label: 'RV Restoration', slug: 'rv-interior-restoration' },
  { label: 'Commercial Upholstery', slug: 'commercial-upholstery' },
]

// Collect all real projects from data
const allProjects = services.flatMap((service) =>
  service.projects.map((project) => ({
    ...project,
    serviceTitle: service.title,
    serviceSlug: service.slug,
  }))
)

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Before & After</p>
            <h1 className="font-serif text-h1 text-white mb-4">
              Before & After Restoration Gallery
            </h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-8">
              Real results from completed leather restoration, recliner repair, furniture restoration,
              cushion refilling, auto interior repair, and boat upholstery projects in Philadelphia, Bucks
              County, Princeton, and South Jersey.
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

      {/* Category filter tabs */}
      <section className="bg-white border-b border-gray-soft sticky top-16 md:top-20 z-20">
        <div className="container-wide py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.slug ? `/gallery?category=${cat.slug}` : '/gallery'}
                className="flex-shrink-0 px-4 py-2 rounded-full text-small font-sans border border-gray-soft text-gray-dark hover:border-gold hover:text-leather transition-colors whitespace-nowrap"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real projects */}
      {allProjects.length > 0 && (
        <section className="section-padding bg-off-white">
          <div className="container-wide">
            <div className="space-y-16">
              {allProjects.map((project, i) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Slider */}
                  <div>
                    <BeforeAfterSlider
                      beforeSrc={project.before.src}
                      afterSrc={project.after.src}
                      beforeAlt={project.before.alt}
                      afterAlt={project.after.alt}
                    />
                    {project.before.caption && project.after.caption && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <p className="text-small text-gray-mid text-center font-sans">
                          Before: {project.before.caption}
                        </p>
                        <p className="text-small text-gray-mid text-center font-sans">
                          After: {project.after.caption}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="gold">{project.serviceTitle}</Badge>
                      {project.location && (
                        <Badge variant="soft">{project.location}</Badge>
                      )}
                    </div>
                    <h2 className="font-serif text-h3 text-black mb-4">{project.title}</h2>
                    <span className="block w-10 h-px bg-gold mb-5" />
                    <p className="text-body text-gray-dark leading-relaxed mb-5">{project.description}</p>
                    <ul className="space-y-1.5 mb-6">
                      {project.servicesPerformed.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-small text-gray-dark font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={CONTACT.smsHref}
                        className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-px"
                      >
                        I have a similar project
                      </a>
                      <Link
                        href={`/services/${project.serviceSlug}`}
                        className="inline-flex items-center justify-center gap-2 border border-gray-soft text-gray-dark hover:border-leather hover:text-leather font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200"
                      >
                        {project.serviceTitle} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Placeholder when more projects are coming */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="bg-off-white rounded-md border border-gray-soft p-10 text-center max-w-xl mx-auto">
            <h3 className="font-serif text-h3 text-black mb-3">More Projects Added Regularly</h3>
            <p className="text-body text-gray-dark mb-2">
              New completed projects are added as work is finished.
            </p>
            <p className="text-small text-gray-mid mb-6">
              Send photos of your own piece to get a written estimate for what is possible.
            </p>
            <a
              href={CONTACT.smsHref}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200"
            >
              Text Photos For A Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-off-white">
        <div className="container-wide">
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

