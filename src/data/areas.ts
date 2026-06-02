export interface Area {
  slug: string
  city: string
  state: 'PA' | 'NJ'
  county?: string
  metaTitle: string
  metaDescription: string
  headline: string
  intro: string
  serviceNote: string
  nearbyTowns: string[]
  relatedServices: string[]
}

export const areas: Area[] = [
  // Primary markets first
  {
    slug: 'philadelphia-pa',
    city: 'Philadelphia',
    state: 'PA',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Philadelphia PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, furniture restoration, and upholstery repair in Philadelphia, PA. Residential and commercial service. Text photos for a free estimate.',
    headline: 'Mobile Leather & Upholstery Restoration in Philadelphia, PA',
    intro:
      'Premier Leather & Upholstery provides mobile leather restoration, furniture repair, recliner restoration, and upholstery services throughout Philadelphia. We travel to your home, apartment, office, restaurant, or commercial space — no need to move heavy furniture.',
    serviceNote:
      'Mobile service is available throughout Philadelphia. Commercial clients: we can schedule multiple repairs in one visit. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Bensalem', 'Northeast Philadelphia', 'South Philadelphia', 'Germantown', 'Manayunk', 'Chestnut Hill', 'Roxborough'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'commercial-upholstery', 'recliner-repair', 'auto-interior-repair'],
  },
  {
    slug: 'doylestown-pa',
    city: 'Doylestown',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Doylestown PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, cushion refilling, and furniture restoration in Doylestown, PA. Send photos for a free written estimate.',
    headline: 'Mobile Leather & Upholstery Restoration in Doylestown, PA',
    intro:
      'Premier Leather & Upholstery provides mobile leather restoration, furniture repair, recliner repair, and cushion refilling throughout Doylestown and surrounding Bucks County. We come to your home or business.',
    serviceNote:
      'Mobile service is available for most repairs in Doylestown. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Warrington', 'Warminster', 'Newtown', 'New Britain', 'Chalfont', 'Buckingham', 'Lahaska'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'newtown-pa',
    city: 'Newtown',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Newtown PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, and furniture restoration in Newtown, PA and Newtown Township. Send photos for a free written estimate.',
    headline: 'Mobile Leather & Upholstery Restoration in Newtown, PA',
    intro:
      'Premier Leather & Upholstery provides mobile furniture, leather, and upholstery restoration in Newtown and nearby Bucks County areas. Residential and commercial service available.',
    serviceNote:
      'Mobile service is available in Newtown and Newtown Township. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Yardley', 'Doylestown', 'Richboro', 'Langhorne', 'Morrisville'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'yardley-pa',
    city: 'Yardley',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Yardley PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Yardley, PA. Photo-based estimates. Send photos for a free quote.',
    headline: 'Mobile Leather & Upholstery Restoration in Yardley, PA',
    intro:
      'Serving Yardley and surrounding Lower Makefield Township, Premier Leather & Upholstery provides mobile leather restoration, furniture repair, and upholstery services with photo-based written estimates.',
    serviceNote:
      'Mobile service is available in Yardley and Lower Makefield. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Newtown', 'Langhorne', 'Morrisville', 'Princeton NJ'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'langhorne-pa',
    city: 'Langhorne',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Langhorne PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, and upholstery services in Langhorne, PA. Photo-based estimates. Mobile service available.',
    headline: 'Mobile Leather & Upholstery Restoration in Langhorne, PA',
    intro:
      'Premier Leather & Upholstery serves Langhorne and surrounding Middletown Township with mobile leather restoration, furniture repair, and upholstery services.',
    serviceNote:
      'Mobile service available in Langhorne. Workshop drop-off available by appointment.',
    nearbyTowns: ['Yardley', 'Newtown', 'Bensalem', 'Levittown', 'Morrisville'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'commercial-upholstery', 'auto-interior-repair'],
  },
  {
    slug: 'princeton-nj',
    city: 'Princeton',
    state: 'NJ',
    county: 'Mercer County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Princeton NJ | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, furniture restoration, and upholstery services in Princeton, NJ. Send photos for a free written estimate.',
    headline: 'Mobile Leather & Upholstery Restoration in Princeton, NJ',
    intro:
      'Premier Leather & Upholstery serves Princeton and surrounding Mercer County with mobile leather restoration, furniture repair, recliner repair, and upholstery services. Residential and commercial service available.',
    serviceNote:
      'Mobile service is available in Princeton and surrounding Mercer County. Workshop drop-off available by appointment.',
    nearbyTowns: ['West Windsor', 'Lawrence Township', 'Plainsboro', 'East Windsor', 'Trenton', 'Yardley PA'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'cherry-hill-nj',
    city: 'Cherry Hill',
    state: 'NJ',
    county: 'Camden County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Cherry Hill NJ | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, recliner repair, and furniture restoration in Cherry Hill, NJ. Photo-based estimates. Serving South Jersey.',
    headline: 'Mobile Leather & Upholstery Restoration in Cherry Hill, NJ',
    intro:
      'Premier Leather & Upholstery serves Cherry Hill and surrounding South Jersey with mobile leather restoration, furniture repair, recliner repair, and commercial upholstery services.',
    serviceNote:
      'Mobile service is available in Cherry Hill and surrounding South Jersey. Workshop drop-off available by appointment.',
    nearbyTowns: ['Haddonfield', 'Voorhees', 'Marlton', 'Moorestown', 'Mount Laurel', 'Pennsauken'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'commercial-upholstery', 'recliner-repair', 'cushion-refilling-foam-replacement'],
  },
  // Extended service areas
  {
    slug: 'warrington-pa',
    city: 'Warrington',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Warrington PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Warrington, PA. Send photos for a free written estimate.',
    headline: 'Mobile Leather & Upholstery Restoration in Warrington, PA',
    intro:
      'Premier Leather & Upholstery serves Warrington and surrounding Bucks County with mobile leather restoration, furniture repair, and upholstery services.',
    serviceNote:
      'Mobile service is available throughout Warrington. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Doylestown', 'Warminster', 'Horsham', 'Chalfont', 'Hatboro'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'warminster-pa',
    city: 'Warminster',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Warminster PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Warminster, PA. Photo-based estimates. Mobile service available.',
    headline: 'Mobile Leather & Upholstery Restoration in Warminster, PA',
    intro:
      'Premier Leather & Upholstery serves Warminster and nearby Bucks County with mobile leather restoration, recliner repair, and upholstery services.',
    serviceNote:
      'Mobile service is available in Warminster. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Warrington', 'Horsham', 'Hatboro', 'Willow Grove', 'Richboro'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'commercial-upholstery', 'cushion-refilling-foam-replacement'],
  },
  {
    slug: 'richboro-pa',
    city: 'Richboro',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Richboro PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Richboro, PA. Photo-based estimates.',
    headline: 'Mobile Leather & Upholstery Restoration in Richboro, PA',
    intro:
      'Premier Leather & Upholstery serves Richboro and Northampton Township with mobile leather restoration, furniture repair, and upholstery services.',
    serviceNote:
      'Mobile service available in Richboro. Workshop drop-off available by appointment.',
    nearbyTowns: ['Newtown', 'Warminster', 'Holland', 'Churchville', 'Hatboro'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
  },
  {
    slug: 'bensalem-pa',
    city: 'Bensalem',
    state: 'PA',
    county: 'Bucks County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Bensalem PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and commercial upholstery services in Bensalem, PA. Photo-based estimates.',
    headline: 'Mobile Leather & Upholstery Restoration in Bensalem, PA',
    intro:
      'Premier Leather & Upholstery provides mobile leather restoration, furniture repair, and commercial upholstery services in Bensalem and surrounding Lower Bucks County.',
    serviceNote:
      'Mobile service is available in Bensalem. Workshop drop-off is also available by appointment.',
    nearbyTowns: ['Philadelphia', 'Levittown', 'Langhorne', 'Cornwells Heights', 'Torresdale'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'commercial-upholstery', 'recliner-repair', 'auto-interior-repair'],
  },
  {
    slug: 'horsham-pa',
    city: 'Horsham',
    state: 'PA',
    county: 'Montgomery County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Horsham PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Horsham, PA. Photo-based estimates. Mobile service throughout Montgomery County.',
    headline: 'Mobile Leather & Upholstery Restoration in Horsham, PA',
    intro:
      'Premier Leather & Upholstery serves Horsham and surrounding Montgomery County with mobile leather restoration, furniture repair, and upholstery services.',
    serviceNote:
      'Mobile service available in Horsham and throughout Montgomery County. Workshop drop-off available by appointment.',
    nearbyTowns: ['Warminster', 'Willow Grove', 'Hatboro', 'Ambler', 'Blue Bell', 'Fort Washington'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'commercial-upholstery', 'recliner-repair', 'cushion-refilling-foam-replacement'],
  },
  {
    slug: 'willow-grove-pa',
    city: 'Willow Grove',
    state: 'PA',
    county: 'Montgomery County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Willow Grove PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Willow Grove, PA. Photo-based estimates.',
    headline: 'Mobile Leather & Upholstery Restoration in Willow Grove, PA',
    intro:
      'Premier Leather & Upholstery serves Willow Grove and Abington Township with mobile leather restoration, furniture repair, and upholstery services.',
    serviceNote:
      'Mobile service available in Willow Grove and Abington Township. Workshop drop-off available by appointment.',
    nearbyTowns: ['Horsham', 'Abington', 'Hatboro', 'Glenside', 'Cheltenham', 'Jenkintown'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'cushion-refilling-foam-replacement', 'commercial-upholstery', 'recliner-repair'],
  },
  {
    slug: 'abington-pa',
    city: 'Abington',
    state: 'PA',
    county: 'Montgomery County',
    metaTitle: 'Mobile Leather & Upholstery Restoration in Abington PA | Premier Leather & Upholstery',
    metaDescription:
      'Mobile leather restoration, furniture repair, and upholstery services in Abington, PA. Photo-based estimates.',
    headline: 'Mobile Leather & Upholstery Restoration in Abington, PA',
    intro:
      'Premier Leather & Upholstery provides mobile leather restoration, furniture repair, and upholstery services in Abington and surrounding Montgomery County.',
    serviceNote:
      'Mobile service available in Abington. Workshop drop-off available by appointment.',
    nearbyTowns: ['Willow Grove', 'Glenside', 'Cheltenham', 'Jenkintown', 'Elkins Park'],
    relatedServices: ['leather-restoration', 'leather-restoration', 'recliner-repair', 'commercial-upholstery', 'cushion-refilling-foam-replacement'],
  },
]

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug)
}
