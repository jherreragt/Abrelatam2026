import { useEffect } from 'react';
import { X } from 'lucide-react';
import { assetPath } from '../lib/assetPath';

type ThankYouPopupProps = {
  onClose: () => void;
};

export default function ThankYouPopup({ onClose }: ThankYouPopupProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101a35]/75 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[1.1fr_0.9fr]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar mensaje"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#262262] shadow-md transition-colors hover:bg-[#262262] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#329bd0] focus:ring-offset-2"
        >
          <X size={21} />
        </button>

        <div className="min-h-[250px] bg-[#10244a] md:min-h-[460px]">
          <img
            src={assetPath('images/WhatsApp_Image_2026-10-16_at_11.13.14_AM.jpeg')}
            alt="Comunidad reunida durante ABRELATAM y ConDatos en Guatemala"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-7 py-12 text-[#262262] sm:px-12 md:px-10 lg:px-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#329bd0]">
            ABRELATAM y ConDatos 2026
          </p>
          <h2 id="thank-you-popup-title" className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            ¡Gracias, comunidad de datos abiertos!
          </h2>
          <p className="mb-6 text-base font-semibold leading-relaxed text-slate-700">
            Más de 700 participantes · 3 días · una comunidad regional reunida en Guatemala
          </p>
          <div className="space-y-2 border-l-4 border-[#329bd0] pl-5 text-base leading-relaxed text-slate-600">
            <p>Que los datos sigan en movimiento.</p>
            <p>Gracias por hacerlo posible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
