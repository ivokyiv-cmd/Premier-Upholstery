'use client'

import { motion } from 'framer-motion'
import { Car, FileImage, Palette, Sofa, Building2, TrendingDown } from 'lucide-react'

const features = [
  {
    icon: Car,
    title: 'Mobile Service',
    description:
      'We come to your home or business for most repairs, saving you the time and hassle of transporting heavy furniture.',
  },
  {
    icon: FileImage,
    title: 'Written Estimates',
    description:
      'Send photos and receive a written estimate with repair options before any commitment or scheduling.',
  },
  {
    icon: Palette,
    title: 'Professional Color Matching',
    description:
      'We restore color, finish, and appearance with careful attention to your original material and tone.',
  },
  {
    icon: Sofa,
    title: 'Furniture-First Expertise',
    description:
      'We specialize in furniture, recliners, cushions, leather, vinyl, and upholstery — not general repairs.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial',
    description:
      'We serve homeowners, offices, restaurants, hotels, medical spaces, fitness centers, and property managers.',
  },
  {
    icon: TrendingDown,
    title: 'Replacement Alternative',
    description:
      'Many pieces can be restored for significantly less than buying new furniture — without sacrificing quality.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-text mb-4">Why Premier</p>
          <h2 className="font-serif text-h2 text-black mb-4">
            Why Homeowners & Businesses Choose Us
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-leather" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-h4 text-black mb-2">{feature.title}</h3>
                  <p className="text-small text-gray-dark leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
