import { useState, useEffect } from 'react';
import { UserPlus, X, Calendar, MapPin, Sparkles, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';

export default function RegisterButton() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {isExpanded ? (
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-black rounded-3xl shadow-2xl overflow-hidden max-w-sm animate-slideInRight border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-6">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg group"
                aria-label="Close"
              >
                <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="flex items-start gap-4 mb-5">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                    <Sparkles className="text-white" size={22} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-white font-bold text-xl mb-1.5 tracking-tight">
                    {t('registerPopup.title')}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('registerPopup.subtitle')}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Calendar size={16} className="text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">
                    {t('registerPopup.date')}
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <MapPin size={16} className="text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">
                    {t('registerPopup.location')}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105 group"
                >
                  <UserPlus size={18} />
                  {t('home.register')}
                  <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white p-3 rounded-xl transition-all border border-white/10 hover:border-white/20"
                  aria-label="Minimize"
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/50 animate-pulse border border-blue-400/30">
              {t('registerPopup.badge')}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white p-4 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-110 group border border-blue-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
            <div className="relative flex items-center gap-2">
              <UserPlus size={24} className="group-hover:rotate-12 transition-transform" />
              <ChevronUp size={20} />
            </div>
            <div className="absolute -top-1 -right-1 bg-blue-400 w-3 h-3 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 bg-blue-400 w-3 h-3 rounded-full shadow-lg shadow-blue-400/50"></div>
          </button>
        )}
      </div>
    </div>
  );
}
