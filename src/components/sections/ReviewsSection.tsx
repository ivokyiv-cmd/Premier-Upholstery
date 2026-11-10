import { Star } from 'lucide-react'
import { getGoogleReviews } from '@/lib/googleReviews'

function Stars({ rating, size = 'w-4 h-4' }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${size} ${i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-gray-soft'}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export async function ReviewsSection() {
  const data = await getGoogleReviews()

  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <div className="text-center mb-10">
          <p className="label-text mb-4">Customer Reviews</p>
          <h2 className="font-serif text-h2 text-black mb-4">What Customers Say</h2>
          <span className="block w-12 h-px bg-gold mx-auto" />
        </div>

        {data && data.reviews.length > 0 ? (
          <>
            <div className="flex flex-col items-center gap-2 mb-10">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl text-black">{data.rating.toFixed(1)}</span>
                <Stars rating={data.rating} size="w-6 h-6" />
              </div>
              <p className="text-small text-gray-mid">
                Based on {data.totalReviews} Google review{data.totalReviews === 1 ? '' : 's'}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.reviews.map((r, i) => (
                <article
                  key={`${r.author}-${i}`}
                  className="bg-white rounded-md border border-gray-soft p-6 flex flex-col"
                >
                  <Stars rating={r.rating} />
                  <p className="text-body text-gray-dark mt-4 mb-6 flex-1 line-clamp-[8]">{r.text}</p>
                  <div className="flex items-center gap-3">
                    {r.authorPhoto ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.authorPhoto}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center font-semibold text-leather">
                        {r.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-small font-semibold text-black">
                        {r.authorUrl ? (
                          <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {r.author}
                          </a>
                        ) : (
                          r.author
                        )}
                      </p>
                      <p className="text-small text-gray-mid">{r.relativeTime} · Google</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href={data.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-black text-black font-semibold font-sans py-3 px-6 rounded-full hover:bg-black hover:text-white transition-colors duration-200 min-h-[48px]"
              >
                Read All Reviews on Google
              </a>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </section>
  )
}
