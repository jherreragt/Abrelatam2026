import { Link } from 'react-router-dom';
import { Plane, Car, MapPin, Hotel, Cloud, DollarSign, MessageCircle, Shield, ArrowRight } from 'lucide-react';
import { ROUTES } from '../router/routes';

const arrival = [
  { icon: Plane, title: 'Vuelo internacional', desc: 'El Aeropuerto Internacional La Aurora (GUA) tiene conexiones directas con toda América Latina y varias ciudades de EE.UU. y Europa.', color: 'blue' },
  { icon: Car, title: 'Renta de vehículo', desc: 'Todas las principales empresas de renta de autos están disponibles en el aeropuerto. El traslado al centro es de aprox. 20 minutos.', color: 'emerald' },
  { icon: MapPin, title: 'Desde Centroamérica', desc: 'Accesible por bus desde México, El Salvador, Honduras, Belize y Costa Rica. Múltiples compañías ofrecen servicio directo a Guatemala City.', color: 'amber' },
  { icon: MessageCircle, title: 'Visas y documentos', desc: 'Muchos países de América Latina no necesitan visa para Guatemala. Consulta con tu embajada con al menos 60 días de anticipación.', color: 'rose' },
];

const zones = [
  { name: 'Zona 1 – Centro histórico', desc: 'Caminando al venue. Opciones más económicas.', price: 'USD 30–80/noche' },
  { name: 'Zona 10 – Zona Viva', desc: 'Barrio moderno, restaurantes y vida nocturna.', price: 'USD 70–200/noche' },
  { name: 'Zona 13 – Aeropuerto', desc: 'Práctico si llegas tarde o sales muy temprano.', price: 'USD 50–120/noche' },
];

const info = [
  { icon: Cloud, title: 'Clima', desc: 'Octubre es temporada de lluvia. Trae ropa ligera y un impermeable. Temperatura promedio: 18–24°C.' },
  { icon: DollarSign, title: 'Moneda', desc: 'Quetzal guatemalteco (GTQ). 1 USD ≈ 7.7 GTQ. Se aceptan dólares en hoteles y restaurantes turísticos.' },
  { icon: MessageCircle, title: 'Idioma', desc: 'El español es el idioma oficial. El inglés se habla en hoteles y zonas turísticas.' },
  { icon: Shield, title: 'Seguridad', desc: 'Usa transporte oficial o ridesharing (Uber). Evita zonas poco frecuentadas de noche.' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
  rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
};

export default function ViajeSede() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Logística
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Viaje y sede
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para llegar y disfrutar ABRELATAM / CONDATOS 2026 en Guatemala.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Cómo llegar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Acceso a Guatemala</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
            {arrival.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/40 card-glow flex gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Alojamiento</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Dónde hospedarse</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Recomendamos reservar con anticipación. Habrá un hotel oficial anunciado próximamente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">
            {zones.map(({ name, desc, price }) => (
              <div key={name} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/40">
                <div className="flex items-center gap-2 mb-2">
                  <Hotel size={16} className="text-blue-500 flex-shrink-0" />
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{name}</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{desc}</p>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Tips</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Información útil</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
            {info.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/40">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-7 max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">¿Necesitas apoyo económico para el viaje?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
              Contamos con un programa de becas que incluye apoyo para transporte y alojamiento.
            </p>
            <Link to={ROUTES.BECAS} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5">
              Ver programa de becas <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
