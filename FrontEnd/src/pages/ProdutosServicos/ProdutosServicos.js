
import "./ProdutosServicos.css"
import Imagem from "../../assets/imagens/iconengtrega.png";
import Imag from "../../assets/imagens/iconeecriture.png";
import Img from "../../assets/imagens/logo1.png";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function ProdutosServicos(){
    return (
        <>
        <div className="cardes">
        <h1 id="titulo">PRINCIPAIS SERVIÇOS</h1>
        <div>
            <section>
                <img src={Imagem} alt= "imagem"/>
                <h3>Entrega Imediada</h3>
                <p>Garanta transações confiáveis com nosso sistema de pagamento protegido.
                    O valor é liberado após a confirmação da entrega.
               </p>
                 <HashLink to="/ProdServ">
                <button type="submit" id="button4">Saber Mais</button>
                </HashLink>
            </section>
            <section>
                 <img src= {Imag} alt="Imagem"/>
                <h3>Produtos certificados</h3>
                <p>Garantia de produtos frescos, de qualidade e bem conservados.
                    Receba seus produtos com segurança e dentro do prazo prometido.
                   </p>
               <HashLink to="/ProdServ">
                <button type="submit" id="button4">Saber Mais</button>
                </HashLink>
            </section>
            <section>
                <img src={Img} alt="Imagem "/>
                <h3>Vendas Seguras</h3>
                <p> Aprenda práticas agrícolas sustentáveis e aumente sua produtividade.
                    Capacite-se com técnicas e gestão de produção.
                </p>
                <HashLink to="/ProdServ">
                <button type="submit" id="button4">Saber Mais</button>
                </HashLink>
            </section>
        </div>
    </div>
    </>
    )
   
}
export default ProdutosServicos