import { MessageSquare, FileText, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

interface FinalCTAProps {
  headline?: string
  subtext?: string
}

export function FinalCTA({
  headline = 'Ready to Restore Your Furniture?',
  subtext = 'Send photos of the damage and receive a written estimate before any commitment.',
}: FinalCTAProps) {
  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="container-wide text-center">
        <p className="label-text text-white/30 mb-5">Get Started Today</p>
        <h2 className="font-serif text-h2 text-white mb-4 text-balance">{headline}</h2>
        <span className="block w-12 h-px bg-gold mx-auto mb-6" />
        <p className="text-body-lg text-white/60 mb-3 max-w-xl mx-auto">{subtext}</p>
        <p className="text-small text-white/35 mb-10 max-w-lg mx-auto">
          Accurate pricing requires photos of the damaged area and the full piece.
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
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <FileText className="w-5 h-5" />
            Request Estimate
          </a>
        </div>
        <p className="mt-6 text-small text-white/25">
          Have a question?{' '}
          <a href={CONTACT.phoneHref} className="text-white/40 hover:text-white/60 transition-colors">
            <Phone className="w-3 h-3 inline mr-1" />
            Call With Questions: {CONTACT.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
