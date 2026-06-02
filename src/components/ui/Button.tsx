'use client'

import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-black hover:bg-gold-light border border-transparent font-sans font-semibold tracking-wide transition-all duration-200 hover:-translate-y-px hover:shadow-hover',
  secondary:
    'bg-transparent text-black border border-black hover:bg-black hover:text-white font-sans font-semibold tracking-wide transition-all duration-200',
  ghost:
    'bg-transparent text-gold border border-transparent hover:underline font-sans font-semibold transition-all duration-200',
  dark: 'bg-black text-white border border-transparent hover:bg-espresso font-sans font-semibold tracking-wide transition-all duration-200 hover:-translate-y-px',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-sm min-h-[48px]',
  lg: 'px-8 py-4 text-base min-h-[52px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, href, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-full whitespace-nowrap cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
