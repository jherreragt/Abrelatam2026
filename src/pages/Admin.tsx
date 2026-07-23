import { Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

export default function Admin() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-[#329bd0]" />
      </div>
    );
  }

  return session ? <AdminDashboard /> : <AdminLogin />;
}
