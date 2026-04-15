import { AlertTriangle, Heart, MessageCircle, CheckCircle, XCircle, Send } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

const expectedBehaviors = [
  { title: 'Respeto mutuo', desc: 'Tratar a todas las personas con respeto y consideración, valorando una diversidad de puntos de vista y experiencias.' },
  { title: 'Comunicación constructiva', desc: 'Ser amable en la forma de hablar y en las acciones. Criticar ideas, no personas.' },
  { title: 'Inclusión activa', desc: 'Buscar perspectivas diversas y crear espacios donde todas las voces puedan ser escuchadas.' },
  { title: 'Empatía', desc: 'Ser consciente del impacto que nuestras palabras y acciones tienen en las demás personas.' },
  { title: 'Colaboración', desc: 'Trabajar juntos de manera constructiva, reconociendo que todas las personas tienen algo valioso que aportar.' },
];

const unacceptableBehaviors = [
  'Comentarios ofensivos relacionados con género, identidad y expresión de género, orientación sexual, discapacidad, enfermedad mental, apariencia física, edad, raza, etnia, nacionalidad o religión.',
  'Comentarios no deseados sobre las opciones y prácticas de estilo de vida de una persona.',
  'Contacto físico inapropiado o atención sexual no deseada.',
  'Intimidación deliberada, acecho o seguimiento.',
  'Fotografía o grabación acosadora, incluyendo registro de actividad en línea con propósitos de acoso.',
  'Interrupción sostenida de conversaciones, charlas u otros eventos.',
  'Defensa o fomento de cualquiera de los comportamientos anteriores.',
];

export default function CodigoConducta() {
  const [reportData, setReportData] = useState({
    name: '',
    email: '',
    anonymous: false,
    incident: '',
    date: '',
    location: '',
    witnesses: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setReportData({ name: '', email: '', anonymous: false, incident: '', date: '', location: '', witnesses: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <PageHero
        title="Código de conducta"
        subtitle="Nuestro compromiso con un espacio seguro, respetuoso e inclusivo para todas las personas que participan en ABRELATAM / CONDATOS."
        backgroundImage={assetPath('slider/AL-48.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-secondary/10 dark:bg-primary/80 border border-secondary/20 dark:border-secondary/30 rounded-2xl p-7 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary/15 dark:bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="text-secondary dark:text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-primary dark:text-white mb-2">Nuestro compromiso</h3>
                <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed">
                  ABRELATAM / CONDATOS se compromete a ofrecer una experiencia de conferencia libre de acoso para todas las personas, independientemente de su género, identidad y expresión de género, edad, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza, etnia, religión, nacionalidad o experiencia técnica.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary dark:text-secondary mb-3">Esperado</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center justify-center gap-2">
                  <CheckCircle size={22} className="text-secondary" />
                  Comportamiento esperado
                </h2>
              </div>
              <div className="space-y-3">
                {expectedBehaviors.map(({ title, desc }) => (
                  <div key={title} className="bg-white dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-secondary/30 card-glow">
                    <h4 className="font-semibold text-primary dark:text-white text-sm mb-1">{title}</h4>
                    <p className="text-xs text-primary/70 dark:text-secondary/80 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Inaceptable</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center justify-center gap-2">
                  <XCircle size={22} className="text-secondary" />
                  Comportamiento inaceptable
                </h2>
              </div>
              <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-secondary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="p-6">
                  <p className="text-sm text-primary/70 dark:text-secondary/80 mb-5 leading-relaxed">
                    No se tolerará ninguna forma de acoso. El acoso incluye, pero no se limita a:
                  </p>
                  <ul className="space-y-3">
                    {unacceptableBehaviors.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                        <p className="text-sm text-primary/70 dark:text-secondary/80 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Consecuencias</span>
              <h2 className="text-2xl font-bold text-primary dark:text-white">Consecuencias del incumplimiento</h2>
            </div>
            <div className="bg-primary/5 dark:bg-primary/80 rounded-2xl p-7 border border-primary/10 dark:border-secondary/30">
              <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed mb-4">
                Se espera que las personas a quienes se les pida detener un comportamiento inaceptable lo hagan de inmediato. Si una persona incurre en comportamiento de acoso, los organizadores del evento pueden tomar cualquier acción que consideren apropiada, incluyendo advertir a la persona o expulsarla del evento sin reembolso.
              </p>
              <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed">
                El equipo organizador se reserva el derecho de prohibir la asistencia a futuros eventos a personas que violen el código de conducta.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Reportar</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white flex items-center justify-center gap-3 mb-3">
              <AlertTriangle size={26} className="text-secondary" />
              Reportar un incidente
            </h2>
            <p className="text-secondary dark:text-secondary/80 text-sm max-w-xl mx-auto">
              Si experimentas o presencias comportamiento inaceptable, repórtalo lo antes posible. Todas las denuncias se manejan con confidencialidad.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-secondary/30 overflow-hidden card-glow">
              <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-8">
                <div className="bg-secondary/10 dark:bg-primary/80 border border-secondary/20 dark:border-secondary/30 rounded-xl p-4 mb-6 flex gap-3">
                  <MessageCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-primary/80 dark:text-white/80 leading-relaxed">
                    Tu reporte será revisado por el equipo de respuesta del código de conducta. Puedes hacerlo de forma anónima si lo prefieres.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reportData.anonymous}
                      onChange={(e) => setReportData({ ...reportData, anonymous: e.target.checked })}
                      className="w-4 h-4 text-secondary rounded focus:ring-secondary border-primary/30 dark:border-secondary/40"
                    />
                    <span className="text-sm text-primary/80 dark:text-white/80 font-medium">Enviar reporte de forma anónima</span>
                  </label>

                  {!reportData.anonymous && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">Tu nombre (opcional)</label>
                        <input
                          type="text"
                          value={reportData.name}
                          onChange={(e) => setReportData({ ...reportData, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">Correo (opcional)</label>
                        <input
                          type="email"
                          value={reportData.email}
                          onChange={(e) => setReportData({ ...reportData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      Descripción del incidente <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      value={reportData.incident}
                      onChange={(e) => setReportData({ ...reportData, incident: e.target.value })}
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all resize-none"
                      placeholder="Describe lo que sucedió con el mayor detalle posible..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">Fecha aproximada</label>
                      <input
                        type="date"
                        value={reportData.date}
                        onChange={(e) => setReportData({ ...reportData, date: e.target.value })}
                        className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">Ubicación del incidente</label>
                      <input
                        type="text"
                        value={reportData.location}
                        onChange={(e) => setReportData({ ...reportData, location: e.target.value })}
                        className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                        placeholder="Ej: Sala B, lobby..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">Testigos (opcional)</label>
                    <input
                      type="text"
                      value={reportData.witnesses}
                      onChange={(e) => setReportData({ ...reportData, witnesses: e.target.value })}
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder="Nombres de personas que presenciaron el incidente"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-secondary disabled:bg-secondary text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 disabled:translate-y-0"
                    >
                      {submitted ? <CheckCircle size={16} /> : <Send size={15} />}
                      {submitted ? 'Reporte enviado' : 'Enviar reporte'}
                    </button>
                    {submitted && (
                      <p className="text-xs text-secondary dark:text-secondary font-medium">
                        Será revisado confidencialmente.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-5 bg-primary/5 dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-secondary/30">
              <h4 className="font-semibold text-primary dark:text-white text-sm mb-2">Contacto directo del equipo</h4>
              <p className="text-xs text-primary/70 dark:text-secondary/80 leading-relaxed mb-2">
                También puedes contactar directamente al equipo de código de conducta:
              </p>
              <div className="text-xs text-primary/70 dark:text-secondary/80 space-y-1">
                <p>Email: <a href="mailto:conducta@abrelatam.org" className="text-secondary dark:text-secondary hover:underline font-medium">conducta@abrelatam.org</a></p>
                <p>Durante el evento, habrá personal identificado del equipo de código de conducta disponible en todo momento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
