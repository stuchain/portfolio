import { social } from "../data/social";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavProps {
  activeSectionId?: string;
}

export default function Nav({ activeSectionId }: NavProps) {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <ul className="nav-list">
        {navLinks.map(({ href, label }) => {
          const sectionId = href.slice(1);
          const isActive = activeSectionId === sectionId;
          return (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${isActive ? " nav-link--active" : ""}`}
              >
                {label}
              </a>
            </li>
          );
        })}
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
