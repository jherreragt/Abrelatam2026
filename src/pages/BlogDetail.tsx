import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { getBlogPost, getRecentPosts, BlogPost } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { ROUTES } from '../router/routes';
import { assetPath } from '../lib/assetPath';

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

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPost(slug ?? '');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-500 mb-4">Artículo no encontrado.</p>
          <button onClick={() => navigate(ROUTES.NOTICIAS)} className="text-blue-600 hover:underline flex items-center gap-2 mx-auto">
            <ArrowLeft size={16} /> Volver a noticias
          </button>
        </div>
      </div>
    );
  }

  const recent = getRecentPosts(4).filter(p => p.slug !== slug).slice(0, 3);
  const catClass = categoryColors[post.category] ?? 'bg-blue-100 text-blue-700';

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={assetPath('IMAGEN.png')}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${catClass}`}>
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <button
          onClick={() => navigate(ROUTES.NOTICIAS)}
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver a noticias
        </button>

        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900" />
            <div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-800 dark:text-white">
                <User size={13} className="text-slate-400" />
                {post.author}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500">{post.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500 ml-auto flex-wrap">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} min de lectura
            </span>
          </div>
        </div>

        <div
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-ul:space-y-1 prose-ol:space-y-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-slate-400" />
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {recent.length > 0 && (
        <div className="bg-slate-50 dark:bg-slate-800/50 py-14">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Más artículos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((p: BlogPost) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
