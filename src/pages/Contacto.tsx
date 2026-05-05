import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const faqKeys = ['whenWhere', 'cost', 'scholarships', 'propose', 'languages', 'visa', 'included', 'sideEvent', 'firstTime', 'sponsor', 'accessibility', 'virtual'] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Contacto y FAQ',
    heroSubtitle: 'Tienes preguntas? Aqui encontraras respuestas o podras contactarnos directamente.',
    faqTitle: 'Preguntas frecuentes',
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
          <div className="max-w-3xl mx-auto space-y-2">
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
        </div>
      </section>
    </>
  );
}
