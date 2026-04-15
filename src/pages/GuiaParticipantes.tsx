import { MapPin, Calendar, Wifi, Coffee, Users, BookOpen, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

const sections = [
  {
    icon: BookOpen,
    title: '¿Qué es ABRELATAM / CONDATOS?',
    content:
      'ABRELATAM es una desconferencia comunitaria donde la agenda se construye colectivamente. CONDATOS es la conferencia regional con paneles y talleres seleccionados por un comité. Juntos conforman el encuentro más importante de la región sobre datos abiertos y tecnología cívica.',
  },
  {
    icon: Calendar,
    title: 'Fechas y lugar',
    content:
      'El evento se realizará del 25 al 28 de junio de 2026 en Ciudad de Guatemala, Guatemala. La sede es el Centro Cultural Miguel Ángel Asturias, en el corazón de la Zona 1.',
  },
  {
    icon: Users,
    title: '¿A quién va dirigido?',
    content:
      'El evento es para personas de la sociedad civil, gobierno, academia, sector privado y comunidad tecnológica comprometidas con la apertura de datos, la transparencia y la innovación pública en América Latina.',
  },
  {
    icon: MapPin,
    title: 'Cómo llegar',
    content:
      'El Centro Cultural Miguel Ángel Asturias se encuentra en la 24 Calle 3-81, Zona 1, Ciudad de Guatemala. Puedes llegar en Transmetro, taxi o servicio de ridesharing. Próximamente publicaremos una guía detallada de movilidad.',
  },
  {
    icon: Wifi,
    title: 'Durante el evento',
    content:
      'Habrá WiFi disponible en todas las salas. Te recomendamos llevar tu computadora o tablet para participar activamente. El evento cuenta con coffee breaks, almuerzo y espacios de networking.',
  },
  {
    icon: Coffee,
    title: 'Networking y comunidad',
    content:
      'ABRELATAM / CONDATOS es ante todo un espacio de comunidad. Aprovecha los recesos, las actividades sociales y los side events para conectar con otras personas de la región.',
  },
];

const faqs = [
  { q: '¿Necesito registro previo para asistir?', a: 'Sí, debes completar tu registro oficial cuando se habilite. Por ahora puedes hacer el pre-registro para recibir novedades.' },
  { q: '¿El evento es gratuito?', a: 'El evento tiene costo de inscripción. Se anunciarán los precios por categoría (estudiantes, sociedad civil, gobierno, sector privado) cuando se abra el registro oficial.' },
  { q: '¿Habrá traducción simultánea?', a: 'Sí, las sesiones plenarias principales contarán con interpretación español-inglés-portugués.' },
  { q: '¿Puedo proponer una sesión?', a: 'Las convocatorias para sesiones y talleres se abrirán en febrero de 2026. Esté atento a las novedades en este sitio.' },
  { q: '¿Qué incluye la inscripción?', a: 'Acceso a todas las sesiones, materiales del evento, coffee breaks y certificado de participación. No incluye alojamiento ni transporte.' },
];

export default function GuiaParticipantes() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title="Guía para participantes"
        subtitle="Todo lo que necesitas saber para aprovechar al máximo tu experiencia en ABRELATAM / CONDATOS 2026."
        backgroundImage={assetPath('slider/AL-48.png')}
      />

      <section className="bg-white dark:bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sections.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-100 dark:border-slate-700/40 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#262460]/10 dark:bg-[#2377b9]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#262460] dark:text-[#2377b9]" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{content}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2377b9] mb-3">FAQ</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
                <HelpCircle size={26} className="text-[#2377b9]" />
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-2">
              {faqs.map(({ q, a }, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800/70 rounded-2xl border border-slate-100 dark:border-slate-700/40 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-relaxed flex-1">{q}</h3>
                    {openFaq === i ? (
                      <ChevronUp className="text-[#2377b9] flex-shrink-0 mt-0.5" size={18} />
                    ) : (
                      <ChevronDown className="text-slate-400 flex-shrink-0 mt-0.5" size={18} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-700/40 pt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
