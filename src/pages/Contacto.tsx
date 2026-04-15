import { Mail, MessageCircle, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: '¿Cuándo y dónde será el evento?', answer: 'ABRELATAM / CONDATOS 2026 se realizará del 25 al 28 de junio de 2026 en Ciudad de Guatemala, Guatemala. El lugar exacto se anunciará próximamente.' },
  { question: '¿Cuánto cuesta la inscripción?', answer: 'Los precios de inscripción se anunciarán cuando se abra el registro oficial. Ofreceremos diferentes categorías de registro (estudiantes, sociedad civil, sector privado, gobierno) y un programa de becas para quienes necesiten apoyo económico.' },
  { question: '¿Habrá becas disponibles?', answer: 'Sí, ofrecemos becas de inscripción, viaje y alojamiento para personas que enfrenten barreras económicas. Priorizamos a mujeres, personas indígenas, jóvenes y comunidades subrepresentadas. Las convocatorias de becas se abrirán en abril de 2026.' },
  { question: '¿Puedo proponer una ponencia o taller?', answer: 'Sí, las convocatorias para proponer ponencias, talleres y paneles se abrirán en febrero de 2026. Todas las propuestas son evaluadas por un comité diverso siguiendo criterios transparentes de selección.' },
  { question: '¿En qué idiomas será el evento?', answer: 'El evento se realiza principalmente en español, pero contaremos con traducción simultánea español-inglés-portugués en las sesiones plenarias principales. Algunas sesiones específicas pueden ser en un solo idioma.' },
  { question: '¿Necesito visa para viajar a Guatemala?', answer: 'Depende de tu país de origen. Muchos países de América Latina no requieren visa para estancias turísticas en Guatemala. Te recomendamos verificar los requisitos específicos para tu país en la embajada o consulado guatemalteco.' },
  { question: '¿Qué incluye el registro al evento?', answer: 'El registro incluye acceso a todas las sesiones plenarias, paneles, talleres, coffee breaks, materiales del evento, y certificado de participación. No incluye alojamiento ni transporte, pero ofrecemos recomendaciones de hoteles con tarifas preferenciales.' },
  { question: '¿Cómo puedo organizar un Side Event?', answer: 'Los Side Events son espacios autoorganizados por la comunidad. Puedes proponer uno completando el formulario de propuesta cuando se abran las convocatorias. El equipo organizador te ayudará con la logística básica y la difusión.' },
  { question: '¿Habrá actividades para personas que asisten por primera vez?', answer: 'Sí, organizaremos sesiones de orientación y networking específicas para personas que asisten por primera vez a ABRELATAM / CONDATOS. Queremos que todos se sientan bienvenidos y puedan aprovechar al máximo la experiencia.' },
  { question: '¿Cómo puedo ser patrocinador o aliado del evento?', answer: 'Si tu organización está interesada en apoyar el evento, contáctanos a alianzas@abrelatam.org para recibir nuestro prospecto de patrocinios con los diferentes niveles de participación y beneficios.' },
  { question: '¿El evento es accesible para personas con discapacidad?', answer: 'Sí, estamos comprometidos con hacer el evento accesible para todas las personas. La sede cuenta con acceso para sillas de ruedas, y ofreceremos interpretación en lenguaje de señas en las sesiones principales. Si tienes requerimientos específicos, contáctanos.' },
  { question: '¿Puedo asistir virtualmente?', answer: 'Estamos evaluando opciones para transmitir algunas sesiones principales de forma virtual, pero la experiencia completa del evento es presencial. Anunciaremos más detalles sobre opciones remotas próximamente.' },
];

const contacts = [
  { title: 'Información general', desc: 'Para consultas generales sobre el evento', email: 'info@abrelatam.org' },
  { title: 'Prensa y medios', desc: 'Para consultas de prensa y acreditación', email: 'prensa@abrelatam.org' },
  { title: 'Patrocinios y alianzas', desc: 'Para oportunidades de patrocinio y colaboración', email: 'alianzas@abrelatam.org' },
  { title: 'Código de conducta', desc: 'Para reportar incidentes o consultas sobre el código', email: 'conducta@abrelatam.org' },
];

export default function Contacto() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <PageHero
        title="Contacto y FAQ"
        subtitle="Tienes preguntas? Aquí encontrarás respuestas o podrás contactarnos directamente."
        backgroundImage={assetPath('slider/AL-48.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white flex items-center justify-center gap-3">
              <HelpCircle size={28} className="text-secondary" />
              Preguntas frecuentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-2 mb-24">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-secondary/30 overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                >
                  <h3 className="font-semibold text-primary dark:text-white text-sm leading-relaxed flex-1">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                  ) : (
                    <ChevronDown className="text-secondary/80 flex-shrink-0 mt-0.5" size={18} />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 border-t border-primary/10 dark:border-secondary/30 pt-4">
                    <p className="text-sm text-primary/70 dark:text-secondary/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
            <div>
              <div className="mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Formulario</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white">¿No encontraste tu respuesta?</h2>
                <p className="text-secondary dark:text-secondary/80 text-sm mt-2">Envíanos un mensaje y te responderemos pronto.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      Nombre <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      Correo <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                    Asunto <span className="text-secondary">*</span>
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="registro">Registro e inscripción</option>
                    <option value="becas">Becas</option>
                    <option value="convocatorias">Convocatorias y propuestas</option>
                    <option value="patrocinio">Patrocinio y alianzas</option>
                    <option value="prensa">Prensa y medios</option>
                    <option value="viaje">Viaje y alojamiento</option>
                    <option value="accesibilidad">Accesibilidad</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                    Mensaje <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-secondary disabled:bg-secondary text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 disabled:translate-y-0"
                  >
                    {submitted ? <CheckCircle size={16} /> : <Send size={15} />}
                    {submitted ? 'Mensaje enviado' : 'Enviar mensaje'}
                  </button>
                  {submitted && (
                    <p className="text-xs text-secondary dark:text-secondary font-medium">
                      Te responderemos pronto.
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div>
              <div className="mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Equipos</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white">Contactos directos</h2>
                <p className="text-secondary dark:text-secondary/80 text-sm mt-2">Escríbenos directamente al equipo que corresponde.</p>
              </div>
              <div className="space-y-3">
                {contacts.map(({ title, desc, email }) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="group block bg-white dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-secondary/30 card-glow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-primary dark:text-white text-sm mb-0.5">{title}</h3>
                        <p className="text-xs text-secondary dark:text-secondary/80 mb-2">{desc}</p>
                        <span className="text-xs font-medium text-secondary dark:text-secondary">{email}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-secondary/10 dark:bg-primary/80 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/15 dark:group-hover:bg-secondary/20 transition-colors">
                        <Mail size={14} className="text-secondary" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <MessageCircle size={28} className="mx-auto text-white/70 mb-3" />
            <h3 className="font-bold text-white text-lg mb-2">¿Prefieres hablar por WhatsApp?</h3>
            <p className="text-white/70 text-sm mb-5">Nuestro equipo está disponible de lunes a viernes, 9am–6pm (hora Guatemala).</p>
            <a
              href="https://wa.me/50212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-secondary/10 px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5"
            >
              +502 1234-5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


