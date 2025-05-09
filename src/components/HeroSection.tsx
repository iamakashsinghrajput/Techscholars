import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-slate-100 py-20 md:py-32">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Unlock Your Potential with <span className="text-red-600">Techscholars</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Pioneering innovative solutions and cultivating tech expertise. We empower businesses
              and individuals to thrive in the digital age through cutting-edge technology services
              and comprehensive learning programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Discover Our Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-700 text-base font-semibold rounded-md text-gray-800 bg-transparent hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              >
                Schedule a Consultation
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">       
            {/* <div className="bg-gray-300 w-full aspect-video lg:aspect-[4/3] rounded-lg shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Professional Image Placeholder</span>
            </div> */}
            <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-purple-600 to-blue-500 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <video width="580" controls preload="none">
                  <source src="./heromain.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <span className="absolute bottom-4 right-4 text-white text-opacity-70 text-sm">Techscholars Visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;