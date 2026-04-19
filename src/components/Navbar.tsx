import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

interface NavbarProps {
  scrolled: boolean;
}

interface DropdownItem {
  to: string;
  labelKey: string;
}

interface NavItem {
  labelKey: string;
  to?: string;
  external?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { labelKey: 'nav.home', to: ROUTES.HOME },
  {
    labelKey: 'nav.event',
    dropdown: [
      { to: ROUTES.SOBRE, labelKey: 'nav.about' },
      { to: ROUTES.GUIA_PARTICIPANTES, labelKey: 'nav.guideForParticipants' },
      { to: ROUTES.CODIGO_CONDUCTA, labelKey: 'nav.codeOfConduct' },
      { to: ROUTES.PRE_REGISTRO, labelKey: 'nav.preRegister' },
      { to: ROUTES.ALIADOS, labelKey: 'nav.partners' },
      { to: ROUTES.COMUNIDAD, labelKey: 'nav.community' },
    ],
  },
  {
    labelKey: 'nav.agendaMenu',
    dropdown: [
      { to: ROUTES.AGENDA, labelKey: 'nav.agendaPage' },
      { to: ROUTES.CONVOCATORIAS, labelKey: 'nav.calls' },
      { to: ROUTES.SIDE_EVENTS, labelKey: 'nav.sideEvents' },
      { to: ROUTES.BECAS, labelKey: 'nav.scholarships' },
      { to: ROUTES.VIAJE_SEDE, labelKey: 'nav.travel' },
    ],
  },
  { labelKey: 'nav.press', to: ROUTES.PRENSA },
  { labelKey: 'nav.contact', to: ROUTES.CONTACTO },
];

const mobileAllLinks: { to?: string; external?: string; labelKey: string; indent?: boolean }[] = [
  { to: ROUTES.HOME, labelKey: 'nav.home' },
  { to: ROUTES.SOBRE, labelKey: 'nav.about', indent: true },
  { to: ROUTES.GUIA_PARTICIPANTES, labelKey: 'nav.guideForParticipants', indent: true },
  { to: ROUTES.CODIGO_CONDUCTA, labelKey: 'nav.codeOfConduct', indent: true },
  { to: ROUTES.PRE_REGISTRO, labelKey: 'nav.preRegister', indent: true },
  { to: ROUTES.ALIADOS, labelKey: 'nav.partners', indent: true },
  { to: ROUTES.COMUNIDAD, labelKey: 'nav.community', indent: true },
  { to: ROUTES.AGENDA, labelKey: 'nav.agendaPage', indent: true },
  { to: ROUTES.CONVOCATORIAS, labelKey: 'nav.calls', indent: true },
  { to: ROUTES.SIDE_EVENTS, labelKey: 'nav.sideEvents', indent: true },
  { to: ROUTES.BECAS, labelKey: 'nav.scholarships', indent: true },
  { to: ROUTES.VIAJE_SEDE, labelKey: 'nav.travel', indent: true },
  { to: ROUTES.PRENSA, labelKey: 'nav.press' },
  { to: ROUTES.CONTACTO, labelKey: 'nav.contact' },
];

function DropdownMenu({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const linkBase = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200';
  const linkInactive = scrolled
    ? 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'
    : 'text-white/85 hover:text-white hover:bg-white/12';

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`flex items-center gap-1 ${linkBase} ${linkInactive}`}>
        {t(item.labelKey)}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 z-50 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
        }`}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden py-1">
          {item.dropdown!.map(link => (
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
              onClick={() => setOpen(false)}
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
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
              {navItems.map(item => {
                if (item.dropdown) {
                  return (
                    <DropdownMenu key={item.labelKey} item={item} scrolled={scrolled} />
                  );
                }
                if (item.external) {
                  return (
                    <a
                      key={item.labelKey}
                      href={item.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkBase} ${linkInactive}`}
                    >
                      {t(item.labelKey)}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={item.labelKey}
                    to={item.to!}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <LanguageSwitcher scrolled={scrolled} />
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <LanguageSwitcher scrolled={scrolled} />
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
        <div className="fixed inset-0 z-[60] lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute top-0 right-0 bottom-0 z-10 w-[min(20rem,calc(100vw-4rem))] bg-white dark:bg-slate-900 shadow-2xl flex flex-col animate-slideInRight"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 pt-8 pb-4 border-b border-slate-100 dark:border-slate-800">
              <img
                src={assetPath('logos/Logo_Final_AbreLatam01.png')}
                alt="ABRELATAM CONDATOS"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-20 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
              {mobileAllLinks.map((link, i) => {
                if (link.external) {
                  return (
                    <a
                      key={i}
                      href={link.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 ${link.indent ? 'pl-8' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(link.labelKey)}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to!}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${link.indent ? 'pl-8' : ''} ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.labelKey)}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
