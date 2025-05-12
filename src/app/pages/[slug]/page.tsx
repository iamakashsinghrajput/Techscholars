import { pagesData, PageContent } from 'src/data/staticPages';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getPageDataBySlug = async (slug: string): Promise<PageContent | undefined> => {
  if (!slug || typeof slug !== 'string') return undefined;
  if (!Array.isArray(pagesData)) return undefined;
  return pagesData.find((page) => page.slug === slug);
};

export async function generateMetadata(
  { params: paramsPromise }: DynamicPageProps
): Promise<Metadata> {
  const resolvedParams = await paramsPromise;
  const pageSlug = resolvedParams.slug;

  if (!pageSlug) {
    return { title: 'Page | Techscholars' };
  }

  const page = await getPageDataBySlug(pageSlug);

  if (!page) {
    return {
      title: 'Page Not Found | Techscholars',
      description: 'The page you are looking for could not be found.',
    };
  }

  return {
    title: page.metaTitle || `${page.title} | Techscholars`,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle || `${page.title} | Techscholars`,
      description: page.metaDescription,
      images: page.hero?.imageUrl ? [{ url: page.hero.imageUrl, alt: page.hero.heading }] : [],
    },
  };
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  if (!Array.isArray(pagesData)) return [];
  return pagesData
    .filter(page => typeof page.slug === 'string' && page.slug.trim() !== '')
    .map((page) => ({ slug: page.slug }));
}

export default async function GenericPage({ params: paramsPromise }: DynamicPageProps) {
  const resolvedParams = await paramsPromise;
  const pageSlug = resolvedParams.slug;

  if (!pageSlug) notFound();

  const page = await getPageDataBySlug(pageSlug);

  if (!page) notFound();

  return (
    <div className="bg-white">
      {page.hero && (
        <div className="relative bg-slate-700 text-white py-20 md:py-28">
          {page.hero.imageUrl && (
            <Image
              src={page.hero.imageUrl}
              alt={`${page.hero.heading} background`}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-40"
              priority
            />
          )}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              {page.hero.heading}
            </h1>
            {page.hero.subheading && (
              <p className="text-xl sm:text-2xl text-slate-200 max-w-2xl mx-auto">
                {page.hero.subheading}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`max-w-4xl mx-auto ${!page.hero ? 'pt-8' : ''}`}>
          {!page.hero && (
            <header className="mb-10 text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                {page.title}
              </h1>
            </header>
          )}
          <div className="mb-8">
            <Link href="/" className="text-red-600 hover:text-red-700 group text-sm font-medium inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-0.5">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H4.59l2.1 2.1a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 111.06 1.06l-2.1 2.1H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>

          <article className="prose prose-lg prose-red max-w-none">
            <div dangerouslySetInnerHTML={{ __html: page.mainContent }} />
          </article>

          <section className="mt-16 pt-10 border-t border-gray-200 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Have Questions About This Page?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We&apos;re here to help. Reach out to our team for more information or to discuss your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Techscholars
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
