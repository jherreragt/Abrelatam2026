import { ClipboardList, CheckCircle2, Users, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const GOOGLE_FORM_URL = 'https://forms.gle/hdhZaoH6aM11TKX16';

const benefitItems = [
  { icon: ClipboardList, key: 'saveSpot' },
  { icon: Users, key: 'community' },
  { icon: Globe, key: 'updates' },
  { icon: CheckCircle2, key: 'free' },
] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Pre-registro',
    heroSubtitle: 'Completa el formulario a continuacion y te contactaremos cuando se abra el registro oficial del evento.',
    benefits: {
      saveSpot: { title: 'Reserva tu lugar', desc: 'Se de las primeras personas en confirmar tu interes y recibir notificaciones prioritarias cuando abra el registro oficial.' },
      community: { title: 'Comunidad global', desc: 'Conectate con cientos de personas de la region comprometidas con los datos abiertos y la transparencia.' },
      updates: { title: 'Informacion actualizada', desc: 'Recibiras noticias, agenda y convocatorias directamente en tu correo antes que nadie.' },
      free: { title: 'Sin compromiso', desc: 'El pre-registro es gratuito y no implica pago. Podras completar tu inscripcion oficial cuando se habilite.' },
    },
    formTitle: 'Completa el formulario',
    dateLine: 'Ciudad de Guatemala - 7 al 9 de octubre, 2026',
    iframeTitle: 'Formulario de pre-registro ABRELATAM / CONDATOS 2026',
    loading: 'Cargando formulario...',
    consent: 'Al enviar este formulario aceptas recibir comunicaciones sobre el evento. Puedes darte de baja en cualquier momento.',
    openForm: 'Abrir formulario en una pestana nueva',
  },
  en: {
    heroTitle: 'Pre-registration',
    heroSubtitle: 'Complete the form below and we will contact you when official event registration opens.',
    benefits: {
      saveSpot: { title: 'Save your spot', desc: 'Be among the first to confirm your interest and receive priority notifications when official registration opens.' },
      community: { title: 'Global community', desc: 'Connect with hundreds of people across the region committed to open data and transparency.' },
      updates: { title: 'Updated information', desc: 'Receive news, agenda updates, and calls directly in your inbox before anyone else.' },
      free: { title: 'No commitment', desc: 'Pre-registration is free and does not require payment. You can complete official registration once it opens.' },
    },
    formTitle: 'Complete the form',
    dateLine: 'Guatemala City - October 7-9, 2026',
    iframeTitle: 'ABRELATAM / CONDATOS 2026 pre-registration form',
    loading: 'Loading form...',
    consent: 'By submitting this form, you agree to receive communications about the event. You can unsubscribe at any time.',
    openForm: 'Open form in a new tab',
  },
  pt: {
    heroTitle: 'Pre-registro',
    heroSubtitle: 'Preencha o formulario abaixo e entraremos em contato quando o registro oficial do evento for aberto.',
    benefits: {
      saveSpot: { title: 'Reserve seu lugar', desc: 'Esteja entre as primeiras pessoas a confirmar interesse e receber notificacoes prioritarias quando o registro oficial abrir.' },
      community: { title: 'Comunidade global', desc: 'Conecte-se com centenas de pessoas da regiao comprometidas com dados abertos e transparencia.' },
      updates: { title: 'Informacoes atualizadas', desc: 'Receba noticias, agenda e chamadas diretamente no seu email antes de todo mundo.' },
      free: { title: 'Sem compromisso', desc: 'O pre-registro e gratuito e nao implica pagamento. Voce podera completar sua inscricao oficial quando for habilitada.' },
    },
    formTitle: 'Preencha o formulario',
    dateLine: 'Cidade da Guatemala - 7 a 9 de outubro de 2026',
    iframeTitle: 'Formulario de pre-registro ABRELATAM / CONDATOS 2026',
    loading: 'Carregando formulario...',
    consent: 'Ao enviar este formulario, voce aceita receber comunicacoes sobre o evento. Voce pode cancelar a inscricao a qualquer momento.',
    openForm: 'Abrir formulario em uma nova aba',
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
        backgroundImage={assetPath('v2/slider/AL-46.png')}
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
