import type { Metadata } from 'next'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { FAQ } from '@/components/sections/FAQ'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { commercialFaqs } from '@/data/faqs'
import { CONTACT } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Commercial Upholstery Repair | Restaurants, Offices, Medical & Hotels',
  description:
    'Commercial leather, vinyl, and upholstery repair for restaurants, medical offices, hotels, fitness centers, waiting rooms, and offices in Bucks County, Philadelphia, and South Jersey.',
  alternates: { canonical: '/commercial-services' },
}

const industries = [
  { name: 'Restaurants & Cafes', desc: 'Booth seating, dining chairs, bar stools, and host area furniture.' },
  { name: 'Medical Offices', desc: 'Exam table padding, patient chairs, waiting room seating.' },
  { name: 'Dental Offices', desc: 'Dental chair upholstery, patient seating, reception furniture.' },
  { name: 'Hotels', desc: 'Guest room furniture, lobby seating, conference chairs.' },
  { name: 'Fitness Centers', desc: 'Gym equipment padding, bench seating, locker room furniture.' },
  { name: 'Corporate Offices', desc: 'Conference room chairs, executive seating, lobby furniture.' },
  { name: 'Waiting Rooms', desc: 'All types of waiting room seating вЂ” vinyl, leather, and fabric.' },
  { name: 'Property Managers', desc: 'Common area furniture, leasing office seating, amenity spaces.' },
]

const benefits = [
  'Reduce furniture replacement costs',
  'Minimize downtime and disruption',
  'Schedule multiple repairs in one visit',
  'Written estimates before commitment',
  'Maintain a clean, professional appearance',
  'Extend furniture service life significantly',
  'Improve customer and patient experience',
  'Commercial-grade materials and finishes',
]

export default function CommercialServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <HeroBackground />
        <div className="relative container-wide">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Commercial Services' }]} />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Commercial</p>
            <h1 className="font-serif text-h1 text-white mb-4">
              Commercial Upholstery Repair & Restoration
            </h1>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-4">
              Mobile service and workshop drop-off available for commercial clients. We help restaurants,
              medical offices, hotels, fitness centers, and businesses restore seating, reduce replacement
              costs, and maintain a professional appearance.
            </p>
            <p className="text-small text-white/40 mb-8">
              Accurate pricing requires photos. We can schedule multiple repairs in one visit.
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
                Request Commercial Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="label-text mb-4">Industries</p>
            <h2 className="font-serif text-h2 text-black mb-4">Industries We Serve</h2>
            <span className="block w-12 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-md border border-gray-soft p-5">
                <div className="w-8 h-px bg-gold mb-3" />
                <h3 className="font-sans font-semibold text-body text-black mb-2">{industry.name}</h3>
                <p className="text-small text-gray-dark leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-text mb-4">Why Choose Repair</p>
              <h2 className="font-serif text-h2 text-black mb-4">
                Benefits for Commercial Clients
              </h2>
              <span className="block w-12 h-px bg-gold mb-6" />
              <p className="text-body-lg text-gray-dark mb-6 leading-relaxed">
                Commercial furniture replacement is expensive and disruptive. Professional repair and
                restoration can keep seating looking and functioning well at a fraction of replacement
                cost вЂ” and we can often complete multiple repairs in a single scheduled visit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-small font-sans text-gray-dark">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo CTA */}
      <section className="section-padding-sm bg-off-white">
        <div className="container-wide">
          <PhotoQuoteCTA
            variant="inline"
            headline="Text Photos For A Commercial Estimate"
          />
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ faqs={commercialFaqs} title="Commercial Upholstery FAQ" className="bg-off-white" />

      <FinalCTA headline="Ready to Restore Your Commercial Seating?" />
    </>
  )
}

