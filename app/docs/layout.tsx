'use client'
import '@docsearch/css';

import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
import Helpheader from '@/app/components/helpheader'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
         <Helpheader />

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
