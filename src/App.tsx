import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AulasParticulares from './pages/AulasParticulares';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import TesteSeuNivel from './pages/TesteSeuNivel';
import Obrigado from './pages/Obrigado';
import ResultadoNivel from './pages/ResultadoNivel';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aulas-particulares" element={<AulasParticulares />} />
          <Route path="/cursos" element={<AulasParticulares />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/teste-seu-nivel" element={<TesteSeuNivel />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/:nivel" element={<ResultadoNivel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
