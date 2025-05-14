import React from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* 👈 use it here */}
      <h1>El Nuevo Refugio, Jalisco, México.</h1>
      <p>Bienvenidos a la comunidad de El Nuevo Refugio, Jalisco.</p>
    </div>
  );
}

export default App;
