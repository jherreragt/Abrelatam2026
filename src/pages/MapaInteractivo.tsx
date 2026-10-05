import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Mapa Interactivo del Evento',
    heroSubtitle: 'Explora las salas del Centro Cultural Miguel Ángel Asturias para facilitar tu acceso y llegada',
    introTitle: 'Encuentra tu sala',
    introText: 'Usa el mapa interactivo para ubicar las diferentes salas y espacios donde se realizarán las sesiones, talleres y actividades de ABRELATAM / CONDATOS 2026. Haz clic en cada sala para ver más detalles.',
    iframeTitle: 'Mapa de salas Abrelatam ConDatos 2026',
  },
  en: {
    heroTitle: 'Interactive Event Map',
    heroSubtitle: 'Explore the rooms of the Miguel Ángel Asturias Cultural Center to find your way around',
    introTitle: 'Find your room',
    introText: 'Use the interactive map to locate the different rooms and spaces where the sessions, workshops, and activities of ABRELATAM / CONDATOS 2026 will take place. Click on each room for more details.',
    iframeTitle: 'Room map Abrelatam ConDatos 2026',
  },
  pt: {
    heroTitle: 'Mapa Interativo do Evento',
    heroSubtitle: 'Explore as salas do Centro Cultural Miguel Ángel Asturias para facilitar seu acesso e chegada',
    introTitle: 'Encontre sua sala',
    introText: 'Use o mapa interativo para localizar as diferentes salas e espaços onde ocorrerão as sessões, oficinas e atividades do ABRELATAM / CONDATOS 2026. Clique em cada sala para mais detalhes.',
    iframeTitle: 'Mapa de salas Abrelatam ConDatos 2026',
  },
};

export default function MapaInteractivo() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <>
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-47.png')}
        icon={<img src={assetPath('v2/iconos/AL-39.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#262262] md:text-4xl">{text.introTitle}</h2>
            <p className="text-base leading-relaxed text-slate-700">{text.introText}</p>
          </div>

          <div className="mx-auto max-w-6xl overflow-hidden shadow-lg">
            <iframe
              src="https://rawcdn.githack.com/jherreragt/MapaAbrelatamConDatos2026/5a0ebebc4fcc7d31365b7d92b941f1b775156f45/index.html"
              style={{ width: '100%', height: '780px', border: 0, borderRadius: '14px' }}
              title={text.iframeTitle}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
