import { Mail, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const faqKeys = ['whenWhere', 'cost', 'scholarships', 'propose', 'languages', 'visa', 'included', 'sideEvent', 'firstTime', 'sponsor', 'accessibility', 'virtual'] as const;
const contactKeys = ['general', 'press', 'sponsors', 'conduct'] as const;
const subjectKeys = ['registration', 'scholarships', 'calls', 'sponsorship', 'press', 'travel', 'accessibility', 'other'] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Contacto y FAQ',
    heroSubtitle: 'Tienes preguntas? Aqui encontraras respuestas o podras contactarnos directamente.',
    faqTitle: 'Preguntas frecuentes',
    formLabel: 'Formulario',
    formTitle: 'No encontraste tu respuesta?',
    formText: 'Envianos un mensaje y te responderemos pronto.',
    fields: {
      name: 'Nombre',
      email: 'Correo',
      subject: 'Asunto',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      subjectPlaceholder: 'Selecciona un tema',
      messagePlaceholder: 'Escribe tu mensaje aqui...',
      submit: 'Enviar mensaje',
      submitted: 'Mensaje enviado',
      submittedNote: 'Te responderemos pronto.',
    },
    subjects: {
      registration: 'Registro e inscripcion',
      scholarships: 'Becas',
      calls: 'Convocatorias y propuestas',
      sponsorship: 'Patrocinio y alianzas',
      press: 'Prensa y medios',
      travel: 'Viaje y alojamiento',
      accessibility: 'Accesibilidad',
      other: 'Otro',
    },
    teamsLabel: 'Equipos',
    teamsTitle: 'Contactos directos',
    teamsText: 'Escribenos directamente al equipo que corresponde.',
    contacts: {
      general: { title: 'Informacion general', desc: 'Para consultas generales sobre el evento', email: 'info@abrelatam.org' },
      press: { title: 'Prensa y medios', desc: 'Para consultas de prensa y acreditacion', email: 'prensa@abrelatam.org' },
      sponsors: { title: 'Patrocinios y alianzas', desc: 'Para oportunidades de patrocinio y colaboracion', email: 'alianzas@abrelatam.org' },
      conduct: { title: 'Codigo de conducta', desc: 'Para reportar incidentes o consultas sobre el codigo', email: 'conducta@abrelatam.org' },
    },
    whatsappTitle: 'Prefieres hablar por WhatsApp?',
    whatsappText: 'Nuestro equipo esta disponible de lunes a viernes, 9am-6pm (hora Guatemala).',
    faqs: {
      whenWhere: { q: 'Cuando y donde sera el evento?', a: 'ABRELATAM / CONDATOS 2026 se realizara del 7 al 9 de octubre de 2026 en Ciudad de Guatemala, Guatemala.' },
      cost: { q: 'Cuanto cuesta la inscripcion?', a: 'Los precios de inscripcion se anunciaran cuando se abra el registro oficial. Habra categorias diferenciadas y opciones de apoyo.' },
      scholarships: { q: 'Habra becas disponibles?', a: 'Si, tendremos informacion sobre apoyos y becas cuando se abran las convocatorias correspondientes.' },
      propose: { q: 'Puedo proponer una ponencia o taller?', a: 'Si, las convocatorias para propuestas se anunciaran en el sitio y canales oficiales.' },
      languages: { q: 'En que idiomas sera el evento?', a: 'El evento se realiza principalmente en espanol, con sesiones y recursos en ingles y portugues cuando corresponda.' },
      visa: { q: 'Necesito visa para viajar a Guatemala?', a: 'Depende de tu pais de origen. Revisa los requisitos migratorios oficiales antes de viajar.' },
      included: { q: 'Que incluye el registro al evento?', a: 'El registro incluye acceso a las actividades del programa y materiales del evento. Los detalles finales se publicaran con el registro oficial.' },
      sideEvent: { q: 'Como puedo organizar un Side Event?', a: 'Podras proponer un Side Event cuando se abran las convocatorias. El equipo organizador compartira lineamientos y fechas.' },
      firstTime: { q: 'Habra actividades para quienes asisten por primera vez?', a: 'Si, estamos preparando espacios de orientacion y networking para nuevas personas participantes.' },
      sponsor: { q: 'Como puedo ser patrocinador o aliado?', a: 'Contactanos a alianzas@abrelatam.org para recibir informacion sobre oportunidades de patrocinio.' },
      accessibility: { q: 'El evento es accesible?', a: 'Trabajamos para que el evento sea accesible e inclusivo. Si tienes requerimientos especificos, escribenos.' },
      virtual: { q: 'Puedo asistir virtualmente?', a: 'Estamos evaluando opciones de transmision para algunas sesiones. La experiencia principal sera presencial.' },
    },
  },
  en: {
    heroTitle: 'Contact and FAQ',
    heroSubtitle: 'Have questions? Here you will find answers or ways to contact us directly.',
    faqTitle: 'Frequently asked questions',
    formLabel: 'Form',
    formTitle: 'Did not find your answer?',
    formText: 'Send us a message and we will reply soon.',
    fields: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      subjectPlaceholder: 'Select a topic',
      messagePlaceholder: 'Write your message here...',
      submit: 'Send message',
      submitted: 'Message sent',
      submittedNote: 'We will reply soon.',
    },
    subjects: {
      registration: 'Registration',
      scholarships: 'Scholarships',
      calls: 'Calls and proposals',
      sponsorship: 'Sponsorship and partnerships',
      press: 'Press and media',
      travel: 'Travel and accommodation',
      accessibility: 'Accessibility',
      other: 'Other',
    },
    teamsLabel: 'Teams',
    teamsTitle: 'Direct contacts',
    teamsText: 'Write directly to the appropriate team.',
    contacts: {
      general: { title: 'General information', desc: 'For general event questions', email: 'info@abrelatam.org' },
      press: { title: 'Press and media', desc: 'For press and accreditation inquiries', email: 'prensa@abrelatam.org' },
      sponsors: { title: 'Sponsorships and partnerships', desc: 'For sponsorship and collaboration opportunities', email: 'alianzas@abrelatam.org' },
      conduct: { title: 'Code of conduct', desc: 'To report incidents or ask about the code', email: 'conducta@abrelatam.org' },
    },
    whatsappTitle: 'Prefer to talk on WhatsApp?',
    whatsappText: 'Our team is available Monday to Friday, 9am-6pm (Guatemala time).',
    faqs: {
      whenWhere: { q: 'When and where is the event?', a: 'ABRELATAM / CONDATOS 2026 will take place October 7-9, 2026 in Guatemala City, Guatemala.' },
      cost: { q: 'How much does registration cost?', a: 'Registration prices will be announced when official registration opens. There will be different categories and support options.' },
      scholarships: { q: 'Will scholarships be available?', a: 'Yes, information about support and scholarships will be shared when the relevant calls open.' },
      propose: { q: 'Can I propose a talk or workshop?', a: 'Yes, calls for proposals will be announced on the website and official channels.' },
      languages: { q: 'What languages will the event use?', a: 'The event is mainly in Spanish, with sessions and resources in English and Portuguese when applicable.' },
      visa: { q: 'Do I need a visa to travel to Guatemala?', a: 'It depends on your country of origin. Check official migration requirements before traveling.' },
      included: { q: 'What does event registration include?', a: 'Registration includes access to program activities and event materials. Final details will be published with official registration.' },
      sideEvent: { q: 'How can I organize a Side Event?', a: 'You will be able to propose a Side Event when calls open. The organizing team will share guidelines and dates.' },
      firstTime: { q: 'Will there be activities for first-time attendees?', a: 'Yes, we are preparing orientation and networking spaces for new participants.' },
      sponsor: { q: 'How can I become a sponsor or partner?', a: 'Contact alianzas@abrelatam.org to receive information about sponsorship opportunities.' },
      accessibility: { q: 'Is the event accessible?', a: 'We are working to make the event accessible and inclusive. If you have specific requirements, write to us.' },
      virtual: { q: 'Can I attend virtually?', a: 'We are evaluating streaming options for some sessions. The main experience will be in person.' },
    },
  },
  pt: {
    heroTitle: 'Contato e FAQ',
    heroSubtitle: 'Tem perguntas? Aqui voce encontrara respostas ou podera entrar em contato diretamente.',
    faqTitle: 'Perguntas frequentes',
    formLabel: 'Formulario',
    formTitle: 'Nao encontrou sua resposta?',
    formText: 'Envie uma mensagem e responderemos em breve.',
    fields: {
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'voce@email.com',
      subjectPlaceholder: 'Selecione um tema',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
      submit: 'Enviar mensagem',
      submitted: 'Mensagem enviada',
      submittedNote: 'Responderemos em breve.',
    },
    subjects: {
      registration: 'Registro e inscricao',
      scholarships: 'Bolsas',
      calls: 'Chamadas e propostas',
      sponsorship: 'Patrocinio e parcerias',
      press: 'Imprensa e medios',
      travel: 'Viagem e hospedagem',
      accessibility: 'Acessibilidade',
      other: 'Outro',
    },
    teamsLabel: 'Equipes',
    teamsTitle: 'Contatos diretos',
    teamsText: 'Escreva diretamente para a equipe correspondente.',
    contacts: {
      general: { title: 'Informacoes gerais', desc: 'Para consultas gerais sobre o evento', email: 'info@abrelatam.org' },
      press: { title: 'Imprensa e meios', desc: 'Para consultas de imprensa e credenciamento', email: 'prensa@abrelatam.org' },
      sponsors: { title: 'Patrocinios e parcerias', desc: 'Para oportunidades de patrocinio e colaboracao', email: 'alianzas@abrelatam.org' },
      conduct: { title: 'Codigo de conduta', desc: 'Para reportar incidentes ou consultas sobre o codigo', email: 'conducta@abrelatam.org' },
    },
    whatsappTitle: 'Prefere falar por WhatsApp?',
    whatsappText: 'Nossa equipe esta disponivel de segunda a sexta, 9h-18h (hora da Guatemala).',
    faqs: {
      whenWhere: { q: 'Quando e onde sera o evento?', a: 'ABRELATAM / CONDATOS 2026 acontecera de 7 a 9 de outubro de 2026 na Cidade da Guatemala, Guatemala.' },
      cost: { q: 'Quanto custa a inscricao?', a: 'Os valores de inscricao serao anunciados quando o registro oficial abrir. Havera categorias diferenciadas e opcoes de apoio.' },
      scholarships: { q: 'Havera bolsas disponiveis?', a: 'Sim, informacoes sobre apoios e bolsas serao compartilhadas quando as chamadas correspondentes abrirem.' },
      propose: { q: 'Posso propor uma palestra ou oficina?', a: 'Sim, as chamadas para propostas serao anunciadas no site e canais oficiais.' },
      languages: { q: 'Em quais idiomas sera o evento?', a: 'O evento sera principalmente em espanhol, com sessoes e recursos em ingles e portugues quando aplicavel.' },
      visa: { q: 'Preciso de visto para viajar a Guatemala?', a: 'Depende do seu pais de origem. Verifique os requisitos migratorios oficiais antes de viajar.' },
      included: { q: 'O que o registro inclui?', a: 'O registro inclui acesso as atividades do programa e materiais do evento. Os detalhes finais serao publicados com o registro oficial.' },
      sideEvent: { q: 'Como posso organizar um Side Event?', a: 'Voce podera propor um Side Event quando as chamadas abrirem. A equipe organizadora compartilhara diretrizes e datas.' },
      firstTime: { q: 'Havera atividades para quem participa pela primeira vez?', a: 'Sim, estamos preparando espacos de orientacao e networking para novas pessoas participantes.' },
      sponsor: { q: 'Como posso ser patrocinador ou parceiro?', a: 'Contate alianzas@abrelatam.org para receber informacoes sobre oportunidades de patrocinio.' },
      accessibility: { q: 'O evento e acessivel?', a: 'Trabalhamos para que o evento seja acessivel e inclusivo. Se voce tiver requisitos especificos, escreva para nos.' },
      virtual: { q: 'Posso participar virtualmente?', a: 'Estamos avaliando opcoes de transmissao para algumas sessoes. A experiencia principal sera presencial.' },
    },
  },
};

export default function Contacto() {
  const { language } = useLanguage();
  const text = copy[language];
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
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-53.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white flex items-center justify-center gap-3">
              <HelpCircle size={28} className="text-[#456bdd]" />
              {text.faqTitle}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-2 mb-24">
            {faqKeys.map((key, index) => (
              <div key={key} className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-[#456bdd]/30 overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                >
                  <h3 className="font-semibold text-primary dark:text-white text-sm leading-relaxed flex-1">
                    {text.faqs[key].q}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="text-[#456bdd] flex-shrink-0 mt-0.5" size={18} />
                  ) : (
                    <ChevronDown className="text-[#456bdd]/80 flex-shrink-0 mt-0.5" size={18} />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 border-t border-primary/10 dark:border-[#456bdd]/30 pt-4">
                    <p className="text-sm text-primary/70 dark:text-[#456bdd]/80 leading-relaxed">
                      {text.faqs[key].a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
            <div>
              <div className="mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.formLabel}</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white">{text.formTitle}</h2>
                <p className="text-[#456bdd] dark:text-[#456bdd]/80 text-sm mt-2">{text.formText}</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      {text.fields.name} <span className="text-[#456bdd]">*</span>
                    </label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder={text.fields.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                      {text.fields.email} <span className="text-[#456bdd]">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                      placeholder={text.fields.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                    {text.fields.subject} <span className="text-[#456bdd]">*</span>
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all"
                  >
                    <option value="">{text.fields.subjectPlaceholder}</option>
                    {subjectKeys.map((key) => (
                      <option key={key} value={key}>{text.subjects[key]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 dark:text-white/80 mb-1.5">
                    {text.fields.message} <span className="text-[#456bdd]">*</span>
                  </label>
                  <textarea
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-primary/20 dark:border-[#456bdd]/30 rounded-xl focus:ring-2 focus:ring-[#456bdd] focus:border-transparent bg-white dark:bg-primary/80 text-primary dark:text-white text-sm outline-none transition-all resize-none"
                    placeholder={text.fields.messagePlaceholder}
                  />
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="inline-flex items-center gap-2 bg-[#456bdd] hover:bg-[#092d7e] disabled:bg-[#456bdd]/70 text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 disabled:translate-y-0"
                  >
                    {submitted ? <CheckCircle size={16} /> : <Send size={15} />}
                    {submitted ? text.fields.submitted : text.fields.submit}
                  </button>
                  {submitted && (
                    <p className="text-xs text-[#456bdd] font-medium">
                      {text.fields.submittedNote}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div>
              <div className="mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#456bdd] mb-3">{text.teamsLabel}</span>
                <h2 className="text-2xl font-bold text-primary dark:text-white">{text.teamsTitle}</h2>
                <p className="text-[#456bdd] dark:text-[#456bdd]/80 text-sm mt-2">{text.teamsText}</p>
              </div>
              <div className="space-y-3">
                {contactKeys.map((key) => {
                  const contact = text.contacts[key];
                  return (
                    <a
                      key={key}
                      href={`mailto:${contact.email}`}
                      className="group block bg-white dark:bg-primary/80 rounded-2xl p-5 border border-primary/10 dark:border-[#456bdd]/30 card-glow"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-primary dark:text-white text-sm mb-0.5">{contact.title}</h3>
                          <p className="text-xs text-[#456bdd] dark:text-[#456bdd]/80 mb-2">{contact.desc}</p>
                          <span className="text-xs font-medium text-[#456bdd]">{contact.email}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#456bdd]/10 dark:bg-primary/80 flex items-center justify-center flex-shrink-0 group-hover:bg-[#456bdd]/15 dark:group-hover:bg-[#456bdd]/20 transition-colors">
                          <Mail size={14} className="text-[#456bdd]" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <section className="bg-white px-4 py-16 md:py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-5xl rounded-lg bg-[#092d7e] px-6 py-12 text-center dark:bg-[#092d7e]">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                {text.whatsappTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-sm leading-snug text-white/80">
                {text.whatsappText}
              </p>
              <a
                href="https://wa.me/50212345678"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-60 rounded-md bg-white px-8 py-3.5 text-sm font-medium text-[#092d7e] transition-colors hover:bg-[#456bdd] hover:text-white"
              >
                +502 1234-5678
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
