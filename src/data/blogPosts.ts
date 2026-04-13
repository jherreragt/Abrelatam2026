export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: number;
  category: string;
  coverImage: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'abrelatam-condatos-2026-guatemala',
    title: 'ABRELATAM/CONDATOS 2026 llega a Guatemala: todo lo que necesitas saber',
    excerpt: 'Este octubre, Ciudad de Guatemala será el epicentro del debate sobre datos abiertos, transparencia y tecnología cívica en América Latina. Te contamos los detalles del evento más esperado del año.',
    content: `
<p>Después de un proceso de selección riguroso y participativo, Ciudad de Guatemala fue elegida como sede de ABRELATAM/CONDATOS 2026. Del 7 al 9 de octubre, el Centro Cultural Miguel Ángel Asturias abrirá sus puertas para albergar a más de 800 participantes de toda la región.</p>

<h2>¿Por qué Guatemala?</h2>
<p>Guatemala representa un momento clave en la historia regional del gobierno abierto. Con iniciativas locales de datos abiertos en pleno crecimiento y una sociedad civil activa, el país ofrece el contexto perfecto para profundizar en los debates que marcarán la agenda de la región en los próximos años.</p>
<p>La comunidad local de datos y tecnología cívica ha trabajado arduamente para hacer posible este encuentro. Organizaciones como Acción Ciudadana, el Instituto de Investigación y Proyección sobre el Estado, y decenas de colectivos digitales forman parte del equipo anfitrión.</p>

<h2>El programa</h2>
<p>El evento se estructurará en tres días con formatos complementarios:</p>
<ul>
  <li><strong>7 de octubre – ABRELATAM:</strong> Jornada de construcción colectiva en formato desconferencia, donde la agenda la proponen los propios participantes al inicio del día.</li>
  <li><strong>8 y 9 de octubre – CONDATOS:</strong> Conferencia con paneles, talleres, presentaciones y espacios de networking.</li>
</ul>

<h2>Temas centrales</h2>
<p>Este año, la conversación girará en torno a cinco ejes temáticos:</p>
<ol>
  <li>Inteligencia artificial, datos y democracia</li>
  <li>Financiamiento climático y transparencia</li>
  <li>Datos para la justicia social</li>
  <li>Infraestructuras de datos en América Latina</li>
  <li>Periodismo de datos e investigación colaborativa</li>
</ol>

<h2>Cómo participar</h2>
<p>Las convocatorias para ponencias, talleres y becas de participación estarán abiertas próximamente. Te recomendamos estar atento a nuestros canales oficiales y registrarte en la lista de interés para recibir notificaciones.</p>
<p>La participación en ABRELATAM es abierta y gratuita para todos los asistentes. CONDATOS tiene una tarifa simbólica de registro con opciones de descuento para estudiantes, organizaciones de la sociedad civil y personas de países de renta baja.</p>
    `,
    author: 'Equipo ABRELATAM',
    authorRole: 'Organización',
    authorAvatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-03-15',
    readTime: 5,
    category: 'Anuncio',
    coverImage: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Guatemala', 'CONDATOS', 'ABRELATAM', 'Datos Abiertos']
  },
  {
    id: '2',
    slug: 'convocatoria-ponencias-abierta',
    title: 'Abrimos la convocatoria de ponencias y talleres para CONDATOS 2026',
    excerpt: 'Tienes una idea, un proyecto o una experiencia que compartir con la comunidad latinoamericana de datos abiertos. Esta es tu oportunidad. La convocatoria estará abierta hasta el 30 de junio.',
    content: `
<p>Hoy abrimos formalmente la convocatoria para propuestas de ponencias, talleres y presentaciones relámpago para CONDATOS 2026. Buscamos voces diversas, perspectivas críticas y proyectos concretos que enriquezcan la conversación regional.</p>

<h2>¿Qué tipo de propuestas buscamos?</h2>
<p>Aceptamos propuestas en tres formatos:</p>
<ul>
  <li><strong>Ponencias individuales o en panel (45 min):</strong> Presentaciones sobre investigación, casos de uso, análisis críticos o propuestas de política pública relacionadas con datos abiertos.</li>
  <li><strong>Talleres participativos (90 min):</strong> Espacios de aprendizaje práctico donde los asistentes trabajen con herramientas, metodologías o datasets reales.</li>
  <li><strong>Presentaciones relámpago (5 min):</strong> Propuestas cortas e impactantes para compartir proyectos, herramientas o hallazgos de manera concisa.</li>
</ul>

<h2>Criterios de selección</h2>
<p>Un comité diverso de selección, compuesto por miembros de la comunidad de toda la región, evaluará las propuestas con base en:</p>
<ol>
  <li>Relevancia para los ejes temáticos del evento</li>
  <li>Diversidad geográfica y de perfiles</li>
  <li>Perspectivas subrepresentadas en la conversación sobre datos</li>
  <li>Calidad y originalidad de la propuesta</li>
  <li>Potencial de impacto en la comunidad</li>
</ol>

<h2>Cómo postular</h2>
<p>Completa el formulario de postulación antes del <strong>30 de junio de 2026</strong>. Las propuestas pueden presentarse en español, portugués o inglés. Los resultados serán comunicados en agosto.</p>
<p>Si tienes dudas sobre el proceso, escríbenos a ponencias@condatos2026.org o únete a nuestra sesión de preguntas y respuestas el próximo 15 de abril.</p>
    `,
    author: 'Comité de Programa',
    authorRole: 'CONDATOS 2026',
    authorAvatar: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-03-28',
    readTime: 4,
    category: 'Convocatoria',
    coverImage: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Convocatoria', 'Ponencias', 'Talleres', 'Participación']
  },
  {
    id: '3',
    slug: 'becas-participacion-2026',
    title: 'Becas de participación: apoyamos a 150 personas para asistir al evento',
    excerpt: 'Sabemos que las barreras económicas limitan quién puede participar en estos espacios. Por eso, este año ofrecemos 150 becas que cubren transporte, alojamiento y acreditación para personas de toda la región.',
    content: `
<p>La diversidad de voces es el corazón de ABRELATAM/CONDATOS. Para garantizar que el acceso económico no sea una barrera, lanzamos nuestro programa de becas más ambicioso hasta la fecha: 150 apoyos para personas de toda América Latina y el Caribe.</p>

<h2>Tipos de becas disponibles</h2>
<p>Ofrecemos tres modalidades:</p>
<ul>
  <li><strong>Beca completa:</strong> Cubre vuelo internacional o terrestre, alojamiento por 4 noches y acreditación completa. (50 becas)</li>
  <li><strong>Beca de alojamiento:</strong> Cubre alojamiento por 4 noches y acreditación. (60 becas)</li>
  <li><strong>Beca de acreditación:</strong> Cubre el costo de registro al evento. (40 becas)</li>
</ul>

<h2>¿A quién va dirigida?</h2>
<p>El programa prioriza personas que:</p>
<ul>
  <li>Trabajan con datos en organizaciones de la sociedad civil, periodismo o academia</li>
  <li>Provienen de comunidades subrepresentadas en el ecosistema tecnológico</li>
  <li>Son de países con menos representación histórica en el evento</li>
  <li>Demuestran cómo su participación tendrá impacto en sus comunidades</li>
</ul>

<h2>Proceso de solicitud</h2>
<p>El formulario de solicitud estará disponible hasta el <strong>15 de mayo de 2026</strong>. El proceso es sencillo: cuéntanos quién eres, qué haces y por qué quieres participar. No necesitas ser experto ni tener años de experiencia.</p>
<p>Las notificaciones se enviarán en junio, con tiempo suficiente para gestionar visas y logística de viaje.</p>

<h2>Financiamiento</h2>
<p>Este programa de becas es posible gracias al apoyo de organizaciones aliadas de la región. Si tu organización quiere contribuir al fondo de becas, escríbenos a becas@condatos2026.org.</p>
    `,
    author: 'Programa de Becas',
    authorRole: 'ABRELATAM/CONDATOS',
    authorAvatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-04-02',
    readTime: 4,
    category: 'Becas',
    coverImage: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Becas', 'Inclusión', 'Diversidad', 'Acceso']
  },
  {
    id: '4',
    slug: 'ia-datos-democracia-debate',
    title: 'IA, datos y democracia: el debate que no podemos postergar',
    excerpt: 'La inteligencia artificial está reconfigurando el poder en América Latina. ¿Qué papel juegan los datos abiertos en este nuevo escenario? Un adelanto del panel que más expectativa genera en CONDATOS 2026.',
    content: `
<p>La proliferación de sistemas de inteligencia artificial en servicios públicos, procesos electorales y plataformas de información plantea desafíos inéditos para la democracia latinoamericana. En CONDATOS 2026, dedicaremos un espacio central a este debate.</p>

<h2>El problema de la caja negra</h2>
<p>Cuando los algoritmos deciden quién recibe un beneficio social, qué información circula en redes sociales o cómo se asignan recursos públicos, la transparencia se convierte en una exigencia democrática fundamental. Sin embargo, la mayoría de los sistemas de IA en uso en la región funcionan como cajas negras: sus criterios de decisión son inaccesibles para la ciudadanía y, muchas veces, para las propias instituciones que los controlan.</p>

<h2>Datos abiertos como contrapeso</h2>
<p>La apertura de datos es una de las herramientas más poderosas para auditar estos sistemas. Cuando los conjuntos de datos utilizados para entrenar modelos están disponibles públicamente, cuando los contratos de adquisición de tecnología son accesibles, cuando los indicadores de desempeño de los sistemas pueden ser verificados por actores externos, el poder se redistribuye.</p>
<p>Pero no basta con publicar datos. Necesitamos capacidades técnicas en la sociedad civil, marcos regulatorios adecuados y compromisos institucionales que vayan más allá de los ejercicios simbólicos de transparencia.</p>

<h2>Lo que discutiremos en octubre</h2>
<p>El panel "IA, datos y democracia" reunirá a investigadoras, activistas digitales, funcionarias públicas y especialistas en regulación de tecnología de seis países de la región. Abordaremos:</p>
<ul>
  <li>Casos concretos de uso de IA en servicios públicos y sus implicancias</li>
  <li>Iniciativas de auditoría algorítmica desde la sociedad civil</li>
  <li>Marcos regulatorios emergentes en la región</li>
  <li>El rol de los datos abiertos en la rendición de cuentas algorítmica</li>
</ul>
<p>Si quieres participar como ponente en este panel, incluye esta temática en tu propuesta a través de la convocatoria abierta.</p>
    `,
    author: 'Lucía Fernández',
    authorRole: 'Investigadora, Datos y Política',
    authorAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-04-05',
    readTime: 6,
    category: 'Reflexión',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Inteligencia Artificial', 'Democracia', 'Transparencia', 'Regulación']
  },
  {
    id: '5',
    slug: 'sede-centro-cultural-asturias',
    title: 'Conoce la sede: el Centro Cultural Miguel Ángel Asturias',
    excerpt: 'Obra maestra del arquitecto Efraín Recinos, el Centro Cultural Miguel Ángel Asturias es uno de los complejos culturales más extraordinarios de América Latina. Así lucirá CONDATOS 2026.',
    content: `
<p>Cuando el comité organizador visitó el Centro Cultural Miguel Ángel Asturias por primera vez, la decisión fue inmediata. No hay en Guatemala —y quizás en toda la región— un espacio que combine con tanta fuerza la historia, la arquitectura y la capacidad técnica para un evento de esta magnitud.</p>

<h2>Una obra monumental</h2>
<p>Diseñado por el arquitecto e ingeniero Efraín Recinos, el complejo fue inaugurado en 1978 y es considerado una de las obras arquitectónicas más importantes de América Central. Su teatro al aire libre, con forma de jaguar según la perspectiva aérea, y su teatro nacional, revestido de mosaicos que evocan la cosmogonía maya, convierten cada rincón en una experiencia cultural.</p>

<h2>Capacidad y logística</h2>
<p>Para CONDATOS 2026, utilizaremos:</p>
<ul>
  <li><strong>Gran Sala:</strong> Plenarias y sesiones inaugurales (capacidad: 2,000 personas)</li>
  <li><strong>Salones del Centro de Convenciones:</strong> Panels y talleres simultáneos (8 salas de 50-150 personas)</li>
  <li><strong>Plaza exterior:</strong> Área de exposiciones, networking y food court</li>
  <li><strong>Teatro de Cámara:</strong> Presentaciones relámpago y eventos especiales</li>
</ul>

<h2>Cómo llegar</h2>
<p>El Centro Cultural está ubicado en el Centro Histórico de Ciudad de Guatemala, a 20 minutos del Aeropuerto Internacional La Aurora. Habrá servicio de transporte gratuito desde los hoteles oficiales del evento.</p>
<p>Para quienes lleguen en transporte público, la parada del Transmetro más cercana está a 5 minutos caminando.</p>

<h2>Accesibilidad</h2>
<p>El recinto cuenta con rampas de acceso, baños adaptados y señalética en braille. Si tienes necesidades de accesibilidad específicas, contáctanos para coordinar los apoyos necesarios.</p>
    `,
    author: 'Comité Local',
    authorRole: 'Guatemala 2026',
    authorAvatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-04-07',
    readTime: 3,
    category: 'Sede',
    coverImage: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Sede', 'Guatemala', 'Logística', 'Accesibilidad']
  },
  {
    id: '6',
    slug: 'datos-climaticos-transparencia-region',
    title: 'Datos climáticos y transparencia: la deuda pendiente de América Latina',
    excerpt: 'El financiamiento climático fluye hacia la región, pero ¿quién controla los datos? Un análisis sobre la opacidad en los sistemas de información ambiental y las iniciativas que buscan cambiarla.',
    content: `
<p>América Latina recibirá en los próximos diez años más de 200 mil millones de dólares en financiamiento climático. Sin embargo, los sistemas de datos que deberían permitir auditar ese flujo de recursos son, en su mayoría, fragmentados, inconsistentes y poco accesibles para la ciudadanía.</p>

<h2>El problema de la fragmentación</h2>
<p>Cada país tiene sus propios sistemas de registro de emisiones, sus propias métricas de biodiversidad, sus propios indicadores de vulnerabilidad climática. Cuando los datos no son comparables ni interoperables, la rendición de cuentas se vuelve casi imposible.</p>
<p>Organizaciones de la sociedad civil llevan años alertando sobre esta brecha. Proyectos como el Open Climate Data Hub han dado pasos importantes, pero aún estamos lejos de contar con infraestructuras de datos climáticos verdaderamente abiertas y comparables a nivel regional.</p>

<h2>Iniciativas que marcan el camino</h2>
<p>Hay, sin embargo, razones para el optimismo. En los últimos tres años han surgido iniciativas notables:</p>
<ul>
  <li>El Portal de Datos Climáticos de la CEPAL, que agrega indicadores de 22 países</li>
  <li>La Red de Periodismo de Datos Climáticos, que usa datos abiertos para investigaciones transfronterizas</li>
  <li>Iniciativas locales de monitoreo ciudadano de calidad del aire en ciudades como São Paulo, Bogotá y Ciudad de México</li>
</ul>

<h2>El debate en CONDATOS 2026</h2>
<p>Este será uno de los temas centrales del evento. Queremos explorar no solo los problemas técnicos de interoperabilidad, sino también las dimensiones políticas: ¿por qué algunos Estados se resisten a abrir sus datos climáticos? ¿Qué intereses están en juego? ¿Cómo construir coaliciones para impulsar la apertura?</p>
<p>Si trabajas en esta área y quieres contribuir al debate, la convocatoria de ponencias está abierta hasta el 30 de junio.</p>
    `,
    author: 'Rodrigo Sánchez',
    authorRole: 'Analista de Datos Ambientales',
    authorAvatar: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2026-04-08',
    readTime: 5,
    category: 'Análisis',
    coverImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Clima', 'Transparencia', 'Datos Ambientales', 'Financiamiento']
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRecentPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
