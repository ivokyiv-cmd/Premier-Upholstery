// Fetches reviews from Google Places API (New).
// Env vars (server-side only, set them in hosting settings):
//   GOOGLE_PLACES_API_KEY  — required
//   GOOGLE_PLACE_ID        — required; exact Place ID (ChIJ...) of the business.
//   No name search on purpose: it matched a different business with a similar name.
// Results are cached and refreshed once a day.

const REVALIDATE_SECONDS = 60 * 60 * 24

export interface GoogleReview {
  author: string
  authorPhoto?: string
  authorUrl?: string
  rating: number
  text: string
  relativeTime: string
  publishTime?: string
}

export interface GoogleReviewsData {
  rating: number
  totalReviews: number
  mapsUrl: string
  reviews: GoogleReview[]
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) return null

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=en`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) {
      console.error('Google Places API error', res.status, await res.text())
      return null
    }
    const json = await res.json()

    const reviews: GoogleReview[] = (json.reviews ?? [])
      .map((r: any) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        authorPhoto: r.authorAttribution?.photoUri,
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        publishTime: r.publishTime,
      }))
      .filter((r: GoogleReview) => r.text.trim().length > 0)

    return {
      rating: json.rating ?? 0,
      totalReviews: json.userRatingCount ?? 0,
      mapsUrl: json.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews,
    }
  } catch (err) {
    console.error('Failed to load Google reviews', err)
    return null
  }
}
