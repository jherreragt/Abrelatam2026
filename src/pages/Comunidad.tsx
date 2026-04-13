import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Shield, MessageCircle, Github, Twitter, ArrowRight } from 'lucide-react';

const values = [
  { icon: Users, title: 'Colaboración', desc: 'Trabajamos juntos, compartimos conocimiento y potenciamos el impacto colectivo.', color: 'blue' },
  { icon: Globe, title: 'Apertura', desc: 'Creemos en la transparencia y en compartir datos, herramientas y experiencias libremente.', color: 'cyan' },
  { icon: Heart, title: 'Inclusión', desc: 'Valoramos la diversidad de perspectivas, identidades y geografías en nuestra comunidad.', color: 'rose' },
  { icon: Shield, title: 'Respeto', desc: 'Construimos espacios seguros donde todas las personas pueden expresarse libremente.', color: 'emerald' },
];

const channels = [
  { icon: Twitter, title: 'Twitter / X', desc: 'Síguenos y conversa con la comunidad en tiempo real durante y entre eventos.', handle: '@ABRELATAM', href: '#', color: 'bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400' },
  { icon: MessageCircle, title: 'Slack', desc: 'Únete al espacio de Slack de la comunidad para conversaciones temáticas.', handle: 'Comunidad CONDATOS', href: '#', color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' },
  { icon: Github, title: 'GitHub', desc: 'Colabora en proyectos de tecnología cívica y datos abiertos de la región.', handle: 'github.com/abrelatam', href: '#', color: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  cyan: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400',
  rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
};

const countries = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
  'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua',
  'Panamá', 'Paraguay', 'Perú', 'República Dominicana', 'Uruguay', 'Venezuela'
];

export default function Comunidad() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Comunidad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Una comunidad regional
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Conectamos a personas, organizaciones y gobiernos que trabajan con datos abiertos en América Latina.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Valores</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Lo que nos une</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow text-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${colorMap[color]}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Canales</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Únete a la conversación</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-20">
            {channels.map(({ icon: Icon, title, desc, handle, href, color }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow flex flex-col"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-3">{desc}</p>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-1.5 inline-flex items-center gap-1 transition-all">
                  {handle} <ArrowRight size={11} />
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Presencia regional</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Comunidades locales</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
              La comunidad está presente en 18 países de América Latina y el Caribe.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {countries.map(country => (
              <span key={country} className="inline-flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/40 rounded-full px-3.5 py-1.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
