import { MessageSquare, FileText, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { cn } from '@/lib/cn'

type PhotoQuoteCTAVariant = 'inline' | 'banner' | 'sidebar'

interface PhotoQuoteCTAProps {
  variant?: PhotoQuoteCTAVariant
  headline?: string
  className?: string
}

export function PhotoQuoteCTA({
  variant = 'inline',
  headline = 'Text Photos For A Free Quote',
  className,
}: PhotoQuoteCTAProps) {
  if (variant === 'sidebar') {
    return (
      <div className={cn('bg-espresso text-white rounded-md p-6', className)}>
        <p className="font-serif text-h3 text-white mb-2 leading-tight">{headline}</p>
        <span className="block w-8 h-px bg-gold mb-4" />
        <p className="text-small text-white/70 mb-1">Send photos of the damage and receive a written estimate.</p>
        <p className="text-small text-white/50 mb-5 leading-relaxed">
          Accurate pricing requires photos of the damaged area and the full piece.
        </p>
        <div className="space-y-3">
          <a
            href={CONTACT.smsHref}
            className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-light text-black text-small font-semibold font-sans py-3 px-4 rounded-full transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            Text Photos For A Free Quote
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white text-small font-semibold font-sans py-3 px-4 rounded-full transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            Request Estimate Online
          </a>
        </div>
        <p className="mt-4 text-[11px] font-sans text-white/30 text-center">
          Have a question?{' '}
          <a href={CONTACT.phoneHref} className="hover:text-white/60 transition-colors">
            Call With Questions: {CONTACT.phone}
          </a>
        </p>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <section className={cn('bg-espresso py-16 md:py-20', className)}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-text text-white/40 mb-4">Get Started</p>
            <h2 className="font-serif text-h2 text-white mb-4 text-balance">{headline}</h2>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-body-lg text-white/70 mb-3">
              Send photos of the damage and receive a written estimate.
            </p>
            <p className="text-small text-white/50 mb-8 max-w-xl mx-auto">
              Accurate pricing requires photos of the damaged area and the full furniture piece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONTACT.smsHref}
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-gold w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5" />
                Text Photos For A Free Quote
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto justify-center border border-white/20"
              >
                <FileText className="w-5 h-5" />
                Request Estimate Online
              </a>
            </div>
            <p className="mt-6 text-small text-white/30">
              Have a question?{' '}
              <a href={CONTACT.phoneHref} className="hover:text-white/50 transition-colors">
                Call With Questions: {CONTACT.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  // inline (default)
  return (
    <div className={cn('bg-white border border-gray-soft rounded-md p-6 md:p-8', className)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <p className="font-serif text-h3 text-black mb-2 leading-tight">{headline}</p>
          <p className="text-body text-gray-dark mb-1">
            Send photos of the damage and receive a written estimate.
          </p>
          <p className="text-small text-gray-mid">
            Accurate pricing requires photos of the damaged area and the full piece.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={CONTACT.smsHref}
            className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-gold"
          >
            <MessageSquare className="w-4 h-4" />
            Text Photos
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 bg-transparent border border-black text-black hover:bg-black hover:text-white font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            Request Estimate
          </a>
        </div>
      </div>
      <p className="mt-4 pt-4 border-t border-gray-soft text-small text-gray-mid flex items-center gap-2">
        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
        <span>
          Have a question?{' '}
          <a href={CONTACT.phoneHref} className="hover:text-leather transition-colors">
            Call With Questions: {CONTACT.phone}
          </a>
          {' '}— pricing requires photos and cannot be given over the phone.
        </span>
      </p>
    </div>
  )
}
