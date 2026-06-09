import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

/** Protege rotas do painel: só renderiza se o admin autorizado estiver logado. */
const RequireAdmin = ({ children }: { children: ReactNode }) => {
  const { loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="site-shell flex min-h-[50vh] items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">Carregando…</p>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default RequireAdmin;
