import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import React from 'react';

const ServicesOverview = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        We offer a range of technology services designed to help your business succeed.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-red-600">Custom Software Development</h3>
          <p className="text-gray-600">Tailored solutions to meet your unique business needs.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-red-600">Tech Training & Workshops</h3>
          <p className="text-gray-600">Empowering your team with the latest technology skills.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-red-600">IT Consulting</h3>
          <p className="text-gray-600">Strategic guidance to optimize your IT infrastructure.</p>
        </div>
      </div>
      <div className="mt-10">
        <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
            Explore All Services
        </Link>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Techscholars?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Constantly exploring new technologies for better solutions.</p>
          </div>
          <div>
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-600">Deep knowledge and experience across various tech domains.</p>
          </div>
          <div>
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Partnership</h3>
            <p className="text-gray-600">We work closely with you to understand and achieve your goals.</p>
          </div>
          <div>
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📈</div>
            <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
            <p className="text-gray-600">Focused on delivering measurable outcomes and value.</p>
          </div>
        </div>
      </div>
    </section>
  );


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
    </>
  );
}