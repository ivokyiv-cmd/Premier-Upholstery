'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { FAQ as FAQType } from '@/data/faqs'

interface FAQProps {
  faqs: FAQType[]
  title?: string
  className?: string
}

function FAQItem({ q, a, isOpen, onToggle }: FAQType & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-soft last:border-0">
      <button
        onClick={onToggle}
        className="flex items-start justify-between w-full py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-body text-black group-hover:text-leather transition-colors">
          {q}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gold flex-shrink-0 mt-0.5 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-small text-gray-dark leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ({ faqs, title = 'Frequently Asked Questions', className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={cn('section-padding', className)}>
      <div className="container-narrow">
        <div className="text-center mb-10">
          <p className="label-text mb-4">FAQ</p>
          <h2 className="font-serif text-h2 text-black mb-4">{title}</h2>
          <span className="block w-12 h-px bg-gold mx-auto" />
        </div>
        <div className="bg-white rounded-md border border-gray-soft px-6 divide-y-0">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
