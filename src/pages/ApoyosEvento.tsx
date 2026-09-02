import {
  ClipboardList,
  UtensilsCrossed,
  Building2,
  Users,
  Megaphone,
  Heart,
  Accessibility,
  MoreHorizontal,
  Eye,
  FileCheck,
  Handshake,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';
import { ROUTES } from '../router/routes';

const categoryKeys = [
  'production',
  'food',
  'infrastructure',
  'mobility',
  'communication',
  'community',
  'accessibility',
  'other',
] as const;

const categoryIcons: Record<(typeof categoryKeys)[number], typeof Eye> = {
  production: ClipboardList,
  food: UtensilsCrossed,
  infrastructure: Building2,
  mobility: Users,
  communication: Megaphone,
  community: Heart,
  accessibility: Accessibility,
  other: MoreHorizontal,
};

interface FinancialSupport {
  organization: string;
  amount: number;
}

const supportData: FinancialSupport[] = [
  { organization: 'BANTRAB', amount: 20000 },
  { organization: 'Banco Interamericano de Desarrollo (BID)', amount: 10000 },
  { organization: 'BANRURAL', amount: 10000 },
  { organization: 'Embajada de la República de China (Taiwán)', amount: 10000 },
  { organization: 'Programa de las Naciones Unidas para el Desarrollo (PNUD)', amount: 5000 },
  { organization: 'UNESCO', amount: 5000 },
];

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Apoyos al evento',
    heroSubtitle: 'Conoce los apoyos financieros y en especie que hacen posible ABRELATAM/ConDatos 2026 en Guatemala.',
    intro1: 'ABRELATAM/ConDatos es posible gracias a la colaboración entre instituciones públicas, organismos internacionales, organizaciones de sociedad civil, cooperación internacional y aliados del sector privado.',
    intro2: 'Como parte de nuestro compromiso con la transparencia y la rendición de cuentas, en este espacio publicamos información sobre los apoyos recibidos para la realización de ABRELATAM/ConDatos 2026 en Guatemala.',
    note: 'Esta información se actualizará periódicamente conforme se confirmen nuevos aportes, apoyos en especie y ejecución de recursos.',
    useTitle: '¿Cómo se utilizan los apoyos?',
    useText: 'Los recursos y apoyos recibidos contribuyen a cubrir diferentes componentes necesarios para la realización del encuentro.',
    categories: {
      production: 'Producción y logística del evento',
      food: 'Alimentación y atención a participantes',
      infrastructure: 'Infraestructura y equipamiento',
      mobility: 'Participación y movilidad',
      communication: 'Comunicación y materiales',
      community: 'Actividades de comunidad',
      accessibility: 'Accesibilidad e interpretación',
      other: 'Otros requerimientos operativos',
    },
    commitmentTitle: 'Nuestro compromiso con la transparencia',
    commitment1: 'La organización de ABRELATAM/ConDatos 2026 busca gestionar los recursos bajo principios de transparencia, colaboración y rendición de cuentas.',
    commitment2: 'Los aportes recibidos se destinan exclusivamente a actividades relacionadas con la organización y realización del evento, de acuerdo con las prioridades definidas por el Comité Organizador.',
    principles: {
      transparency: 'Transparencia',
      transparencyDesc: 'Publicación de los apoyos recibidos.',
      accountability: 'Rendición de cuentas',
      accountabilityDesc: 'Seguimiento del uso de los recursos.',
      collaboration: 'Colaboración',
      collaborationDesc: 'Articulación entre instituciones, cooperación, sociedad civil y aliados.',
    },
    tableTitle: 'Apoyos financieros',
    colOrganization: 'Organización',
    colType: 'Tipo de apoyo',
    colAmount: 'Monto',
    colStatus: 'Estado',
    statusConfirmed: 'Confirmado',
    totalLabel: 'Total',
    updateLabel: 'Última actualización: 02/09/2026',
    updateText: 'Los datos publicados en esta página podrán actualizarse conforme se formalicen nuevos apoyos o se complete la ejecución financiera del evento.',
    alliesButton: 'Conoce a nuestros aliados',
    financialSupport: 'Aporte financiero',
  },
  en: {
    heroTitle: 'Event support',
    heroSubtitle: 'Learn about the financial and in-kind support that makes ABRELATAM/ConDatos 2026 in Guatemala possible.',
    intro1: 'ABRELATAM/ConDatos is made possible thanks to the collaboration between public institutions, international organizations, civil society organizations, international cooperation, and private sector allies.',
    intro2: 'As part of our commitment to transparency and accountability, this space publishes information about the support received for the organization of ABRELATAM/ConDatos 2026 in Guatemala.',
    note: 'This information will be updated periodically as new contributions, in-kind support, and resource execution are confirmed.',
    useTitle: 'How is the support used?',
    useText: 'The resources and support received contribute to covering different components necessary for the event.',
    categories: {
      production: 'Event production and logistics',
      food: 'Food and participant services',
      infrastructure: 'Infrastructure and equipment',
      mobility: 'Participation and mobility',
      communication: 'Communication and materials',
      community: 'Community activities',
      accessibility: 'Accessibility and interpretation',
      other: 'Other operational requirements',
    },
    commitmentTitle: 'Our commitment to transparency',
    commitment1: 'The organization of ABRELATAM/ConDatos 2026 seeks to manage resources under principles of transparency, collaboration, and accountability.',
    commitment2: 'The contributions received are destined exclusively for activities related to the organization and execution of the event, in accordance with the priorities defined by the Organizing Committee.',
    principles: {
      transparency: 'Transparency',
      transparencyDesc: 'Publication of the support received.',
      accountability: 'Accountability',
      accountabilityDesc: 'Tracking the use of resources.',
      collaboration: 'Collaboration',
      collaborationDesc: 'Coordination between institutions, cooperation, civil society, and allies.',
    },
    tableTitle: 'Financial support',
    colOrganization: 'Organization',
    colType: 'Type of support',
    colAmount: 'Amount',
    colStatus: 'Status',
    statusConfirmed: 'Confirmed',
    totalLabel: 'Total',
    updateLabel: 'Last updated: 02/09/2026',
    updateText: 'The data published on this page may be updated as new support is formalized or financial execution is completed.',
    alliesButton: 'Meet our allies',
    financialSupport: 'Financial contribution',
  },
  pt: {
    heroTitle: 'Apoios ao evento',
    heroSubtitle: 'Conheça os apoios financeiros e em espécie que tornam possível o ABRELATAM/ConDados 2026 na Guatemala.',
    intro1: 'O ABRELATAM/ConDados é possível graças à colaboração entre instituições públicas, organismos internacionais, organizações da sociedade civil, cooperação internacional e aliados do setor privado.',
    intro2: 'Como parte do nosso compromisso com a transparência e a prestação de contas, neste espaço publicamos informações sobre os apoios recebidos para a realização do ABRELATAM/ConDados 2026 na Guatemala.',
    note: 'Estas informações serão atualizadas periodicamente conforme novos aportes, apoios em espécie e execução de recursos sejam confirmados.',
    useTitle: 'Como são utilizados os apoios?',
    useText: 'Os recursos e apoios recebidos contribuem para cobrir diferentes componentes necessários para a realização do encontro.',
    categories: {
      production: 'Produção e logística do evento',
      food: 'Alimentação e atendimento aos participantes',
      infrastructure: 'Infraestrutura e equipamentos',
      mobility: 'Participação e mobilidade',
      communication: 'Comunicação e materiais',
      community: 'Atividades da comunidade',
      accessibility: 'Acessibilidade e interpretação',
      other: 'Outros requisitos operacionais',
    },
    commitmentTitle: 'Nosso compromisso com a transparência',
    commitment1: 'A organização do ABRELATAM/ConDados 2026 busca gerir os recursos sob princípios de transparência, colaboração e prestação de contas.',
    commitment2: 'Os aportes recebidos se destinam exclusivamente a atividades relacionadas à organização e realização do evento, de acordo com as prioridades definidas pelo Comitê Organizador.',
    principles: {
      transparency: 'Transparência',
      transparencyDesc: 'Publicação dos apoios recebidos.',
      accountability: 'Prestação de contas',
      accountabilityDesc: 'Acompanhamento do uso dos recursos.',
      collaboration: 'Colaboração',
      collaborationDesc: 'Articulação entre instituições, cooperação, sociedade civil e aliados.',
    },
    tableTitle: 'Apoios financeiros',
    colOrganization: 'Organização',
    colType: 'Tipo de apoio',
    colAmount: 'Valor',
    colStatus: 'Status',
    statusConfirmed: 'Confirmado',
    totalLabel: 'Total',
    updateLabel: 'Última atualização: 02/09/2026',
    updateText: 'Os dados publicados nesta página poderão ser atualizados conforme novos apoios sejam formalizados ou a execução financeira do evento seja concluída.',
    alliesButton: 'Conheça nossos aliados',
    financialSupport: 'Aporte financeiro',
  },
};

function formatUSD(amount: number): string {
  return `USD ${amount.toLocaleString('en-US')}`;
}

export default function ApoyosEvento() {
  const { language } = useLanguage();
  const text = copy[language];

  const total = useMemo(() => supportData.reduce((sum, item) => sum + item.amount, 0), []);

  const principleItems = [
    { icon: Eye, title: text.principles.transparency, desc: text.principles.transparencyDesc },
    { icon: FileCheck, title: text.principles.accountability, desc: text.principles.accountabilityDesc },
    { icon: Handshake, title: text.principles.collaboration, desc: text.principles.collaborationDesc },
  ];

  return (
    <>
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-50.png')}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">{text.intro1}</p>
            <p className="text-slate-700 leading-relaxed">{text.intro2}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#329bd0]/10 border border-[#329bd0]/20 rounded-xl p-5 flex gap-3 items-start">
              <Info size={18} className="text-[#329bd0] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">{text.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: How support is used */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#329bd0] mb-3">
              {text.useTitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#262262] mb-4">{text.useTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">{text.useText}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {categoryKeys.map((key) => {
              const Icon = categoryIcons[key];
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-5 border border-slate-200 card-glow text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#329bd0]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-[#329bd0]" />
                  </div>
                  <p className="text-sm font-medium text-[#262262] leading-snug">{text.categories[key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Transparency principles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#262262] to-[#329bd0] rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{text.commitmentTitle}</h2>
                <p className="text-white/90 leading-relaxed mb-3">{text.commitment1}</p>
                <p className="text-white/90 leading-relaxed">{text.commitment2}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {principleItems.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Financial support table */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#262262] mb-3">{text.tableTitle}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-2xl border border-slate-200 overflow-hidden card-glow">
              <div className="h-1 bg-gradient-to-r from-[#262262] to-[#329bd0]" />
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#262262]">{text.colOrganization}</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#262262]">{text.colType}</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[#262262]">{text.colAmount}</th>
                  </tr>
                </thead>
                <tbody>
                  {supportData.map((item, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-700 font-medium">{item.organization}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{text.financialSupport}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 font-semibold text-right">{formatUSD(item.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#262262]">
                    <td colSpan={2} className="px-6 py-4 text-sm font-bold text-white">{text.totalLabel}</td>
                    <td className="px-6 py-4 text-sm font-bold text-white text-right">{formatUSD(total)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {supportData.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="text-sm font-semibold text-[#262262]">{item.organization}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{text.financialSupport}</span>
                    <span className="font-semibold text-slate-700">{formatUSD(item.amount)}</span>
                  </div>
                </div>
              ))}
              <div className="bg-[#262262] rounded-2xl p-5 flex items-center justify-between">
                <span className="text-sm font-bold text-white">{text.totalLabel}</span>
                <span className="text-sm font-bold text-white">{formatUSD(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Update info + allies link */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#262262] mb-3">{text.updateLabel}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">{text.updateText}</p>
            <Link
              to={ROUTES.PATROCINADORES}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#329bd0] text-white text-sm font-semibold hover:bg-[#262262] transition-colors duration-200"
            >
              {text.alliesButton}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
