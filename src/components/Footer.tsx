import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const organizerLogos = [
  { src: assetPath('logos/AL-51.png'), alt: 'MINFIN', href: 'https://www.minfin.gob.gt/' },
  { src: assetPath('logos/AL-52.png'), alt: 'SEGEPLAN', href: 'https://portal.segeplan.gob.gt/segeplan/' },
  { src: assetPath('logos/AL-53.png'), alt: 'Red Ciudadana', href: 'https://redciudadana.org/' },
  { src: assetPath('logos/AL-54.png'), alt: 'Hivos', href: 'https://hivos.org/' },
  { src: assetPath('logos/AL-55.png'), alt: 'OEA', href: 'https://www.oas.org/' },
  { src: '/assets/logos/logo_ilda_logo_blanco.png', alt: 'ILDA', href: 'https://ilda.la/' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-4 py-14 md:px-6">
        <section className="mb-14">
          <h2 className="mb-9 text-base font-bold">Organizan</h2>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-14">
            {organizerLogos.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="transition-opacity hover:opacity-75"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-auto object-contain"
                  style={{ width: '200px' }}
                />
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-white/35 pt-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-12 lg:gap-12">
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
                    className="text-white transition-colors hover:text-[#fdcc30]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <nav className="lg:col-span-3">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to={ROUTES.SOBRE} className="text-white/85 transition-colors hover:text-white">
                    {t('footer.event')}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.PRE_REGISTRO} className="text-white/85 transition-colors hover:text-white">
                    {t('footer.preRegister')}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.VIAJE_SEDE} className="text-white/85 transition-colors hover:text-white">
                    {t('footer.usefulInfo')}
                  </Link>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-white/45 cursor-default select-none">
                    {t('footer.proposeSession')}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                      {t('footer.comingSoon')}
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-white/45 cursor-default select-none">
                    Side Events
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                      {t('footer.comingSoon')}
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-white/45 cursor-default select-none">
                    {t('footer.volunteers')}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                      {t('footer.comingSoon')}
                    </span>
                  </span>
                </li>
              </ul>
            </nav>

            <div className="lg:col-span-5">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">{t('footer.preRegister')}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/85">
                {t('footer.preRegisterDesc')}
              </p>
              <Link
                to={ROUTES.PRE_REGISTRO}
                className="inline-flex h-12 w-full items-center justify-center rounded bg-[#4367e1] px-6 text-sm font-bold text-white transition-colors hover:bg-[#3657c8]"
              >
                {t('footer.preRegisterButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
