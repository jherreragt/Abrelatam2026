import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../router/routes';

const BASE_URL = 'https://abrelatam2026.org';
const SITE_NAME = 'ABRELATAM / CONDATOS 2026';
const DEFAULT_IMAGE = `${BASE_URL}/assets/v2/logos/AL-08.png`;

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

const pageMeta: Record<string, PageMeta> = {
  [ROUTES.HOME]: {
    title: `${SITE_NAME} — Conferencia de Datos Abiertos | Ciudad de Guatemala`,
    description: 'La conferencia regional más importante sobre datos abiertos, transparencia y democracia en América Latina. Registro gratuito. Ciudad de Guatemala, 7–9 octubre 2026.',
    path: ROUTES.HOME,
  },
  [ROUTES.SOBRE]: {
    title: `Sobre ABRELATAM / CONDATOS 2026 — Historia y objetivos`,
    description: 'Conoce qué es ABRELATAM y CONDATOS, su historia desde 2013, objetivos y por qué Guatemala es la sede del encuentro regional de datos abiertos 2026.',
    path: ROUTES.SOBRE,
  },
  [ROUTES.AGENDA]: {
    title: `Agenda ABRELATAM / CONDATOS 2026 — 7–9 octubre, Guatemala`,
    description: 'Agenda del evento: sesiones, talleres, paneles y presentaciones relámpago sobre datos abiertos, transparencia y tecnología cívica en Guatemala 2026.',
    path: ROUTES.AGENDA,
  },
  [ROUTES.CONVOCATORIAS]: {
    title: `Convocatorias ABRELATAM / CONDATOS 2026 — Propón una sesión`,
    description: 'Convocatorias abiertas para ponencias, talleres, paneles y side events. Comparte tu experiencia con la comunidad de datos abiertos de América Latina.',
    path: ROUTES.CONVOCATORIAS,
  },
  [ROUTES.SIDE_EVENTS]: {
    title: `Side Events — ABRELATAM / CONDATOS 2026 | Actividades paralelas`,
    description: 'Organiza o participa en side events durante ABRELATAM / CONDATOS 2026: reuniones de comunidad, talleres especializados y lanzamientos en Guatemala.',
    path: ROUTES.SIDE_EVENTS,
  },
  [ROUTES.VIAJE_SEDE]: {
    title: `Cómo llegar a ABRELATAM / CONDATOS 2026 — Logística y alojamiento en Guatemala`,
    description: 'Información práctica para viajar a Ciudad de Guatemala: vuelos, transporte, hoteles recomendados, clima en octubre y requisitos de entrada.',
    path: ROUTES.VIAJE_SEDE,
  },
  [ROUTES.CODIGO_CONDUCTA]: {
    title: `Código de Conducta — ABRELATAM / CONDATOS 2026`,
    description: 'Nuestro compromiso con un espacio seguro, respetuoso e inclusivo para todas las personas participantes en ABRELATAM / CONDATOS 2026.',
    path: ROUTES.CODIGO_CONDUCTA,
  },
  [ROUTES.GUIA_PARTICIPANTES]: {
    title: `Guía para participantes — ABRELATAM / CONDATOS 2026`,
    description: 'Todo lo que necesitas saber para participar: fechas, lugar, cómo llegar, qué incluye la inscripción y preguntas frecuentes del evento.',
    path: ROUTES.GUIA_PARTICIPANTES,
  },
  [ROUTES.PRENSA]: {
    title: `Sala de prensa — ABRELATAM / CONDATOS 2026 | Recursos para medios`,
    description: 'Materiales, comunicados y contacto de prensa para medios que cubren ABRELATAM / CONDATOS 2026 en Ciudad de Guatemala.',
    path: ROUTES.PRENSA,
  },
  [ROUTES.CONTACTO]: {
    title: `Contacto — ABRELATAM / CONDATOS 2026`,
    description: 'Ponte en contacto con el equipo organizador de ABRELATAM / CONDATOS 2026. Consultas sobre patrocinios, prensa, becas y participación.',
    path: ROUTES.CONTACTO,
  },
  [ROUTES.PRE_REGISTRO]: {
    title: `Registro gratuito — ABRELATAM / CONDATOS 2026 | Guatemala`,
    description: 'Regístrate gratis en ABRELATAM / CONDATOS 2026. Asegura tu lugar en la conferencia regional de datos abiertos en Ciudad de Guatemala, 7–9 octubre.',
    path: ROUTES.PRE_REGISTRO,
  },
  [ROUTES.PATROCINADORES]: {
    title: `Patrocinadores y aliados — ABRELATAM / CONDATOS 2026`,
    description: 'Patrocina el encuentro regional más importante de datos abiertos en América Latina. Niveles y beneficios para organizaciones que apoyan ABRELATAM / CONDATOS 2026.',
    path: ROUTES.PATROCINADORES,
  },
  [ROUTES.PROPONER_SESION]: {
    title: `Proponer sesión — ABRELATAM / CONDATOS 2026 | CFP abierto`,
    description: 'Presenta tu propuesta de sesión para ABRELATAM / CONDATOS 2026: paneles, talleres prácticos, diálogos y charlas relámpago sobre datos abiertos.',
    path: ROUTES.PROPONER_SESION,
  },
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(path: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = `${BASE_URL}${path === '/' ? '' : path}`;
}

export function useSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta[ROUTES.HOME];
    const fullUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

    document.title = meta.title;

    setMeta('description', meta.description);
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:image', DEFAULT_IMAGE, true);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', DEFAULT_IMAGE);
    setCanonical(pathname);
  }, [pathname]);
}
