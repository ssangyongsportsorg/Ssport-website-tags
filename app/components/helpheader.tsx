import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <Link href="/">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="ssport Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {/* Add your logo text here */}
        </span>
      </Link>
      <div className="flex items-center lg:order-2">
      
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          href="/"
          className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
        >
          返回官網
        </Link>
        <Link
          href="/contact"
          className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
        >
          聯繫
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
