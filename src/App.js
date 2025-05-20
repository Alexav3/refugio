import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Eventos from "./Eventos";
import Historia from "./Historia";
import Contacto from "./Contacto";
import Lugares from "./Lugares";
import Galeria from "./Galeria";
import Gente from "./Gente";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/historia" element={<Historia />} />
            <Route
              path="/historia/fundacion"
              element={<div>Historia y fundación</div>}
            />
            <Route
              path="/historia/archivohistorico"
              element={<div>Archivo Histórico</div>}
            />
            <Route
              path="/historia/testimonios"
              element={<div>Testimonios</div>}
            />
            <Route path="/nuestragente" element={<Gente />} />
            <Route
              path="/nuestragente/biografias"
              element={<div>Biografias</div>}
            />
            <Route
              path="/nuestragente/miembrosdestacados"
              element={<div>Miembros Destacados</div>}
            />
            <Route
              path="/nuestragente/hijosausentes"
              element={<div>Hijos Ausentes</div>}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
