import React from "react";
import "./Home.css";
import plaza from "./images/plaza.jpg";
import hacienda from "./images/hacienda.jpg";

function Home() {
  const images = [plaza, hacienda];
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <h1>El Nuevo Refugio, Jalisco, México.</h1>
      <div className="slider">
        <button onClick={prevSlide}>⟨</button>
        <img src={images[current]} alt={`Foto ${current + 1}`} />
        <button onClick={nextSlide}>⟩</button>
      </div>
    </div>
  );
}

export default Home;
