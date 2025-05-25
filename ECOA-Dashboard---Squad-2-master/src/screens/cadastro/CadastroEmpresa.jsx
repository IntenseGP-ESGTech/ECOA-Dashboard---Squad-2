import Botao from "../../componentes/botao/Botao";

export default function CadastroEmpresa(){
    return (
        <form className="form-cadastro">
          <div>
            <label htmlFor="">CNPJ</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">E-mail Corporativo </label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Nome Social</label>
            <input type="text" />
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