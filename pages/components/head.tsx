import { Navbar } from "flowbite-react";
import Login from "./login";
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"
import { Session } from "next-auth"
import { DocSearch } from '@docsearch/react'
import '@docsearch/css';

export default function Header() {
  return (
    <>
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
          </Link>
    
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          </span>
    
          <div className="flex md:order-2">
            <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          </div>
    
          <div className="flex md:order-3">
            <Login />
          </div>
    
          <Navbar.Toggle />
    
          <Navbar.Collapse>
            <a
              href="https://slb.ssangyongsports.org"
              className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-
