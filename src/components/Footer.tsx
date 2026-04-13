import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Twitter, Facebook, Instagram, Youtube, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-6 max-w-7xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          <div className="lg:col-span-4">
            <img
              src="https://2023.abrelatam.org/wp-content/uploads/2023/03/Condatos-Negativotrue@2x.svg"
              alt="CONDATOS"
              className="h-10 w-auto mb-5 opacity-90"
            />
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              La conferencia regional más importante sobre datos abiertos y transparencia en América Latina.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <MapPin size={14} className="text-blue-500 flex-shrink-0" />
              <span>Centro Cultural Miguel Ángel Asturias, Guatemala</span>
            </div>
            <div className="flex gap-2.5">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Evento</h4>
            <ul className="space-y-2.5">
              {[
                { to: ROUTES.SOBRE, label: t('footer.aboutEvent') },
                { to: ROUTES.AGENDA, label: t('nav.agenda') },
                { to: ROUTES.CONVOCATORIAS, label: t('nav.calls') },
                { to: ROUTES.BECAS, label: t('nav.scholarships') },
                { to: ROUTES.ALIADOS, label: t('nav.partners') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Participa</h4>
            <ul className="space-y-2.5">
              {[
                { to: ROUTES.CONVOCATORIAS, label: 'Registrarme' },
                { to: ROUTES.CONVOCATORIAS, label: t('home.proposeSession') },
                { to: ROUTES.SIDE_EVENTS, label: t('nav.sideEvents') },
                { to: ROUTES.CODIGO_CONDUCTA, label: t('nav.codeOfConduct') },
                { to: ROUTES.CONTACTO, label: t('nav.contact') },
              ].map(({ to, label }, i) => (
                <li key={i}>
                  <Link
                    to={to}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-semibold mb-2 tracking-wide">{t('footer.newsletter')}</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">{t('footer.newsletterDesc')}</p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={15} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-700/60 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  subscribed
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-700/40 cursor-default'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
                }`}
              >
                {subscribed ? (
                  <>{t('footer.subscribed')}</>
                ) : (
                  <>
                    <Send size={14} />
                    {t('footer.subscribe')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 ABRELATAM / CONDATOS. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <Link to={ROUTES.CODIGO_CONDUCTA} className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Código de Conducta
            </Link>
            <Link to={ROUTES.CONTACTO} className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
