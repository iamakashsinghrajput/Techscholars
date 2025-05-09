import type { Metadata } from 'next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Techscholars. We are here to help with your technology needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to answer your questions, discuss your projects, or help you get started with our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ContactForm />
          <div className="space-y-8 mt-10 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 md:hidden">Contact Information</h2>
            <div className="flex items-start bg-slate-100 p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-red-600 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-700"></p>
                <a href="https://maps.google.com/?q=123+Tech+Avenue,+Innovation+City,+TX+75001" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline mt-1 inline-block">Get Directions</a>
              </div>
            </div>
            <div className="flex items-start bg-slate-100 p-6 rounded-lg shadow-md">
              <FaPhone className="text-red-600 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-red-600">+91 (9351) 736629</a>
              </div>
            </div>
            <div className="flex items-start bg-slate-100 p-6 rounded-lg shadow-md">
              <FaEnvelope className="text-red-600 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a href="mailto:info@techscholars.com" className="text-gray-700 hover:text-red-600">info@techscholars.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}