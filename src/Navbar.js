// src/Navbar.js
import React from "react";
import "./Navbar.css"; // optional if you want separate styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mi Sitio</div>
        <ul className="navbar-menu">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
