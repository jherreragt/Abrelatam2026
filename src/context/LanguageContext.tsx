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
        subtitle: 'ABRELATAM / CONDATOS llega a Ciudad de Guatemala del 7 al 9 de octubre de 2026. Tres días para encontrarnos, compartir aprendizajes y fortalecer la comunidad regional de datos abiertos y tecnología cívica.'
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
      preRegister: 'Registro',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
    },
    home: {
      title: 'Guatemala 2026: abrir datos, abrir caminos',
      subtitle: 'ABRELATAM / CONDATOS llega a Ciudad de Guatemala del 7 al 9 de octubre de 2026. Tres días para encontrarnos, compartir aprendizajes y fortalecer la comunidad regional de datos abiertos y tecnología cívica.',
      venue: 'Centro Cultural Miguel Ángel Asturias',
      date: '7, 8 y 9 de octubre, 2026',
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
      venueCtaNote: 'Regístrate ahora y sé parte de la comunidad regional de datos abiertos.',
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
      history1: 'Desde 2013, ABRELATAM y CONDATOS han sido el punto de encuentro más importante para la comunidad latinoamericana de datos abiertos. Nacidas con el espíritu de democratizar el acceso a la información pública, estas conferencias han viajado por toda la región, dejando en cada país una huella de colaboración y transformación.',
      history2: 'ABRELATAM es el espacio de desconferencia donde personas activistas, desarrolladoras, periodistas, académicas y emprendedores sociales se reúnen para compartir experiencias, aprender nuevas herramientas y construir redes de colaboración que trascienden fronteras.',
      history3: 'CONDATOS, por su parte, es el espacio de conferencia que convoca específicamente a funcionarios públicos y tomadores de decisiones gubernamentales para dialogar sobre políticas públicas, implementación de plataformas de datos abiertos y mejores prácticas en transparencia.',
      history4: 'Juntos, estos dos espacios reúnen en un mismo lugar a público de diferentes sectores para trabajar sobre una misma agenda.',
      history5: 'En 2026, estas conferencias regresan a Centroamérica, y Guatemala tiene el honor de recibirlas. Será una oportunidad única para fortalecer el ecosistema regional de datos abiertos y construir puentes entre gobiernos, sociedad civil y sector tecnológico.',
      objectivesTitle: 'Nuestros objetivos',
      objectives: {
        capacity: {
          title: 'Fortalecer capacidades',
          desc: 'Ofrecer espacios de formación y capacitación en herramientas, metodologías y mejores prácticas para trabajar con datos abiertos y tecnología, tanto desde la sociedad civil como desde el gobierno.'
        },
        community: {
          title: 'Construir comunidad',
          desc: 'Facilitar el encuentro entre personas y organizaciones que trabajan en datos abiertos y tecnología para fortalecer redes de colaboración regional y compartir experiencias exitosas.'
        },
        policy: {
          title: 'Impulsar políticas públicas',
          desc: 'Promover conversaciones entre gobiernos, sociedad civil y especialistas para avanzar en políticas públicas de apertura, transparencia y uso responsable de datos.'
        },
        innovation: {
          title: 'Inspirar innovación',
          desc: 'Visibilizar iniciativas, herramientas y aprendizajes que usan datos abiertos para responder a desafíos públicos y crear impacto social.'
        }
      },
      audienceTitle: '¿A quién va dirigido?',
      audience: {
        civilSociety: {
          title: 'Activistas y organizaciones de sociedad civil',
          desc: 'Que trabajan en transparencia, rendición de cuentas, anticorrupción y derechos digitales.'
        },
        publicOfficials: {
          title: 'Funcionarios públicos',
          desc: 'Responsables de políticas de datos abiertos, transparencia y gobierno digital.'
        },
        developers: {
          title: 'Desarrolladores y tecnólogos',
          desc: 'Que construyen herramientas y aplicaciones con datos abiertos.'
        },
        dataJournalists: {
          title: 'Periodistas de datos',
          desc: 'Que utilizan datos para contar historias de impacto público.'
        },
        academics: {
          title: 'Académicos e investigadores',
          desc: 'Que estudian el impacto de datos abiertos en la democracia y el desarrollo.'
        },
        socialEntrepreneurs: {
          title: 'Emprendedores sociales',
          desc: 'Que crean valor social y económico a partir de datos abiertos.'
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
      heroSubtitle: '7, 8 y 9 de octubre, 2026 - Guatemala',
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
      heroTitle: 'Guía para participantes',
      heroSubtitle: 'Todo lo que necesitas saber para aprovechar al máximo tu experiencia en ABRELATAM / CONDATOS 2026.',
      sections: {
        whatIs: {
          title: '¿Qué es ABRELATAM / CONDATOS?',
          content: 'ABRELATAM es una desconferencia comunitaria donde la agenda se construye colectivamente. CONDATOS es la conferencia regional con paneles y talleres seleccionados por un comité a partir de un llamado público a propuestas. Juntos conforman el encuentro más importante de la región sobre datos abiertos y tecnología cívica.'
        },
        datesPlace: {
          title: 'Fechas y lugar',
          content: 'El evento se realizará del 7 al 9 de octubre de 2026 en Ciudad de Guatemala, Guatemala. La sede es el Centro Cultural Miguel Ángel Asturias, en el corazón de la Zona 1.'
        },
        audience: {
          title: '¿A quién va dirigido?',
          content: 'El evento es para personas de la sociedad civil, gobierno, academia, sector privado y comunidad tecnológica comprometidas con la apertura de datos, la transparencia y la innovación pública en América.'
        },
        howToArrive: {
          title: 'Cómo llegar',
          content: 'El Centro Cultural Miguel Angel Asturias se encuentra en la 24 Calle 3-81, Zona 1, Ciudad de Guatemala. Puedes llegar en Transmetro, taxi o servicio de ridesharing. Próximamente publicaremos una guía detallada de movilidad.'
        },
        duringEvent: {
          title: 'Durante el evento',
          content: 'Habrá WiFi disponible en todas las salas. Te recomendamos llevar tu computadora o tablet para participar activamente. El evento cuenta con coffee breaks, almuerzo y espacios de networking.'
        },
        networking: {
          title: 'Networking y comunidad',
          content: 'ABRELATAM / CONDATOS es ante todo un espacio de comunidad. Aprovecha los recesos, las actividades sociales y los side events para conectar con otras personas de la región.'
        }
      },
      faqTitle: 'Preguntas frecuentes',
      faqs: {
        registration: {
          q: '¿Necesito registro previo para asistir?',
          a: 'Sí, Abrelatam-ConDatos tiene un formulario de registro que debes completar para asegurar tu participación.'
        },
        free: {
          q: '¿El evento es gratuito?',
          a: 'Sí, el evento es gratuito. Todas las personas interesadas en temas de gobierno abierto y datos abiertos en las Américas están invitadas a participar. Esto incluye a personas que trabajan en gobierno, sociedad civil, academia, sector privado, organizaciones multilaterales, donantes y más.'
        },
        translation: {
          q: '¿Habrá traducción simultánea?',
          a: 'Sí, las sesiones plenarias principales contarán con interpretación español-inglés-portugués.'
        },
        propose: {
          q: '¿Puedo proponer una sesión?',
          a: 'La agenda de Abrelatam-ConDatos se construye de forma colaborativa con la comunidad. Próximamente se abrirá el llamado a propuestas para la agenda.'
        },
        includes: {
          q: '¿Qué incluye la inscripción?',
          a: 'Acceso a todas las sesiones, materiales del evento, coffee breaks y certificado de participación.'
        }
      }
    },
    footer: {
      description: 'Guatemala te espera para la conferencia regional más importante sobre datos abiertos y transparencia.',
      quickLinks: 'Enlaces rápidos',
      aboutEvent: 'Sobre el evento',
      participate: 'Participa',
      event: 'Evento',
      preRegister: 'Registro',
      usefulInfo: 'Información Útil',
      proposeSession: 'Proponer sesión',
      volunteers: 'Voluntarios',
      comingSoon: 'Próximamente',
      preRegisterDesc: 'Asegura tu lugar en ABRELATAM / CONDATOS 2026. Completa el formulario de registro y recibe información sobre novedades del evento.',
      preRegisterButton: 'Formulario de registro',
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
      date: 'Octubre 2026',
      location: 'Ciudad de Guatemala',
      badge: '¡No te lo pierdas!'
    }
  },
  en: {
    slider: {
      slide1: {
        title: 'Guatemala 2026: opening data, opening paths',
        subtitle: 'ABRELATAM / CONDATOS comes to Guatemala City from October 7–9, 2026. Three days to meet, share learnings and strengthen the regional open data and civic tech community.'
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
      preRegister: 'Registration',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
    },
    home: {
      title: 'Guatemala 2026: opening data, opening paths',
      subtitle: 'ABRELATAM / CONDATOS comes to Guatemala City from October 7–9, 2026. Three days to meet, share learnings, and strengthen the regional community of open data and civic technology.',
      venue: 'Miguel Ángel Asturias Cultural Center',
      date: 'October 7, 8 & 9, 2026',
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
      venueCtaNote: 'Register now and be part of the regional open data community.',
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
      history3: 'CONDATOS, in turn, is the conference space that specifically brings together public officials and government decision-makers to discuss public policy, implementation of open data platforms, and best practices in transparency.',
      history4: 'Together, these two spaces bring together audiences from different sectors in one place to work on a shared agenda.',
      history5: 'In 2026, these conferences return to Central America, and Guatemala has the honor of hosting them. It will be a unique opportunity to strengthen the regional open data ecosystem and build bridges among governments, civil society, and the technology sector.',
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
      heroSubtitle: 'October 7–9, 2026 - Guatemala',
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
          content: 'The event will take place from October 7 to 9, 2026 in Guatemala City, Guatemala. The venue is the Miguel Ángel Asturias Cultural Center, in the heart of Zone 1.'
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
          q: 'Do I need to register to attend?',
          a: 'Yes, you must complete your registration to attend the event. Registration is now available on this site.'
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
      event: 'Event',
      preRegister: 'Registration',
      usefulInfo: 'Useful Information',
      proposeSession: 'Propose a session',
      volunteers: 'Volunteers',
      comingSoon: 'Coming soon',
      preRegisterDesc: 'Secure your place at ABRELATAM / CONDATOS 2026. Complete the registration form and join the regional open data community.',
      preRegisterButton: 'Registration form',
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
      date: 'October 2026',
      location: 'Guatemala City',
      badge: "Don't miss it!"
    }
  },
  pt: {
    slider: {
      slide1: {
        title: 'Guatemala 2026: abrir dados, abrir caminhos',
        subtitle: 'ABRELATAM / CONDATOS chega à Cidade da Guatemala de 7 a 9 de outubro de 2026. Três dias para nos encontrar, compartilhar aprendizados e fortalecer a comunidade regional de dados abertos e tecnologia cívica.'
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
      preRegister: 'Registro',
      agendaMenu: 'Agenda',
      agendaPage: 'Agenda',
    },
    home: {
      title: 'Guatemala 2026: abrir dados, abrir caminhos',
      subtitle: 'ABRELATAM / CONDATOS chega à Cidade da Guatemala de 7 a 9 de outubro de 2026. Três dias para nos encontrarmos, compartilhar aprendizados e fortalecer a comunidade regional de dados abertos e tecnologia cívica.',
      venue: 'Centro Cultural Miguel Ángel Asturias',
      date: '7, 8 e 9 de outubro, 2026',
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
      venueCtaNote: 'Registre-se agora e faça parte da comunidade regional de dados abertos.',
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
      history3: 'CONDATOS, por sua vez, é o espaço de conferência que convoca especificamente funcionários públicos e tomadores de decisão governamentais para dialogar sobre políticas públicas, implementação de plataformas de dados abertos e melhores práticas em transparência.',
      history4: 'Juntos, esses dois espaços reúnem em um mesmo lugar público de diferentes setores para trabalhar sobre uma mesma agenda.',
      history5: 'Em 2026, essas conferências retornam à América Central, e a Guatemala tem a honra de recebê-las. Será uma oportunidade única para fortalecer o ecossistema regional de dados abertos e construir pontes entre governos, sociedade civil e setor tecnológico.',
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
      heroSubtitle: '7, 8 e 9 de outubro de 2026 - Guatemala',
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
          content: 'O evento acontecera de 7 a 9 de outubro de 2026 na Cidade da Guatemala, Guatemala. A sede e o Centro Cultural Miguel Ángel Asturias, no coracao da Zona 1.'
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
          q: 'Preciso me registrar para participar?',
          a: 'Sim, voce deve completar seu registro para participar do evento. O registro ja esta disponivel neste site.'
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
      event: 'Evento',
      preRegister: 'Registro',
      usefulInfo: 'Informações Úteis',
      proposeSession: 'Propor sessão',
      volunteers: 'Voluntários',
      comingSoon: 'Em breve',
      preRegisterDesc: 'Garanta seu lugar no ABRELATAM / CONDATOS 2026. Preencha o formulário de registro e faça parte da comunidade regional de dados abertos.',
      preRegisterButton: 'Formulário de registro',
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
      date: 'Outubro 2026',
      location: 'Cidade da Guatemala',
      badge: 'Não perca!'
    }
  }
};
