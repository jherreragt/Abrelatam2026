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
      location: 'Ciudad de Guatemala, Guatemala',
      date: '7, 8 y 9 de Octubre de 2026',
      register: 'Evento',
      guide: 'Pre-registro',
      agenda: 'Información Útil',
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
      more: 'Más',
      event: 'Evento',
      guideForParticipants: 'Guía para participantes',
      preRegister: 'Pre-Registro',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
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
    about: {
      heroTitle: 'Sobre ABRELATAM / CONDATOS 2026',
      heroSubtitle: 'Dos conferencias, un mismo objetivo: transformar America Latina a traves de datos abiertos',
      historyTitle: 'Nuestra historia',
      history1: 'Desde 2013, ABRELATAM y CONDATOS han sido los puntos de encuentro mas importantes para la comunidad latinoamericana de datos abiertos. Nacidas con el espiritu de democratizar el acceso a la informacion publica, estas conferencias han viajado por toda la region, dejando en cada pais una huella de colaboracion y transformacion.',
      history2: 'ABRELATAM es el espacio donde activistas, desarrolladoras, periodistas, academicas y emprendedores sociales se reunen para compartir experiencias, aprender nuevas herramientas y construir redes de colaboracion que trascienden fronteras.',
      history3: 'CONDATOS, por su parte, convoca especificamente a funcionarios publicos y tomadores de decisiones gubernamentales para dialogar sobre politicas publicas, implementacion de plataformas de datos abiertos y mejores practicas en transparencia.',
      history4: 'En 2026, estas conferencias regresan a Centroamerica, y Guatemala tiene el honor de recibirlas. Sera una oportunidad unica para fortalecer el ecosistema regional de datos abiertos y construir puentes entre gobiernos, sociedad civil y sector tecnologico.',
      objectivesTitle: 'Nuestros objetivos',
      objectives: {
        capacity: {
          title: 'Fortalecer capacidades',
          desc: 'Ofrecer espacios de formacion y capacitacion en herramientas, metodologias y mejores practicas para trabajar con datos abiertos, tanto desde la sociedad civil como desde el gobierno.'
        },
        community: {
          title: 'Construir comunidad',
          desc: 'Facilitar el encuentro entre personas y organizaciones que trabajan en datos abiertos para fortalecer redes de colaboracion regional y compartir experiencias exitosas.'
        },
        policy: {
          title: 'Impulsar politicas publicas',
          desc: 'Promover conversaciones entre gobiernos, sociedad civil y especialistas para avanzar en politicas publicas de apertura, transparencia y uso responsable de datos.'
        },
        innovation: {
          title: 'Inspirar innovacion',
          desc: 'Visibilizar iniciativas, herramientas y aprendizajes que usan datos abiertos para responder a desafios publicos y crear impacto social.'
        }
      },
      audienceTitle: 'A quien va dirigido?',
      audience: {
        civilSociety: {
          title: 'Activistas y organizaciones de sociedad civil',
          desc: 'Que trabajan en transparencia, rendicion de cuentas, anticorrupcion y derechos digitales.'
        },
        publicOfficials: {
          title: 'Funcionarios publicos',
          desc: 'Responsables de politicas de datos abiertos, transparencia y gobierno digital.'
        },
        developers: {
          title: 'Desarrolladores y tecnologos',
          desc: 'Que construyen herramientas y aplicaciones con datos abiertos.'
        },
        dataJournalists: {
          title: 'Periodistas de datos',
          desc: 'Que utilizan datos para contar historias de impacto publico.'
        },
        academics: {
          title: 'Academicos e investigadores',
          desc: 'Que estudian el impacto de datos abiertos en la democracia y el desarrollo.'
        },
        socialEntrepreneurs: {
          title: 'Emprendedores sociales',
          desc: 'Que crean valor social y economico a partir de datos abiertos.'
        }
      },
      previousEditionsTitle: 'Ediciones anteriores',
      editions: {
        uruguay: 'Uruguay',
        mexico: 'Mexico',
        chile: 'Chile',
        colombia: 'Colombia',
        costaRica: 'Costa Rica',
        argentina: 'Argentina',
        ecuador: 'Ecuador',
        fromHome: 'Desde casa',
        futuros: 'Futuros',
        dominicana: 'Dominicana',
        brazil: 'Brasil',
        bolivia: 'Bolivia'
      }
    },
    agendaPage: {
      heroTitle: 'Agenda del evento',
      heroSubtitle: '5-8 de noviembre, 2026 - Guatemala',
      comingSoonTitle: 'Proximamente',
      comingSoonText1: 'Estamos trabajando en una agenda completa con sesiones increibles, talleres practicos, paneles de discusion y oportunidades de networking.',
      comingSoonText2: 'La agenda detallada sera publicada en las proximas semanas.',
      expectTitle: 'Lo que puedes esperar:',
      expectations: {
        keynotes: 'Ponencias magistrales de expertos internacionales',
        workshops: 'Talleres practicos y tecnicos',
        panels: 'Paneles de discusion sobre datos abiertos',
        networking: 'Sesiones de networking',
        hackathon: 'Hackaton y presentaciones de proyectos',
        socialEvents: 'Eventos sociales y culturales'
      },
      updatesButton: 'Recibir actualizaciones',
      contactButton: 'Contactar al equipo',
      proposeTitle: 'Quieres proponer una sesion?',
      proposeText: 'Las convocatorias para proponer ponencias, talleres y side events estaran abiertas proximamente. Suscribete a nuestro newsletter para recibir notificaciones cuando se abra el proceso.',
      callsButton: 'Ver convocatorias'
    },
    sideEventsPage: {
      heroTitle: 'Side Events',
      heroSubtitle: 'Espacios autorganizados por la comunidad para encuentros, talleres y actividades paralelas',
      whatTitle: 'Que son los Side Events?',
      whatText1: 'Los Side Events son actividades paralelas organizadas por participantes, organizaciones y comunidades durante ABRELATAM / CONDATOS. Estos espacios autorganizados permiten profundizar en temas especificos, reunir a comunidades de practica o explorar iniciativas particulares.',
      whatText2: 'Pueden ser reuniones informales, talleres especializados, presentaciones de proyectos o cualquier actividad que enriquezca la experiencia del evento. Los Side Events son una tradicion de ABRELATAM que fortalece las redes y permite conversaciones mas enfocadas y profundas.',
      typesTitle: 'Tipos de Side Events',
      types: {
        communityMeetups: {
          title: 'Reuniones de comunidad',
          desc: 'Espacios para que redes, coaliciones u organizaciones se reunan presencialmente, compartan actualizaciones y planifiquen acciones futuras.'
        },
        specializedWorkshops: {
          title: 'Talleres especializados',
          desc: 'Sesiones practicas sobre herramientas, metodologias o enfoques especificos que requieren mas tiempo que un formato regular de la agenda oficial.'
        },
        launchesDemos: {
          title: 'Lanzamientos y demos',
          desc: 'Presentaciones de nuevas propuestas, plataformas, investigaciones o iniciativas que quieran tener un espacio dedicado con su audiencia.'
        }
      },
      guidelinesTitle: 'Lineamientos generales',
      guidelines: {
        proposal: {
          title: 'Envia tu propuesta',
          desc: 'Completa el formulario de propuesta de Side Event con los detalles de tu actividad: titulo, descripcion, duracion estimada, numero de participantes esperados y requerimientos tecnicos o de espacio.'
        },
        coordination: {
          title: 'Coordinacion con organizacion',
          desc: 'El equipo organizador revisara tu propuesta y te ayudara a encontrar el mejor horario y espacio disponible. Te daremos apoyo con logistica basica y difusion.'
        },
        promotion: {
          title: 'Difusion',
          desc: 'Tu Side Event aparecera en la agenda oficial y en los materiales del evento. Tambien puedes compartirlo en redes sociales y con tus comunidades.'
        },
        enjoy: {
          title: 'Disfruta tu evento!',
          desc: 'Facilita tu Side Event durante el congreso. Recuerda seguir el codigo de conducta y crear un espacio inclusivo y respetuoso para todas las personas participantes.'
        }
      },
      ctaTitle: 'Tienes una idea para un Side Event?',
      ctaText: 'Las convocatorias para organizar Side Events abriran proximamente. Suscribete para recibir una notificacion cuando esten disponibles.',
      ctaButton: 'Proponer Side Event'
    },
    participantGuide: {
      heroTitle: 'Guia para participantes',
      heroSubtitle: 'Todo lo que necesitas saber para aprovechar al maximo tu experiencia en ABRELATAM / CONDATOS 2026.',
      sections: {
        whatIs: {
          title: 'Que es ABRELATAM / CONDATOS?',
          content: 'ABRELATAM es una desconferencia comunitaria donde la agenda se construye colectivamente. CONDATOS es la conferencia regional con paneles y talleres seleccionados por un comite. Juntos conforman el encuentro mas importante de la region sobre datos abiertos y tecnologia civica.'
        },
        datesPlace: {
          title: 'Fechas y lugar',
          content: 'El evento se realizara del 25 al 28 de junio de 2026 en Ciudad de Guatemala, Guatemala. La sede es el Centro Cultural Miguel Angel Asturias, en el corazon de la Zona 1.'
        },
        audience: {
          title: 'A quien va dirigido?',
          content: 'El evento es para personas de la sociedad civil, gobierno, academia, sector privado y comunidad tecnologica comprometidas con la apertura de datos, la transparencia y la innovacion publica en America Latina.'
        },
        howToArrive: {
          title: 'Como llegar',
          content: 'El Centro Cultural Miguel Angel Asturias se encuentra en la 24 Calle 3-81, Zona 1, Ciudad de Guatemala. Puedes llegar en Transmetro, taxi o servicio de ridesharing. Proximamente publicaremos una guia detallada de movilidad.'
        },
        duringEvent: {
          title: 'Durante el evento',
          content: 'Habra WiFi disponible en todas las salas. Te recomendamos llevar tu computadora o tablet para participar activamente. El evento cuenta con coffee breaks, almuerzo y espacios de networking.'
        },
        networking: {
          title: 'Networking y comunidad',
          content: 'ABRELATAM / CONDATOS es ante todo un espacio de comunidad. Aprovecha los recesos, las actividades sociales y los side events para conectar con otras personas de la region.'
        }
      },
      faqTitle: 'Preguntas frecuentes',
      faqs: {
        registration: {
          q: 'Necesito registro previo para asistir?',
          a: 'Si, debes completar tu registro oficial cuando se habilite. Por ahora puedes hacer el pre-registro para recibir novedades.'
        },
        free: {
          q: 'El evento es gratuito?',
          a: 'El evento tiene costo de inscripcion. Se anunciaran los precios por categoria cuando se abra el registro oficial.'
        },
        translation: {
          q: 'Habra traduccion simultanea?',
          a: 'Si, las sesiones plenarias principales contaran con interpretacion espanol-ingles-portugues.'
        },
        propose: {
          q: 'Puedo proponer una sesion?',
          a: 'Las convocatorias para sesiones y talleres se abriran en febrero de 2026. Mantente atento a las novedades en este sitio.'
        },
        includes: {
          q: 'Que incluye la inscripcion?',
          a: 'Acceso a todas las sesiones, materiales del evento, coffee breaks y certificado de participacion. No incluye alojamiento ni transporte.'
        }
      }
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
      location: 'Guatemala City, Guatemala',
      date: 'October 7–9, 2026',
      register: 'Event',
      guide: 'Pre-registration',
      agenda: 'Useful Info',
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
      more: 'More',
      event: 'Event',
      guideForParticipants: 'Guide for participants',
      preRegister: 'Pre-Registration',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
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
    about: {
      heroTitle: 'About ABRELATAM / CONDATOS 2026',
      heroSubtitle: 'Two conferences, one shared goal: transforming Latin America through open data',
      historyTitle: 'Our history',
      history1: 'Since 2013, ABRELATAM and CONDATOS have been the most important meeting points for the Latin American open data community. Born from the spirit of democratizing access to public information, these conferences have traveled across the region, leaving a mark of collaboration and transformation in each country.',
      history2: 'ABRELATAM is the space where activists, developers, journalists, academics, and social entrepreneurs gather to share experiences, learn new tools, and build collaboration networks that cross borders.',
      history3: 'CONDATOS, in turn, specifically brings together public officials and government decision-makers to discuss public policy, implementation of open data platforms, and best practices in transparency.',
      history4: 'In 2026, these conferences return to Central America, and Guatemala has the honor of hosting them. It will be a unique opportunity to strengthen the regional open data ecosystem and build bridges among governments, civil society, and the technology sector.',
      objectivesTitle: 'Our objectives',
      objectives: {
        capacity: {
          title: 'Strengthen capacities',
          desc: 'Offer training and learning spaces on tools, methodologies, and best practices for working with open data, both from civil society and government.'
        },
        community: {
          title: 'Build community',
          desc: 'Facilitate encounters among people and organizations working with open data to strengthen regional collaboration networks and share successful experiences.'
        },
        policy: {
          title: 'Advance public policy',
          desc: 'Promote conversations among governments, civil society, and specialists to advance public policies on openness, transparency, and responsible data use.'
        },
        innovation: {
          title: 'Inspire innovation',
          desc: 'Highlight initiatives, tools, and lessons that use open data to respond to public challenges and create social impact.'
        }
      },
      audienceTitle: 'Who is it for?',
      audience: {
        civilSociety: {
          title: 'Activists and civil society organizations',
          desc: 'Working on transparency, accountability, anti-corruption, and digital rights.'
        },
        publicOfficials: {
          title: 'Public officials',
          desc: 'Responsible for open data policies, transparency, and digital government.'
        },
        developers: {
          title: 'Developers and technologists',
          desc: 'Building tools and applications with open data.'
        },
        dataJournalists: {
          title: 'Data journalists',
          desc: 'Using data to tell stories with public impact.'
        },
        academics: {
          title: 'Academics and researchers',
          desc: 'Studying the impact of open data on democracy and development.'
        },
        socialEntrepreneurs: {
          title: 'Social entrepreneurs',
          desc: 'Creating social and economic value from open data.'
        }
      },
      previousEditionsTitle: 'Previous editions',
      editions: {
        uruguay: 'Uruguay',
        mexico: 'Mexico',
        chile: 'Chile',
        colombia: 'Colombia',
        costaRica: 'Costa Rica',
        argentina: 'Argentina',
        ecuador: 'Ecuador',
        fromHome: 'From home',
        futuros: 'Futuros',
        dominicana: 'Dominican Republic',
        brazil: 'Brazil',
        bolivia: 'Bolivia'
      }
    },
    agendaPage: {
      heroTitle: 'Event agenda',
      heroSubtitle: 'November 5-8, 2026 - Guatemala',
      comingSoonTitle: 'Coming soon',
      comingSoonText1: 'We are working on a complete agenda with outstanding sessions, hands-on workshops, discussion panels, and networking opportunities.',
      comingSoonText2: 'The detailed agenda will be published in the coming weeks.',
      expectTitle: 'What you can expect:',
      expectations: {
        keynotes: 'Keynotes by international experts',
        workshops: 'Hands-on and technical workshops',
        panels: 'Discussion panels on open data',
        networking: 'Networking sessions',
        hackathon: 'Hackathon and project presentations',
        socialEvents: 'Social and cultural events'
      },
      updatesButton: 'Get updates',
      contactButton: 'Contact the team',
      proposeTitle: 'Want to propose a session?',
      proposeText: 'Calls for talks, workshops, and side events will open soon. Subscribe to our newsletter to receive notifications when the process opens.',
      callsButton: 'View calls'
    },
    sideEventsPage: {
      heroTitle: 'Side Events',
      heroSubtitle: 'Community-organized spaces for meetups, workshops, and parallel activities',
      whatTitle: 'What are Side Events?',
      whatText1: 'Side Events are parallel activities organized by participants, organizations, and communities during ABRELATAM / CONDATOS. These self-organized spaces allow people to go deeper into specific topics, bring communities of practice together, or explore particular initiatives.',
      whatText2: 'They can be informal meetings, specialized workshops, project presentations, or any activity that enriches the event experience. Side Events are an ABRELATAM tradition that strengthens networks and enables more focused and in-depth conversations.',
      typesTitle: 'Types of Side Events',
      types: {
        communityMeetups: {
          title: 'Community meetups',
          desc: 'Spaces for networks, coalitions, or organizations to meet in person, share updates, and plan future actions.'
        },
        specializedWorkshops: {
          title: 'Specialized workshops',
          desc: 'Hands-on sessions on specific tools, methodologies, or approaches that require more time than a regular official agenda format.'
        },
        launchesDemos: {
          title: 'Launches and demos',
          desc: 'Presentations of new proposals, platforms, research, or initiatives that need a dedicated space with their audience.'
        }
      },
      guidelinesTitle: 'General guidelines',
      guidelines: {
        proposal: {
          title: 'Submit your proposal',
          desc: 'Complete the Side Event proposal form with the details of your activity: title, description, estimated duration, expected number of participants, and technical or space requirements.'
        },
        coordination: {
          title: 'Coordination with organizers',
          desc: 'The organizing team will review your proposal and help you find the best available time and space. We will provide basic logistical and outreach support.'
        },
        promotion: {
          title: 'Promotion',
          desc: 'Your Side Event will appear in the official agenda and event materials. You can also share it on social media and with your communities.'
        },
        enjoy: {
          title: 'Enjoy your event!',
          desc: 'Facilitate your Side Event during the conference. Remember to follow the code of conduct and create an inclusive, respectful space for all participants.'
        }
      },
      ctaTitle: 'Have an idea for a Side Event?',
      ctaText: 'Calls to organize Side Events will open soon. Subscribe to receive a notification when they are available.',
      ctaButton: 'Propose Side Event'
    },
    participantGuide: {
      heroTitle: 'Guide for participants',
      heroSubtitle: 'Everything you need to know to make the most of your ABRELATAM / CONDATOS 2026 experience.',
      sections: {
        whatIs: {
          title: 'What is ABRELATAM / CONDATOS?',
          content: 'ABRELATAM is a community unconference where the agenda is built collectively. CONDATOS is the regional conference with panels and workshops selected by a committee. Together they form the region\'s most important gathering on open data and civic technology.'
        },
        datesPlace: {
          title: 'Dates and venue',
          content: 'The event will take place from June 25 to 28, 2026 in Guatemala City, Guatemala. The venue is the Miguel Angel Asturias Cultural Center, in the heart of Zone 1.'
        },
        audience: {
          title: 'Who is it for?',
          content: 'The event is for people from civil society, government, academia, the private sector, and the technology community who are committed to open data, transparency, and public innovation in Latin America.'
        },
        howToArrive: {
          title: 'How to get there',
          content: 'The Miguel Angel Asturias Cultural Center is located at 24 Calle 3-81, Zone 1, Guatemala City. You can arrive by Transmetro, taxi, or ridesharing service. We will soon publish a detailed mobility guide.'
        },
        duringEvent: {
          title: 'During the event',
          content: 'WiFi will be available in all rooms. We recommend bringing your laptop or tablet to participate actively. The event includes coffee breaks, lunch, and networking spaces.'
        },
        networking: {
          title: 'Networking and community',
          content: 'ABRELATAM / CONDATOS is, above all, a community space. Use breaks, social activities, and side events to connect with other people from the region.'
        }
      },
      faqTitle: 'Frequently asked questions',
      faqs: {
        registration: {
          q: 'Do I need to register in advance?',
          a: 'Yes, you must complete your official registration when it opens. For now, you can pre-register to receive updates.'
        },
        free: {
          q: 'Is the event free?',
          a: 'The event has a registration fee. Prices by category will be announced when official registration opens.'
        },
        translation: {
          q: 'Will simultaneous interpretation be available?',
          a: 'Yes, the main plenary sessions will include Spanish-English-Portuguese interpretation.'
        },
        propose: {
          q: 'Can I propose a session?',
          a: 'Calls for sessions and workshops will open in February 2026. Stay tuned for updates on this site.'
        },
        includes: {
          q: 'What does registration include?',
          a: 'Access to all sessions, event materials, coffee breaks, and a certificate of participation. Lodging and transportation are not included.'
        }
      }
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
      location: 'Cidade da Guatemala, Guatemala',
      date: '7, 8 e 9 de outubro de 2026',
      register: 'Evento',
      guide: 'Pré-registro',
      agenda: 'Informações Úteis',
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
      more: 'Mais',
      event: 'Evento',
      guideForParticipants: 'Guia para participantes',
      preRegister: 'Pré-Registro',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
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
    about: {
      heroTitle: 'Sobre ABRELATAM / CONDATOS 2026',
      heroSubtitle: 'Duas conferencias, um mesmo objetivo: transformar a America Latina por meio de dados abertos',
      historyTitle: 'Nossa historia',
      history1: 'Desde 2013, ABRELATAM e CONDATOS sao os pontos de encontro mais importantes para a comunidade latino-americana de dados abertos. Nascidas com o espirito de democratizar o acesso a informacao publica, essas conferencias viajaram por toda a regiao, deixando em cada pais uma marca de colaboracao e transformacao.',
      history2: 'ABRELATAM e o espaco onde ativistas, desenvolvedoras, jornalistas, academicas e empreendedores sociais se reunem para compartilhar experiencias, aprender novas ferramentas e construir redes de colaboracao que atravessam fronteiras.',
      history3: 'CONDATOS, por sua vez, convoca especificamente funcionarios publicos e tomadores de decisao governamentais para dialogar sobre politicas publicas, implementacao de plataformas de dados abertos e melhores praticas em transparencia.',
      history4: 'Em 2026, essas conferencias retornam a America Central, e a Guatemala tem a honra de recebe-las. Sera uma oportunidade unica para fortalecer o ecossistema regional de dados abertos e construir pontes entre governos, sociedade civil e setor tecnologico.',
      objectivesTitle: 'Nossos objetivos',
      objectives: {
        capacity: {
          title: 'Fortalecer capacidades',
          desc: 'Oferecer espacos de formacao e capacitacao em ferramentas, metodologias e melhores praticas para trabalhar com dados abertos, tanto a partir da sociedade civil quanto do governo.'
        },
        community: {
          title: 'Construir comunidade',
          desc: 'Facilitar o encontro entre pessoas e organizacoes que trabalham com dados abertos para fortalecer redes de colaboracao regional e compartilhar experiencias bem-sucedidas.'
        },
        policy: {
          title: 'Impulsionar politicas publicas',
          desc: 'Promover conversas entre governos, sociedade civil e especialistas para avancar em politicas publicas de abertura, transparencia e uso responsavel de dados.'
        },
        innovation: {
          title: 'Inspirar inovacao',
          desc: 'Dar visibilidade a iniciativas, ferramentas e aprendizados que usam dados abertos para responder a desafios publicos e criar impacto social.'
        }
      },
      audienceTitle: 'Para quem e?',
      audience: {
        civilSociety: {
          title: 'Ativistas e organizacoes da sociedade civil',
          desc: 'Que trabalham com transparencia, prestacao de contas, anticorrupcao e direitos digitais.'
        },
        publicOfficials: {
          title: 'Funcionarios publicos',
          desc: 'Responsaveis por politicas de dados abertos, transparencia e governo digital.'
        },
        developers: {
          title: 'Desenvolvedores e tecnologos',
          desc: 'Que constroem ferramentas e aplicacoes com dados abertos.'
        },
        dataJournalists: {
          title: 'Jornalistas de dados',
          desc: 'Que usam dados para contar historias de impacto publico.'
        },
        academics: {
          title: 'Academicos e pesquisadores',
          desc: 'Que estudam o impacto dos dados abertos na democracia e no desenvolvimento.'
        },
        socialEntrepreneurs: {
          title: 'Empreendedores sociais',
          desc: 'Que criam valor social e economico a partir de dados abertos.'
        }
      },
      previousEditionsTitle: 'Edicoes anteriores',
      editions: {
        uruguay: 'Uruguai',
        mexico: 'Mexico',
        chile: 'Chile',
        colombia: 'Colombia',
        costaRica: 'Costa Rica',
        argentina: 'Argentina',
        ecuador: 'Equador',
        fromHome: 'De casa',
        futuros: 'Futuros',
        dominicana: 'Dominicana',
        brazil: 'Brasil',
        bolivia: 'Bolivia'
      }
    },
    agendaPage: {
      heroTitle: 'Agenda do evento',
      heroSubtitle: '5 a 8 de novembro de 2026 - Guatemala',
      comingSoonTitle: 'Em breve',
      comingSoonText1: 'Estamos trabalhando em uma agenda completa com sessoes incriveis, oficinas praticas, paineis de discussao e oportunidades de networking.',
      comingSoonText2: 'A agenda detalhada sera publicada nas proximas semanas.',
      expectTitle: 'O que voce pode esperar:',
      expectations: {
        keynotes: 'Palestras principais com especialistas internacionais',
        workshops: 'Oficinas praticas e tecnicas',
        panels: 'Paineis de discussao sobre dados abertos',
        networking: 'Sessoes de networking',
        hackathon: 'Hackathon e apresentacoes de projetos',
        socialEvents: 'Eventos sociais e culturais'
      },
      updatesButton: 'Receber atualizacoes',
      contactButton: 'Contatar a equipe',
      proposeTitle: 'Quer propor uma sessao?',
      proposeText: 'As chamadas para propor palestras, oficinas e side events serao abertas em breve. Assine nossa newsletter para receber notificacoes quando o processo for aberto.',
      callsButton: 'Ver chamadas'
    },
    sideEventsPage: {
      heroTitle: 'Side Events',
      heroSubtitle: 'Espacos auto-organizados pela comunidade para encontros, oficinas e atividades paralelas',
      whatTitle: 'O que sao Side Events?',
      whatText1: 'Os Side Events sao atividades paralelas organizadas por participantes, organizacoes e comunidades durante ABRELATAM / CONDATOS. Esses espacos auto-organizados permitem aprofundar temas especificos, reunir comunidades de pratica ou explorar iniciativas particulares.',
      whatText2: 'Podem ser reunioes informais, oficinas especializadas, apresentacoes de projetos ou qualquer atividade que enriqueça a experiencia do evento. Os Side Events sao uma tradicao do ABRELATAM que fortalece redes e permite conversas mais focadas e profundas.',
      typesTitle: 'Tipos de Side Events',
      types: {
        communityMeetups: {
          title: 'Reunioes de comunidade',
          desc: 'Espacos para que redes, coalizoes ou organizacoes se encontrem presencialmente, compartilhem atualizacoes e planejem acoes futuras.'
        },
        specializedWorkshops: {
          title: 'Oficinas especializadas',
          desc: 'Sessoes praticas sobre ferramentas, metodologias ou abordagens especificas que exigem mais tempo do que um formato regular da agenda oficial.'
        },
        launchesDemos: {
          title: 'Lancamentos e demos',
          desc: 'Apresentacoes de novas propostas, plataformas, pesquisas ou iniciativas que queiram ter um espaco dedicado com seu publico.'
        }
      },
      guidelinesTitle: 'Diretrizes gerais',
      guidelines: {
        proposal: {
          title: 'Envie sua proposta',
          desc: 'Preencha o formulario de proposta de Side Event com os detalhes da sua atividade: titulo, descricao, duracao estimada, numero esperado de participantes e requisitos tecnicos ou de espaco.'
        },
        coordination: {
          title: 'Coordenacao com a organizacao',
          desc: 'A equipe organizadora revisara sua proposta e ajudara a encontrar o melhor horario e espaco disponivel. Daremos apoio basico de logistica e divulgacao.'
        },
        promotion: {
          title: 'Divulgacao',
          desc: 'Seu Side Event aparecera na agenda oficial e nos materiais do evento. Voce tambem pode compartilha-lo nas redes sociais e com suas comunidades.'
        },
        enjoy: {
          title: 'Aproveite seu evento!',
          desc: 'Facilite seu Side Event durante o congresso. Lembre-se de seguir o codigo de conduta e criar um espaco inclusivo e respeitoso para todas as pessoas participantes.'
        }
      },
      ctaTitle: 'Tem uma ideia para um Side Event?',
      ctaText: 'As chamadas para organizar Side Events serao abertas em breve. Assine para receber uma notificacao quando estiverem disponiveis.',
      ctaButton: 'Propor Side Event'
    },
    participantGuide: {
      heroTitle: 'Guia para participantes',
      heroSubtitle: 'Tudo o que voce precisa saber para aproveitar ao maximo sua experiencia no ABRELATAM / CONDATOS 2026.',
      sections: {
        whatIs: {
          title: 'O que e ABRELATAM / CONDATOS?',
          content: 'ABRELATAM e uma desconferencia comunitaria onde a agenda e construida coletivamente. CONDATOS e a conferencia regional com paineis e oficinas selecionados por um comite. Juntos formam o encontro mais importante da regiao sobre dados abertos e tecnologia civica.'
        },
        datesPlace: {
          title: 'Datas e local',
          content: 'O evento acontecera de 25 a 28 de junho de 2026 na Cidade da Guatemala, Guatemala. A sede e o Centro Cultural Miguel Angel Asturias, no coracao da Zona 1.'
        },
        audience: {
          title: 'Para quem e?',
          content: 'O evento e para pessoas da sociedade civil, governo, academia, setor privado e comunidade tecnologica comprometidas com dados abertos, transparencia e inovacao publica na America Latina.'
        },
        howToArrive: {
          title: 'Como chegar',
          content: 'O Centro Cultural Miguel Angel Asturias fica na 24 Calle 3-81, Zona 1, Cidade da Guatemala. Voce pode chegar de Transmetro, taxi ou aplicativo de transporte. Em breve publicaremos um guia detalhado de mobilidade.'
        },
        duringEvent: {
          title: 'Durante o evento',
          content: 'Havera WiFi disponivel em todas as salas. Recomendamos levar computador ou tablet para participar ativamente. O evento conta com coffee breaks, almoco e espacos de networking.'
        },
        networking: {
          title: 'Networking e comunidade',
          content: 'ABRELATAM / CONDATOS e, antes de tudo, um espaco de comunidade. Aproveite os intervalos, atividades sociais e side events para se conectar com outras pessoas da regiao.'
        }
      },
      faqTitle: 'Perguntas frequentes',
      faqs: {
        registration: {
          q: 'Preciso de registro previo para participar?',
          a: 'Sim, voce deve completar seu registro oficial quando ele for aberto. Por enquanto, pode fazer o pre-registro para receber novidades.'
        },
        free: {
          q: 'O evento e gratuito?',
          a: 'O evento tera taxa de inscricao. Os valores por categoria serao anunciados quando o registro oficial for aberto.'
        },
        translation: {
          q: 'Havera interpretacao simultanea?',
          a: 'Sim, as principais sessoes plenarias contarao com interpretacao espanhol-ingles-portugues.'
        },
        propose: {
          q: 'Posso propor uma sessao?',
          a: 'As chamadas para sessoes e oficinas serao abertas em fevereiro de 2026. Acompanhe as novidades neste site.'
        },
        includes: {
          q: 'O que a inscricao inclui?',
          a: 'Acesso a todas as sessoes, materiais do evento, coffee breaks e certificado de participacao. Hospedagem e transporte nao estao incluidos.'
        }
      }
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
