import { projectsData, Project } from 'src/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type DynamicPageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const getProjectData = async (projectId: string): Promise<Project | undefined> => {
  if (!projectId || typeof projectId !== 'string') {
    return undefined;
  }
  if (!Array.isArray(projectsData)) {
    return undefined;
  }
  return projectsData.find((project) => project.id === projectId);
};

export async function generateMetadata(
  { params }: DynamicPageProps
): Promise<Metadata> {
  const awaitedParams = await params;
  const projectId = awaitedParams.id;

  if (!projectId) {
    return {
      title: 'Error Retrieving Project | Techscholars',
      description: 'Could not determine the project ID to generate metadata.',
    };
  }

  const project = await getProjectData(projectId);

  if (!project) {
    return {
      title: 'Project Not Found | Techscholars',
      description: 'The project you are looking for could not be found.',
    };
  }

  return {
    title: `${project.title} | Our Work | Techscholars`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} | Techscholars`,
      description: project.excerpt,
      images: [
        {
          url: project.imageUrl,
          alt: project.title,
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
    },
  };
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  if (!Array.isArray(projectsData)) {
    return [];
  }
  const validParams = projectsData
    .filter(project => typeof project.id === 'string' && project.id.trim() !== '')
    .map((project) => ({
      id: project.id,
    }));
  return validParams;
}

export default async function ProjectDetailPage({ params }: DynamicPageProps) {
  const awaitedParams = await params;
  const projectId = awaitedParams.id;

  if (!projectId) {
    notFound();
  }

  const project = await getProjectData(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/work" className="text-red-600 hover:text-red-800 group text-sm font-medium inline-flex items-center">
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1 inline-block mr-1">←</span>
              Back to Our Work
            </Link>
          </div>

          <article>
            <header className="mb-8">
              <p className="text-base font-semibold text-red-600 uppercase tracking-wide mb-1">{project.category}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {project.title}
              </h1>
            </header>

            {project.imageUrl && (
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-10">
                <Image
                  src={project.imageUrl}
                  alt={`Image for ${project.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                />
              </div>
            )}

            <div className="prose prose-lg prose-red max-w-none text-gray-700 mb-8 sm:mb-10">
              {project.description.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <section className="mb-8 sm:mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-100 text-red-700 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <aside className="bg-slate-50 p-6 rounded-lg shadow">
              {project.client && (
                <p className="text-gray-700 mb-2">
                  <strong className="font-semibold text-gray-800">Client:</strong> {project.client}
                </p>
              )}
              {project.websiteUrl && (
                <p className="text-gray-700">
                  <strong className="font-semibold text-gray-800">Website:</strong>{' '}
                  <a
                    href={project.websiteUrl.startsWith('http') ? project.websiteUrl : `https://${project.websiteUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 hover:underline"
                  >
                    Visit Project <span aria-hidden="true">→</span>
                  </a>
                </p>
              )}
            </aside>
          </article>

          <div className="mt-12 pt-10 border-t border-gray-200 text-center">
            <p className="text-lg text-gray-700 mb-6">Interested in a similar solution or have a new project?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Let&apos;s Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
