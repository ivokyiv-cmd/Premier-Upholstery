'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MessageSquare, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { CONTACT } from '@/lib/contact'
import { mainNav } from '@/data/navigation'
import { MobileNav } from './MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesHover, setServicesHover] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-card'
            : 'bg-transparent'
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={cn(
                  'font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight transition-colors duration-300',
                  scrolled ? 'text-black' : 'text-white'
                )}
              >
                Premier
              </span>
              <span
                className={cn(
                  'font-sans text-[11px] uppercase tracking-[0.22em] transition-colors duration-300',
                  scrolled ? 'text-gray-mid' : 'text-white/80'
                )}
              >
                Leather &amp; Upholstery
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {mainNav.slice(0, -2).map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesHover(true)}
                      onMouseLeave={() => setServicesHover(false)}
                    >
                      <button
                        className={cn(
                          'flex items-center gap-1 text-small font-sans transition-colors duration-200',
                          scrolled ? 'text-gray-dark hover:text-black' : 'text-white/80 hover:text-white'
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn('w-3 h-3 transition-transform', servicesHover && 'rotate-180')} />
                      </button>

                      {servicesHover && (
                        /* Обёртка с pt-2 — прозрачный мост между кнопкой и меню,
                           чтобы курсор не "проваливался" в зазор */
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 z-50 pt-2">
                          <div className="bg-white rounded-md shadow-modal border border-gray-soft py-2">
                            {item.children.map((child) => {
                              if (child.divider) {
                                return <hr key="divider" className="my-2 border-gray-soft" />
                              }
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2 text-small font-sans text-gray-dark hover:text-leather hover:bg-off-white transition-colors duration-150"
                                >
                                  {child.label}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-small font-sans transition-colors duration-200',
                      scrolled ? 'text-gray-dark hover:text-black' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={CONTACT.smsHref}
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black text-small font-semibold font-sans px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px hover:shadow-hover"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={2} />
                Text Photos For A Free Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'md:hidden p-2 -mr-2 transition-colors',
                scrolled ? 'text-black' : 'text-white'
              )}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
