import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./footer";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home-content">
        <h1>Bienvenidos a El Nuevo Refugio</h1>
        <p>
          El Nuevo Refugio es un lugar lleno de historia y tradiciones. Aquí
          podrás conocer más sobre nuestra comunidad, festividades y lugares
          importantes.
        </p>
        <p>
          Explora nuestro sitio para descubrir todo lo que tenemos para ofrecer.
        </p>
      </div>
    </div>
  );
}

export default Home;
