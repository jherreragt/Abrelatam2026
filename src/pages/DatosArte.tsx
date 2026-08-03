import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Database,
  Users,
  Trophy,
  Calendar,
  FileText,
  Image,
  ShieldCheck,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Info,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';
import { useSEO } from '../hooks/useSEO';

const themes = [
  'Democracia y participación ciudadana',
  'Representación y acceso a la información',
  'Derechos humanos y justicia social',
  'Género y diversidades',
  'Pueblos indígenas y comunidades afrodescendientes',
  'Migración y movilidad humana',
  'Memoria, identidad y territorio',
  'Desigualdades sociales y económicas',
  'Justicia climática y sostenibilidad',
  'Tecnología, privacidad y vigilancia',
  'Inteligencia artificial, sesgos y desinformación',
  'Datos comunitarios y soberanía tecnológica',
];

const participants = [
  'Artistas guatemaltecos/as',
  'Artistas residentes en Guatemala',
  'Artistas de otros países de América Latina y el Caribe',
  'Estudiantes y profesionales',
  'Personas participantes individuales o equipos multidisciplinarios',
];

const requirements = [
  { label: 'Nombre de la obra' },
  { label: 'Nombre de la persona o equipo autor' },
  { label: 'País de nacionalidad y/o residencia' },
  { label: 'Categoría a la que se presenta' },
  { label: 'Memoria descriptiva de la obra (máx. 1.500 caracteres)' },
  { label: 'Explicación del vínculo entre la obra y los datos utilizados (máx. 1.500 caracteres)' },
  { label: 'Fuentes de datos y metodología de trabajo (máx. 1.500 caracteres)' },
  { label: 'Ficha técnica: dimensiones, materiales, duración, software/herramientas, requerimientos de exhibición, necesidades de montaje' },
  { label: 'Créditos del equipo' },
  { label: 'Entre dos y cinco fotografías, stills o renders en alta resolución' },
  { label: 'Enlace a la obra o a un registro audiovisual, sonoro o interactivo (cuando corresponda)' },
  { label: 'Información de contacto' },
];

const evaluationCriteria = [
  'Calidad y solidez de la propuesta artística',
  'Relación con el concepto Entredata',
  'Uso significativo y creativo de datos',
  'Capacidad de generar reflexión y diálogo',
  'Originalidad',
  'Diversidad de perspectivas',
  'Viabilidad técnica y de exhibición',
];

const selectionCriteria = [
  'Diversidad de lenguajes y formatos',
  'Representación de Guatemala y de la región',
  'Pluralidad de perspectivas',
  'Participación de grupos históricamente subrepresentados',
  'Variedad de aproximaciones a los datos',
  'Viabilidad técnica y de montaje',
];

const declarations = [
  'La obra es original',
  'No constituye plagio, fraude o copia',
  'Cuentan con los derechos y autorizaciones necesarios',
  'La obra no mantiene compromisos que impidan su exhibición',
  'Asumen la responsabilidad ante cualquier reclamo de terceros',
];

const authorizedUses = [
  'Difusión de la convocatoria y sus resultados',
  'Promoción de la exposición',
  'Elaboración de catálogos y materiales institucionales',
  'Publicación en sitios web y redes sociales',
  'Documentación de las actividades del proyecto',
];

const timeline = [
  { date: '27 de julio de 2026', event: 'Difusión y lanzamiento del registro para talleres' },
  { date: '27 de julio de 2026', event: 'Lanzamiento de la convocatoria del concurso' },
  { date: '13 de agosto de 2026', event: 'Taller virtual' },
  { date: '20 de agosto de 2026', event: 'Taller presencial en el Centro Cultural de España en Guatemala' },
  { date: '27 de agosto de 2026', event: 'Sesión virtual de apoyo' },
  { date: '15 de septiembre de 2026', event: 'Cierre de la convocatoria' },
  { date: '22 de septiembre de 2026', event: 'Selección de obras nacionales y regionales' },
  { date: '7 al 9 de octubre de 2026', event: 'Exposición en ABRELATAM/CONDATOS' },
];

const formats = [
  'Digitales',
  'Físicas',
  'Formatos híbridos',
  'Musicales',
  'Poéticas',
  'Gráficas',
  'Pictóricas',
  'Videos',
];

const formatsGuatemala = ['Escultóricos', 'Textiles', 'Instalaciones'];

const FORM_URL = 'https://forms.gle/p87qqXnsY7WoKf4g8';
const CONTACT_EMAIL = 'abrelatam@idatosabiertos.org';

export default function DatosArte() {
  const { t } = useLanguage();
  useSEO({
    title: 'Datos+Arte 2026 — Abrelatam/Condatos',
    description:
      'Concurso y exposición Datos+Arte 2026: Entredata — Datos, voces y futuros en común. Abrelatam/Condatos, Ciudad de Guatemala, 7 al 9 de octubre de 2026.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        title="Datos+Arte 2026"
        subtitle="Entredata — Datos, voces y futuros en común"
        backgroundImage={assetPath('v2/slider/AL-47.png')}
        icon={
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <Palette size={40} className="text-white" />
          </div>
        }
      />

      {/* Intro / Context */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={24} className="text-[#329bd0]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#329bd0]">
              {t('nav.datosArte')}
            </span>
          </div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#262262] md:text-4xl">
            Entredata: Datos, voces y futuros en común
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Datos+Arte 2026 busca continuar construyendo sobre el camino trazado en seis ediciones
              anteriores, consolidando un espacio de intercambio y reflexión entre la comunidad de
              datos y el ecosistema artístico de Guatemala. Esta nueva edición se desarrollará en el
              marco de la conferencia Abrelatam/Condatos en Guatemala del{' '}
              <strong>7 al 9 de octubre de 2026</strong>, apostando una vez más a que el arte es una
              vía esencial para democratizar el acceso a los datos y ampliar las formas en que las
              personas los comprenden, los cuestionan y los transforman en acción.
            </p>
            <p>
              Este proceso cuenta con el apoyo del{' '}
              <strong>Banco Interamericano de Desarrollo (BID)</strong> y el{' '}
              <strong>Centro Cultural de España en Guatemala (CCEG)</strong>.
            </p>
            <p>
              El proyecto fortalecerá las capacidades de artistas en el uso y la reutilización de
              datos abiertos para reflexionar sobre problemáticas urgentes de nuestra región:
              democracia y participación ciudadana, justicia climática, inclusión social, derechos
              humanos y memoria. A través de estas temáticas, se buscará promover activamente la
              participación de representantes de grupos históricamente subrepresentados como mujeres,
              personas LGBTIQ+, pueblos indígenas y comunidades afrodescendientes, tanto a nivel local
              como regional, reconociendo que las voces más afectadas por estas problemáticas son
              también las más necesarias para narrar los datos.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} className="text-[#329bd0]" />
              <span>Ciudad de Guatemala</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={16} className="text-[#329bd0]" />
              <span>7 al 9 de octubre de 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Convocatoria */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="convocatoria">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="1" title="Convocatoria" icon={<FileText size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Abrelatam/Condatos, con el apoyo del Banco Interamericano de Desarrollo (BID), invita a
              artistas, diseñadoras/es, desarrolladoras/es, investigadoras/es y equipos
              multidisciplinarios de Guatemala, Latinoamérica y el Caribe a participar en el concurso
              y la exposición{' '}
              <strong>Datos+Arte 2026: Entredata — Datos, voces y futuros en común</strong>.
            </p>
            <p>
              La exposición se realizará en el marco de la conferencia Abrelatam/Condatos, en la
              Ciudad de Guatemala, del 7 al 9 de octubre de 2026.
            </p>
            <p>
              La convocatoria busca promover el uso y la reutilización creativa de datos,
              especialmente de datos abiertos, para producir nuevas formas de reflexión sobre
              democracia, participación, derechos, representación y futuros sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tema */}
      <section className="bg-white px-4 py-16 md:py-24" id="tema">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="2" title="Tema" icon={<Palette size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              El eje curatorial de esta edición será:{' '}
              <strong>Entredata — Datos, voces y futuros en común</strong>. Se invita a presentar
              obras que exploren lo que ocurre entre los datos: las relaciones entre información y
              poder, presencia y ausencia, representación y participación, memoria y territorio,
              conocimiento institucional y saberes comunitarios.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all hover:border-[#329bd0]/40 hover:bg-[#329bd0]/5"
              >
                <CheckCircle2 size={18} className="flex-shrink-0 text-[#329bd0]" />
                <span className="text-sm font-medium text-slate-700">{theme}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-slate-500">La lista es orientativa y no excluyente.</p>
        </div>
      </section>

      {/* 3. Quiénes pueden participar */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="participantes">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="3" title="Quiénes pueden participar" icon={<Users size={22} />} />
          <div className="grid gap-3 sm:grid-cols-2">
            {participants.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle2 size={20} className="flex-shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-800">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            <p>No existe límite al número de integrantes de los equipos.</p>
            <p>
              No podrán participar personas vinculadas directamente con la organización, evaluación o
              gestión de esta convocatoria, ni quienes tengan una relación laboral o contractual con
              las instituciones organizadoras que genere un conflicto de interés.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Categorías */}
      <section className="bg-white px-4 py-16 md:py-24" id="categorias">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="4" title="Categorías" icon={<Trophy size={22} />} />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#329bd0]/20 bg-[#329bd0]/5 p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#329bd0] text-white">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#262262]">Categoría nacional</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Artistas guatemaltecos/as o residentes en Guatemala.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#262262]/20 bg-[#262262]/5 p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#262262] text-white">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#262262]">Categoría regional</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Artistas de otros países de América Latina y el Caribe.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            Las obras colectivas deberán postularse a una sola categoría. En el formulario deberá
            indicarse la persona representante del equipo.
          </p>
        </div>
      </section>

      {/* 5. Obras admitidas */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="obras">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="5" title="Obras admitidas" icon={<Image size={22} />} />
          <p className="mb-6 text-base leading-relaxed text-slate-700">
            Se aceptarán obras terminadas o en proceso avanzado de producción que:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Utilicen datos como parte central de su concepto, proceso, contenido o materialidad',
              'Se relacionen con el enfoque curatorial de la convocatoria',
              'Sean originales',
              'Puedan exhibirse en Guatemala durante la conferencia',
              'Cumplan con las condiciones técnicas y de montaje comunicadas por la organización',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#329bd0]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 text-sm leading-relaxed text-slate-700">
            Se admitirán obras digitales, físicas y en formatos híbridos, incluyendo propuestas
            musicales, poéticas, gráficas, pictóricas, videos. En el caso de obras de artistas de
            Guatemala, además de las anteriores, también se admitirán en los formatos:
          </p>
          <div className="flex flex-wrap gap-2">
            {[...formats, ...formatsGuatemala].map((f, i) => (
              <span
                key={i}
                className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                  i >= formats.length
                    ? 'bg-[#fdcc30]/20 text-[#262262] border border-[#fdcc30]/40'
                    : 'bg-[#329bd0]/10 text-[#329bd0] border border-[#329bd0]/20'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Requisitos de postulación */}
      <section className="bg-white px-4 py-16 md:py-24" id="requisitos">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="6" title="Requisitos de postulación" icon={<FileText size={22} />} />
          <p className="mb-6 text-base leading-relaxed text-slate-700">
            Las postulaciones deberán incluir:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {requirements.map((req, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all hover:border-[#329bd0]/30 hover:bg-white hover:shadow-sm"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#329bd0] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{req.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Datos y fuentes */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="datos-fuentes">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="7" title="Datos y fuentes" icon={<Database size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Las obras podrán utilizar datos abiertos, datos públicos, datos producidos por
              comunidades, archivos, registros históricos, investigaciones propias u otras fuentes
              pertinentes.
            </p>
            <p>
              Las personas participantes deberán indicar las fuentes utilizadas y respetar las
              condiciones de uso correspondientes.
            </p>
            <div className="rounded-xl border-l-4 border-[#329bd0] bg-[#329bd0]/5 px-6 py-5">
              <p className="text-sm leading-relaxed text-slate-700">
                Cuando una obra utilice testimonios, datos personales o información sensible, deberá
                contar con las autorizaciones necesarias y aplicar criterios de cuidado, privacidad y
                consentimiento informado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Uso de IA */}
      <section className="bg-white px-4 py-16 md:py-24" id="ia">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="8" title="Uso de inteligencia artificial" icon={<Sparkles size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Si la obra fue realizada total o parcialmente con herramientas de inteligencia
              artificial, esta información deberá incluirse en la postulación.
            </p>
            <p>La organización podrá solicitar:</p>
            <ul className="space-y-2.5">
              {[
                'Herramientas utilizadas',
                'Forma de intervención humana',
                'Fuentes o materiales incorporados',
                'Prompts utilizados, cuando corresponda',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#329bd0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-slate-500">
              Esta información será utilizada para la evaluación del jurado y para garantizar la
              transparencia del proceso.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Selección y curaduría */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="seleccion">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="9" title="Selección y curaduría" icon={<CheckCircle2 size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Se realizará una curaduría de las obras recibidas para conformar la exposición de
              Datos+Arte 2026. La selección de las obras buscará reunir:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {selectionCriteria.map((c, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-white px-5 py-3 shadow-sm">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-700">{c}</span>
                </div>
              ))}
            </div>
            <p className="pt-2">
              La exposición se presentará durante Abrelatam/Condatos, del 7 al 9 de octubre de 2026.
            </p>
            <p className="rounded-xl bg-amber-50 border border-amber-200 px-6 py-4 text-sm text-amber-800">
              La selección de una obra no implica la concesión de una beca al artista o al equipo.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Criterios de evaluación */}
      <section className="bg-white px-4 py-16 md:py-24" id="criterios">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="10" title="Criterios de evaluación" icon={<CheckCircle2 size={22} />} />
          <p className="mb-6 text-base leading-relaxed text-slate-700">El jurado considerará:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {evaluationCriteria.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#262262] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-700">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Jurado */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="jurado">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="11" title="Jurado" icon={<Users size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Las obras serán valoradas por un jurado multidisciplinario integrado por representantes
              de las instituciones organizadoras y personas invitadas con experiencia en arte, datos,
              cultura, democracia, derechos humanos, tecnología e inclusión.
            </p>
            <p>
              El anuncio de las obras seleccionadas se realizará a través de los canales oficiales de
              la organización.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Premios */}
      <section className="bg-gradient-to-br from-[#262262] to-[#329bd0] px-4 py-16 md:py-24" id="premios">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <Trophy size={28} className="text-[#fdcc30]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#fdcc30]">
              Sección 12
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Premios</h2>
          <p className="mb-10 text-base leading-relaxed text-white/80">
            Se premiarán tres obras en cada categoría.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Categoría nacional', subtitle: 'Artistas guatemaltecos/as' },
              { title: 'Categoría regional', subtitle: 'Artistas de Latinoamérica y el Caribe' },
            ].map((cat, ci) => (
              <div key={ci} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-7">
                <h3 className="mb-1 text-lg font-bold text-white">{cat.title}</h3>
                <p className="mb-6 text-sm text-white/60">{cat.subtitle}</p>
                <div className="space-y-4">
                  {[
                    { place: 'Primer lugar', amount: 'US$1.000', medal: '1' },
                    { place: 'Segundo lugar', amount: 'US$750', medal: '2' },
                    { place: 'Tercer lugar', amount: 'US$500', medal: '3' },
                  ].map((prize, pi) => (
                    <div
                      key={pi}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 border border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                            pi === 0
                              ? 'bg-[#fdcc30] text-[#262262]'
                              : pi === 1
                                ? 'bg-slate-300 text-slate-700'
                                : 'bg-amber-700/60 text-white'
                          }`}
                        >
                          {prize.medal}
                        </span>
                        <span className="text-sm font-medium text-white">{prize.place}</span>
                      </div>
                      <span className="text-lg font-bold text-[#fdcc30]">{prize.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">
            Los premios serán entregados conforme a los procedimientos administrativos y fiscales
            aplicables.
          </p>
        </div>
      </section>

      {/* 13. Traslado, producción y montaje */}
      <section className="bg-white px-4 py-16 md:py-24" id="traslado">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="13" title="Traslado, producción y montaje" icon={<Info size={22} />} />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Las personas seleccionadas recibirán información sobre las condiciones de montaje,
              equipamiento y exhibición.
            </p>
            <p>
              En caso de obras físicas o instalaciones que requieran traslado, producción local o
              materiales específicos, la organización comunicará oportunamente los procedimientos
              correspondientes.
            </p>
          </div>
        </div>
      </section>

      {/* 14. Declaración de autoría */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="autoria">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="14" title="Declaración de autoría" icon={<ShieldCheck size={22} />} />
          <p className="mb-6 text-base leading-relaxed text-slate-700">
            Al postular, las personas participantes declaran que:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {declarations.map((d, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Autorización de uso y difusión */}
      <section className="bg-white px-4 py-16 md:py-24" id="autorizacion">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            number="15"
            title="Autorización de uso y difusión"
            icon={<FileText size={22} />}
          />
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              La participación implica autorizar a ABRELATAM/CONDATOS y a las instituciones
              organizadoras a utilizar imágenes, registros, textos y fragmentos de las obras con
              fines de:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {authorizedUses.map((use, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#329bd0]" />
                  <span className="text-sm text-slate-700">{use}</span>
                </div>
              ))}
            </div>
            <p className="rounded-xl border-l-4 border-[#262262] bg-[#262262]/5 px-6 py-4 text-sm text-slate-700">
              La autoría será reconocida en todos los materiales posibles. Esta autorización no
              implica la cesión de la propiedad intelectual de la obra.
            </p>
          </div>
        </div>
      </section>

      {/* 16. Cronograma */}
      <section className="bg-slate-50 px-4 py-16 md:py-24" id="cronograma">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="16" title="Cronograma" icon={<Calendar size={22} />} />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#262262] text-left text-xs font-semibold uppercase tracking-wider text-white">
                  <th className="px-6 py-4">Actividad</th>
                  <th className="px-6 py-4 whitespace-nowrap">Fecha estimada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {timeline.map((item, i) => (
                  <tr key={i} className="transition-colors hover:bg-slate-50">
                    <td className="px-6 py-4 text-slate-800">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="flex-shrink-0 text-[#329bd0]" />
                        <span>{item.event}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-[#329bd0]">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-slate-500">
            Las fechas podrán modificarse por razones organizativas. Cualquier modificación se
            comunicará a través de los canales oficiales.
          </p>
        </div>
      </section>

      {/* 17. Consultas */}
      <section className="bg-white px-4 py-16 md:py-24" id="consultas">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="17" title="Consultas" icon={<Mail size={22} />} />
          <div className="rounded-2xl bg-[#329bd0]/5 border border-[#329bd0]/20 p-7">
            <p className="mb-4 text-base leading-relaxed text-slate-700">
              Las consultas deberán enviarse a:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Datos%2BArte`}
              className="inline-flex items-center gap-2.5 text-lg font-semibold text-[#329bd0] transition-colors hover:text-[#2789b8]"
            >
              <Mail size={20} />
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Asunto: <span className="font-medium">Datos+Arte</span>
            </p>
          </div>
        </div>
      </section>

      {/* 18. CTA Formulario */}
      <section className="bg-gradient-to-br from-[#329bd0] to-[#262262] px-4 py-16 md:py-24" id="formulario">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <Sparkles size={32} className="text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Postula tu obra
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Completa el formulario de postulación para participar en Datos+Arte 2026.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-[#262262] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            Ir al formulario
            <ArrowRight size={20} />
          </a>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowRight size={14} className="rotate-180" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ number, title, icon }: { number: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#329bd0]/10 text-[#329bd0]">
        {icon}
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Sección {number}
        </span>
        <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{title}</h2>
      </div>
    </div>
  );
}
