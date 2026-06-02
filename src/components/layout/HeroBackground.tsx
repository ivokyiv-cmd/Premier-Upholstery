/**
 * Единый фоновый слой для всех hero-секций сайта.
 * Тёплый espresso-градиент без фотографий + золотая линия снизу.
 */
export function HeroBackground() {
  return (
    <>
      {/* Тёплый коричневый градиент */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #3A1E08 0%, #4D2A0F 55%, #221204 100%)',
        }}
        aria-hidden="true"
      />
      {/* Gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />
    </>
  )
}
