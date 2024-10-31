import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu() {
    setMenuOpen(!menuOpen);
    const menuIcon = document.getElementById("menuIcon");
    const menuExpand = document.getElementById("menuExpand");
    menuIcon.classList.toggle("menu-icon-cl");
    menuExpand.classList.toggle("d-none");
  }

  return (
    <nav className="Navbar">
      <strong>Frontend dev</strong>
      <div id="menuIcon" className="menu-icon" onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="menuExpand" className="menu-group d-none">
        <span className="menu-bg menu-position">
          <ul>
            <li className="menu-link" onClick={handleMenu}>
              <Link to="/">about me</Link>
            </li>
            <li className="menu-link" onClick={handleMenu}>
              <Link to="/projects">my projects</Link>
            </li>
            <li className="menu-link" onClick={handleMenu}>
              <Link to="/contacts">contact me</Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
