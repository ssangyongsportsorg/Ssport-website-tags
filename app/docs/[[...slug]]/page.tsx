import { getPage, getPageUrl, tree } from '@/app/source'
import { allDocs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { MDXContent } from 'next-docs-ui/mdx'
import { DocsPage } from 'next-docs-ui/page'
import { findNeighbour, getTableOfContents } from 'next-docs-zeta/server'
import { notFound } from 'next/navigation'
import { Content } from './content'
 import { Card, Cards } from 'next-docs-ui/mdx'

export default async function Page({
  params
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)
 
  if (page == null) {
    notFound()
  }
 function Category({ page, tab }: { page: Page; tab: Utils }) {
  const filtered = tab.pages.filter(
    docs =>
      docs.file.dirname === page.file.dirname && docs.file.name !== 'index'
  )

  return (
    <Cards>
      {filtered.map(page => (
        <Card
          key={page.file.id}
          title={page.matter.title}
          description={page.matter.description ?? 'No Description'}
          href={tab.getPageUrl(page.slugs)}
        />
      ))}
    </Cards>
  )
}
  const toc = await getTableOfContents(page.body.raw)
  const neighbour = findNeighbour(tree, getPageUrl(params.slug))
 
  return (
    <DocsPage toc={toc} footer={neighbour}>
      <MDXContent>
        <h1>{page.title}</h1>
        <Content code={page.body.code} />
      </MDXContent>
    </DocsPage>
  )
}
 
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allDocs.map(page => ({
    slug: page.slug.split('/')
  }))
}
 
export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)
 
  if (page == null) return
 
  return {
    title: page.title,
    description: page.description
  } satisfies Metadata
}
