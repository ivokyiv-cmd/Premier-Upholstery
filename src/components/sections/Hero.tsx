'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileText, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { cn } from '@/lib/cn'

interface HeroProps {
  headline: string
  subheadline?: string
  supportingText?: string
  trustLine?: string
  imageSrc?: string
  imageAlt?: string
  size?: 'full' | 'medium' | 'short'
  overlay?: 'dark' | 'medium' | 'light'
  className?: string
  showAllCTAs?: boolean
}

export function Hero({
  headline,
  subheadline,
  supportingText,
  trustLine,
  imageSrc,
  imageAlt = 'Premier Leather & Upholstery',
  size = 'full',
  overlay = 'dark',
  className,
  showAllCTAs = false,
}: HeroProps) {
  const heights = {
    full: 'min-h-screen',
    medium: 'min-h-[60vh]',
    short: 'min-h-[44vh]',
  }

  const overlays = {
    dark: 'bg-black/60',
    medium: 'bg-black/45',
    light: 'bg-black/30',
  }

  return (
    <section
      className={cn(
        'relative flex items-center justify-center',
        heights[size],
        className
      )}
    >
      {/* Background */}
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={imageAlt}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-leather/80 to-black" />
      )}
      <div className={cn('absolute inset-0', overlays[overlay])} />

      {/* Content */}
      <div className="relative z-10 container-wide text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {subheadline && (
            <p className="label-text text-white/50 mb-5">{subheadline}</p>
          )}

          <h1 className="font-serif text-4xl md:text-5xl lg:text-display text-white mb-6 max-w-4xl mx-auto text-balance leading-tight">
            {headline}
          </h1>

          {supportingText && (
            <p className="text-body-lg text-white/75 mb-4 max-w-2xl mx-auto leading-relaxed">
              {supportingText}
            </p>
          )}

          {/* Pricing note */}
          <p className="text-small text-white/50 mb-8 max-w-xl mx-auto">
            Accurate pricing requires photos of the damaged area and the full piece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.smsHref}
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-hover w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              Text Photos For A Free Quote
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              Request Estimate
            </a>
            {showAllCTAs && (
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-white/50 hover:text-white/80 font-sans text-sm transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                Call With Questions
              </a>
            )}
          </div>

          {trustLine && (
            <p className="mt-6 text-small text-white/40 font-sans">{trustLine}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
