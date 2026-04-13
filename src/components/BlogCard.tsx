import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  'Anuncio': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Convocatoria': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Becas': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Reflexión': 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  'Sede': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  'Análisis': 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const catClass = categoryColors[post.category] ?? 'bg-blue-100 text-blue-700';

  if (featured) {
    return (
      <Link
        to={`/noticias/${post.slug}`}
        className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 h-56 md:h-auto overflow-hidden flex-shrink-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-between p-6 md:p-8 flex-1">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catClass}`}>
                {post.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium">Destacado</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{post.author}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar size={11} />
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <Clock size={11} />
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
              Leer <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catClass}`}>
            {post.category}
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Calendar size={11} />
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <Clock size={11} />
            <span>{post.readTime} min</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
            Leer <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
