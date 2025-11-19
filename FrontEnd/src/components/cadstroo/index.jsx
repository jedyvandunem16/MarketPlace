
import "./style.css";

import bgImage from "../../assets/imagens/mulherflorista.jpg";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";


function Cadastro(){
    return(
        <>
         <div className="cadastro-container">
              <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
              <div className="form-wrapper">
                <form>
                  <h2>Cadastro</h2>
                  <div className="formulario">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Digite o seu nome" />
                  </div>
                  <div className="formulario">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite o seu email" />
                  </div>
                  <div className="formulario">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha" />
                  </div>
                  <HashLink to="/Login" >
                  <button type="button" id="btnCadastrar">Cadastrar</button>
                  </HashLink>
                  <p>Já tem uma conta? <a href="./Login">Faça o Login</a></p>
                  
                </form>
              </div>
            </div>
        </>
    )
}
export default Cadastro;