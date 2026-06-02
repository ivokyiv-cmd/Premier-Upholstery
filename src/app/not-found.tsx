import Link from 'next/link'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function NotFound() {
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center bg-off-white">
        <div className="text-center container-narrow py-20">
          <p className="label-text mb-4">404</p>
          <h1 className="font-serif text-h1 text-black mb-4">Page Not Found</h1>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-body-lg text-gray-dark mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-black text-black hover:bg-black hover:text-white font-semibold font-sans px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
