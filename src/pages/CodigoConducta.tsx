import { AlertTriangle, Heart, MessageCircle, CheckCircle, XCircle, Send } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const expectedKeys = ['respect', 'constructive', 'inclusion', 'empathy', 'collaboration'] as const;
const unacceptableKeys = ['offensive', 'unwantedComments', 'physicalContact', 'intimidation', 'harassingPhoto', 'disruption', 'advocacy'] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Código de conducta',
    heroSubtitle: 'Nuestro compromiso con un espacio seguro, respetuoso e inclusivo para todas las personas que participan en ABRELATAM / CONDATOS.',
    commitmentTitle: 'Nuestro compromiso',
    commitmentText: 'ABRELATAM / CONDATOS se compromete a ofrecer una experiencia de conferencia libre de acoso para todas las personas, independientemente de su género, identidad y expresión de género, edad, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza, etnia, religión, nacionalidad o experiencia técnica.',
    expectedLabel: 'Esperado',
    expectedTitle: 'Comportamiento esperado',
    expected: {
      respect: { title: 'Respeto mutuo', desc: 'Tratar a todas las personas con respeto y consideración, valorando una diversidad de puntos de vista y experiencias.' },
      constructive: { title: 'Comunicación constructiva', desc: 'Ser amable en la forma de hablar y en las acciones. Criticar ideas, no personas.' },
      inclusion: { title: 'Inclusión activa', desc: 'Buscar perspectivas diversas y crear espacios donde todas las voces puedan ser escuchadas.' },
      empathy: { title: 'Empatía', desc: 'Ser consciente del impacto que nuestras palabras y acciones tienen en las demás personas.' },
      collaboration: { title: 'Colaboración', desc: 'Trabajar juntos de manera constructiva, reconociendo que todas las personas tienen algo valioso que aportar.' },
    },
    unacceptableLabel: 'Inaceptable',
    unacceptableTitle: 'Comportamiento inaceptable',
    unacceptableIntro: 'No se tolerará ninguna forma de acoso. El acoso incluye, pero no se limita a:',
    unacceptable: {
      offensive: 'Comentarios ofensivos relacionados con género, identidad y expresión de género, orientación sexual, discapacidad, apariencia física, edad, raza, etnia, nacionalidad o religión.',
      unwantedComments: 'Comentarios no deseados sobre las opciones y prácticas de estilo de vida de una persona.',
      physicalContact: 'Contacto físico inapropiado o atención sexual no deseada.',
      intimidation: 'Intimidación deliberada, acecho o seguimiento.',
      harassingPhoto: 'Fotografía o grabación acosadora, incluyendo registro de actividad en línea con propósitos de acoso.',
      disruption: 'Interrupción sostenida de conversaciones, charlas u otros eventos.',
      advocacy: 'Defensa o fomento de cualquiera de los comportamientos anteriores.',
    },
    consequencesLabel: 'Consecuencias',
    consequencesTitle: 'Consecuencias del incumplimiento',
    consequences1: 'Se espera que las personas a quienes se les pida detener un comportamiento inaceptable lo hagan de inmediato. Si una persona incurre en comportamiento de acoso, los organizadores del evento pueden tomar cualquier acción que consideren apropiada, incluyendo advertir a la persona o expulsarla del evento sin reembolso.',
    consequences2: 'El equipo organizador se reserva el derecho de prohibir la asistencia a futuros eventos a personas que violen el código de conducta.',
    reportLabel: 'Reportar',
    reportTitle: 'Reportar un incidente',
    reportText: 'Si experimentas o presencias comportamiento inaceptable, repórtalo lo antes posible. Todas las denuncias se manejan con confidencialidad.',
    formNotice: 'Tu reporte será revisado por el equipo de respuesta del código de conducta. Puedes hacerlo de forma anónima si lo prefieres.',
    anonymous: 'Enviar reporte de forma anónima',
    name: 'Tu nombre (opcional)',
    email: 'Correo (opcional)',
    incident: 'Descripción del incidente',
    incidentPlaceholder: 'Describe lo que sucedió con el mayor detalle posible...',
    date: 'Fecha aproximada',
    location: 'Ubicación del incidente',
    locationPlaceholder: 'Ej: Sala B, lobby...',
    witnesses: 'Testigos (opcional)',
    witnessesPlaceholder: 'Nombres de personas que presenciaron el incidente',
    submit: 'Enviar reporte',
    submitted: 'Reporte enviado',
    submittedNote: 'Será revisado confidencialmente.',
    directTitle: 'Contacto directo del equipo',
    directText: 'También puedes contactar directamente al equipo de código de conducta:',
    directAvailability: 'Durante el evento, habrá personal identificado del equipo de código de conducta disponible en todo momento.',
  },
  en: {
    heroTitle: 'Code of conduct',
    heroSubtitle: 'Our commitment to a safe, respectful, and inclusive space for everyone participating in ABRELATAM / CONDATOS.',
    commitmentTitle: 'Our commitment',
    commitmentText: 'ABRELATAM / CONDATOS is committed to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, nationality, or technical experience.',
    expectedLabel: 'Expected',
    expectedTitle: 'Expected behavior',
    expected: {
      respect: { title: 'Mutual respect', desc: 'Treat everyone with respect and consideration, valuing diverse points of view and experiences.' },
      constructive: { title: 'Constructive communication', desc: 'Be kind in speech and action. Critique ideas, not people.' },
      inclusion: { title: 'Active inclusion', desc: 'Seek diverse perspectives and create spaces where all voices can be heard.' },
      empathy: { title: 'Empathy', desc: 'Be aware of the impact our words and actions have on others.' },
      collaboration: { title: 'Collaboration', desc: 'Work together constructively, recognizing that everyone has something valuable to contribute.' },
    },
    unacceptableLabel: 'Unacceptable',
    unacceptableTitle: 'Unacceptable behavior',
    unacceptableIntro: 'No form of harassment will be tolerated. Harassment includes, but is not limited to:',
    unacceptable: {
      offensive: 'Offensive comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, age, race, ethnicity, nationality, or religion.',
      unwantedComments: 'Unwanted comments about a person\'s lifestyle choices and practices.',
      physicalContact: 'Inappropriate physical contact or unwanted sexual attention.',
      intimidation: 'Deliberate intimidation, stalking, or following.',
      harassingPhoto: 'Harassing photography or recording, including online activity tracking for harassment purposes.',
      disruption: 'Sustained disruption of conversations, talks, or other events.',
      advocacy: 'Advocating for or encouraging any of the above behaviors.',
    },
    consequencesLabel: 'Consequences',
    consequencesTitle: 'Consequences of non-compliance',
    consequences1: 'People asked to stop unacceptable behavior are expected to comply immediately. If a person engages in harassing behavior, event organizers may take any action they deem appropriate, including warning the person or expelling them from the event without a refund.',
    consequences2: 'The organizing team reserves the right to prohibit attendance at future events for people who violate the code of conduct.',
    reportLabel: 'Report',
    reportTitle: 'Report an incident',
    reportText: 'If you experience or witness unacceptable behavior, report it as soon as possible. All reports are handled confidentially.',
    formNotice: 'Your report will be reviewed by the code of conduct response team. You may submit it anonymously if you prefer.',
    anonymous: 'Submit report anonymously',
    name: 'Your name (optional)',
    email: 'Email (optional)',
    incident: 'Incident description',
    incidentPlaceholder: 'Describe what happened in as much detail as possible...',
    date: 'Approximate date',
    location: 'Incident location',
    locationPlaceholder: 'Example: Room B, lobby...',
    witnesses: 'Witnesses (optional)',
    witnessesPlaceholder: 'Names of people who witnessed the incident',
    submit: 'Submit report',
    submitted: 'Report sent',
    submittedNote: 'It will be reviewed confidentially.',
    directTitle: 'Direct team contact',
    directText: 'You can also contact the code of conduct team directly:',
    directAvailability: 'During the event, identified code of conduct team members will be available at all times.',
  },
  pt: {
    heroTitle: 'Codigo de conduta',
    heroSubtitle: 'Nosso compromisso com um espaco seguro, respeitoso e inclusivo para todas as pessoas que participam do ABRELATAM / CONDATOS.',
    commitmentTitle: 'Nosso compromisso',
    commitmentText: 'ABRELATAM / CONDATOS se compromete a oferecer uma experiencia de conferencia livre de assedio para todas as pessoas, independentemente de genero, identidade e expressao de genero, idade, orientacao sexual, deficiencia, aparencia fisica, tamanho corporal, raca, etnia, religiao, nacionalidade ou experiencia tecnica.',
    expectedLabel: 'Esperado',
    expectedTitle: 'Comportamento esperado',
    expected: {
      respect: { title: 'Respeito mutuo', desc: 'Tratar todas as pessoas com respeito e consideracao, valorizando diversos pontos de vista e experiencias.' },
      constructive: { title: 'Comunicacao construtiva', desc: 'Ser gentil na fala e nas acoes. Criticar ideias, nao pessoas.' },
      inclusion: { title: 'Inclusao ativa', desc: 'Buscar perspectivas diversas e criar espacos onde todas as vozes possam ser ouvidas.' },
      empathy: { title: 'Empatia', desc: 'Ter consciencia do impacto que nossas palavras e acoes tem nas outras pessoas.' },
      collaboration: { title: 'Colaboracao', desc: 'Trabalhar em conjunto de forma construtiva, reconhecendo que todas as pessoas tem algo valioso a contribuir.' },
    },
    unacceptableLabel: 'Inaceitavel',
    unacceptableTitle: 'Comportamento inaceitavel',
    unacceptableIntro: 'Nao sera tolerada nenhuma forma de assedio. O assedio inclui, mas nao se limita a:',
    unacceptable: {
      offensive: 'Comentarios ofensivos relacionados a genero, identidade e expressao de genero, orientacao sexual, deficiencia, aparencia fisica, idade, raca, etnia, nacionalidade ou religiao.',
      unwantedComments: 'Comentarios indesejados sobre escolhas e praticas de estilo de vida de uma pessoa.',
      physicalContact: 'Contato fisico inapropriado ou atencao sexual indesejada.',
      intimidation: 'Intimidacao deliberada, perseguicao ou acompanhamento.',
      harassingPhoto: 'Fotografia ou gravacao assediadora, incluindo registro de atividade online com fins de assedio.',
      disruption: 'Interrupcao sustentada de conversas, palestras ou outros eventos.',
      advocacy: 'Defesa ou incentivo de qualquer um dos comportamentos anteriores.',
    },
    consequencesLabel: 'Consequencias',
    consequencesTitle: 'Consequencias do descumprimento',
    consequences1: 'Espera-se que pessoas solicitadas a interromper um comportamento inaceitavel o facam imediatamente. Se uma pessoa praticar assedio, a organizacao podera tomar qualquer medida apropriada, incluindo advertencia ou expulsao do evento sem reembolso.',
    consequences2: 'A equipe organizadora reserva-se o direito de proibir a participacao em eventos futuros de pessoas que violem o codigo de conduta.',
    reportLabel: 'Reportar',
    reportTitle: 'Reportar um incidente',
    reportText: 'Se voce experimentar ou presenciar comportamento inaceitavel, reporte o quanto antes. Todas as denuncias sao tratadas com confidencialidade.',
    formNotice: 'Seu reporte sera revisado pela equipe de resposta do codigo de conduta. Voce pode faze-lo anonimamente, se preferir.',
    anonymous: 'Enviar reporte de forma anonima',
    name: 'Seu nome (opcional)',
    email: 'Email (opcional)',
    incident: 'Descricao do incidente',
    incidentPlaceholder: 'Descreva o que aconteceu com o maximo de detalhes possivel...',
    date: 'Data aproximada',
    location: 'Local do incidente',
    locationPlaceholder: 'Ex: Sala B, lobby...',
    witnesses: 'Testemunhas (opcional)',
    witnessesPlaceholder: 'Nomes das pessoas que presenciaram o incidente',
    submit: 'Enviar reporte',
    submitted: 'Reporte enviado',
    submittedNote: 'Sera revisado confidencialmente.',
    directTitle: 'Contato direto da equipe',
    directText: 'Voce tambem pode contatar diretamente a equipe do codigo de conduta:',
    directAvailability: 'Durante o evento, havera pessoas identificadas da equipe de codigo de conduta disponiveis o tempo todo.',
  },
};

export default function CodigoConducta() {
  const { language } = useLanguage();
  const text = copy[language];
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
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-50.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-[#456bdd]/10 dark:bg-primary/80 border border-[#456bdd]/20 dark:border-[#456bdd]/30 rounded-2xl p-7 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#456bdd]/15 dark:bg-[#456bdd]/20 flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="text-[#456bdd]" />
              </div>
              <div>
                <h3 className="font-bold text-primary dark:text-white mb-2">{text.commitmentTitle}</h3>
                <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed">{text.commitmentText}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.expectedLabel}</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center justify-center gap-2">
                  <CheckCircle size={22} className="text-[#456bdd]" />
                  {text.expectedTitle}
                </h2>
              </div>
              <div className="space-y-3">
                {expectedKeys.map((key) => (
                  <div key={key} className="bg-white dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-[#456bdd]/30 card-glow">
                    <h4 className="font-semibold text-primary dark:text-white text-sm mb-1">{text.expected[key].title}</h4>
                    <p className="text-xs text-primary/70 dark:text-[#456bdd]/80 leading-relaxed">{text.expected[key].desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.unacceptableLabel}</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center justify-center gap-2">
                  <XCircle size={22} className="text-[#456bdd]" />
                  {text.unacceptableTitle}
                </h2>
              </div>
              <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-[#456bdd]/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-[#456bdd]" />
                <div className="p-6">
                  <p className="text-sm text-primary/70 dark:text-[#456bdd]/80 mb-5 leading-relaxed">{text.unacceptableIntro}</p>
                  <ul className="space-y-3">
                    {unacceptableKeys.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#456bdd] flex-shrink-0 mt-2" />
                        <p className="text-sm text-primary/70 dark:text-[#456bdd]/80 leading-relaxed">{text.unacceptable[key]}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.consequencesLabel}</span>
              <h2 className="text-2xl font-bold text-primary dark:text-white">{text.consequencesTitle}</h2>
            </div>
            <div className="bg-primary/5 dark:bg-primary/80 rounded-2xl p-7 border border-primary/10 dark:border-[#456bdd]/30">
              <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed mb-4">{text.consequences1}</p>
              <p className="text-sm text-primary/80 dark:text-white/80 leading-relaxed">{text.consequences2}</p>
            </div>
          </div>

          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.reportLabel}</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white flex items-center justify-center gap-3 mb-3">
              <AlertTriangle size={26} className="text-[#456bdd]" />
              {text.reportTitle}
            </h2>
            <p className="text-[#456bdd] dark:text-[#456bdd]/80 text-sm max-w-xl mx-auto">{text.reportText}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-[#456bdd]/30 overflow-hidden card-glow">
              <div className="h-1 bg-gradient-to-r from-primary to-[#456bdd]" />
              <div className="p-8">
                <div className="bg-[#456bdd]/10 dark:bg-primary/80 border border-[#456bdd]/20 dark:border-[#456bdd]/30 rounded-xl p-4 mb-6 flex gap-3">
                  <MessageCircle size={16} className="text-[#456bdd] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-primary/80 dark:text-white/80 leading-relaxed">{text.formNotice}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reportData.anonymous}
                      onChange={(e) => setReportData({ ...reportData, anonymous: e.target.checked })}
                      className="w-4 h-4 text-[#456bdd] rounded focus:ring-[#456bdd] border-primary/30 dark:border-[#456bdd]/40"
                    />
                    <span className="text-sm text-primary/80 dark:text-white/80 font-medium">{text.anonymous}</span>
                  </label>

                  {!reportData.anonymous && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">{text.name}</label>
                        <input
                          type="text"
                          value={reportData.name}
                          onChange={(e) => setReportData({ ...reportData, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">{text.email}</label>
                        <input
                          type="email"
                          value={reportData.email}
                          onChange={(e) => setReportData({ ...reportData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      {text.incident} <span className="text-[#456bdd]">*</span>
                    </label>
                    <textarea
                      value={reportData.incident}
                      onChange={(e) => setReportData({ ...reportData, incident: e.target.value })}
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all resize-none"
                      placeholder={text.incidentPlaceholder}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">{text.date}</label>
                      <input
                        type="date"
                        value={reportData.date}
                        onChange={(e) => setReportData({ ...reportData, date: e.target.value })}
                        className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">{text.location}</label>
                      <input
                        type="text"
                        value={reportData.location}
                        onChange={(e) => setReportData({ ...reportData, location: e.target.value })}
                        className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                        placeholder={text.locationPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">{text.witnesses}</label>
                    <input
                      type="text"
                      value={reportData.witnesses}
                      onChange={(e) => setReportData({ ...reportData, witnesses: e.target.value })}
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder={text.witnessesPlaceholder}
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="inline-flex items-center gap-2 bg-[#456bdd] hover:bg-[#092d7e] disabled:bg-[#456bdd]/70 text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 disabled:translate-y-0"
                    >
                      {submitted ? <CheckCircle size={16} /> : <Send size={15} />}
                      {submitted ? text.submitted : text.submit}
                    </button>
                    {submitted && (
                      <p className="text-xs text-[#456bdd] font-medium">{text.submittedNote}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-5 bg-primary/5 dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-[#456bdd]/30">
              <h4 className="font-semibold text-primary dark:text-white text-sm mb-2">{text.directTitle}</h4>
              <p className="text-xs text-primary/70 dark:text-[#456bdd]/80 leading-relaxed mb-2">{text.directText}</p>
              <div className="text-xs text-primary/70 dark:text-[#456bdd]/80 space-y-1">
                <p>Email: <a href="mailto:abrelatam@idatosabiertos.org" className="text-[#456bdd] hover:underline font-medium">abrelatam@idatosabiertos.org</a></p>
                <p>{text.directAvailability}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
