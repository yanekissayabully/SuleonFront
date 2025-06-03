export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  views: number;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'charging-time-and-cost',
    title: 'Время и стоимость зарядки электромобиля',
    excerpt: 'Детальный разбор времени и стоимости зарядки электромобилей, сравнение различных типов зарядных станций...',
    content: 'Полный текст статьи о зарядке электромобилей...',
    image: 'https://ext.same-assets.com/2335176788/551980581.webp',
    author: 'LuxAuto Team',
    publishedAt: '2024-10-14',
    readTime: '~ 20 мин.',
    views: 74045,
    category: 'Технологии',
    tags: ['зарядка', 'стоимость', 'электромобили']
  },
  {
    id: '2',
    slug: 'longest-range-electric-cars',
    title: 'Электромобили с наибольшим запасом хода',
    excerpt: 'Какие электромобили могут проехать дальше всех? Рейтинг моделей с самым большим запасом хода...',
    content: 'Полный текст статьи о запасе хода...',
    image: 'https://ext.same-assets.com/2335176788/2620527439.webp',
    author: 'LuxAuto Team',
    publishedAt: '2023-01-04',
    readTime: '~ 16 мин.',
    views: 32233,
    category: 'Обзоры',
    tags: ['запас хода', 'рейтинг', 'электромобили']
  },
  {
    id: '3',
    slug: 'regenerative-braking',
    title: 'Рекуперативное торможение',
    excerpt: 'Что такое рекуперативное торможение и как оно работает в электромобилях? Преимущества и особенности...',
    content: 'Полный текст статьи о рекуперативном торможении...',
    image: 'https://ext.same-assets.com/2335176788/2759531078.webp',
    author: 'LuxAuto Team',
    publishedAt: '2023-01-05',
    readTime: '~ 9 мин.',
    views: 24720,
    category: 'Технологии',
    tags: ['рекуперация', 'торможение', 'технологии']
  },
  {
    id: '4',
    slug: 'byd-song-plus-update',
    title: 'Электромобиль BYD Song Plus обновили: как теперь выглядает китайский бестселлер',
    excerpt: 'Обновленный Byd Song Plus получил свежий дизайн: 2024 модельный год принес новые...',
    content: 'Полный текст статьи об обновлении BYD Song Plus...',
    image: 'https://ext.same-assets.com/2335176788/1529175349.webp',
    author: 'LuxAuto Team',
    publishedAt: '2023-07-04',
    readTime: '~ 17 мин.',
    views: 20805,
    category: 'Новости',
    tags: ['BYD', 'Song Plus', 'обновление']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedBlogPosts = (limit = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
