import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import 'next-docs-ui/style.css'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
  <DocsLayout
    enableSidebar={pathname.startsWith('/docs/') || pathname === '/docs'}
    tree={tree}
    nav={{
      component: (
        <Nav
          title={<>雙龍體育幫助中心</>}
          collapsibleSidebar={false}
          items={[{ href: "/support", children: "返回幫助中心" }]}
        />
      ),
    }}
  >
    {children}
  </DocsLayout>
</div>
  )
}
