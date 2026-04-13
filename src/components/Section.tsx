import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'warm' | 'transparent' | 'dark';
}

export default function Section({ children, className = '', id, bgColor = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white dark:bg-slate-900',
    gray: 'bg-slate-50 dark:bg-slate-950',
    warm: 'bg-gradient-to-br from-blue-50/60 to-slate-50 dark:from-blue-950/15 dark:to-slate-950',
    transparent: 'bg-transparent',
    dark: 'bg-slate-900 dark:bg-slate-950'
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
