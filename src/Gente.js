// src/Gente.js
import React from "react";
import NavbarGente from "./NavbarGente";
import "./Gente.css";

export default function Gente() {
  return (
    <div className="gente-container">
      <NavbarGente />
      <h1>Nuestra Gente</h1>
      <p>
        La comunidad de El Nuevo Refugio está formada por personas trabajadoras,
        solidarias y llenas de fe.
      </p>
    </div>
  );
}
