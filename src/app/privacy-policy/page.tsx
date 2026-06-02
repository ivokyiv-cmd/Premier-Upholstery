import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { HeroBackground } from '@/components/layout/HeroBackground'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Premier Leather & Upholstery.',
  robots: { index: false },
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
          <div className="mt-6">
            <h1 className="font-serif text-h1 text-white mb-4">Privacy Policy</h1>
            <span className="block w-12 h-px bg-gold" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-narrow">
          <div className="bg-white rounded-md border border-gray-soft p-8 md:p-10 prose prose-sm max-w-none font-sans text-gray-dark">
            <p className="text-small text-gray-mid mb-8">Last updated: {new Date().getFullYear()}</p>

            <h2 className="font-serif text-h3 text-black mb-3">Information We Collect</h2>
            <p className="mb-6">
              When you submit a quote request through our website, we collect the information you provide,
              including your name, phone number, email address, city or ZIP code, description of your
              repair needs, photos of damaged items, and preferred contact method.
            </p>

            <h2 className="font-serif text-h3 text-black mb-3">How We Use Your Information</h2>
            <p className="mb-6">
              We use the information you provide solely to respond to your estimate request, provide a
              written estimate, and follow up regarding scheduling service. We do not sell, share, or
              rent your personal information to third parties.
            </p>

            <h2 className="font-serif text-h3 text-black mb-3">Photos</h2>
            <p className="mb-6">
              Photos you submit are used only to assess the repair and prepare an estimate. Photos are not
              shared publicly without your explicit written permission.
            </p>

            <h2 className="font-serif text-h3 text-black mb-3">Contact</h2>
            <p className="mb-6">
              For questions about this policy, contact us at{' '}
              <a
                href="mailto:info@premierleatherupholstery.com"
                className="text-leather hover:text-espresso transition-colors"
              >
                info@premierleatherupholstery.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
