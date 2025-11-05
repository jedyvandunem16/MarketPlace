import "./Cadastro.css";

function Cadastro(){
    return(
<div class="mae">
        <div class="principal">
            <form>
                <h2>Cadastro</h2>

                <div class="formulario">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Digite o seu nome"> </input>
                </div>

                <div class="formulario">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite o seu email"> </input>
                </div>

                <div class="formulario">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha"> </input>
                </div>

                <button type="button" id="btnCadastrar">Cadastrar</button>
            </form>
        </div>
    </div>
            
    )
}
