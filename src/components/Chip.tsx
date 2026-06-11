import { ReactNode } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface ChipProps {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: 'default' | 'orange' | 'amber';
}

export default function Chip({ children, icon: Icon, variant = 'default' }: ChipProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200',
    orange: 'bg-[#329bd0]/10 text-[#262262] border border-[#329bd0]/30',
    amber: 'bg-slate-100 text-slate-700 border border-slate-200'
  };

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${variants[variant]}`}>
      {Icon && <Icon size={16} />}
      {children}
    </span>
  );
}
