
import { useNavigate } from 'react-router-dom';
import VectorDeMovilidadBlanco from '../assets/Images/VectorDeMovilidadBlanco.png';

const Footer = () => {
  const navigate = useNavigate();
return (
<footer className="dt-footer text-white py-4" style={{ backgroundColor: '#71785B' }}>
<div className="container dt-footer-container">

        {/* Logo */}
        <div className="dt-footer-logo mb-3">
<img src={VectorDeMovilidadBlanco} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
</div>

        {/* Acordeón móvil */}
        <div className="d-lg-none">
          <div className="accordion" id="footerAccordion">

            {/* Horario */}
            <div className="accordion-item text-white border-0" style={{ backgroundColor: '#71785B' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mobHorario" style={{ backgroundColor: '#71785B' }}>
                  Horario de Atención
                </button>
              </h2>
              <div id="mobHorario" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                <div className="accordion-body">8:00 - 15:00</div>
              </div>
            </div>

            {/* Contacto */}
            <div className="accordion-item text-white border-0" style={{ backgroundColor: '#71785B' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mobContacto" style={{ backgroundColor: '#71785B' }}>
                  Contáctanos en
                </button>
              </h2>
              <div id="mobContacto" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                <div className="accordion-body">
                  <i className="bi bi-telephone-fill me-2"></i>777 329 65 00<br />
                  <i className="bi bi-envelope-fill me-2"></i>correspondencia.movilidad@morelos.gob.mx
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="accordion-item text-white border-0" style={{ backgroundColor: '#71785B' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mobUbicacion" style={{ backgroundColor: '#71785B' }}>
                  Ubicación
                </button>
              </h2>
              <div id="mobUbicacion" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                <div className="accordion-body">
                  Corporativos Arcos Cristal, 'Plaza Cristal' Plan de Ayala número 825, Col. Teopanzolco, Cuernavaca, Morelos.
                </div>
              </div>
            </div>

            {/* Contacto rápido */}
            <div className="accordion-item text-white border-0" style={{ backgroundColor: '#71785B' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mobRapido" style={{ backgroundColor: '#71785B' }}>
                  Contacto Rápido
                </button>
              </h2>
              <div id="mobRapido" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                <div className="accordion-body">
                  Trámites<br />
                  Atención Ciudadana<br />
                  Gestión de Transporte<br />
                  Renovación de Licencia
                </div>
              </div>
            </div>

          </div>
        </div>

       {/* Vista expandida escritorio (≥lg) */}
<div className="row d-none d-lg-flex gx-3 mt-4">
  <div className="col-lg-2">
    <h6 className="fw-bold">Horario de Atención</h6>
    <p>8:00 - 15:00</p>
  </div>

  <div className="col-lg-3">
    <h6 className="fw-bold">Contáctanos en</h6>
    <p className="mb-1">
      <i className="bi bi-telephone-fill me-2"></i> 777 329 65 00
    </p>
    <div className="d-flex align-items-start">
      <i className="bi bi-envelope-fill me-2 mt-1"></i>
      <a
        href="mailto:correspondencia.movilidad@morelos.gob.mx"
        className="text-white text-break text-decoration-none"
      >
        correspondencia.movilidad@morelos.gob.mx
      </a>
    </div>
  </div>

  <div className="col-lg-4">
    <h6 className="fw-bold">Ubicación</h6>
    <p className="text-break">
      Corporativos Arcos Cristal, "Plaza Cristal" Plan de Ayala número 825,<br />
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
        </div>
        </footer>
    );
    }   

export default Footer;