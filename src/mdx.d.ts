declare module "*.mdx" {
  import type { ComponentType } from "react"
  export const frontmatter: {
    title?: string
    date?: string
    tags?: string[]
    [key: string]: unknown
  }
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
