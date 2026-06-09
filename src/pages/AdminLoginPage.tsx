import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Seo from '@/components/Seo';
import { useAuth } from '@/contexts/AuthContext';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { signIn, isAdmin, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAdmin) navigate('/admin', { replace: true });
  }, [loading, isAdmin, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: signInError } = await signIn(email, password);
    setSubmitting(false);

    if (signInError) {
      setError('E-mail ou senha inválidos.');
      return;
    }
    navigate('/admin', { replace: true });
  };

  return (
    <section className="site-shell flex min-h-[70vh] items-center justify-center px-4 py-10">
      <Seo title="Login do painel" description="Acesso restrito ao painel do blog." path="/admin/login" noindex />
      <div className="w-full max-w-md rounded-[1.8rem] bg-card p-8 [box-shadow:0_24px_64px_-34px_rgba(17,17,17,0.14),inset_0_0_0_1px_rgba(17,17,17,0.06)]">
        <span className="eyebrow">Admin</span>
        <h1 className="mt-4 text-3xl font-extrabold text-foreground">Entrar no painel</h1>
        <p className="mt-2 text-sm text-muted-foreground">Área restrita para gerenciar os posts do blog.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button type="submit" disabled={submitting} className="w-full">
            <LogIn className="h-4 w-4" />
            {submitting ? 'Entrando…' : 'Entrar'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;
