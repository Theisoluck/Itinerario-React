import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaInteractivo = () => {
  const mapRef = useRef(null);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [zonaCentroAbierta, setZonaCentroAbierta] = useState(false);
  const [ruta15Abierta, setRuta15Abierta] = useState(false);
  const [zonaSurAbierta, setZonaSurAbierta] = useState(false);
  const [zonaOrienteAbierta, setZonaOrienteAbierta] = useState(false);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([18.6813, -99.1013], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    return () => map.remove();
  }, []);

  return (
    <div className="bg-white d-flex flex-column min-vh-100">
      <div style={{ height: '5px', backgroundColor: '#cd9a6c' }}></div>


      <div className="d-flex align-items-center justify-content-center my-4 position-relative">
        <button
          className="btn position-absolute start-0 ms-4"
          style={{ backgroundColor: '#cd9a6c', color: 'white', zIndex: 1050 }}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          →
        </button>
        <h2 className="fw-bold text-dark text-center mb-0">MAPA INTERACTIVO</h2>
      </div>

      <hr
        className="mx-auto mb-4"
        style={{
          width: '75%',
          height: '6px',
          backgroundColor: '#cd9a6c',
          opacity: 1,
          border: 'none',
        }}
      />

      <div className="position-relative mx-auto mb-5" style={{ width: '90%' }}>
        <div
          ref={mapRef}
          className="rounded"
          style={{ height: '600px', border: '4px solid #cd9a6c' }}
        ></div>
      </div>

      {menuAbierto && (
        <div
          className="position-fixed top-0 start-0  text-white p-3 shadow overflow-auto"
          style={{ width: '280px', height: '100vh', backgroundColor: '#283C2A', zIndex: 1050 }}
        >
          <button
            className="btn"
            style={{ backgroundColor: '#cd9a6c', color: 'white' }}
            onClick={() => setMenuAbierto(false)}
          >
            ←
          </button>


          <div className="mt-5">
            <h5 className="fw-bold mb-3">Zonas</h5>

            <div className="accordion" id="accordionZonas">
              {/* ZONA CENTRO */}
              <div className="accordion-item" style={{ backgroundColor: '#283C2A', color: 'white' }}>

                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    style={{ backgroundColor: '#cd9a6c', color: 'white' }}
                    type="button"
                    onClick={() => setZonaCentroAbierta(!zonaCentroAbierta)}
                  >
                    Centro
                  </button>

                </h2>
                {zonaCentroAbierta && (
                  <div className="accordion-body">
                    <div className="accordion" id="rutasCentro">
                      <div className="accordion-item bg-dark text-white" style={{ color: '#283C2A' }}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            style={{ backgroundColor: '#d9b896', color: '#283C2A' }}
                            type="button"
                            onClick={() => setRuta15Abierta(!ruta15Abierta)}
                          >
                            Ruta 15
                          </button>

                        </h2>
                        {ruta15Abierta && (
                          <div className="accordion-body" style={{ backgroundColor: 'white', color: '#283C2A' }}>
                            <ul className="list-unstyled ps-3">
                              <li className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="trayectoA"
                                />
                                <label
                                  className="form-check-label"
                                  style={{ color: '#283C2A' }}
                                  htmlFor="trayectoA"
                                >
                                  Trayecto A
                                </label>
                              </li>
                              <li className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="trayectoB"
                                />
                                <label
                                  className="form-check-label"
                                  style={{ color: '#283C2A' }}
                                  htmlFor="trayectoB"
                                >
                                  Trayecto B
                                </label>
                              </li>
                            </ul>
                          </div>
                        )}


                      </div>
                      {/* Puedes agregar más rutas aquí */}
                    </div>
                  </div>
                )}
              </div>

              {/* ZONA SUR */}
              <div className="accordion-item" style={{ backgroundColor: '#283C2A', color: 'white' }}>

                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-secondary text-white"
                    type="button"
                    onClick={() => setZonaSurAbierta(!zonaSurAbierta)}
                  >
                    Sur
                  </button>
                </h2>
                {zonaSurAbierta && (
                  <div className="accordion-body">
                    <p className="text-white">Aquí van las rutas del Sur.</p>
                  </div>
                )}
              </div>

              {/* ZONA ORIENTE */}
              <div className="accordion-item" style={{ backgroundColor: '#283C2A', color: 'white' }}>

                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-secondary text-white"
                    type="button"
                    onClick={() => setZonaOrienteAbierta(!zonaOrienteAbierta)}
                  >
                    Oriente
                  </button>
                </h2>
                {zonaOrienteAbierta && (
                  <div className="accordion-body">
                    <p className="text-white">Aquí van las rutas del Oriente.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapaInteractivo;
