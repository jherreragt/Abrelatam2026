import { Download, Mail, FileText, Radio } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const kitItems = [
  { icon: FileText, key: 'release' },
  { icon: FileText, key: 'logos' },
  { icon: FileText, key: 'facts' },
  { icon: Radio, key: 'bios' },
] as const;

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
