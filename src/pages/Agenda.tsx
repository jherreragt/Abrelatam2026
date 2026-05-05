import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Bell, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const expectationKeys = ['keynotes', 'workshops', 'panels', 'networking', 'hackathon', 'socialEvents'] as const;

function ComingSoonModal({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const copy = {
    es: {
      tag: 'Próximamente',
      title: 'La agenda está en camino',
      text: 'Estamos preparando una agenda llena de sesiones, talleres y espacios de encuentro. Regístrate para conocer más detalles del evento previo a la convocatoria.',
      placeholder: 'Tu correo electrónico',
      button: 'Notificarme',
      skip: 'Ver la página de todas formas',
      successTitle: '¡Listo! Te avisaremos pronto.',
      successText: 'Recibirás novedades del evento en tu correo.',
      errorRequired: 'Por favor ingresa tu correo electrónico.',
      errorInvalid: 'Por favor ingresa un correo válido.',
    },
    en: {
      tag: 'Coming soon',
      title: 'The agenda is on its way',
      text: 'We are preparing an agenda full of sessions, workshops, and networking spaces. Register to get details about the event before the official call opens.',
      placeholder: 'Your email address',
      button: 'Notify me',
      skip: 'View the page anyway',
      successTitle: 'Done! We will notify you soon.',
      successText: 'You will receive event news in your inbox.',
      errorRequired: 'Please enter your email address.',
      errorInvalid: 'Please enter a valid email address.',
    },
    pt: {
      tag: 'Em breve',
      title: 'A agenda está a caminho',
      text: 'Estamos preparando uma agenda repleta de sessões, workshops e espaços de encontro. Registre-se para conhecer mais detalhes do evento antes da convocatória oficial.',
      placeholder: 'Seu endereço de e-mail',
      button: 'Me avisar',
      skip: 'Ver a página mesmo assim',
      successTitle: 'Pronto! Avisaremos em breve.',
      successText: 'Você receberá novidades do evento no seu e-mail.',
      errorRequired: 'Por favor insira seu endereço de e-mail.',
      errorInvalid: 'Por favor insira um e-mail válido.',
    },
  };

  const t = copy[language];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setError(t.errorRequired);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t.errorInvalid);
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#10184a]/80 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-[#092d7e] via-[#456bdd] to-[#fdcc30]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <div className="px-8 py-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#456bdd]/10 px-4 py-1.5 mb-6">
            <Bell size={13} className="text-[#456bdd]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#456bdd]">{t.tag}</span>
          </div>

          <h2 className="text-2xl font-bold text-[#10184a] dark:text-white mb-4">{t.title}</h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-8">{t.text}</p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <CheckCircle size={40} className="text-[#456bdd]" />
              <p className="font-bold text-slate-900 dark:text-white">{t.successTitle}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder={t.placeholder}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#456bdd]/50 focus:border-[#456bdd] transition"
                />
                {error && <p className="mt-1.5 text-left text-xs text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#456bdd] hover:bg-[#3657c8] text-white font-semibold text-sm py-3 transition-colors"
              >
                {t.button}
              </button>
            </form>
          )}

          <button
            onClick={onClose}
            className="mt-6 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline underline-offset-2 transition-colors"
          >
            {t.skip}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Agenda() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

      <PageHero
        title={t('agendaPage.heroTitle')}
        subtitle={t('agendaPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-44.png')}
      />

      <Section bgColor="gray" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 py-12 text-center shadow-sm md:px-12 md:py-16 dark:bg-slate-900">
          <img src={assetPath('v2/iconos/AL-24.png')} alt="" className="mx-auto mb-5 h-20 w-20 object-contain" />
          <h2 className="mb-7 text-3xl font-bold text-[#282456] md:text-4xl">
            {t('agendaPage.comingSoonTitle')}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {t('agendaPage.comingSoonText1')}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {t('agendaPage.comingSoonText2')}
          </p>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-slate-50 px-6 py-8 text-left dark:bg-slate-800">
            <h3 className="mb-5 text-center text-lg font-bold text-slate-900 dark:text-white">
              {t('agendaPage.expectTitle')}
            </h3>
            <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
              {expectationKeys.map((key) => (
                <div key={key} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{t(`agendaPage.expectations.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:px-20">
            <button
              onClick={() => setShowModal(true)}
              className="w-full rounded-md bg-[#4367e1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3657c8]"
            >
              {t('agendaPage.updatesButton')}
            </button>
            <a
              href="mailto:contacto@abrelatam2026.org"
              className="w-full rounded-md bg-[#4367e1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3657c8] text-center"
            >
              {t('agendaPage.contactButton')}
            </a>
          </div>
        </div>
      </Section>

      <section className="bg-white px-4 py-16 md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl rounded-lg bg-slate-100 px-6 py-14 text-center md:px-12 dark:bg-slate-900">
          <h2 className="mb-3 text-2xl font-bold text-[#10184a] md:text-3xl">
            {t('agendaPage.proposeTitle')}
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-base leading-snug text-[#10184a] dark:text-slate-200">
            {t('agendaPage.proposeText')}
          </p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="min-w-64 rounded-md bg-[#4367e1] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3657c8]">
              {t('agendaPage.callsButton')}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
