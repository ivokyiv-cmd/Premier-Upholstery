'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, Loader2 } from 'lucide-react'
import { PhotoUpload } from './PhotoUpload'
import { cn } from '@/lib/cn'
import { compressImage } from '@/lib/compressImage'

const MAX_UPLOAD_BYTES = 3.8 * 1024 * 1024

const serviceOptions = [
  'Furniture Restoration',
  'Leather Restoration',
  'Recliner Repair',
  'Cushion Refilling / Foam Replacement',
  'Pet Damage Repair',
  'Seam Repair / Panel Replacement',
  'Color Matching & Recoloring',
  'Vinyl Repair',
  'Auto Interior Restoration',
  'Boat / RV Upholstery',
  'Commercial Upholstery',
  'Not Sure',
]

interface FormValues {
  name: string
  phone: string
  email: string
  cityZip: string
  serviceType: string
  description: string
  preferredContact: 'text' | 'email' | 'phone'
  company?: string
}

const inputClasses =
  'w-full px-4 py-3 rounded-md border border-gray-soft bg-white font-sans text-body text-black placeholder:text-gray-mid focus:outline-none focus:border-leather focus:ring-1 focus:ring-leather/30 transition-colors duration-200 min-h-[48px]'

const labelClasses = 'block text-small font-semibold font-sans text-black mb-1.5'

export function QuoteForm() {
  const [photos, setPhotos] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { preferredContact: 'text' } })

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    setSubmitError(null)

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([k, v]) => formData.append(k, v ?? ''))

      // Compress photos so the whole request stays under the server upload limit (~4 MB)
      const compressed = await Promise.all(photos.map((p) => compressImage(p)))
      let total = 0
      let skipped = 0
      for (const photo of compressed) {
        if (total + photo.size > MAX_UPLOAD_BYTES) {
          skipped++
          continue
        }
        total += photo.size
        formData.append('photos', photo)
      }

      const res = await fetch('/api/quote', { method: 'POST', body: formData })

      if (res.ok) {
        if (skipped > 0) {
          console.warn(`${skipped} photo(s) were too large to attach`)
        }
        setSubmitted(true)
      } else {
        setSubmitError('There was an issue submitting your request. Please try again or text us directly.')
      }
    } catch {
      setSubmitError('There was an issue submitting your request. Please try again or text us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-md border border-gray-soft p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-serif text-h3 text-black mb-3">Estimate Request Received</h3>
        <p className="text-body text-gray-dark mb-2">
          Thank you. We will review your photos and follow up as quickly as possible.
        </p>
        <p className="text-small text-gray-mid">
          Clear photos help us provide better guidance and accurate estimate options.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot — hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Company
          <input {...register('company')} type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Name */}
      <div>
        <label className={labelClasses}>Name <span className="text-red-500">*</span></label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={cn(inputClasses, errors.name && 'border-red-400')}
        />
        {errors.name && <p className="mt-1 text-small text-red-600">{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClasses}>Phone <span className="text-red-500">*</span></label>
        <input
          {...register('phone', { required: 'Phone is required' })}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(XXX) XXX-XXXX"
          className={cn(inputClasses, errors.phone && 'border-red-400')}
        />
        {errors.phone && <p className="mt-1 text-small text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>Email <span className="text-red-500">*</span></label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Please enter a valid email address' },
          })}
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={cn(inputClasses, errors.email && 'border-red-400')}
        />
        {errors.email && <p className="mt-1 text-small text-red-600">{errors.email.message}</p>}
      </div>

      {/* City / ZIP */}
      <div>
        <label className={labelClasses}>City / ZIP Code</label>
        <input
          {...register('cityZip')}
          type="text"
          inputMode="text"
          autoComplete="postal-code"
          placeholder="City or ZIP code"
          className={inputClasses}
        />
      </div>

      {/* Service type */}
      <div>
        <label className={labelClasses}>Service Type <span className="text-red-500">*</span></label>
        <select
          {...register('serviceType', { required: 'Please select a service type' })}
          className={cn(inputClasses, 'cursor-pointer', errors.serviceType && 'border-red-400')}
        >
          <option value="">Select service type…</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-small text-red-600">{errors.serviceType.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className={labelClasses}>Description of Damage <span className="text-red-500">*</span></label>
        <textarea
          {...register('description', { required: 'Please describe the damage' })}
          rows={4}
          placeholder="Describe the damage, material type, and what you would like done…"
          className={cn(inputClasses, 'resize-y min-h-[120px]', errors.description && 'border-red-400')}
        />
        {errors.description && <p className="mt-1 text-small text-red-600">{errors.description.message}</p>}
      </div>

      {/* Photo upload */}
      <div>
        <label className={labelClasses}>Photos</label>
        <p className="text-small text-gray-mid mb-3 p-3 bg-gold/10 border border-gold/20 rounded-sm font-sans">
          For the most accurate estimate, please include clear photos of the damaged area and the full
          furniture piece or upholstery item.
        </p>
        <PhotoUpload onChange={setPhotos} />
      </div>

      {/* Preferred contact */}
      <div>
        <label className={labelClasses}>Preferred Contact Method</label>
        <div className="space-y-2.5">
          {[
            { value: 'text', label: 'Text Message', note: '(fastest response)' },
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone — for questions only (pricing requires photos)', note: '' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
              <input
                {...register('preferredContact')}
                type="radio"
                value={opt.value}
                className="w-4 h-4 accent-leather"
              />
              <span className="text-small font-sans text-black">
                {opt.label}{' '}
                {opt.note && <span className="text-gray-mid">{opt.note}</span>}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Error */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-small text-red-700">{submitError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light disabled:opacity-60 text-black font-semibold font-sans py-4 px-6 rounded-full text-base transition-all duration-200 hover:-translate-y-px hover:shadow-hover min-h-[52px]"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting…
          </>
        ) : (
          'Submit Estimate Request'
        )}
      </button>

      <p className="text-small text-gray-mid text-center leading-relaxed">
        Final pricing may depend on in-person inspection, material condition, color matching
        requirements, and repair complexity.
      </p>
    </form>
  )
}
