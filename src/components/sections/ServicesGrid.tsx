'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import * as Icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

interface ServiceCardProps {
  slug: string
  title: string
  shortDescription: string
  icon: string
  cardImage?: string
  index: number
}

function ServiceCard({ slug, title, shortDescription, icon, cardImage, index }: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
    >
      <Link
        href={`/services/${slug}`}
        className="group flex flex-col bg-white rounded-md border border-gray-soft overflow-hidden transition-all duration-300 hover:shadow-hover hover:border-gold/40 h-full"
      >
        {/* Photo or icon area */}
        <div className="relative aspect-[4/3] overflow-hidden" style={{ background: 'linear-gradient(135deg, #3A1E08, #4D2A0F)' }}>
          {cardImage ? (
            <>
              <Image
                src={cardImage}
                alt={`${title} — Premier Leather & Upholstery`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Warm gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Service title on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg text-white leading-snug drop-shadow-sm">
                  {title}
                </h3>
              </div>
            </>
          ) : (
            /* Fallback: icon on warm gradient */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-espresso to-leather/80">
              {IconComponent && (
                <IconComponent className="w-10 h-10 text-gold/70 mb-3" strokeWidth={1} />
              )}
              <h3 className="font-serif text-lg text-white text-center px-4">{title}</h3>
            </div>
          )}
        </div>

        {/* Text content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Title only shown when no card image (to avoid repeat) */}
          {!cardImage && null}

          <p className="text-small text-gray-dark leading-relaxed flex-1 mb-4">
            {shortDescription}
          </p>

          <span className="inline-flex items-center gap-1.5 text-small font-semibold font-sans text-leather group-hover:text-espresso group-hover:gap-2 transition-all duration-200 mt-auto">
            View Examples <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

interface ServicesGridProps {
  limit?: number
  className?: string
}

export function ServicesGrid({ limit, className }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayServices.map((service, i) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            shortDescription={service.shortDescription}
            icon={service.icon}
            cardImage={service.cardImage}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
