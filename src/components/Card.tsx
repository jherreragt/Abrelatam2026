import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 shadow-sm ${hover ? 'card-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
