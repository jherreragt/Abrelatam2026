import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

const objectives = [
  {
    icon: assetPath('iconos/AL-29.png'),
    title: 'Fortalecer capacidades',
    desc: 'Ofrecer espacios de formacion y capacitacion en herramientas, metodologias y mejores practicas para trabajar con datos abiertos, tanto desde la sociedad civil como desde el gobierno.',
  },
  {
    icon: assetPath('iconos/AL-24.png'),
    title: 'Construir comunidad',
    desc: 'Facilitar el encuentro entre personas y organizaciones que trabajan en datos abiertos para fortalecer redes de colaboracion regional y compartir experiencias exitosas.',
  },
  {
    icon: assetPath('iconos/AL-25.png'),
    title: 'Impulsar politicas publicas',
    desc: 'Ofrecer espacios de formacion y capacitacion en herramientas, metodologias y mejores practicas para trabajar con datos abiertos, tanto desde la sociedad civil como desde el gobierno.',
  },
  {
    icon: assetPath('iconos/AL-23.png'),
    title: 'Inspirar innovacion',
    desc: 'Facilitar el encuentro entre personas y organizaciones que trabajan en datos abiertos para fortalecer redes de colaboracion regional y compartir experiencias exitosas.',
  },
];

export default function Sobre() {
  return (
    <>
      <PageHero
        title="Sobre ABRELATAM / CONDATOS 2026"
        subtitle="Dos conferencias, un mismo objetivo: transformar America Latina a traves de datos abiertos"
        backgroundImage={assetPath('slider/AL-45.png')}
      />

      <Section bgColor="white" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-[#262460] md:text-4xl">
            Nuestra historia
          </h2>
          <div className="space-y-7 text-base font-medium leading-relaxed text-[#262460] md:text-lg">
            <p>
              Desde 2013, ABRELATAM y CONDATOS han sido los puntos de encuentro mas importantes para la
              comunidad latinoamericana de datos abiertos. Nacidas con el espiritu de democratizar el acceso a la
              informacion publica, estas conferencias han viajado por toda la region, dejando en cada pais una
              huella de colaboracion y transformacion.
            </p>
            <p>
              ABRELATAM es el espacio donde activistas, desarrolladoras, periodistas, academicas y emprendedores
              sociales se reunen para compartir experiencias, aprender nuevas herramientas y construir redes de
              colaboracion que trascienden fronteras.
            </p>
            <p>
              CONDATOS, por su parte, convoca especificamente a funcionarios publicos y tomadores de decisiones
              gubernamentales para dialogar sobre politicas publicas, implementacion de plataformas de datos
              abiertos y mejores practicas en transparencia.
            </p>
            <p>
              En 2026, estas conferencias regresan a Centroamerica, y Guatemala tiene el honor de recibirlas. Sera
              una oportunidad unica para fortalecer el ecosistema regional de datos abiertos y construir puentes
              entre gobiernos, sociedad civil y sector tecnologico.
            </p>
          </div>
        </div>
      </Section>

      <Section bgColor="gray" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-3xl font-bold text-[#262460] md:text-4xl">
            Nuestros objetivos
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {objectives.map(({ icon, title, desc }) => (
              <article key={title} className="rounded-2xl bg-white px-9 py-8 dark:bg-slate-800">
                <img src={icon} alt="" className="mb-5 h-16 w-16 object-contain" />
                <h3 className="mb-2 text-xl font-bold leading-tight text-[#262460]">
                  {title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#262460]">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="white" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-3xl font-bold text-[#262460] md:text-4xl">
            ¿A quién va dirigido?
          </h2>
          <div className="space-y-9">
            {[
              {
                title: 'Activistas y organizaciones de sociedad civil',
                desc: 'Que trabajan en transparencia, rendicion de cuentas, anticorrupcion y derechos digitales.',
              },
              {
                title: 'Funcionarios publicos',
                desc: 'Responsables de politicas de datos abiertos, transparencia y gobierno digital.',
              },
              {
                title: 'Desarrolladores y tecnologos',
                desc: 'Que construyen herramientas y aplicaciones con datos abiertos.',
              },
              {
                title: 'Periodistas de datos',
                desc: 'Que utilizan datos para contar historias de impacto publico.',
              },
              {
                title: 'Academicos e investigadores',
                desc: 'Que estudian el impacto de datos abiertos en la democracia y el desarrollo.',
              },
              {
                title: 'Emprendedores sociales',
                desc: 'Que crean valor social y economico a partir de datos abiertos.',
              },
            ].map(({ title, desc }) => (
              <article key={title} className="border-l-2 border-[#2377b9] pl-5">
                <h3 className="text-2xl font-bold leading-tight text-[#262460]">
                  {title}
                </h3>
                <p className="mt-1 text-base font-medium leading-relaxed text-slate-600">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="gray" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-14 text-3xl font-bold text-[#262460] md:text-4xl">
            Ediciones anteriores
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: '2013', city: 'Montevideo' },
              { year: '2014', city: 'Mexico DF' },
              { year: '2015', city: 'Santiago' },
              { year: '2016', city: 'San Jose' },
              { year: '2013', city: 'Montevideo' },
              { year: '2014', city: 'Mexico DF' },
              { year: '2015', city: 'Santiago' },
              { year: '2016', city: 'San Jose' },
            ].map(({ year, city }, index) => (
              <article key={`${year}-${city}-${index}`} className="rounded-lg bg-white px-8 py-10">
                <h3 className="text-xl font-bold leading-tight text-[#262460]">
                  {year}
                </h3>
                <p className="mt-1 text-lg font-medium leading-tight text-[#262460]">
                  {city}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
