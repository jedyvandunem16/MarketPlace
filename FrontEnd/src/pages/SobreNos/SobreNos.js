
import "./SobreNos.css";
import QemSomos from "../../assets/imagens/Quem Somos.jpg";

function SobreNos(){
    return (
      <div class="OqSomos">
        <div>
             <section id="descricaoQS">
                <h1>Quem Somos </h1>
                <p>O AgriMarket é uma plataforma digital que conecta produtores, fornecedores e consumidores do setor agrícola, promovendo um ecossistema sustentável, transparente e inovador.
                    Acreditamos no poder da tecnologia para fortalecer o campo, impulsionar o comércio justo e facilitar o acesso a produtos, insumos e serviços agrícolas de qualidade.

                    Mais do que um marketplace, somos uma ponte entre o produtor e o mercado, aproximando quem planta, quem vende e quem compra.
                    Nosso objetivo é valorizar o trabalho agrícola, estimular a economia local e contribuir para um futuro mais verde e conectado.</p>
                <button type="submit" id="button3"> Saber Mais</button>

            </section>  
            <section id="imagemQS">
                  <img src={QemSomos} alt="Campo agrícola"/>
            </section>
            
        </div>
    </div>
    )
   
} 
export default SobreNos