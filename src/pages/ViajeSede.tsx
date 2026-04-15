import PageHero from '../components/PageHero';
import { assetPath } from '../lib/assetPath';

export default function ViajeSede() {
  return (
    <>
      <PageHero
        title="Datos útiles y logística"
        subtitle="Todo lo que necesitas saber para planificar tu viaje a Ciudad de Guatemala"
        backgroundImage={assetPath('slider/AL-49.png')}
        icon={<img src={assetPath('iconos/AL-39.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-20 max-w-5xl">
            <h2 className="mb-10 text-3xl font-bold text-[#10184a] md:text-4xl">Sede del evento</h2>
            <div className="max-w-4xl space-y-6 text-base leading-relaxed text-slate-800 dark:text-slate-200">
              <p>
                ABRELATAM / CONDATOS 2026 se realizará en Ciudad de Guatemala, un punto de encuentro regional con
                conexiones aéreas directas y una oferta cultural activa para recibir a la comunidad de datos abiertos.
              </p>
              <p>
                La sede principal será el Centro Cultural Miguel Ángel Asturias, un espacio emblemático ubicado en el
                corazón de la ciudad. Próximamente compartiremos información detallada sobre accesos, horarios,
                recomendaciones de transporte y servicios disponibles durante el evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#10184a] md:text-3xl">¿Cómo llegar?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: assetPath('iconos/AL-32.png'),
                title: 'Por avión',
                desc: 'El Aeropuerto Internacional La Aurora (GUA) está ubicado a solo 15 minutos del centro de convenciones. Tiene conexiones directas con las principales ciudades de América Latina, Estados Unidos y Europa.',
                noteTitle: 'Principales aerolíneas:',
                note: 'Copa Airlines, Avianca, Aeroméxico, United, Delta, American Airlines',
              },
              {
                icon: assetPath('iconos/AL-33.png'),
                title: 'Transporte local',
                desc: 'El Aeropuerto Internacional La Aurora (GUA) está ubicado a solo 15 minutos del centro de convenciones. Tiene conexiones directas con las principales ciudades de América Latina, Estados Unidos y Europa.',
                noteTitle: 'Principales opciones:',
                note: 'Taxis autorizados, transporte privado, shuttles y servicios por aplicación',
              },
              {
                icon: assetPath('iconos/AL-35.png'),
                title: 'Desde Centroamérica',
                desc: 'El Aeropuerto Internacional La Aurora (GUA) está ubicado a solo 15 minutos del centro de convenciones. Tiene conexiones directas con las principales ciudades de América Latina, Estados Unidos y Europa.',
                noteTitle: 'Principales rutas:',
                note: 'Conexiones terrestres desde México, El Salvador, Honduras y Belice',
              },
              {
                icon: assetPath('iconos/AL-24.png'),
                title: 'Requisitos de entrada',
                desc: 'El Aeropuerto Internacional La Aurora (GUA) está ubicado a solo 15 minutos del centro de convenciones. Tiene conexiones directas con las principales ciudades de América Latina, Estados Unidos y Europa.',
                noteTitle: 'Recomendación:',
                note: 'Consulta los requisitos migratorios con anticipación según tu país de origen',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-white px-8 py-8 shadow-sm dark:bg-slate-900">
                <img src={item.icon} alt="" className="mb-5 h-12 w-12 object-contain" />
                <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.desc}</p>
                <div className="rounded-md bg-slate-100 px-5 py-4 text-xs leading-relaxed text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                  <strong>{item.noteTitle}</strong>
                  <br />
                  {item.note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <div className="mx-auto mb-20 max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#10184a] md:text-4xl">Alojamiento</h2>
            <div className="mb-8 rounded-lg bg-slate-100 px-8 py-10 dark:bg-slate-800 md:flex md:items-start md:gap-8 md:px-12">
              <img src={assetPath('iconos/AL-35.png')} alt="" className="mb-5 h-14 w-14 object-contain md:mb-0" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">Hoteles con tarifa especial</h3>
                <p className="max-w-4xl text-base leading-relaxed text-slate-900 dark:text-slate-200">
                  Hemos negociado tarifas preferenciales con varios hoteles cercanos a la sede. Los detalles y códigos
                  de reserva se compartirán con las personas registradas.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Zona 10',
                  desc: 'La zona más cercana al evento, con múltiples opciones de restaurantes y servicios.',
                  range: '$50-150 USD/noche',
                },
                {
                  name: 'Zona 9',
                  desc: 'Muy cerca de la sede, con opciones más económicas y excelente ubicación.',
                  range: '$30-80 USD/noche',
                },
                {
                  name: 'Zona 1 (Centro)',
                  desc: 'Centro histórico con opciones económicas, a 20 minutos del evento.',
                  range: '$20-50 USD/noche',
                },
              ].map((zone) => (
                <article key={zone.name} className="rounded-lg bg-slate-100 px-8 py-8 dark:bg-slate-800">
                  <img src={assetPath('iconos/AL-35.png')} alt="" className="mb-5 h-14 w-14 object-contain" />
                  <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">{zone.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{zone.desc}</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Rango: {zone.range}</p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#10184a] md:text-4xl">Información útil</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Clima en junio',
                desc: 'Junio es temporada de lluvias en Guatemala. Las temperaturas son agradables (15-25°C), pero te recomendamos traer paraguas o impermeable.',
              },
              {
                title: 'Moneda',
                desc: 'La moneda oficial es el Quetzal (GTQ). Hay cajeros automáticos disponibles y se aceptan dólares estadounidenses en muchos establecimientos.',
              },
              {
                title: 'Idioma',
                desc: 'El español es el idioma oficial, pero el evento contará con traducción simultánea español-inglés-portugués en las sesiones plenarias.',
              },
              {
                title: 'Seguridad',
                desc: 'Como en cualquier ciudad grande, recomendamos tomar precauciones básicas. Las zonas del evento y hoteles cercanos son seguras y bien vigiladas.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-white px-10 py-12 dark:bg-slate-900">
                <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="text-base leading-snug text-slate-700 dark:text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
