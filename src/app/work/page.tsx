import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Work | Techscholars',
  description: 'Explore a selection of projects and case studies by Techscholars.',
};

export default function WorkPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Impactful Work
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses like yours achieve their technology goals through innovative solutions.
          </p>
        </div>

        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projectsData.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`} className="group block">
                <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-slate-50 h-full flex flex-col">
                  <div className="relative w-full aspect-[16/10]"> 
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-medium text-red-600 mb-1">{project.category}</p>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 text-sm mb-4 flex-grow">{project.excerpt}</p>
                    <span className="mt-auto font-medium text-red-600 group-hover:underline">
                      View Case Study <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">
            <p>No projects to display at the moment. Check back soon!</p>
          </div>
        )}


         <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">Have a project in mind? We&apos;d love to hear about it.</p>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                Let&apos;s Talk
            </Link>
        </div>
      </div>
    </div>
  );
}