import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HeroSlider from '../components/HeroSlider';
import BlogCard from '../components/BlogCard';
import { getRecentPosts } from '../data/blogPosts';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const thematicIcons = [
  assetPath('v2/iconos/AL-15.png'),
  assetPath('v2/iconos/AL-16.png'),
  assetPath('v2/iconos/AL-17.png'),
  assetPath('v2/iconos/AL-18.png'),
  assetPath('v2/iconos/AL-19.png'),
];

export default function Home() {
  const { t } = useLanguage();
  const recentPosts = getRecentPosts(6);
  const newsPerPage = 2;
  const newsPageCount = Math.ceil(recentPosts.length / newsPerPage);
  const [newsPage, setNewsPage] = useState(0);
  const visiblePosts = recentPosts.slice(newsPage * newsPerPage, newsPage * newsPerPage + newsPerPage);

  const goToPreviousNews = () => {
    setNewsPage(current => (current === 0 ? newsPageCount - 1 : current - 1));
  };

  const goToNextNews = () => {
    setNewsPage(current => (current === newsPageCount - 1 ? 0 : current + 1));
  };

  return (
    <>
      <HeroSlider />

      {/* What is ABRELATAM / CONDATOS */}
      {/* <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">El Evento</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Dos conferencias,<br />
              <span className="text-gradient">una sola comunidad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-8 translate-y-8" />
              <div className="relative">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">ABRELATAM</span>
                <h3 className="text-2xl font-bold mb-4 leading-tight">{t('home.whatIsAbrelatam')}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{t('home.abrelatamDesc')}</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white overflow-hidden border border-slate-700/50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full translate-x-10 -translate-y-10" />
              <div className="relative">
                <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">CONDATOS</span>
                <h3 className="text-2xl font-bold mb-4 leading-tight">{t('home.whatIsCondatos')}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{t('home.condatosDesc')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 text-center max-w-5xl mx-auto">
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              <strong className="text-slate-900 dark:text-white">{t('home.inGuatemala')}</strong>
              {' · '}
              <span>{t('home.day1')} ABRELATAM</span>
              {' · '}
              <span>{t('home.days23')} CONDATOS</span>
            </p>
          </div>
        </div>
      </section> */}

      {/* Thematic Tracks */}
      <section className="bg-white py-20 md:py-28 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-base font-medium leading-relaxed text-[#262460] md:text-lg">
              <strong className="font-bold">ABRELATAM</strong> y <strong className="font-bold">CONDATOS</strong> son el epicentro regional de la conversación sobre datos abiertos, conectando a gobiernos, academia, sector privado y sociedad civil para abordar desafíos locales y globales. Este encuentro facilita la colaboración y el diálogo entre múltiples sectores para avanzar en la transparencia, el desarrollo inclusivo y el fortalecimiento de la democracia a través de los datos.
            </p>

            <h2 className="mt-14 text-2xl font-bold text-[#262460] md:text-3xl">
              L&iacute;neas tem&aacute;ticas 2026
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {(['thematic1', 'thematic2', 'thematic3', 'thematic4', 'thematic5'] as const).map((key, i) => (
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
      </section>

      {/* Welcome Guatemala */}
      {/* <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart size={28} className="text-rose-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-7 leading-tight">
            {t('home.welcomeTitle')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-3xl mx-auto">
            {t('home.welcome1')}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            {t('home.welcome2')}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            {(['why1', 'why2', 'why3', 'why4'] as const).map((key) => (
              <div key={key} className="flex items-start gap-3 bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4">
                <CheckCircle size={17} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{t(`home.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Venue */}
      <section className="bg-white dark:bg-slate-950">
        <div className="relative overflow-hidden bg-[#2377b9]">
          <img
            src={assetPath('v2/banner/AL-56.png')}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          />
          <div className="relative mx-auto flex min-h-[360px] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center text-white md:min-h-[420px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-wide">
              Guatemala 2026
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              Reg&iacute;strate ahora
            </h2>
            <p className="mb-8 max-w-3xl text-sm font-medium leading-relaxed md:text-base">
              Asegura tu lugar en ABRELATAM / CONDATOS 2026. Completa el formulario de registro y &uacute;nete a la comunidad regional m&aacute;s importante de datos abiertos.
            </p>
            <Link to={ROUTES.PRE_REGISTRO}>
              <button className="rounded bg-[#fdcc30] px-12 py-4 text-sm font-bold uppercase tracking-widest text-black transition-colors duration-200 hover:bg-[#3657c8] hover:text-white">
                Formulario de registro
              </button>
            </Link>
            <p className="mt-8 text-xs font-medium text-white/90">
              El registro es gratuito. Completa el formulario para confirmar tu participaci&oacute;n.
            </p>
          </div>
        </div>

        <div className="h-[320px] w-full overflow-hidden md:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.508!2d-90.51993!3d14.62708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a224c1b0dddd%3A0xafe1e081d63e5245!2sCentro%20Cultural%20Miguel%20%C3%81ngel%20Asturias!5e0!3m2!1ses!2sgt!4v1710000000000!5m2!1ses!2sgt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('home.venueName')}
          />
        </div>
      </section>

      {/* What to find */}
      {/* <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Programa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t('home.whatToFind')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {activities.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40 hover:border-blue-200 dark:hover:border-blue-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {t(`home.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Participate CTA */}
      {/* <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Participa
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('home.participate')}
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto">
              Elige cómo quieres ser parte de ABRELATAM / CONDATOS 2026
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Users, titleKey: 'attend', descKey: 'attendDesc', btnKey: 'register', to: ROUTES.CONVOCATORIAS },
              { icon: FileText, titleKey: 'propose', descKey: 'proposeDesc', btnKey: 'proposeSession', to: ROUTES.CONVOCATORIAS },
              { icon: Lightbulb, titleKey: 'organizeSide', descKey: 'organizeSideDesc', btnKey: 'proposeSideEvent', to: ROUTES.SIDE_EVENTS },
            ].map(({ icon: Icon, titleKey, descKey, btnKey, to }) => (
              <div key={titleKey} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(`home.${titleKey}`)}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1">{t(`home.${descKey}`)}</p>
                <Link to={to}>
                  <button className="w-full bg-white/15 hover:bg-white/25 text-white border border-white/25 hover:border-white/40 py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-200">
                    {t(`home.${btnKey}`)}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={ROUTES.CONVOCATORIAS}>
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {t('home.viewCalls')} →
              </button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Latest News - temporarily hidden */}
      {false && <section className="bg-white py-20 md:py-28 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#262460] dark:text-white">
            {t('home.newsTitle')}
          </h2>

          <div className="relative">
            {newsPageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousNews}
                  aria-label="Noticias anteriores"
                  className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-5xl font-light leading-none text-[#262460] transition-colors hover:text-[#2377b9] md:block"
                >
                  &lsaquo;
                </button>
                <button
                  type="button"
                  onClick={goToNextNews}
                  aria-label="Noticias siguientes"
                  className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-5xl font-light leading-none text-[#262460] transition-colors hover:text-[#2377b9] md:block"
                >
                  &rsaquo;
                </button>
              </>
            )}

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {visiblePosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {Array.from({ length: newsPageCount }).map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setNewsPage(index)}
                aria-label={`Ver grupo de noticias ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${index === newsPage ? 'bg-[#4367e1]' : 'bg-slate-300 hover:bg-[#4367e1]'}`}
              >
                <span className="sr-only">Ver grupo de noticias {index + 1}</span>
              </button>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl justify-end">
            <Link
              to={ROUTES.NOTICIAS}
              className="text-sm font-bold uppercase tracking-wide text-[#2377b9] transition-colors hover:text-[#262460]"
            >
              Ver mas noticias
            </Link>
          </div>
        </div>
      </section>}
    </>
  );
}
