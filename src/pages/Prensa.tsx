import { Download, Mail, Camera, FileText, ExternalLink, Radio } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const kitItems = [
  { icon: FileText, key: 'release' },
  { icon: Camera, key: 'logos' },
  { icon: FileText, key: 'facts' },
  { icon: Radio, key: 'bios' },
] as const;

const releaseKeys = ['host', 'calls'] as const;
const accreditationKeys = ['access', 'pressArea', 'materials', 'interviews'] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Sala de prensa',
    heroSubtitle: 'Recursos, comunicados y materiales para medios de comunicacion que cubren ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'Sobre el evento',
    aboutTitle: 'Para medios de comunicacion',
    aboutParagraphs: [
      'ABRELATAM y CONDATOS 2026 reuniran en Ciudad de Guatemala a mas de 500 personas de toda America Latina y el Caribe para discutir el futuro de los datos abiertos, la transparencia y la rendicion de cuentas en la region.',
      'Durante cuatro dias, activistas, funcionarios publicos, desarrolladores, periodistas y academicos compartiran experiencias, presentaran proyectos innovadores y construiran soluciones colaborativas para fortalecer la democracia a traves de la apertura de datos.',
      'Esta sera la primera vez en varios anos que las conferencias regresan a Centroamerica, consolidando a Guatemala como un hub regional de innovacion civica y tecnologia para el bien publico.',
    ],
    resourcesLabel: 'Recursos',
    kitTitle: 'Kit de prensa',
    kit: {
      release: { title: 'Comunicado de prensa', desc: 'Informacion oficial sobre el evento para medios de comunicacion.', action: 'Descargar PDF' },
      logos: { title: 'Logos e imagenes', desc: 'Logos oficiales del evento en alta resolucion y diferentes formatos.', action: 'Descargar ZIP' },
      facts: { title: 'Datos y cifras', desc: 'Estadisticas sobre ediciones anteriores y datos del evento actual.', action: 'Ver documento' },
      bios: { title: 'Biografias de ponentes', desc: 'Informacion sobre los principales ponentes y panelistas del evento.', action: 'Proximamente' },
    },
    accreditationLabel: 'Acreditacion',
    accreditationTitle: 'Acreditacion de prensa',
    accreditationIntro: 'Ofrecemos acreditacion gratuita para periodistas y medios interesados en cubrir el evento.',
    accreditationIncludes: 'La acreditacion incluye los siguientes beneficios para medios acreditados:',
    accreditation: {
      access: 'Acceso completo a todas las sesiones plenarias y paneles',
      pressArea: 'Zona exclusiva de prensa con WiFi y espacio de trabajo',
      materials: 'Materiales de prensa y actualizaciones del programa',
      interviews: 'Oportunidades para entrevistar a ponentes y organizadores',
    },
    requirementsLabel: 'Requisitos:',
    requirements: 'Debes ser periodista activo de un medio reconocido (digital, impreso, radio o TV). Se requiere carta del medio que respalde tu solicitud y ejemplos de trabajos publicados.',
    requestButton: 'Solicitar acreditacion',
    releasesLabel: 'Comunicados',
    releasesTitle: 'Comunicados recientes',
    releases: {
      host: { date: '15 de diciembre, 2025', title: 'Guatemala sera sede de ABRELATAM / CONDATOS 2026', excerpt: 'Las conferencias regionales mas importantes sobre datos abiertos regresan a Centroamerica para su edicion 2026...', available: true },
      calls: { date: 'Proximamente', title: 'Apertura de convocatorias para ponencias', excerpt: 'Comunicado disponible proximamente...', available: false },
    },
    readMore: 'Leer mas',
    comingSoon: 'Proximamente',
    contactTitle: 'Contacto para prensa',
    contactText: 'Para consultas, entrevistas o mas informacion, contacta a nuestro equipo de comunicaciones.',
  },
  en: {
    heroTitle: 'Press room',
    heroSubtitle: 'Resources, releases, and materials for media covering ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'About the event',
    aboutTitle: 'For media',
    aboutParagraphs: [
      'ABRELATAM and CONDATOS 2026 will bring together more than 500 people from Latin America and the Caribbean in Guatemala City to discuss the future of open data, transparency, and accountability in the region.',
      'Over four days, activists, public officials, developers, journalists, and academics will share experiences, present innovative projects, and build collaborative solutions to strengthen democracy through open data.',
      'This will be the first time in several years that the conferences return to Central America, consolidating Guatemala as a regional hub for civic innovation and technology for the public good.',
    ],
    resourcesLabel: 'Resources',
    kitTitle: 'Press kit',
    kit: {
      release: { title: 'Press release', desc: 'Official event information for media outlets.', action: 'Download PDF' },
      logos: { title: 'Logos and images', desc: 'Official event logos in high resolution and different formats.', action: 'Download ZIP' },
      facts: { title: 'Facts and figures', desc: 'Statistics from previous editions and information about the current event.', action: 'View document' },
      bios: { title: 'Speaker bios', desc: 'Information about the main speakers and panelists.', action: 'Coming soon' },
    },
    accreditationLabel: 'Accreditation',
    accreditationTitle: 'Press accreditation',
    accreditationIntro: 'We offer free accreditation for journalists and media interested in covering the event.',
    accreditationIncludes: 'Accreditation includes the following benefits for accredited media:',
    accreditation: {
      access: 'Full access to all plenary sessions and panels',
      pressArea: 'Exclusive press area with WiFi and workspace',
      materials: 'Press materials and program updates',
      interviews: 'Opportunities to interview speakers and organizers',
    },
    requirementsLabel: 'Requirements:',
    requirements: 'You must be an active journalist from a recognized media outlet (digital, print, radio, or TV). A letter from your outlet and examples of published work are required.',
    requestButton: 'Request accreditation',
    releasesLabel: 'Releases',
    releasesTitle: 'Recent releases',
    releases: {
      host: { date: 'December 15, 2025', title: 'Guatemala will host ABRELATAM / CONDATOS 2026', excerpt: 'The region\'s most important open data conferences return to Central America for the 2026 edition...', available: true },
      calls: { date: 'Coming soon', title: 'Call for talks opens soon', excerpt: 'Release available soon...', available: false },
    },
    readMore: 'Read more',
    comingSoon: 'Coming soon',
    contactTitle: 'Press contact',
    contactText: 'For inquiries, interviews, or more information, contact our communications team.',
  },
  pt: {
    heroTitle: 'Sala de imprensa',
    heroSubtitle: 'Recursos, comunicados e materiais para meios de comunicacao que cobrem ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'Sobre o evento',
    aboutTitle: 'Para meios de comunicacao',
    aboutParagraphs: [
      'ABRELATAM e CONDATOS 2026 reunirao na Cidade da Guatemala mais de 500 pessoas de toda a America Latina e Caribe para discutir o futuro dos dados abertos, transparencia e prestacao de contas na regiao.',
      'Durante quatro dias, ativistas, funcionarios publicos, desenvolvedores, jornalistas e academicos compartilharao experiencias, apresentarao projetos inovadores e construirao solucoes colaborativas para fortalecer a democracia por meio da abertura de dados.',
      'Esta sera a primeira vez em varios anos que as conferencias retornam a America Central, consolidando a Guatemala como um hub regional de inovacao civica e tecnologia para o bem publico.',
    ],
    resourcesLabel: 'Recursos',
    kitTitle: 'Kit de imprensa',
    kit: {
      release: { title: 'Comunicado de imprensa', desc: 'Informacao oficial sobre o evento para meios de comunicacao.', action: 'Baixar PDF' },
      logos: { title: 'Logos e imagens', desc: 'Logos oficiais do evento em alta resolucao e diferentes formatos.', action: 'Baixar ZIP' },
      facts: { title: 'Dados e numeros', desc: 'Estatisticas sobre edicoes anteriores e dados do evento atual.', action: 'Ver documento' },
      bios: { title: 'Biografias de palestrantes', desc: 'Informacoes sobre os principais palestrantes e painelistas do evento.', action: 'Em breve' },
    },
    accreditationLabel: 'Credenciamento',
    accreditationTitle: 'Credenciamento de imprensa',
    accreditationIntro: 'Oferecemos credenciamento gratuito para jornalistas e meios interessados em cobrir o evento.',
    accreditationIncludes: 'O credenciamento inclui os seguintes beneficios para meios credenciados:',
    accreditation: {
      access: 'Acesso completo a todas as sessoes plenarias e paineis',
      pressArea: 'Area exclusiva de imprensa com WiFi e espaco de trabalho',
      materials: 'Materiais de imprensa e atualizacoes do programa',
      interviews: 'Oportunidades para entrevistar palestrantes e organizadores',
    },
    requirementsLabel: 'Requisitos:',
    requirements: 'Voce deve ser jornalista ativo de um meio reconhecido (digital, impresso, radio ou TV). E necessaria carta do meio e exemplos de trabalhos publicados.',
    requestButton: 'Solicitar credenciamento',
    releasesLabel: 'Comunicados',
    releasesTitle: 'Comunicados recentes',
    releases: {
      host: { date: '15 de dezembro de 2025', title: 'Guatemala sera sede do ABRELATAM / CONDATOS 2026', excerpt: 'As conferencias regionais mais importantes sobre dados abertos retornam a America Central para a edicao 2026...', available: true },
      calls: { date: 'Em breve', title: 'Abertura de chamadas para palestras', excerpt: 'Comunicado disponivel em breve...', available: false },
    },
    readMore: 'Ler mais',
    comingSoon: 'Em breve',
    contactTitle: 'Contato para imprensa',
    contactText: 'Para consultas, entrevistas ou mais informacoes, contate nossa equipe de comunicacao.',
  },
};

const colorMap: Record<string, string> = {
  brand: 'bg-[#456bdd] text-white',
};

export default function Prensa() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <>
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-52.png')}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-primary">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">{text.aboutLabel}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">{text.aboutTitle}</h2>
            </div>
            <div className="bg-primary/5 dark:bg-primary/80 rounded-2xl p-8 border border-primary/10 dark:border-secondary/30">
              {text.aboutParagraphs.map((paragraph: string, index: number) => (
                <p key={paragraph} className={`text-primary/80 dark:text-white/80 leading-relaxed ${index < text.aboutParagraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">{text.resourcesLabel}</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white">{text.kitTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
            {kitItems.map(({ icon: Icon, key }) => {
              const item = text.kit[key];
              return (
                <div key={key} className="bg-white dark:bg-primary/80 rounded-2xl p-6 border border-primary/10 dark:border-secondary/30 card-glow flex gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap.brand}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-primary/70 dark:text-secondary/80 leading-relaxed mb-3">{item.desc}</p>
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-secondary hover:text-secondary transition-colors">
                      <Download size={13} />
                      {item.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">{text.accreditationLabel}</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-3">{text.accreditationTitle}</h2>
            <p className="text-secondary dark:text-secondary/80 text-sm max-w-xl mx-auto">{text.accreditationIntro}</p>
          </div>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-white dark:bg-primary/80 rounded-2xl border border-primary/10 dark:border-secondary/30 overflow-hidden card-glow">
              <div className="h-1.5 bg-gradient-to-r from-primary to-[#456bdd]" />
              <div className="p-8">
                <p className="text-primary/80 dark:text-white/80 text-sm leading-relaxed mb-6">{text.accreditationIncludes}</p>
                <ul className="space-y-3 mb-7">
                  {accreditationKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                      <span className="text-sm text-primary/80 dark:text-white/80">{text.accreditation[key]}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/10 dark:bg-primary/80 border border-secondary/20 dark:border-secondary/30 rounded-xl p-4 mb-6">
                  <p className="text-xs text-primary/70 dark:text-secondary/80 leading-relaxed">
                    <span className="font-semibold text-primary dark:text-white/85">{text.requirementsLabel}</span> {text.requirements}
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#456bdd] hover:bg-[#092d7e] text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
                  <ExternalLink size={15} />
                  {text.requestButton}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">{text.releasesLabel}</span>
            <h2 className="text-3xl font-bold text-primary dark:text-white">{text.releasesTitle}</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto mb-20">
            {releaseKeys.map((key) => {
              const release = text.releases[key];
              return (
                <div key={key} className="bg-white dark:bg-primary/80 rounded-2xl p-6 border border-primary/10 dark:border-secondary/30 card-glow flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-secondary/80 mb-1.5">{release.date}</p>
                    <h3 className="font-bold text-primary dark:text-white mb-1.5">{release.title}</h3>
                    <p className="text-sm text-primary/70 dark:text-secondary/80">{release.excerpt}</p>
                  </div>
                  {release.available ? (
                    <button className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-secondary hover:text-secondary transition-colors whitespace-nowrap">
                      {text.readMore} <ExternalLink size={12} />
                    </button>
                  ) : (
                    <span className="flex-shrink-0 text-xs text-secondary/80 bg-primary/10 dark:bg-primary/70 px-3 py-1 rounded-full whitespace-nowrap">{text.comingSoon}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#092d7e] dark:bg-[#092d7e] rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-secondary/100/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">{text.contactTitle}</h3>
            <p className="text-white text-sm mb-5 leading-relaxed">{text.contactText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="mailto:prensa@abrelatam.org" className="inline-flex items-center gap-2 text-white hover:text-secondary/80 font-semibold transition-colors">
                <Mail size={15} /> prensa@abrelatam.org
              </a>
              <span className="hidden sm:block text-primary/70">|</span>
              <span className="text-white">WhatsApp: +502 1234-5678</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
