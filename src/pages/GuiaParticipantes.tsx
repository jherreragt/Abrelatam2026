import { MapPin, Calendar, Wifi, Coffee, Users, BookOpen, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const sections = [
  { icon: BookOpen, key: 'whatIs' },
  { icon: Calendar, key: 'datesPlace' },
  { icon: Users, key: 'audience' },
  { icon: MapPin, key: 'howToArrive' },
  { icon: Wifi, key: 'duringEvent' },
  { icon: Coffee, key: 'networking' },
] as const;

const faqKeys = ['registration', 'free', 'translation', 'propose', 'includes'] as const;

export default function GuiaParticipantes() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title={t('participantGuide.heroTitle')}
        subtitle={t('participantGuide.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-47.png')}
      />

      <section className="bg-white dark:bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sections.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-100 dark:border-slate-700/40 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#262460]/10 dark:bg-[#2377b9]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#262460] dark:text-[#2377b9]" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {t(`participantGuide.sections.${key}.title`)}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {t(`participantGuide.sections.${key}.content`)}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2377b9] mb-3">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
                <HelpCircle size={26} className="text-[#2377b9]" />
                {t('participantGuide.faqTitle')}
              </h2>
            </div>
            <div className="space-y-2">
              {faqKeys.map((key, i) => (
                <div
                  key={key}
                  className="bg-white dark:bg-slate-800/70 rounded-2xl border border-slate-100 dark:border-slate-700/40 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-relaxed flex-1">
                      {t(`participantGuide.faqs.${key}.q`)}
                    </h3>
                    {openFaq === i ? (
                      <ChevronUp className="text-[#2377b9] flex-shrink-0 mt-0.5" size={18} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 mt-0.5" size={18} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-700/40 pt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(`participantGuide.faqs.${key}.a`)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
