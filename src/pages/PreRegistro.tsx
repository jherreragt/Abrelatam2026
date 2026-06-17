import PageHero from '../components/PageHero';
import RegistrationForm from '../components/RegistrationForm';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const heroText: Record<Language, { title: string; subtitle: string }> = {
  es: {
    title: 'Registro',
    subtitle: 'Completa el formulario a continuación para registrarte en ABRELATAM / CONDATOS 2026 y asegurar tu lugar en el evento.',
  },
  en: {
    title: 'Registration',
    subtitle: 'Complete the form below to register for ABRELATAM / CONDATOS 2026 and secure your place at the event.',
  },
  pt: {
    title: 'Registro',
    subtitle: 'Preencha o formulário abaixo para se registrar no ABRELATAM / CONDATOS 2026 e garantir seu lugar no evento.',
  },
};

export default function PreRegistro() {
  const { language } = useLanguage();
  const text = heroText[language];

  return (
    <>
      <PageHero
        title={text.title}
        subtitle={text.subtitle}
        backgroundImage={assetPath('v2/slider/AL-51.png')}
      />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <RegistrationForm />
        </div>
      </section>
    </>
  );
}
