'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlogPost } from '@/lib/api/blogs'; // Импортируем тип

interface AnimatedBlogContentProps {
  post: BlogPost;
}

export const AnimatedBlogContent = ({ post }: AnimatedBlogContentProps) => {
  const isHtml = post.content.includes('<') && post.content.includes('>'); // простая проверка на HTML

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {post.title}
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.published_at).toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      {post.image && (
        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {isHtml ? (
        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      ) : (
        <div className="prose prose-lg max-w-none text-gray-800">
          {post.content}
        </div>
      )}
    </motion.div>
  );
};
