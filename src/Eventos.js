// src/Event.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./Eventos.css";
import virgen from "./virgen.jpg";
import semanaSanta from "./semanaSanta.jpg";
import nacimiento from "./nacimiento.jpg";
import sanJuan from "./sanJuan.jpg";

export default function Eventos() {
  return (
    <div className="event-page">
      <Navbar />
      <h1>Fechas importantes.</h1>
      <p>La comunidad de El Nuevo Refugio celebra las siguientes fechas.</p>
      <div className="event-grid">
        <div className="event-card">
          <img src={virgen} alt="Fiestas Patronales" />
          <h3>Fiestas Patronales</h3>
          <h5>4 de Julio.</h5>
          <p>Descripción breve del evento 1.</p>
        </div>
        <div className="event-card">
          <img src={semanaSanta} alt="Semana Santa" />
          <h3>Semana Santa.</h3>
          <h5>De acuerdo al calendario parroquial</h5>
          <p>Descripción breve del evento 2.</p>
        </div>
        <div className="event-card">
          <img src={nacimiento} alt="Navidad" />
          <h3>Navidad</h3>
          <h5>25 de Diciembre.</h5>
          <p>Celebración de la Navidad con actividades para la comunidad.</p>
        </div>
        <div className="event-card">
          <img src={sanJuan} alt="Año Nuevo" />
          <h3>Peregrinacion a San Juan de los Lagos</h3>
          <h5>A principios de Enero.</h5>
          <p>Evento especial para recibir el año nuevo juntos.</p>
        </div>
        {/* Puedes agregar más tarjetas aquí */}
      </div>
      <Footer />
    </div>
  );
}
