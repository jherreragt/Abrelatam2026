import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const sideEventTypes = [
  { icon: assetPath('v2/iconos/AL-26.png'), key: 'communityMeetups' },
  { icon: assetPath('v2/iconos/AL-27.png'), key: 'specializedWorkshops' },
  { icon: assetPath('v2/iconos/AL-28.png'), key: 'launchesDemos' },
] as const;

const guidelineKeys = ['proposal', 'coordination', 'promotion', 'enjoy'] as const;

export default function SideEvents() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('sideEventsPage.heroTitle')}
        subtitle={t('sideEventsPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-46.png')}
        icon={<img src={assetPath('v2/iconos/AL-38.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <Section bgColor="white" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold text-[#262262] md:text-4xl">
            {t('sideEventsPage.whatTitle')}
          </h2>
          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-slate-800">
            <p>{t('sideEventsPage.whatText1')}</p>
            <p>{t('sideEventsPage.whatText2')}</p>
          </div>
        </div>
      </Section>

      <section className="bg-slate-100 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#262262] md:text-3xl">
            {t('sideEventsPage.typesTitle')}
          </h2>
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {sideEventTypes.map(({ icon, key }) => (
              <article key={key} className="rounded-lg bg-white px-6 py-6 shadow-sm">
                <img src={icon} alt="" className="mb-4 h-14 w-14 object-contain" />
                <h3 className="mb-2 text-sm font-bold text-[#262262]">
                  {t(`sideEventsPage.types.${key}.title`)}
                </h3>
                <p className="text-xs leading-relaxed text-slate-700">
                  {t(`sideEventsPage.types.${key}.desc`)}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mb-10 text-center text-3xl font-bold text-[#262262] md:text-4xl">
            {t('sideEventsPage.guidelinesTitle')}
          </h2>
          <div className="rounded-lg bg-white px-8 py-10 md:px-12 md:py-14">
            <div className="space-y-8">
              {guidelineKeys.map((key, index) => (
                <div key={key} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#329bd0] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#262262]">
                      {t(`sideEventsPage.guidelines.${key}.title`)}
                    </h3>
                    <p className="mt-1 max-w-4xl text-sm leading-relaxed text-slate-700">
                      {t(`sideEventsPage.guidelines.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-lg bg-slate-100 px-6 py-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#262262] md:text-3xl">
            {t('sideEventsPage.ctaTitle')}
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-snug text-slate-700">
            {t('sideEventsPage.ctaText')}
          </p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="min-w-60 rounded-md bg-[#329bd0] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#2789b8]">
              {t('sideEventsPage.ctaButton')}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
