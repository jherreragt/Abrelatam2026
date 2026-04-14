import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' }
  ];

  const buttonColor = scrolled
    ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
    : 'text-white hover:bg-white/12';

  return (
    <div className="relative group">
      <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${buttonColor}`}>
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code
                ? 'text-orange-600 dark:text-orange-400 font-medium bg-orange-50 dark:bg-orange-900/20'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
