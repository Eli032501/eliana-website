import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="Navbar">
      <strong>Frontend dev</strong>
      <div
        className={`${menuOpen ? "" : "menu-icon-cl"}  menu-icon`}
        onClick={handleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${menuOpen ? "d-none" : ""}  menu-group`}>
        <span className="menu-bg menu-position">
          <ul>
            <li className="menu-link">
              <Link to="/">about me</Link>
            </li>
            <li className="menu-link">
              <Link to="/projects">my projects</Link>
            </li>
            <li className="menu-link">
              <Link to="/contacts">contact me</Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
