import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <strong>Frontend dev</strong>
      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="menu-bg"></span>
      <ul className="menu-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contacts">contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
