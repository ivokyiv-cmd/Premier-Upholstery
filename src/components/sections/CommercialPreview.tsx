import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

const industries = [
  'Restaurants & Cafes',
  'Medical Offices',
  'Dental Offices',
  'Hotels',
  'Fitness Centers',
  'Corporate Offices',
  'Waiting Rooms',
  'Property Managers',
  'Hospitality Businesses',
]

export function CommercialPreview() {
  return (
    <section className="section-padding bg-espresso">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-text text-white/40 mb-4">Commercial Services</p>
            <h2 className="font-serif text-h2 text-white mb-4">
              Commercial Upholstery Repair That Helps Your Business Look Professional
            </h2>
            <span className="block w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-white/70 mb-6 leading-relaxed">
              Worn seating can make a business look neglected. We help commercial clients restore seating,
              reduce replacement costs, and minimize downtime — with mobile service and the ability to
              schedule multiple repairs in one visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.smsHref}
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-hover"
              >
                Text Photos For A Free Quote
              </a>
              <Link
                href="/commercial-services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold font-sans px-6 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Commercial Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Industries We Serve
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center gap-3 py-2.5 border-b border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-small text-white/70 font-sans">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
