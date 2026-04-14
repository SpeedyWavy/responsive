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
      <h1>Realizar Login</h1>
      <div className="ui-input">
        <p>Login</p>
        <input type="text" placeholder='Digite seu Login'/>
        <p>Senha</p>
        <input type="text" placeholder='Digite sua Senha'/>
      </div>

      <div className="opcoes">
        <button>Entrar</button>
        <a href="" className='esqueci'>Esqueci meu Login ou Senha</a>
      </div>
     </div>
     </main>
    </>
  )
}

export default App
