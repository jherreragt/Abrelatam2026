import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const { t } = useLanguage();
  const targetDate = new Date('2026-10-07T09:00:00-06:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-100 dark:from-blue-950/30 dark:to-slate-900/50 border-2 border-blue-200 dark:border-blue-800/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className="text-blue-600 dark:text-blue-400" size={28} />
          <Clock className="text-blue-600 dark:text-blue-400" size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t('countdown.title')}
        </h3>
        <p className="text-slate-700 dark:text-slate-300">
          {t('countdown.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-blue-100 dark:border-blue-900/30 hover:scale-105 transition-transform">
          <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
            {timeLeft.days}
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase font-medium">
            {t('countdown.days')}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-blue-100 dark:border-blue-900/30 hover:scale-105 transition-transform">
          <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
            {timeLeft.hours}
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase font-medium">
            {t('countdown.hours')}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-blue-100 dark:border-blue-900/30 hover:scale-105 transition-transform">
          <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
            {timeLeft.minutes}
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase font-medium">
            {t('countdown.minutes')}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-blue-100 dark:border-blue-900/30 hover:scale-105 transition-transform">
          <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1">
            {timeLeft.seconds}
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase font-medium">
            {t('countdown.seconds')}
          </div>
        </div>
      </div>
    </div>
  );
}
