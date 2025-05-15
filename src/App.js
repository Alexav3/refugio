// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Eventos from "./Eventos";
import Historia from "./Historia";
import Contacto from "./Contacto";
import Lugares from "./Lugares";
import Galeria from "./Galeria";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Router>
  );
}

export default App;
