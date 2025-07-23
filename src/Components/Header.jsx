
import { useNavigate } from 'react-router-dom';
import VectorDeGrecas from '../assets/Images/VectorDeGrecas.png';
import VectorDeMorelos from '../assets/Images/VectorDeMorelos.png';
import VectorDemovilidad from '../assets/Images/VectorDeMovilidad.png';


const Header = () => {
    const navigate = useNavigate();

    const handleSearch = (e, inputId) => {
        e.preventDefault();
        const query = document.getElementById(inputId).value;
        window.location.href = `https://www.morelos.gob.mx/search?query=${encodeURIComponent(query)}`;
    };

    return (
        <header style={{ backgroundColor: '#283C2A' }}>
            <nav className="navbar navbar-expand-lg navbar-dark px-3">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand mb-0" onClick={() => navigate('/')}>
                        <img src={VectorDeMorelos} alt="Morelos" className="img-fluid" style={{ maxHeight: '44px', cursor: 'pointer' }} />
                    </a>

                    {/* Botón hamburguesa */}
                    <button className="navbar-toggler p-1 border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                        <i className="bi bi-list fs-1" style={{ color: '#C29A6D' }}></i>
                    </button>

                    {/* Menú */}
                    <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarMenu">
                        <ul className="navbar-nav w-100 justify-content-evenly text-uppercase align-items-lg-center">
                            <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#C29A6D' }} onClick={() => navigate('/')}>Inicio</a></li>
                            <li className="nav-item"><a className="nav-link text-white" onClick={() => navigate('/zona/centro')}>Centro</a></li>
                            <li className="nav-item"><a className="nav-link text-white" onClick={() => navigate('/zona/sur')}>Sur</a></li>
                            <li className="nav-item"><a className="nav-link text-white" onClick={() => navigate('/zona/oriente')}>Oriente</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/Html/RutaDeLaSalud.html">Ruta de la Salud</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/Html/Zonas.html">Zonas</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/Html/PlanPopocatepetl.html">Plan Popocatépetl</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="/Html/MapaInteractivo.html">Mapa interactivo</a></li>

                            {/* Búsqueda móvil */}
                            <li className="nav-item d-lg-none">
                                <a href="#" className="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#searchForm">
                                    <i className="bi bi-search"></i> Buscar
                                </a>
                            </li>
                        </ul>

                        {/* Búsqueda escritorio */}
                        <button className="btn d-none d-lg-block" id="toggleSearch" type="button" onClick={() => {
                            document.getElementById('desktopSearchForm').classList.toggle('show');
                        }}>
                            <i className="bi bi-search fs-5" style={{ color: '#C29A6D' }}></i>
                        </button>

                        {/* Formulario móvil */}
                        <form id="searchForm" className="collapse w-100 mt-3 d-lg-none" role="search" style={{ backgroundColor: '#C29A6D' }} onSubmit={(e) => handleSearch(e, 'searchInput')}>
                            <div className="input-group">
                                <input type="search" className="form-control rounded-start px-3" placeholder="Buscar en morelos.gob.mx" id="searchInput" required />
                                <button className="btn rounded-end" type="submit" style={{ backgroundColor: '#C29A6D' }}>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Búsqueda escritorio desplegable */}
            <form id="desktopSearchForm" className="collapse py-3 px-3" role="search" style={{ backgroundColor: '#C29A6D' }} onSubmit={(e) => handleSearch(e, 'desktopSearchInput')}>
                <div className="container">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Buscar en morelos.gob.mx" id="desktopSearchInput" required />
                        <button className="btn rounded-end" type="submit" style={{ backgroundColor: '#C29A6D', border: '2px solid white' }}>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* Fondo gráfico y logo movilidad */}
            <div className="text-center py-5 position-relative" style={{ backgroundColor: '#283C2A' }}>
                <img src={VectorDeGrecas} alt="Fondo gráfico" className="position-absolute start-0 w-100 img-fluid opacity-25" style={{ top: 10, zIndex: 0, opacity: 0.05 }} />
                <div className="position-relative z-1 container text-center">
                    <img src={VectorDemovilidad} alt="Logo Movilidad" className="img-fluid mx-auto d-block w-75 w-md-50 w-lg-25" />
                </div>
            </div>
        </header>
    );
};

export default Header;
