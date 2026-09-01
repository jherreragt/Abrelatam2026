import { useEffect } from 'react';
import {
  UtensilsCrossed,
  Coffee,
  Cookie,
  Truck,
  Info,
  Mail,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Instagram,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';
import { useSEO } from '../hooks/useSEO';

interface FoodTruck {
  name: string;
  type: string;
  description: string;
  priceRange: string;
  instagram?: string;
  image?: string;
  menuUrl?: string;
}

const foodTrucks: FoodTruck[] = [];

const WHATSAPP_NUMBER = '50212345678';
const CONTACT_EMAIL = 'abrelatam@idatosabiertos.org';

const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSff1DnwCabXkfFlCVb4GLvWO92SkiD2KczWxjI-VPjZTOHyFw/viewform?embedded=true';

const infoItems = [
  { key: 'name' },
  { key: 'type' },
  { key: 'menu' },
  { key: 'days' },
  { key: 'facility' },
  { key: 'requirements' },
  { key: 'contact' },
  { key: 'social' },
] as const;

export default function ZonaGastronomica() {
  useSEO();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        title={t('zonaGastro.heroTitle')}
        subtitle={t('zonaGastro.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-48.png')}
        icon={
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <Truck size={40} className="text-white" />
          </div>
        }
      />

      {/* Comida durante el evento */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <UtensilsCrossed size={24} className="text-[#329bd0]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#329bd0]">
              {t('zonaGastro.eyebrow')}
            </span>
          </div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#262262] md:text-4xl">
            {t('zonaGastro.optionsTitle')}
          </h2>
          <div className="mb-10 space-y-5 text-base leading-relaxed text-slate-700">
            <p>{t('zonaGastro.optionsText')}</p>
            <p>{t('zonaGastro.optionsDates')}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: UtensilsCrossed, label: t('zonaGastro.cardFood') },
              { icon: Coffee, label: t('zonaGastro.cardDrinks') },
              { icon: Cookie, label: t('zonaGastro.cardSnacks') },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-center transition-all hover:border-[#329bd0]/30 hover:bg-white"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#329bd0]/10 text-[#329bd0]">
                  <Icon size={28} />
                </div>
                <span className="text-sm font-bold text-[#262262]">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 px-6 py-5">
            <Info size={20} className="mt-0.5 flex-shrink-0 text-amber-600" />
            <p className="text-sm font-medium leading-relaxed text-amber-900">
              {t('zonaGastro.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Convocatoria */}
      <section className="bg-gradient-to-br from-[#329bd0] to-[#262262] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <Truck size={28} className="text-[#fdcc30]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#fdcc30]">
              {t('zonaGastro.callEyebrow')}
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
            {t('zonaGastro.callTitle')}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-white/85">
            <p>{t('zonaGastro.callText1')}</p>
            <p>{t('zonaGastro.callText2')}</p>
            <p>{t('zonaGastro.callText3')}</p>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-7 md:p-9">
            <h3 className="mb-6 text-lg font-bold text-white">
              {t('zonaGastro.needsTitle')}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {infoItems.map(({ key }) => (
                <div key={key} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 text-[#fdcc30]" />
                  <span className="text-sm text-white/90">
                    {t(`zonaGastro.needs.${key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de solicitud */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="formulario">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#262262] md:text-4xl">
              {t('zonaGastro.formTitle')}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              {t('zonaGastro.formIntro')}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="zona-gastro-form w-full">
              <iframe
                src={FORM_EMBED_URL}
                title={t('zonaGastro.formTitle')}
                loading="lazy"
                className="w-full max-w-[760px] mx-auto block border-0"
                style={{ minHeight: '2270px' }}
              >
                {t('zonaGastro.formLoading')}
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Food trucks confirmados (oculta si el array está vacío) */}
      {foodTrucks.length > 0 && (
        <section className="bg-white px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-3xl font-bold text-[#262262] md:text-4xl">
              {t('zonaGastro.confirmedTitle')}
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-600">
              {t('zonaGastro.confirmedSubtitle')}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foodTrucks.map(truck => (
                <article
                  key={truck.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {truck.image && (
                    <div className="aspect-video w-full overflow-hidden bg-slate-100">
                      <img
                        src={truck.image}
                        alt={truck.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-1 text-lg font-bold text-[#262262]">{truck.name}</h3>
                    <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#329bd0]">
                      {truck.type}
                    </span>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {truck.description}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-500">
                        {truck.priceRange}
                      </span>
                      <div className="flex items-center gap-3">
                        {truck.instagram && (
                          <a
                            href={truck.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#329bd0] transition-colors hover:text-[#262262]"
                            aria-label={`${truck.name} Instagram`}
                          >
                            <Instagram size={18} />
                          </a>
                        )}
                        {truck.menuUrl && (
                          <a
                            href={truck.menuUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#329bd0]/10 px-4 py-2 text-xs font-bold text-[#329bd0] transition-colors hover:bg-[#329bd0] hover:text-white"
                          >
                            {t('zonaGastro.viewMenu')}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacto alternativo */}
      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#262262] md:text-3xl">
            {t('zonaGastro.contactTitle')}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600">
            {t('zonaGastro.contactText')}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hola, tengo una consulta sobre la Zona Gastronómica de AbreLatam 2026'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Zona Gastronómica - AbreLatam 2026`}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#329bd0] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-[#2789b8] active:scale-95"
            >
              <Mail size={18} />
              {t('zonaGastro.emailButton')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
