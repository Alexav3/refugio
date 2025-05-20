// src/Contacto.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";
import "./Contacto.css";

export default function Contacto() {
  const handleFacebookClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.facebook.com/NuevoRefugioJalisco",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="contact-container">
      <Navbar />
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-text">Encuéntranos en: </p>
      <ul className="contact-list">
        <li>
          <a
            href="https://www.facebook.com/NuevoRefugioJalisco"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            role="link"
            onClick={handleFacebookClick}
          >
            <FaFacebook className="facebook-icon" />
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
}
