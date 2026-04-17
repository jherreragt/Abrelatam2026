import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'font-semibold rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#4367e1] hover:bg-[#3657c8] text-white shadow-md shadow-[#4367e1]/25 hover:shadow-lg hover:shadow-[#4367e1]/30 hover:-translate-y-0.5',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md hover:-translate-y-0.5',
    outline: 'border-2 border-[#4367e1] text-[#4367e1] dark:text-[#8ea2ff] hover:bg-[#4367e1]/10 dark:hover:bg-[#4367e1]/20 hover:-translate-y-0.5',
    ghost: 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
