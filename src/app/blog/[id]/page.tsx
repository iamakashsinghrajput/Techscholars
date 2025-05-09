// import { blogPostsData, BlogPost } from '@/data/blogPosts';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import { marked } from 'marked';

// type DynamicPageProps = {
//   params: { id: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// const getPostData = async (postId: string): Promise<BlogPost | undefined> => {
//   if (!postId || typeof postId !== 'string') return undefined;
//   if (!Array.isArray(blogPostsData)) return undefined;
//   return blogPostsData.find((post) => post.id === postId);
// };

// export async function generateMetadata(
//   { params }: DynamicPageProps
// ): Promise<Metadata> {
//   const awaitedParams = await params;
//   const postId = awaitedParams.id;

//   if (!postId) {
//     return {
//       title: 'Error Retrieving Post | Techscholars',
//       description: 'Could not determine the post ID to generate metadata.',
//     };
//   }
//   const post = await getPostData(postId);
//   if (!post) {
//     return {
//       title: 'Post Not Found | Techscholars',
//       description: 'The blog post you are looking for could not be found.',
//     };
//   }
//   return {
//     title: `${post.title} | Techscholars Blog`,
//     description: post.excerpt,
//     openGraph: {
//       title: `${post.title} | Techscholars Blog`,
//       description: post.excerpt,
//       images: [{ url: post.imageUrl, alt: post.title, width: 1200, height: 630 }],
//       type: 'article',
//       publishedTime: post.date,
//       authors: [post.author],
//     },
//   };
// }

// export async function generateStaticParams(): Promise<Array<{ id: string }>> {
//   if (!Array.isArray(blogPostsData)) return [];
//   return blogPostsData
//     .filter(p => typeof p.id === 'string' && p.id.trim() !== '')
//     .map((p) => ({ id: p.id }));
// }

// export default async function BlogPostPage({ params }: { params: { id: string } }) {
//   const awaitedParams = await params;
//   const postId = awaitedParams.id;

//   if (!postId) notFound();
//   const post = await getPostData(postId);
//   if (!post) notFound();

//   const htmlContent = marked.parse(post.content);

//   return (
//     <div className="bg-gray-50 py-16 sm:py-20 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto mb-8 md:mb-10">
//           <Link href="/blog" className="text-red-600 hover:text-red-700 group text-sm font-medium inline-flex items-center transition-colors duration-200">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5 transition-transform group-hover:-translate-x-1">
//               <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.56l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L5.56 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
//             </svg>
//             Back to Blog
//           </Link>
//         </div>

//         <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
//           <header className="mb-8 md:mb-10 border-b border-gray-200 pb-6 md:pb-8">
//             {post.category && (
//               <p className="font-sans text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
//                 {post.category}
//               </p>
//             )}
//             <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 !mb-4 leading-tight">
//               {post.title}
//             </h1>
//             <div className="font-sans text-sm text-gray-500 flex items-center space-x-3">
//               <span>
//                 Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
//               </span>
//               {post.author && (
//                 <>
//                   <span className="text-gray-300">|</span>
//                   <span>By <span className="font-medium text-gray-700">{post.author}{post.authorRole && `, ${post.authorRole}`}</span></span>
//                 </>
//               )}
//             </div>
//           </header>

//           {post.imageUrl && (
//             <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden shadow-lg mb-8 md:mb-10">
//               <Image
//                 src={post.imageUrl}
//                 alt={`Featured image for ${post.title}`}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 priority
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 928px"
//               />
//             </div>
//           )}

//           <div
//             className="prose prose-lg prose-merriweather prose-red max-w-none"
//             dangerouslySetInnerHTML={{ __html: htmlContent }}
//           />

         

//         </article>

//         <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-10 border-t border-gray-200 text-center font-sans">
//           <p className="text-xl font-semibold text-gray-800 mb-6">Enjoyed this article?</p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link
//                 href="/blog"
//                 className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-300"
//             >
//                 Explore More Articles
//             </Link>
//             <Link
//                 href="/contact"
//                 className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//             >
//                 Discuss with Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/blog/[id]/page.tsx

import { blogPostsData, BlogPost } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { marked } from 'marked';

// Type for props passed to generateMetadata and the page component
// CRITICAL CHANGE: The `params` prop itself is a Promise
type BlogPostPageProps = {
  params: Promise<{ id: string }>; // params is a Promise that resolves to an object like { id: "actual-id" }
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Function to fetch post data (remains the same, expects a resolved postId string)
const getPostData = async (postId: string): Promise<BlogPost | undefined> => {
  if (!postId || typeof postId !== 'string') return undefined;
  if (!Array.isArray(blogPostsData)) return undefined;
  return blogPostsData.find((post) => post.id === postId);
};

// generateMetadata function corrected to await params
export async function generateMetadata(
  { params: paramsPromise }: BlogPostPageProps // Destructure to paramsPromise for clarity
): Promise<Metadata> {
  const resolvedParams = await paramsPromise; // Await the Promise to get the actual params object
  const postId = resolvedParams.id;           // Access id from the resolved object

  if (!postId) {
    return {
      title: 'Error Retrieving Post | Techscholars',
      description: 'Could not determine the post ID to generate metadata.',
    };
  }
  const post = await getPostData(postId);
  if (!post) {
    return {
      title: 'Post Not Found | Techscholars',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  return {
    title: `${post.title} | Techscholars Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Techscholars Blog`,
      description: post.excerpt,
      images: [{ url: post.imageUrl, alt: post.title, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// generateStaticParams function (remains the same)
// This function returns an array of objects, e.g., [{ id: 'my-post-id' }].
// Next.js then uses these to pre-render pages.
// The fact that `params` might be a Promise in the page/metadata functions is an internal Next.js handling detail.
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  if (!Array.isArray(blogPostsData)) return [];
  return blogPostsData
    .filter(p => typeof p.id === 'string' && p.id.trim() !== '')
    .map((p) => ({ id: p.id }));
}

// BlogPostPage component corrected to await params
export default async function BlogPostPage({ params: paramsPromise }: BlogPostPageProps) {
  const resolvedParams = await paramsPromise; // Await the Promise to get the actual params object
  const postId = resolvedParams.id;           // Access id from the resolved object

  if (!postId) {
    notFound();
  }
  const post = await getPostData(postId);
  if (!post) {
    notFound();
  }

  const htmlContent = marked.parse(post.content);

  return (
    <div className="bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-8 md:mb-10">
          <Link href="/blog" className="text-red-600 hover:text-red-700 group text-sm font-medium inline-flex items-center transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5 transition-transform group-hover:-translate-x-1">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.56l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L5.56 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
          <header className="mb-8 md:mb-10 border-b border-gray-200 pb-6 md:pb-8">
            {post.category && (
              <p className="font-sans text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                {post.category}
              </p>
            )}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 !mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="font-sans text-sm text-gray-500 flex items-center space-x-3">
              <span>
                Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              {post.author && (
                <>
                  <span className="text-gray-300">|</span>
                  <span>By <span className="font-medium text-gray-700">{post.author}{post.authorRole && `, ${post.authorRole}`}</span></span>
                </>
              )}
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden shadow-lg mb-8 md:mb-10">
              <Image
                src={post.imageUrl}
                alt={`Featured image for ${post.title}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 928px"
              />
            </div>
          )}

          <div
            className="prose prose-lg prose-merriweather prose-red max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

        </article>

        <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-10 border-t border-gray-200 text-center font-sans">
          <p className="text-xl font-semibold text-gray-800 mb-6">Enjoyed this article?</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
                href="/blog"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-300"
            >
                Explore More Articles
            </Link>
            <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                Discuss with Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}