import { cn } from '@/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-md shadow-card',
        hover && 'transition-shadow duration-200 hover:shadow-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
