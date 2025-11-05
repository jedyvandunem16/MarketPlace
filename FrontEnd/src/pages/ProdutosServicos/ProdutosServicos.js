
import "./ProdutosServicos.css"
import Imagem from "../../assets/imagens/iconengtrega.png";
import Imag from "../../assets/imagens/iconeecriture.png";
import Img from "../../assets/imagens/logo1.png";

function ProdutosServicos(){
    return (
        <>
        <div class="cards">
        <h1 id="titulo">PRINCIPAIS SERVIÇOS</h1>
        <div>
            <section>
                <img src={Imagem} alt= "imagem"/>
                <h3>Entrega Imediada</h3>
                <p>Garanta transações confiáveis com nosso sistema de pagamento protegido.
                    O valor só é liberado ao vendedor após a confirmação da entrega.
               </p>
                <button type="submit" id="button4">Saber Mais</button>
            </section>
            <section>
                 <img src= {Imag} alt="Imagem"/>
                <h3>Formação agrícola</h3>
                <p>Receba seus produtos no mesmo dia com o serviço de entrega rápida.
                    Acompanhe o trajeto em tempo real e saiba exatamente onde está seu pedido.
                   </p>
                <button type="submit" id="button4">Saber Mais</button>
            </section>
            <section>
                <img src={Img} alt="Imagem "/>
                <h3>Vendas Seguras</h3>
                <p> Aprenda práticas agrícolas sustentáveis e aumente sua produtividade.
                    Capacite-se com técnicas modernas de cultivo e gestão de produção.
                </p>
                <button type="submit" id="button4">Saber Mais</button>
            </section>
        </div>
    </div>
    </>
    )
   
}
export default ProdutosServicos