import { notFound } from 'next/navigation'

export default function BlogPostPage() {
  // Blog posts will be loaded from MDX files when content is added.
  // Returning 404 until posts exist.
  notFound()
}
