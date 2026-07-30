import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const links = [
  { href: "/about-the-team", label: "ABOUT" },
  { href: "/meet-the-team", label: "MEET THE TEAM" },
  { href: "/getting-involved", label: "GETTING INVOLVED" },
  { href: "/blogs", label: "BLOGS" },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // React Router keeps this component mounted across navigations, so the
  // menu must be closed explicitly on route change rather than relying on
  // a remount to reset it.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-logo">
        <img src="/images/home/magicar-squiggle.svg" alt="Magicar Motors Logo" />
      </Link>
      <input
        type="checkbox"
        id="landing-nav-toggle"
        className="landing-nav-toggle-checkbox"
        checked={menuOpen}
        onChange={(e) => setMenuOpen(e.target.checked)}
      />
      <label
        htmlFor="landing-nav-toggle"
        className="landing-nav-toggle-label"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="landing-nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="landing-nav-btn">{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
