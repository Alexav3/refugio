// src/Lugares.js
import React from "react";
import "./Lugares.css";
import Navbar from "./Navbar";
import hacienda from "./images/hacienda.jpg";
import plaza from "./images/plaza.jpg";

export default function Lugares() {
  return (
    <div className="lugares-container">
      <Navbar />
      <h1>Lugares Importantes</h1>

      <div className="image-text-grid">
        <div className="image-text-box">
          <img src={hacienda} alt="Hacienda" />
          <div className="text-content">
            <h2>La Hacienda de San Antonio.</h2>
            <p>
              La Hacienda de San Antonio, ubicada en el antiguo Rancho Viejo,
              fue un importante lugar de culto para la comunidad. En este sitio,
              el padre Sabás Reyes Salazar —sacerdote y mártir originario de
              Cocula, Jalisco— celebró misas y ofreció orientación espiritual a
              los habitantes. Fue un hombre sencillo y devoto, recordado por su
              entrega durante la persecución religiosa en México. Fue capturado
              en 1927 por ejercer su ministerio en secreto, y antes de morir,
              exclamó con valentía: “¡Viva Cristo Rey!”.
            </p>
          </div>
        </div>

        <div className="image-text-box">
          <img src={plaza} alt="Plaza" />
          <div className="text-content">
            <h2>La Plaza</h2>
            <p>
              La Plaza Principal de El Nuevo Refugio, en el municipio de
              Tototlán, Jalisco, es un espacio central para la vida comunitaria.
              Construida en los años 2000, cuenta con un kiosco amplio y áreas
              ajardinadas que la convierten en un lugar de encuentro y
              recreación para familias y visitantes. Durante las fiestas
              patronales en honor a Nuestra Señora del Refugio, la plaza se
              llena de vida con actividades religiosas, culturales y
              recreativas, reflejando la devoción y unidad del pueblo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
