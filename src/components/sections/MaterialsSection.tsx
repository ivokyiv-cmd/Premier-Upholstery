'use client'

import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/contact'

const materials = [
  {
    name: 'Protected Leather',
    description: 'The most common type. Has a polymer coating that protects against stains and makes it durable.',
  },
  {
    name: 'Pigmented Leather',
    description: 'Finished with pigment coatings for uniform color and strong resistance to fading.',
  },
  {
    name: 'Semi-Aniline Leather',
    description: 'Dyed throughout with a light protective coating that retains a natural feel.',
  },
  {
    name: 'Full Aniline Leather',
    description: 'The most natural leather feel. Dyed without surface coating, requiring careful handling.',
  },
  {
    name: 'Vinyl',
    description: 'Durable synthetic material used in commercial, medical, auto, and marine applications.',
  },
  {
    name: 'Synthetic Leather',
    description: 'PU and bonded leather alternatives used in furniture and auto interiors.',
  },
  {
    name: 'Commercial Upholstery',
    description: 'Heavy-duty fabric and vinyl materials designed for high-traffic commercial environments.',
  },
]

export function MaterialsSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <p className="label-text mb-4">Materials</p>
          <h2 className="font-serif text-h2 text-black mb-4">Leather & Materials We Work With</h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body text-gray-dark max-w-xl mx-auto">
            Different materials require different repair and refinishing methods. We work with a wide range
            of leather and upholstery surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="bg-white rounded-md border border-gray-soft p-5"
            >
              <div className="w-8 h-px bg-gold mb-3" />
              <h3 className="font-sans font-semibold text-body text-black mb-1.5">{material.name}</h3>
              <p className="text-small text-gray-mid leading-relaxed">{material.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-small text-gray-dark mb-4">
            Not sure what type of leather you have? Send photos and we will take a look.
          </p>
          <a
            href={CONTACT.smsHref}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-px"
          >
            Text Photos For A Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
