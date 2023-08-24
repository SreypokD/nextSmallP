'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from './search';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div  className="flex items-center ">
            <img
              src="https://o.remove.bg/downloads/f6ef2ae0-8191-4d59-a043-8c19ca72a091/image-removebg-preview.png"
              className="h-20 w-28"
              alt="cloth Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
              BUBU Shop
            </span>
          </div>
          <div className="flex items-center md:order-2">
            {/* ... */}
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeLink === '/' ? 'border-b-2 ' : ''
                    }`}
                    onClick={() => handleLinkClick('/')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeLink === '/about' ? 'border-b-2 bo ' : ''
                    }`}
                    onClick={() => handleLinkClick('/about')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeLink === '/services' ? 'border-b-2 ' : ''
                    }`}
                    onClick={() => handleLinkClick('/services')}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeLink === '/product' ? 'border-b-2  ' : ''
                    }`}
                    onClick={() => handleLinkClick('/product')}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeLink === '/contact' ? 'border-b-2  ' : ''
                    }`}
                    onClick={() => handleLinkClick('/contact')}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}