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
          <Route path="/manual-site" element={<ManualSite />} />
          <Route path="/sobre" element={<ListaCursosEaD />} />
          <Route path="/legislacoes" element={<Legislacao />} />
          <Route path="/instrumentos-avaliacao" element={<Inep />} />
          <Route path="/pareceres" element={<Cne />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App;
