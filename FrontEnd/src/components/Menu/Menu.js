import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/imagens/logo1.png";
import './menu.css';
function Navbar(){
  function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
const [menuOpen, setMenuOpen] = useState(false);

 return (
  <div class="Home">
    <nav className={menuOpen ? "active" : ""}>
      <div className="logo-area">
        <img src={logo} alt="Logo" />
        <h3>AGRIMARKET</h3>
      </div>

      <ul>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/SobreNos" onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
        <li><Link to="/ProdutosServicos" onClick={() => setMenuOpen(false)}>Produtos & Serviços</Link></li>
        <li><Link to="/Contactos" onClick={() => setMenuOpen(false)}>Contactos</Link></li>
        <li><Link to="/Mercado" onClick={() => setMenuOpen(false)}>Mercado</Link></li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  </div>
);

} 

export default Navbar;