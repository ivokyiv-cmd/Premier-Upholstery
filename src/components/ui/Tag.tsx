import Link from 'next/link'
import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  href?: string
  className?: string
}

export function Tag({ children, href, className }: TagProps) {
  const classes = cn(
    'inline-flex items-center px-3 py-1.5 rounded-sm border border-gray-soft text-small text-gray-dark bg-white hover:border-gold hover:text-leather transition-colors duration-200 cursor-default',
    href && 'cursor-pointer',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <span className={classes}>{children}</span>
}
