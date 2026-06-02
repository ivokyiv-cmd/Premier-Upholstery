'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/cn'
import { CONTACT } from '@/lib/contact'
import { mainNav } from '@/data/navigation'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-off-white flex flex-col transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-soft">
          <span className="font-serif text-h4 text-black">Menu</span>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-dark hover:text-black transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Primary CTA */}
        <div className="px-6 py-4 bg-gold">
          <a
            href={CONTACT.smsHref}
            className="flex items-center justify-center gap-2 text-sm font-semibold font-sans text-black"
            onClick={onClose}
          >
            <MessageSquare className="w-4 h-4" />
            Text Photos For A Free Quote
          </a>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => {
              if (item.children) {
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-left text-body font-sans text-black hover:text-leather transition-colors border-b border-gray-soft/60"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn('w-4 h-4 transition-transform duration-200', servicesOpen && 'rotate-180')}
                      />
                    </button>
                    {servicesOpen && (
                      <ul className="mt-1 mb-2 space-y-0.5 pl-4">
                        {item.children
                          .filter((c) => !c.divider)
                          .map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block py-2.5 text-small font-sans text-gray-dark hover:text-leather transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                )
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3.5 text-body font-sans text-black hover:text-leather transition-colors border-b border-gray-soft/60"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer contact */}
        <div className="px-6 py-5 border-t border-gray-soft">
          <a
            href={CONTACT.phoneHref}
            className="text-small font-sans text-gray-mid hover:text-black transition-colors"
          >
            Call With Questions: {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  )
}
