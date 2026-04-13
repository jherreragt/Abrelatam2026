import { Link } from 'react-router-dom';
import { Mic, BookOpen, Users, CalendarDays, BarChart2, Award, ExternalLink, Info, CheckCircle } from 'lucide-react';
import { ROUTES } from '../router/routes';

type Status = 'proximamente' | 'abierta' | 'cerrada';

interface Call {
  icon: React.ElementType;
  title: string;
  desc: string;
  status: Status;
  deadline?: string;
  color: string;
}

const calls: Call[] = [
  {
    icon: Mic,
    title: 'Conferencias magistrales',
    desc: 'Propuestas para presentaciones plenarias de alto impacto sobre el estado de los datos abiertos en la región.',
    status: 'proximamente',
    color: 'blue',
  },
  {
    icon: BookOpen,
    title: 'Talleres y workshops',
    desc: 'Sesiones prácticas de 90 minutos donde los participantes aprenden haciendo. Capacidad limitada.',
    status: 'abierta',
    deadline: '31 de julio de 2026',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Paneles de discusión',
    desc: 'Sesiones con múltiples panelistas para debatir perspectivas diversas sobre temas centrales.',
    status: 'abierta',
    deadline: '31 de julio de 2026',
    color: 'amber',
  },
  {
    icon: CalendarDays,
    title: 'Side events',
    desc: 'Eventos paralelos organizados por la comunidad: reuniones de grupos, lanzamientos, demos y más.',
    status: 'abierta',
    deadline: '15 de agosto de 2026',
    color: 'cyan',
  },
  {
    icon: BarChart2,
    title: 'Pósters y demos',
    desc: 'Espacio para mostrar proyectos, visualizaciones y herramientas de datos abiertos en formato visual.',
    status: 'proximamente',
    color: 'rose',
  },
  {
    icon: Award,
    title: 'Becas de participación',
    desc: 'Apoyo económico para personas de la región que necesiten financiamiento para asistir al evento.',
    status: 'abierta',
    deadline: '15 de junio de 2026',
    color: 'violet',
  },
];

const statusConfig: Record<Status, { label: string; classes: string }> = {
  abierta: { label: 'Abierta', classes: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40' },
  proximamente: { label: 'Próximamente', classes: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40' },
  cerrada: { label: 'Cerrada', classes: 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700' },
};

const cardColors: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
  cyan: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400',
  rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
  violet: 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400',
};

export default function Convocatorias() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-emerald-700 via-blue-800 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Convocatorias
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Sé parte del programa
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Propón una sesión, taller, panel o side event para ABRELATAM / CONDATOS 2026.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Modalidades de participación</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
              Elige el formato que mejor se adapte a tu propuesta o proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {calls.map(call => {
              const { label, classes } = statusConfig[call.status];
              const Icon = call.icon;
              return (
                <div key={call.title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cardColors[call.color]}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${classes}`}>
                      {label}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{call.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{call.desc}</p>
                  {call.deadline && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/40 flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={13} />
                      Cierre: <span className="font-semibold text-slate-700 dark:text-slate-300">{call.deadline}</span>
                    </div>
                  )}
                  {call.status === 'abierta' && (
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group"
                    >
                      Enviar propuesta
                      <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Info size={18} className="text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">Criterios de selección</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Relevancia y alineación con las líneas temáticas',
                  'Perspectiva regional latinoamericana',
                  'Diversidad de enfoques y voces',
                  'Aplicabilidad práctica y ejemplos concretos',
                  'Promoción de la participación y el diálogo'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Lineamientos generales</h3>
              <ul className="space-y-2.5">
                {[
                  'Las propuestas deben ser en español, inglés o portugués',
                  'Un máximo de 2 propuestas por persona o equipo',
                  'Se valoran propuestas con perspectiva de género',
                  'Deben incluir ejemplos concretos de América Latina',
                  'Las sesiones no son espacios publicitarios'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
