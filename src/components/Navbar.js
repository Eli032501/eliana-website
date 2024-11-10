import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu() {
    setMenuOpen(!menuOpen);
    const menuIcon = document.getElementById("menuIcon");
    const menuExpand = document.getElementById("menuExpand");
    menuIcon.classList.toggle("menu-icon-cl");
    menuExpand.classList.toggle("menu-close");
  }

  return (
    <nav className="Navbar">
      <Link to="/" className="nav-title">
        Frontend dev
      </Link>

      <div id="menuIcon" className="menu-icon" onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="menuExpand" className="menu-group menu-close">
        <span className="menu-bg">
          <ul>
            <li className="menu-link" onClick={handleMenu}>
              <NavLink to="/">about me</NavLink>
            </li>
            <li className="menu-link" onClick={handleMenu}>
              <NavLink to="/projects">my projects</NavLink>
            </li>
            <li className="menu-link" onClick={handleMenu}>
              <NavLink to="/contacts">contact me</NavLink>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
