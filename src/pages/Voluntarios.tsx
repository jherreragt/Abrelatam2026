import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  Mail,
  ArrowRight,
  HandHeart,
  Lightbulb,
  Wrench,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';
import { useSEO } from '../hooks/useSEO';

const areas = [
  {
    icon: Users,
    key: 'logistics',
  },
  {
    icon: Wrench,
    key: 'technical',
  },
  {
    icon: Lightbulb,
    key: 'sessions',
  },
  {
    icon: HandHeart,
    key: 'hospitality',
  },
] as const;

const benefits = [
  { icon: CheckCircle2, key: 'benefit1' },
  { icon: CheckCircle2, key: 'benefit2' },
  { icon: CheckCircle2, key: 'benefit3' },
  { icon: CheckCircle2, key: 'benefit4' },
] as const;

const requirements = [
  { icon: Clock, key: 'req1' },
  { icon: Clock, key: 'req2' },
  { icon: Clock, key: 'req3' },
] as const;

const VOLUNTEER_FORM_URL = 'https://forms.gle/5hJPqobErW7gZsSu6';
const CONTACT_EMAIL = 'abrelatam@idatosabiertos.org';

export default function Voluntarios() {
  const { t } = useLanguage();
  useSEO();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        title={t('voluntariosPage.heroTitle')}
        subtitle={t('voluntariosPage.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-48.png')}
        icon={
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <Heart size={40} className="text-white" />
          </div>
        }
      />

      {/* Intro */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={24} className="text-[#329bd0]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#329bd0]">
              {t('nav.volunteers')}
            </span>
          </div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#262262] md:text-4xl">
            {t('voluntariosPage.introTitle')}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>{t('voluntariosPage.introText1')}</p>
            <p>{t('voluntariosPage.introText2')}</p>
          </div>
        </div>
      </section>

      {/* Áreas de voluntariado */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="areas">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#262262] md:text-4xl">
              {t('voluntariosPage.areasTitle')}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              {t('voluntariosPage.areasSubtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {areas.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#329bd0]/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0]/10 text-[#329bd0] transition-colors group-hover:bg-[#329bd0] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#262262]">
                  {t(`voluntariosPage.areas.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t(`voluntariosPage.areas.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white px-4 py-16 md:py-24" id="beneficios">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h2 className="mb-4 text-3xl font-bold text-[#262262] md:text-4xl">
              {t('voluntariosPage.benefitsTitle')}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              {t('voluntariosPage.benefitsSubtitle')}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 transition-all hover:border-[#329bd0]/30 hover:bg-white"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <Icon size={20} />
                </div>
                <span className="text-sm font-medium leading-relaxed text-slate-700">
                  {t(`voluntariosPage.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="requisitos">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#262262] md:text-4xl">
              {t('voluntariosPage.requirementsTitle')}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              {t('voluntariosPage.requirementsSubtitle')}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {requirements.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="rounded-xl bg-white px-6 py-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#329bd0]/10 text-[#329bd0]">
                  <Icon size={22} />
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  {t(`voluntariosPage.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#329bd0] to-[#262262] px-4 py-16 md:py-24" id="postular">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <Heart size={32} className="text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t('voluntariosPage.ctaTitle')}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            {t('voluntariosPage.ctaText')}
          </p>
          <a
            href={VOLUNTEER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-[#262262] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            {t('voluntariosPage.ctaButton')}
            <ArrowRight size={20} />
          </a>

          <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6">
            <p className="mb-3 text-sm text-white/70">
              {t('voluntariosPage.contactText')}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Voluntarios%20Abrelatam%202026`}
              className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-[#fdcc30]"
            >
              <Mail size={18} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowRight size={14} className="rotate-180" />
              {t('voluntariosPage.backHome')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
