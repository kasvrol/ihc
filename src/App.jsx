import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/inicio";
import Contato from './pages/contato';
import FormularioImpugnacao from './pages/impugnacao';
import ListaCursosEaD from './pages/listaCursosEaD';
import CriadoresVitrine from './pages/curriculo';
import ManualSite from './pages/manualSite';
import Legislacao from "./pages/legislacao/index.jsx";
import Inep from "./pages/inep/index.jsx";
import Cne from "./pages/cne/index.jsx";
import OrientacoesGerais from "./pages/orientacoes/index.jsx";
import TelaEdital from "./pages/edital/index.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/uab-impugnacao" element={<FormularioImpugnacao />} />
          <Route path="/cursos-ead" element={<ListaCursosEaD />} />
          <Route path="/curriculo" element={<CriadoresVitrine />} />
          <Route path="/sobre" element={<ManualSite />} />
          <Route path="/legislacoes" element={<Legislacao />} />
          <Route path="/instrumentos-avaliacao" element={<Inep />} />
          <Route path="/pareceres" element={<Cne />} />
          <Route path="/orientacoes-gerais" element={<OrientacoesGerais />} />
          <Route path="/edital" element={<TelaEdital />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App;
