import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/contacts">
        <button>Contacts</button>
      </Link>
    </div>
  );
}
