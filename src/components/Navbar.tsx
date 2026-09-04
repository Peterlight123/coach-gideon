import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, siteInfo } from "../content/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold" onClick={() => setIsOpen(false)}>
          {siteInfo.fullName}
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
