import './css/Cadastro.css'

function Cadastro({ onGoToLogin }) {
  return (
    <main className="cadastro-main">
      <div className="imagem"></div>
      <div className="login">
        <div className="logo"></div>
        <h1>Criar Cadastro</h1>
        <div className="ui-input1">
          <p id="sessao">Insira um Nome de Usuario</p>
          <input type="text" placeholder="Digite seu Usuario" />

          <p id="Email">Insira seu Email para Criar um Cadastro.</p>
          <input type="text" placeholder="Digite seu Email" />

          <p>Senha</p>
          <input type="text" placeholder="Digite sua Senha" />
          <p>Confirmacao Senha</p>
          <input type="text" placeholder="Digite sua Senha" />

          <div className="lembrar">
            <input type="checkbox" id="checkbox" />
            <p id="lembre">Lembre-Me</p>
          </div>

          <div className="opcoes">
            <button type="button">Criar Cadastro</button>
            <a
              href="#login"
              className="esqueci"
              onClick={(event) => {
                event.preventDefault()
                onGoToLogin()
              }}
            >
              Ja possui um cadastro? Voltar para Login
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cadastro
