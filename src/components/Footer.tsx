import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8 sm:pb-0">
        <div className="mb-4">
          <Link href="/about" className="hover:text-red-500 px-3 py-2">About Us</Link>
          <Link href="/services" className="hover:text-red-500 px-3 py-2">Services</Link>
          <Link href="/contact" className="hover:text-red-500 px-3 py-2">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-red-500 px-3 py-2">Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} Techscholars. All rights reserved.</p>
        <p className="text-sm mt-1">Innovate. Learn. Build.</p>

        <div className="sm:hidden mt-6 text-sm"> 
          <p>Built By Akash Singh Rajput</p>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-4 right-4 text-xs text-gray-400">
        <p>Built By Akash Singh Rajput</p>
      </div>
    </footer>
  );
};

export default Footer;