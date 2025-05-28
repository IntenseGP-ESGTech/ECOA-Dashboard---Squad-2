import Botao from "../../componentes/botao/Botao";
import "./stylecad.css";
import { FaUser, FaLock } from "react-icons/fa";
import CadastroEmpresa from "./CadastroEmpresa";
import CadastroFuncionario from "./CadastroFuncionario";
import CadastroFilial from "./CadastroFilial";
import CadastroRepresentante from "./CadastroRepresentante";
import React, { useState } from 'react';




function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = useState('');
  
    const renderFormulario = () => {
    switch (tipoCadastro) {
      case 'empresa':
          return <CadastroEmpresa/>
      case 'funcionario':
        return <CadastroFuncionario />; 
      case 'representante':
        return <CadastroRepresentante />;
      case 'filial':
        return <CadastroFilial />;
     
      default:
        return <p className="Selecione-acima">↑ Selecione o tipo de cadastro acima ↑</p>;
    }
  };

  return (
    <div>
      <div className="text-boasvindas">
        <h1>Seja Bem-Vindo!</h1>
        <h3>Crie sua conta, leva menos de um minuto!</h3>
        {tipoCadastro === '' && (
        <div className="botoes" >
          <button className="botoes-cadastro" onClick={() => setTipoCadastro('empresa')}>Sou Empresa</button>
          <button className="botoes-cadastro" onClick ={() => setTipoCadastro('funcionario')}>Sou Funcionario</button>
          <button className="botoes-cadastro" onClick={() => setTipoCadastro('representante')}>Sou Representante</button>
          
          <button className="botoes-cadastro" onClick={() => setTipoCadastro('filial')}>Sou Filial</button>
          
        </div>
        )}
        
        <div className="formulario-cadastro">
          {renderFormulario()}

         
          {tipoCadastro !== '' && (
          <div className="voltar-container">
            <button className="botoes-cadastro1" onClick={() => setTipoCadastro('')}>← Voltar</button>
          </div>
        )}


        </div>
      </div>
    </div>
  );
}

export default Cadastro;