import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogPosts';
import newsPlaceholder from '../assets/IMAGEN.png';

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group flex min-h-[360px] flex-col overflow-hidden bg-slate-100 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-800"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={newsPlaceholder}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="mb-2 text-xs font-medium text-[#2377b9]">
          {formatDate(post.date)}
        </p>
        <h3 className="mb-3 text-xl font-bold leading-tight text-black transition-colors group-hover:text-[#2377b9] dark:text-white">
          {post.title}
        </h3>
        <p className="mb-8 flex-1 text-sm font-medium leading-relaxed text-black dark:text-slate-200">
          {post.excerpt}
        </p>
        <span className="inline-flex w-fit rounded bg-[#2377b9] px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-[#2f8bd2]">
          Leer mas
        </span>
      </div>
    </Link>
  );
}
