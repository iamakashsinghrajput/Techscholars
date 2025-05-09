import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Our Expert Technology Services | Techscholars',
  description: 'Discover Techscholars\' comprehensive suite of technology services, including custom software development, web & mobile solutions, IT consulting, and cloud expertise.',
};


export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Our Technology Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Empowering your business with innovative and reliable tech solutions, meticulously designed for sustainable growth and operational excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col group border border-transparent hover:border-red-200"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 text-3xl transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold font-sans text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-700 flex-grow mb-6 leading-relaxed">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto self-start inline-flex items-center text-red-600 hover:text-red-700 font-semibold font-sans group transition-colors duration-300"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-2.1a.75.75 0 111.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.1-2.1H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-20 md:mt-24 py-16 bg-slate-100 rounded-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s discuss how our tailored technology solutions can help you overcome challenges and achieve your strategic objectives.
            </p>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}