import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

export default function SideEvents() {
  return (
    <>
      <PageHero
        title="Side Events"
        subtitle="Espacios autorganizados por la comunidad para encuentros, talleres y actividades paralelas"
        backgroundImage={assetPath('slider/AL-48.png')}
        icon={<img src={assetPath('iconos/AL-38.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <Section bgColor="white" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold text-[#10184a] md:text-4xl">¿Qué son los Side Events?</h2>
          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-slate-800 dark:text-slate-200">
            <p>
              Los Side Events son actividades paralelas organizadas por participantes, organizaciones y comunidades
              durante ABRELATAM / CONDATOS. Estos espacios autorganizados permiten profundizar en temas específicos,
              reunir a comunidades de práctica, o explorar iniciativas particulares.
            </p>
            <p>
              Pueden ser reuniones informales, talleres especializados, presentaciones de proyectos, o cualquier actividad
              que enriquezca la experiencia del evento. Los Side Events son una tradición de ABRELATAM que fortalece las
              redes y permite conversaciones más enfocadas y profundas.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#10184a] md:text-3xl">Tipos de Side Events</h2>
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: assetPath('iconos/AL-28.png'),
                title: 'Reuniones de comunidad',
                desc: 'Espacios para que redes, coaliciones u organizaciones se reúnan presencialmente, compartan actualizaciones y planifiquen acciones futuras.',
              },
              {
                icon: assetPath('iconos/AL-29.png'),
                title: 'Talleres especializados',
                desc: 'Sesiones prácticas sobre herramientas, metodologías o enfoques específicos que requieren más tiempo que un formato regular de la agenda oficial.',
              },
              {
                icon: assetPath('iconos/AL-31.png'),
                title: 'Lanzamientos y demos',
                desc: 'Presentaciones de nuevas propuestas, plataformas, investigaciones o iniciativas que quieran tener un espacio dedicado con su audiencia.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-white px-6 py-6 shadow-sm dark:bg-slate-900">
                <img src={item.icon} alt="" className="mb-4 h-11 w-11 object-contain" />
                <h3 className="mb-2 text-sm font-bold text-[#10184a] dark:text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>

          <h2 className="mb-10 text-center text-3xl font-bold text-[#10184a] md:text-4xl">Lineamientos generales</h2>
          <div className="rounded-lg bg-white px-8 py-10 dark:bg-slate-900 md:px-12 md:py-14">
            <div className="space-y-8">
              {[
                {
                  number: '1',
                  title: 'Envía tu propuesta',
                  desc: 'Completa el formulario de propuesta de Side Event con los detalles de tu actividad: título, descripción, duración estimada, número de participantes esperados y requerimientos técnicos o de espacio.',
                },
                {
                  number: '2',
                  title: 'Coordinación con organización',
                  desc: 'El equipo organizador revisará tu propuesta y te ayudará a encontrar el mejor horario y espacio disponible. Te daremos apoyo con logística básica y difusión.',
                },
                {
                  number: '3',
                  title: 'Difusión',
                  desc: 'Tu Side Event aparecerá en la agenda oficial y en los materiales del evento. También puedes compartirlo en redes sociales y con tus comunidades.',
                },
                {
                  number: '4',
                  title: '¡Disfruta tu evento!',
                  desc: 'Facilita tu Side Event durante el congreso. Recuerda seguir el código de conducta y crear un espacio inclusivo y respetuoso para todas las personas participantes.',
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#10184a] text-sm font-bold text-white">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10184a] dark:text-white">{item.title}</h3>
                    <p className="mt-1 max-w-4xl text-sm leading-relaxed text-[#10184a] dark:text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-lg bg-slate-100 px-6 py-12 text-center dark:bg-slate-900">
          <h2 className="mb-4 text-2xl font-bold text-[#10184a] md:text-3xl">¿Tienes una idea para un Side Event?</h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-snug text-[#10184a] dark:text-slate-300">
            Las convocatorias para organizar Side Events abrirán próximamente. Suscríbete
            para recibir una notificación cuando estén disponibles.
          </p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="min-w-60 rounded-md bg-[#1f7dbd] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1769a3]">
              Proponer Side Event
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
