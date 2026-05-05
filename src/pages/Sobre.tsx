import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const objectives = [
  { icon: assetPath('v2/iconos/AL-20.png'), key: 'capacity' },
  { icon: assetPath('v2/iconos/AL-21.png'), key: 'community' },
  { icon: assetPath('v2/iconos/AL-22.png'), key: 'policy' },
  { icon: assetPath('v2/iconos/AL-23.png'), key: 'innovation' },
] as const;

const historyParagraphs = ['history1', 'history2', 'history3', 'history4', 'history5'] as const;
const audienceKeys = ['civilSociety', 'publicOfficials', 'developers', 'dataJournalists', 'academics', 'socialEntrepreneurs'] as const;
const editions = [
  { year: '2013', cityKey: 'uruguay' },
  { year: '2014', cityKey: 'mexico' },
  { year: '2015', cityKey: 'chile' },
  { year: '2016', cityKey: 'colombia' },
  { year: '2017', cityKey: 'costaRica' },
  { year: '2018', cityKey: 'argentina' },
  { year: '2019', cityKey: 'ecuador' },
  { year: '2020', cityKey: 'fromHome' },
  { year: '2021', cityKey: 'futuros' },
  { year: '2022', cityKey: 'dominicana' },
  { year: '2023', cityKey: 'uruguay' },
  { year: '2024', cityKey: 'brazil' },
  { year: '2025', cityKey: 'bolivia' },
] as const;

export default function Sobre() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('about.heroTitle')}
        subtitle={t('about.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-43.png')}
      />

      <Section bgColor="white" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-[#262460] md:text-4xl">
            {t('about.historyTitle')}
          </h2>
          <div className="space-y-7 text-base font-medium leading-relaxed text-[#262460] md:text-lg">
            {historyParagraphs.map((key) => (
              <p key={key}>{t(`about.${key}`)}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="gray" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-3xl font-bold text-[#262460] md:text-4xl">
            {t('about.objectivesTitle')}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {objectives.map(({ icon, key }) => (
              <article key={key} className="rounded-2xl bg-white px-9 py-8 dark:bg-slate-800">
                <img src={icon} alt="" className="mb-5 h-16 w-16 object-contain" />
                <h3 className="mb-2 text-xl font-bold leading-tight text-[#262460]">
                  {t(`about.objectives.${key}.title`)}
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#262460]">
                  {t(`about.objectives.${key}.desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="white" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-3xl font-bold text-[#262460] md:text-4xl">
            {t('about.audienceTitle')}
          </h2>
          <div className="space-y-9">
            {audienceKeys.map((key) => (
              <article key={key} className="border-l-2 border-[#2377b9] pl-5">
                <h3 className="text-2xl font-bold leading-tight text-[#262460]">
                  {t(`about.audience.${key}.title`)}
                </h3>
                <p className="mt-1 text-base font-medium leading-relaxed text-slate-600">
                  {t(`about.audience.${key}.desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="gray" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-14 text-3xl font-bold text-[#262460] md:text-4xl">
            {t('about.previousEditionsTitle')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {editions.map(({ year, cityKey }, index) => (
              <article key={`${year}-${cityKey}-${index}`} className="rounded-lg bg-white px-8 py-10">
                <h3 className="text-xl font-bold leading-tight text-[#262460]">
                  {year}
                </h3>
                <p className="mt-1 text-lg font-medium leading-tight text-[#262460]">
                  {t(`about.editions.${cityKey}`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
