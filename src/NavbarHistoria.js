// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarHistoria.css";

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
            <Link to="/historia/fundacion" onClick={closeMenu}>
              Fundacion
            </Link>
          </li>
          <li>
            <Link to="/historia/archivohistorico" onClick={closeMenu}>
              Archivo Historico
            </Link>
          </li>
          <li>
            <Link to="/historia/testimonios" onClick={closeMenu}>
              Testimonios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
