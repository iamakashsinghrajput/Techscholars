'use client';

import React from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaDribbble,
  FaSearch, FaChevronDown, FaBars, FaTimes
} from 'react-icons/fa';
import { pagesData as staticPagesContent } from '../data/staticPages';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projects';
import { blogPostsData } from '../data/blogPosts';
import { UrlObject } from 'url';

interface NavItem {
  href: string | UrlObject;
  label: string;
  slug?: string;
  icon?: React.ReactNode;
}

const Navbar = () => {
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const pageDropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const togglePageDropdown = () => setIsPageDropdownOpen(!isPageDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navigationMap = useMemo(() => {
    const navMap: { [key: string]: string } = {};

    const mainNavLinksForMap: NavItem[] = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/work', label: 'Work' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ];
    mainNavLinksForMap.forEach(link => {
      navMap[link.label.toLowerCase()] = link.href as string;
    });

    staticPagesContent.forEach(page => {
      navMap[page.title.toLowerCase()] = `/pages/${page.slug}`;
      navMap[page.slug.toLowerCase()] = `/pages/${page.slug}`;
    });

    if (servicesData) {
      servicesData.forEach(service => {
        navMap[service.title.toLowerCase()] = `/services/${service.slug}`;
        navMap[service.slug.toLowerCase()] = `/services/${service.slug}`;
      });
    }

    if (projectsData) {
      projectsData.forEach(project => {
        navMap[project.title.toLowerCase()] = `/work/${project.id}`;
        navMap[project.id.toLowerCase()] = `/work/${project.id}`;
      });
    }

    if (blogPostsData) {
      blogPostsData.forEach(post => {
        navMap[post.title.toLowerCase()] = `/blog/${post.id}`;
        navMap[post.id.toLowerCase()] = `/blog/${post.id}`;
      });
    }
    return navMap;
  }, []);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    if (navigationMap[query]) {
      router.push(navigationMap[query]);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
      setIsPageDropdownOpen(false);
    } else {
      alert(`Content for "${searchQuery}" not directly found. Try a broader search?`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageDropdownRef.current && !pageDropdownRef.current.contains(event.target as Node)) {
        setIsPageDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        const hamburgerButton = document.getElementById('hamburger-button');
        if (hamburgerButton && !hamburgerButton.contains(event.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPageDropdownOpen(false);
  }, [pathname]);

  const socialIcons: NavItem[] = [
    { href: '#', icon: <FaFacebookF />, label: 'Facebook' },
    { href: '#', icon: <FaTwitter />, label: 'Twitter' },
    { href: '#', icon: <FaInstagram />, label: 'Instagram' },
    { href: '#', icon: <FaDribbble />, label: 'Dribbble' },
  ].map(item => ({ ...item, slug: item.label.toLowerCase() }));

  const mainNavLinksForDisplay: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ].map(item => ({ ...item, slug: item.label.toLowerCase() }));

  const pageDropdownItems: NavItem[] = staticPagesContent.map((page) => ({
    href: `/pages/${page.slug}`,
    label: page.title,
    slug: page.slug
  }));

  return (
    <>
      <div className="bg-white py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden sm:flex items-center space-x-2">
            {socialIcons.map((social) => (
              <Link key={social.slug} href={social.href as string} aria-label={social.label}
                className="text-gray-500 hover:text-red-500 p-2 border border-gray-300 rounded-full transition-colors duration-200">
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="sm:hidden"></div>

          <div className="text-center flex-grow sm:flex-grow-0">
            <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-black uppercase tracking-tight">
              Techscholars
            </Link>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
              Innovate. Learn. Build.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Go to..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-32 md:w-40"
              />
              <button
                type="submit"
                aria-label="Go or Search"
                className="bg-red-500 text-white p-[0.8175rem] md:p-[0.8175rem] rounded-r-full hover:bg-red-600 transition-colors duration-200"
              >
                <FaSearch />
              </button>
            </form>
            <button
              id="hamburger-button"
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-red-500 focus:outline-none p-2"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex bg-gray-800 text-white sticky top-0 z-40">
        <div className="container mx-auto flex justify-center items-center py-3">
          <ul className="flex space-x-8 items-center text-sm font-medium uppercase tracking-wider">
            {mainNavLinksForDisplay.map(link => (
              <li key={link.slug}>
                <Link href={link.href as string} className={`hover:text-red-500 transition-colors duration-200 ${pathname === link.href ? 'text-red-500' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
            {pageDropdownItems.length > 0 && (
              <li className="relative" ref={pageDropdownRef}>
                <button onClick={togglePageDropdown}
                  className={`hover:text-red-500 transition-colors duration-200 flex items-center ${
                    pageDropdownItems.some((item) => pathname === item.href) || isPageDropdownOpen ? 'text-red-500' : ''
                  }`}
                  aria-expanded={isPageDropdownOpen} aria-haspopup="true">
                  Pages <FaChevronDown className={`ml-1.5 h-3 w-3 transition-transform duration-200 ${isPageDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isPageDropdownOpen && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-gray-700 shadow-xl rounded-md py-1 z-50 normal-case tracking-normal font-normal">
                    {pageDropdownItems.map((item) => (
                      <li key={item.slug}>
                        <Link href={item.href as string}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 ${
                            pathname === item.href ? 'bg-red-500 text-white hover:bg-red-600' : 'hover:text-red-500'
                          }`}
                          onClick={() => setIsPageDropdownOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 bg-gray-800 text-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold uppercase" onClick={toggleMobileMenu}>
              Techscholars
            </Link>
            <button onClick={toggleMobileMenu} aria-label="Close navigation menu">
              <FaTimes size={24} />
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="mb-6">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Go to..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-full"
              />
              <button
                type="submit"
                aria-label="Go or Search"
                className="bg-red-500 text-white p-[0.8025rem] rounded-r-md hover:bg-red-600 transition-colors duration-200"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          <nav>
            <ul className="space-y-4 text-lg uppercase">
              {mainNavLinksForDisplay.map(link => (
                <li key={`mobile-${link.slug}`}>
                  <Link href={link.href as string}
                    className={`block py-2 hover:text-red-500 transition-colors duration-200 ${pathname === link.href ? 'text-red-500 font-semibold' : ''}`}
                    onClick={toggleMobileMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {pageDropdownItems.length > 0 && (
                <li>
                  <span className="block py-2 font-semibold text-gray-400">Pages</span>
                  <ul className="pl-4 space-y-2 mt-1">
                    {pageDropdownItems.map((item) => (
                      <li key={`mobile-page-${item.slug}`}>
                        <Link href={item.href as string}
                          className={`block py-1.5 hover:text-red-500 transition-colors duration-200 ${
                            pathname === item.href ? 'text-red-500 font-semibold' : 'text-gray-300'
                          }`}
                          onClick={toggleMobileMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </nav>

          <div className="mt-10 pt-6 border-t border-gray-700">
            <div className="flex justify-center space-x-4">
              {socialIcons.map((social) => (
                <Link key={`mobile-social-${social.slug}`} href={social.href as string} aria-label={social.label}
                  className="text-gray-400 hover:text-red-500 p-2 transition-colors duration-200">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
