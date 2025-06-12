'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Eye, Calendar } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  index?: number; // Optional index for animation delay
}

const BlogCard = ({ post, className = '', index }: BlogCardProps) => {
  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${Math.floor(views / 1000)}k`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index ?? 0) * 0.1 }}
            >
    <motion.article
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 ${className}`}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700">
            {post.category}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{formatViews(post.views)}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-3 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Автор:</span>
            <span className="text-sm font-medium text-gray-700">{post.author}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            Читать далее →
          </Link>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
    </motion.div>
  );
};

export default BlogCard;
