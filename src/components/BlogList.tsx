import { Link } from "react-router-dom"

import { frontmatter as telemetry } from "../pages/blogs/telemetry.mdx"
import { frontmatter as raceDay } from "../pages/blogs/race-day.mdx"
import { frontmatter as killSwitch } from "../pages/blogs/kill-switch.mdx"
import { frontmatter as lightsAndPaint } from "../pages/blogs/lights-and-paint.mdx"
import { frontmatter as thHighlights } from "../pages/blogs/th-highlight-photos.mdx"
import { frontmatter as misc } from "../pages/blogs/misc.mdx"

interface Fm {
  title?: string
  date?: string
}

const posts: { path: string; fm: Fm }[] = [
  { path: "/blogs/telemetry", fm: telemetry },
  { path: "/blogs/race-day", fm: raceDay },
  { path: "/blogs/kill-switch", fm: killSwitch },
  { path: "/blogs/lights-and-paint", fm: lightsAndPaint },
  { path: "/blogs/th-highlight-photos", fm: thHighlights },
  { path: "/blogs/misc", fm: misc },
]

/** Normalize a date field (which may be `2026.03.25` or `2025-06-05`) for sorting. */
function dateKey(date?: string): string {
  return (date ?? "").replace(/\./g, "-")
}

export default function BlogList() {
  const sorted = [...posts].sort((a, b) =>
    dateKey(b.fm.date).localeCompare(dateKey(a.fm.date)),
  )

  return (
    <ul className="blog-list">
      {sorted.map(({ path, fm }) => (
        <li key={path}>
          <Link to={path}>{fm.title ?? path}</Link>
        </li>
      ))}
    </ul>
  )
}
