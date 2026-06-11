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
    primary: 'bg-[#329bd0] hover:bg-[#2789b8] text-white shadow-md shadow-[#329bd0]/25 hover:shadow-lg hover:shadow-[#329bd0]/30 hover:-translate-y-0.5',
    secondary: 'bg-[#262262] hover:bg-[#1a1748] text-white shadow-md hover:-translate-y-0.5',
    outline: 'border-2 border-[#329bd0] text-[#329bd0] hover:bg-[#329bd0]/10 hover:-translate-y-0.5',
    ghost: 'text-slate-700 hover:bg-slate-100'
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
