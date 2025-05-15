import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <h1>El Nuevo Refugio, Jalisco, México.</h1>
      <h3>Bienvenidos a la comunidad de El Nuevo Refugio, Jalisco.</h3>
      <Footer />
    </div>
  );
}

export default App;
