import { Car, Palette, Shield, Camera, Star, Layers, Droplets, Wrench } from 'lucide-react'

const reasons = [
  {
    icon: Car,
    title: 'Mobile Service Available',
    description:
      'We travel to your home or business. No need to move heavy furniture — mobile service throughout Philadelphia, Bucks County, Princeton, and South Jersey.',
  },
  {
    icon: Layers,
    title: 'Real Leather Specialists',
    description:
      'We specialize exclusively in leather, vinyl, and upholstery. Every job is treated by someone who works with these materials every day.',
  },
  {
    icon: Palette,
    title: 'Expert Color Matching',
    description:
      'Custom pigments mixed for every project. We match existing leather color as closely as possible — or help you choose a new direction.',
  },
  {
    icon: Droplets,
    title: 'Foam Replacement Experts',
    description:
      'From single cushions to full sectionals, we rebuild and replace foam to restore the original support, shape, and comfort of your furniture.',
  },
  {
    icon: Camera,
    title: 'Free Photo Estimates',
    description:
      'Send photos and receive a written estimate before any commitment. Accurate pricing requires seeing the damage — not a phone call.',
  },
  {
    icon: Star,
    title: 'Satisfaction Focused',
    description:
      'Every project is handled with attention to detail. We do not rush restoration work — the result has to be right.',
  },
]

export function TrustSection() {
  return (
    <section className="section-padding bg-espresso relative overflow-hidden">
      {/* Subtle warm texture at the edges */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/projects/furniture/brown-leather-sofa-color-restored-after.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative container-wide">
        <div className="text-center mb-14">
          <p className="label-text text-gold/60 mb-4">Why Choose Us</p>
          <h2 className="font-serif text-h2 text-white mb-4">
            Why Choose Premier Leather &amp; Upholstery
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body text-white/55 max-w-xl mx-auto">
            Philadelphia and Bucks County&apos;s professional leather restoration and upholstery
            repair specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="flex gap-4 p-6 rounded-md border border-white/8 bg-white/4 hover:bg-white/7 hover:border-gold/25 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/12 border border-gold/20 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-body text-white mb-2">{reason.title}</h3>
                  <p className="text-small text-white/50 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
