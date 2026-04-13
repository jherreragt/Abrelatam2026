import { Link } from 'react-router-dom';
import { Users, FileText, Lightbulb, Heart, Zap, MessageSquare, Presentation, Building2, CheckCircle, ArrowRight, Newspaper, Globe, Database, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';
import Button from '../components/Button';
import HeroSlider from '../components/HeroSlider';
import BlogCard from '../components/BlogCard';
import { getRecentPosts } from '../data/blogPosts';
import { ROUTES } from '../router/routes';

const thematicIcons = [Globe, Database, Lightbulb, Shield, Heart];

const activities = [
  { icon: Presentation, key: 'panels' },
  { icon: Lightbulb, key: 'workshops' },
  { icon: MessageSquare, key: 'unconference' },
  { icon: Zap, key: 'lightning' },
  { icon: Users, key: 'networking' },
  { icon: Building2, key: 'sideEvents' },
];

const organizers = [
  { name: 'OEA', url: 'https://www.oas.org', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/OAS_Logo.svg/1200px-OAS_Logo.svg.png' },
  { name: 'ILDA', url: 'https://idatosabiertos.org', logo: 'https://idatosabiertos.org/wp-content/uploads/2021/08/ilda-logo.png' },
  { name: 'Red Ciudadana', url: 'https://redciudadana.org', logo: 'https://redciudadana.org/images/logo.png' },
  { name: 'Hivos', url: 'https://hivos.org', logo: 'https://hivos.org/wp-content/themes/hivos/assets/images/hivos-logo.svg' },
];

export default function Home() {
  const { t } = useLanguage();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      <HeroSlider />

      {/* What is ABRELATAM / CONDATOS */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
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
      </section>

      {/* Thematic Tracks */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Temáticas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t('home.thematicTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {(['thematic1', 'thematic2', 'thematic3', 'thematic4', 'thematic5'] as const).map((key, i) => {
              const Icon = thematicIcons[i];
              return (
                <div
                  key={key}
                  className={`group bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow${i === 4 ? ' md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium leading-snug text-sm">
                    {t(`home.${key}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome Guatemala */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-900">
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
      </section>

      {/* Venue */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Sede</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {t('home.venueTitle')}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t('home.venueSubtitle')}</p>

              <img
                src="https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teatro Nacional de Guatemala"
                className="w-full rounded-2xl object-cover h-48 mb-6 shadow-lg"
              />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('home.venueName')}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">{t('home.venueDesc')}</p>

              <div className="space-y-3">
                {(['venueFeature1', 'venueFeature2', 'venueFeature3', 'venueFeature4'] as const).map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{t(`home.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700/40 lg:sticky lg:top-28">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.508!2d-90.51993!3d14.62708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a224c1b0dddd%3A0xafe1e081d63e5245!2sCentro%20Cultural%20Miguel%20%C3%81ngel%20Asturias!5e0!3m2!1ses!2sgt!4v1710000000000!5m2!1ses!2sgt"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centro Cultural Miguel Ángel Asturias"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to find */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
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
      </section>

      {/* Participate CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
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
      </section>

      {/* Latest News */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-2">Blog</span>
              <div className="flex items-center gap-3">
                <Newspaper className="text-slate-800 dark:text-white" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  Últimas Noticias
                </h2>
              </div>
            </div>
            <Link
              to={ROUTES.NOTICIAS}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group"
            >
              Ver todas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to={ROUTES.NOTICIAS}>
              <Button>Ver todas las noticias</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-10">Organizan y apoyan</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {organizers.map(org => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                title={org.name}
                className="group flex flex-col items-center gap-2.5"
              >
                <div className="h-12 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <img src={org.logo} alt={org.name} className="max-h-12 max-w-[130px] object-contain" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
