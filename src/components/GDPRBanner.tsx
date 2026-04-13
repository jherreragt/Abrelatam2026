import { useState, useEffect } from 'react';
import { X, Shield, Cookie } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';

export default function GDPRBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slideUp">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Cookie className="text-orange-400" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={18} className="text-orange-400" />
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {t('gdpr.title')}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t('gdpr.message')}
                  {' '}
                  <a
                    href="/codigo-conducta"
                    className="text-orange-400 hover:text-orange-300 underline transition-colors"
                  >
                    {t('gdpr.learnMore')}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                {t('gdpr.decline')}
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="flex-1 sm:flex-none"
              >
                {t('gdpr.accept')}
              </Button>
              <button
                onClick={handleDecline}
                className="hidden sm:block text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
