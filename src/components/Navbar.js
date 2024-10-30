import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <strong>Frontend dev</strong>
      <div className="menu-icon menu-icon-cl">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-group ">
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
