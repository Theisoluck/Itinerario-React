import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RutaSalud from '../Pages/RutaSalud';
// Puedes agregar más páginas como: Inicio, Centro, Sur...

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-5">Bienvenido a Tu Ruta Morelos</h1>} />
        <Route path="/ruta-salud" element={<RutaSalud />} />
        {/* Agrega aquí más rutas si lo deseas */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
