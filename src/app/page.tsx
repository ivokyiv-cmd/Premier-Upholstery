import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageSquare, FileText, Phone } from 'lucide-react'
import { HeroBackground } from '@/components/layout/HeroBackground'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProblemsGrid } from '@/components/sections/ProblemsGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TrustSection } from '@/components/sections/TrustSection'
import { CommercialPreview } from '@/components/sections/CommercialPreview'
import { ServiceAreaSection } from '@/components/sections/ServiceAreaSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { PhotoQuoteCTA } from '@/components/shared/PhotoQuoteCTA'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { Badge } from '@/components/ui/Badge'
import { CONTACT } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Leather, Upholstery & Furniture Restoration in Philadelphia & Bucks County',
  description:
    'Mobile leather restoration, recliner repair, furniture restoration, cushion refilling, auto interior, boat upholstery, and commercial upholstery in Philadelphia, Bucks County, Doylestown, Princeton, and Cherry Hill.',
  openGraph: {
    title: 'Premier Leather & Upholstery | Philadelphia & Bucks County',
    description:
      'Text photos for a free written estimate. Mobile service throughout Philadelphia, Bucks County, Princeton, and South Jersey.',
    url: '/',
  },
  alternates: { canonical: '/' },
}

/* ── Featured portfolio projects ─────────────────────────────────────────── */
const portfolio = [
  {
    id: 'burgundy-recliner',
    title: 'Leather Chair — Complete Restoration & Color Transformation',
    location: 'Bucks County, PA',
    serviceLabel: 'Recliner Repair',
    serviceSlug: 'recliner-repair',
    before: {
      src: '/images/projects/recliner/damaged-gray-leather-recliner-before.jpg',
      alt: 'Heavily damaged gray leather recliner before restoration',
    },
    after: {
      src: '/images/projects/recliner/burgundy-leather-recliner-restored-after.jpg',
      alt: 'Burgundy leather recliner after complete restoration in Bucks County PA',
    },
    description:
      'Severely damaged recliner with structural wear and failed repairs. Completely restored and recolored from gray to rich burgundy — one of the most dramatic transformations in our portfolio.',
  },
  {
    id: 'boat-interior',
    title: 'Performance Boat — Custom Marine Interior',
    serviceLabel: 'Boat Upholstery',
    serviceSlug: 'boat-upholstery',
    before: {
      src: '/images/projects/boat/performance-boat-original-marine-interior-before.jpg',
      alt: 'Performance boat original marine interior before custom upholstery',
    },
    after: {
      src: '/images/projects/boat/performance-boat-custom-diamond-stitch-marine-interior-after.jpg',
      alt: 'Performance boat after custom diamond stitch marine upholstery in tan, cream, and blue',
    },
    description:
      'Full custom marine interior — tan and cream diamond stitch with bold blue accents. Marine-grade UV-resistant materials throughout.',
  },
  {
    id: 'chesterfield-sofa',
    title: 'Ornate Tufted Sofa — Deep Leather Restoration',
    serviceLabel: 'Leather Furniture Restoration',
    serviceSlug: 'leather-restoration',
    before: {
      src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-before.jpg',
      alt: 'Ornate Chesterfield sofa before leather restoration — worn dark leather',
    },
    after: {
      src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-after.jpg',
      alt: 'Ornate Chesterfield sofa after professional leather restoration — deep chocolate',
    },
    description:
      'Full leather restoration on an ornate carved tufted sofa. Deep chocolate color restored in every tufted fold and across seat cushions.',
  },
  {
    id: 'foam-sectional',
    title: 'Large Leather Sectional — Foam Replacement',
    location: 'Philadelphia, PA',
    serviceLabel: 'Cushion Refilling',
    serviceSlug: 'cushion-refilling-foam-replacement',
    before: {
      src: '/images/projects/cushion/large-caramel-leather-sectional-cushion-collapse-before.jpg',
      alt: 'Large leather sectional before cushion refilling — collapsed and sagging cushions',
    },
    after: {
      src: '/images/projects/cushion/large-caramel-leather-sectional-cushion-restored-after.jpg',
      alt: 'Large leather sectional after foam replacement and cushion refilling',
    },
    description:
      'Complete foam breakdown in every seat cushion. Full foam core replacement throughout — shape, support, and comfort fully restored.',
  },
]

/* ── Trust badges ─────────────────────────────────────────────────────────── */
const trustBadges = [
  'Expert Craftsmanship',
  'Mobile Service Available',
  'Free Photo Estimates',
  'Satisfaction Guaranteed',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO — centered, warm leather ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Тёплый коричневый фон */}
        <HeroBackground />

        {/* Content — fully centred */}
        <div className="relative z-10 w-full container-wide py-24 md:py-36 text-center">
          <div className="max-w-4xl mx-auto">

            {/* Location tag */}
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-gold/50" />
              <span className="label-text text-gold/75">
                Philadelphia · Bucks County · Princeton · South Jersey
              </span>
              <span className="h-px w-10 bg-gold/50" />
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-4xl sm:text-[2.8rem] lg:text-h1 text-white mb-6 leading-tight tracking-tight">
              Leather, Upholstery &amp; Furniture Restoration
            </h1>

            {/* Service tags — immediately communicates what we do */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
              {['Leather Restoration', 'Recliner Repair', 'Furniture Restoration', 'Upholstery Repair', 'Mobile Service'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-gold/25 bg-white/5 text-white/65 font-sans text-small"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subheadline */}
            <p className="text-body-lg text-white/70 mb-3 max-w-2xl mx-auto leading-relaxed">
              Mobile service throughout Philadelphia, Bucks County, Princeton, and South Jersey.
            </p>
            <p className="text-small text-white/35 font-sans mb-10">
              Send photos for a free written estimate — accurate pricing requires seeing the damage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={CONTACT.smsHref}
                className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-9 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-gold w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5" strokeWidth={2} />
                Text Photos For A Free Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/12 text-white font-semibold font-sans px-9 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto"
              >
                <FileText className="w-5 h-5" strokeWidth={2} />
                Request Estimate
              </a>
              <a
                href={CONTACT.phoneHref}
                className="text-white/40 hover:text-white/70 font-sans text-sm transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                Call With Questions
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {trustBadges.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                  <span className="text-small text-white/50 font-sans">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO QUOTE CTA ────────────────────────────────────────────────── */}
      <section className="bg-off-white py-10 md:py-14">
        <div className="container-wide">
          <PhotoQuoteCTA variant="inline" />
        </div>
      </section>

      {/* ── FEATURED PORTFOLIO — large alternating sliders ────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="label-text mb-4">Our Work</p>
            <h2 className="font-serif text-h2 text-black mb-4">
              Real Projects. Real Results.
            </h2>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-body-lg text-gray-dark max-w-2xl mx-auto">
              Every project below is real work completed for clients in Philadelphia, Bucks County,
              Princeton, and South Jersey. Drag the sliders to compare.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {portfolio.map((project, i) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Slider */}
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <BeforeAfterSlider
                    beforeSrc={project.before.src}
                    afterSrc={project.after.src}
                    beforeAlt={project.before.alt}
                    afterAlt={project.after.alt}
                  />
                </div>

                {/* Copy */}
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <Badge variant="gold">{project.serviceLabel}</Badge>
                    {project.location && <Badge variant="soft">{project.location}</Badge>}
                  </div>
                  <h3 className="font-serif text-h3 text-black mb-4 leading-snug">{project.title}</h3>
                  <span className="block w-10 h-px bg-gold mb-5" />
                  <p className="text-body text-gray-dark leading-relaxed mb-7">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={CONTACT.smsHref}
                      className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-gold"
                    >
                      <MessageSquare className="w-4 h-4" />
                      I have a similar project
                    </a>
                    <Link
                      href={`/services/${project.serviceSlug}`}
                      className="inline-flex items-center justify-center gap-2 border border-gray-soft text-gray-dark hover:border-leather hover:text-leather font-semibold font-sans px-6 py-3 rounded-full text-sm transition-all duration-200"
                    >
                      {project.serviceLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              View Full Project Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="label-text mb-4">Services</p>
            <h2 className="font-serif text-h2 text-black mb-4">
              Leather &amp; Upholstery Restoration Services
            </h2>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-body-lg text-gray-dark max-w-2xl mx-auto">
              From worn leather sofas and recliners to auto interiors, marine upholstery, and
              commercial seating — professional restoration throughout Philadelphia and Bucks County.
            </p>
          </div>
          <ServicesGrid />
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-small font-semibold font-sans text-leather hover:text-espresso transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ──────────────────────────────────────────────────────── */}
      <ProblemsGrid />

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── TRUST SECTION ─────────────────────────────────────────────────── */}
      <TrustSection />

      {/* ── MOBILE SERVICE ────────────────────────────────────────────────── */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-text mb-4">Mobile Service</p>
              <h2 className="font-serif text-h2 text-black mb-4">We Come to You</h2>
              <span className="block w-12 h-px bg-gold mb-6" />
              <p className="text-body-lg text-gray-dark mb-5 leading-relaxed">
                Mobile service is available for most repairs throughout Philadelphia, Bucks County,
                Doylestown, Newtown, Yardley, Langhorne, Princeton, Cherry Hill, and South Jersey.
              </p>
              <p className="text-body text-gray-dark leading-relaxed">
                No need to move heavy furniture. We travel to your home, apartment, office, restaurant,
                or commercial space and perform most repairs on-site.
              </p>
            </div>
            <div className="bg-white rounded-md border border-gray-soft divide-y divide-gray-soft overflow-hidden">
              {[
                { label: 'Primary Areas', value: 'Philadelphia · Bucks County · Doylestown · Newtown · Yardley · Princeton NJ · Cherry Hill NJ' },
                { label: 'Mobile Service', value: 'Most repairs performed at your location' },
                { label: 'Workshop Drop-off', value: 'Available by appointment' },
                { label: 'Commercial', value: 'Multiple repairs per visit — reduced cost' },
                { label: 'Estimates', value: 'Photo-based written estimates, not by phone' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 p-4">
                  <span className="text-small font-semibold font-sans text-black w-32 flex-shrink-0">{label}</span>
                  <span className="text-small font-sans text-gray-dark">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL ────────────────────────────────────────────────────── */}
      <CommercialPreview />

      {/* ── SERVICE AREAS ─────────────────────────────────────────────────── */}
      <ServiceAreaSection />

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-espresso">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative container-wide text-center">
          <p className="label-text text-white/30 mb-5">Get Started</p>
          <h2 className="font-serif text-h2 text-white mb-4 text-balance">
            Ready to Restore Your Furniture?
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body-lg text-white/65 mb-3 max-w-xl mx-auto">
            Send photos of the damage and receive a written estimate before any commitment.
          </p>
          <p className="text-small text-white/30 mb-10 max-w-lg mx-auto">
            Accurate pricing requires photos of the damaged area and the full piece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.smsHref}
              className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-black font-semibold font-sans px-9 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-gold w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              Text Photos For A Free Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/12 text-white font-semibold font-sans px-9 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              Request Estimate
            </a>
          </div>
          <p className="mt-6 text-small text-white/25">
            Questions only?{' '}
            <a href={CONTACT.phoneHref} className="text-white/40 hover:text-white/60 transition-colors">
              <Phone className="w-3 h-3 inline mr-1" />
              Call With Questions: {CONTACT.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
