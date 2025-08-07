import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Your link order here
  const links = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger button */}
      <button
        className="hamburger"
        aria-label="Toggle sidebar"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="name">Jigna Kalani</div>
        <nav>
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? "active" : ""}
                  onClick={() => setOpen(false)} // close on click (mobile)
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
