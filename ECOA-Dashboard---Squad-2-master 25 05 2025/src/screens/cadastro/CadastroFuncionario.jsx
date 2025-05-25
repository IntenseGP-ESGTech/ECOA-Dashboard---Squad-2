import Botao from "../../componentes/botao/Botao";

export default function CadastroFuncionario(){
    return (
        <form className="form-cadastro">
       
          <div>
            <label htmlFor="">E-mail Institucional </label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Matricula </label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Defina sua Senha </label>
            <input type="password" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Confirme sua Senha </label>
            <input type="password" name="" id="" />
          </div>
          <br />
          <Botao nome="Cadastrar" />
        </form>

    )
}