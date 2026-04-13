import { Link } from 'react-router-dom';
import { Users, Coffee, Lightbulb, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import { ROUTES } from '../router/routes';

const types = [
  { icon: Users, title: 'Reuniones comunitarias', desc: 'Encuentros de grupos de trabajo, redes regionales o equipos que aprovechan la ocasión para reunirse en persona.', color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600' },
  { icon: Coffee, title: 'Talleres especializados', desc: 'Sesiones técnicas o temáticas con enfoque práctico para audiencias específicas o grupos de interés.', color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600' },
  { icon: Lightbulb, title: 'Lanzamientos y demos', desc: 'Presentaciones de herramientas, plataformas, datos o proyectos que quieran compartirse con la comunidad.', color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600' },
];

const steps = [
  { num: '01', title: 'Completa el formulario', desc: 'Describe tu evento, su objetivo, formato y necesidades logísticas.' },
  { num: '02', title: 'Revisión del equipo', desc: 'El equipo organizador revisa las propuestas y confirma disponibilidad de espacios.' },
  { num: '03', title: 'Confirmación y publicación', desc: 'Tu evento se publica en el calendario oficial de side events.' },
  { num: '04', title: 'Realiza tu evento', desc: 'Organiza tu evento durante los días del 7 al 9 de octubre en Guatemala.' },
];

export default function SideEvents() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-amber-600 via-orange-700 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Side Events
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Eventos paralelos
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Organiza tu propio evento en el marco de ABRELATAM / CONDATOS 2026 y llega a toda la comunidad.
          </p>
        </div>
      </div>

      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">¿Qué es?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5">
              La comunidad en acción
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Los side events son actividades organizadas por la comunidad de manera autónoma durante el período de la conferencia.
              Son un espacio para reuniones, talleres especializados, lanzamientos o cualquier iniciativa que quieras impulsar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {types.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              ¿Cómo organizar uno?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/40">
                  <div className="text-2xl font-bold text-blue-200 dark:text-blue-800 font-mono flex-shrink-0 leading-none pt-0.5">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Side events confirmados</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Se publicarán a medida que se confirmen las propuestas.</p>
          </div>

          <div className="border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-6">
              Los side events aún no han sido publicados. ¡Sé el primero en proponer uno!
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              Proponer side event
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
