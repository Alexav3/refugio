import React, { useState } from "react";
import "./Eventos.css";
import virgen from "./images/virgen.jpg";
import semanaSanta from "./images/semanaSanta.jpg";
import nacimiento from "./images/nacimiento.jpg";
import sanJuan from "./images/sanJuan.jpg";

function getDaysRemaining(month, day) {
  const today = new Date();
  const year = today.getFullYear();
  let targetDate = new Date(year, month - 1, day);
  if (today > targetDate) {
    targetDate = new Date(year + 1, month - 1, day);
  }
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

const events = [
  {
    title: "Fiestas Patronales",
    date: `4 de Julio — Próximamente en: ${getDaysRemaining(7, 4)} días.`,
    image: virgen,
    description:
      "Cada 4 de julio se celebran en la comunidad de El Nuevo Refugio las fiestas patronales en honor a la Virgen del Refugio. Esta festividad se lleva a cabo año con año, siendo una de las más importantes del pueblo.",
  },
  {
    title: "Semana Santa",
    date: "De acuerdo al calendario parroquial",
    image: semanaSanta,
    description:
      "Cada año, la comunidad de El Nuevo Refugio conmemora la Semana Santa con diversas actividades religiosas, incluyendo procesiones, representaciones del Viacrucis y momentos de oración.",
  },
  {
    title: "Navidad",
    date: `25 de Diciembre — Próximamente en: ${getDaysRemaining(
      12,
      25
    )} días.`,
    image: nacimiento,
    description:
      "Celebración de la Navidad con actividades religiosas y comunitarias. Se realizan pastorelas, se canta al Niño Dios y se fomenta la convivencia entre las familias del pueblo.",
  },
  {
    title: "Peregrinación a San Juan de los Lagos",
    date: "A principios de Enero.",
    image: sanJuan,
    description:
      "Peregrinación que se realiza año con año hacia San Juan de los Lagos, en devoción a la Virgen de San Juan. Es un evento especial que une a la comunidad para encomendar el nuevo año con fe y esperanza.",
  },
];

export default function Eventos() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="event-page">
      <h1>Fechas importantes.</h1>
      <p>La comunidad de El Nuevo Refugio celebra las siguientes fechas.</p>
      <div className="event-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <h5>{event.date}</h5>
              </div>
              <div className="flip-card-back">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
