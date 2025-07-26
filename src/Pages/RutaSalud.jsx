import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import '../assets/Css/Estilos.css';

import flechaRegreso from '../assets/Images/Flecha_Regreso.png';
import vector from '../assets/Images/Vector.png';
import logoMovilidad from '../assets/Images/LogoMovilidadBlancoAmarrillo.png';

const RutaSalud = () => {
  const mapRef = useRef(null);
  const usuarioMarkerRef = useRef(null);
  const paradaCercanaMarkerRef = useRef(null);
  const controlRutaRef = useRef(null);

  useEffect(() => {
    const map = L.map('map');
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    fetch("http://localhost:3000/api/rutas/salud")
      .then(res => res.json())
      .then(data => {
        const ruta = L.geoJSON(data, {
          style: { color: "#cd9a6c", weight: 4 },
          onEachFeature: function (feature, layer) {
            if (feature.geometry.type === "Point" && feature.properties?.nombre) {
              L.marker(feature.geometry.coordinates.reverse(), {
                icon: L.icon({
                  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                  iconSize: [30, 30]
                })
              }).addTo(map).bindPopup(`<strong>${feature.properties.nombre}</strong>`);
            }
          }
        }).addTo(map);

        map.fitBounds(ruta.getBounds());

        // 🔧 SOLUCIÓN: Forzar redibujo correcto del mapa
        setTimeout(() => {
          map.invalidateSize();
        }, 300);
      });
  }, []);

  const getLocation = () => {
    const map = mapRef.current;
    if (!map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        if (usuarioMarkerRef.current) map.removeLayer(usuarioMarkerRef.current);
        usuarioMarkerRef.current = L.marker([lat, lon])
          .addTo(map)
          .bindPopup("Estás aquí")
          .openPopup();

        map.setView([lat, lon], 15);
      }, err => {
        alert("Error obteniendo ubicación: " + err.message);
      });
    } else {
      alert("La geolocalización no es soportada.");
    }
  };

  const mostrarParadaCercana = () => {
    const map = mapRef.current;
    if (!map) return;

    const paradas = [
      { nombre: "Parada A", coords: [18.920, -99.234] },
      { nombre: "Parada B", coords: [18.918, -99.230] },
      { nombre: "Parada C", coords: [18.922, -99.237] }
    ];

    if (!navigator.geolocation) return alert("Geolocalización no soportada.");

    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      let minDist = Infinity;
      let cercana = null;

      paradas.forEach(p => {
        const d = Math.hypot(p.coords[0] - lat, p.coords[1] - lon);
        if (d < minDist) {
          minDist = d;
          cercana = p;
        }
      });

      if (paradaCercanaMarkerRef.current) map.removeLayer(paradaCercanaMarkerRef.current);
      paradaCercanaMarkerRef.current = L.marker(cercana.coords, {
        icon: L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          iconSize: [30, 30]
        })
      }).addTo(map).bindPopup(`<strong>${cercana.nombre}</strong>`).openPopup();

      map.setView(cercana.coords, 16);
    }, err => {
      alert("Error obteniendo ubicación: " + err.message);
    });
  };

  const trazarRutaDesdeUbicacion = () => {
    const map = mapRef.current;
    if (!map) return;

    const destino = document.getElementById("destino").value;
    if (!destino) return;

    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
      try {
        const origen = L.latLng(pos.coords.latitude, pos.coords.longitude);
        const destinoCoords = destino.split(',').map(Number);
        const destinoLatLng = L.latLng(destinoCoords);

        if (controlRutaRef.current) map.removeControl(controlRutaRef.current);

        controlRutaRef.current = L.Routing.control({
          waypoints: [origen, destinoLatLng],
          routeWhileDragging: false,
          show: false,
          createMarker: () => null,
          lineOptions: {
            styles: [{ color: '#cd9a6c', weight: 5 }]
          }
        }).addTo(map);
      } catch (error) {
        console.error("Error al trazar ruta:", error);
        alert("Ocurrió un error al trazar la ruta.");
      }
    }, err => {
      alert("Error obteniendo ubicación: " + err.message);
    });
  };

  return (
    <>
      <main>
        <div className="text-center py-5 position-relative" style={{ backgroundColor: '#283C2A' }}>
          <img
            src={flechaRegreso}
            alt="Regresar"
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '50px',
              zIndex: 2,
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/'}
          />

          <img
            src={vector}
            alt="Fondo gráfico"
            className="position-absolute start-0 w-100 img-fluid opacity-25"
            style={{ top: '10px', zIndex: 0 }}
          />

          <div className="position-relative z-1 container text-center">
            <img
              src={logoMovilidad}
              alt="Logo Movilidad"
              className="img-fluid mx-auto d-block w-75 w-md-50 w-lg-25"
            />
            <h2 className="fw-bold mt-3 mb-2" style={{ color: '#C29A6D' }}>RUTA DE LA SALUD</h2>
            <div className="mx-auto w-100" style={{ borderBottom: '4px solid #C29A6D' }}></div>
          </div>
        </div>

        <div style={{ height: '6px', backgroundColor: '#cd9a6c', width: '100%' }}></div>

        <section className="container my-5 text-center">
          <div className="mb-4">
            <button className="btn btn-danger me-2" onClick={getLocation}>¿Dónde estoy?</button>
            <button className="btn btn-warning" onClick={mostrarParadaCercana}>Parada más cercana</button>
          </div>

          <div className="mb-3">
            <label htmlFor="destino" className="form-label fw-bold">Selecciona tu destino:</label>
            <select id="destino" className="form-select w-auto d-inline-block" onChange={trazarRutaDesdeUbicacion}>
              <option value="">-- Elegir --</option>
              <option value="18.910,-99.220">IMSS Plan de Ayala</option>
              <option value="18.922,-99.237">Walmart Jiutepec</option>
              <option value="18.921,-99.235">Palacio de Cortés</option>
            </select>
          </div>

          <div id="map" style={{
            height: '500px',
            width: '100%',
            border: '10px solid #cd9a6c',
            borderRadius: '10px'
          }}></div>
        </section>
      </main>
    </>
  );
};

export default RutaSalud;
