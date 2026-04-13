import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ChipProps {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: 'default' | 'orange' | 'amber';
}

export default function Chip({ children, icon: Icon, variant = 'default' }: ChipProps) {
  const variants = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    orange: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    amber: 'bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
  };

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${variants[variant]}`}>
      {Icon && <Icon size={16} />}
      {children}
    </span>
  );
}
