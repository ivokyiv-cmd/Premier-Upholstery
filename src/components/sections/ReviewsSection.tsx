export function ReviewsSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <p className="label-text mb-4">Customer Reviews</p>
          <h2 className="font-serif text-h2 text-black mb-4">What Customers Say</h2>
          <span className="block w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Placeholder — swap this div for a Google Reviews embed or review card grid */}
        <div className="bg-white rounded-md border border-gray-soft p-8 md:p-12 text-center max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <p className="text-body text-gray-dark mb-2">
            Customer reviews will be added as new projects are completed.
          </p>
          <p className="text-small text-gray-mid">
            We are committed to honest representation — only real reviews from real customers.
          </p>
        </div>
        {/* /google-reviews-slot */}
      </div>
    </section>
  )
}
