import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

// Páginas principales
import Inicio from './Pages/Inicio';
import Centro from './Pages/Centro';
import Sur from './Pages/Sur';
import Oriente from './Pages/Oriente';
import RutaSalud from './Pages/RutaSalud'; // Esta es la que quieres ver

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/centro" element={<Centro />} />
        <Route path="/sur" element={<Sur />} />
        <Route path="/oriente" element={<Oriente />} />
        <Route path="/ruta-salud" element={<RutaSalud />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
