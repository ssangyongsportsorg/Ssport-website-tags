import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
import Head from '@/pages/components/head'
'use client'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
         <Head />

  <DocsLayout
    
    tree={tree}
sidebar={{
  collapsible: false
}}
    nav={{
        enabled: false
      
    }}
  >
    {children}
  </DocsLayout>
</div>
  )
}
