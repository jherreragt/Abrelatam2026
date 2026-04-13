import { Link } from 'react-router-dom';
import { Heart, ExternalLink, Star, Award } from 'lucide-react';
import { ROUTES } from '../router/routes';

const mainSponsors = [
  { name: 'OEA', url: 'https://www.oas.org', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/OAS_Logo.svg/1200px-OAS_Logo.svg.png' },
  { name: 'ILDA', url: 'https://idatosabiertos.org', logo: 'https://idatosabiertos.org/wp-content/uploads/2021/08/ilda-logo.png' },
];

const partners = [
  { name: 'Hivos', url: 'https://hivos.org', logo: 'https://hivos.org/wp-content/themes/hivos/assets/images/hivos-logo.svg' },
  { name: 'Red Ciudadana', url: 'https://redciudadana.org', logo: 'https://redciudadana.org/images/logo.png' },
  { name: 'Open Data Charter', url: 'https://opendatacharter.org', logo: 'https://opendatacharter.org/wp-content/uploads/2021/01/ODC_HiRes_2020.png' },
];

const sponsorTiers = [
  { tier: 'Diamante', icon: Star, color: 'from-sky-400 to-blue-600', benefits: ['Logo en material oficial', 'Espacio de exposición', '5 pases VIP', 'Mención en todas las comunicaciones', 'Sesión patrocinada'], price: 'USD 10,000+' },
  { tier: 'Oro', icon: Award, color: 'from-amber-400 to-yellow-600', benefits: ['Logo en material oficial', '3 pases VIP', 'Mención en comunicaciones principales', 'Stand en el evento'], price: 'USD 5,000' },
  { tier: 'Plata', icon: Heart, color: 'from-slate-400 to-slate-600', benefits: ['Logo en material digital', '2 pases', 'Mención en redes sociales'], price: 'USD 2,500' },
];

export default function Aliados() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Aliados
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Aliados y patrocinadores
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Gracias a las organizaciones que hacen posible ABRELATAM / CONDATOS 2026.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Principal</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Organizadores principales</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            {mainSponsors.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="h-16 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <img src={s.logo} alt={s.name} className="max-h-16 max-w-[160px] object-contain" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Socios</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Partners estratégicos</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-20">
            {partners.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="h-12 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <img src={p.logo} alt={p.name} className="max-h-12 max-w-[130px] object-contain" />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{p.name}</span>
              </a>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Patrociná</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Sé parte como patrocinador</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Conecta tu organización con más de 500 líderes de datos abiertos en América Latina.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {sponsorTiers.map(({ tier, icon: Icon, color, benefits, price }) => (
              <div key={tier} className="bg-white dark:bg-slate-800/70 rounded-2xl border border-slate-100 dark:border-slate-700/40 overflow-hidden card-glow">
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{tier}</h3>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-5">{price}</div>
                  <ul className="space-y-2">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={ROUTES.CONTACTO}>
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
                <ExternalLink size={16} />
                Contáctanos para patrocinar
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
