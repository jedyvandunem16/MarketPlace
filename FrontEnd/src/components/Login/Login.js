import  "./Login.css";
import bgImage from "../../assets/imagens/mulherflorista.jpg";
function Login (){
    return(
         <div className="cadastro-container1">
            <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="form-wrapper">
                <form>
                <h2>Login</h2>
                <div className="formulario1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite o seu email" />
                </div>
                <div className="formulario1">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha" />
                </div>
                <button type="button" id="btnLogin">Entrar</button>
                 <p>Não possui uma conta? <a href="./index">Cadastra-se</a></p>
                
                </form>
            </div>
            </div>
    )
}
export default Login;