import React, { useState } from 'react';
import './Configuracao.css';
import { Link, useLocation } from 'react-router-dom'; 


function Configuracao() {
    const location = useLocation();
    const [settings, setSettings] = useState({
    storeName: 'Meu Marketplace',
    storeEmail: 'admin@marketplace.com',
    storePhone: '+244 923 456 789',
    storeAddress: 'Luanda, Angola',
    currency: 'Kz',
    language: 'pt',
    timezone: 'Africa/Luanda',
    notifications: true,
    emailNotifications: true,
    smsNotifications: false
  });

  const [activeTab, setActiveTab] = useState('geral');

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = () => {
    alert('Configurações guardadas com sucesso!');
    // Aqui você pode adicionar a lógica para salvar no backend
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

  
      <div className="main-content">
        <div className="settings-page">
          <div className="page-header">
            <h1>Configurações</h1>
          </div>

  
          <div className="settings-tabs">
            <button 
              className={`tab-button ${activeTab === 'geral' ? 'active' : ''}`}
              onClick={() => setActiveTab('geral')}
            >
               Geral
            </button>
            <button 
              className={`tab-button ${activeTab === 'notificacoes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notificacoes')}
            >
               Notificações
            </button>
            <button 
              className={`tab-button ${activeTab === 'seguranca' ? 'active' : ''}`}
              onClick={() => setActiveTab('seguranca')}
            >
               Segurança
            </button>
            <button 
              className={`tab-button ${activeTab === 'aparencia' ? 'active' : ''}`}
              onClick={() => setActiveTab('aparencia')}
            >
               Aparência
            </button>
          </div>

     
          <div className="settings-content">
            {activeTab === 'geral' && (
              <div className="settings-section">
                <h2>Informações da Loja</h2>
                <div className="settings-grid">
                  <div className="form-group">
                    <label>Nome da Loja</label>
                    <input
                      type="text"
                      value={settings.storeName}
                      onChange={(e) => handleInputChange('storeName', e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={settings.storeEmail}
                      onChange={(e) => handleInputChange('storeEmail', e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Telefone</label>
                    <input
                      type="text"
                      value={settings.storePhone}
                      onChange={(e) => handleInputChange('storePhone', e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Endereço</label>
                    <textarea
                      value={settings.storeAddress}
                      onChange={(e) => handleInputChange('storeAddress', e.target.value)}
                      className="form-input"
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label>Moeda</label>
                    <select
                      value={settings.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      className="form-input"
                    >
                      <option value="Kz">Kwanza (Kz)</option>
                      <option value="USD">Dólar Americano ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="BRL">Real (R$)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Idioma</label>
                    <select
                      value={settings.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                      className="form-input"
                    >
                      <option value="pt">Português</option>
                      <option value="en">Inglês</option>
                      <option value="es">Espanhol</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Fuso Horário</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="form-input"
                    >
                      <option value="Africa/Luanda">Luanda (GMT+1)</option>
                      <option value="Europe/Lisbon">Lisboa (GMT+1)</option>
                      <option value="America/New_York">Nova York (GMT-5)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notificacoes' && (
              <div className="settings-section">
                <h2>Preferências de Notificação</h2>
                <div className="notifications-grid">
                  <div className="notification-item">
                    <div className="notification-info">
                      <h3>Notificações do Sistema</h3>
                      <p>Receber alertas sobre atividades importantes do sistema</p>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => handleInputChange('notifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <h3>Notificações por Email</h3>
                      <p>Receber notificações por email sobre novas vendas e usuários</p>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <h3>Notificações por SMS</h3>
                      <p>Receber alertas importantes por SMS</p>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.smsNotifications}
                        onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seguranca' && (
              <div className="settings-section">
                <h2>Configurações de Segurança</h2>
                <div className="security-grid">
                  <div className="security-card">
                    <h3> Alterar Password</h3>
                    <div className="form-group">
                      <label>Password Actual</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Nova Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Confirmar Nova Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <button className="btn-primary">Actualizar Password</button>
                  </div>

                  <div className="security-card">
                    <h3>👥 Sessões Activas</h3>
                    <div className="sessions-list">
                      <div className="session-item">
                        <div className="session-info">
                          <strong>Chrome - Windows</strong>
                          <span>Luanda, Angola • Activa agora</span>
                        </div>
                        <button className="btn-remove">Terminar</button>
                      </div>
                      <div className="session-item">
                        <div className="session-info">
                          <strong>Safari - iPhone</strong>
                          <span>Lisboa, Portugal • 2 horas atrás</span>
                        </div>
                        <button className="btn-remove">Terminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'aparencia' && (
              <div className="settings-section">
                <h2>Personalização da Aparência</h2>
                <div className="appearance-grid">
                  <div className="appearance-card">
                    <h3> Tema</h3>
                    <div className="theme-options">
                      <label className="theme-option">
                        <input type="radio" name="theme" defaultChecked />
                        <div className="theme-preview light-theme">
                          <span>Claro</span>
                        </div>
                      </label>
                      <label className="theme-option">
                        <input type="radio" name="theme" />
                        <div className="theme-preview dark-theme">
                          <span>Escuro</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="appearance-card">
                    <h3> Densidade</h3>
                    <div className="density-options">
                      <label className="density-option">
                        <input type="radio" name="density" defaultChecked />
                        <span>Confortável</span>
                      </label>
                      <label className="density-option">
                        <input type="radio" name="density" />
                        <span>Compacto</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botão de Salvar */}
            <div className="settings-actions">
              <button className="btn-save" onClick={handleSaveSettings}>
                 Guardar Configurações
              </button>
              <button className="btn-cancel">
                 Restaurar Padrões
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configuracao;