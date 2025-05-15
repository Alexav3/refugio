import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Bienvenidos!</div>
        <ul className="navbar-menu">
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
