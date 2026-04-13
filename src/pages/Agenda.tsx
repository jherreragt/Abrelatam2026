import { Link } from 'react-router-dom';
import { Calendar, Clock, Mic, Users, BookOpen, Coffee, Music, Zap, Bell } from 'lucide-react';
import Section from '../components/Section';
import { ROUTES } from '../router/routes';

const expectedContent = [
  { icon: Mic, label: 'Conferencias magistrales' },
  { icon: BookOpen, label: 'Talleres temáticos' },
  { icon: Users, label: 'Paneles de discusión' },
  { icon: Zap, label: 'Presentaciones relámpago' },
  { icon: Coffee, label: 'Espacios de networking' },
  { icon: Music, label: 'Eventos sociales' },
];

export default function Agenda() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Programa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Agenda 2026
          </h1>
          <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
            7 – 9 de octubre de 2026 · Centro Cultural Miguel Ángel Asturias, Guatemala
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl px-6 py-4 mb-10">
            <Clock size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <p className="text-amber-800 dark:text-amber-300 text-sm font-medium">
              La agenda completa se publicará próximamente. Suscríbete para recibir novedades.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { day: 'Día 1', label: 'Miércoles 7 oct', type: 'ABRELATAM', desc: 'Desconferencia comunitaria, agenda colaborativa' },
              { day: 'Día 2', label: 'Jueves 8 oct', type: 'CONDATOS', desc: 'Conferencia regional, paneles y sesiones' },
              { day: 'Día 3', label: 'Viernes 9 oct', type: 'CONDATOS', desc: 'Talleres, workshops y networking' },
            ].map(({ day, label, type, desc }) => (
              <div key={day} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/40 text-left">
                <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{day}</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">{label}</div>
                <div className="inline-block bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold px-2 py-0.5 rounded-md mb-2">{type}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">¿Qué puedes esperar?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {expectedContent.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700/40">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-14 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <Bell size={32} className="mx-auto text-white/70 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Sé el primero en saber</h2>
          <p className="text-white/70 text-sm mb-6">Regístrate para recibir la agenda tan pronto esté disponible.</p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
              Registrarme al evento
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
