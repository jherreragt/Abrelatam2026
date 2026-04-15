import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ClipboardList, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSlider() {
  const { t } = useLanguage();
  const targetDate = new Date('2026-10-07T09:00:00-06:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#262460]">
      <img
        src={assetPath('slider/AL-08.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-24 pt-28 sm:pt-32 lg:pt-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <img
            src={assetPath('logos/AL-10.png')}
            alt="ABRELATAM CONDATOS"
            className="mb-4 h-auto w-[min(82vw,460px)] drop-shadow-2xl animate-fadeInUp"
          />

          <p className="mb-8 max-w-xl text-base font-bold leading-snug tracking-wide text-white sm:text-lg md:text-xl animate-fadeInUp-d1">
            {t('hero.location')}<br />
            {t('hero.date')}
          </p>

          <div className="mb-10 flex flex-col justify-center gap-2.5 sm:flex-row sm:flex-wrap animate-fadeInUp-d2">
            <Link to={ROUTES.SOBRE}>
              <button className="inline-flex min-w-36 items-center justify-center gap-2 rounded bg-[#2377b9] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#2f8bd2]">
                <CalendarDays size={14} />
                {t('hero.register')}
              </button>
            </Link>
            <Link to={ROUTES.PRE_REGISTRO}>
              <button className="inline-flex min-w-36 items-center justify-center gap-2 rounded bg-[#2377b9] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#2f8bd2]">
                <ClipboardList size={14} />
                {t('hero.guide')}
              </button>
            </Link>
            <Link to={ROUTES.VIAJE_SEDE}>
              <button className="inline-flex min-w-36 items-center justify-center gap-2 rounded bg-[#2377b9] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#2f8bd2]">
                <Info size={14} />
                {t('hero.agenda')}
              </button>
            </Link>
          </div>

          <div className="w-full max-w-[560px] animate-fadeInUp-d3">
            <div className="grid grid-cols-4">
              {[
                { value: pad(timeLeft.days), label: t('hero.days') },
                { value: pad(timeLeft.hours), label: t('hero.hours') },
                { value: pad(timeLeft.minutes), label: t('hero.minutes') },
                { value: pad(timeLeft.seconds), label: t('hero.seconds') },
              ].map(({ value, label }, index) => (
                <div
                  key={label}
                  className={`flex min-h-28 flex-col items-center justify-center px-5 sm:px-7 ${index > 0 ? 'border-l border-white/35' : ''}`}
                >
                  <span className="text-4xl font-bold tabular-nums leading-none text-white sm:text-5xl md:text-5xl">
                    {value}
                  </span>
                  <span className="mt-3 text-[10px] font-bold leading-none text-white/80 sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
