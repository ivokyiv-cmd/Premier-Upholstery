export type ServiceTier = 'primary' | 'additional'

export interface ServiceFAQ {
  q: string
  a: string
}

export interface Project {
  id: string
  title: string
  location?: string
  before: { src: string; alt: string; caption?: string }
  after: { src: string; alt: string; caption?: string }
  description: string
  servicesPerformed: string[]
}

export interface Service {
  slug: string
  title: string
  shortTitle?: string
  tier: ServiceTier
  icon: string
  cardImage?: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroImage?: string
  bannerImage?: string
  intro: string
  includes: string[]
  problems: string[]
  whyRepair: string
  faqs: ServiceFAQ[]
  relatedServices: string[]
  projects: Project[]
}

export const services: Service[] = [
  // ─── 1. LEATHER FURNITURE RESTORATION ────────────────────────────────────
  {
    slug: 'leather-restoration',
    title: 'Leather Furniture Restoration',
    tier: 'primary',
    icon: 'Sofa',
    cardImage: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-after.jpg',
    heroImage: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-after.jpg',
    bannerImage: '/images/hero/philadelphia-leather-restoration-banner.jpg',
    shortDescription:
      'Restore worn, faded, cracked, or damaged leather sofas, sectionals, dining chairs, and upholstered furniture — color restoration, crack repair, recoloring, pet damage, and seam repair.',
    metaTitle: 'Leather Furniture Restoration in Philadelphia & Bucks County | Premier Leather & Upholstery',
    metaDescription:
      'Professional leather furniture restoration — sofas, sectionals, dining chairs, and upholstered pieces. Color restoration, crack repair, recoloring, pet damage, and seam repair in Philadelphia, Bucks County, Princeton, and Cherry Hill.',
    heroHeadline: 'Leather Furniture Restoration',
    intro:
      'Worn leather sofas, faded sectionals, cracked dining chairs, and damaged upholstered furniture do not need to be replaced. Premier Leather & Upholstery provides professional leather repair, color restoration, recoloring, and refinishing throughout Philadelphia, Bucks County, Doylestown, Princeton, and Cherry Hill — with mobile service available and real before and after results.',
    includes: [
      'Leather crack and tear repair',
      'Color restoration and full recoloring',
      'Custom color matching',
      'Pet damage repair — scratches, claw marks, punctures',
      'Seam repair and panel replacement',
      'Faded leather restoration',
      'Surface refinishing and conditioning',
      'Protective finish application',
      'Vinyl repair and restoration',
      'Structural repair and reinforcement',
      'Stain and mark removal',
      'Cushion and foam replacement',
    ],
    problems: [
      'Cracked or peeling leather sofa',
      'Faded leather sectional or chair',
      'Pet scratches and claw damage',
      'Worn or darkened armrests',
      'Torn seams or panel edges',
      'Color loss from sun exposure',
      'Peeling or flaking finish',
      'Sagging or flat cushions',
      'Color inconsistency between panels',
      'Burn marks or punctures',
      'Staining and discoloration',
      'Damaged dining chair upholstery',
    ],
    whyRepair:
      'Replacing a quality leather sofa, sectional, or set of dining chairs can cost thousands of dollars — often for furniture of lesser quality than what you already own. Professional leather furniture restoration returns your piece to excellent condition at a fraction of replacement cost, while preserving the original character, scale, and feel.',
    faqs: [
      {
        q: 'What types of leather furniture do you restore?',
        a: 'Sofas, sectionals, recliners, dining chairs, accent chairs, ottomans, chesterfields, and any upholstered piece with leather, vinyl, or faux leather. Send photos and we will assess what is achievable.',
      },
      {
        q: 'Can you restore a multi-piece sectional consistently?',
        a: 'Yes. Color and finish consistency between sections is a core part of the process. We work across all sections to achieve a uniform result.',
      },
      {
        q: 'Can you match my original leather color?',
        a: 'Yes. We mix custom pigments to match your existing leather as closely as possible. For pieces with significant fading, we can also restore to a new chosen color.',
      },
      {
        q: 'Can you repair cat and dog damage on a leather sofa?',
        a: 'Many pet scratches, claw marks, and punctures can be repaired or significantly improved. For heavily damaged panels, targeted panel replacement is often the best solution. Send photos for an honest assessment.',
      },
      {
        q: 'What types of leather do you work with?',
        a: 'Protected leather, pigmented leather, semi-aniline leather, full aniline leather, vinyl, and synthetic leather. Each material requires a different approach — send photos and we will identify yours.',
      },
    ],
    relatedServices: ['recliner-repair', 'cushion-refilling-foam-replacement', 'commercial-upholstery'],
    projects: [
      {
        id: 'red-leather-tufted-armchair',
        title: 'Red Tufted Leather Armchair — Tear Repair & Color Restoration',
        before: {
          src: '/images/projects/furniture/red-leather-tufted-armchair-before.jpg',
          alt: 'Red tufted leather armchair before restoration — worn color, creased back and torn arm',
          caption: 'Worn finish, creased tufted back and a tear on the arm',
        },
        after: {
          src: '/images/projects/furniture/red-leather-tufted-armchair-restored-after.jpg',
          alt: 'Red tufted leather armchair after professional repair and color restoration',
          caption: 'Even, vibrant red finish with the arm tear repaired',
        },
        description:
          'This classic tufted armchair had a tear on the front of the arm, deep creasing across the tufted back, and a tired, uneven red finish. We repaired the tear, treated the creased areas, and restored a uniform vibrant red across the whole chair.',
        servicesPerformed: ['Arm tear repair', 'Crease and wear treatment on tufted back', 'Red color restoration', 'Protective finish'],
      },
      {
        id: 'red-leather-armchair-back-detail',
        title: 'Tufted Back Detail — Crease & Wear Correction',
        before: {
          src: '/images/projects/furniture/red-leather-armchair-back-crease-before.jpg',
          alt: 'Close-up of red tufted leather chair back with deep creases and worn color before repair',
          caption: 'Deep creases and worn color on the tufted back',
        },
        after: {
          src: '/images/projects/furniture/red-leather-armchair-back-restored-after.jpg',
          alt: 'Close-up of red tufted leather chair back after crease correction and color restoration',
          caption: 'Smooth, uniform finish around every tuft',
        },
        description:
          'A close look at the tufted back of the same armchair. Creases and worn spots around the buttons were treated and refinished so the color is consistent in every fold.',
        servicesPerformed: ['Crease treatment', 'Detail color work around tufting', 'Protective finish'],
      },
      {
        id: 'tan-leather-sofa',
        title: 'Tan Leather Sofa — Color Restoration',
        before: {
          src: '/images/projects/furniture/tan-leather-sofa-faded-before.jpg',
          alt: 'Tan leather sofa before restoration — faded, uneven color on seat cushions',
          caption: 'Faded, uneven color on seats and back cushions',
        },
        after: {
          src: '/images/projects/furniture/tan-leather-sofa-restored-after.jpg',
          alt: 'Tan leather sofa after professional leather color restoration',
          caption: 'Even tan color restored across the whole sofa',
        },
        description:
          'Sun exposure and daily use left this tan sofa with faded, patchy seat cushions. We cleaned and prepared the leather, then restored an even tan color across all cushions, arms and back.',
        servicesPerformed: ['Leather cleaning and preparation', 'Tan color restoration', 'Protective finish'],
      },
      {
        id: 'brown-leather-sofa',
        title: 'Brown Leather Sofa — Worn Finish Restoration',
        before: {
          src: '/images/projects/furniture/brown-leather-sofa-faded-closeup-before.jpg',
          alt: 'Brown leather sofa before restoration — worn, faded finish on cushions',
          caption: 'Worn, faded finish on seat and back cushions',
        },
        after: {
          src: '/images/projects/furniture/brown-leather-sofa-color-restored-after.jpg',
          alt: 'Brown leather sofa after professional color restoration — rich even brown',
          caption: 'Rich, even brown color restored',
        },
        description:
          'The finish on this brown leather sofa had worn through on the seats and back cushions. We restored a rich, even brown tone that matches the rest of the piece and protected it for daily use.',
        servicesPerformed: ['Leather preparation', 'Brown color restoration', 'Protective finish'],
      },
      {
        id: 'brown-leather-loveseat',
        title: 'Brown Leather Loveseat — Worn Seat Restoration',
        before: {
          src: '/images/projects/furniture/brown-leather-loveseat-before.jpg',
          alt: 'Close-up of dark brown leather loveseat seat cushion worn to a light, cracked surface before restoration',
          caption: 'Seat cushion worn down to a light, cracked surface',
        },
        after: {
          src: '/images/projects/furniture/brown-leather-loveseat-restored-after.jpg',
          alt: 'Dark brown leather loveseat after seat cushion color restoration',
          caption: 'Seats matched back to the original dark brown',
        },
        description:
          'Years of use wore the seat cushions of this loveseat down to a light, cracked surface while the rest stayed dark brown. We repaired the surface wear and color-matched the seats back to the original tone.',
        servicesPerformed: ['Surface wear repair', 'Dark brown color matching', 'Protective finish'],
      },
      {
        id: 'caramel-leather-sofa',
        title: 'Caramel Leather Sofa — Wear & Color Restoration',
        before: {
          src: '/images/projects/furniture/caramel-leather-sofa-worn-cushion-before.jpg',
          alt: 'Caramel leather sofa before restoration — worn seat cushion and discolored areas',
          caption: 'Worn, discolored seat and arm areas',
        },
        after: {
          src: '/images/projects/furniture/caramel-leather-sofa-restored-after.jpg',
          alt: 'Caramel leather sofa after professional leather restoration',
          caption: 'Uniform caramel color across the full sofa',
        },
        description:
          'This caramel leather sofa had worn and discolored areas on the seats and arms. We treated the worn spots and restored a uniform caramel color across the entire piece.',
        servicesPerformed: ['Wear repair on seats and arms', 'Caramel color restoration', 'Protective finish'],
      },
      {
        id: 'black-leather-sofa-tear',
        title: 'Black Leather Sofa — Back Tear Repair',
        before: {
          src: '/images/projects/furniture/black-leather-sofa-back-tear-before.jpg',
          alt: 'Black leather sofa with a tear and scuffs on the back cushion before repair',
          caption: 'Tear and scuffing on the back cushion',
        },
        after: {
          src: '/images/projects/furniture/black-leather-sofa-back-tear-repaired-after.jpg',
          alt: 'Black leather sofa after professional tear repair and color blending',
          caption: 'Tear repaired and blended into the surrounding leather',
        },
        description:
          'A tear and scuffs on the back cushion of this black leather sofa were repaired, filled and color-blended so the damaged area matches the surrounding leather.',
        servicesPerformed: ['Tear repair', 'Scuff correction', 'Black color blending', 'Protective finish'],
      },
      {
        id: 'gray-leather-pillow',
        title: 'Gray Leather Pillow — Damaged Panel Replacement & Re-Sewing',
        before: {
          src: '/images/projects/furniture/gray-leather-pillow-peeling-before.jpg',
          alt: 'Gray leather pillow with peeling, damaged leather panel before repair',
          caption: 'Peeling, badly damaged leather section',
        },
        after: {
          src: '/images/projects/furniture/gray-leather-pillow-restored-after.jpg',
          alt: 'Gray leather pillow after damaged sections were replaced with new material and re-sewn',
          caption: 'Damaged sections replaced with new material and re-sewn',
        },
        description:
          'The leather on part of this pillow was peeling beyond surface repair. Instead of replacing the whole piece, we cut out the damaged sections, sewed in new material and finished the seams cleanly.',
        servicesPerformed: ['Removal of damaged sections', 'New material panels', 'Re-sewing and seam finishing'],
      },
      {
        id: 'terra-cotta-leather-sectional',
        title: 'Leather Sectional — Color Restoration',
        location: 'Bucks County, PA',
        before: {
          src: '/images/projects/furniture/bucks-county-terra-cotta-leather-sectional-before.jpg',
          alt: 'Faded orange leather sectional before color restoration in Bucks County PA',
          caption: 'Faded and worn leather with significant color loss',
        },
        after: {
          src: '/images/projects/furniture/bucks-county-terra-cotta-leather-sectional-after.jpg',
          alt: 'Leather sectional after professional color restoration — rich terra cotta finish in Bucks County PA',
          caption: 'Rich terra cotta finish fully restored',
        },
        description:
          'This leather sectional had faded noticeably, losing the depth and saturation of the original color. We restored the leather to a vibrant terra cotta tone across all sections and applied a durable protective finish.',
        servicesPerformed: ['Color restoration — terra cotta finish', 'Multi-section consistency treatment', 'Protective sealant'],
      },
      {
        id: 'ornate-chesterfield-tufted-sofa',
        title: 'Ornate Tufted Sofa — Deep Leather Restoration',
        before: {
          src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-before.jpg',
          alt: 'Ornate carved Chesterfield sofa before leather restoration — worn dark brown leather',
          caption: 'Worn leather with faded finish on carved ornate sofa',
        },
        after: {
          src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-after.jpg',
          alt: 'Ornate Chesterfield sofa after professional leather restoration — deep rich chocolate leather',
          caption: 'Deep chocolate leather restored across tufted back and seat',
        },
        description:
          'The tufted back and seat of this ornate carved sofa required careful color treatment in every fold. We restored the leather to a deep chocolate finish that complements the hand-carved frame.',
        servicesPerformed: ['Leather preparation', 'Tufted back detail color restoration', 'Deep chocolate refinishing', 'Protective coat'],
      },
      {
        id: 'black-leather-sofa-scratch-restoration',
        title: 'Black Leather Sofa — Scratch & Wear Restoration',
        location: 'Philadelphia, PA',
        before: {
          src: '/images/projects/furniture/philadelphia-black-leather-sofa-scratch-damage-before.jpg',
          alt: 'Black leather sofa with severe cat scratch damage before restoration in Philadelphia PA',
          caption: 'Severe surface scratching and heavy wear throughout',
        },
        after: {
          src: '/images/projects/furniture/philadelphia-black-leather-sofa-scratch-damage-after.jpg',
          alt: 'Black leather sofa after professional scratch repair and restoration in Philadelphia PA',
          caption: 'Rich, uniform black leather fully restored',
        },
        description:
          'This black leather sofa had extensive surface damage covering seat cushions, back panels, and armrests. We repaired the surface damage, restored uniform black color, and applied a protective finish.',
        servicesPerformed: ['Surface damage repair', 'Black leather color restoration', 'Armrest intensive repair', 'Protective finish'],
      },
      {
        id: 'beige-to-caramel-large-sectional',
        title: 'Large Sectional — Leather Color Transformation',
        location: 'Princeton, NJ',
        before: {
          src: '/images/projects/furniture/princeton-beige-to-caramel-leather-sectional-before.jpg',
          alt: 'Faded beige leather sectional before color transformation in Princeton NJ',
          caption: 'Washed-out, faded beige across large curved sectional',
        },
        after: {
          src: '/images/projects/furniture/princeton-beige-to-caramel-leather-sectional-after.jpg',
          alt: 'Large sectional after leather color transformation to warm caramel in Princeton NJ',
          caption: 'Warm caramel leather — dramatic color transformation',
        },
        description:
          'This large curved sectional had faded to pale beige. The client chose to transform the color to warm caramel. We prepared the full leather surface and applied professional-grade color across every section.',
        servicesPerformed: ['Color transformation — beige to caramel', 'Multi-section evenness', 'Curved section handling', 'Protective finish'],
      },
      {
        id: 'blue-gray-to-navy-nailhead-sofa',
        title: 'Nailhead Sofa — Deep Navy Leather Restoration',
        location: 'Cherry Hill, NJ',
        before: {
          src: '/images/projects/furniture/cherry-hill-blue-gray-nailhead-sofa-before.jpg',
          alt: 'Faded blue-gray nailhead sofa before restoration in Cherry Hill NJ',
          caption: 'Faded, discolored leather with uneven wear',
        },
        after: {
          src: '/images/projects/furniture/cherry-hill-blue-gray-nailhead-sofa-after.jpg',
          alt: 'Nailhead leather sofa restored to deep navy in Cherry Hill NJ',
          caption: 'Rich deep navy leather with restored nailhead detail',
        },
        description:
          'This nailhead sofa had faded unevenly. The client wanted a richer, deeper navy. We restored color uniformity and deepened the tone while carefully treating around the nailhead trim.',
        servicesPerformed: ['Deep navy color restoration', 'Nailhead trim treatment', 'Seat and back intensive work', 'Sealant'],
      },
      {
        id: 'distressed-brown-nailhead-sofa',
        title: 'Heavily Damaged Leather Sofa — Full Restoration',
        location: 'Doylestown, PA',
        before: {
          src: '/images/projects/furniture/doylestown-distressed-brown-nailhead-sofa-before.jpg',
          alt: 'Heavily damaged brown leather sofa before restoration in Doylestown PA',
          caption: 'Severe damage, tears, and structural deterioration',
        },
        after: {
          src: '/images/projects/furniture/doylestown-distressed-brown-nailhead-sofa-after.jpg',
          alt: 'Brown leather sofa after full restoration in Doylestown PA',
          caption: 'Fully restored rich brown leather',
        },
        description:
          'Many would have discarded this piece. We performed structural repair, leather surface restoration, and full color treatment — returning it to a beautiful rich brown.',
        servicesPerformed: ['Structural repair', 'Leather surface restoration', 'Brown leather color restoration', 'Nailhead trim', 'Protective finish'],
      },
    ],
  },

  // ─── 2. RECLINER REPAIR ───────────────────────────────────────────────────
  {
    slug: 'recliner-repair',
    title: 'Recliner Repair',
    tier: 'primary',
    icon: 'Armchair',
    cardImage: '/images/projects/recliner/burgundy-leather-recliner-restored-after.jpg',
    heroImage: '/images/projects/recliner/burgundy-leather-recliner-restored-after.jpg',
    shortDescription:
      'Repair and restore worn recliners — leather restoration, cushion rebuilding, mechanism repair, cable replacement, and full refinishing.',
    metaTitle: 'Recliner Repair & Restoration in Philadelphia & Bucks County | Premier Leather & Upholstery',
    metaDescription:
      'Professional recliner repair including leather restoration, cushion rebuilding, mechanism repair, cable and spring replacement, and recoloring in Philadelphia, Bucks County, Princeton, and Cherry Hill.',
    heroHeadline: 'Recliner Repair & Restoration',
    intro:
      'Recliners are used every single day, and wear shows faster than on most furniture. We restore worn leather, rebuild sagging cushions, repair mechanisms, and recolor faded finishes — with mobile service available throughout Philadelphia, Bucks County, Doylestown, Princeton, and South Jersey.',
    includes: [
      'Leather restoration and refinishing',
      'Full recoloring and color matching',
      'Back cushion panel replacement',
      'Seat cushion foam replacement',
      'Armrest restoration',
      'Recliner mechanism repair',
      'Cable replacement',
      'Spring repair and replacement',
      'Power recliner repair',
      'Seam repair',
      'Pet damage repair on recliners',
      'Full surface preparation and protection',
    ],
    problems: [
      'Cracked or peeling leather',
      'Worn or darkened armrests',
      'Faded or discolored finish',
      'Sagging or compressed seat cushion',
      'Torn seams or panel edges',
      'Cat and dog scratches on leather',
      'Broken recliner mechanism',
      'Snapped or stretched cables',
      'Broken or worn springs',
      'Power recliner not functioning',
      'Wrinkled leather from weak padding',
    ],
    whyRepair:
      'A quality recliner can last decades. Most recliner damage is surface-level — leather, cushion, or mechanical issues that can be repaired without full replacement. Restoration often costs far less than a new chair of comparable quality, and preserves the fit and feel you are accustomed to.',
    faqs: [
      {
        q: 'Can you repair both the leather and the recliner mechanism?',
        a: 'Yes. We handle both cosmetic restoration — leather repair, recoloring, cushion rebuilding — and mechanical repairs including cable replacement, spring repair, and power recliner issues.',
      },
      {
        q: 'Can you replace just one panel on a recliner?',
        a: 'Yes. Panel replacement is one of our most common recliner repairs. We match the leather color and texture as closely as possible to the existing panels.',
      },
      {
        q: 'Do you come to my home for recliner repair?',
        a: 'Yes. Mobile service is available for most recliner repairs throughout Philadelphia, Bucks County, Princeton, and Cherry Hill. Many repairs can be completed on-site.',
      },
    ],
    relatedServices: ['leather-restoration', 'cushion-refilling-foam-replacement', 'furniture-restoration'],
    projects: [
      {
        id: 'gray-to-burgundy-chair-transformation',
        title: 'Leather Chair — Complete Restoration & Color Transformation',
        location: 'Bucks County, PA',
        before: {
          src: '/images/projects/recliner/damaged-gray-leather-recliner-before.jpg',
          alt: 'Heavily damaged gray leather armchair before full restoration — torn leather, severe wear, structural damage',
          caption: 'Severely damaged leather with structural wear throughout',
        },
        after: {
          src: '/images/projects/recliner/burgundy-leather-recliner-restored-after.jpg',
          alt: 'Beautiful burgundy leather armchair after complete professional restoration in Bucks County PA',
          caption: 'Full transformation — restored and recolored to rich burgundy',
        },
        description:
          'This leather armchair arrived with severe damage, structural wear, and DIY tape repairs that had failed throughout the piece. The client wanted a complete transformation — new color, repaired structure, and restored leather. We performed full leather restoration, structural repairs, and recolored the entire chair from gray to a rich, deep burgundy. The result is one of the most dramatic before and after transformations in our portfolio.',
        servicesPerformed: [
          'Full structural repair and reinforcement',
          'Leather surface preparation and restoration',
          'Professional recoloring — gray to burgundy',
          'Color uniformity across all surfaces',
          'Refinishing and protective finish',
          'Armrest and panel restoration',
        ],
      },
      {
        id: 'brown-leather-recliner-restoration',
        title: 'Brown Leather Recliner — Full Restoration & Cushion Reconstruction',
        before: {
          src: '/images/projects/recliner/brown-leather-recliner-restoration-before.jpg',
          alt: 'Brown leather recliner before restoration — worn leather, faded finish, and damaged back cushion from years of daily use',
          caption: 'Worn leather, faded finish, and a damaged back cushion showing years of daily use.',
        },
        after: {
          src: '/images/projects/recliner/brown-leather-recliner-restoration-after.jpg',
          alt: 'Brown leather recliner after professional restoration — reconstructed back cushion, renewed leather color and finish',
          caption: 'Professionally restored leather recliner with a reconstructed back cushion, renewed color, and refreshed premium appearance.',
        },
        description:
          'This leather recliner showed significant wear after years of daily use. In addition to restoring the leather surfaces, the upper back cushion required reconstruction and reupholstering due to damage and deterioration. The project combined upholstery repair and leather restoration to bring the chair back to a clean, comfortable, and premium appearance while preserving its original character.',
        servicesPerformed: [
          'Recliner disassembly',
          'Back cushion reconstruction and reupholstering',
          'Material matching to existing upholstery',
          'Leather surface restoration',
          'Color renewal and refinishing',
          'Wear and damage correction',
          'Protective topcoat application',
          'Final detailing and conditioning',
        ],
      },
    ],
  },

  // ─── 3. CUSHION REFILLING & FOAM REPLACEMENT ──────────────────────────────
  {
    slug: 'cushion-refilling-foam-replacement',
    title: 'Cushion Refilling & Foam Replacement',
    shortTitle: 'Cushion Refilling',
    tier: 'primary',
    icon: 'LayoutGrid',
    cardImage: '/images/projects/cushion/large-caramel-leather-sectional-cushion-restored-after.jpg',
    heroImage: '/images/projects/cushion/large-caramel-leather-sectional-cushion-restored-after.jpg',
    shortDescription:
      'Restore sagging sofa cushions, flattened foam, and uncomfortable seating — foam replacement, density upgrades, and cushion rebuilding.',
    metaTitle: 'Cushion Refilling & Foam Replacement in Bucks County & Philadelphia | Premier Leather & Upholstery',
    metaDescription:
      'Restore sagging cushions, replace flattened foam, and rebuild seat support in Bucks County, Philadelphia, Doylestown, Newtown, Princeton, and Cherry Hill. Mobile service available.',
    heroHeadline: 'Cushion Refilling & Foam Replacement',
    intro:
      'If your sofa, sectional, or recliner feels flat, soft, or uncomfortable, the problem is usually the foam — not the furniture itself. Professional foam replacement, cushion refilling, and seat rebuilding can restore comfort and support without replacing the entire piece.',
    includes: [
      'Foam replacement for sofa and sectional cushions',
      'Cushion refilling and rebuilding',
      'Density upgrades for firmer support',
      'Seat cushion core replacement',
      'Recliner cushion restoration',
      'Chair and dining cushion foam replacement',
      'Cushion reshaping and contouring',
      'Down and fiber wrap addition',
      'Custom-cut foam to fit existing covers',
      'Support layer reinforcement',
    ],
    problems: [
      'Sagging sofa or sectional cushions',
      'Flattened or compressed foam',
      'Uneven or lopsided seating',
      'Cushions that have lost their shape',
      'Wrinkled leather caused by weak padding',
      'Recliner seat that bottoms out',
      'Cushions that collapse when sitting',
      'Foam that has crumbled internally',
      'Uncomfortable dining chair seats',
    ],
    whyRepair:
      'New foam transforms an old sofa from uncomfortable to like-new. The leather, fabric, or vinyl cover is often still in excellent condition — the foam inside has simply broken down from years of use. This is one of the most cost-effective restorations available, often extending furniture life by many years.',
    faqs: [
      {
        q: 'Can you match the original firmness of my cushions?',
        a: 'Yes. We use different foam densities and firmness ratings and can help you choose a firmness that matches or improves on the original feel.',
      },
      {
        q: 'Do I need to remove the cushion covers?',
        a: 'In most cases we work with the covers on, removing and replacing the foam insert. Contact us to discuss your specific piece.',
      },
      {
        q: 'Can you replace foam in a sectional with many cushions?',
        a: 'Yes. We handle single cushions through large multi-seat sectionals. We can schedule a single visit to assess and replace all foam at once.',
      },
    ],
    relatedServices: ['furniture-restoration', 'recliner-repair', 'leather-restoration'],
    projects: [
      {
        id: 'large-caramel-sectional-cushion-restoration',
        title: 'Large Leather Sectional — Cushion Refilling & Foam Replacement',
        location: 'Philadelphia, PA',
        before: {
          src: '/images/projects/cushion/large-caramel-leather-sectional-cushion-collapse-before.jpg',
          alt: 'Large caramel leather sectional before cushion refilling — collapsed and sagging seat cushions throughout',
          caption: 'Collapsed seating — foam breakdown throughout every seat section',
        },
        after: {
          src: '/images/projects/cushion/large-caramel-leather-sectional-cushion-restored-after.jpg',
          alt: 'Large leather sectional after complete foam replacement and cushion refilling — fully restored support',
          caption: 'Fully restored shape, firmness, and support',
        },
        description:
          'This large leather sectional had complete foam breakdown in every seat cushion. The leather was in good condition but the seating had collapsed to the point of being uncomfortable. We replaced all foam cores throughout the entire sectional with high-density foam, restoring the full shape, support, and comfort the piece was designed to provide.',
        servicesPerformed: [
          'Full cushion assessment — all sections',
          'Complete foam core replacement',
          'High-density foam installation',
          'Shape and profile restoration',
          'Cover reinstallation and fit adjustment',
        ],
      },
      {
        id: 'ornate-chesterfield-cushion-restoration',
        title: 'Ornate Tufted Sofa — Cushion Rebuild & Leather Restoration',
        location: 'Newtown, PA',
        before: {
          src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-before.jpg',
          alt: 'Ornate tufted Chesterfield sofa before restoration — worn leather and collapsed cushions',
          caption: 'Worn leather with compressed seat cushions',
        },
        after: {
          src: '/images/projects/furniture/ornate-chesterfield-tufted-sofa-after.jpg',
          alt: 'Ornate tufted sofa after leather restoration and cushion rebuild in Newtown PA',
          caption: 'Deep chocolate leather fully restored with rebuilt seat support',
        },
        description:
          'This ornate carved sofa with tufted back required both leather restoration and seat cushion rebuilding. The seat cushions had compressed significantly and the leather had faded and worn. We rebuilt the foam core, restored the leather to a rich deep chocolate finish, and applied a protective seal.',
        servicesPerformed: [
          'Seat cushion foam replacement',
          'Leather surface preparation',
          'Deep chocolate color restoration',
          'Tufted back leather treatment',
          'Protective finish application',
        ],
      },
      {
        id: 'brown-loveseat-cushion-rebuild',
        title: 'Brown Leather Loveseat — Seat Cushion Rebuild',
        location: 'Yardley, PA',
        before: {
          src: '/images/projects/cushion/brown-leather-loveseat-cushion-rebuild-before.jpg',
          alt: 'Brown leather loveseat before cushion rebuild — collapsed and damaged seat cushion',
          caption: 'Collapsed seat cushion with complete foam breakdown',
        },
        after: {
          src: '/images/projects/cushion/brown-leather-loveseat-cushion-rebuild-after.jpg',
          alt: 'Brown leather loveseat after seat cushion rebuild — restored comfort and shape',
          caption: 'Rebuilt cushion with full support restored',
        },
        description:
          'The seat cushion on this brown leather loveseat had completely failed. The leather covering was still presentable but the seating was unusable. We rebuilt the cushion core with high-density foam and a supportive base, restoring full comfort without replacing the leather.',
        servicesPerformed: [
          'Full seat cushion core removal',
          'High-density foam installation',
          'Support base layer reinforcement',
          'Profile and shape restoration',
        ],
      },
    ],
  },

  // ─── 4. AUTO INTERIOR REPAIR ──────────────────────────────────────────────
  {
    slug: 'auto-interior-repair',
    title: 'Auto Interior Repair',
    tier: 'primary',
    icon: 'Car',
    cardImage: '/images/projects/auto/toyota-sequoia-tan-leather-seat-restored-after.jpg',
    heroImage: '/images/projects/auto/toyota-sequoia-tan-leather-seat-restored-after.jpg',
    shortDescription:
      'Leather and vinyl auto interior repair — seat bolster repair, color matching, crack repair, seam repair, and wear correction for cars in Philadelphia and Bucks County.',
    metaTitle: 'Auto Interior Leather Repair in Philadelphia & Bucks County | Premier Leather & Upholstery',
    metaDescription:
      'Professional auto interior leather repair including seat bolster repair, color matching, crack repair, seam repair, and wear correction in Philadelphia, Bucks County, and South Jersey.',
    heroHeadline: 'Auto Interior Leather Repair',
    intro:
      'A worn or damaged car interior affects both the look and value of your vehicle. We repair leather and vinyl auto interiors — including seat bolsters, door panels, consoles, and dashboards — throughout Philadelphia, Bucks County, Princeton, and South Jersey, often at your home or office.',
    includes: [
      'Leather seat crack and tear repair',
      'Seat bolster repair and restoration',
      'Color matching and recoloring',
      'Seam repair and stitching',
      'Vinyl dashboard and console repair',
      'Door panel restoration',
      'Surface refinishing and blending',
      'Armrest and headrest repair',
      'Wear area correction',
      'Protective finish application',
    ],
    problems: [
      'Cracked leather driver seat',
      'Worn or collapsed seat bolster',
      'Faded or dried leather interior',
      'Torn seams on car seats',
      'Cracked vinyl dashboard or console',
      'Sun-damaged door panels',
      'Color inconsistency from wear',
      'Small burns or punctures',
      'Armrest leather deterioration',
      'Headrest leather cracking',
    ],
    whyRepair:
      'Professional auto interior repair costs significantly less than reupholstery and preserves the original factory appearance of your vehicle. Many repairs can be completed at your home or office — no need to bring the car to a shop.',
    faqs: [
      {
        q: 'Can you come to my home or office for auto interior repair?',
        a: 'Yes. Mobile service for auto interior work is available throughout Philadelphia, Bucks County, and South Jersey. We come to your location.',
      },
      {
        q: 'Can you match my exact seat leather color?',
        a: 'Yes. We mix custom colors to match your existing interior as closely as possible, using professional colorant systems designed for automotive leather.',
      },
      {
        q: 'Can you repair just the bolster without replacing the whole seat cover?',
        a: 'Yes. Seat bolster repair is one of our most common auto interior repairs. We repair and blend the damaged area rather than replacing the entire seat cover.',
      },
    ],
    relatedServices: ['leather-restoration', 'boat-upholstery', 'rv-interior-restoration'],
    projects: [
      {
        id: 'toyota-sequoia-driver-seat',
        title: 'Toyota Sequoia — Tan Leather Driver Seat Restoration',
        before: {
          src: '/images/projects/auto/toyota-sequoia-tan-leather-seat-cracked-before.jpg',
          alt: 'Toyota Sequoia tan leather driver seat before repair — cracked, worn seat cushion',
          caption: 'Cracked, worn leather on the seat cushion',
        },
        after: {
          src: '/images/projects/auto/toyota-sequoia-tan-leather-seat-restored-after.jpg',
          alt: 'Toyota Sequoia tan leather driver seat after professional repair and color matching',
          caption: 'Smooth seat surface with factory-matched tan color',
        },
        description:
          'The driver seat cushion in this Toyota Sequoia was heavily cracked and worn from daily entry and exit. We repaired the damaged leather and matched the original tan color for a clean, factory-like finish.',
        servicesPerformed: ['Crack and wear repair', 'Factory tan color matching', 'Protective finish'],
      },
      {
        id: 'mercedes-driver-seat',
        title: 'Mercedes — Black Leather Driver Seat Repair',
        before: {
          src: '/images/projects/auto/mercedes-black-leather-driver-seat-wear-before.jpg',
          alt: 'Mercedes black leather driver seat before repair — creases and wear on seat cushion',
          caption: 'Creasing, cracks and wear on the seat cushion',
        },
        after: {
          src: '/images/projects/auto/mercedes-black-leather-driver-seat-restored-after.jpg',
          alt: 'Mercedes black leather driver seat after professional leather repair',
          caption: 'Even black finish restored',
        },
        description:
          'This Mercedes driver seat showed creasing and wear on the seat cushion and bolster. We repaired the worn areas and refinished the leather in matching black.',
        servicesPerformed: ['Seat cushion wear repair', 'Bolster treatment', 'Black color matching', 'Protective finish'],
      },
      {
        id: 'classic-car-seat-seam-repair',
        title: 'Classic Car Leather Seat — Seam Repair & Restoration',
        before: {
          src: '/images/projects/auto/classic-car-leather-seat-seam-split-before.jpg',
          alt: 'Classic car leather seat before repair — split seam along side bolster area',
          caption: 'Split seam and leather separation along the seat bolster',
        },
        after: {
          src: '/images/projects/auto/classic-car-leather-seat-seam-repaired-after.jpg',
          alt: 'Classic car leather seat after professional seam repair — clean, invisible repair',
          caption: 'Clean seam repair with precise color matching',
        },
        description:
          'This classic vehicle\'s leather seat had a split seam running along the side bolster — a common issue in vintage and classic cars. The leather had separated at the seam, leaving an open gap and potential for further tearing. We re-stitched and reinforced the seam, blended the repair area, and matched the cream leather color precisely to achieve an invisible result.',
        servicesPerformed: [
          'Seam assessment and structural preparation',
          'Re-stitching and seam reinforcement',
          'Leather surface repair at seam edges',
          'Precise cream color matching',
          'Blending and finish application',
          'Protective sealant',
        ],
      },
    ],
  },

  // ─── 6. BOAT UPHOLSTERY ───────────────────────────────────────────────────
  {
    slug: 'boat-upholstery',
    title: 'Boat Upholstery',
    tier: 'primary',
    icon: 'Anchor',
    cardImage: '/images/projects/boat/performance-boat-custom-diamond-stitch-marine-interior-after.jpg',
    heroImage: '/images/projects/boat/performance-boat-custom-diamond-stitch-marine-interior-after.jpg',
    shortDescription:
      'Custom marine upholstery, vinyl repair, diamond stitching, and boat seat restoration for vessels in Philadelphia, South Jersey, Princeton, and Bucks County.',
    metaTitle: 'Boat Upholstery in Philadelphia & South Jersey | Premier Leather & Upholstery',
    metaDescription:
      'Custom marine upholstery, boat seat repair, diamond stitching, and vinyl restoration for boats in Philadelphia, South Jersey, Princeton, and Bucks County.',
    heroHeadline: 'Custom Boat Upholstery & Marine Restoration',
    intro:
      'Marine upholstery takes a beating from sun, salt, and constant use. We restore, repair, and replace boat seating throughout Philadelphia, South Jersey, Princeton, and Bucks County — from cracked vinyl repair to fully custom marine upholstery with diamond stitching and premium materials.',
    includes: [
      'Custom marine upholstery',
      'Diamond stitching and custom patterns',
      'Boat seat vinyl repair and replacement',
      'Marine vinyl crack and tear repair',
      'Mildew-damaged upholstery restoration',
      'Color restoration for faded seats',
      'Seam repair and stitching',
      'Foam replacement for boat seats',
      'Helm seat restoration',
      'UV-resistant material installation',
    ],
    problems: [
      'Cracked or split marine vinyl',
      'Sun-faded boat seat upholstery',
      'Mildew-damaged seating',
      'Torn seams on boat seats',
      'Waterlogged or deteriorated foam',
      'Outdated appearance',
      'Separated vinyl layers',
      'Worn helm seat cushions',
      'Delaminating vinyl',
    ],
    whyRepair:
      'Marine upholstery replacement and custom work is an investment in your vessel\'s appearance and value. Whether you need a targeted repair or a complete custom interior transformation, we use marine-grade materials designed for UV resistance and moisture exposure.',
    faqs: [
      {
        q: 'Do you use marine-grade materials?',
        a: 'Yes. For all boat upholstery work, we use marine-grade vinyl and UV-resistant materials designed to withstand sun, moisture, and saltwater exposure.',
      },
      {
        q: 'Can you do custom stitching and patterns?',
        a: 'Yes. We offer custom marine upholstery including diamond stitching, custom color combinations, and premium material options.',
      },
      {
        q: 'Can you repair just one damaged seat?',
        a: 'Yes. We can repair individual seats and match the color and material to surrounding seating as closely as possible.',
      },
    ],
    relatedServices: ['rv-interior-restoration', 'auto-interior-repair', 'leather-restoration'],
    projects: [
      {
        id: 'marine-interior-diamond-stitch-custom',
        title: 'Performance Boat — Complete Custom Marine Interior',
        before: {
          src: '/images/projects/boat/performance-boat-original-marine-interior-before.jpg',
          alt: 'Performance boat before custom marine upholstery — original gray and white marine seating',
          caption: 'Original gray and white marine interior before transformation',
        },
        after: {
          src: '/images/projects/boat/performance-boat-custom-diamond-stitch-marine-interior-after.jpg',
          alt: 'Performance boat after custom marine upholstery — premium tan, cream, and blue diamond stitch interior',
          caption: 'Custom two-tone tan and cream diamond stitch interior with blue accent panels',
        },
        description:
          'This performance boat received a complete interior transformation. The original gray and white marine seating was replaced with a fully custom design featuring premium tan and cream marine vinyl with a diamond stitch pattern and bold blue accent panels. The result is a dramatic, show-quality interior that matches the performance character of the vessel. All materials are marine-grade and UV-resistant.',
        servicesPerformed: [
          'Full interior removal and assessment',
          'Foam core replacement throughout',
          'Custom two-tone marine vinyl selection',
          'Diamond stitch pattern design and fabrication',
          'Blue accent panel fabrication',
          'Professional interior installation',
          'UV-resistant material treatment',
          'Final fit and finish inspection',
        ],
      },
    ],
  },

  // ─── 7. RV INTERIOR RESTORATION ───────────────────────────────────────────
  {
    slug: 'rv-interior-restoration',
    title: 'RV Interior Restoration',
    tier: 'primary',
    icon: 'MapPin',
    cardImage: '/images/projects/rv/rv-captain-chair-headrest-restored-after.jpg',
    heroImage: '/images/projects/rv/rv-captain-chair-headrest-restored-after.jpg',
    shortDescription:
      'RV captain chair restoration, dinette cushion replacement, leather and vinyl repair, and interior restoration for motorhomes and travel trailers.',
    metaTitle: 'RV Interior Restoration in Philadelphia & Bucks County | Premier Leather & Upholstery',
    metaDescription:
      'Professional RV interior restoration including captain chair restoration, dinette cushion replacement, and leather and vinyl repair in Philadelphia, Bucks County, and South Jersey.',
    heroHeadline: 'RV Interior Restoration',
    intro:
      'RV interiors are exposed to sun, moisture, and constant use — and wear shows quickly in captain chairs, dinettes, and cab seating. We restore leather, vinyl, and fabric seating inside motorhomes and travel trailers throughout Philadelphia, Bucks County, and South Jersey.',
    includes: [
      'Captain chair leather and vinyl restoration',
      'Dinette cushion foam replacement',
      'Sleeper sofa restoration',
      'Vinyl crack and tear repair',
      'Leather repair and refinishing',
      'Color restoration for faded interiors',
      'Custom-cut foam replacement',
      'Seam repair and stitching',
      'Full cushion re-covering',
      'Power seat mechanism repair',
    ],
    problems: [
      'Cracked or peeling captain chair leather',
      'Faded cab seat upholstery',
      'Torn dinette cushion covers',
      'Flat or collapsed foam',
      'Sun-damaged interior surfaces',
      'Mildew-damaged upholstery',
      'Worn armrests on captain chairs',
      'Open seams on RV furniture',
    ],
    whyRepair:
      'RV interior restoration is far more economical than replacement upholstery, especially for custom-fit captain chairs and specialty seating. We work with standard materials and custom-cut foam to restore the comfort and appearance of your RV interior.',
    faqs: [
      {
        q: 'Can you come to the RV rather than me removing parts?',
        a: 'For many RV repairs, mobile service is available. Contact us to discuss the scope of work and we can determine the best approach.',
      },
      {
        q: 'Can you restore RV captain chairs specifically?',
        a: 'Yes. Captain chair restoration — including leather repair, recoloring, and foam replacement — is one of our most common RV interior services.',
      },
    ],
    relatedServices: ['boat-upholstery', 'auto-interior-repair', 'cushion-refilling-foam-replacement'],
    projects: [
      {
        id: 'rv-captain-chair-headrest-restoration',
        title: 'RV Captain Chair — Headrest Repair & Full Restoration',
        before: {
          src: '/images/projects/rv/rv-captain-chair-torn-headrest-before.jpg',
          alt: 'RV captain chair before restoration — torn headrest and damaged upholstery',
          caption: 'Torn headrest area with structural upholstery damage',
        },
        after: {
          src: '/images/projects/rv/rv-captain-chair-headrest-restored-after.jpg',
          alt: 'RV captain chair after professional headrest repair and full restoration — clean professional finish',
          caption: 'Fully restored captain chair — clean, professional appearance',
        },
        description:
          'This motorhome captain chair had a torn and damaged headrest along with general upholstery deterioration. The damage to the headrest was structural, requiring repair beyond surface treatment. We repaired the headrest structure, restored the upholstery surface throughout, and returned the chair to a clean, professional finish appropriate for a quality motorhome interior.',
        servicesPerformed: [
          'Headrest structural repair',
          'Upholstery surface preparation',
          'Seam repair at damaged areas',
          'Color matching and restoration',
          'Full surface refinishing',
          'Protective finish application',
        ],
      },
    ],
  },

  // ─── 8. COMMERCIAL UPHOLSTERY ─────────────────────────────────────────────
  {
    slug: 'commercial-upholstery',
    title: 'Commercial Upholstery',
    tier: 'primary',
    icon: 'Building2',
    cardImage: '/images/projects/furniture/cherry-hill-blue-gray-nailhead-sofa-after.jpg',
    heroImage: '/images/projects/furniture/cherry-hill-blue-gray-nailhead-sofa-after.jpg',
    shortDescription:
      'Professional upholstery repair and restoration for restaurants, hotels, medical offices, waiting rooms, fitness centers, and offices in Philadelphia and Bucks County.',
    metaTitle: 'Commercial Upholstery in Philadelphia & Bucks County | Premier Leather & Upholstery',
    metaDescription:
      'Commercial leather, vinyl, and upholstery repair for restaurants, medical offices, hotels, fitness centers, and waiting rooms in Philadelphia, Bucks County, Princeton, and Cherry Hill.',
    heroHeadline: 'Commercial Upholstery Repair & Restoration',
    intro:
      'Damaged seating affects the way customers, patients, and guests experience your business. We help commercial clients throughout Philadelphia, Bucks County, Princeton, and Cherry Hill restore furniture, reduce replacement costs, and maintain a professional appearance — with the ability to schedule multiple repairs in one visit.',
    includes: [
      'Restaurant booth and dining chair repair',
      'Medical and dental office seating',
      'Hotel furniture restoration',
      'Fitness equipment upholstery',
      'Office chair and reception seating',
      'Waiting room furniture restoration',
      'Leather and vinyl commercial seating',
      'Multi-piece scheduling in one visit',
      'Color matching for consistency',
      'Commercial-grade material replacement',
    ],
    problems: [
      'Torn restaurant booth seating',
      'Worn medical office chairs',
      'Hotel furniture damage and wear',
      'Cracked fitness equipment padding',
      'Damaged waiting room seating',
      'Office chair leather deterioration',
      'Heavy commercial wear on vinyl',
      'Color fading in high-traffic areas',
    ],
    whyRepair:
      'Commercial furniture replacement is expensive and disruptive. Professional repair keeps your seating looking and functioning well at a fraction of replacement cost — and we can complete multiple repairs in a single scheduled visit to minimize business disruption.',
    faqs: [
      {
        q: 'Can you schedule repairs during off-hours?',
        a: 'Yes. We work with commercial clients to schedule repairs at times that minimize impact on business operations.',
      },
      {
        q: 'Can you handle multiple pieces in one visit?',
        a: 'Yes. We encourage commercial clients to consolidate repairs into one scheduled visit to reduce total cost and disruption.',
      },
      {
        q: 'What industries do you serve?',
        a: 'We serve restaurants, cafes, medical offices, dental offices, hotels, fitness centers, corporate offices, waiting rooms, and property managers.',
      },
    ],
    relatedServices: ['leather-restoration', 'recliner-repair', 'auto-interior-repair'],
    projects: [
      {
        id: 'hotel-leather-chairs-restoration',
        title: 'Hotel Leather Chairs — Commercial Restoration',
        before: {
          src: '/images/projects/commercial/hotel-leather-chairs-restoration-before.jpg',
          alt: 'Hotel leather chairs before professional commercial upholstery restoration — worn and damaged seating',
          caption: 'Worn hotel seating showing significant use and surface deterioration.',
        },
        after: {
          src: '/images/projects/commercial/hotel-leather-chairs-restoration-after.jpg',
          alt: 'Hotel leather chairs after professional commercial upholstery restoration — clean and renewed appearance',
          caption: 'Professionally restored hotel seating with renewed leather finish and professional appearance.',
        },
        description:
          'These hotel leather chairs had experienced heavy commercial use, resulting in visible wear, surface deterioration, and a tired appearance. We restored the leather finish across all chairs, ensuring color consistency and a clean, professional result appropriate for a hospitality environment.',
        servicesPerformed: [
          'Commercial leather surface assessment',
          'Leather cleaning and preparation',
          'Color restoration and uniformity treatment',
          'Surface refinishing',
          'Protective topcoat application',
          'Final detailing',
        ],
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getPrimaryServices(): Service[] {
  return services.filter((s) => s.tier === 'primary')
}

export function getAdditionalServices(): Service[] {
  return services.filter((s) => s.tier === 'additional')
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}
