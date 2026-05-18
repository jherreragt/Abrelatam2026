import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const expectationKeys = ['keynotes', 'workshops', 'panels', 'networking', 'hackathon', 'socialEvents'] as const;

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
        </div>
      </Section>

      <Section bgColor="white" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-[#262460] md:text-3xl">
              Líneas temáticas 2026
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
                <p className="max-w-40 text-sm font-semibold leading-snug text-black dark:text-slate-200">
                  {t(`home.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
