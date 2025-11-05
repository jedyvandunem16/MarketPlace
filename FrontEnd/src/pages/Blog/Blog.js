import React, { useState } from "react";
import "./Blog.css";
import Imagem from "../../assets/imagens/verdura.jpg";
import Imagem1 from "../../assets/imagens/vistalateral.jpg";
import Imagem2 from "../../assets/imagens/agricultor.jpg";
import Imagem3 from "../../assets/imagens/tercnologia.jpg";

const imagens = [
  {
    src: Imagem,
    titulo: "Inovação no campo",
    descricao: "Tecnologia que transforma a agricultura moderna.",
  },
  {
    src: Imagem1,
    titulo: "Negócios Digitais",
    descricao: "Como o comércio online impulsiona novos empreendedores.",
  },
  {
    src: Imagem2,
    titulo: "O Futuro Sustentável",
    descricao: "Soluções verdes para um planeta mais inteligente.",
  },
  {
    src: Imagem3,
    titulo: "Teconlogia e Inovação",
    descricao: "Implementação das Tic's no setor agrícola"

  },
];

const CarrosselSimples = () => {
  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice((indice + 1) % imagens.length);
  const anterior = () => setIndice((indice - 1 + imagens.length) % imagens.length);

  return (
    <div className="carrossel">
      <img
        src={imagens[indice].src}
        alt={imagens[indice].titulo}
        className="carrossel-imagem"
      />

      <div className="carrossel-legenda">
        <h2>{imagens[indice].titulo}</h2>
        <p>{imagens[indice].descricao}</p>
      </div>

      <button className="btn anterior" onClick={anterior}>◀</button>
      <button className="btn proximo" onClick={proximo}>▶</button>

      <div className="indicadores">
        {imagens.map((_, i) => (
          <span
            key={i}
            className={`bolinha ${i === indice ? "ativa" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarrosselSimples;
