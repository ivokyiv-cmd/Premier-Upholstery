import { CONTACT } from '@/lib/contact'
import { MessageSquare, FileText, Phone } from 'lucide-react'

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-soft shadow-modal">
      <a
        href={CONTACT.smsHref}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-gold text-black gap-0.5 hover:bg-gold-light transition-colors duration-200"
        aria-label="Text photos for a free quote"
      >
        <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold font-sans uppercase tracking-wide leading-none">Text Photos</span>
      </a>

      <a
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-espresso text-white gap-0.5 hover:bg-leather transition-colors duration-200"
        aria-label="Request an estimate online"
      >
        <FileText className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold font-sans uppercase tracking-wide leading-none">Request Estimate</span>
      </a>

      <a
        href={CONTACT.phoneHref}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-black text-gray-mid gap-0.5 hover:text-white transition-colors duration-200"
        aria-label="Call with questions"
      >
        <Phone className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-[10px] font-sans uppercase tracking-wide leading-none">Call Questions</span>
      </a>
    </div>
  )
}
