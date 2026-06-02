'use client'

import { motion } from 'framer-motion'
import { Tag } from '@/components/ui/Tag'
import { CONTACT } from '@/lib/contact'

const problems = [
  'Cracked leather',
  'Faded color',
  'Worn armrests',
  'Torn seams',
  'Cat scratches',
  'Dog claw marks',
  'Sagging cushions',
  'Flattened foam',
  'Burn marks',
  'Small holes & tears',
  'Peeling finish',
  'Vinyl cracks',
  'Color loss',
  'Recliner wear',
  'Damaged panels',
  'Discoloration',
  'Stiff or dry leather',
  'Ink marks',
  'Scuffs & abrasions',
  'Split seams',
  'Sunken seat foam',
  'RV interior damage',
  'Boat seat cracks',
  'Auto seat tears',
]

export function ProblemsGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <p className="label-text mb-4">Common Repairs</p>
          <h2 className="font-serif text-h2 text-black mb-4">Common Upholstery Problems We Solve</h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body-lg text-gray-dark max-w-2xl mx-auto">
            Most damaged furniture does not need to be replaced. Many issues can be repaired, restored,
            recolored, or rebuilt at a fraction of replacement cost.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap gap-2.5 justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {problems.map((problem) => (
            <Tag key={problem}>{problem}</Tag>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-body text-gray-dark mb-5">
            Have one of these problems? Send clear photos and receive a written estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.smsHref}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-hover"
            >
              Text Photos For A Free Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
