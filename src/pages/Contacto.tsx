import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const faqKeys = ['what', 'dates', 'audience', 'registration', 'free', 'propose'] as const;

const copy: Record<Language, { heroTitle: string; heroSubtitle: string; faqTitle: string; faqs: Record<string, { q: string; a: string }> }> = {
  es: {
    heroTitle: 'Contacto y FAQ',
    heroSubtitle: 'Tienes preguntas? Aqui encontraras respuestas o podras contactarnos directamente.',
    faqTitle: 'Preguntas frecuentes',
    faqs: {
      what: {
        q: '¿Qué es ABRELATAM / CONDATOS?',
        a: 'ABRELATAM es una desconferencia comunitaria donde la agenda se construye colectivamente. CONDATOS es la conferencia regional con paneles y talleres seleccionados por un comité a partir de un llamado público a propuestas. Juntos conforman el encuentro más importante de la región sobre datos abiertos y tecnología cívica.',
      },
      dates: {
        q: 'Fechas y lugar',
        a: 'El evento se realizará del 7 al 9 de octubre de 2026 en Ciudad de Guatemala, Guatemala. La sede es el Centro Cultural Miguel Ángel Asturias, en el corazón de la Zona 1.',
      },
      audience: {
        q: '¿A quién va dirigido?',
        a: 'El evento es para personas de la sociedad civil, gobierno, academia, sector privado y comunidad tecnológica comprometidas con la apertura de datos, la transparencia y la innovación pública en América.',
      },
      registration: {
        q: '¿Necesito registro previo para asistir?',
        a: 'Si, Abrelatam-ConDatos tiene un formulario de registro que debes completar para asegurar tu participación.',
      },
      free: {
        q: '¿El evento es gratuito?',
        a: 'Si, el evento es gratuito. Todas las personas interesadas en temas de gobierno abierto y datos abiertos en las Américas están invitadas a participar en el evento. Esto incluye a personas que trabajan en gobierno, sociedad civil, academia, sector privado, organizaciones multilaterales, donantes y más.',
      },
      propose: {
        q: '¿Puedo proponer una sesión?',
        a: 'La agenda de Abrelatam-ConDatos se construye de forma colaborativa con la comunidad. Próximamente se abrirá el llamado a propuestas para la agenda.',
      },
    },
  },
  en: {
    heroTitle: 'Contact and FAQ',
    heroSubtitle: 'Have questions? Here you will find answers or ways to contact us directly.',
    faqTitle: 'Frequently asked questions',
    faqs: {
      what: {
        q: 'What is ABRELATAM / CONDATOS?',
        a: 'ABRELATAM is a community unconference where the agenda is built collectively. CONDATOS is the regional conference with panels and workshops selected by a committee through a public call for proposals. Together they form the most important gathering in the region on open data and civic technology.',
      },
      dates: {
        q: 'Dates and location',
        a: 'The event will take place October 7–9, 2026 in Guatemala City, Guatemala. The venue is the Centro Cultural Miguel Ángel Asturias, in the heart of Zona 1.',
      },
      audience: {
        q: 'Who is it for?',
        a: 'The event is for people from civil society, government, academia, the private sector, and the tech community committed to open data, transparency, and public innovation in the Americas.',
      },
      registration: {
        q: 'Do I need to register in advance?',
        a: 'Yes, Abrelatam-ConDatos has a registration form that you must complete to secure your participation.',
      },
      free: {
        q: 'Is the event free?',
        a: 'Yes, the event is free. All people interested in open government and open data in the Americas are invited to participate. This includes people working in government, civil society, academia, the private sector, multilateral organizations, donors, and more.',
      },
      propose: {
        q: 'Can I propose a session?',
        a: 'The Abrelatam-ConDatos agenda is built collaboratively with the community. A call for proposals will open soon.',
      },
    },
  },
  pt: {
    heroTitle: 'Contato e FAQ',
    heroSubtitle: 'Tem perguntas? Aqui voce encontrara respostas ou podera entrar em contato diretamente.',
    faqTitle: 'Perguntas frequentes',
    faqs: {
      what: {
        q: 'O que é ABRELATAM / CONDATOS?',
        a: 'ABRELATAM é uma desconferência comunitária onde a agenda é construída coletivamente. CONDATOS é a conferência regional com painéis e oficinas selecionados por um comitê a partir de uma chamada pública de propostas. Juntos formam o encontro mais importante da região sobre dados abertos e tecnologia cívica.',
      },
      dates: {
        q: 'Datas e local',
        a: 'O evento acontecerá de 7 a 9 de outubro de 2026 na Cidade da Guatemala, Guatemala. A sede é o Centro Cultural Miguel Ángel Asturias, no coração da Zona 1.',
      },
      audience: {
        q: 'Para quem é o evento?',
        a: 'O evento é para pessoas da sociedade civil, governo, academia, setor privado e comunidade tecnológica comprometidas com a abertura de dados, transparência e inovação pública nas Américas.',
      },
      registration: {
        q: 'Preciso me registrar com antecedência?',
        a: 'Sim, o Abrelatam-ConDatos tem um formulário de inscrição que você deve preencher para garantir sua participação.',
      },
      free: {
        q: 'O evento é gratuito?',
        a: 'Sim, o evento é gratuito. Todas as pessoas interessadas em governo aberto e dados abertos nas Américas estão convidadas a participar. Isso inclui pessoas que trabalham em governo, sociedade civil, academia, setor privado, organizações multilaterais, doadores e mais.',
      },
      propose: {
        q: 'Posso propor uma sessão?',
        a: 'A agenda do Abrelatam-ConDatos é construída de forma colaborativa com a comunidade. Em breve será aberta a chamada de propostas para a agenda.',
      },
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
