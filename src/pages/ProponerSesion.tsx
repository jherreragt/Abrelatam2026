import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

export default function ProponerSesion() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('proponerSesion.heroTitle')}
        subtitle={t('proponerSesion.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-45.png')}
        icon={<img src={assetPath('v2/iconos/AL-27.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="bg-slate-50 py-10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700/40 dark:bg-slate-900">
            <iframe
              src="https://pretalx.abrelatam.org/abrelatam-2026/cfp"
              title={t('proponerSesion.iframeTitle')}
              className="h-[170vh] min-h-[1200px] w-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>
    </>
  );
}
