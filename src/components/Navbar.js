import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Routes", "/routes"],
    ["Stops", "/stops"],
    ["Bus Status", "/status"]
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">🚌</span>
          Campus<span>Transit</span>
        </NavLink>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Open menu">
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;