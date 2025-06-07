// services/api.ts

import { Car } from "@/data/cars"

const API_BASE = process.env.NEXT_PUBLIC_API_URL

export async function fetchCarBySlug(slug: string): Promise<Car | null> {
  const res = await fetch(`${API_BASE}/api/cars/${slug}`, {
    next: { revalidate: 60 }, // если нужен ISR (optional)
  })
  if (!res.ok) return null
  return res.json()
}

export async function fetchAllSlugs() {
  const res = await fetch(`${API_BASE}/products/slugs/`)
  return res.json()
}
