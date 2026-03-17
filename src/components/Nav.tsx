import { social } from "../data/social";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cv", label: "CV" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Nav() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <ul className="nav-list">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link">
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={social.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
