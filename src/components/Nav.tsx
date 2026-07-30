import { Link } from "react-router-dom"

const links = [
  { href: "/about-the-team", label: "ABOUT" },
  { href: "/meet-the-team", label: "MEET THE TEAM" },
  { href: "/sponsorship", label: "SPONSORSHIP" },
  { href: "/blogs", label: "BLOGS" },
]

export default function Nav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-logo">
        <img src="/images/home/logo.png" alt="Magicar Motors Logo" />
      </Link>
      <input
        type="checkbox"
        id="landing-nav-toggle"
        className="landing-nav-toggle-checkbox"
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
