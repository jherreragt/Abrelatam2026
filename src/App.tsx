import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Agenda from './pages/Agenda';
import Convocatorias from './pages/Convocatorias';
import SideEvents from './pages/SideEvents';
import ViajeSede from './pages/ViajeSede';
import CodigoConducta from './pages/CodigoConducta';
import Prensa from './pages/Prensa';
import Contacto from './pages/Contacto';
// import Noticias from './pages/Noticias';
// import BlogDetail from './pages/BlogDetail';
import PreRegistro from './pages/PreRegistro';
import GuiaParticipantes from './pages/GuiaParticipantes';
import { ROUTES } from './router/routes';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SOBRE} element={<Sobre />} />
            <Route path={ROUTES.AGENDA} element={<Agenda />} />
            <Route path={ROUTES.CONVOCATORIAS} element={<Convocatorias />} />
            <Route path={ROUTES.SIDE_EVENTS} element={<SideEvents />} />
            <Route path={ROUTES.VIAJE_SEDE} element={<ViajeSede />} />
            <Route path={ROUTES.CODIGO_CONDUCTA} element={<CodigoConducta />} />
            <Route path={ROUTES.PRENSA} element={<Prensa />} />
            <Route path={ROUTES.CONTACTO} element={<Contacto />} />
            {/* <Route path={ROUTES.NOTICIAS} element={<Noticias />} /> */}
            {/* <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetail />} /> */}
            <Route path={ROUTES.PRE_REGISTRO} element={<PreRegistro />} />
            <Route path={ROUTES.GUIA_PARTICIPANTES} element={<GuiaParticipantes />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}
