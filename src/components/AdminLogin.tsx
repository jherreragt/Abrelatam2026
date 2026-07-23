import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function AdminLogin() {
  const { signIn, signUp } = useAuth();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error } = mode === 'signin'
      ? await signIn(email, password)
      : await signUp(email, password);
    setSubmitting(false);
    if (error) setError(error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-[#262262] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#329bd0]/10 mb-4">
              <Lock size={28} className="text-[#329bd0]" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              {mode === 'signin' ? t('admin.loginTitle') : t('admin.signUpTitle')}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {mode === 'signin' ? t('admin.loginSubtitle') : t('admin.signUpSubtitle')}
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('admin.email')}
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:border-[#329bd0] focus:ring-2 focus:ring-[#329bd0]/20 outline-none transition-all"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('admin.password')}
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 text-sm text-slate-900 focus:border-[#329bd0] focus:ring-2 focus:ring-[#329bd0]/20 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-[#329bd0] py-2.5 text-sm font-semibold text-white shadow-md shadow-[#329bd0]/25 transition-all hover:bg-[#2789b8] hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting
                ? t('admin.processing')
                : mode === 'signin'
                  ? t('admin.signIn')
                  : t('admin.signUp')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setMode(mode === 'signin' ? 'signup' : 'signin');
                setError(null);
              }}
              className="text-sm text-[#329bd0] hover:text-[#2789b8] font-medium transition-colors"
            >
              {mode === 'signin' ? t('admin.noAccount') : t('admin.haveAccount')}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ArrowLeft size={14} />
              {t('admin.backToSite')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
