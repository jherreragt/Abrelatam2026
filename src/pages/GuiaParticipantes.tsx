import {
  Home,
  Car,
  UtensilsCrossed,
  Landmark,
  Building2,
  CloudSun,
  ShieldAlert,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const copy: Record<Language, any> = {
  es: {
    heroTitle: 'Bienvenidas y bienvenidos a Guatemala',
    heroSubtitle:
      'Una pequeña guía para moverte, comer, explorar y disfrutar de la ciudad durante Abrelatam/ConDatos 2026.',
    intro:
      'Los requisitos de ingreso a Guatemala dependen de tu nacionalidad y del tipo de pasaporte que tengas. Antes de viajar, te sugerimos consultar con las autoridades correspondientes en tu país y verificar los requisitos vigentes para ingresar a Guatemala.',

    lodgingIcon: Home,
    lodgingTitle: 'Dónde hospedarte',
    lodgingIntro:
      'Tu punto de entrada será el Aeropuerto Internacional La Aurora (GUA), ubicado en Ciudad de Guatemala y a pocos kilómetros de las zonas 4, 9 y 10, donde recomendamos hospedarte.',
    lodgingIntro2:
      'Para disfrutar cómodamente de la ciudad durante Abrelatam/ConDatos, recomendamos buscar alojamiento en zona 4, zona 9 o zona 10, áreas con una amplia oferta de hoteles, restaurantes, cafés y otros servicios.',
    lodgingSuggested: 'Nuestras sugerencias',
    lodgingSuggestedIntro:
      'Hemos gestionado tarifas especiales para sus reservas como participantes en Abrelatam/Condatos en los siguientes hoteles:',
    hotels: [
      {
        name: 'Good Hotel Guatemala City — Zona 4',
        desc: 'Ubicado en Cuatro Grados Norte, uno de los sectores más creativos y dinámicos de la ciudad, rodeado de cafés, restaurantes, diseño, arte y espacios de encuentro. Además, Good Hotel funciona como una empresa social y busca generar un impacto positivo a través de su operación.',
      },
      {
        name: 'Hilton Garden Inn Guatemala City — Zona 9',
        desc: 'Una opción cómoda y práctica, ubicada cerca de la Avenida La Reforma y a pocos kilómetros del Aeropuerto Internacional La Aurora. Cuenta con restaurante, gimnasio, Wi-Fi y otros servicios para una estancia cómoda.',
      },
    ],
    lodgingOther:
      'Adicionalmente, puedes hospedarte en alguno de los hoteles de las cadenas reconocidas internacionalmente ubicados en las zonas 4, 9 y 10, por su fácil acceso al lugar del evento.',
    lodgingAirbnbTitle: 'Airbnb y otras opciones',
    lodgingAirbnb:
      'Si prefieres un apartamento, zona 4 y zona 10 cuentan con una amplia oferta de alojamientos tipo Airbnb, especialmente alrededor de Cuatro Grados Norte y sus alrededores.',
    lodgingTip:
      'Tip: al elegir tu alojamiento, revisa que tenga una ubicación con fácil acceso a transporte y que las reseñas recientes sean buenas y por tu seguridad te recomendamos utilizar la aplicación oficial.',

    transportIcon: Car,
    transportTitle: 'Cómo moverte por la ciudad',
    uberTitle: 'Uber',
    uberDesc:
      'Uber está disponible en Ciudad de Guatemala y funciona las 24 horas. Para quienes visitan la ciudad por primera vez, recomendamos utilizar la aplicación para movilizarse entre el hotel, el lugar del evento, restaurantes y otros puntos de interés.',
    uberTip:
      'Como siempre, verifica que la información del vehículo y del conductor coincida con la que aparece en la aplicación antes de subirte.',
    uberLink: 'https://www.uber.com/gt/es/',
    amarilloTitle: 'Amarillo Express',
    amarilloDesc:
      'Otra opción es Amarillo Express, un servicio local de transporte que permite solicitar taxis o conductores particulares certificados. Si necesitas transporte desde el aeropuerto o tienes un traslado programado, te recomendamos solicitarlo con anticipación. La aplicación también permite programar viajes.',
    amarilloLink: 'https://amarilloexpress.com/',
    transportNote:
      'Nota: te sugerimos por tu seguridad, evitar los "taxis" informales ya que también pueden cobrar tarifas elevadas.',

    foodIcon: UtensilsCrossed,
    foodTitle: 'Guatemala también se conoce por su legado vivo gastronómico',
    foodIntro:
      'La Ciudad de Guatemala cuenta con una oferta gastronómica muy diversa: desde cocina tradicional guatemalteca hasta propuestas contemporáneas, internacionales y pequeños restaurantes y cafés independientes.',
    foodIntro2:
      'Algunas zonas que te recomendamos explorar son zona 10, zona 9 y zona 4.',
    foodGuatemalanTitle: 'Para probar sabores guatemaltecos',
    foodGuatemalan: [
      { name: 'Restaurante El Adobe — Zona 10', desc: 'Una buena opción para acercarte a la cocina guatemalteca en un ambiente cómodo y céntrico.' },
      { name: 'Arrin Cuan — Zona 9', desc: 'Una alternativa para probar cocina tradicional guatemalteca.' },
    ],
    foodExploreTitle: 'Para explorar la escena gastronómica de la ciudad',
    foodExplore1:
      'En zona 10 encontrarás una amplia variedad de restaurantes, desde cocina guatemalteca, steaks, hasta propuestas internacionales, como Gracia cocina de autor.',
    foodExplore2:
      'En zona 4, especialmente alrededor de Cuatro Grados Norte, puedes encontrar una escena más joven y experimental. Algunas opciones son Res & Pez, Mercado 24, L\u2019Aperó y muchas otras opciones más. También hay otras opciones más económicas en cadenas locales como: San Martín, Aida y diversas opciones de comida rápida, nacional e internacional.',

    historicIcon: Landmark,
    historicTitle: 'Una visita al Centro Histórico',
    historic1:
      'Si tienes unas horas libres, te recomendamos dedicar parte de tu visita a conocer el Centro Histórico de la Ciudad de Guatemala, el corazón histórico y cultural de la capital.',
    historic2:
      'La actual ciudad se trasladó al Valle de la Ermita en 1776, dando origen a la Nueva Guatemala de la Asunción. El Centro Histórico conserva parte de esa traza original y reúne edificios, plazas, iglesias, mercados y espacios culturales que cuentan distintas etapas de la historia de Guatemala.',
    historic3:
      'Puedes comenzar tu recorrido en la Plaza de la Constitución y caminar hacia la Catedral Metropolitana, te sugerimos el recorrido guiado en el Palacio Nacional de la Cultura, el Portal del Comercio y el Paseo de la Sexta. También vale la pena explorar sus museos, cafés, tiendas y mercados.',
    historic4: 'Es un lugar donde la historia convive con la vida cotidiana de la ciudad.',
    historicTip:
      'Nuestro consejo: si vas por primera vez, hazlo de día y considera realizar el recorrido con una persona local o un tour guiado y no descuides tus pertenencias, ni aceptes comida o bebidas de extraños.',

    venueIcon: Building2,
    venueTitle: 'Nuestra sede: Centro Cultural Miguel Ángel Asturias',
    venueSubtitle: 'Un espacio que también cuenta una historia',
    venue1:
      'Abrelatam/ConDatos 2026 tendrá lugar en uno de los espacios culturales más emblemáticos de Guatemala: el Centro Cultural Miguel Ángel Asturias, conocido también como Teatro Nacional.',
    venue2:
      'El complejo fue diseñado por el maestro guatemalteco Efraín Recinos, quien retomó y transformó el proyecto original del teatro. Su construcción se desarrolló entre 1961 y 1978 y fue inaugurado el 16 de junio de 1978.',
    venue3:
      'Su arquitectura es una de las expresiones más singulares del arte moderno guatemalteco y dialoga con formas, colores y referencias de la cultura y el paisaje del país. El complejo fue declarado Patrimonio Cultural de la Nación en 2012. Por lo cual, te pedimos que respetes algunas normas del lugar como cuidar el espacio, no consumir alimentos ni bebidas en el recinto.',
    venue4:
      'Durante Abrelatam/ConDatos tendremos la oportunidad de encontrarnos, conversar y compartir ideas dentro de este espacio que forma parte de la historia cultural de Guatemala.',
    venueFun:
      'Un dato bonito: el lobby de la Gran Sala Efraín Recinos está inspirado en un atardecer sobre el Lago de Atitlán.',
    venueEntry:
      'El Centro Cultural Miguel Ángel Asturias cuenta con dos entradas: una sobre la 24 calle (te sugerimos ingresar por acá) y la otra por la 6ta. Avenida.',

    weatherIcon: CloudSun,
    weatherTitle: '¿Qué clima esperar?',
    weatherLocation: 'Ciudad de Guatemala · 5–10 de octubre',
    weather1:
      'Octubre es parte de la temporada lluviosa en Guatemala, aunque suele haber una combinación de mañanas templadas, períodos de sol y lluvias que pueden aparecer durante la tarde o noche.',
    weather2:
      'Como referencia climática histórica, durante octubre las temperaturas en Ciudad de Guatemala suelen rondar aproximadamente 23 °C durante el día y 14–16 °C durante la noche, con una temperatura media cercana a los 18 °C. Octubre recibe alrededor de 100 mm de lluvia en promedio.',
    weatherPackTitle: '¿Qué empacar?',
    weatherPack: [
      'Un paraguas pequeño o impermeable',
      'Una chaqueta ligera para las noches y espacios con aire acondicionado',
      'Zapatos cómodos, especialmente si planeas caminar por el Centro Histórico',
      'Ropa ligera para el día',
      'Protector solar',
    ],
    weatherTip:
      'Tip: el clima puede cambiar rápidamente, así que la estrategia guatemalteca es sencilla: salir preparado para las cuatro estaciones en un mismo día.',

    safetyIcon: ShieldAlert,
    safetyTitle: 'Unas recomendaciones para disfrutar la ciudad',
    safetyIntro:
      'Ciudad de Guatemala es una ciudad grande y diversa, y como en muchas ciudades de América Latina, es importante tomar algunas precauciones básicas.',
    safetyList: [
      'Mantén tu celular y objetos de valor fuera de la vista cuando camines por la calle.',
      'Evita caminar solo/a por zonas que no conozcas, especialmente después de anochecer.',
      'Para desplazamientos entre zonas, recomendamos utilizar Uber o Amarillo Express.',
      'Si sales por la noche, muévete en grupo siempre que sea posible.',
      'La moneda oficial de Guatemala es el quetzal (GTQ). Durante tu visita podrás pagar con tarjeta en la mayoría de los hoteles, restaurantes, cafés, supermercados y comercios. Evita llevar grandes cantidades de efectivo. Puedes retirar efectivo en cajeros automáticos ubicados en bancos, centros comerciales y otros establecimientos formales. Si necesitas cambiar dinero, procura hacerlo en establecimientos autorizados.',
      'Cuando explores el Centro Histórico, recomendamos hacerlo durante el día y prestar atención a tus pertenencias en lugares concurridos.',
      'Si tienes dudas sobre dónde ir o cómo llegar, pregunta al equipo de Abrelatam/ConDatos. ¡Estamos aquí para ayudarte!',
    ],
    safetySummary:
      'En resumen: disfruta, explora, pregunta, come rico y conoce la ciudad. Solo aplica las mismas precauciones que tendrías al visitar cualquier gran ciudad latinoamericana.',

    closingTitle: 'Guatemala te espera',
    closing1:
      'Durante estos días no solo queremos que participes en Abrelatam/ConDatos. Queremos que tengas la oportunidad de conocer un poquito de Guatemala, sus sabores, sus paisajes, sus espacios culturales y, sobre todo, a su gente.',
    closing2:
      'Esperamos que tu recorrido por la ciudad sea también parte de la experiencia del encuentro.',
    closing3: 'Nos vemos en Guatemala. Y que las ideas sigan en movimiento.',
  },
  en: {
    heroTitle: 'Welcome to Guatemala',
    heroSubtitle:
      'A short guide to getting around, eating, exploring, and enjoying the city during Abrelatam/ConDatos 2026.',
    intro:
      'Entry requirements for Guatemala depend on your nationality and the type of passport you hold. Before traveling, we suggest checking with the relevant authorities in your country and verifying the current requirements to enter Guatemala.',

    lodgingIcon: Home,
    lodgingTitle: 'Where to stay',
    lodgingIntro:
      'Your entry point will be La Aurora International Airport (GUA), located in Guatemala City and just a few kilometers from zones 4, 9, and 10, where we recommend staying.',
    lodgingIntro2:
      'To comfortably enjoy the city during Abrelatam/ConDatos, we recommend finding accommodation in zone 4, zone 9, or zone 10 — areas with a wide range of hotels, restaurants, cafés, and other services.',
    lodgingSuggested: 'Our suggestions',
    lodgingSuggestedIntro:
      'We have arranged special rates for your bookings as Abrelatam/ConDatos participants at the following hotels:',
    hotels: [
      {
        name: 'Good Hotel Guatemala City — Zone 4',
        desc: 'Located in Cuatro Grados Norte, one of the most creative and dynamic areas of the city, surrounded by cafés, restaurants, design, art, and gathering spaces. Good Hotel also operates as a social enterprise and seeks to generate positive impact through its operations.',
      },
      {
        name: 'Hilton Garden Inn Guatemala City — Zone 9',
        desc: 'A comfortable and practical option, located near Avenida La Reforma and a few kilometers from La Aurora International Airport. It features a restaurant, gym, Wi-Fi, and other services for a comfortable stay.',
      },
    ],
    lodgingOther:
      'Additionally, you can stay at internationally recognized hotel chains located in zones 4, 9, and 10, for easy access to the venue.',
    lodgingAirbnbTitle: 'Airbnb and other options',
    lodgingAirbnb:
      'If you prefer an apartment, zone 4 and zone 10 have a wide range of Airbnb-style accommodations, especially around Cuatro Grados Norte and its surroundings.',
    lodgingTip:
      'Tip: when choosing your accommodation, check that it has easy access to transportation and that recent reviews are good. For your safety, we recommend using the official app.',

    transportIcon: Car,
    transportTitle: 'Getting around the city',
    uberTitle: 'Uber',
    uberDesc:
      'Uber is available in Guatemala City and operates 24 hours. For first-time visitors, we recommend using the app to get around between your hotel, the venue, restaurants, and other points of interest.',
    uberTip:
      'As always, verify that the vehicle and driver information matches what appears in the app before getting in.',
    uberLink: 'https://www.uber.com/gt/en/',
    amarilloTitle: 'Amarillo Express',
    amarilloDesc:
      'Another option is Amarillo Express, a local transportation service that allows you to request certified taxis or private drivers. If you need transportation from the airport or have a scheduled transfer, we recommend booking in advance. The app also allows you to schedule trips.',
    amarilloLink: 'https://amarilloexpress.com/',
    transportNote:
      'Note: for your safety, we suggest avoiding informal "taxis" as they may also charge high fares.',

    foodIcon: UtensilsCrossed,
    foodTitle: 'Guatemala is also known for its living gastronomic heritage',
    foodIntro:
      'Guatemala City has a very diverse gastronomic offering: from traditional Guatemalan cuisine to contemporary, international proposals and small independent restaurants and cafés.',
    foodIntro2:
      'Some zones we recommend exploring are zone 10, zone 9, and zone 4.',
    foodGuatemalanTitle: 'To taste Guatemalan flavors',
    foodGuatemalan: [
      { name: 'Restaurante El Adobe — Zone 10', desc: 'A good option to approach Guatemalan cuisine in a comfortable and central setting.' },
      { name: 'Arrin Cuan — Zone 9', desc: 'An alternative to try traditional Guatemalan cuisine.' },
    ],
    foodExploreTitle: 'To explore the city\u2019s gastronomic scene',
    foodExplore1:
      'In zone 10 you will find a wide variety of restaurants, from Guatemalan cuisine, steaks, to international proposals, such as Gracia cocina de autor.',
    foodExplore2:
      'In zone 4, especially around Cuatro Grados Norte, you can find a younger and more experimental scene. Some options are Res & Pez, Mercado 24, L\u2019Aperó, and many more. There are also more affordable options in local chains such as San Martín, Aida, and various fast food options, both national and international.',

    historicIcon: Landmark,
    historicTitle: 'A visit to the Historic Center',
    historic1:
      'If you have a few free hours, we recommend spending part of your visit exploring the Historic Center of Guatemala City, the historical and cultural heart of the capital.',
    historic2:
      'The current city was relocated to the Valle de la Ermita in 1776, giving rise to Nueva Guatemala de la Asunción. The Historic Center preserves part of that original layout and brings together buildings, plazas, churches, markets, and cultural spaces that tell different stages of Guatemala\u2019s history.',
    historic3:
      'You can start your tour at Plaza de la Constitución and walk towards the Catedral Metropolitana. We suggest the guided tour of the Palacio Nacional de la Cultura, the Portal del Comercio, and the Paseo de la Sexta. It is also worth exploring its museums, cafés, shops, and markets.',
    historic4: 'It is a place where history coexists with the everyday life of the city.',
    historicTip:
      'Our advice: if it is your first time, go during the day and consider doing the tour with a local person or a guided tour. Do not leave your belongings unattended and do not accept food or drinks from strangers.',

    venueIcon: Building2,
    venueTitle: 'Our venue: Centro Cultural Miguel Ángel Asturias',
    venueSubtitle: 'A space that also tells a story',
    venue1:
      'Abrelatam/ConDatos 2026 will take place in one of the most iconic cultural spaces in Guatemala: the Centro Cultural Miguel Ángel Asturias, also known as the Teatro Nacional.',
    venue2:
      'The complex was designed by Guatemalan master Efraín Recinos, who took over and transformed the original theater project. Construction took place between 1961 and 1978, and it was inaugurated on June 16, 1978.',
    venue3:
      'Its architecture is one of the most unique expressions of Guatemalan modern art and engages with shapes, colors, and references from the country\u2019s culture and landscape. The complex was declared Cultural Heritage of the Nation in 2012. Therefore, we ask you to respect some rules of the venue, such as taking care of the space and not consuming food or drinks inside the auditorium.',
    venue4:
      'During Abrelatam/ConDatos we will have the opportunity to meet, converse, and share ideas within this space that is part of Guatemala\u2019s cultural history.',
    venueFun:
      'A nice fact: the lobby of the Gran Sala Efraín Recinos is inspired by a sunset over Lake Atitlán.',
    venueEntry:
      'The Centro Cultural Miguel Ángel Asturias has two entrances: one on 24th Street (we suggest entering here) and the other on 6th Avenue.',

    weatherIcon: CloudSun,
    weatherTitle: 'What weather to expect',
    weatherLocation: 'Guatemala City · October 5–10',
    weather1:
      'October is part of the rainy season in Guatemala, although there is usually a mix of warm mornings, sunny periods, and rain that may appear in the afternoon or evening.',
    weather2:
      'As a historical climate reference, during October temperatures in Guatemala City typically hover around 23 °C during the day and 14–16 °C at night, with an average temperature close to 18 °C. October receives about 100 mm of rain on average.',
    weatherPackTitle: 'What to pack',
    weatherPack: [
      'A small umbrella or raincoat',
      'A light jacket for evenings and air-conditioned spaces',
      'Comfortable shoes, especially if you plan to walk through the Historic Center',
      'Light clothing for the day',
      'Sunscreen',
    ],
    weatherTip:
      'Tip: the weather can change quickly, so the Guatemalan strategy is simple: go out prepared for all four seasons in a single day.',

    safetyIcon: ShieldAlert,
    safetyTitle: 'Recommendations for enjoying the city',
    safetyIntro:
      'Guatemala City is a large and diverse city, and as in many Latin American cities, it is important to take some basic precautions.',
    safetyList: [
      'Keep your phone and valuables out of sight when walking on the street.',
      'Avoid walking alone in unfamiliar areas, especially after dark.',
      'For moving between zones, we recommend using Uber or Amarillo Express.',
      'If you go out at night, move in a group whenever possible.',
      'The official currency of Guatemala is the quetzal (GTQ). During your visit you can pay by card at most hotels, restaurants, cafés, supermarkets, and shops. Avoid carrying large amounts of cash. You can withdraw cash at ATMs located in banks, shopping malls, and other formal establishments. If you need to exchange money, do so at authorized establishments.',
      'When exploring the Historic Center, we recommend doing so during the day and paying attention to your belongings in crowded places.',
      'If you have questions about where to go or how to get there, ask the Abrelatam/ConDatos team. We are here to help!',
    ],
    safetySummary:
      'In short: enjoy, explore, ask, eat well, and get to know the city. Just apply the same precautions you would when visiting any large Latin American city.',

    closingTitle: 'Guatemala awaits you',
    closing1:
      'During these days we not only want you to participate in Abrelatam/ConDatos. We want you to have the opportunity to get to know a little bit of Guatemala — its flavors, its landscapes, its cultural spaces, and above all, its people.',
    closing2:
      'We hope that your journey through the city is also part of the experience of the gathering.',
    closing3: 'See you in Guatemala. And may the ideas keep moving.',
  },
  pt: {
    heroTitle: 'Bem-vindas e bem-vindos à Guatemala',
    heroSubtitle:
      'Um pequeno guia para se locomover, comer, explorar e aproveitar a cidade durante o Abrelatam/ConDatos 2026.',
    intro:
      'Os requisitos de entrada na Guatemala dependem da sua nacionalidade e do tipo de passaporte que você possui. Antes de viajar, sugerimos consultar as autoridades correspondentes em seu país e verificar os requisitos vigentes para entrar na Guatemala.',

    lodgingIcon: Home,
    lodgingTitle: 'Onde se hospedar',
    lodgingIntro:
      'Seu ponto de entrada será o Aeroporto Internacional La Aurora (GUA), localizado na Cidade da Guatemala e a poucos quilômetros das zonas 4, 9 e 10, onde recomendamos se hospedar.',
    lodgingIntro2:
      'Para aproveitar confortavelmente a cidade durante o Abrelatam/ConDatos, recomendamos buscar acomodação na zona 4, zona 9 ou zona 10, áreas com ampla oferta de hotéis, restaurantes, cafés e outros serviços.',
    lodgingSuggested: 'Nossas sugestões',
    lodgingSuggestedIntro:
      'Gerenciamos tarifas especiais para suas reservas como participantes do Abrelatam/ConDatos nos seguintes hotéis:',
    hotels: [
      {
        name: 'Good Hotel Guatemala City — Zona 4',
        desc: 'Localizado em Cuatro Grados Norte, um dos setores mais criativos e dinâmicos da cidade, cercado por cafés, restaurantes, design, arte e espaços de encontro. Além disso, o Good Hotel funciona como uma empresa social e busca gerar impacto positivo através de sua operação.',
      },
      {
        name: 'Hilton Garden Inn Guatemala City — Zona 9',
        desc: 'Uma opção cômoda e prática, localizada perto da Avenida La Reforma e a poucos quilômetros do Aeroporto Internacional La Aurora. Conta com restaurante, academia, Wi-Fi e outros serviços para uma estadia confortável.',
      },
    ],
    lodgingOther:
      'Adicionalmente, você pode se hospedar em algum dos hotéis de cadeias reconhecidas internacionalmente localizados nas zonas 4, 9 e 10, pelo fácil acesso ao local do evento.',
    lodgingAirbnbTitle: 'Airbnb e outras opções',
    lodgingAirbnb:
      'Se você prefere um apartamento, a zona 4 e a zona 10 contam com ampla oferta de acomodações tipo Airbnb, especialmente ao redor de Cuatro Grados Norte e seus arredores.',
    lodgingTip:
      'Dica: ao escolher sua acomodação, verifique se tem localização com fácil acesso a transporte e se as avaliações recentes são boas. Para sua segurança, recomendamos usar o aplicativo oficial.',

    transportIcon: Car,
    transportTitle: 'Como se locomover pela cidade',
    uberTitle: 'Uber',
    uberDesc:
      'O Uber está disponível na Cidade da Guatemala e funciona 24 horas. Para quem visita a cidade pela primeira vez, recomendamos usar o aplicativo para se locomover entre o hotel, o local do evento, restaurantes e outros pontos de interesse.',
    uberTip:
      'Como sempre, verifique se as informações do veículo e do motorista correspondem às que aparecem no aplicativo antes de entrar.',
    uberLink: 'https://www.uber.com/gt/es/',
    amarilloTitle: 'Amarillo Express',
    amarilloDesc:
      'Outra opção é o Amarillo Express, um serviço local de transporte que permite solicitar táxis ou motoristas particulares certificados. Se você precisa de transporte do aeroporto ou tem uma transferência programada, recomendamos solicitar com antecedência. O aplicativo também permite programar viagens.',
    amarilloLink: 'https://amarilloexpress.com/',
    transportNote:
      'Nota: sugerimos por sua segurança evitar os "táxis" informais, pois também podem cobrar tarifas elevadas.',

    foodIcon: UtensilsCrossed,
    foodTitle: 'A Guatemala também se conhece por sua herança gastronômica viva',
    foodIntro:
      'A Cidade da Guatemala conta com uma oferta gastronômica muito diversa: desde cozinha tradicional guatemalteca até propostas contemporâneas, internacionais e pequenos restaurantes e cafés independentes.',
    foodIntro2:
      'Algumas zonas que recomendamos explorar são zona 10, zona 9 e zona 4.',
    foodGuatemalanTitle: 'Para provar sabores guatemaltecos',
    foodGuatemalan: [
      { name: 'Restaurante El Adobe — Zona 10', desc: 'Uma boa opção para se aproximar da cozinha guatemalteca em um ambiente cômodo e central.' },
      { name: 'Arrin Cuan — Zona 9', desc: 'Uma alternativa para experimentar cozinha tradicional guatemalteca.' },
    ],
    foodExploreTitle: 'Para explorar a cena gastronômica da cidade',
    foodExplore1:
      'Na zona 10 você encontrará uma ampla variedade de restaurantes, desde cozinha guatemalteca, steaks, até propostas internacionais, como Gracia cocina de autor.',
    foodExplore2:
      'Na zona 4, especialmente ao redor de Cuatro Grados Norte, você pode encontrar uma cena mais jovem e experimental. Algumas opções são Res & Pez, Mercado 24, L\u2019Aperó e muitas outras. Também há opções mais econômicas em cadeias locais como San Martín, Aida e diversas opções de comida rápida, nacional e internacional.',

    historicIcon: Landmark,
    historicTitle: 'Uma visita ao Centro Histórico',
    historic1:
      'Se você tem algumas horas livres, recomendamos dedicar parte da sua visita a conhecer o Centro Histórico da Cidade da Guatemala, o coração histórico e cultural da capital.',
    historic2:
      'A atual cidade foi transferida para o Valle de la Ermita em 1776, dando origem a Nueva Guatemala de la Asunción. O Centro Histórico preserva parte desse traçado original e reúne edifícios, praças, igrejas, mercados e espaços culturais que contam diferentes etapas da história da Guatemala.',
    historic3:
      'Você pode começar seu percurso na Plaza de la Constitución e caminhar em direção à Catedral Metropolitana. Sugerimos o tour guiado no Palacio Nacional de la Cultura, o Portal del Comercio e o Paseo de la Sexta. Também vale a pena explorar seus museus, cafés, lojas e mercados.',
    historic4: 'É um lugar onde a história convive com o cotidiano da cidade.',
    historicTip:
      'Nosso conselho: se for a primeira vez, vá durante o dia e considere fazer o percurso com uma pessoa local ou um tour guiado. Não descuide de seus pertences nem aceite comida ou bebidas de estranhos.',

    venueIcon: Building2,
    venueTitle: 'Nossa sede: Centro Cultural Miguel Ángel Asturias',
    venueSubtitle: 'Um espaço que também conta uma história',
    venue1:
      'O Abrelatam/ConDatos 2026 acontecerá em um dos espaços culturais mais emblemáticos da Guatemala: o Centro Cultural Miguel Ángel Asturias, também conhecido como Teatro Nacional.',
    venue2:
      'O complexo foi projetado pelo mestre guatemalteco Efraín Recinos, que retomou e transformou o projeto original do teatro. A construção foi desenvolvida entre 1961 e 1978 e foi inaugurado em 16 de junho de 1978.',
    venue3:
      'Sua arquitetura é uma das expressões mais singulares da arte moderna guatemalteca e dialoga com formas, cores e referências da cultura e da paisagem do país. O complexo foi declarado Patrimônio Cultural da Nação em 2012. Por isso, pedimos que respeite algumas normas do local, como cuidar do espaço e não consumir alimentos ou bebidas no recinto.',
    venue4:
      'Durante o Abrelatam/ConDatos teremos a oportunidade de nos encontrar, conversar e compartilhar ideias dentro deste espaço que faz parte da história cultural da Guatemala.',
    venueFun:
      'Um dado bonito: o lobby da Gran Sala Efraín Recinos é inspirado em um pôr do sol sobre o Lago de Atitlán.',
    venueEntry:
      'O Centro Cultural Miguel Ángel Asturias tem duas entradas: uma na 24 calle (sugerimos entrar por aqui) e a outra na 6ta. Avenida.',

    weatherIcon: CloudSun,
    weatherTitle: 'Que clima esperar',
    weatherLocation: 'Cidade da Guatemala · 5–10 de outubro',
    weather1:
      'Outubro faz parte da temporada de chuvas na Guatemala, embora geralmente haja uma combinação de manhãs amenas, períodos de sol e chuvas que podem aparecer durante a tarde ou noite.',
    weather2:
      'Como referência climática histórica, durante outubro as temperaturas na Cidade da Guatemala costumam girar em torno de 23 °C durante o dia e 14–16 °C durante a noite, com temperatura média próxima a 18 °C. Outubro recebe cerca de 100 mm de chuva em média.',
    weatherPackTitle: 'O que levar',
    weatherPack: [
      'Um guarda-chuva pequeno ou impermeável',
      'Uma jaqueta leve para as noites e espaços com ar condicionado',
      'Calçados confortáveis, especialmente se planeja caminhar pelo Centro Histórico',
      'Roupas leves para o dia',
      'Protetor solar',
    ],
    weatherTip:
      'Dica: o clima pode mudar rapidamente, então a estratégia guatemalteca é simples: sair preparado para as quatro estações em um mesmo dia.',

    safetyIcon: ShieldAlert,
    safetyTitle: 'Recomendações para aproveitar a cidade',
    safetyIntro:
      'A Cidade da Guatemala é uma cidade grande e diversa, e como em muitas cidades da América Latina, é importante tomar algumas precauções básicas.',
    safetyList: [
      'Mantenha seu celular e objetos de valor fora de vista quando caminhar pela rua.',
      'Evite caminhar sozinho/a por zonas que não conhece, especialmente depois de escurecer.',
      'Para deslocamentos entre zonas, recomendamos usar Uber ou Amarillo Express.',
      'Se sair à noite, mova-se em grupo sempre que possível.',
      'A moeda oficial da Guatemala é o quetzal (GTQ). Durante sua visita você pode pagar com cartão na maioria dos hotéis, restaurantes, cafés, supermercados e comércios. Evite levar grandes quantias em dinheiro. Você pode sacar dinheiro em caixas eletrônicos localizados em bancos, shopping centers e outros estabelecimentos formais. Se precisar trocar dinheiro, faça em estabelecimentos autorizados.',
      'Ao explorar o Centro Histórico, recomendamos fazê-lo durante o dia e prestar atenção aos seus pertences em locais movimentados.',
      'Se tiver dúvidas sobre para onde ir ou como chegar, pergunte à equipe do Abrelatam/ConDatos. Estamos aqui para ajudar!',
    ],
    safetySummary:
      'Em resumo: aproveite, explore, pergunte, coma bem e conheça a cidade. Aplique as mesmas precauções que teria ao visitar qualquer grande cidade latino-americana.',

    closingTitle: 'A Guatemala te espera',
    closing1:
      'Durante estes dias não apenas queremos que você participe do Abrelatam/ConDatos. Queremos que você tenha a oportunidade de conhecer um pouco da Guatemala — seus sabores, suas paisagens, seus espaços culturais e, sobretudo, sua gente.',
    closing2:
      'Esperamos que seu percurso pela cidade também faça parte da experiência do encontro.',
    closing3: 'Nos vemos na Guatemala. E que as ideias continuem em movimento.',
  },
};

type HotelInfo = { name: string; desc: string };

export default function GuiaParticipantes() {
  const { language } = useLanguage();
  const t = copy[language];

  const LodgingIcon = t.lodgingIcon;
  const TransportIcon = t.transportIcon;
  const FoodIcon = t.foodIcon;
  const HistoricIcon = t.historicIcon;
  const VenueIcon = t.venueIcon;
  const WeatherIcon = t.weatherIcon;
  const SafetyIcon = t.safetyIcon;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        backgroundImage={assetPath('v2/slider/AL-49.png')}
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-base leading-relaxed text-slate-600">{t.intro}</p>
        </div>
      </section>

      {/* Lodging */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <LodgingIcon size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.lodgingTitle}</h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.lodgingIntro}</p>
            <p>{t.lodgingIntro2}</p>
          </div>

          <div className="mt-10">
            <h3 className="mb-3 text-lg font-bold text-[#262262]">{t.lodgingSuggested}</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">{t.lodgingSuggestedIntro}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {t.hotels.map((hotel: HotelInfo) => (
                <article key={hotel.name} className="rounded-2xl bg-white p-7 border border-slate-100">
                  <h4 className="mb-2 font-bold text-slate-900 text-sm">{hotel.name}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{hotel.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.lodgingOther}</p>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-7 border border-slate-100">
            <h3 className="mb-2 text-lg font-bold text-[#262262]">{t.lodgingAirbnbTitle}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">{t.lodgingAirbnb}</p>
            <p className="text-xs leading-relaxed text-slate-500 italic">{t.lodgingTip}</p>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <TransportIcon size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.transportTitle}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-50 p-7 border border-slate-100">
              <h3 className="mb-3 font-bold text-slate-900">{t.uberTitle}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{t.uberDesc}</p>
              <p className="mb-4 text-xs leading-relaxed text-slate-500 italic">{t.uberTip}</p>
              <a
                href={t.uberLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#329bd0] hover:underline"
              >
                {t.uberTitle}
                <ExternalLink size={14} />
              </a>
            </article>

            <article className="rounded-2xl bg-slate-50 p-7 border border-slate-100">
              <h3 className="mb-3 font-bold text-slate-900">{t.amarilloTitle}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{t.amarilloDesc}</p>
              <a
                href={t.amarilloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#329bd0] hover:underline"
              >
                {t.amarilloTitle}
                <ExternalLink size={14} />
              </a>
            </article>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-500 italic">{t.transportNote}</p>
        </div>
      </section>

      {/* Food */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <FoodIcon size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.foodTitle}</h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.foodIntro}</p>
            <p>{t.foodIntro2}</p>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-bold text-[#262262]">{t.foodGuatemalanTitle}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {t.foodGuatemalan.map((item: { name: string; desc: string }) => (
                <article key={item.name} className="rounded-2xl bg-white p-7 border border-slate-100">
                  <h4 className="mb-2 font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-bold text-[#262262]">{t.foodExploreTitle}</h3>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              <p>{t.foodExplore1}</p>
              <p>{t.foodExplore2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Center */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <HistoricIcon size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.historicTitle}</h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.historic1}</p>
            <p>{t.historic2}</p>
            <p>{t.historic3}</p>
            <p>{t.historic4}</p>
          </div>
          <div className="mt-6 rounded-xl bg-[#329bd0]/10 border border-[#329bd0]/20 p-5">
            <p className="text-xs leading-relaxed text-slate-700">{t.historicTip}</p>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <VenueIcon size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.venueTitle}</h2>
              <p className="text-sm text-slate-500 mt-1">{t.venueSubtitle}</p>
            </div>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.venue1}</p>
            <p>{t.venue2}</p>
            <p>{t.venue3}</p>
            <p>{t.venue4}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-5 border border-slate-100">
              <p className="text-xs leading-relaxed text-slate-600">
                <span className="font-semibold text-[#262262]">{t.venueFun}</span>
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-slate-100">
              <p className="text-xs leading-relaxed text-slate-600">{t.venueEntry}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <WeatherIcon size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.weatherTitle}</h2>
              <p className="text-sm text-slate-500 mt-1">{t.weatherLocation}</p>
            </div>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <p>{t.weather1}</p>
            <p>{t.weather2}</p>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-7 border border-slate-100">
            <h3 className="mb-4 font-bold text-[#262262]">{t.weatherPackTitle}</h3>
            <ul className="space-y-2.5">
              {t.weatherPack.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#329bd0]" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-slate-500 italic">{t.weatherTip}</p>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#329bd0] flex-shrink-0">
              <SafetyIcon size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.safetyTitle}</h2>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-slate-700">{t.safetyIntro}</p>
          <ul className="space-y-3">
            {t.safetyList.map((item: string) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#329bd0]" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-[#329bd0]/10 border border-[#329bd0]/20 p-5">
            <p className="text-sm leading-relaxed text-slate-700 font-medium">{t.safetySummary}</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#262262] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#329bd0]/20">
            <Sparkles size={28} className="text-[#329bd0]" />
          </div>
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{t.closingTitle}</h2>
          <div className="space-y-5 text-sm leading-relaxed text-white/80">
            <p>{t.closing1}</p>
            <p>{t.closing2}</p>
            <p className="text-base font-semibold text-white">{t.closing3}</p>
          </div>
        </div>
      </section>
    </>
  );
}
