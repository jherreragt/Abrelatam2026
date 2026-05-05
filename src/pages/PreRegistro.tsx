import { CheckCircle2, Users, Globe, CalendarCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const GOOGLE_FORM_URL = 'https://forms.gle/hdhZaoH6aM11TKX16';

const benefitItems = [
  { icon: CalendarCheck, key: 'confirmSpot' },
  { icon: Users, key: 'community' },
  { icon: Globe, key: 'access' },
  { icon: CheckCircle2, key: 'included' },
] as const;

const copy: Record<Language, {
  heroTitle: string;
  heroSubtitle: string;
  benefits: Record<typeof benefitItems[number]['key'], { title: string; desc: string }>;
  formTitle: string;
  dateLine: string;
  iframeTitle: string;
  loading: string;
  consent: string;
  openForm: string;
}> = {
  es: {
    heroTitle: 'Registro',
    heroSubtitle: 'Completa el formulario a continuación para registrarte en ABRELATAM / CONDATOS 2026 y asegurar tu lugar en el evento.',
    benefits: {
      confirmSpot: { title: 'Confirma tu lugar', desc: 'Al registrarte aseguras tu participación en el evento más importante de datos abiertos de la región.' },
      community: { title: 'Comunidad regional', desc: 'Conéctate con cientos de personas de América Latina comprometidas con los datos abiertos y la transparencia.' },
      access: { title: 'Acceso completo', desc: 'Participa en paneles, talleres, la desconferencia ABRELATAM y todos los espacios de encuentro del evento.' },
      included: { title: 'Programa incluido', desc: 'Tu registro incluye acceso a todas las sesiones, materiales y actividades durante los tres días del evento.' },
    },
    formTitle: 'Formulario de registro',
    dateLine: 'Ciudad de Guatemala · 7 al 9 de octubre, 2026',
    iframeTitle: 'Formulario de registro ABRELATAM / CONDATOS 2026',
    loading: 'Cargando formulario...',
    consent: 'Al enviar este formulario aceptas recibir comunicaciones sobre el evento. Puedes darte de baja en cualquier momento.',
    openForm: 'Abrir formulario en una pestaña nueva',
  },
  en: {
    heroTitle: 'Registration',
    heroSubtitle: 'Complete the form below to register for ABRELATAM / CONDATOS 2026 and secure your place at the event.',
    benefits: {
      confirmSpot: { title: 'Confirm your spot', desc: 'By registering you secure your participation in the most important open data event in the region.' },
      community: { title: 'Regional community', desc: 'Connect with hundreds of people from Latin America committed to open data and transparency.' },
      access: { title: 'Full access', desc: 'Participate in panels, workshops, the ABRELATAM unconference, and all networking spaces at the event.' },
      included: { title: 'Program included', desc: 'Your registration includes access to all sessions, materials, and activities during the three days of the event.' },
    },
    formTitle: 'Registration form',
    dateLine: 'Guatemala City · October 7–9, 2026',
    iframeTitle: 'ABRELATAM / CONDATOS 2026 registration form',
    loading: 'Loading form...',
    consent: 'By submitting this form, you agree to receive communications about the event. You can unsubscribe at any time.',
    openForm: 'Open form in a new tab',
  },
  pt: {
    heroTitle: 'Registro',
    heroSubtitle: 'Preencha o formulário abaixo para se registrar no ABRELATAM / CONDATOS 2026 e garantir seu lugar no evento.',
    benefits: {
      confirmSpot: { title: 'Confirme seu lugar', desc: 'Ao se registrar, você garante sua participação no evento mais importante de dados abertos da região.' },
      community: { title: 'Comunidade regional', desc: 'Conecte-se com centenas de pessoas da América Latina comprometidas com dados abertos e transparência.' },
      access: { title: 'Acesso completo', desc: 'Participe de painéis, oficinas, da desconferência ABRELATAM e de todos os espaços de encontro do evento.' },
      included: { title: 'Programa incluído', desc: 'Seu registro inclui acesso a todas as sessões, materiais e atividades durante os três dias do evento.' },
    },
    formTitle: 'Formulário de registro',
    dateLine: 'Cidade da Guatemala · 7 a 9 de outubro de 2026',
    iframeTitle: 'Formulário de registro ABRELATAM / CONDATOS 2026',
    loading: 'Carregando formulário...',
    consent: 'Ao enviar este formulário, você aceita receber comunicações sobre o evento. Pode cancelar a inscrição a qualquer momento.',
    openForm: 'Abrir formulário em uma nova aba',
  },
};

export default function PreRegistro() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <>
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-51.png')}
      />

      <section className="bg-slate-50 dark:bg-slate-950 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {benefitItems.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#262460]/10 dark:bg-[#2377b9]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#262460] dark:text-[#2377b9]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{text.benefits[key].title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{text.benefits[key].desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {text.formTitle}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{text.dateLine}</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
              <iframe
                src={GOOGLE_FORM_URL}
                title={text.iframeTitle}
                width="100%"
                height="860"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="block"
              >
                {text.loading}
              </iframe>
            </div>

            <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-4">
              {text.consent}
            </p>
            <p className="mt-3 text-center text-sm">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2377b9] hover:text-[#262460]"
              >
                {text.openForm}
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
