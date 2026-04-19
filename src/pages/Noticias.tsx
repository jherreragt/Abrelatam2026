import { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { useLanguage, type Language } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const categories = ['Todos', ...Array.from(new Set(blogPosts.map(p => p.category)))];

const copy: Record<Language, { title: string; subtitle: string }> = {
  es: { title: 'Noticias', subtitle: 'Novedades, convocatorias, análisis y reflexiones sobre datos abiertos en América Latina' },
  en: { title: 'News', subtitle: 'Updates, calls, analysis and insights about open data in Latin America' },
  pt: { title: 'Notícias', subtitle: 'Novidades, chamadas, análises e reflexões sobre dados abertos na América Latina' },
};

export default function Noticias() {
  const { language } = useLanguage();
  const text = copy[language];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHero
        title={text.title}
        subtitle={text.subtitle}
        backgroundImage={assetPath('v2/slider/AL-45.png')}
      />

      <Section bgColor="gray" className="py-16 md:py-20">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#4367e1] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#4367e1] dark:hover:border-[#4367e1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {sorted.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {sorted.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            No hay artículos en esta categoría aún.
          </div>
        )}
      </Section>
    </>
  );
}
