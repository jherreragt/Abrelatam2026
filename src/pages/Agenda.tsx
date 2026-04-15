import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { ROUTES } from '../router/routes';

export default function Agenda() {
  return (
    <>
      <PageHero
        title="Agenda del Evento"
        subtitle={
          <>
            5-8 de noviembre, 2026 &bull; guatemala
          </>
        }
        backgroundImage="/src/assets/slider/AL-46.png"
        icon={<img src="/src/assets/iconos/AL-36.png" alt="" className="h-20 w-20 object-contain" />}
      />

      <Section bgColor="gray" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 py-12 text-center shadow-sm md:px-12 md:py-16 dark:bg-slate-900">
          <img src="/src/assets/iconos/AL-36.png" alt="" className="mx-auto mb-5 h-14 w-14 object-contain" />
          <h2 className="mb-7 text-3xl font-bold text-[#282456] md:text-4xl">Próximamente</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            Estamos trabajando en una agenda completa con sesiones increíbles, talleres prácticos,
            paneles de discusión y oportunidades de networking.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-200">
            La agenda detallada será publicada en las próximas semanas.
          </p>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-slate-50 px-6 py-8 text-left dark:bg-slate-800">
            <h3 className="mb-5 text-center text-lg font-bold text-slate-900 dark:text-white">Lo que puedes esperar:</h3>
            <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
              {[
                'Ponencias magistrales de expertos internacionales',
                'Talleres prácticos y técnicos',
                'Paneles de discusión sobre datos abiertos',
                'Sesiones de networking',
                'Hackaton y presentaciones de proyectos',
                'Eventos sociales y culturales',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:px-20">
            <Link to={ROUTES.CONVOCATORIAS}>
              <button className="w-full rounded-md bg-[#1f7dbd] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1769a3]">
                Recibir actualizaciones
              </button>
            </Link>
            <a
              href="mailto:contacto@abrelatam2026.org"
              className="rounded-md border border-[#1f7dbd] px-6 py-3.5 text-sm font-medium text-[#1f7dbd] transition-colors hover:bg-blue-50"
            >
              Contactar al equipo
            </a>
          </div>
        </div>
      </Section>

      <section className="bg-white px-4 py-16 md:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl rounded-lg bg-slate-100 px-6 py-14 text-center md:px-12 dark:bg-slate-900">
          <h2 className="mb-3 text-2xl font-bold text-[#10184a] md:text-3xl">¿Quieres proponer una sesión?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-base leading-snug text-[#10184a] dark:text-slate-200">
            Las convocatorias para proponer ponencias, talleres y side events estarán abiertas
            próximamente. Suscríbete a nuestro newsletter para recibir notificaciones cuando
            se abra el proceso.
          </p>
          <Link to={ROUTES.CONVOCATORIAS}>
            <button className="min-w-64 rounded-md bg-[#1f7dbd] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1769a3]">
              Ver convocatorias
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
