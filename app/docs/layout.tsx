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
          enableSidebar={true}
          url="/support"
          items={[{ href: "/", children: "返回官網" }]}
        />
      ),
    }}
  >
    {children}
  </DocsLayout>
</div>
  )
}
