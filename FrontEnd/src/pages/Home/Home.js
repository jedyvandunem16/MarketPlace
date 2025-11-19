import React from "react";
import Menu from "../../components/Menu/Menu";
import SobreNos from "../SobreNos/SobreNos";
import ProdutosServicos from "../ProdutosServicos/ProdutosServicos";
import "./Home.css";
import Contactos from "../Contactos/Contactos"; 
import Footer from "../../components/Footer/Footer";
import CarrosselSimples from "../Blog/Blog";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Home(){
    return(
     <>
     <Menu/>
      <div className="home" > 
     <div>
     <h1>AGRI <span>MARKET</span></h1>
     <h3> Bem-vindo ao AgriMarket: O, seu mercado agrícola digital!</h3>
     <p>Facilitamos a ligação entre produtores e consumidores, promovendo um comércio justo, sustentável e de qualidade.
Encontre tudo o que precisa para o campo num só lugar.</p>
     <section> 
            <HashLink to="/index">
                <button type="submit" class="button1">Solicitar Produto</button>
                <button type="submit" class="button2">Solicitar Serviços</button>
            </HashLink>
    </section>
    </div>
     </div>
       <SobreNos/>
       <CarrosselSimples/>
       <ProdutosServicos/>
       <Contactos/>
       <Footer/>
     </>

    ) 
}


export default Home