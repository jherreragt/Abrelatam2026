import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const organizerLogos = [
  { src: assetPath('logos/AL-51.png'), alt: 'Organizador 1' },
  { src: assetPath('logos/AL-52.png'), alt: 'Organizador 2' },
  { src: assetPath('logos/AL-53.png'), alt: 'Red Ciudadana' },
  { src: assetPath('logos/AL-54.png'), alt: 'Hivos' },
  { src: assetPath('logos/AL-55.png'), alt: 'OEA' },
];

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
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-4 py-14 md:px-6">
        <section className="mb-14">
          <h2 className="mb-9 text-base font-bold">Organizan</h2>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-14">
            {organizerLogos.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-auto object-contain"
                style={{width:'200px'}}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-white/35 pt-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <img
                src={assetPath('logos/Logo_Final_AbreLatam01.png')}
                alt="ABRELATAM CONDATOS"
                className="mb-8 h-auto w-64 max-w-full object-contain"
              />
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/85">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-6">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-white transition-colors hover:text-[#262460]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <nav className="lg:col-span-2">
              <h3 className="mb-4 text-sm font-bold">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3 text-sm text-white/85">
                {[
                  { to: ROUTES.SOBRE, label: t('footer.aboutEvent') },
                  { to: ROUTES.AGENDA, label: t('nav.agenda') },
                  { to: ROUTES.CONVOCATORIAS, label: t('nav.calls') },
                  { to: ROUTES.PRENSA, label: t('nav.press') },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="transition-colors hover:text-[#262460]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="lg:col-span-2">
              <h3 className="mb-4 text-sm font-bold">{t('footer.participate')}</h3>
              <ul className="space-y-3 text-sm text-white/85">
                {[
                  { to: ROUTES.CONVOCATORIAS, label: t('home.register') },
                  { to: ROUTES.CONVOCATORIAS, label: t('home.proposeSession') },
                  { to: ROUTES.SIDE_EVENTS, label: t('nav.sideEvents') },
                  { to: ROUTES.CODIGO_CONDUCTA, label: t('nav.codeOfConduct') },
                ].map(({ to, label }) => (
                  <li key={`${to}-${label}`}>
                    <Link to={to} className="transition-colors hover:text-[#262460]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-4">
              <h3 className="mb-4 text-sm font-bold">{t('footer.newsletter')}</h3>
              <p className="mb-5 text-sm text-white/85">{t('footer.newsletterDesc')}</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email"
                  className="h-12 w-full rounded bg-white px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#262460]"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded bg-[#4367e1] px-4 text-sm font-bold text-white transition-colors hover:bg-[#3657c8] disabled:cursor-default disabled:bg-[#4367e1]/70"
                >
                  {!subscribed && <Send size={14} />}
                  {subscribed ? t('footer.subscribed') : t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
