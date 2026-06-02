import Link from 'next/link'
import { MessageSquare, Mail, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { footerServiceLinks, footerAreaLinks, footerPageLinks } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-2xl font-semibold text-white leading-tight">Premier</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mt-0.5">
                Leather &amp; Upholstery
              </p>
            </div>
            <p className="text-small text-white/60 leading-relaxed mb-6">
              Mobile leather, vinyl, furniture, and upholstery restoration serving Bucks County, Philadelphia,
              Princeton, and South Jersey.
            </p>
            <div className="space-y-3">
              <a
                href={CONTACT.smsHref}
                className="flex items-center gap-2.5 text-small font-semibold text-gold hover:text-gold-light transition-colors"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                Text Photos For A Free Quote
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2.5 text-small text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 text-small text-white/40 hover:text-white/60 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                Call With Questions: {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {footerAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerPageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-small text-white/30">
            &copy; {new Date().getFullYear()} Premier Leather &amp; Upholstery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-small text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
