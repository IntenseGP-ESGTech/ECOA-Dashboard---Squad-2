import React, { useState } from "react";
import "./styleflip.css";
import Botao from "../botao/Botao";
import Login from "../../screens/login/Login";
import Cadastro from "../../screens/cadastro/Cadastro";

function Flip({ setIsAuthenticated }) {
  // Recebe a prop setIsAuthenticated
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`box ${isFlipped ? "flip" : ""}`}
      style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
    >
      <div className="front">
        <div className="text-boasvindas">
          <h1>Seja Bem Vindo ! </h1>
          <h3>Crie sua conta, leva menos de um minuto ! </h3>
        </div>

        {/* Passa setIsAuthenticated para o Login */}
        <Login setIsAuthenticated={setIsAuthenticated} />
        <div className="links">
          <div className="text-link" onClick={() => setIsFlipped(true)}>
            <Botao nome="Cadastrar-se" />
          </div>
        </div>
        <div className="links">
          <p> Faça login com </p>
          <a href="#">
           <img src="https://blog.jobbio.com/wp-content/uploads/2018/03/2000px-google_-22g-22_logo-svg.png" alt="Google" width="40" height="40"  />
          </a>
        </div>
      </div>

      <div className="back">
        <Cadastro />
        <div className="links">
          <p> Faça login com </p>
          <a href="#">
            <img src="https://blog.jobbio.com/wp-content/uploads/2018/03/2000px-google_-22g-22_logo-svg.png" alt="Google" width="40" height="40"   />
          </a>
        </div>
        <div className="text-link" onClick={() => setIsFlipped(false)}>
          <Botao
            bgColor="rgba(0, 0, 0, 0)"
            nome={<i className="fa-regular fa-circle-left"></i>}
          />
        </div>
      </div>
    </div>
  );
}

export default Flip;
