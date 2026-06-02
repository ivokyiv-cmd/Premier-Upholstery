'use client'

import { motion } from 'framer-motion'
import { Camera, Search, FileText, CheckSquare, Calendar } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Send Photos',
    description: 'Take clear photos of the damaged area and one full photo of the complete item.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Review',
    description: 'We assess material type, damage severity, color matching needs, and repair complexity.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Written Estimate',
    description: 'You receive a written estimate with repair options — before any commitment.',
  },
  {
    number: '04',
    icon: CheckSquare,
    title: 'Confirm Scope',
    description: 'We review and confirm the scope of work together before scheduling.',
  },
  {
    number: '05',
    icon: Calendar,
    title: 'Schedule Service',
    description: 'Choose mobile service at your location or workshop drop-off by appointment.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-text mb-4">The Process</p>
          <h2 className="font-serif text-h2 text-black mb-4">
            Photo-Based Estimates. No Guesswork.
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body-lg text-gray-dark max-w-2xl mx-auto">
            We cannot provide accurate pricing by phone. Photos let us assess material type, damage
            severity, color matching requirements, and repair complexity — giving you a realistic
            written estimate before any commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-0 h-px bg-gray-soft" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-gray-soft mb-4 shadow-card">
                    <Icon className="w-7 h-7 text-leather" strokeWidth={1.5} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-[10px] font-bold font-sans flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-black mb-2">{step.title}</h3>
                  <p className="text-small text-gray-dark leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href={CONTACT.smsHref}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-hover"
          >
            Text Photos For A Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
