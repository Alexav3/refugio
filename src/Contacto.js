// src/Contacto.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-text">Encuentranos en: </p>
      <ul className="contact-list">
        <li>
          <a
            href="https://www.facebook.com/NuevoRefugioJalisco"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaFacebook className="facebook-icon" />
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
}
