import { Newspaper, Download, Mail, Camera, FileText, ExternalLink, Radio } from 'lucide-react';

const pressKitItems = [
  { icon: FileText, title: 'Comunicado de prensa', desc: 'Información oficial sobre el evento para medios de comunicación.', action: 'Descargar PDF', color: 'blue' },
  { icon: Camera, title: 'Logos e imágenes', desc: 'Logos oficiales del evento en alta resolución y diferentes formatos.', action: 'Descargar ZIP', color: 'emerald' },
  { icon: FileText, title: 'Datos y cifras', desc: 'Estadísticas sobre ediciones anteriores y datos del evento actual.', action: 'Ver documento', color: 'amber' },
  { icon: Radio, title: 'Biografías de ponentes', desc: 'Información sobre los principales ponentes y panelistas del evento.', action: 'Próximamente', color: 'slate' },
];

const releases = [
  { date: '15 de diciembre, 2025', title: 'Guatemala será sede de ABRELATAM / CONDATOS 2026', excerpt: 'Las conferencias regionales más importantes sobre datos abiertos regresan a Centroamérica para su edición 2026...', available: true },
  { date: 'Próximamente', title: 'Apertura de convocatorias para ponencias', excerpt: 'Comunicado disponible próximamente...', available: false },
];

const accreditation = [
  'Acceso completo a todas las sesiones plenarias y paneles',
  'Zona exclusiva de prensa con WiFi y espacio de trabajo',
  'Materiales de prensa y actualizaciones del programa',
  'Oportunidades para entrevistar a ponentes y organizadores',
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
  slate: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400',
};

export default function Prensa() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-orange-500 via-amber-600 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Prensa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Sala de prensa
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Recursos, comunicados y materiales para medios de comunicación que cubren ABRELATAM / CONDATOS 2026.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3">Sobre el evento</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Para medios de comunicación</h2>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/40">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                ABRELATAM y CONDATOS 2026 reunirán en Ciudad de Guatemala a más de 500 personas de toda América Latina y el Caribe para discutir el futuro de los datos abiertos, la transparencia y la rendición de cuentas en la región.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Durante cuatro días (25-28 de junio de 2026), activistas, funcionarios públicos, desarrolladores, periodistas y académicos compartirán experiencias, presentarán proyectos innovadores y construirán soluciones colaborativas para fortalecer la democracia a través de la apertura de datos.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Esta será la primera vez en varios años que las conferencias regresan a Centroamérica, consolidando a Guatemala como un hub regional de innovación cívica y tecnología para el bien público.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3">Recursos</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Kit de prensa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
            {pressKitItems.map(({ icon: Icon, title, desc, action, color }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow flex gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{desc}</p>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors">
                    <Download size={13} />
                    {action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3">Acreditación</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Acreditación de prensa</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Ofrecemos acreditación gratuita para periodistas y medios interesados en cubrir el evento.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-white dark:bg-slate-800/70 rounded-2xl border border-slate-100 dark:border-slate-700/40 overflow-hidden card-glow">
              <div className="h-1.5 bg-gradient-to-r from-orange-400 to-amber-500" />
              <div className="p-8">
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  La acreditación incluye los siguientes beneficios para medios acreditados:
                </p>
                <ul className="space-y-3 mb-7">
                  {accreditation.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-xl p-4 mb-6">
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Requisitos:</span> Debes ser periodista activo de un medio reconocido (digital, impreso, radio o TV). Se requiere carta del medio que respalde tu solicitud y ejemplos de trabajos publicados.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
                  <ExternalLink size={15} />
                  Solicitar acreditación
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3">Comunicados</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Comunicados recientes</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto mb-20">
            {releases.map(({ date, title, excerpt, available }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1.5">{date}</p>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{excerpt}</p>
                </div>
                {available ? (
                  <button className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors whitespace-nowrap">
                    Leer más <ExternalLink size={12} />
                  </button>
                ) : (
                  <span className="flex-shrink-0 text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap">Próximamente</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-orange-400" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">Contacto para prensa</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Para consultas, entrevistas o más información, contacta a nuestro equipo de comunicaciones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="mailto:prensa@abrelatam.org" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                <Mail size={15} /> prensa@abrelatam.org
              </a>
              <span className="hidden sm:block text-slate-600">|</span>
              <span className="text-slate-400">WhatsApp: +502 1234-5678</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
