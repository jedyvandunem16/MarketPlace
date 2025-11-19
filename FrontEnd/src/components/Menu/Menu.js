import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/imagens/logo1.png";
import idiomas from "../../assets/incons/idiomas.png";
import login from "../../assets/incons/login.png";
import './menu.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Home">
      <div className="top-nav">
        <div className="top-left">
          <img src={idiomas} alt="Idiomas" />
          <select>
            <option>Português</option>
            <option>Inglês</option>
            <option>Kimbundu</option>
            <option>Umbundu</option>
          </select>
        </div>

        <div className="top-right">
          <img src={login} alt="Login" />
          <Link to="/login">Entrar</Link>
        </div>
      </div>  

    
      <nav className={menuOpen ? "active" : ""}>
        <div className="logo-area">
          <img src={logo} alt="Logo" />
          <h3>AGRIMARKET</h3>
        </div>

        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)} >Home</Link></li>
          <li><Link to="/SobreNos" onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
          <li><Link to="/ProdutosServicos" onClick={() => setMenuOpen(false)}>Produtos & Serviços</Link></li>
          <li><Link to="/Contactos" onClick={() => setMenuOpen(false)}>Contactos</Link></li>
          <li><Link to="/Mercado" onClick={() => setMenuOpen(false)}>Mercado</Link></li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
