import { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../lib/assetPath';

const categories = ['Todos', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export default function Noticias() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHero
        title={t('noticias.title')}
        subtitle={t('noticias.subtitle')}
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
                  ? 'bg-[#329bd0] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#329bd0] hover:text-[#329bd0]'
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
          <div className="text-center py-16 text-slate-400">
            {t('noticias.emptyCategory')}
          </div>
        )}
      </Section>
    </>
  );
}
