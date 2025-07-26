import React from 'react';

import logoMovilidadBlanco from '../assets/Images/LogoMovilidadBlanco.png'; // ajusta la ruta según el archivo


const Footer = () => {
  return (
    <footer className="dt-footer text-white py-4" style={{ backgroundColor: '#71785B' }}>
      <div className="container dt-footer-container">
        <div className="dt-footer-logo mb-3">
<img src={logoMovilidadBlanco} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </div>

        {/* Versión móvil */}
        <div className="d-lg-none">
          <div className="accordion" id="footerAccordion">
            {[
              { id: 'Horario', title: 'Horario de Atención', content: '8:00 - 15:00' },
              {
                id: 'Contacto', title: 'Contáctanos en', content: (
                  <>
                    <i className="bi bi-telephone-fill me-2"></i>777 329 65 00<br />
                    <i className="bi bi-envelope-fill me-2"></i>correspondencia.movilidad@morelos.gob.mx
                  </>
                )
              },
              {
                id: 'Ubicacion', title: 'Ubicación', content: (
                  <>
                    Corporativos Arcos Cristal, 'Plaza Cristal' Plan de Ayala número 825, Col. Teopanzolco, Cuernavaca, Morelos.
                  </>
                )
              },
              {
                id: 'Rapido', title: 'Contacto Rápido', content: (
                  <>
                    Trámites<br />
                    Atención Ciudadana<br />
                    Gestión de Transporte<br />
                    Renovación de Licencia
                  </>
                )
              }
            ].map(({ id, title, content }) => (
              <div key={id} className="accordion-item text-white border-0" style={{ backgroundColor: '#71785B' }}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#mob${id}`}>
                    {title}
                  </button>
                </h2>
                <div id={`mob${id}`} className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                  <div className="accordion-body">{content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escritorio */}
        <div className="row d-none d-lg-flex gx-3 mt-4">
          <div className="col-lg-2">
            <h6 className="fw-bold">Horario de Atención</h6>
            <p>8:00 - 15:00</p>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-bold">Contáctanos en</h6>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i> 777 329 65 00</p>
            <div className="d-flex align-items-start">
              <i className="bi bi-envelope-fill me-2 mt-1"></i>
              <a href="mailto:correspondencia.movilidad@morelos.gob.mx" className="text-white text-break text-decoration-none">
                correspondencia.movilidad<br />@morelos.gob.mx
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h6 className="fw-bold">Ubicación</h6>
            <p className="text-break">
              Corporativos Arcos Cristal, \"Plaza Cristal\" Plan de Ayala número 825,<br />
              Col. Teopanzolco, Cuernavaca, Morelos.
            </p>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold">Contacto Rápido</h6>
            <p className="mb-0">Trámites</p>
            <p className="mb-0">Atención Ciudadana</p>
            <p className="mb-0">Gestión de Transporte</p>
            <p className="mb-0">Renovación de Licencia</p>
          </div>
        </div>

        <div className="dt-footer-bottom d-flex justify-content-between align-items-center mt-4 flex-wrap">
          <div className="dt-footer-links mb-2 mb-md-0 d-flex flex-wrap gap-3">
            <a href="#" className="text-white text-decoration-none">Política Privacidad</a>
            <a href="#" className="text-white text-decoration-none">Configuración cookies</a>
          </div>
          <div className="dt-footer-social d-flex gap-3">
            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
