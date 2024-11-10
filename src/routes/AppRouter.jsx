import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "../pages/login";
import Cadastro from "../pages/cadastro"
import Localizacao from "../pages/localizacao"


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login cabecalho="Entre na sua conta" subtitulo="Faça login na sua conta"/>} />
        <Route path="/cadastro" element={<Cadastro cabecalho="Crie sua conta" subtitulo="Crie uma conta para acessar o site"/>} />
        <Route path="/localizacao" element={<Localizacao cabecalho="Crie sua conta" subtitulo="Crie uma conta para acessar o site"/>} />
      </Routes>
    </Router>
  )
}