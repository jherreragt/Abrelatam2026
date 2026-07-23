import { useState, useEffect, useCallback } from 'react';
import { FileJson, FileSpreadsheet, LogOut, Search, Trash2, ChevronLeft, ChevronRight, Loader2, AlertCircle, CheckCircle2, Database, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import type { Registration } from '../types/registration';

const PAGE_SIZE = 25;

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const { t } = useLanguage();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const fetchPage = useCallback(async () => {
    setLoading(true);
    setError(null);
    const from = page * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    let query = supabase
      .from('registrations')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to);

    if (search.trim()) {
      query = query.or(
        `nombre_apellido.ilike.%${search}%,correo_electronico.ilike.%${search}%,organizacion.ilike.%${search}%,pais.ilike.%${search}%`
      );
    }

    const { data, error: err, count: total } = await query;
    setLoading(false);
    if (err) {
      setError(err.message);
    } else {
      setRegistrations((data ?? []) as Registration[]);
      setCount(total ?? 0);
    }
  }, [page, search]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('admin.confirmDelete'))) return;
    setDeletingId(id);
    const { error: err } = await supabase.from('registrations').delete().eq('id', id);
    setDeletingId(null);
    if (err) {
      setError(err.message);
    } else {
      fetchPage();
    }
  };

  const fetchAllRegistrations = async (): Promise<Registration[]> => {
    const all: Registration[] = [];
    const BATCH = 1000;
    let offset = 0;
    while (true) {
      const { data, error: err } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + BATCH - 1);
      if (err) throw new Error(err.message);
      if (!data || data.length === 0) break;
      all.push(...(data as Registration[]));
      if (data.length < BATCH) break;
      offset += BATCH;
    }
    return all;
  };

  const triggerDownload = (content: string, filename: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadJson = async () => {
    setDownloading(true);
    setError(null);
    try {
      const all = await fetchAllRegistrations();
      const json = JSON.stringify(all, null, 2);
      triggerDownload(json, `registrations-${Date.now()}.json`, 'application/json');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setDownloading(false);
    }
  };

  const downloadCsv = async () => {
    setDownloading(true);
    setError(null);
    try {
      const all = await fetchAllRegistrations();
      if (all.length === 0) {
        triggerDownload('', `registrations-${Date.now()}.csv`, 'text/csv');
        return;
      }
      const headers = Object.keys(all[0]);
      const escape = (val: unknown) => {
        const s = val === null || val === undefined ? '' : String(val);
        if (s.includes(',') || s.includes('"') || s.includes('\n')) {
          return `"${s.replace(/"/g, '""')}"`;
        }
        return s;
      };
      const rows = all.map(row =>
        headers.map(h => escape((row as unknown as Record<string, unknown>)[h])).join(',')
      );
      const csv = [headers.join(','), ...rows].join('\n');
      triggerDownload(csv, `registrations-${Date.now()}.csv`, 'text/csv');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setDownloading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#329bd0]/10">
                <Database size={20} className="text-[#329bd0]" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">{t('admin.title')}</h1>
                <p className="text-xs text-slate-500">{t('admin.registrations')}</p>
              </div>
            </div>
            <button
              onClick={signOut}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              <LogOut size={16} />
              {t('admin.signOut')}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 md:px-6 py-8">
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-900">{t('admin.error')}</p>
              <p className="text-sm text-red-700 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:flex-none">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={e => handleSearchChange(e.target.value)}
                placeholder={t('admin.searchPlaceholder')}
                className="w-full sm:w-64 rounded-lg border border-slate-300 pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-[#329bd0] focus:ring-2 focus:ring-[#329bd0]/20 outline-none transition-all"
              />
            </div>
            <button
              onClick={fetchPage}
              disabled={loading}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50"
              title={t('admin.refresh')}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="font-semibold">{count.toLocaleString()}</span>
              <span>{t('admin.totalRecords')}</span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <button
              onClick={downloadJson}
              disabled={downloading || count === 0}
              className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading ? <Loader2 size={16} className="animate-spin" /> : <FileJson size={16} />}
              {t('admin.downloadJson')}
            </button>
            <button
              onClick={downloadCsv}
              disabled={downloading || count === 0}
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading ? <Loader2 size={16} className="animate-spin" /> : <FileSpreadsheet size={16} />}
              {t('admin.downloadCsv')}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-4 py-3">{t('admin.colName')}</th>
                  <th className="px-4 py-3">{t('admin.colEmail')}</th>
                  <th className="px-4 py-3">{t('admin.colCountry')}</th>
                  <th className="px-4 py-3">{t('admin.colOrganization')}</th>
                  <th className="px-4 py-3">{t('admin.colSector')}</th>
                  <th className="px-4 py-3">{t('admin.colDate')}</th>
                  <th className="px-4 py-3 text-right">{t('admin.colActions')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading && (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center text-slate-400">
                      <Loader2 size={24} className="inline-block animate-spin mb-2" />
                      <p>{t('admin.loading')}</p>
                    </td>
                  </tr>
                )}
                {!loading && registrations.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center text-slate-400">
                      <p>{t('admin.noRecords')}</p>
                    </td>
                  </tr>
                )}
                {!loading && registrations.map(reg => (
                  <tr key={reg.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">{reg.nombre_apellido}</td>
                    <td className="px-4 py-3 text-slate-600">{reg.correo_electronico}</td>
                    <td className="px-4 py-3 text-slate-600">{reg.pais}</td>
                    <td className="px-4 py-3 text-slate-600">{reg.organizacion}</td>
                    <td className="px-4 py-3 text-slate-600">{reg.sector}</td>
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                      {new Date(reg.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleDelete(reg.id)}
                        disabled={deletingId === reg.id}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all disabled:opacity-50"
                        title={t('admin.delete')}
                      >
                        {deletingId === reg.id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {count > PAGE_SIZE && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {t('admin.showing')} {(page * PAGE_SIZE) + 1}–{Math.min((page + 1) * PAGE_SIZE, count)} {t('admin.of')} {count.toLocaleString()}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0 || loading}
                className="flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={14} />
                {t('admin.prev')}
              </button>
              <span className="px-3 text-sm text-slate-600">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1 || loading}
                className="flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('admin.next')}
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
