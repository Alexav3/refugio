// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Bienvenidos!</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/eventos" onClick={closeMenu}>
              Festividades
            </Link>
          </li>
          <li>
            <Link to="/historia" onClick={closeMenu}>
              Nuestra Historia
            </Link>
          </li>
          <li>
            <Link to="/lugares" onClick={closeMenu}>
              Lugares importantes
            </Link>
          </li>
          <li>
            <Link to="/galeria" onClick={closeMenu}>
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={closeMenu}>
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
