import { Download, Mail, FileText, Radio, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const FACTS_URL = 'https://ilda.la/wp-content/uploads/2025/04/Documento_AbreLatam_30_OCT-1.pdf';

const kitItems = [
  { icon: FileText, key: 'release' },
  { icon: FileText, key: 'logos' },
  { icon: FileText, key: 'facts' },
  { icon: Radio, key: 'bios' },
] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Sala de prensa',
    heroSubtitle: 'Recursos, comunicados y materiales para medios de comunicación que cubren ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'Sobre el evento',
    aboutTitle: 'Para medios de comunicación',
    aboutParagraphs: [
      'ABRELATAM y CONDATOS 2026 reunirán en Ciudad de Guatemala a más de 500 personas de toda América Latina y el Caribe para discutir el futuro de los datos abiertos, la transparencia y la rendición de cuentas en la región.',
      'Durante tres días, activistas, funcionarios públicos, desarrolladores, periodistas y académicos compartirán experiencias, presentarán proyectos innovadores y construirán soluciones colaborativas para fortalecer la democracia a través de la apertura de datos.',
      'Esta será la primera vez en varios años que las conferencias regresan a Centroamérica, consolidando a Guatemala como un hub regional de innovación cívica y tecnología para el bien público.',
    ],
    resourcesLabel: 'Recursos',
    kitTitle: 'Kit de prensa',
    kit: {
      release: { title: 'Comunicado de prensa', desc: 'Información oficial sobre el evento para medios de comunicación.', action: 'Descargar PDF', url: null },
      logos: { title: 'Logos e imágenes', desc: 'Logos oficiales del evento en alta resolución y diferentes formatos.', action: 'Descargar ZIP', url: null },
      facts: { title: 'Datos y cifras', desc: 'Estadísticas sobre ediciones anteriores y datos del evento actual.', action: 'Ver documento', url: FACTS_URL },
      bios: { title: 'Biografías de ponentes', desc: 'Información sobre los principales ponentes y panelistas del evento.', action: 'Próximamente', url: null },
    },
    contactTitle: 'Contacto para prensa',
    contactText: 'Para consultas, entrevistas o más información, contacta a nuestro equipo de comunicaciones.',
    contactEmail: 'abrelatam@idatosabiertos.org',
  },
  en: {
    heroTitle: 'Press room',
    heroSubtitle: 'Resources, releases, and materials for media covering ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'About the event',
    aboutTitle: 'For media',
    aboutParagraphs: [
      'ABRELATAM and CONDATOS 2026 will bring together more than 500 people from Latin America and the Caribbean in Guatemala City to discuss the future of open data, transparency, and accountability in the region.',
      'Over three days, activists, public officials, developers, journalists, and academics will share experiences, present innovative projects, and build collaborative solutions to strengthen democracy through open data.',
      'This will be the first time in several years that the conferences return to Central America, consolidating Guatemala as a regional hub for civic innovation and technology for the public good.',
    ],
    resourcesLabel: 'Resources',
    kitTitle: 'Press kit',
    kit: {
      release: { title: 'Press release', desc: 'Official event information for media outlets.', action: 'Download PDF', url: null },
      logos: { title: 'Logos and images', desc: 'Official event logos in high resolution and different formats.', action: 'Download ZIP', url: null },
      facts: { title: 'Facts and figures', desc: 'Statistics from previous editions and information about the current event.', action: 'View document', url: FACTS_URL },
      bios: { title: 'Speaker bios', desc: 'Information about the main speakers and panelists.', action: 'Coming soon', url: null },
    },
    contactTitle: 'Press contact',
    contactText: 'For inquiries, interviews, or more information, contact our communications team.',
    contactEmail: 'abrelatam@idatosabiertos.org',
  },
  pt: {
    heroTitle: 'Sala de imprensa',
    heroSubtitle: 'Recursos, comunicados e materiais para meios de comunicacao que cobrem ABRELATAM / CONDATOS 2026.',
    aboutLabel: 'Sobre o evento',
    aboutTitle: 'Para meios de comunicacao',
    aboutParagraphs: [
      'ABRELATAM e CONDATOS 2026 reunirao na Cidade da Guatemala mais de 500 pessoas de toda a America Latina e Caribe.',
      'Durante tres dias, ativistas, funcionarios publicos, desenvolvedores, jornalistas e academicos compartilharao experiencias e apresentarao projetos inovadores.',
      'Esta sera a primeira vez em varios anos que as conferencias retornam a America Central.',
    ],
    resourcesLabel: 'Recursos',
    kitTitle: 'Kit de imprensa',
    kit: {
      release: { title: 'Comunicado de imprensa', desc: 'Informacao oficial sobre o evento.', action: 'Baixar PDF', url: null },
      logos: { title: 'Logos e imagens', desc: 'Logos oficiais do evento em alta resolucao.', action: 'Baixar ZIP', url: null },
      facts: { title: 'Dados e numeros', desc: 'Estatisticas sobre edicoes anteriores.', action: 'Ver documento', url: FACTS_URL },
      bios: { title: 'Biografias de palestrantes', desc: 'Informacoes sobre os principais palestrantes.', action: 'Em breve', url: null },
    },
    contactTitle: 'Contato para imprensa',
    contactText: 'Para consultas, entrevistas ou mais informacoes, contate nossa equipe de comunicacao.',
    contactEmail: 'abrelatam@idatosabiertos.org',
  },
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

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#329bd0] mb-3">{text.aboutLabel}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#262262]">{text.aboutTitle}</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              {text.aboutParagraphs.map((paragraph: string, index: number) => (
                <p key={paragraph} className={`text-slate-700 leading-relaxed ${index < text.aboutParagraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#329bd0] mb-3">{text.resourcesLabel}</span>
            <h2 className="text-3xl font-bold text-[#262262]">{text.kitTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
            {kitItems.map(({ icon: Icon, key }) => {
              const item = text.kit[key];
              return (
                <div key={key} className="bg-white rounded-2xl p-6 border border-slate-200 card-glow flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#329bd0] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#262262] mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#329bd0] hover:text-[#2789b8] transition-colors"
                      >
                        <ExternalLink size={13} />
                        {item.action}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <Download size={13} />
                        {item.action}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#262262] rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">{text.contactTitle}</h3>
            <p className="text-white/80 text-sm mb-5 leading-relaxed">{text.contactText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href={`mailto:${text.contactEmail}`} className="inline-flex items-center gap-2 text-white hover:text-[#329bd0] font-semibold transition-colors">
                <Mail size={15} /> {text.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
