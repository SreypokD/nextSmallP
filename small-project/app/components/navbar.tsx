'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Search from './search';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="bg-gray-100 border-gray-900 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <div className="flex items-center md:order-2">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}