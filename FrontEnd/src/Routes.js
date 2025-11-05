import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SobreNos from './pages/SobreNos/SobreNos';
import ProdutosServicos from './pages/ProdutosServicos/ProdutosServicos';
import Contactos from './pages/Contactos/Contactos';
import Mercado from './pages/Mercado/Mercado';


function Routs() {
  return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/ProdutosServicos" element={<ProdutosServicos />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Mercado" element={<Mercado />} />
        </Routes>
  );
}

export default Routs;

