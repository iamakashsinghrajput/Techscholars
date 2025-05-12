import { servicesData, Service } from 'src/data/servicesData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const FeatureCheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

type ResolvedServiceParams = { slug: string };
type ResolvedSearchParams = { [key: string]: string | string[] | undefined };

type ServiceDetailPageProps = {
  params: Promise<ResolvedServiceParams>; // params IS a Promise
  searchParams?: Promise<ResolvedSearchParams>; // searchParams IS also a Promise if present
};

const getServiceBySlug = async (slug: string): Promise<Service | undefined> => {
  if (!slug || typeof slug !== 'string') {
    return undefined;
  }
  if (!Array.isArray(servicesData)) {
    return undefined;
  }
  const service = servicesData.find((s) => s.slug === slug);
  return service;
};


export async function generateMetadata(
  { params: paramsPromise }: ServiceDetailPageProps // Destructure for clarity, removed unused searchParamsPromise
): Promise<Metadata> {
  const resolvedParams = await paramsPromise; // MUST await
  const serviceSlug = resolvedParams.slug;

  if (!serviceSlug) {
    return {
      title: 'Service Details | Techscholars',
      description: 'Learn more about the technology services offered by Techscholars.',
    };
  }

  const service = await getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: 'Service Not Found | Techscholars',
      description: 'The service you are looking for could not be found.',
    };
  }

  return {
    title: `${service.title} | Services | Techscholars`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Techscholars Services`,
      description: service.shortDescription,
      images: service.imageUrl ? [{ url: service.imageUrl, alt: service.title }] : [],
      type: 'article',
    },
  };
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  if (!Array.isArray(servicesData)) {
    return [];
  }
  const validParams = servicesData
    .filter(service => typeof service.slug === 'string' && service.slug.trim() !== '')
    .map((service) => ({
      slug: service.slug,
    }));
  return validParams;
}


export default async function ServiceDetailPage({ params: paramsPromise }: ServiceDetailPageProps) {
  const resolvedParams = await paramsPromise; // MUST await
  const serviceSlug = resolvedParams.slug;

  if (!serviceSlug) {
    notFound();
  }

  const service = await getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="relative bg-slate-800 text-white py-20 md:py-32">
        {service.imageUrl && (
          <Image
            src={service.imageUrl}
            alt={`${service.title} background`}
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
            priority
          />
        )}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-6xl mb-6 inline-block">{service.icon}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <Link href="/services" className="mb-10 inline-flex items-center text-red-600 hover:text-red-700 font-medium group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H4.59l2.1 2.1a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 111.06 1.06l-2.1 2.1H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                </svg>
                Back to All Services
            </Link>

          <article className="prose prose-lg prose-red max-w-none mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 !mb-6">Overview</h2>
            {service.longDescription.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {service.features && service.features.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      {feature.icon ? (
                        <span className="text-3xl mr-4">{feature.icon}</span>
                      ) : (
                        <FeatureCheckIcon />
                      )}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.process && service.process.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Our Approach</h2>
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-red-200 transform -translate-x-1/2"></div>
                {service.process.map((step, index) => (
                  <div key={step.step} className={`relative mb-10 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                    <div className="md:w-1/2"></div>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                       <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10">
                        {step.step}
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-red-700 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.technologies && service.technologies.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Technologies We Use</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-100 text-red-700 px-4 py-2 text-sm font-medium rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 py-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in {service.title}?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto text-red-100">
              Let&apos;s discuss how we can tailor this service to meet your specific business needs and drive your success.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-md text-lg hover:bg-red-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
