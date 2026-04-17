import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
     <div className="imagem"></div>
     <div className="login">
      <div className="logo"></div>
      <h1>Iniciar Sessão</h1>
      <div className="ui-input">
        <p id='sessao'>Iniciar Sessão com Nome de Usuario</p>
        <input type="text" placeholder='Digite seu Usuario'/>
        <p>Senha</p>
        <input type="text" placeholder='Digite sua Senha'/>

        <div className="lembrar">
        <input type="checkbox" id='checkbox' />
        <p id='lembre'>Lembre-Me</p>
        </div>
      

      <div className="opcoes">
        <button>Iniciar Sessão</button>
        <a href="" className='esqueci'>Não Consigo Iniciar a Sessão</a>
      </div>
      </div>
     </div>
     </main>
    </>
  )
}

export default App
