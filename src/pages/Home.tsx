import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HeroSlider from '../components/HeroSlider';
import BlogCard from '../components/BlogCard';
import { getRecentPosts } from '../data/blogPosts';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

const thematicIcons = [
  assetPath('v2/iconos/AL-15.png'),
  assetPath('v2/iconos/AL-16.png'),
  assetPath('v2/iconos/AL-17.png'),
  assetPath('v2/iconos/AL-18.png'),
  assetPath('v2/iconos/AL-19.png'),
  assetPath('v2/iconos/AL-20.png'),
];

export default function Home() {
  const { t } = useLanguage();
  const recentPosts = getRecentPosts(6);
  const newsPerPage = 2;
  const newsPageCount = Math.ceil(recentPosts.length / newsPerPage);
  const [newsPage, setNewsPage] = useState(0);
  const visiblePosts = recentPosts.slice(newsPage * newsPerPage, newsPage * newsPerPage + newsPerPage);

  const goToPreviousNews = () => {
    setNewsPage(current => (current === 0 ? newsPageCount - 1 : current - 1));
  };

  const goToNextNews = () => {
    setNewsPage(current => (current === newsPageCount - 1 ? 0 : current + 1));
  };

  return (
    <>
      <HeroSlider />

      {/* Thematic Tracks */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-base font-medium leading-relaxed text-[#262262] md:text-lg">
              {t('home.introText')}
            </p>

            <h2 className="mt-14 text-2xl font-bold text-[#262262] md:text-3xl">
              {t('home.thematicTitle')}
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {(['thematic1', 'thematic2', 'thematic3', 'thematic4', 'thematic5', 'thematic6'] as const).map((key, i) => (
              <div key={key} className="flex flex-col items-center text-center">
                <img
                  src={thematicIcons[i]}
                  alt=""
                  className="mb-6 h-20 w-20 object-contain"
                />
                <p className="max-w-40 text-sm font-semibold leading-snug text-[#262262]">
                  {t(`home.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-[#329bd0]">
          <img
            src={assetPath('v2/banner/AL-56.png')}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          />
          <div className="relative mx-auto flex min-h-[360px] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center text-white md:min-h-[420px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-wide">
              {t('home.bannerEyebrow')}
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              {t('home.bannerTitle')}
            </h2>
            <p className="mb-8 max-w-3xl text-sm font-medium leading-relaxed md:text-base">
              {t('home.bannerText')}
            </p>
            <Link to={ROUTES.PRE_REGISTRO}>
              <button className="rounded bg-[#262262] px-12 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#1a1748]">
                {t('home.bannerButton')}
              </button>
            </Link>
          </div>
        </div>

        <div className="h-[320px] w-full overflow-hidden md:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.508!2d-90.51993!3d14.62708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a224c1b0dddd%3A0xafe1e081d63e5245!2sCentro%20Cultural%20Miguel%20%C3%81ngel%20Asturias!5e0!3m2!1ses!2sgt!4v1710000000000!5m2!1ses!2sgt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('home.venueName')}
          />
        </div>
      </section>

      {/* Latest News - temporarily hidden */}
      {false && <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#262262]">
            {t('home.newsTitle')}
          </h2>

          <div className="relative">
            {newsPageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousNews}
                  aria-label="Noticias anteriores"
                  className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-5xl font-light leading-none text-[#262262] transition-colors hover:text-[#329bd0] md:block"
                >
                  &lsaquo;
                </button>
                <button
                  type="button"
                  onClick={goToNextNews}
                  aria-label="Noticias siguientes"
                  className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-5xl font-light leading-none text-[#262262] transition-colors hover:text-[#329bd0] md:block"
                >
                  &rsaquo;
                </button>
              </>
            )}

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {visiblePosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {Array.from({ length: newsPageCount }).map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setNewsPage(index)}
                aria-label={`Ver grupo de noticias ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${index === newsPage ? 'bg-[#329bd0]' : 'bg-slate-300 hover:bg-[#329bd0]'}`}
              >
                <span className="sr-only">Ver grupo de noticias {index + 1}</span>
              </button>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl justify-end">
            <Link
              to={ROUTES.NOTICIAS}
              className="text-sm font-bold uppercase tracking-wide text-[#329bd0] transition-colors hover:text-[#262262]"
            >
              Ver mas noticias
            </Link>
          </div>
        </div>
      </section>}
    </>
  );
}
