import "./Mercado.css";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import CarrinhoIcon from "../../assets/incons/carrinhos.png";
import Arroz from "../../assets/incons/arroz.webp";
import Milho from "../../assets/incons/milho.webp";
import Aveia from "../../assets/incons/aveia.png";
import Trigo from "../../assets/incons/trigo.webp";
import Tomate from "../../assets/incons/tomate.png";
import Cenoura from "../../assets/incons/Cenoura.png";
import Beterraba from "../../assets/incons/beterraba.png";
import Pimento from "../../assets/incons/pimentos.png";
import Cebola from "../../assets/incons/cebola.png";
import Pepino from "../../assets/incons/pepino.webp";
import BatataD from "../../assets/incons/BatataDoce.png";
import BatataR from "../../assets/incons/BatataRena.png";
import Maca from "../../assets/incons/Maca.png";
import Banana from "../../assets/incons/banana.png";
import Laranja from "../../assets/incons/laranja.png";
import Abacate from "../../assets/incons/abacate.png";
import Uva from "../../assets/incons/uva.png";
import Pera from "../../assets/incons/pera.png";
import Ananas from "../../assets/incons/ananas.png";
import Mamao from "../../assets/incons/mamao.webp";
import Feijao from "../../assets/incons/feijao.png";
import Grao from "../../assets/incons/graoB.webp";
import Lentilhas from "../../assets/incons/lentilhas.webp";
import Ervilhas from "../../assets/incons/ervilhas.webp";
import Algodao from "../../assets/incons/algodao.png";
import Ovos from "../../assets/incons/ovos.png";
import Mel from "../../assets/incons/mel.webp";
import Cafe from "../../assets/incons/cafe.jpeg";
import Canela from "../../assets/incons/canela.webp";
import Cravo from "../../assets/incons/cravo.webp";
import Acafrao from "../../assets/incons/acafrao.webp";
import Gengibre from "../../assets/incons/gengibre.png";



const produtos = {
  graos: [
    { nome: "Arroz", img: Arroz, preco: "17.000 KZ" },
    { nome: "Milho", img: Milho, preco: "12.500 KZ" },
    { nome: "Aveia", img: Aveia, preco: "15.000 KZ" },
    { nome: "Trigo", img: Trigo, preco: "14.000 KZ" },
  ],
  vegetais: [
    { nome: "Tomate", img: Tomate, preco: "8.500 KZ" },
    { nome: "Cenoura", img: Cenoura, preco: "7.500 KZ" },
    { nome: "Beterraba", img: Beterraba, preco: "9.000 KZ" },
    { nome: "Pimento", img: Pimento, preco: "10.000 KZ" },
    { nome: "Cebola", img: Cebola, preco: "10.000 KZ" },
    { nome: "Pepino", img: Pepino, preco: "5.000 KZ" },
    { nome: "Batata Doce", img: BatataD, preco: "20.000 KZ" },
    { nome: "Batata Rena", img: BatataR, preco: "10.000 KZ" },
  ],
  frutos: [
    { nome: "Maçã", img: Maca, preco: "15.500 KZ" },
    { nome: "Banana", img: Banana, preco: "4.500 KZ" },
    { nome: "Laranja", img: Laranja, preco: "5.000 KZ" },
    { nome: "Abacate", img: Abacate, preco: "10.000 KZ" },
    { nome: "Uva", img: Uva, preco: "10.500 KZ" },
    { nome: "Pera", img: Pera, preco: "18.500 KZ" },
    { nome: "Mamão", img: Mamao, preco: "9.000 KZ" },
    { nome: "Ananas", img: Ananas, preco: "17.000 KZ" },
  ],
  leguminosas: [
    { nome: "Feijão", img: Feijao, preco: "15.500 KZ" },
    { nome: "Grão de Bico", img: Grao, preco: "6.500 KZ" },
    { nome: "Lentilhas", img: Lentilhas, preco: "8.000 KZ" },
    { nome: "Ervilhas", img: Ervilhas, preco: "10.000 KZ" },
  ],
  especiarias: [
    { nome: "Algodão", img: Algodao, preco: "15.500 KZ" },
    { nome: "Ovos", img: Ovos, preco: "4.500 KZ" },
    { nome: "Mel", img: Mel, preco: "19.000 KZ" },
    { nome: "Café", img: Cafe, preco: "10.000 KZ" },
    { nome: "Canela", img: Canela, preco: "7.500 KZ" },
    { nome: "Cravo da Índia", img: Cravo, preco: "18.000 KZ" },
    { nome: "Açafrão", img: Acafrao, preco: "2.000 KZ" },
    { nome: "Gengibre", img: Gengibre, preco: "20.000 KZ" },
  ]
};

function Mercado() {
  return (
    <>
     <Menu/>
      <div id= "fundo">
      <h1>Mercado</h1>
      <p>Conheça os melhores produtos agrícolas disponíveis na nossa plataforma</p>
      </div>
       <div className="principal">
      <div className="grao">
        <h2>Grãos</h2>
        <div className="cards-container">
          {produtos.graos.map((produto, i) => (
            <section className="card" key={i}>
              <img src={produto.img} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="entrega">Entrega Imediata</p>
              <p className="preco">{produto.preco}</p>
              <button className="btn-add">
                <img src={CarrinhoIcon} alt="Carrinho" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </section>
          ))}
        </div>
      </div>

      <div className="grao">
        <h2>Vegetais</h2>
        <div className="cards-container">
          {produtos.vegetais.map((produto, i) => (
            <section className="card" key={i}>
              <img src={produto.img} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="entrega">Entrega Imediata</p>
              <p className="preco">{produto.preco}</p>
              <button className="btn-add">
                <img src={CarrinhoIcon} alt="Carrinho" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </section>
          ))}
        </div>
      </div>

      <div className="grao">
        <h2>Frutas</h2>
        <div className="cards-container">
          {produtos.frutos.map((produto, i) => (
            <section className="card" key={i}>
              <img src={produto.img} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="entrega">Entrega Imediata</p>
              <p className="preco">{produto.preco}</p>
              <button className="btn-add">
                <img src={CarrinhoIcon} alt="Carrinho" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </section>
          ))}
        </div>
      </div>

       <div className="grao">
        <h2>Leguminosas</h2>
        <div className="cards-container">
          {produtos.leguminosas.map((produto, i) => (
            <section className="card" key={i}>
              <img src={produto.img} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="entrega">Entrega Imediata</p>
              <p className="preco">{produto.preco}</p>
              <button className="btn-add">
                <img src={CarrinhoIcon} alt="Carrinho" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </section>
          ))}
        </div>
      </div>

      <div className="grao">
        <h2>Especiarias</h2>
        <div className="cards-container">
          {produtos.especiarias.map((produto, i) => (
            <section className="card" key={i}>
              <img src={produto.img} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="entrega">Entrega Imediata</p>
              <p className="preco">{produto.preco}</p>
              <button className="btn-add">
                <img src={CarrinhoIcon} alt="Carrinho" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </section>
          ))}
        </div>
      </div>
    </div>
     <Footer/>
    </>
  );
}

export default Mercado;
