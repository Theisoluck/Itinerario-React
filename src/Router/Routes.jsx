import { Routes, Route } from 'react-router-dom';
import MapaInteractivo from '../Pages/MapaInteractivo';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MapaInteractivo />} />
        </Routes>
    );
};

export default AppRoutes;
