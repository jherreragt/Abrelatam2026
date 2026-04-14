import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ROUTES } from '../router/routes';

interface NavbarProps {
  scrolled: boolean;
}

const links: { to: string; labelKey: string }[] = [
  { to: ROUTES.HOME, labelKey: 'nav.home' },
  { to: ROUTES.SOBRE, labelKey: 'nav.about' },
  { to: ROUTES.AGENDA, labelKey: 'nav.agenda' },
  { to: ROUTES.CONVOCATORIAS, labelKey: 'nav.calls' },
  { to: ROUTES.NOTICIAS, labelKey: 'nav.news' },
  { to: ROUTES.SIDE_EVENTS, labelKey: 'nav.sideEvents' },
  { to: ROUTES.VIAJE_SEDE, labelKey: 'nav.travel' },
];

const secondaryLinks: { to: string; labelKey: string }[] = [
  { to: ROUTES.BECAS, labelKey: 'nav.scholarships' },
  { to: ROUTES.COMUNIDAD, labelKey: 'nav.community' },
  { to: ROUTES.CODIGO_CONDUCTA, labelKey: 'nav.codeOfConduct' },
  { to: ROUTES.PRENSA, labelKey: 'nav.press' },
  { to: ROUTES.ALIADOS, labelKey: 'nav.partners' },
  { to: ROUTES.CONTACTO, labelKey: 'nav.contact' },
];

const allLinks = [...links, ...secondaryLinks];

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navBg = scrolled
    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60 dark:border-slate-700/40'
    : 'bg-transparent';

  const linkBase = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200';
  const linkInactive = scrolled
    ? 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'
    : 'text-white/85 hover:text-white hover:bg-white/12';
  const linkActive = scrolled
    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
    : 'text-white bg-white/15';

  const iconColor = scrolled
    ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
    : 'text-white/80 hover:text-white hover:bg-white/12';

  return (
    <>
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-14">

            <div className="hidden lg:flex items-center gap-0.5">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === ROUTES.HOME}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}

              <div className="relative">
                <button
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                  className={`flex items-center gap-1 ${linkBase} ${linkInactive}`}
                >
                  {t('nav.more')}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                  className={`absolute left-0 top-full pt-2 w-52 transition-all duration-200 z-50 ${moreOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden py-1">
                    {secondaryLinks.map(link => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-medium'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400'
                          }`
                        }
                        onClick={() => setMoreOpen(false)}
                      >
                        {t(link.labelKey)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <LanguageSwitcher scrolled={scrolled} />
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${iconColor}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <LanguageSwitcher scrolled={scrolled} />
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${iconColor}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all ${iconColor}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl flex flex-col animate-slideInRight"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <img
                src="https://2023.abrelatam.org/wp-content/uploads/2023/03/Condatos-Negativotrue@2x.svg"
                alt="CONDATOS"
                className="h-8 w-auto dark:invert"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
              {allLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === ROUTES.HOME}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
