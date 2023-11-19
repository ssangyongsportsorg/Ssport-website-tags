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
const SearchDialog = dynamic(() => import('@/app/components/search'))

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-tw" className={inter.className}>
      <body>
<RootProvider
  search={{
    SearchDialog
  }}
>        {children}</RootProvider>
      </body>
      <Footer />
    </html>
    
  )
}
