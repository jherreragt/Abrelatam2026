import { Link } from 'react-router-dom';
import { Target, Users, BookOpen, Globe, Calendar, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { ROUTES } from '../router/routes';

const editions = [
  { year: '2013', city: 'Buenos Aires', country: 'Argentina' },
  { year: '2014', city: 'Montevideo', country: 'Uruguay' },
  { year: '2015', city: 'Ciudad de México', country: 'México' },
  { year: '2016', city: 'Bogotá', country: 'Colombia' },
  { year: '2017', city: 'Santiago', country: 'Chile' },
  { year: '2018', city: 'Lima', country: 'Perú' },
  { year: '2019', city: 'San José', country: 'Costa Rica' },
  { year: '2021', city: 'Virtual', country: 'Online' },
  { year: '2022', city: 'Asunción', country: 'Paraguay' },
  { year: '2023', city: 'Montevideo', country: 'Uruguay' },
  { year: '2024', city: 'Ciudad de México', country: 'México' },
  { year: '2026', city: 'Guatemala', country: 'Guatemala', current: true },
];

const objectives = [
  { icon: BookOpen, title: 'Fortalecer capacidades', desc: 'Desarrollar habilidades técnicas y de políticas públicas en el ecosistema de datos abiertos.', color: 'blue' },
  { icon: Users, title: 'Construir comunidad', desc: 'Tejer redes entre personas, organizaciones y gobiernos que trabajan con datos en la región.', color: 'emerald' },
  { icon: Globe, title: 'Impulsar políticas', desc: 'Promover marcos normativos y prácticas de apertura de datos a nivel regional.', color: 'amber' },
  { icon: Target, title: 'Inspirar innovación', desc: 'Conectar proyectos de tecnología cívica con problemas reales de nuestras comunidades.', color: 'rose' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
  rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
};

export default function Sobre() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            El Evento
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Sobre ABRELATAM /<br />CONDATOS
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Desde 2013, el encuentro regional más importante de la comunidad de datos abiertos en América Latina.
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Historia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5">
              Más de una década de comunidad
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              ABRELATAM y CONDATOS son dos eventos complementarios que se celebran juntos cada año desde 2013. 
              Reúnen a una comunidad diversa que comparte un objetivo: construir una América Latina más abierta, 
              transparente y participativa a través de los datos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {editions.map(ed => (
              <div
                key={ed.year}
                className={`rounded-xl p-4 text-center transition-all ${
                  ed.current
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40'
                }`}
              >
                <div className={`text-xl font-bold mb-0.5 ${ed.current ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {ed.year}
                </div>
                <div className={`text-xs font-medium ${ed.current ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'}`}>
                  {ed.city}
                </div>
                <div className={`text-xs mt-0.5 ${ed.current ? 'text-white/65' : 'text-slate-400'}`}>
                  {ed.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="gray">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Propósito</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nuestros objetivos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {objectives.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${colorMap[color]}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">¿Para quién?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Audiencia</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Funcionarios y funcionarias de gobierno',
              'Activistas y organizaciones de la sociedad civil',
              'Periodistas de datos y de investigación',
              'Desarrolladores y desarrolladoras cívicos',
              'Investigadores e investigadoras académicas',
              'Representantes del sector privado'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40 rounded-xl p-4">
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para participar?</h2>
          <p className="text-white/70 mb-7">Sé parte de la comunidad más importante de datos abiertos en América Latina.</p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
              Ver convocatorias <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
