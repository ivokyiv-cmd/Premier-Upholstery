'use client'

import { useState, useRef } from 'react'
import { Upload, X, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface PhotoUploadProps {
  onChange: (files: File[]) => void
  maxFiles?: number
  maxSizeMB?: number
}

export function PhotoUpload({ onChange, maxFiles = 10, maxSizeMB = 10 }: PhotoUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const addFiles = (newFiles: FileList | File[]) => {
    setError(null)
    const arr = Array.from(newFiles)
    const valid: File[] = []

    for (const file of arr) {
      if (!file.type.startsWith('image/')) {
        setError('Only image files are accepted.')
        continue
      }
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`Each file must be under ${maxSizeMB}MB.`)
        continue
      }
      valid.push(file)
    }

    const merged = [...files, ...valid].slice(0, maxFiles)
    if (merged.length >= maxFiles) {
      setError(`Maximum ${maxFiles} photos allowed.`)
    }
    setFiles(merged)
    onChange(merged)
  }

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    onChange(updated)
    setError(null)
  }

  const previews = files.map((f) => URL.createObjectURL(f))

  return (
    <div>
      {/* Drop zone */}
      <div
        className={cn(
          'border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors duration-200',
          dragOver ? 'border-gold bg-gold/5' : 'border-gray-soft hover:border-gray-mid bg-white'
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          addFiles(e.dataTransfer.files)
        }}
      >
        <Upload className="w-8 h-8 text-gray-mid mx-auto mb-3" strokeWidth={1.5} />
        <p className="text-body font-sans text-black mb-1">Upload Photos</p>
        <p className="text-small text-gray-mid">
          Drag photos here or tap to browse &mdash; or use your camera on mobile.
        </p>
        <p className="text-small text-gray-mid mt-1">
          JPG, PNG, WEBP, HEIC &bull; Up to {maxFiles} photos &bull; {maxSizeMB}MB each
        </p>
      </div>

      {/* Hidden input — capture="environment" enables mobile camera */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        className="sr-only"
        onChange={(e) => e.target.files && addFiles(e.target.files)}
      />

      {/* Error */}
      {error && (
        <p className="mt-2 text-small text-red-600 font-sans">{error}</p>
      )}

      {/* Previews */}
      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {files.map((file, i) => (
            <div key={i} className="relative group aspect-square rounded-sm overflow-hidden bg-gray-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previews[i]} alt={file.name} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(i) }}
                className="absolute top-1 right-1 w-5 h-5 bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Remove photo ${i + 1}`}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {files.length < maxFiles && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="aspect-square rounded-sm border-2 border-dashed border-gray-soft flex items-center justify-center hover:border-gold transition-colors"
              aria-label="Add more photos"
            >
              <ImageIcon className="w-5 h-5 text-gray-mid" strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
