// 'use client';

import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blog';


import { fetchAllBlogPosts } from "@/lib/api/blog";



export default async function BlogListPage() {
  const blogPosts: BlogPost[] = await fetchAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        > */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наш блог
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полезные статьи об электромобилях, технологиях и новостях индустрии
          </p>
        {/* </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            
              <BlogCard key={post.id} post={post} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}