import { Link } from "react-router-dom"

const links = [
  { href: "/about-the-team", label: "About the Team" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/blogs", label: "Blogs" },
]

export default function Nav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-logo">
        Magicar Motors
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
            <Link to={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
