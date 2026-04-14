import { useState } from 'react';
import { Newspaper } from 'lucide-react';
import Section from '../components/Section';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const categories = ['Todos', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export default function Noticias() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Section bgColor="gray" className="pt-24">
        <div className="text-center mb-12">
          <Newspaper className="mx-auto mb-4 text-blue-500" size={48} />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Últimas Noticias
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Novedades, convocatorias, análisis y reflexiones sobre ABRELATAM/CONDATOS 2026 y el ecosistema de datos abiertos en América Latina.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'
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
