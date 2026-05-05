import { useState } from 'react'
import './Listagem.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="img"></div>
    <main>

        <h1>Tabela dos Usuarios</h1>
     <table >

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
                <td>📝</td>
                <td id='deletar'><a href="">🗑️</a></td>
            </tr>

            <tr id="tabela">
                <td>Uno Escada Dupla</td>
                <td>vrumvrum@vrummm.com</td>
                <td>2025</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr id="tabela">
                <td>Civicão</td>
                <td>pro@pro.com</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>chineszinho insano</td>
                <td>binchiling@wha.com</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>flamingo?</td>
                <td>bomdia@diario.com</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>velocimetro</td>
                <td>velocidade@speed.com</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>mapeador</td>
                <td>andar@mapado.com</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

        </table>

     </main>
    </>
  )
}

export default App
