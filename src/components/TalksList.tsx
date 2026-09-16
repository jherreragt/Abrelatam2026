import { useEffect, useMemo, useState } from 'react';
import { Search, ExternalLink, Users, MapPin, Clock, Globe, Tag, AlertCircle, RotateCw } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';

const SCHEDULE_JSON_URL = 'https://pretalx.abrelatam.org/abrelatam-2026/schedule/export/schedule.json';

interface PretalxTalk {
  code: string;
  title: string;
  subtitle?: string;
  date: string;
  start: string;
  duration: string;
  room: string;
  track?: string | null;
  type?: string;
  language?: string;
  abstract?: string;
  persons?: Array<{ public_name: string }>;
  url?: string;
}

interface ScheduleDay {
  index: number;
  date: string;
  rooms: Record<string, PretalxTalk[]>;
}

interface ScheduleData {
  schedule: {
    conference: {
      title: string;
      days: ScheduleDay[];
    };
  };
}

const dayLabels: Record<Language, (date: string) => string> = {
  es: (d) => new Date(d + 'T00:00:00').toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' }),
  en: (d) => new Date(d + 'T00:00:00').toLocaleDateString('en', { weekday: 'long', day: 'numeric', month: 'long' }),
  pt: (d) => new Date(d + 'T00:00:00').toLocaleDateString('pt', { weekday: 'long', day: 'numeric', month: 'long' }),
};

const langLabels: Record<string, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  'pt-br': 'Português',
};

export default function TalksList() {
  const { t, language } = useLanguage();
  const [data, setData] = useState<PretalxTalk[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState('all');
  const [roomFilter, setRoomFilter] = useState('all');

  const load = () => {
    setLoading(true);
    setError(false);
    fetch(SCHEDULE_JSON_URL)
      .then((res) => res.json() as Promise<ScheduleData>)
      .then((json) => {
        const days = json.schedule.conference.days;
        const all: PretalxTalk[] = [];
        for (const day of days) {
          for (const talks of Object.values(day.rooms)) {
            all.push(...talks);
          }
        }
        all.sort((a, b) => a.date.localeCompare(b.date));
        setData(all);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const tracks = useMemo(() => {
    if (!data) return [];
    return Array.from(new Set(data.map((t) => t.track).filter(Boolean))) as string[];
  }, [data]);

  const rooms = useMemo(() => {
    if (!data) return [];
    return Array.from(new Set(data.map((t) => t.room).filter(Boolean))) as string[];
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.filter((talk) => {
      if (trackFilter !== 'all' && talk.track !== trackFilter) return false;
      if (roomFilter !== 'all' && talk.room !== roomFilter) return false;
      if (!q) return true;
      const haystack = [
        talk.title,
        talk.abstract ?? '',
        talk.room ?? '',
        talk.track ?? '',
        talk.type ?? '',
        ...(talk.persons ?? []).map((p) => p.public_name),
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [data, query, trackFilter, roomFilter]);

  const groupedByDay = useMemo(() => {
    const groups: Record<string, PretalxTalk[]> = {};
    for (const talk of filtered) {
      const day = talk.date.slice(0, 10);
      if (!groups[day]) groups[day] = [];
      groups[day].push(talk);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#329bd0] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-500">{t('agendaPage.talksLoading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <AlertCircle className="text-amber-500 mb-4" size={36} />
        <p className="text-slate-600 mb-4 max-w-md">{t('agendaPage.talksError')}</p>
        <div className="flex gap-3">
          <button
            onClick={load}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#262262] text-white text-sm font-semibold hover:bg-[#329bd0] transition-colors"
          >
            <RotateCw size={15} />
            {t('agendaPage.talksRetry')}
          </button>
          <a
            href="https://pretalx.abrelatam.org/abrelatam-2026/talk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold hover:border-[#329bd0] hover:text-[#329bd0] transition-colors"
          >
            <ExternalLink size={15} />
            {t('agendaPage.viewOnPretalx')}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('agendaPage.talksSearch')}
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:border-[#329bd0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#329bd0]/20 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 focus:border-[#329bd0] focus:outline-none"
          >
            <option value="all">{t('agendaPage.talksAll')} — {t('agendaPage.talksType')}</option>
            {tracks.map((tr) => (
              <option key={tr} value={tr}>{tr}</option>
            ))}
          </select>
          <select
            value={roomFilter}
            onChange={(e) => setRoomFilter(e.target.value)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 focus:border-[#329bd0] focus:outline-none"
          >
            <option value="all">{t('agendaPage.talksAll')} — {t('agendaPage.talksRoom')}</option>
            {rooms.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-slate-500 text-sm">
          {t('agendaPage.talksNoResults')}
        </div>
      ) : (
        <div className="space-y-8 max-h-[55vh] overflow-y-auto pr-2 -mr-2">
          {groupedByDay.map(([day, talks]) => (
            <div key={day}>
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur py-2 mb-3">
                <h3 className="text-sm font-bold text-[#262262] capitalize border-b border-slate-100 pb-2">
                  {dayLabels[language](day)}
                </h3>
              </div>
              <div className="space-y-3">
                {talks.map((talk) => (
                  <a
                    key={talk.code}
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-[#329bd0] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 group-hover:text-[#329bd0] transition-colors leading-snug">
                          {talk.title}
                        </h4>
                        {talk.subtitle && (
                          <p className="text-sm text-slate-500 mt-0.5">{talk.subtitle}</p>
                        )}
                      </div>
                      <ExternalLink size={16} className="flex-shrink-0 text-slate-300 group-hover:text-[#329bd0] transition-colors mt-1" />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} />
                        {talk.start} · {talk.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} />
                        {talk.room}
                      </span>
                      {talk.type && (
                        <span className="inline-flex items-center gap-1">
                          <Tag size={13} />
                          {talk.type}
                        </span>
                      )}
                      {talk.language && (
                        <span className="inline-flex items-center gap-1">
                          <Globe size={13} />
                          {langLabels[talk.language] ?? talk.language}
                        </span>
                      )}
                    </div>
                    {talk.persons && talk.persons.length > 0 && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <Users size={13} />
                        <span>
                          {talk.persons.map((p) => p.public_name).join(', ')}
                        </span>
                      </div>
                    )}
                    {talk.abstract && (
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                        {talk.abstract}
                      </p>
                    )}
                    {talk.track && (
                      <span className="mt-3 inline-block rounded-full bg-[#329bd0]/10 px-3 py-1 text-xs font-medium text-[#262262]">
                        {talk.track}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
