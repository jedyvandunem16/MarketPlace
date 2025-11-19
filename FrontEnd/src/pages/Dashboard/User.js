import React, { useState } from 'react';
import './User.css';
import { Link, useLocation } from 'react-router-dom'; 

function User() {
  const location = useLocation();
  const [users, setUsers] = useState([
    { id: 1, name: 'João Silva', email: 'joao@email.com', tipo: 'Cliente', status: 'Ativo', dataRegisto: '2024-01-15' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', tipo: 'Vendedor', status: 'Ativo', dataRegisto: '2024-01-14' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', tipo: 'Cliente', status: 'Inativo', dataRegisto: '2024-01-13' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', tipo: 'Administrador', status: 'Ativo', dataRegisto: '2024-01-12' },
    { id: 5, name: 'Carlos Fernandes', email: 'carlos@email.com', tipo: 'Vendedor', status: 'Ativo', dataRegisto: '2024-01-11' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('todos');
  const [filterStatus, setFilterStatus] = useState('todos');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'todos' || user.tipo === filterType;
    const matchesStatus = filterStatus === 'todos' || user.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

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

      {/* Main Content */}
      <div className="main-content">
        <div className="users-page">
          <div className="page-header">
            <h1>Gestão de Usuários</h1>
            <button className="add-user-btn">
              + Novo Usuário
            </button>
          </div>

          {/* Filtros */}
          <div className="filters-section">
            <div className="search-filter">
              <input 
                type="text" 
                placeholder="Pesquisar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-group">
              <label>Tipo de Usuário:</label>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos</option>
                <option value="Cliente">Cliente</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Status:</label>
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="users-stats">
            <div className="user-stat-card">
              <h3>Total de Usuários</h3>
              <div className="stat-number">{users.length}</div>
            </div>
            
            <div className="user-stat-card">
              <h3>Clientes</h3>
              <div className="stat-number">{users.filter(u => u.tipo === 'Cliente').length}</div>
            </div>
            
            <div className="user-stat-card">
              <h3>Vendedores</h3>
              <div className="stat-number">{users.filter(u => u.tipo === 'Vendedor').length}</div>
            </div>
            
            <div className="user-stat-card">
              <h3>Usuários Ativos</h3>
              <div className="stat-number">{users.filter(u => u.status === 'Ativo').length}</div>
            </div>
          </div>

          {/* Tabela de Usuários */}
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Data de Registo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {user.name.charAt(0)}
                        </div>
                        <div className="user-details">
                          <div className="user-name">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`user-type ${user.tipo.toLowerCase()}`}>
                        {user.tipo}
                      </span>
                    </td>
                    <td>
                      <span 
                        className={`status-badge ${user.status.toLowerCase()}`}
                        onClick={() => handleStatusChange(
                          user.id, 
                          user.status === 'Ativo' ? 'Inativo' : 'Ativo'
                        )}
                        style={{cursor: 'pointer'}}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>{user.dataRegisto}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-edit">Editar</button>
                        <button 
                          className="btn-remove"
                          onClick={() => handleRemoveUser(user.id)}
                        >
                          Remover
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="no-results">
                <p>Nenhum usuário encontrado com os filtros aplicados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;