import { ExternalLink, MessageSquare, Wrench, Users, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const sessionTypes = [
  {
    icon: Users,
    title: 'Panel o conversación moderada',
    duration: '50 minutos',
    description:
      'Espacio de diálogo entre varias personas con experiencia en un tema específico. Se recomienda que no sea únicamente expositivo y que incluya preguntas orientadoras, interacción con la audiencia y conclusiones claras.',
  },
  {
    icon: Wrench,
    title: 'Taller práctico',
    duration: '50 minutos',
    description:
      'Sesión orientada a desarrollar capacidades, aplicar metodologías, usar herramientas, analizar datos o construir soluciones de manera colaborativa.',
  },
  {
    icon: MessageSquare,
    title: 'Diálogos',
    duration: '50 minutos',
    description:
      'Espacio para discutir un problema específico, recoger aportes, identificar desafíos, construir recomendaciones o diseñar acciones conjuntas.',
  },
  {
    icon: Zap,
    title: 'Charla relámpago',
    duration: '15 minutos',
    description:
      'Formato breve para presentar proyectos, herramientas, investigaciones, aprendizajes o casos de uso de manera ágil.',
  },
];

export default function ProponerSesion() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t('proponerSesion.heroTitle')}
        subtitle={t('proponerSesion.heroSubtitle')}
        backgroundImage={assetPath('v2/slider/AL-45.png')}
        icon={<img src={assetPath('v2/iconos/AL-27.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Las propuestas serán evaluadas considerando tanto su calidad y relevancia temática como su contribución a
            una agenda plural que refleje la riqueza y complejidad del ecosistema de datos, tecnología, transparencia,
            participación ciudadana e innovación social de la región. Asimismo, se priorizarán aquellas iniciativas
            alineadas con los ejes temáticos de esta edición y que fomenten el intercambio de conocimientos, el
            aprendizaje colectivo y la construcción de soluciones colaborativas.
          </p>
        </div>
      </section>

      {/* Session types */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-3 text-2xl font-bold text-[#262262] md:text-3xl">Tipos de sesión</h2>
          <p className="mb-10 text-sm text-slate-500">Entre los tipos de sesión sugeridos se encuentran:</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {sessionTypes.map(({ icon: Icon, title, duration, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#329bd0]/10">
                    <Icon size={20} className="text-[#329bd0]" />
                  </div>
                </div>
                <h3 className="mb-1 text-base font-bold text-[#262262]">{title}</h3>
                <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#329bd0]">{duration}</span>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#262262] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">¿Listo para proponer tu sesión?</h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Completa el formulario oficial de convocatoria y sé parte de la programación de Abrelatam ConDatos 2026.
          </p>
          <a
            href="https://pretalx.abrelatam.org/abrelatam-2026/cfp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-[#329bd0] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#2789b8]"
          >
            Proponer sesión
            <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
