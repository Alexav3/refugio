//Navegador
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Bienvenidos!</div>
        <ul className="navbar-menu">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/eventos">Festividades</a>
          </li>
          <li>
            <a href="/historia">Nuestra Historia</a>
          </li>
          <li>
            <a href="/lugares">Lugares interesantes</a>
          </li>
          <li>
            <a href="/galeria">Galeria</a>
          </li>
          <li>
            <a href="/contacto">Contactanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
