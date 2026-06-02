import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'dark' | 'outline' | 'soft'
  className?: string
}

const variantStyles = {
  gold: 'bg-gold text-black',
  dark: 'bg-espresso text-white',
  outline: 'border border-gray-soft text-gray-dark bg-transparent',
  soft: 'bg-gray-soft text-gray-dark',
}

export function Badge({ children, variant = 'soft', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-label font-sans uppercase tracking-widest',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
