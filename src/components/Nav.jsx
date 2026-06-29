import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#home" aria-label="Home">
        <span className="nav__mark">RK</span>
        <span className="nav__brand-text">
          <strong>{profile.name}</strong>
          <small>{profile.title}</small>
        </span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  );
}

export default Nav;
