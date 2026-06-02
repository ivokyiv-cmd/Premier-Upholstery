import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { BeforeAfterSlider } from './BeforeAfterSlider'

interface FeaturedProjectProps {
  title: string
  category: string
  description: string
  beforeSrc: string
  afterSrc: string
  services: string[]
  slug?: string
  className?: string
}

export function FeaturedProject({
  title,
  category,
  description,
  beforeSrc,
  afterSrc,
  services,
  slug,
  className,
}: FeaturedProjectProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Slider */}
        <div>
          <BeforeAfterSlider
            beforeSrc={beforeSrc}
            afterSrc={afterSrc}
            beforeAlt={`${title} — before restoration`}
            afterAlt={`${title} — after restoration`}
          />
          <p className="mt-3 text-small text-gray-mid text-center font-sans">
            Drag the slider to compare before and after
          </p>
        </div>

        {/* Details */}
        <div>
          <Badge variant="soft" className="mb-4">{category}</Badge>
          <h3 className="font-serif text-h3 text-black mb-4">{title}</h3>
          <span className="block w-10 h-px bg-gold mb-5" />
          <p className="text-body text-gray-dark leading-relaxed mb-6">{description}</p>

          <div className="mb-6">
            <p className="text-small font-semibold font-sans text-black mb-2 uppercase tracking-wider">Services Performed</p>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-small text-gray-dark font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {slug && (
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center gap-2 text-small font-semibold font-sans text-leather hover:text-espresso transition-colors"
            >
              View full project
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
