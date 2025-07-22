// src/Pages/MapaInteractivo.jsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaInteractivo = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([18.6813, -99.1013], 10); // Morelos

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        textAlign: 'center',
        padding: '0px 0 20px 0',
        minHeight: '100vh',
      }}
    >
      {/* Línea separadora debajo del header verde */}
      <div
        style={{
          height: '3px',
          backgroundColor: '#cd9a6c',
          marginBottom: '20px',
        }}
      ></div>

      {/* Título y línea decorativa */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <h2
          style={{
            fontWeight: 'bold',
            color: '#283C2A',
            fontSize: '2.5rem',
            marginBottom: '10px',
          }}
        >
          MAPA INTERACTIVO
        </h2>
        <hr
          style={{
            width: '75%',
            height: '6px',
            backgroundColor: '#cd9a6c',
            border: 'none',
            margin: '0 auto 30px auto',
            opacity: '1',
          }}
        />
      </div>

      {/* Mapa */}
      <div
        ref={mapRef}
        style={{
          height: '600px',
          width: '90%',
          margin: 'auto',
          borderRadius: '15px',
          border: '4px solid #cd9a6c',
        }}
      ></div>
    </div>
  );
};

export default MapaInteractivo;
