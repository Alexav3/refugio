// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarGente.css";

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
            <Link to="/nuestragente/biografias" onClick={closeMenu}>
              Biografias e Historias
            </Link>
          </li>
          <li>
            <Link to="/nuestragente/miembrosdestacados" onClick={closeMenu}>
              Miembros Destacados
            </Link>
          </li>
          <li>
            <Link to="/nuestragente/hijosausentes" onClick={closeMenu}>
              Hijos Ausentes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
