import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsData } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Our Blog | Techscholars',
  description: 'Read the latest insights, tutorials, and news from the Techscholars team.',
};

export default function BlogPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Techscholars Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles, tips, and industry insights.
          </p>
        </div>

        {blogPostsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blogPostsData.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-slate-50 h-full flex flex-col">
                  {post.imageUrl && (
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-medium text-red-600 mb-1">{post.category}</p>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                      {post.title}
                    </h2>
                    <div className="text-xs text-gray-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      {post.author && <span className="mx-1">|</span>}
                      {post.author && <span>By {post.author}</span>}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <span className="mt-auto font-medium text-red-600 group-hover:underline">
                      Read More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        )}

         <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">Have questions or want to discuss a topic?</p>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                Contact Us
            </Link>
        </div>
      </div>
    </div>
  );
}