// lib/api/blog.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  published_at: string
}

export async function fetchAllBlogSlugs(): Promise<{ slug: string }[]> {
  const res = await fetch(`${API_BASE}/api/blog/`)
  if (!res.ok) throw new Error("Failed to fetch blog slugs")
  return res.json()
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${API_BASE}/api/blog/${slug}`, {
    next: { revalidate: 60 }, // ISR
  })
  if (!res.ok) return null
  return res.json()
}
