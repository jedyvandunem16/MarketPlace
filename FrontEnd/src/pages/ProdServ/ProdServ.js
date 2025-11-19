import "./ProdServ.css";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import transporte from "../../assets/imagens/transporte.avif";
import qualidade from "../../assets/imagens/conservaçao.jpg";
import seguranca from "../../assets/imagens/vendasseguras.avif";

function ProdServ(){
    return (
        <>
         <Menu/>
      <div className="ProdServ" >
        <div>
            <section id="imagemQS">
                  <img id="imagem1" src={transporte} alt="Campo agrícola"/>
                  <img id="imagem2" src={qualidade} alt="Campo agrícola"/>
                  <img id="imagem3" src={seguranca} alt="Campo agrícola"/>

            </section>
            
               
        </div>
       </div>
    
     <Footer/>
    </>
    )
   
} 
export default ProdServ