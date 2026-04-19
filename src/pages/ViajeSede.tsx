import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const arrivalCards = [
  { icon: assetPath('v2/iconos/AL-29.png'), key: 'plane' },
  { icon: assetPath('v2/iconos/AL-30.png'), key: 'local' },
  { icon: assetPath('v2/iconos/AL-31.png'), key: 'centralAmerica' },
  { icon: assetPath('v2/iconos/AL-22.png'), key: 'entry' },
] as const;

const lodgingZones = ['zone10', 'zone9', 'zone1'] as const;
const usefulKeys = ['weather', 'currency', 'language', 'safety'] as const;

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Datos utiles y logistica',
    heroSubtitle: 'Todo lo que necesitas saber para planificar tu viaje a Ciudad de Guatemala',
    venueTitle: 'Sede del evento',
    venueText1: 'ABRELATAM / CONDATOS 2026 se realizara en Ciudad de Guatemala, un punto de encuentro regional con conexiones aereas directas y una oferta cultural activa para recibir a la comunidad de datos abiertos.',
    venueText2: 'La sede principal sera el Centro Cultural Miguel Angel Asturias, un espacio emblematico ubicado en el corazon de la ciudad. Proximamente compartiremos informacion detallada sobre accesos, horarios, recomendaciones de transporte y servicios disponibles durante el evento.',
    arrivalTitle: 'Como llegar?',
    arrival: {
      plane: { title: 'Por avion', desc: 'El Aeropuerto Internacional La Aurora (GUA) esta ubicado a solo 15 minutos del centro de convenciones. Tiene conexiones directas con las principales ciudades de America Latina, Estados Unidos y Europa.', noteTitle: 'Principales aerolineas:', note: 'Copa Airlines, Avianca, Aeromexico, United, Delta, American Airlines' },
      local: { title: 'Transporte local', desc: 'Desde el aeropuerto y las zonas hoteleras podras moverte en taxis autorizados, transporte privado, shuttles o servicios por aplicacion.', noteTitle: 'Principales opciones:', note: 'Taxis autorizados, transporte privado, shuttles y servicios por aplicacion' },
      centralAmerica: { title: 'Desde Centroamerica', desc: 'Guatemala cuenta con conexiones terrestres regionales y rutas desde paises vecinos para quienes viajen por bus o transporte privado.', noteTitle: 'Principales rutas:', note: 'Conexiones terrestres desde Mexico, El Salvador, Honduras y Belice' },
      entry: { title: 'Requisitos de entrada', desc: 'Los requisitos migratorios dependen de tu pais de origen. Revisa la informacion oficial antes de comprar vuelos o reservar alojamiento.', noteTitle: 'Recomendacion:', note: 'Consulta los requisitos migratorios con anticipacion segun tu pais de origen' },
    },
    lodgingTitle: 'Alojamiento',
    hotelTitle: 'Hoteles con tarifa especial',
    hotelText: 'Hemos negociado tarifas preferenciales con varios hoteles cercanos a la sede. Los detalles y codigos de reserva se compartiran con las personas registradas.',
    zones: {
      zone10: { name: 'Zona 10', desc: 'La zona mas cercana al evento, con multiples opciones de restaurantes y servicios.', range: '$50-150 USD/noche' },
      zone9: { name: 'Zona 9', desc: 'Muy cerca de la sede, con opciones mas economicas y excelente ubicacion.', range: '$30-80 USD/noche' },
      zone1: { name: 'Zona 1 (Centro)', desc: 'Centro historico con opciones economicas, a 20 minutos del evento.', range: '$20-50 USD/noche' },
    },
    rangeLabel: 'Rango',
    usefulTitle: 'Informacion util',
    useful: {
      weather: { title: 'Clima en junio', desc: 'Junio es temporada de lluvias en Guatemala. Las temperaturas son agradables (15-25 C), pero te recomendamos traer paraguas o impermeable.' },
      currency: { title: 'Moneda', desc: 'La moneda oficial es el Quetzal (GTQ). Hay cajeros automaticos disponibles y se aceptan dolares estadounidenses en muchos establecimientos.' },
      language: { title: 'Idioma', desc: 'El espanol es el idioma oficial, pero el evento contara con traduccion simultanea espanol-ingles-portugues en las sesiones plenarias.' },
      safety: { title: 'Seguridad', desc: 'Como en cualquier ciudad grande, recomendamos tomar precauciones basicas. Las zonas del evento y hoteles cercanos son seguras y bien vigiladas.' },
    },
  },
  en: {
    heroTitle: 'Useful information and logistics',
    heroSubtitle: 'Everything you need to know to plan your trip to Guatemala City',
    venueTitle: 'Event venue',
    venueText1: 'ABRELATAM / CONDATOS 2026 will take place in Guatemala City, a regional meeting point with direct air connections and an active cultural scene to welcome the open data community.',
    venueText2: 'The main venue will be the Miguel Angel Asturias Cultural Center, an iconic space in the heart of the city. We will soon share detailed information about access, schedules, transportation recommendations, and services available during the event.',
    arrivalTitle: 'How to get there?',
    arrival: {
      plane: { title: 'By plane', desc: 'La Aurora International Airport (GUA) is located about 15 minutes from the convention area. It has direct connections with major cities in Latin America, the United States, and Europe.', noteTitle: 'Main airlines:', note: 'Copa Airlines, Avianca, Aeromexico, United, Delta, American Airlines' },
      local: { title: 'Local transport', desc: 'From the airport and hotel areas, you can use authorized taxis, private transport, shuttles, or app-based services.', noteTitle: 'Main options:', note: 'Authorized taxis, private transport, shuttles, and app-based services' },
      centralAmerica: { title: 'From Central America', desc: 'Guatemala has regional land connections and routes from neighboring countries for those traveling by bus or private transport.', noteTitle: 'Main routes:', note: 'Land connections from Mexico, El Salvador, Honduras, and Belize' },
      entry: { title: 'Entry requirements', desc: 'Migration requirements depend on your country of origin. Check official information before buying flights or booking accommodation.', noteTitle: 'Recommendation:', note: 'Check migration requirements in advance according to your country of origin' },
    },
    lodgingTitle: 'Accommodation',
    hotelTitle: 'Hotels with special rates',
    hotelText: 'We have negotiated preferential rates with several hotels near the venue. Details and booking codes will be shared with registered participants.',
    zones: {
      zone10: { name: 'Zone 10', desc: 'The area closest to the event, with many restaurant and service options.', range: '$50-150 USD/night' },
      zone9: { name: 'Zone 9', desc: 'Very close to the venue, with more affordable options and an excellent location.', range: '$30-80 USD/night' },
      zone1: { name: 'Zone 1 (Downtown)', desc: 'Historic center with affordable options, about 20 minutes from the event.', range: '$20-50 USD/night' },
    },
    rangeLabel: 'Range',
    usefulTitle: 'Useful information',
    useful: {
      weather: { title: 'June weather', desc: 'June is rainy season in Guatemala. Temperatures are pleasant (15-25 C), but we recommend bringing an umbrella or raincoat.' },
      currency: { title: 'Currency', desc: 'The official currency is the Quetzal (GTQ). ATMs are available and US dollars are accepted in many establishments.' },
      language: { title: 'Language', desc: 'Spanish is the official language, but the event will include Spanish-English-Portuguese interpretation in plenary sessions.' },
      safety: { title: 'Safety', desc: 'As in any large city, we recommend basic precautions. The event areas and nearby hotels are safe and well monitored.' },
    },
  },
  pt: {
    heroTitle: 'Informacoes uteis e logistica',
    heroSubtitle: 'Tudo o que voce precisa saber para planejar sua viagem a Cidade da Guatemala',
    venueTitle: 'Sede do evento',
    venueText1: 'ABRELATAM / CONDATOS 2026 sera realizado na Cidade da Guatemala, um ponto de encontro regional com conexoes aereas diretas e uma oferta cultural ativa para receber a comunidade de dados abertos.',
    venueText2: 'A sede principal sera o Centro Cultural Miguel Angel Asturias, um espaco emblematico no coracao da cidade. Em breve compartilharemos informacoes detalhadas sobre acessos, horarios, recomendacoes de transporte e servicos disponiveis durante o evento.',
    arrivalTitle: 'Como chegar?',
    arrival: {
      plane: { title: 'De aviao', desc: 'O Aeroporto Internacional La Aurora (GUA) fica a cerca de 15 minutos da area de convencoes. Tem conexoes diretas com as principais cidades da America Latina, Estados Unidos e Europa.', noteTitle: 'Principais companhias:', note: 'Copa Airlines, Avianca, Aeromexico, United, Delta, American Airlines' },
      local: { title: 'Transporte local', desc: 'Do aeroporto e das areas hoteleiras, voce podera usar taxis autorizados, transporte privado, shuttles ou servicos por aplicativo.', noteTitle: 'Principais opcoes:', note: 'Taxis autorizados, transporte privado, shuttles e servicos por aplicativo' },
      centralAmerica: { title: 'Da America Central', desc: 'A Guatemala conta com conexoes terrestres regionais e rotas desde paises vizinhos para quem viaja de onibus ou transporte privado.', noteTitle: 'Principais rotas:', note: 'Conexoes terrestres desde Mexico, El Salvador, Honduras e Belize' },
      entry: { title: 'Requisitos de entrada', desc: 'Os requisitos migratorios dependem do seu pais de origem. Consulte as informacoes oficiais antes de comprar voos ou reservar hospedagem.', noteTitle: 'Recomendacao:', note: 'Consulte os requisitos migratorios com antecedencia conforme seu pais de origem' },
    },
    lodgingTitle: 'Hospedagem',
    hotelTitle: 'Hoteis com tarifa especial',
    hotelText: 'Negociamos tarifas preferenciais com varios hoteis proximos a sede. Os detalhes e codigos de reserva serao compartilhados com as pessoas registradas.',
    zones: {
      zone10: { name: 'Zona 10', desc: 'A zona mais proxima do evento, com varias opcoes de restaurantes e servicos.', range: '$50-150 USD/noite' },
      zone9: { name: 'Zona 9', desc: 'Muito perto da sede, com opcoes mais economicas e excelente localizacao.', range: '$30-80 USD/noite' },
      zone1: { name: 'Zona 1 (Centro)', desc: 'Centro historico com opcoes economicas, a 20 minutos do evento.', range: '$20-50 USD/noite' },
    },
    rangeLabel: 'Faixa',
    usefulTitle: 'Informacoes uteis',
    useful: {
      weather: { title: 'Clima em junho', desc: 'Junho e temporada de chuvas na Guatemala. As temperaturas sao agradaveis (15-25 C), mas recomendamos trazer guarda-chuva ou capa de chuva.' },
      currency: { title: 'Moeda', desc: 'A moeda oficial e o Quetzal (GTQ). Ha caixas eletronicos disponiveis e dolares americanos sao aceitos em muitos estabelecimentos.' },
      language: { title: 'Idioma', desc: 'O espanhol e o idioma oficial, mas o evento contara com interpretacao espanhol-ingles-portugues nas sessoes plenarias.' },
      safety: { title: 'Seguranca', desc: 'Como em qualquer cidade grande, recomendamos precaucoes basicas. As zonas do evento e hoteis proximos sao seguras e bem monitoradas.' },
    },
  },
};

export default function ViajeSede() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <>
      <PageHero
        title={text.heroTitle}
        subtitle={text.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-47.png')}
        icon={<img src={assetPath('v2/iconos/AL-39.png')} alt="" className="h-20 w-20 object-contain" />}
      />

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-20 max-w-5xl">
            <h2 className="mb-10 text-3xl font-bold text-[#10184a] md:text-4xl">{text.venueTitle}</h2>
            <div className="max-w-4xl space-y-6 text-base leading-relaxed text-slate-800 dark:text-slate-200">
              <p>{text.venueText1}</p>
              <p>{text.venueText2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#10184a] md:text-3xl">{text.arrivalTitle}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {arrivalCards.map(({ icon, key }) => {
              const item = text.arrival[key];
              return (
                <article key={key} className="rounded-lg bg-white px-8 py-8 shadow-sm dark:bg-slate-900">
                  <img src={icon} alt="" className="mb-5 h-12 w-12 object-contain" />
                  <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.desc}</p>
                  <div className="rounded-md bg-slate-100 px-5 py-4 text-xs leading-relaxed text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                    <strong>{item.noteTitle}</strong>
                    <br />
                    {item.note}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-20 max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#10184a] md:text-4xl">{text.lodgingTitle}</h2>
            <div className="mb-8 rounded-lg bg-slate-100 px-8 py-10 dark:bg-slate-800 md:flex md:items-start md:gap-8 md:px-12">
              <img src={assetPath('v2/iconos/AL-32.png')} alt="" className="mb-5 h-14 w-14 object-contain md:mb-0" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">{text.hotelTitle}</h3>
                <p className="max-w-4xl text-base leading-relaxed text-slate-900 dark:text-slate-200">{text.hotelText}</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {lodgingZones.map((key) => {
                const zone = text.zones[key];
                return (
                  <article key={key} className="rounded-lg bg-slate-100 px-8 py-8 dark:bg-slate-800">
                    <img src={assetPath('v2/iconos/AL-32.png')} alt="" className="mb-5 h-14 w-14 object-contain" />
                    <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">{zone.name}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{zone.desc}</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{text.rangeLabel}: {zone.range}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 md:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#10184a] md:text-4xl">{text.usefulTitle}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {usefulKeys.map((key) => {
              const item = text.useful[key];
              return (
                <article key={key} className="rounded-lg bg-white px-10 py-12 dark:bg-slate-900">
                  <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="text-base leading-snug text-slate-700 dark:text-slate-300">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
