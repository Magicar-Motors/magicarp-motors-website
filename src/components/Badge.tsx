import type { ReactNode } from "react"

/** Color pairs ported verbatim from the telemetry.md inline-styled pills. */
const variants = {
  orange: { background: "#fde8d0", color: "#b85c00" }, // Video, 5V analog
  purple: { background: "#ead5f9", color: "#6b2fa0" }, // Compute
  green: { background: "#d3f5e3", color: "#1a6640" }, // Connectivity, Digital
  blue: { background: "#d0e8fd", color: "#0a4a8a" }, // Telemetry, 12V square wave
  amber: { background: "#fef3c7", color: "#92400e" }, // 12V divided down
} as const

export type BadgeVariant = keyof typeof variants

/** Small colored pill used inside the telemetry tables. */
export default function Badge({
  variant,
  children,
}: {
  variant: BadgeVariant
  children: ReactNode
}) {
  return (
    <span className="badge" style={variants[variant]}>
      {children}
    </span>
  )
}
