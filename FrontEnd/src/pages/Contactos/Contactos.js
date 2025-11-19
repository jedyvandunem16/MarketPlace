import React from "react";
import "./Contactos.css";

function Contactos() {
  return (
    <div className="contactos-container" >
      
      <div className="contactos-direita">
        <h2>Entre em Contacto</h2>
        <p>
          Envie-nos uma mensagem e responderemos o mais rápido possível.
        </p>

        <form className="contactos-form">
          <div className="form-grupo">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" />
          </div>

          <div className="form-grupo">
            <label>Email</label>
            <input type="email" placeholder="Seu email" />
          </div>

          <div className="form-grupo">
            <label>Mensagem</label>
            <textarea placeholder="Escreva sua mensagem"></textarea>
          </div>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
      <div className="contactos-esquerda">
        
      </div>
    </div>
  );
}

export default Contactos;

