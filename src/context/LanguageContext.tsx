import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['es', 'en', 'pt'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

const translations = {
  es: {
    slider: {
      slide1: {
        title: 'Guatemala 2026: abrir datos, abrir caminos',
        subtitle: 'ABRELATAM / CONDATOS llega a Ciudad de Guatemala la primera semana de noviembre de 2026. Tres días para encontrarnos, compartir aprendizajes y fortalecer la comunidad regional de datos abiertos y tecnología cívica.'
      },
      slide2: {
        title: 'Datos Abiertos: Transformando Latinoamérica',
        subtitle: 'Únete a líderes, activistas y tecnólogos de toda la región en la conversación más importante sobre transparencia, participación ciudadana y gobierno abierto.'
      },
      slide3: {
        title: 'Innovación: Construyendo el Futuro Juntos',
        subtitle: 'Talleres, paneles y espacios de colaboración para impulsar proyectos que generan impacto real en nuestras comunidades.'
      }
    },
    countdown: {
      title: 'Cuenta regresiva',
      subtitle: 'Faltan para ABRELATAM / CONDATOS 2026',
      days: 'días',
      hours: 'horas',
      minutes: 'minutos',
      seconds: 'segundos'
    },
    hero: {
      location: 'Guatemala, Ciudad de Guatemala',
      date: 'Noviembre de 2026',
      register: 'Registro',
      guide: 'Guia para principiantes',
      agenda: 'Agenda',
      days: 'Dias',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      agenda: 'Agenda',
      calls: 'Convocatorias',
      sideEvents: 'Side Events',
      travel: 'Datos útiles y logística',
      scholarships: 'Becas',
      community: 'Comunidad',
      codeOfConduct: 'Código de Conducta',
      press: 'Prensa',
      partners: 'Aliados',
      contact: 'Contacto',
      news: 'Noticias',
      more: 'Más'
    },
    home: {
      title: 'Guatemala 2026: abrir datos, abrir caminos',
      subtitle: 'ABRELATAM / CONDATOS llega a Ciudad de Guatemala la primera semana de noviembre de 2026. Tres días para encontrarnos, compartir aprendizajes y fortalecer la comunidad regional de datos abiertos y tecnología cívica.',
      venue: 'Centro Cultural Miguel Ángel Asturias',
      date: 'Primera semana de noviembre, 2026',
      register: 'Registrarme',
      getUpdates: 'Recibir novedades',
      learnMore: 'Conocer más',
      whatIsAbrelatam: '¿Qué es ABRELATAM?',
      abrelatamDesc: 'Es una desconferencia comunitaria donde la agenda se construye de manera colectiva. Las personas participantes proponen los temas, facilitan las conversaciones y comparten experiencias en un formato horizontal, abierto y colaborativo.',
      whatIsCondatos: '¿Qué es CONDATOS?',
      condatosDesc: 'Es una conferencia regional con paneles, talleres y sesiones seleccionadas por un Comité de Agenda. Reúne a tomadores de decisión, expertos y organizaciones para profundizar en políticas públicas, implementación y futuro de los datos abiertos.',
      inGuatemala: 'En Guatemala 2026',
      day1: 'Día 1:',
      days23: 'Días 2 y 3:',
      welcomeTitle: 'Guatemala les espera con el corazón abierto',
      welcome1: 'En una región donde abrir datos también es abrir caminos, Guatemala se prepara para recibir a una de las comunidades más vibrantes y comprometidas de América Latina.',
      welcome2: 'Desde un territorio marcado por la diversidad, la resistencia y la esperanza, les damos la bienvenida a un espacio para encontrarnos, escucharnos e imaginar juntas y juntos nuevas formas de transformar nuestras sociedades.',
      whyGuatemala: '¿Por qué Guatemala?',
      whySubtitle: 'Porque abrir datos es abrir futuro',
      why1: 'Porque aquí los datos abiertos se conectan con la defensa de derechos y la participación ciudadana',
      why2: 'Porque Centroamérica merece estar en el centro de la conversación regional',
      why3: 'Porque la innovación pública también nace desde los territorios y las comunidades',
      why4: 'Porque abrir datos es abrir futuro',
      thematicTitle: 'Líneas temáticas 2026',
      thematic1: 'Herramientas para la sostenibilidad de políticas de apertura de datos',
      thematic2: 'Fortalecimiento de la democracia e incidencia con datos abiertos',
      thematic3: 'Datos abiertos para el desarrollo sostenible y la gestión de recursos',
      thematic4: 'Sostenibilidad y desafíos para la agenda de datos abiertos',
      thematic5: 'Datos abiertos para una sociedad igualitaria e inclusiva',
      venueTitle: 'La sede',
      venueSubtitle: 'Un espacio cultural emblemático en el corazón de Guatemala',
      venueName: 'Centro Cultural Miguel Ángel Asturias',
      venueDesc: 'El Teatro Nacional de Guatemala es uno de los espacios culturales más importantes de Centroamérica. Ubicado en el corazón de la Ciudad de Guatemala, este centro cultural fue nombrado en honor al Premio Nobel de Literatura guatemalteco Miguel Ángel Asturias. Su arquitectura moderna y sus amplios espacios lo convierten en el lugar ideal para albergar un evento de la magnitud de ABRELATAM / CONDATOS.',
      venueFeature1: 'Auditorio principal con capacidad para más de 2,000 personas',
      venueFeature2: 'Múltiples salas y espacios para talleres y sesiones paralelas',
      venueFeature3: 'Ubicación central y fácil acceso en la Zona 1',
      venueFeature4: 'Infraestructura moderna y equipamiento técnico de primer nivel',
      venueCtaEyebrow: 'ABRELATAM Y CONDATOS SON SOLO EL PRINCIPIO',
      venueCtaTitle: '¡Registro general abierto!',
      venueCtaSubtitle: 'El programa de América Abierta incluirá una serie de actividades nacionales e internacionales.',
      venueCtaButton: 'Regístrate',
      venueCtaNote: 'No olvides hacer pre-registro para recibir todas las novedades.',
      whatToFind: 'Lo que vas a encontrar',
      panels: 'Paneles y conferencias regionales',
      workshops: 'Talleres prácticos y sesiones técnicas',
      unconference: 'Desconferencia ABRELATAM',
      lightning: 'Presentaciones relámpago',
      networking: 'Networking y comunidad',
      sideEvents: 'Side events y espacios paralelos',
      participate: 'Participa',
      attend: 'Asiste',
      attendDesc: 'Regístrate y sé parte de ABRELATAM / CONDATOS 2026.',
      propose: 'Propón una sesión',
      proposeDesc: 'Comparte tu experiencia, proyecto o investigación.',
      organizeSide: 'Organiza un side event',
      organizeSideDesc: 'Impulsa conversaciones paralelas y encuentros especializados.',
      proposeSession: 'Proponer sesión',
      proposeSideEvent: 'Proponer side event',
      viewCalls: 'Ver convocatorias',
      newsTitle: 'Novedades'
    },
    footer: {
      description: 'Guatemala te espera para la conferencia regional más importante sobre datos abiertos y transparencia.',
      quickLinks: 'Enlaces rápidos',
      aboutEvent: 'Sobre el evento',
      participate: 'Participa',
      newsletter: 'Newsletter',
      newsletterDesc: 'Recibe las últimas novedades del evento',
      subscribe: 'Suscribirse',
      subscribed: 'Suscrito'
    },
    gdpr: {
      title: 'Protección de Datos',
      message: 'Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar", consientes el uso de estas tecnologías de acuerdo con nuestra política de privacidad.',
      accept: 'Aceptar todas',
      decline: 'Rechazar',
      learnMore: 'Más información'
    },
    registerPopup: {
      title: 'ABRELATAM 2026',
      subtitle: 'Únete a la comunidad de datos abiertos más importante de Latinoamérica',
      date: 'Noviembre 2026',
      location: 'Ciudad de Guatemala',
      badge: '¡No te lo pierdas!'
    }
  },
  en: {
    slider: {
      slide1: {
        title: 'Guatemala 2026: opening data, opening paths',
        subtitle: 'ABRELATAM / CONDATOS comes to Guatemala City the first week of November 2026. Three days to meet, share learnings and strengthen the regional open data and civic tech community.'
      },
      slide2: {
        title: 'Open Data: Transforming Latin America',
        subtitle: 'Join leaders, activists and technologists from across the region in the most important conversation about transparency, citizen participation and open government.'
      },
      slide3: {
        title: 'Innovation: Building the Future Together',
        subtitle: 'Workshops, panels and collaboration spaces to drive projects that generate real impact in our communities.'
      }
    },
    countdown: {
      title: 'Countdown',
      subtitle: 'Time remaining until ABRELATAM / CONDATOS 2026',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds'
    },
    hero: {
      location: 'Guatemala, Guatemala City',
      date: 'November 2026',
      register: 'Registration',
      guide: 'Beginner guide',
      agenda: 'Agenda',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    nav: {
      home: 'Home',
      about: 'About',
      agenda: 'Agenda',
      calls: 'Calls',
      sideEvents: 'Side Events',
      travel: 'Useful Info & Logistics',
      scholarships: 'Scholarships',
      community: 'Community',
      codeOfConduct: 'Code of Conduct',
      press: 'Press',
      partners: 'Partners',
      contact: 'Contact',
      news: 'News',
      more: 'More'
    },
    home: {
      title: 'Guatemala 2026: opening data, opening paths',
      subtitle: 'ABRELATAM / CONDATOS comes to Guatemala City in the first week of November 2026. Three days to meet, share learnings, and strengthen the regional community of open data and civic technology.',
      venue: 'Miguel Ángel Asturias Cultural Center',
      date: 'First week of November, 2026',
      register: 'Register',
      getUpdates: 'Get updates',
      learnMore: 'Learn More',
      whatIsAbrelatam: 'What is ABRELATAM?',
      abrelatamDesc: 'It is a community unconference where the agenda is built collectively. Participants propose topics, facilitate conversations, and share experiences in a horizontal, open, and collaborative format.',
      whatIsCondatos: 'What is CONDATOS?',
      condatosDesc: 'It is a regional conference with panels, workshops, and sessions selected by an Agenda Committee. It brings together decision-makers, experts, and organizations to delve into public policies, implementation, and the future of open data.',
      inGuatemala: 'In Guatemala 2026',
      day1: 'Day 1:',
      days23: 'Days 2 & 3:',
      welcomeTitle: 'Guatemala welcomes you with open heart',
      welcome1: 'In a region where opening data also means opening paths, Guatemala prepares to receive one of the most vibrant and committed communities in Latin America.',
      welcome2: 'From a territory marked by diversity, resistance, and hope, we welcome you to a space to meet, listen to each other, and imagine together new ways to transform our societies.',
      whyGuatemala: 'Why Guatemala?',
      whySubtitle: 'Because opening data is opening the future',
      why1: 'Because here open data connects with the defense of rights and citizen participation',
      why2: 'Because Central America deserves to be at the center of the regional conversation',
      why3: 'Because public innovation also comes from territories and communities',
      why4: 'Because opening data is opening the future',
      thematicTitle: '2026 Thematic Tracks',
      thematic1: 'Tools for the sustainability of open data policies',
      thematic2: 'Strengthening democracy and advocacy with open data',
      thematic3: 'Open data for sustainable development and resource management',
      thematic4: 'Sustainability and challenges for the open data agenda',
      thematic5: 'Open data for an equal and inclusive society',
      venueTitle: 'The venue',
      venueSubtitle: 'An iconic cultural space in the heart of Guatemala',
      venueName: 'Miguel Ángel Asturias Cultural Center',
      venueDesc: 'The National Theater of Guatemala is one of the most important cultural spaces in Central America. Located in the heart of Guatemala City, this cultural center was named in honor of Guatemalan Nobel Prize in Literature winner Miguel Ángel Asturias. Its modern architecture and spacious facilities make it the ideal place to host an event of the magnitude of ABRELATAM / CONDATOS.',
      venueFeature1: 'Main auditorium with capacity for over 2,000 people',
      venueFeature2: 'Multiple rooms and spaces for workshops and parallel sessions',
      venueFeature3: 'Central location and easy access in Zone 1',
      venueFeature4: 'Modern infrastructure and first-class technical equipment',
      venueCtaEyebrow: 'ABRELATAM AND CONDATOS ARE ONLY THE BEGINNING',
      venueCtaTitle: 'General registration is open!',
      venueCtaSubtitle: 'The America Abierta program will include a series of national and international activities.',
      venueCtaButton: 'Register',
      venueCtaNote: 'Do not forget to pre-register to receive all updates.',
      whatToFind: 'What you will find',
      panels: 'Regional panels and conferences',
      workshops: 'Practical workshops and technical sessions',
      unconference: 'ABRELATAM unconference',
      lightning: 'Lightning presentations',
      networking: 'Networking and community',
      sideEvents: 'Side events and parallel spaces',
      participate: 'Participate',
      attend: 'Attend',
      attendDesc: 'Register and be part of ABRELATAM / CONDATOS 2026.',
      propose: 'Propose a session',
      proposeDesc: 'Share your experience, project, or research.',
      organizeSide: 'Organize a side event',
      organizeSideDesc: 'Drive parallel conversations and specialized meetings.',
      proposeSession: 'Propose session',
      proposeSideEvent: 'Propose side event',
      viewCalls: 'View calls',
      newsTitle: 'News'
    },
    footer: {
      description: 'Guatemala awaits you for the most important regional conference on open data and transparency.',
      quickLinks: 'Quick links',
      aboutEvent: 'About the event',
      participate: 'Participate',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get the latest news about the event',
      subscribe: 'Subscribe',
      subscribed: 'Subscribed'
    },
    gdpr: {
      title: 'Data Protection',
      message: 'We use cookies and similar technologies to improve your experience, analyze site traffic, and personalize content. By clicking "Accept," you consent to the use of these technologies in accordance with our privacy policy.',
      accept: 'Accept all',
      decline: 'Decline',
      learnMore: 'Learn more'
    },
    registerPopup: {
      title: 'ABRELATAM 2026',
      subtitle: 'Join the most important open data community in Latin America',
      date: 'November 2026',
      location: 'Guatemala City',
      badge: "Don't miss it!"
    }
  },
  pt: {
    slider: {
      slide1: {
        title: 'Guatemala 2026: abrir dados, abrir caminhos',
        subtitle: 'ABRELATAM / CONDATOS chega à Cidade da Guatemala na primeira semana de novembro de 2026. Três dias para nos encontrar, compartilhar aprendizados e fortalecer a comunidade regional de dados abertos e tecnologia cívica.'
      },
      slide2: {
        title: 'Dados Abertos: Transformando a América Latina',
        subtitle: 'Junte-se a líderes, ativistas e tecnólogos de toda a região na conversa mais importante sobre transparência, participação cidadã e governo aberto.'
      },
      slide3: {
        title: 'Inovação: Construindo o Futuro Juntos',
        subtitle: 'Oficinas, painéis e espaços de colaboração para impulsionar projetos que geram impacto real em nossas comunidades.'
      }
    },
    countdown: {
      title: 'Contagem regressiva',
      subtitle: 'Tempo restante até ABRELATAM / CONDATOS 2026',
      days: 'dias',
      hours: 'horas',
      minutes: 'minutos',
      seconds: 'segundos'
    },
    hero: {
      location: 'Guatemala, Cidade da Guatemala',
      date: 'Novembro de 2026',
      register: 'Inscricao',
      guide: 'Guia para iniciantes',
      agenda: 'Agenda',
      days: 'Dias',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      agenda: 'Agenda',
      calls: 'Chamadas',
      sideEvents: 'Side Events',
      travel: 'Dados úteis e logística',
      scholarships: 'Bolsas',
      community: 'Comunidade',
      codeOfConduct: 'Código de Conduta',
      press: 'Imprensa',
      partners: 'Parceiros',
      contact: 'Contato',
      news: 'Notícias',
      more: 'Mais'
    },
    home: {
      title: 'Guatemala 2026: abrir dados, abrir caminhos',
      subtitle: 'ABRELATAM / CONDATOS chega à Cidade da Guatemala na primeira semana de novembro de 2026. Três dias para nos encontrarmos, compartilhar aprendizados e fortalecer a comunidade regional de dados abertos e tecnologia cívica.',
      venue: 'Centro Cultural Miguel Ángel Asturias',
      date: 'Primeira semana de novembro, 2026',
      register: 'Inscrever-se',
      getUpdates: 'Receber novidades',
      learnMore: 'Saber mais',
      whatIsAbrelatam: 'O que é ABRELATAM?',
      abrelatamDesc: 'É uma desconferência comunitária onde a agenda é construída coletivamente. Os participantes propõem os temas, facilitam as conversas e compartilham experiências em um formato horizontal, aberto e colaborativo.',
      whatIsCondatos: 'O que é CONDATOS?',
      condatosDesc: 'É uma conferência regional com painéis, oficinas e sessões selecionadas por um Comitê de Agenda. Reúne tomadores de decisão, especialistas e organizações para aprofundar em políticas públicas, implementação e futuro dos dados abertos.',
      inGuatemala: 'Na Guatemala 2026',
      day1: 'Dia 1:',
      days23: 'Dias 2 e 3:',
      welcomeTitle: 'Guatemala espera você de coração aberto',
      welcome1: 'Em uma região onde abrir dados também significa abrir caminhos, a Guatemala se prepara para receber uma das comunidades mais vibrantes e comprometidas da América Latina.',
      welcome2: 'De um território marcado pela diversidade, resistência e esperança, damos as boas-vindas a um espaço para nos encontrarmos, ouvirmos uns aos outros e imaginarmos juntos novas formas de transformar nossas sociedades.',
      whyGuatemala: 'Por que Guatemala?',
      whySubtitle: 'Porque abrir dados é abrir o futuro',
      why1: 'Porque aqui os dados abertos se conectam com a defesa de direitos e a participação cidadã',
      why2: 'Porque a América Central merece estar no centro da conversa regional',
      why3: 'Porque a inovação pública também nasce dos territórios e das comunidades',
      why4: 'Porque abrir dados é abrir o futuro',
      thematicTitle: 'Linhas Temáticas 2026',
      thematic1: 'Ferramentas para a sustentabilidade de políticas de abertura de dados',
      thematic2: 'Fortalecimento da democracia e incidência com dados abertos',
      thematic3: 'Dados abertos para o desenvolvimento sustentável e a gestão de recursos',
      thematic4: 'Sustentabilidade e desafios para a agenda de dados abertos',
      thematic5: 'Dados abertos para uma sociedade igualitária e inclusiva',
      venueTitle: 'O local',
      venueSubtitle: 'Um espaço cultural emblemático no coração da Guatemala',
      venueName: 'Centro Cultural Miguel Ángel Asturias',
      venueDesc: 'O Teatro Nacional da Guatemala é um dos espaços culturais mais importantes da América Central. Localizado no coração da Cidade da Guatemala, este centro cultural foi nomeado em homenagem ao Prêmio Nobel de Literatura guatemalteco Miguel Ángel Asturias. Sua arquitetura moderna e amplos espaços fazem dele o lugar ideal para sediar um evento da magnitude do ABRELATAM / CONDATOS.',
      venueFeature1: 'Auditório principal com capacidade para mais de 2.000 pessoas',
      venueFeature2: 'Múltiplas salas e espaços para oficinas e sessões paralelas',
      venueFeature3: 'Localização central e fácil acesso na Zona 1',
      venueFeature4: 'Infraestrutura moderna e equipamento técnico de primeiro nível',
      venueCtaEyebrow: 'ABRELATAM E CONDATOS SAO APENAS O COMECO',
      venueCtaTitle: 'Inscricao geral aberta!',
      venueCtaSubtitle: 'O programa da America Aberta incluira uma serie de atividades nacionais e internacionais.',
      venueCtaButton: 'Inscreva-se',
      venueCtaNote: 'Nao esqueca de fazer o pre-registro para receber todas as novidades.',
      whatToFind: 'O que você vai encontrar',
      panels: 'Painéis e conferências regionais',
      workshops: 'Oficinas práticas e sessões técnicas',
      unconference: 'Desconferência ABRELATAM',
      lightning: 'Apresentações relâmpago',
      networking: 'Networking e comunidade',
      sideEvents: 'Side events e espaços paralelos',
      participate: 'Participe',
      attend: 'Participe',
      attendDesc: 'Inscreva-se e faça parte do ABRELATAM / CONDATOS 2026.',
      propose: 'Proponha uma sessão',
      proposeDesc: 'Compartilhe sua experiência, projeto ou pesquisa.',
      organizeSide: 'Organize um side event',
      organizeSideDesc: 'Promova conversas paralelas e encontros especializados.',
      proposeSession: 'Propor sessão',
      proposeSideEvent: 'Propor side event',
      viewCalls: 'Ver chamadas',
      newsTitle: 'Novidades'
    },
    footer: {
      description: 'Guatemala espera você para a conferência regional mais importante sobre dados abertos e transparência.',
      quickLinks: 'Links rápidos',
      aboutEvent: 'Sobre o evento',
      participate: 'Participe',
      newsletter: 'Newsletter',
      newsletterDesc: 'Receba as últimas notícias do evento',
      subscribe: 'Inscrever-se',
      subscribed: 'Inscrito'
    },
    gdpr: {
      title: 'Proteção de Dados',
      message: 'Usamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego do site e personalizar o conteúdo. Ao clicar em "Aceitar", você consente o uso dessas tecnologias de acordo com nossa política de privacidade.',
      accept: 'Aceitar todos',
      decline: 'Recusar',
      learnMore: 'Mais informações'
    },
    registerPopup: {
      title: 'ABRELATAM 2026',
      subtitle: 'Junte-se à comunidade de dados abertos mais importante da América Latina',
      date: 'Novembro 2026',
      location: 'Cidade da Guatemala',
      badge: 'Não perca!'
    }
  }
};
