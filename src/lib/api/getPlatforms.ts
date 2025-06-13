export interface Platform {
  name: string;
  href: string;
  icon: string;
  bg: string;
  description: string;
  preview: string;
  orientation: 'horizontal' | 'vertical';
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export async function getPlatforms(): Promise<Platform[]> {
  const res = await fetch(`${API_BASE}/api/platforms/`, {
    next: { revalidate: 60 }, // ISR (для Next.js 13/14)
  });

  if (!res.ok) throw new Error('Ошибка при получении платформ');
  const data = await res.json();
  return data.results;
}
