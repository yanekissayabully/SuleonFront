// lib/api/blog.ts

import { BlogPost } from "@/data/blog";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Получить все статьи блога
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API_BASE}/api/blog/`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Не удалось загрузить статьи");
  const data = await res.json();
  return data.results;
}

// Получить пост по слагу
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${API_BASE}/api/blog/${slug}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return null;
  return res.json();
}

// Получить список всех slug
export async function fetchAllBlogSlugs(): Promise<{ slug: string }[]> {
  const res = await fetch(`${API_BASE}/blog/slugs`);
  if (!res.ok) throw new Error("Не удалось загрузить слаги");
  return res.json();
}

// Получить избранные статьи
export async function fetchFeaturedBlogPosts(limit = 3): Promise<BlogPost[]> {
  const res = await fetch(`${API_BASE}/blog/featured?limit=${limit}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Не удалось загрузить избранные статьи");
  return res.json();
}
