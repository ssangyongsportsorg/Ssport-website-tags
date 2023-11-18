import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
  <DocsLayout
    
    tree={tree}
    nav={{
      component: (
        <Nav
          title={<>雙龍體育幫助中心</>}
          collapsibleSidebar={true}
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
