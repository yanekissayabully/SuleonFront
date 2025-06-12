import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blog';
import { fetchAllBlogPosts } from '@/lib/api/blog';

export default async function LatestThreeBlogs() {
  const blogPosts: BlogPost[] = await fetchAllBlogPosts();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Наш блог
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Полезные статьи об электромобилях, технологиях и новостях индустрии
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
