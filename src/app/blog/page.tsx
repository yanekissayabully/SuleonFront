// // 'use client';

// import BlogCard from '@/components/BlogCard';
// import { BlogPost } from '@/data/blog';


// import { fetchAllBlogPosts } from "@/lib/api/blog";



// export default async function BlogListPage() {
//   const blogPosts: BlogPost[] = await fetchAllBlogPosts();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-16">
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         > */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Наш блог
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Полезные статьи об электромобилях, технологиях и новостях индустрии
//           </p>
//         {/* </motion.div> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
            
//               <BlogCard key={post.id} post={post} index={index}/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blog';
import { fetchAllBlogPosts } from "@/lib/api/blog";

export default async function BlogListPage() {
  const blogPosts: BlogPost[] = await fetchAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Добавляем ограничение по максимальной ширине и горизонтальный padding */}
      <div className="mx-auto max-w-[100vw] overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
              Наш блог
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              Полезные статьи об электромобилях, технологиях и новостях индустрии
            </p>
          </div>

          {/* Добавляем overflow-hidden для контейнера карточек */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}