import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/inicio";
import Contato from './pages/contato';
import FormularioImpugnacao from './pages/impugnacao';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/uab-impugnacao" element={<FormularioImpugnacao />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* Adicione mais rotas aqui */}
        </Route>
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App
