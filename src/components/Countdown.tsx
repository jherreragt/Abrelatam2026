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
    <div className="bg-gradient-to-br from-[#329bd0]/10 to-slate-100 border-2 border-[#329bd0]/30 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Calendar className="text-[#329bd0]" size={28} />
          <Clock className="text-[#329bd0]" size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          {t('countdown.title')}
        </h3>
        <p className="text-slate-700">
          {t('countdown.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
        {[
          { value: timeLeft.days, key: 'days' },
          { value: timeLeft.hours, key: 'hours' },
          { value: timeLeft.minutes, key: 'minutes' },
          { value: timeLeft.seconds, key: 'seconds' },
        ].map(({ value, key }) => (
          <div key={key} className="bg-white rounded-xl p-4 shadow-lg border border-[#329bd0]/20 hover:scale-105 transition-transform">
            <div className="text-3xl md:text-5xl font-bold text-[#329bd0] mb-1">
              {value}
            </div>
            <div className="text-xs md:text-sm text-slate-600 uppercase font-medium">
              {t(`countdown.${key}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
