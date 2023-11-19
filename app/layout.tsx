import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import 'next-docs-ui/style.css'
import '@/styles/globals.css'
import '@docsearch/css';

import Footer from '@/pages/components/footer'

const inter = Inter({
  subsets: ['latin']
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-tw" className={inter.className}>
      <body>
        <RootProvider       
          search={{
         <DocSearch
          apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
          appId="70GEOCJCSX"
          indexName="help"
        />
        >{children}</RootProvider>
      </body>
      <Footer />
    </html>
    
  )
}
