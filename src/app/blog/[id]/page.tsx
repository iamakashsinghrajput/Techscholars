// /* eslint-disable @typescript-eslint/no-unused-vars */
// // import { blogPostsData, BlogPost } from '@/data/blogPosts';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import type { Metadata } from 'next';
// // import { marked } from 'marked';

// // type DynamicPageProps = {
// //   params: { id: string };
// //   searchParams?: { [key: string]: string | string[] | undefined };
// // };

// // const getPostData = async (postId: string): Promise<BlogPost | undefined> => {
// //   if (!postId || typeof postId !== 'string') return undefined;
// //   if (!Array.isArray(blogPostsData)) return undefined;
// //   return blogPostsData.find((post) => post.id === postId);
// // };

// // export async function generateMetadata(
// //   { params }: DynamicPageProps
// // ): Promise<Metadata> {
// //   const awaitedParams = await params;
// //   const postId = awaitedParams.id;

// //   if (!postId) {
// //     return {
// //       title: 'Error Retrieving Post | Techscholars',
// //       description: 'Could not determine the post ID to generate metadata.',
// //     };
// //   }
// //   const post = await getPostData(postId);
// //   if (!post) {
// //     return {
// //       title: 'Post Not Found | Techscholars',
// //       description: 'The blog post you are looking for could not be found.',
// //     };
// //   }
// //   return {
// //     title: `${post.title} | Techscholars Blog`,
// //     description: post.excerpt,
// //     openGraph: {
// //       title: `${post.title} | Techscholars Blog`,
// //       description: post.excerpt,
// //       images: [{ url: post.imageUrl, alt: post.title, width: 1200, height: 630 }],
// //       type: 'article',
// //       publishedTime: post.date,
// //       authors: [post.author],
// //     },
// //   };
// // }

// // export async function generateStaticParams(): Promise<Array<{ id: string }>> {
// //   if (!Array.isArray(blogPostsData)) return [];
// //   return blogPostsData
// //     .filter(p => typeof p.id === 'string' && p.id.trim() !== '')
// //     .map((p) => ({ id: p.id }));
// // }

// // export default async function BlogPostPage({ params }: { params: { id: string } }) {
// //   const awaitedParams = await params;
// //   const postId = awaitedParams.id;

// //   if (!postId) notFound();
// //   const post = await getPostData(postId);
// //   if (!post) notFound();

// //   const htmlContent = marked.parse(post.content);

// //   return (
// //     <div className="bg-gray-50 py-16 sm:py-20 md:py-24">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-3xl mx-auto mb-8 md:mb-10">
// //           <Link href="/blog" className="text-red-600 hover:text-red-700 group text-sm font-medium inline-flex items-center transition-colors duration-200">
// //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5 transition-transform group-hover:-translate-x-1">
// //               <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.56l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L5.56 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
// //             </svg>
// //             Back to Blog
// //           </Link>
// //         </div>

// //         <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
// //           <header className="mb-8 md:mb-10 border-b border-gray-200 pb-6 md:pb-8">
// //             {post.category && (
// //               <p className="font-sans text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
// //                 {post.category}
// //               </p>
// //             )}
// //             <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 !mb-4 leading-tight">
// //               {post.title}
// //             </h1>
// //             <div className="font-sans text-sm text-gray-500 flex items-center space-x-3">
// //               <span>
// //                 Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
// //               </span>
// //               {post.author && (
// //                 <>
// //                   <span className="text-gray-300">|</span>
// //                   <span>By <span className="font-medium text-gray-700">{post.author}{post.authorRole && `, ${post.authorRole}`}</span></span>
// //                 </>
// //               )}
// //             </div>
// //           </header>

// //           {post.imageUrl && (
// //             <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden shadow-lg mb-8 md:mb-10">
// //               <Image
// //                 src={post.imageUrl}
// //                 alt={`Featured image for ${post.title}`}
// //                 fill
// //                 style={{ objectFit: 'cover' }}
// //                 priority
// //                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 928px"
// //               />
// //             </div>
// //           )}

// //           <div
// //             className="prose prose-lg prose-merriweather prose-red max-w-none"
// //             dangerouslySetInnerHTML={{ __html: htmlContent }}
// //           />

         

// //         </article>

// //         <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-10 border-t border-gray-200 text-center font-sans">
// //           <p className="text-xl font-semibold text-gray-800 mb-6">Enjoyed this article?</p>
// //           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
// //             <Link
// //                 href="/blog"
// //                 className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-300"
// //             >
// //                 Explore More Articles
// //             </Link>
// //             <Link
// //                 href="/contact"
// //                 className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
// //             >
// //                 Discuss with Us
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // src/app/pages/[slug]/page.tsx

// import { pagesData, PageContent } from '@/data/staticPages';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import { BlogPost, blogPostsData } from '@/data/blogPosts';

// // Type for the resolved params object
// type ResolvedPageParams = { slug: string };
// // Type for the resolved searchParams object
// type ResolvedSearchParams = { [key: string]: string | string[] | undefined };

// // Type for props
// type DynamicPageProps = {
//   params: Promise<ResolvedPageParams>; // params IS a Promise
//   searchParams?: Promise<ResolvedSearchParams>; // searchParams IS also a Promise if present
// };

// const getPostData = async (postId: string): Promise<BlogPost | undefined> => {
//   console.log(`DEBUG (getPostData blog): Attempting to find post with id: "${postId}"`);
//   if (!postId || typeof postId !== 'string') {
//     console.error(`DEBUG (getPostData blog): Invalid postId received: "${postId}"`);
//     return undefined;
//   }
//   if (!Array.isArray(blogPostsData) || blogPostsData.length === 0) {
//     console.error(`DEBUG (getPostData blog): blogPostsData is not a valid array or is empty.`);
//     return undefined;
//   }

//   const post = blogPostsData.find((p) => p.id === postId);

//   if(!post) {
//     // console.warn(`DEBUG: BlogPostPage - Post not found for postId: "${postId}", calling notFound().`);
//     notFound(); // THIS TRIGGERS THE 404
//   }
// };

// const getPageDataBySlug = async (slug: string): Promise<PageContent | undefined> => {
//   // console.log(`DEBUG: getPageDataBySlug called with slug: "${slug}"`);
//   if (!slug || typeof slug !== 'string') return undefined;
//   if (!Array.isArray(pagesData)) return undefined;
//   const page = pagesData.find((p) => p.slug === slug);
//   // if (!page) console.warn(`DEBUG: getPageDataBySlug - Page not found for slug: "${slug}"`);
//   return page;
// };

// export async function generateMetadata(
//   { params: paramsPromise, searchParams: searchParamsPromise }: DynamicPageProps
// ): Promise<Metadata> {
//   const resolvedParams = await paramsPromise; // MUST await
//   const pageSlug = resolvedParams.slug;

//   if (!pageSlug) {
//     return { title: 'Page | Techscholars' };
//   }
//   const page = await getPageDataBySlug(pageSlug);
//   if (!page) {
//     return {
//       title: 'Page Not Found | Techscholars',
//       description: 'The page you are looking for could not be found.',
//     };
//   }
//   return {
//     title: page.metaTitle || `${page.title} | Techscholars`,
//     description: page.metaDescription,
//     openGraph: {
//       title: page.metaTitle || `${page.title} | Techscholars`,
//       description: page.metaDescription,
//       images: page.hero?.imageUrl ? [{ url: page.hero.imageUrl, alt: page.hero.heading }] : [],
//     },
//   };
// }

// export async function generateStaticParams(): Promise<Array<{ id: string }>> {
//   if (!Array.isArray(blogPostsData)) {
//     console.error("DEBUG (generateStaticParams blog): blogPostsData is not an array or undefined!");
//     return [];
//   }
//   if (blogPostsData.length === 0) {
//     console.warn("DEBUG (generateStaticParams blog): blogPostsData is empty!");
//   }
//   const paramsList = blogPostsData
//     .filter(p => {
//       const isValid = typeof p.id === 'string' && p.id.trim() !== '';
//       if (!isValid) {
//         console.warn(`DEBUG (generateStaticParams blog): Invalid or missing id in blog post:`, p.title || 'Untitled');
//       }
//       return isValid;
//     })
//     .map((p) => ({ id: p.id }));

//   console.log(`DEBUG (generateStaticParams blog): Returning params list:`, JSON.stringify(paramsList, null, 2));
//   return paramsList;
// }

// export default async function GenericPage({ params: paramsPromise, searchParams: searchParamsPromise }: DynamicPageProps) {
//   const resolvedParams = await paramsPromise; // MUST await
//   const pageSlug = resolvedParams.slug;

//   if (!pageSlug) {
//     // console.error("DEBUG: GenericPage - pageSlug is missing after awaiting params.");
//     notFound();
//   }
//   const page = await getPageDataBySlug(pageSlug);
//   if (!page) {
//     // console.warn(`DEBUG: GenericPage - Page not found for pageSlug: "${pageSlug}", calling notFound().`);
//     notFound();
//   }

//   return (
//     // ... JSX remains the same
//     <div className="bg-white">
//       {page.hero && (
//         <div className="relative bg-slate-700 text-white py-20 md:py-28">
//           {page.hero.imageUrl && (
//             <Image
//               src={page.hero.imageUrl}
//               alt={`${page.hero.heading} background`}
//               fill
//               style={{ objectFit: 'cover' }}
//               className="opacity-40"
//               priority
//             />
//           )}
//           <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
//               {page.hero.heading}
//             </h1>
//             {page.hero.subheading && (
//               <p className="text-xl sm:text-2xl text-slate-200 max-w-2xl mx-auto">
//                 {page.hero.subheading}
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <div className={`max-w-4xl mx-auto ${!page.hero ? 'pt-8' : ''}`}>
//           {!page.hero && (
//             <header className="mb-10 text-center">
//               <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
//                 {page.title}
//               </h1>
//             </header>
//           )}
//           <div className="mb-8">
//             <Link href="/" className="text-red-600 hover:text-red-700 group text-sm font-medium inline-flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-0.5">
//                 <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H4.59l2.1 2.1a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 111.06 1.06l-2.1 2.1H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
//               </svg>
//               Back to Home
//             </Link>
//           </div>

//           <article className="prose prose-lg prose-red max-w-none">
//             <div dangerouslySetInnerHTML={{ __html: page.mainContent }} />
//           </article>

//           <section className="mt-16 pt-10 border-t border-gray-200 text-center">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Have Questions About This Page?
//             </h2>
//             <p className="text-gray-600 mb-6 max-w-xl mx-auto">
//               W&apos;re here to help. Reach out to our team for more information or to discuss your specific needs.
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//             >
//               Contact Techscholars
//             </Link>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }