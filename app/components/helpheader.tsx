import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
import { DocSearch } from '@docsearch/react'
import '@docsearch/css';
export default function Header() {
  return (
    <header>
    
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
    </span>
  </Link>
      <div className="flex items-center lg:order-2">
      <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />


    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link
      href="/"
       className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    >
      返回官網
    </a>
    <Link href="/contact" className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
      聯繫
    </a>
  </Navbar.Collapse>
 
</Navbar>
      
      </header>
  )
}
