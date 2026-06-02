'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number) => Math.min(100, Math.max(0, v))

  const getPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    setPosition(clamp(((clientX - left) / width) * 100))
  }, [])

  /* Mouse */
  const onMouseDown = (e: React.MouseEvent) => { setDragging(true); getPosition(e.clientX) }
  const onMouseMove = useCallback((e: MouseEvent) => { if (dragging) getPosition(e.clientX) }, [dragging, getPosition])
  const onMouseUp = useCallback(() => setDragging(false), [])

  /* Touch */
  const onTouchMove = (e: React.TouchEvent) => getPosition(e.touches[0].clientX)

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, onMouseMove, onMouseUp])

  /* Keyboard for accessibility */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => clamp(p - 5))
    if (e.key === 'ArrowRight') setPosition((p) => clamp(p + 5))
  }

  return (
    <div className={cn('rounded-md overflow-hidden', className)}>
      {/* Slider container — aspect ratio preserved */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize"
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => getPosition(e.touches[0].clientX)}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* AFTER image — full width, always visible underneath */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement
            el.style.display = 'none'
          }}
        />

        {/* BEFORE image — clipped by position using clipPath (no math overflow) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement
              el.style.display = 'none'
            }}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-modal pointer-events-none z-10"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-hover flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <svg className="w-5 h-5 text-espresso" viewBox="0 0 20 20" fill="none">
            <path d="M7 10l-3-3m0 0l3-3m-3 3h12M13 10l3 3m0 0l-3 3m3-3H1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Before / After labels */}
        <span className="absolute top-3 left-3 z-10 bg-black/60 text-white text-[10px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 z-10 bg-black/60 text-white text-[10px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm pointer-events-none">
          After
        </span>

        {/* Placeholder when images are missing */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-espresso/20 to-leather/10 flex items-center justify-center">
          <p className="text-small text-gray-mid font-sans text-center px-4">Photo coming soon</p>
        </div>
      </div>

      {/* Drag instruction */}
      <p className="text-[11px] text-gray-mid font-sans text-center mt-2 select-none">
        ← Drag to compare →
      </p>
    </div>
  )
}
