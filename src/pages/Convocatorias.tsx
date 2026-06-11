import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const callKeys = ['talks', 'workshops', 'panels', 'sideEvents'] as const;
const guidelineKeys = ['g1', 'g2', 'g3', 'g4', 'g5'] as const;

const callIcons = [
  assetPath('v2/iconos/AL-27.png'),
  assetPath('v2/iconos/AL-28.png'),
  assetPath('v2/iconos/AL-29.png'),
  assetPath('v2/iconos/AL-31.png'),
];

export default function Convocatorias() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('convocatoriasPage.heroTitle')}
        subtitle={t('convocatoriasPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-47.png')}
        icon={<img src={assetPath('v2/iconos/AL-37.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="bg-slate-100 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 rounded-lg bg-[#329bd0]/10 px-8 py-8 text-[#262262] md:px-12">
            <h2 className="mb-4 text-xl font-bold">{t('convocatoriasPage.selectionTitle')}</h2>
            <p className="max-w-5xl text-sm leading-relaxed">
              {t('convocatoriasPage.selectionText1')}
            </p>
            <p className="mt-5 max-w-5xl text-sm leading-relaxed">
              {t('convocatoriasPage.selectionText2')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {callKeys.map((key, i) => (
              <article key={key} className="rounded-lg bg-white px-8 py-7 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <img src={callIcons[i]} alt="" className="h-12 w-12 object-contain" />
                  <span className="rounded-full bg-slate-100 px-6 py-2 text-xs text-slate-500">
                    {t('convocatoriasPage.comingSoon')}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-950">
                  {t(`convocatoriasPage.calls.${key}.title`)}
                </h3>
                <p className="mb-4 max-w-lg text-sm leading-relaxed text-slate-700">
                  {t(`convocatoriasPage.calls.${key}.desc`)}
                </p>
                <p className="mb-8 text-sm text-slate-700">
                  {t('convocatoriasPage.deadline')} {t(`convocatoriasPage.calls.${key}.deadline`)}
                </p>
                <button className="w-full rounded-md border border-[#329bd0] px-6 py-3 text-sm font-medium text-[#329bd0] transition-colors hover:bg-[#329bd0]/10">
                  {t('convocatoriasPage.comingSoon')}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#262262] md:text-4xl">
            {t('convocatoriasPage.guidelinesTitle')}
          </h2>
          <div className="rounded-lg bg-slate-100 px-8 py-10 text-[#262262] md:px-16 md:py-12">
            <div className="space-y-7">
              {guidelineKeys.map((key) => (
                <div key={key}>
                  <h3 className="text-lg font-bold text-slate-950">
                    {t(`convocatoriasPage.guidelines.${key}.title`)}
                  </h3>
                  <p className="mt-1 max-w-5xl text-base leading-relaxed text-slate-800">
                    {t(`convocatoriasPage.guidelines.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
