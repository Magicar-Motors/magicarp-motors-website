import type { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import { Head } from "vite-react-ssg"
import Nav from "./Nav"
import PhotoRow from "./PhotoRow"
import PhotoSingle from "./PhotoSingle"
import Figure from "./Figure"
import Badge from "./Badge"
import DataTable from "./DataTable"

// Components made available to every MDX page without an explicit import.
const mdxComponents = {
  PhotoRow,
  PhotoSingle,
  Figure,
  Badge,
  DataTable,
}

interface LayoutProps {
  title?: string
  children: ReactNode
}

/** Standard shell for inner content pages: nav + centered content column. */
export default function Layout({ title, children }: LayoutProps) {
  const fullTitle = title ? `${title} · Magicar Motors` : "Magicar Motors"
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Nav />
      <main className="page-content">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </main>
    </>
  )
}
