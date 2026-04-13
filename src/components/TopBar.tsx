import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

interface TopBarProps {
  scrolled: boolean;
}

export default function TopBar({ scrolled }: TopBarProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-10 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50'
        : 'bg-black/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl h-full">
        <div className="flex items-center justify-between h-full">
          <a
            href="mailto:contacto@abrelatam2026.org"
            className="flex items-center gap-2 text-white/55 hover:text-white/90 transition-colors group"
          >
            <Mail size={13} className="group-hover:text-blue-400 transition-colors" />
            <span className="hidden sm:inline text-xs">contacto@abrelatam2026.org</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-xs text-white/30 font-medium tracking-wide">Síguenos</span>
            <div className="flex items-center gap-2.5">
              {[
                { href: '#', icon: Twitter, label: 'Twitter' },
                { href: '#', icon: Facebook, label: 'Facebook' },
                { href: '#', icon: Instagram, label: 'Instagram' },
                { href: '#', icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/45 hover:text-white/90 transition-all hover:scale-110"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
