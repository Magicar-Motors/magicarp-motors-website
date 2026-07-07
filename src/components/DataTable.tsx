import type { ReactNode } from "react"

/**
 * Horizontally-scrollable styled table wrapper. The caller supplies the
 * <thead>/<tbody> so cells can contain links and <Badge> pills.
 */
export default function DataTable({
  minWidth,
  children,
}: {
  minWidth?: number
  children: ReactNode
}) {
  return (
    <div className="data-table-scroll">
      <table className="data-table" style={minWidth ? { minWidth } : undefined}>
        {children}
      </table>
    </div>
  )
}
