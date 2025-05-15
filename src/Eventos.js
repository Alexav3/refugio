// src/Event.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./Eventos.css";
import virgen from "./images/virgen.jpg";
import semanaSanta from "./images/semanaSanta.jpg";
import nacimiento from "./images/nacimiento.jpg";
import sanJuan from "./images/sanJuan.jpg";

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
          <p>
            Cada 4 de julio se celebran en la comunidad de El Nuevo Refugio las
            fiestas patronales en honor a la Virgen del Refugio. Esta festividad
            se lleva a cabo año con año, siendo una de las más importantes del
            pueblo.
          </p>
        </div>
        <div className="event-card">
          <img src={semanaSanta} alt="Semana Santa" />
          <h3>Semana Santa.</h3>
          <h5>De acuerdo al calendario parroquial</h5>
          <p>
            Cada año, la comunidad de El Nuevo Refugio conmemora la Semana Santa
            con diversas actividades religiosas, incluyendo procesiones,
            representaciones del Viacrucis y momentos de oración.
          </p>
        </div>
        <div className="event-card">
          <img src={nacimiento} alt="Navidad" />
          <h3>Navidad</h3>
          <h5>25 de Diciembre.</h5>
          <p>
            Celebración de la Navidad con actividades religiosas y comunitarias.
            Se realizan pastorelas, se canta al Niño Dios y se fomenta la
            convivencia entre las familias del pueblo.
          </p>
        </div>
        <div className="event-card">
          <img src={sanJuan} alt="Año Nuevo" />
          <h3>Peregrinacion a San Juan de los Lagos</h3>
          <h5>A principios de Enero.</h5>
          <p>
            Peregrinación que se realiza año con año hacia San Juan de los
            Lagos, en devoción a la Virgen de San Juan. Es un evento especial
            que une a la comunidad para encomendar el nuevo año con fe y
            esperanza.
          </p>
        </div>
        {/* Puedes agregar más tarjetas aquí */}
      </div>
      <Footer />
    </div>
  );
}
