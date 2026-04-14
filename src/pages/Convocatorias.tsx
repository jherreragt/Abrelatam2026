import PageHero from '../components/PageHero';

const calls = [
  {
    icon: '/src/assets/iconos/AL-27.png',
    title: 'Ponencias y presentaciones',
    desc: 'Comparte tu experiencia, investigación o proyecto en una sesión de 20 minutos. Buscamos casos de éxito, lecciones aprendidas y propuestas innovadoras en datos abiertos.',
    deadline: 'Febrero 2026',
  },
  {
    icon: '/src/assets/iconos/AL-28.png',
    title: 'Talleres prácticos',
    desc: 'Propone espacios de aprendizaje aplicado para compartir herramientas, metodologías y habilidades útiles para la comunidad.',
    deadline: 'Febrero 2026',
  },
  {
    icon: '/src/assets/iconos/AL-29.png',
    title: 'Paneles de discusión',
    desc: 'Reúne voces diversas para conversar sobre desafíos, oportunidades y aprendizajes alrededor de los datos abiertos en la región.',
    deadline: 'Febrero 2026',
  },
  {
    icon: '/src/assets/iconos/AL-31.png',
    title: 'Side events',
    desc: 'Organiza encuentros, demos, laboratorios o actividades paralelas que conecten a personas y organizaciones de la comunidad.',
    deadline: 'Febrero 2026',
  },
];

export default function Convocatorias() {
  return (
    <>
      <PageHero
        title="Convocatorias"
        subtitle="Múltiples formas de participar y contribuir al evento más importante de datos abiertos en la región"
        backgroundImage="/src/assets/slider/AL-47.png"
        icon={<img src="/src/assets/iconos/AL-37.png" alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 rounded-lg bg-[#dfe8f1] px-8 py-8 text-[#202333] md:px-12">
            <h2 className="mb-4 text-xl font-bold">Proceso de selección transparente</h2>
            <p className="max-w-5xl text-sm leading-relaxed">
              Todas las propuestas son revisadas por un comité evaluador diverso. Los criterios incluyen:
              relevancia, claridad, impacto potencial y diversidad de perspectivas.
            </p>
            <p className="mt-5 max-w-5xl text-sm leading-relaxed">
              Priorizamos propuestas de grupos subrepresentados y promovemos la equidad de género en todos los espacios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {calls.map((call) => (
              <article key={call.title} className="rounded-lg bg-white px-8 py-7 shadow-sm dark:bg-slate-900">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <img src={call.icon} alt="" className="h-12 w-12 object-contain" />
                  <span className="rounded-full bg-slate-100 px-6 py-2 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                    Próximamente
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{call.title}</h3>
                <p className="mb-4 max-w-lg text-sm leading-relaxed text-slate-700 dark:text-slate-300">{call.desc}</p>
                <p className="mb-8 text-sm text-slate-700 dark:text-slate-300">Fecha límite: {call.deadline}</p>
                <button className="w-full rounded-md border border-[#1f7dbd] px-6 py-3 text-sm font-medium text-[#1f7dbd] transition-colors hover:bg-blue-50">
                  Próximamente
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#282456] md:text-4xl">Lineamientos generales</h2>
          <div className="rounded-lg bg-slate-100 px-8 py-10 text-[#202333] md:px-16 md:py-12 dark:bg-slate-900 dark:text-slate-100">
            <div className="space-y-7">
              {[
                {
                  title: '1. Relevancia temática',
                  desc: 'Las propuestas deben relacionarse con datos abiertos, transparencia, rendición de cuentas, gobierno abierto, periodismo de datos, o tecnología cívica.',
                },
                {
                  title: '2. Claridad y estructura',
                  desc: 'Describe claramente los objetivos, metodología y resultados esperados. Las propuestas bien estructuradas tienen más probabilidades de ser seleccionadas.',
                },
                {
                  title: '3. Diversidad e inclusión',
                  desc: 'Promovemos activamente la participación de mujeres, comunidades indígenas, jóvenes y grupos históricamente excluidos. Valora las propuestas que promuevan la equidad.',
                },
                {
                  title: '4. Idioma',
                  desc: 'Las propuestas pueden enviarse en español, portugués o inglés. El evento contará con traducción simultánea en las sesiones plenarias.',
                },
                {
                  title: '5. Código de conducta',
                  desc: 'Todas las personas que propongan y participen deben comprometerse a respetar nuestro código de conducta, que garantiza un espacio seguro y respetuoso para todas las personas.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 max-w-5xl text-base leading-relaxed text-slate-800 dark:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
