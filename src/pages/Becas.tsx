import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Award, CheckCircle, CalendarDays, ArrowRight } from 'lucide-react';
import { ROUTES } from '../router/routes';

const types = [
  { icon: Award, title: 'Beca de inscripción', desc: 'Cubre el costo de registro al evento para personas de la región que no tienen recursos para pagarlo.', color: 'blue' },
  { icon: Globe, title: 'Beca de viaje', desc: 'Apoyo parcial o total para transporte y alojamiento para participantes de otros países de la región.', color: 'emerald' },
  { icon: Heart, title: 'Beca completa', desc: 'Cubre inscripción, viaje y alojamiento para casos de necesidad prioritaria. Cupos muy limitados.', color: 'rose' },
];

const criteria = [
  'Personas de escasos recursos económicos que no podrían participar de otro modo',
  'Activistas, periodistas o personas de la sociedad civil con proyectos de impacto en datos abiertos',
  'Personas de grupos históricamente subrepresentados en espacios tech',
  'Participantes de países con economías más pequeñas de la región',
  'Contribución activa a la comunidad de datos abiertos en su contexto local',
];

const steps = [
  { step: '01', title: 'Revisa los requisitos', desc: 'Lee los criterios de selección y asegúrate de cumplirlos antes de aplicar.' },
  { step: '02', title: 'Completa el formulario', desc: 'Cuéntanos sobre ti, tu trabajo y por qué necesitas una beca para participar.' },
  { step: '03', title: 'Espera la resolución', desc: 'El comité revisará las solicitudes y te notificará el resultado por email.' },
  { step: '04', title: 'Confirma tu asistencia', desc: 'Si eres seleccionado/a, confirma tu asistencia en el plazo indicado.' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
  rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
};

export default function Becas() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-rose-600 via-pink-700 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Becas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Programa de becas
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Creemos que nadie debe quedarse fuera por razones económicas. Nuestro programa de becas apoya la participación de personas de toda la región.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rose-500 mb-3">Modalidades</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Tipos de beca</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
            {types.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-7 border border-slate-100 dark:border-slate-700/40 card-glow text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${colorMap[color]}`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Criterios de selección</h2>
              <div className="space-y-3">
                {criteria.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Proceso de aplicación</h2>
              <div className="space-y-3">
                {steps.map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="text-xl font-bold text-rose-200 dark:text-rose-900 flex-shrink-0 leading-none w-8">{step}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">{title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-rose-600">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <CalendarDays size={32} className="mx-auto text-white/70 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Convocatoria de becas: abierta</h2>
          <p className="text-white/70 text-sm mb-6">Cierre de aplicaciones: 15 de junio de 2026</p>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-rose-700 hover:bg-rose-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
            Aplicar ahora <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
