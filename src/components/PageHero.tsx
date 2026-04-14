import { ReactNode } from 'react';

interface PageHeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  backgroundImage: string;
  icon?: ReactNode;
}

export default function PageHero({ title, subtitle, backgroundImage, icon }: PageHeroProps) {
  return (
    <div className="relative flex aspect-[1921/869] w-full items-center justify-center overflow-hidden bg-[#262460] px-4 pt-24">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {icon && (
          <div className="mx-auto mb-10 flex h-50 w-50 items-center justify-center rounded-full text-white">
            {icon}
          </div>
        )}
        <h1 className="mb-8 text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-4xl text-base font-medium leading-relaxed text-white md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
