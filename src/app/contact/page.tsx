import type { Metadata } from 'next'
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CONTACT } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Text Photos For A Free Quote',
  description:
    'Send photos for a free leather, vinyl, furniture, recliner, cushion, commercial, auto, boat, or RV upholstery restoration estimate in Bucks County, Philadelphia, and South Jersey.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Get a Free Quote' }]} />
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Free Estimate</p>
            <h1 className="font-serif text-h1 text-white mb-4">
              Text Photos For A Free Quote
            </h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70">
              The fastest way to get an accurate estimate is to send clear photos of the damaged area
              and the full furniture piece. Photos let us assess material type, damage severity, color
              matching requirements, and repair complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing transparency banner */}
      <div className="bg-gold py-4">
        <div className="container-wide">
          <p className="text-center text-small font-semibold font-sans text-black">
            Accurate pricing requires photos of the damaged area and the full piece. We cannot provide
            accurate estimates by phone вЂ” pricing depends on what we can see.
          </p>
        </div>
      </div>

      {/* Form + Contact Info */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-h2 text-black mb-2">Submit Estimate Request</h2>
              <p className="text-body text-gray-dark mb-8">
                Fill in your details and upload photos. We will review and follow up as quickly as possible.
              </p>
              <QuoteForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Text (primary) */}
              <div className="bg-gold/10 border border-gold/30 rounded-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-leather" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-body text-black">Text Photos (Fastest)</span>
                </div>
                <a
                  href={CONTACT.smsHref}
                  className="text-h4 font-serif text-leather hover:text-espresso transition-colors"
                >
                  {CONTACT.phone}
                </a>
                <p className="mt-2 text-small text-gray-dark">
                  Text clear photos of the damage and we will respond with a written estimate.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-md border border-gray-soft p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-gray-mid" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-body text-black">Call With Questions</span>
                </div>
                <a
                  href={CONTACT.phoneHref}
                  className="text-small font-sans text-gray-dark hover:text-black transition-colors"
                >
                  {CONTACT.phone}
                </a>
                <p className="mt-2 text-small text-gray-mid">
                  Phone is for general questions only. Pricing cannot be given without photos.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-md border border-gray-soft p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-gray-mid" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-body text-black">Email</span>
                </div>
                <a
                  href={CONTACT.emailHref}
                  className="text-small font-sans text-leather hover:text-espresso transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>


              {/* Service area */}
              <div className="bg-white rounded-md border border-gray-soft p-5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gray-mid" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-body text-black">Service Area</span>
                </div>
                <p className="text-small text-gray-dark leading-relaxed">
                  Mobile service throughout Bucks County, Montgomery County, Philadelphia, Princeton,
                  Cherry Hill, and South Jersey.
                </p>
                <p className="mt-2 text-small text-gray-mid">Workshop drop-off available by appointment.</p>
              </div>

              {/* How it works mini */}
              <div className="bg-off-white rounded-md border border-gray-soft p-5">
                <p className="font-sans font-semibold text-body text-black mb-4">How It Works</p>
                <ol className="space-y-3">
                  {[
                    'Send photos of the damage',
                    'We review and send a written estimate',
                    'Confirm scope of work',
                    'Schedule mobile service or drop-off',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold text-black text-[10px] font-bold font-sans flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-small font-sans text-gray-dark">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

