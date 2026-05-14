import './css/Listagem.css'

function Listagem({ onGoToCadastro }) {
  return (
    <div className="listagem-page">
      <div className="img"></div>
      <main className="listagem-main">
        <h1>Tabela dos Usuarios</h1>
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr id="tabela">
                <td>Usuarios</td>
                <td>Email</td>
                <td>Data do Cadastro</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr id="tabela">
                <td>Corsa</td>
                <td>buhh@buhh.com</td>
                <td>2025</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr id="tabela">
                <td>Uno Escada Dupla</td>
                <td>vrumvrum@vrummm.com</td>
                <td>2025</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr id="tabela">
                <td>Civicao</td>
                <td>pro@pro.com</td>
                <td>2026</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr>
                <td>chineszinho insano</td>
                <td>binchiling@wha.com</td>
                <td>2026</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr>
                <td>flamingo?</td>
                <td>bomdia@diario.com</td>
                <td>2026</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr>
                <td>velocimetro</td>
                <td>velocidade@speed.com</td>
                <td>2026</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>

              <tr>
                <td>mapeador</td>
                <td>andar@mapado.com</td>
                <td>2026</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button id="voltar" type="button" onClick={onGoToCadastro}>
          Voltar
        </button>
      </main>
    </div>
  )
}

export default Listagem
