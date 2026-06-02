import type { Metadata } from 'next'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Leather & Upholstery Tips & Guides',
  description:
    'Leather care tips, furniture restoration guides, pet damage repair advice, and before and after project showcases from Premier Leather & Upholstery.',
  alternates: { canonical: '/blog' },
}

const categories = [
  'All',
  'Leather Care',
  'Furniture Restoration',
  'Pet Damage Repair',
  'Recliner Repair',
  'Foam Replacement',
  'Commercial Upholstery',
  'Before & After Projects',
]

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Tips & Guides</p>
            <h1 className="font-serif text-h1 text-white mb-4">Leather & Upholstery Tips & Guides</h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70">
              Leather care advice, furniture restoration guides, pet damage repair tips, and real before and
              after project showcases.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-wide">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-small font-sans border ${
                  cat === 'All'
                    ? 'bg-gold text-black border-gold'
                    : 'bg-white text-gray-dark border-gray-soft'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Placeholder */}
          <div className="bg-white rounded-md border border-gray-soft p-12 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">рџ“ќ</span>
            </div>
            <h3 className="font-serif text-h3 text-black mb-3">Articles Coming Soon</h3>
            <p className="text-body text-gray-dark mb-2">
              Guides, tips, and project showcases are being added regularly.
            </p>
            <p className="text-small text-gray-mid">
              In the meantime, send photos of your furniture for a free written estimate.
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

