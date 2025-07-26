import React from 'react';
import { Link } from 'react-router-dom';
// Header.jsx
import logoPrincipal from '../assets/Images/Logo_principal.png'; // <- nombre correcto


const Header = () => {
  return (
    <header style={{ backgroundColor: '#283C2A' }}>
      <nav className="navbar navbar-expand-lg navbar-dark px-3">
        <div className="container-fluid">
          <a className="navbar-brand mb-0" href="#">
        <img src={logoPrincipal} alt="Morelos" className="img-fluid" style={{ maxHeight: '44px' }} />
          </a>
          <button className="navbar-toggler p-1 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <i className="bi bi-list fs-1" style={{ color: '#C29A6D' }}></i>
          </button>

          <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarMenu">
            <ul className="navbar-nav w-100 justify-content-evenly text-uppercase align-items-lg-center">
              <li className="nav-item"><Link to="/" className="nav-link fw-bold" style={{ color: '#C29A6D' }}>Inicio</Link></li>
              <li className="nav-item"><Link to="/centro" className="nav-link text-white">Centro</Link></li>
              <li className="nav-item"><Link to="/sur" className="nav-link text-white">Sur</Link></li>
              <li className="nav-item"><Link to="/oriente" className="nav-link text-white">Oriente</Link></li>
              <li className="nav-item"><Link to="/ruta-salud" className="nav-link text-white">Ruta de la Salud</Link></li>
              <li className="nav-item"><Link to="/zonas" className="nav-link text-white">Zonas</Link></li>
              <li className="nav-item"><Link to="/plan-popocatepetl" className="nav-link text-white">Plan Popocatépetl</Link></li>
              <li className="nav-item"><Link to="/mapa-interactivo" className="nav-link text-white">Mapa interactivo</Link></li>
            </ul>

            <button className="btn d-none d-lg-block" id="toggleSearch" type="button">
              <i className="bi bi-search fs-5" style={{ color: '#C29A6D' }}></i>
            </button>

            <form id="searchForm" className="collapse w-100 mt-3 d-lg-none" role="search"
              style={{ backgroundColor: '#C29A6D' }}
              onSubmit={e => {
                e.preventDefault();
                const query = encodeURIComponent(document.getElementById('searchInput').value);
                window.location.href = `https://www.morelos.gob.mx/search?query=${query}`;
              }}>
              <div className="input-group">
                <input type="search" className="form-control rounded-start px-3" id="searchInput" required
                  placeholder="Buscar en morelos.gob.mx" />
                <button className="btn rounded-end" type="submit" style={{ backgroundColor: '#C29A6D' }}>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <form id="desktopSearchForm" className="collapse py-3 px-3" role="search" style={{ backgroundColor: '#C29A6D' }}
        onSubmit={e => {
          e.preventDefault();
          const query = encodeURIComponent(document.getElementById('desktopSearchInput').value);
          window.location.href = `https://www.morelos.gob.mx/search?query=${query}`;
        }}>
        <div className="container">
          <div className="input-group">
            <input type="search" className="form-control" id="desktopSearchInput" required placeholder="Buscar en morelos.gob.mx" />
            <button className="btn rounded-end" type="submit" style={{ backgroundColor: '#C29A6D', border: '2px solid white' }}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </form>

      <script>
        {`
          document.getElementById('toggleSearch')?.addEventListener('click', function () {
            document.getElementById('desktopSearchForm')?.classList.toggle('show');
          });
        `}
      </script>
    </header>
  );
};

export default Header;
