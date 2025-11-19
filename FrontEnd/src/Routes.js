import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SobreNos from './pages/SobreNos/SobreNos';
import ProdutosServicos from './pages/ProdutosServicos/ProdutosServicos';
import Contactos from './pages/Contactos/Contactos';
import Mercado from './pages/Mercado/Mercado';
import Cadastro from './components/cadstroo';
import Login from './components/Login/Login';
import Carrinho from './pages/Carrinho/Carrinho';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './pages/Dashboard/User';
import Configuracao from './pages/Dashboard/Configuracao';
import ProdServ from './pages/ProdServ/ProdServ';


function Routs() {
  return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/ProdutosServicos" element={<ProdutosServicos />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Mercado" element={<Mercado />} />    
            <Route path="/index" element={<Cadastro />} /> 
            <Route path="/Login" element={<Login/>} /> 
            <Route path="/Carrinho" element={<Carrinho/>} /> 
            <Route path="/Dashboard" element={<Dashboard/>} /> 
            <Route path="/User" element={<User/>} /> 
            <Route path="/Configuracao" element={<Configuracao/>} /> 
            <Route path="/ProdServ" element={<ProdServ/>} /> 
        </Routes>
  );
}

export default Routs;

