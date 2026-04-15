import { ClipboardList, CheckCircle2, Users, Globe } from 'lucide-react';

const GOOGLE_FORM_URL =
  'https://forms.gle/hdhZaoH6aM11TKX16';

const benefits = [
  {
    icon: ClipboardList,
    title: 'Reserva tu lugar',
    desc: 'Sé de los primeros en confirmar tu interés y recibir notificaciones prioritarias cuando abra el registro oficial.',
  },
  {
    icon: Users,
    title: 'Comunidad global',
    desc: 'Conéctate con cientos de personas de la región comprometidas con los datos abiertos y la transparencia.',
  },
  {
    icon: Globe,
    title: 'Información actualizada',
    desc: 'Recibirás noticias, agenda y convocatorias directamente en tu correo antes que nadie.',
  },
  {
    icon: CheckCircle2,
    title: 'Sin compromiso',
    desc: 'El pre-registro es gratuito y no implica pago. Podrás completar tu inscripción oficial cuando se habilite.',
  },
];

export default function PreRegistro() {
  return (
    <>
      <div className="relative bg-[#262460] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2377b9]/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#2377b9]/20 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Pre-registro
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Registra tu interes en{' '}
            <span className="text-[#2377b9]">ABRELATAM / CONDATOS 2026</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Completa el formulario a continuacion y te contactaremos cuando se abra el registro oficial del evento.
          </p>
        </div>
      </div>

      <section className="bg-slate-50 dark:bg-slate-950 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#262460]/10 dark:bg-[#2377b9]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#262460] dark:text-[#2377b9]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Completa el formulario
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Ciudad de Guatemala &mdash; 25 al 28 de junio, 2026
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
              <iframe
                src={GOOGLE_FORM_URL}
                title="Formulario de pre-registro ABRELATAM / CONDATOS 2026"
                width="100%"
                height="860"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="block"
              >
                Cargando formulario...
              </iframe>
            </div>

            <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-4">
              Al enviar este formulario aceptas recibir comunicaciones sobre el evento. Puedes darte de baja en cualquier momento.
            </p>
            <p className="mt-3 text-center text-sm">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2377b9] hover:text-[#262460]"
              >
                Abrir formulario en una pestaña nueva
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
