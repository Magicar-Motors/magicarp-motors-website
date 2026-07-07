import type { ReactNode } from "react"
import type { RouteRecord } from "vite-react-ssg"
import Layout from "./components/Layout"

import Home from "./pages/home"
import NotFound from "./pages/not-found"

import AboutTheTeam, { frontmatter as aboutFm } from "./pages/about-the-team.mdx"
import MeetTheTeam, { frontmatter as meetFm } from "./pages/meet-the-team.mdx"
import Community, { frontmatter as communityFm } from "./pages/community.mdx"
import Sponsorship, { frontmatter as sponsorshipFm } from "./pages/sponsorship.mdx"

import Blogs, { frontmatter as blogsFm } from "./pages/blogs/index.mdx"
import Telemetry, { frontmatter as telemetryFm } from "./pages/blogs/telemetry.mdx"
import RaceDay, { frontmatter as raceDayFm } from "./pages/blogs/race-day.mdx"
import KillSwitch, { frontmatter as killSwitchFm } from "./pages/blogs/kill-switch.mdx"
import LightsAndPaint, {
  frontmatter as lightsFm,
} from "./pages/blogs/lights-and-paint.mdx"
import ThHighlightPhotos, {
  frontmatter as thFm,
} from "./pages/blogs/th-highlight-photos.mdx"
import Misc, { frontmatter as miscFm } from "./pages/blogs/misc.mdx"

type Fm = { title?: string }

const page = (fm: Fm, children: ReactNode): ReactNode => (
  <Layout title={fm?.title}>{children}</Layout>
)

export const routes: RouteRecord[] = [
  { path: "/", element: <Home /> },
  { path: "/about-the-team", element: page(aboutFm, <AboutTheTeam />) },
  { path: "/meet-the-team", element: page(meetFm, <MeetTheTeam />) },
  { path: "/community", element: page(communityFm, <Community />) },
  { path: "/sponsorship", element: page(sponsorshipFm, <Sponsorship />) },
  { path: "/blogs", element: page(blogsFm, <Blogs />) },
  { path: "/blogs/telemetry", element: page(telemetryFm, <Telemetry />) },
  { path: "/blogs/race-day", element: page(raceDayFm, <RaceDay />) },
  { path: "/blogs/kill-switch", element: page(killSwitchFm, <KillSwitch />) },
  {
    path: "/blogs/lights-and-paint",
    element: page(lightsFm, <LightsAndPaint />),
  },
  {
    path: "/blogs/th-highlight-photos",
    element: page(thFm, <ThHighlightPhotos />),
  },
  { path: "/blogs/misc", element: page(miscFm, <Misc />) },
  // Concrete /404 so the SSG emits dist/404.html (Vercel serves it on miss);
  // the "*" catch-all handles client-side navigation to unknown paths.
  { path: "/404", element: page({ title: "Not Found" }, <NotFound />) },
  { path: "*", element: page({ title: "Not Found" }, <NotFound />) },
]
