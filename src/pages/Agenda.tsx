import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const expectationKeys = ['keynotes', 'workshops', 'panels', 'networking', 'hackathon', 'socialEvents'] as const;

export default function Agenda() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('agendaPage.heroTitle')}
        subtitle={t('agendaPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-44.png')}
      />

      <Section bgColor="gray" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 py-12 text-center shadow-sm md:px-12 md:py-16 dark:bg-slate-900">
          <img src={assetPath('v2/iconos/AL-24.png')} alt="" className="mx-auto mb-5 h-20 w-20 object-contain" />
          <h2 className="mb-7 text-3xl font-bold text-[#282456] md:text-4xl">
            {t('agendaPage.comingSoonTitle')}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {t('agendaPage.comingSoonText1')}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {t('agendaPage.comingSoonText2')}
          </p>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-slate-50 px-6 py-8 text-left dark:bg-slate-800">
            <h3 className="mb-5 text-center text-lg font-bold text-slate-900 dark:text-white">
              {t('agendaPage.expectTitle')}
            </h3>
            <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
              {expectationKeys.map((key) => (
                <div key={key} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{t(`agendaPage.expectations.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:px-20">
            <Link to={ROUTES.CONVOCATORIAS}>
              <button className="w-full rounded-md bg-[#4367e1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3657c8]">
                {t('agendaPage.updatesButton')}
              </button>
            </Link>
            <a
              href="mailto:contacto@abrelatam2026.org"
              className="w-full rounded-md bg-[#4367e1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3657c8]"
            >
              {t('agendaPage.contactButton')}
            </a>
          </div>
        </div>
      </Section>

      <section className="bg-white px-4 py-16 md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl rounded-lg bg-slate-100 px-6 py-14 text-center md:px-12 dark:bg-slate-900">
          <h2 className="mb-3 text-2xl font-bold text-[#10184a] md:text-3xl">
            {t('agendaPage.proposeTitle')}
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-base leading-snug text-[#10184a] dark:text-slate-200">
            {t('agendaPage.proposeText')}
          </p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="min-w-64 rounded-md bg-[#4367e1] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3657c8]">
              {t('agendaPage.callsButton')}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
