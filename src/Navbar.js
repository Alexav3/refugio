import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Bienvenidos!</div>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/eventos">Festividades</Link>
          </li>
          <li>
            <Link to="/historia">Nuestra Historia</Link>
          </li>
          <li>
            <Link to="/lugares">Lugares importantes</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/contacto">Contactanos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
