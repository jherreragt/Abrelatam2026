import { Link } from 'react-router-dom';
import { CheckCircle, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const listCopy: Record<Language, { whyOrg: string[]; makePossible: string[]; benefits: string[] }> = {
  es: {
    whyOrg: [
      'asociarse a una agenda regional sobre datos, tecnología, democracia y derechos humanos;',
      'conectarse con actores clave de distintos sectores;',
      'participar en conversaciones de alto nivel sobre políticas públicas y transformación digital;',
      'fortalecer su posicionamiento en América Latina y el Caribe.',
    ],
    makePossible: [
      'sostener un espacio abierto e inclusivo de intercambio regional;',
      'impulsar debates sobre datos abiertos, inteligencia artificial y tecnologías emergentes;',
      'promover la colaboración entre sectores;',
      'amplificar experiencias y aprendizajes en toda América Latina y el Caribe.',
    ],
    benefits: [
      'presencia de marca en web, programa y sesión inaugural;',
      'materiales institucionales en el evento;',
      'presencia de marca en espacios de interacción directa con participantes;',
      'participación en instancias clave de la agenda;',
      'reconocimiento institucional antes, durante y después del evento.',
    ],
  },
  en: {
    whyOrg: [
      'align with a regional agenda on data, technology, democracy, and human rights;',
      'connect with key stakeholders from different sectors;',
      'participate in high-level conversations on public policy and digital transformation;',
      'strengthen your positioning in Latin America and the Caribbean.',
    ],
    makePossible: [
      'sustain an open and inclusive space for regional exchange;',
      'drive debates on open data, artificial intelligence, and emerging technologies;',
      'promote cross-sector collaboration;',
      'amplify experiences and learnings across Latin America and the Caribbean.',
    ],
    benefits: [
      'brand presence on the event website, program, and opening session;',
      'institutional materials at the event;',
      'brand presence in spaces of direct interaction with participants;',
      'participation in key agenda moments;',
      'institutional recognition before, during, and after the event.',
    ],
  },
  pt: {
    whyOrg: [
      'associar-se a uma agenda regional sobre dados, tecnologia, democracia e direitos humanos;',
      'conectar-se com atores-chave de diferentes setores;',
      'participar de conversas de alto nível sobre políticas públicas e transformação digital;',
      'fortalecer seu posicionamento na América Latina e no Caribe.',
    ],
    makePossible: [
      'manter um espaço aberto e inclusivo de intercâmbio regional;',
      'impulsionar debates sobre dados abertos, inteligência artificial e tecnologias emergentes;',
      'promover a colaboração entre setores;',
      'amplificar experiências e aprendizados em toda a América Latina e Caribe.',
    ],
    benefits: [
      'presença de marca no site, programa e sessão inaugural do evento;',
      'materiais institucionais no evento;',
      'presença de marca em espaços de interação direta com participantes;',
      'participação em momentos-chave da agenda;',
      'reconhecimento institucional antes, durante e depois do evento.',
    ],
  },
};

const editions = [
  { year: '2013', place: 'Uruguay' },
  { year: '2014', place: 'México' },
  { year: '2015', place: 'Chile' },
  { year: '2016', place: 'Colombia' },
  { year: '2017', place: 'Costa Rica' },
  { year: '2018', place: 'Argentina' },
  { year: '2019', place: 'Ecuador' },
  { year: '2020', place: 'Online' },
  { year: '2021', place: 'Online' },
  { year: '2022', place: 'República Dominicana' },
  { year: '2023', place: 'Uruguay' },
  { year: '2024', place: 'Brasil' },
  { year: '2025', place: 'Bolivia' },
];

const tierRows = [
  { key: 'tier1', silver: true, bronze: true, gold: true, platinum: true },
  { key: 'tier2', silver: true, bronze: true, gold: true, platinum: true },
  { key: 'tier3', silver: true, bronze: true, gold: true, platinum: true },
  { key: 'tier4', silver: true, bronze: true, gold: true, platinum: true },
  { key: 'tier5', silver: false, bronze: true, gold: true, platinum: true },
  { key: 'tier6', silver: false, bronze: false, gold: true, platinum: true },
  { key: 'tier7', silver: false, bronze: false, gold: false, platinum: true },
] as const;

const tierColors = {
  silver: { header: 'bg-slate-400', badge: 'bg-slate-100 text-slate-600', dot: 'text-slate-400' },
  bronze: { header: 'bg-amber-600', badge: 'bg-amber-50 text-amber-700', dot: 'text-amber-500' },
  gold: { header: 'bg-yellow-400', badge: 'bg-yellow-50 text-yellow-700', dot: 'text-yellow-500' },
  platinum: { header: 'bg-[#4367e1]', badge: 'bg-blue-50 text-blue-700', dot: 'text-[#4367e1]' },
};

export default function Patrocinadores() {
  const { t, language } = useLanguage();
  const lists = listCopy[language];

  return (
    <>
      <PageHero
        title={t('patrocinadores.heroTitle')}
        subtitle={t('patrocinadores.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-49.png')}
        icon={<img src={assetPath('v2/iconos/AL-40.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            <p>{t('patrocinadores.intro1')}</p>
            <p>{t('patrocinadores.intro2')}</p>
            <p>{t('patrocinadores.intro3')}</p>
          </div>
        </div>
      </section>

      {/* Why sponsor */}
      <section className="bg-slate-50 py-20 md:py-28 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#262460] dark:text-white md:text-4xl">
              {t('patrocinadores.whyTitle')}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="mb-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {t('patrocinadores.whyText')}
              </p>
              <h3 className="mb-5 text-lg font-bold text-[#262460] dark:text-white">
                {t('patrocinadores.whyOrgTitle')}
              </h3>
              <ul className="space-y-3">
                {lists.whyOrg.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#4367e1]" />
                    <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={assetPath('v2/slider/AL-48.png')}
                alt=""
                className="w-full max-w-sm rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Track record + stats */}
      <section className="bg-[#262460] py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t('patrocinadores.trackRecordTitle')}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75">
              {t('patrocinadores.trackRecordText')}
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { val: t('patrocinadores.stat1Value'), label: t('patrocinadores.stat1Label') },
              { val: t('patrocinadores.stat2Value'), label: t('patrocinadores.stat2Label') },
              { val: t('patrocinadores.stat3Value'), label: t('patrocinadores.stat3Label') },
            ].map(({ val, label }) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/10 px-8 py-10 text-center backdrop-blur-sm">
                <p className="mb-2 text-5xl font-bold text-[#fdcc30]">{val}</p>
                <p className="text-base font-medium text-white/80">{label}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-8 text-center text-xl font-bold text-white">
              {t('patrocinadores.editionsTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {editions.map(({ year, place }) => (
                <div
                  key={year}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3"
                >
                  <span className="text-sm font-bold text-[#fdcc30]">{year}</span>
                  <span className="text-xs text-white/75">{place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What does sponsorship make possible */}
      <section className="bg-white py-20 md:py-28 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#262460] dark:text-white md:text-4xl">
              {t('patrocinadores.makePossibleTitle')}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              {t('patrocinadores.makePossibleText')}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {lists.makePossible.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 dark:border-slate-700/40 dark:bg-slate-800/50"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4367e1] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-20 md:py-28 dark:bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#262460] dark:text-white md:text-4xl">
              {t('patrocinadores.benefitsTitle')}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              {t('patrocinadores.benefitsText')}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 md:p-10">
            <p className="mb-6 font-semibold text-slate-900 dark:text-white">
              {t('patrocinadores.benefitsListTitle')}
            </p>
            <ul className="space-y-4">
              {lists.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#4367e1]" />
                  <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="bg-white py-20 md:py-28 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#262460] dark:text-white md:text-4xl">
              {t('patrocinadores.tiersTitle')}
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700/40 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-slate-50 px-6 py-4 text-left font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {t('patrocinadores.tierBenefit')}
                  </th>
                  {(['silver', 'bronze', 'gold', 'platinum'] as const).map((tier) => (
                    <th
                      key={tier}
                      className={`px-6 py-4 text-center font-bold text-white ${tierColors[tier].header}`}
                    >
                      {t(`patrocinadores.tier${tier.charAt(0).toUpperCase() + tier.slice(1)}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40">
                {tierRows.map(({ key, silver, bronze, gold, platinum }) => (
                  <tr key={key} className="bg-white hover:bg-slate-50/50 dark:bg-slate-900 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                      {t(`patrocinadores.${key}`)}
                    </td>
                    {([silver, bronze, gold, platinum] as const).map((has, i) => {
                      const tierKey = (['silver', 'bronze', 'gold', 'platinum'] as const)[i];
                      return (
                        <td key={tierKey} className="px-6 py-4 text-center">
                          {has ? (
                            <CheckCircle size={20} className={`mx-auto ${tierColors[tierKey].dot}`} />
                          ) : (
                            <span className="mx-auto block h-0.5 w-4 rounded bg-slate-200 dark:bg-slate-700" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-5 md:hidden">
            {(['silver', 'bronze', 'gold', 'platinum'] as const).map((tier) => {
              const tierLabel = t(`patrocinadores.tier${tier.charAt(0).toUpperCase() + tier.slice(1)}`);
              const included = tierRows.filter((r) => r[tier]);
              return (
                <div key={tier} className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700/40">
                  <div className={`px-6 py-4 text-center font-bold text-white ${tierColors[tier].header}`}>
                    {tierLabel}
                  </div>
                  <div className="bg-white px-6 py-5 dark:bg-slate-900">
                    <ul className="space-y-3">
                      {included.map(({ key }) => (
                        <li key={key} className="flex items-start gap-3">
                          <CheckCircle size={16} className={`mt-0.5 flex-shrink-0 ${tierColors[tier].dot}`} />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {t(`patrocinadores.${key}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2377b9] py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            {t('patrocinadores.ctaTitle')}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-white/85">
            {t('patrocinadores.ctaText1')}
          </p>
          <p className="mb-10 text-base leading-relaxed text-white/85">
            {t('patrocinadores.ctaText2')}
          </p>
          <Link
            to={ROUTES.CONTACTO}
            className="inline-flex h-14 items-center rounded bg-[#fdcc30] px-10 text-sm font-bold uppercase tracking-widest text-black transition-colors duration-200 hover:bg-white hover:text-[#262460]"
          >
            {t('patrocinadores.ctaButton')}
          </Link>

          <div className="mt-12 border-t border-white/20 pt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60">
              {t('patrocinadores.contactLabel')}
            </p>
            <a
              href="mailto:abrelatam@idatosabiertos.org"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-[#fdcc30]"
            >
              <Mail size={20} />
              abrelatam@idatosabiertos.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


export default Patrocinadores