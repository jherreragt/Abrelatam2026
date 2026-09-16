import { useState } from 'react';
import { ExternalLink, Clock, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';
import { ROUTES } from '../router/routes';
import { Link } from 'react-router-dom';

const PRETALX_SCHEDULE_URL = 'https://pretalx.abrelatam.org/abrelatam-2026/schedule/';

const thematicIcons = [
  assetPath('v2/iconos/AL-15.png'),
  assetPath('v2/iconos/AL-16.png'),
  assetPath('v2/iconos/AL-17.png'),
  assetPath('v2/iconos/AL-18.png'),
  assetPath('v2/iconos/AL-19.png'),
  assetPath('v2/iconos/AL-20.png'),
];

export default function Agenda() {
  const { t } = useLanguage();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <>
      <PageHero
        title={t('agendaPage.heroTitle')}
        subtitle={t('agendaPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-44.png')}
      />

      {/* Intro + iframe embed */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#329bd0]/10 text-[#262262] text-xs font-semibold tracking-wide uppercase mb-4">
              <Calendar size={14} />
              {t('agendaPage.introTitle')}
            </div>
            <p className="text-slate-700 leading-relaxed">
              {t('agendaPage.introText')}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Clock size={14} />
              <span>{t('agendaPage.timeZoneNote')}</span>
            </div>
          </div>

          {/* Iframe container */}
          <div className="mx-auto max-w-7xl">
            <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Loading overlay */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10 py-32">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-3 border-[#329bd0] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-slate-500">{t('agendaPage.embedLoading')}</p>
                  </div>
                </div>
              )}
              <iframe
                src={PRETALX_SCHEDULE_URL}
                title="ABRELATAM 2026 Schedule"
                className="w-full"
                style={{ minHeight: '80vh', border: 'none' }}
                onLoad={() => setIframeLoaded(true)}
                loading="lazy"
              />
            </div>

            {/* Link to open in new tab */}
            <div className="mt-6 text-center">
              <a
                href={PRETALX_SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262262] text-white text-sm font-semibold hover:bg-[#329bd0] transition-colors duration-200"
              >
                {t('agendaPage.viewOnPretalx')}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">
              {t('home.thematicTitle')}
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {(['thematic1', 'thematic2', 'thematic3', 'thematic4', 'thematic5', 'thematic6'] as const).map((key, i) => (
              <div key={key} className="flex flex-col items-center text-center">
                <img
                  src={thematicIcons[i]}
                  alt=""
                  className="mb-6 h-20 w-20 object-contain"
                />
                <p className="max-w-40 text-sm font-semibold leading-snug text-[#262262]">
                  {t(`home.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propose a session CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#262262] mb-4">
              {t('agendaPage.proposeTitle')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('agendaPage.proposeText')}
            </p>
            <Link
              to={ROUTES.CONVOCATORIAS}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#329bd0] text-white text-sm font-semibold hover:bg-[#262262] transition-colors duration-200"
            >
              {t('agendaPage.callsButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
