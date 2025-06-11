// app/blog/[slug]/page.tsx

import { fetchBlogBySlug, fetchAllBlogSlugs } from "@/lib/api/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs();
  if (!Array.isArray(slugs)) {
    console.error('Expected array from fetchAllBlogSlugs, got:', slugs);
    return [];
  }
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await fetchBlogBySlug(params.slug)

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        > */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {new Date(post.published_at).toLocaleDateString()}
          </p>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mb-8"
            />
          )}
          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        {/* </motion.div> */}
      </div>
    </div>
  )
}
