import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Listagem from './Listagem.jsx'
import Cadastro from './Cadastro.jsx'

function RootApp() {
  const [paginaAtual, setPaginaAtual] = useState('login')

  if (paginaAtual === 'cadastro') {
    return <Cadastro onGoToLogin={() => setPaginaAtual('login')} />
  }

  if (paginaAtual === 'listagem') {
    return <Listagem onGoToCadastro={() => setPaginaAtual('cadastro')} />
  }

  return (
    <App
      onGoToListagem={() => setPaginaAtual('listagem')}
      onGoToCadastro={() => setPaginaAtual('cadastro')}
    />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)
