// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Eventos from "./Eventos";
import Historia from "./Historia";
import Contacto from "./Contacto";
import Lugares from "./Lugares";
import Galeria from "./Galeria";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./App.css"; // Make sure this includes the layout styles

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
