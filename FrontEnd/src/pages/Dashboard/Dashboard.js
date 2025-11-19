import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Dashboard.css';



function Dashboard() {
  const location = useLocation(); // Agora está importado corretamente
  const [products, setProducts] = useState([
    { id: 1, name: 'Café Premium', price: '5.000', stock: 20 },
    { id: 2, name: 'Chá Verde', price: '3.500', stock: 15 }
  ]);

  return (
     <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Marketplace</h2>
        </div>
        <ul className="sidebar-menu">
          <li className={`menu-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/products' ? 'active' : ''}`}>
            <Link to="/Dashboard">Produtos</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/users' ? 'active' : ''}`}>
            <Link to="/User">Usuários</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <Link to="/Configuracao">Configurações</Link>
          </li>
        </ul>
      </div>


      <div className="main-content">
        <h1>Painel Geral</h1>
        
        <div className="stats-section">
          <div className="stat-item">
            <h3>Produtos</h3>
            <div className="stat-value">32</div>
          </div>
          
          <div className="stat-item">
            <h3>Usuários</h3>
            <div className="stat-value">124</div>
          </div>
          
          <div className="stat-item">
            <h3>Vendas</h3>
            <div className="stat-value">450.000 Kz</div>
          </div>
        </div>
         <div className="search-item">
            <input 
              type="text" 
              placeholder="Pesquisar..."
              className="search-input"
            />
          </div>

        <div className="divider"></div>

        <div className="products-management">
          <div className="section-header">
            <h2>Gestão de Produtos</h2>
            <button className="add-product-btn">
              + Adicionar Produto
            </button>
          </div>

          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço (Kz)</th>
                <th>Stock</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-remove">Remover</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;