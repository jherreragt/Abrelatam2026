import { Download, Mail, Camera, FileText, ExternalLink, Radio } from 'lucide-react';
import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

const pressKitItems = [
  { icon: FileText, title: 'Comunicado de prensa', desc: 'Información oficial sobre el evento para medios de comunicación.', action: 'Descargar PDF', color: 'brand' },
  { icon: Camera, title: 'Logos e imágenes', desc: 'Logos oficiales del evento en alta resolución y diferentes formatos.', action: 'Descargar ZIP', color: 'brand' },
  { icon: FileText, title: 'Datos y cifras', desc: 'Estadísticas sobre ediciones anteriores y datos del evento actual.', action: 'Ver documento', color: 'brand' },
  { icon: Radio, title: 'Biografías de ponentes', desc: 'Información sobre los principales ponentes y panelistas del evento.', action: 'Próximamente', color: 'brand' },
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
  brand: 'bg-secondary/10 dark:bg-primary/80 text-secondary dark:text-secondary',
      };

export default function Prensa() {
  return (
    <>
      <PageHero
        title="Sala de prensa"
        subtitle="Recursos, comunicados y materiales para medios de comunicacion que cubren ABRELATAM / CONDATOS 2026."
        backgroundImage={assetPath('slider/AL-48.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Sobre el evento</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Para medios de comunicación</h2>
            </div>
            <div className="bg-primary/5 dark:bg-primary/80 rounded-2xl p-8 border border-primary/10 dark:border-secondary/30">
              <p className="text-primary/80 dark:text-white/80 leading-relaxed mb-4">
                ABRELATAM y CONDATOS 2026 reunirán en Ciudad de Guatemala a más de 500 personas de toda América Latina y el Caribe para discutir el futuro de los datos abiertos, la transparencia y la rendición de cuentas en la región.
              </p>
              <p className="text-primary/80 dark:text-white/80 leading-relaxed mb-4">
                Durante cuatro días (25-28 de junio de 2026), activistas, funcionarios públicos, desarrolladores, periodistas y académicos compartirán experiencias, presentarán proyectos innovadores y construirán soluciones colaborativas para fortalecer la democracia a través de la apertura de datos.
              </p>
              <p className="text-primary/80 dark:text-white/80 leading-relaxed">
                Esta será la primera vez en varios años que las conferencias regresan a Centroamérica, consolidando a Guatemala como un hub regional de innovación cívica y tecnología para el bien público.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Recursos</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white">Kit de prensa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
            {pressKitItems.map(({ icon: Icon, title, desc, action, color }) => (
              <div key={title} className="bg-white dark:bg-primary/80 rounded-2xl p-6 border border-primary/10 dark:border-secondary/30 card-glow flex gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-primary/70 dark:text-secondary/80 leading-relaxed mb-3">{desc}</p>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-secondary hover:text-secondary transition-colors">
                    <Download size={13} />
                    {action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Acreditación</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-3">Acreditación de prensa</h2>
            <p className="text-secondary dark:text-secondary/80 text-sm max-w-xl mx-auto">
              Ofrecemos acreditación gratuita para periodistas y medios interesados en cubrir el evento.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-secondary/30 overflow-hidden card-glow">
              <div className="h-1.5 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-8">
                <p className="text-primary/80 dark:text-white/80 text-sm leading-relaxed mb-6">
                  La acreditación incluye los siguientes beneficios para medios acreditados:
                </p>
                <ul className="space-y-3 mb-7">
                  {accreditation.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                      <span className="text-sm text-primary/80 dark:text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/10 dark:bg-primary/80 border border-secondary/20 dark:border-secondary/30 rounded-xl p-4 mb-6">
                  <p className="text-xs text-primary/70 dark:text-secondary/80 leading-relaxed">
                    <span className="font-semibold text-primary dark:text-white/85">Requisitos:</span> Debes ser periodista activo de un medio reconocido (digital, impreso, radio o TV). Se requiere carta del medio que respalde tu solicitud y ejemplos de trabajos publicados.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
                  <ExternalLink size={15} />
                  Solicitar acreditación
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Comunicados</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white">Comunicados recientes</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto mb-20">
            {releases.map(({ date, title, excerpt, available }) => (
              <div key={title} className="bg-white dark:bg-primary/80 rounded-2xl p-6 border border-primary/10 dark:border-secondary/30 card-glow flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-secondary/80 mb-1.5">{date}</p>
                  <h3 className="font-bold text-primary dark:text-white mb-1.5">{title}</h3>
                  <p className="text-sm text-primary/70 dark:text-secondary/80">{excerpt}</p>
                </div>
                {available ? (
                  <button className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-secondary hover:text-secondary transition-colors whitespace-nowrap">
                    Leer más <ExternalLink size={12} />
                  </button>
                ) : (
                  <span className="flex-shrink-0 text-xs text-secondary/80 bg-primary/10 dark:bg-primary/70 px-3 py-1 rounded-full whitespace-nowrap">Próximamente</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-primary dark:bg-primary rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-secondary/100/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">Contacto para prensa</h3>
            <p className="text-white text-sm mb-5 leading-relaxed">
              Para consultas, entrevistas o más información, contacta a nuestro equipo de comunicaciones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="mailto:prensa@abrelatam.org" className="inline-flex items-center gap-2 text-white hover:text-secondary/80 font-semibold transition-colors">
                <Mail size={15} /> prensa@abrelatam.org
              </a>
              <span className="hidden sm:block text-primary/70">|</span>
              <span className="text-white">WhatsApp: +502 1234-5678</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


