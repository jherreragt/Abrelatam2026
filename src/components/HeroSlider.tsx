import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Calendar, ChevronDown } from 'lucide-react';
import { ROUTES } from '../router/routes';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSlider() {
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

  const pad = (n: number) => String(n).padStart(2, '0');

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-[700px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'scale(1.05)', filter: 'brightness(0.6)' }}
      >
        <source src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-blue-950/55 to-black/90" />

      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto w-full flex flex-col items-center pt-20">

          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-10 animate-fadeInUp">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/85 text-sm font-medium">Ciudad de Guatemala</span>
            <span className="text-white/35">·</span>
            <span className="text-blue-300 text-sm font-semibold tracking-wide">7 – 9 octubre 2026</span>
          </div>

          <img
            src="https://2023.abrelatam.org/wp-content/uploads/2023/03/Condatos-Negativotrue@2x.svg"
            alt="CONDATOS"
            className="h-44 md:h-60 lg:h-72 w-auto mb-7 drop-shadow-2xl px-4 animate-fadeInUp-d1"
          />

          <p className="text-base md:text-lg text-white/65 font-light mb-11 max-w-lg mx-auto leading-relaxed animate-fadeInUp-d1">
            La conferencia regional más importante sobre datos abiertos, transparencia y tecnología cívica en América Latina.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-14 animate-fadeInUp-d2">
            <Link to={ROUTES.CONVOCATORIAS}>
              <button className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/40 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0">
                <Users size={17} />
                Registrarme
              </button>
            </Link>
            <Link to={ROUTES.CONVOCATORIAS}>
              <button className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/18 text-white border border-white/22 hover:border-white/38 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                <BookOpen size={17} />
                Convocatorias
              </button>
            </Link>
            <Link to={ROUTES.AGENDA}>
              <button className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/18 text-white border border-white/22 hover:border-white/38 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                <Calendar size={17} />
                Agenda
              </button>
            </Link>
          </div>

          <div className="w-full max-w-[380px] animate-fadeInUp-d3">
            <p className="text-white/35 text-xs uppercase tracking-widest mb-4 font-medium">Faltan para el evento</p>
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { value: pad(timeLeft.days), label: 'Días' },
                { value: pad(timeLeft.hours), label: 'Horas' },
                { value: pad(timeLeft.minutes), label: 'Min' },
                { value: pad(timeLeft.seconds), label: 'Seg' }
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/8 backdrop-blur-md border border-white/14 rounded-2xl py-4 px-1 flex flex-col items-center"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white tabular-nums leading-none">
                    {value}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider mt-2 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/70 transition-colors animate-float"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown size={30} strokeWidth={1.5} />
      </button>
    </div>
  );
}
