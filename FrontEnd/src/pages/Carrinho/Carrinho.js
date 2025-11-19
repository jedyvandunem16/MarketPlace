import "./Carrinho.css"
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Cenoura from "../../assets/incons/Cenoura.png";

function Carrinho(){
    return (
        <>
      <Menu/>
    <div className="carrinho-container">
      <h1>Meu Carrinho</h1>

      <div className="carrinho-itens">
        <div className="item">
          <img
            src={Cenoura}
            alt="Produto"
            className="item-imagem"
          />
          <div className="item-detalhes">
            <h3>Produto Exemplo</h3>
            <p className="preco">Kz 5.000</p>
            <div className="quantidade">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <button className="remover">Remover</button>
        </div>
      </div>

      <div className="carrinho-resumo">
        <p>Total: <strong>Kz 5.000</strong></p>
        <div className="botoes">
          <button className="continuar">Continuar Comprando</button>
          <button className="finalizar">Finalizar Compra</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    )
   
}
export default Carrinho