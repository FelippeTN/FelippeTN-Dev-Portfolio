import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <section className="site-shell flex min-h-[72vh] items-center justify-center px-4 py-10">
      <Seo title="Login do painel" description="Acesso restrito ao painel do blog." path="/admin/login" noindex />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="w-full max-w-sm rounded-[1.5rem] bg-card p-6 [box-shadow:0_24px_64px_-44px_rgba(0,0,0,0.65),inset_0_0_0_1px_rgba(235,236,237,0.08)] sm:p-7"
      >
        <div className="text-center">
          <span className="eyebrow">Admin</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">Entrar</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-foreground">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl bg-background/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-semibold text-foreground">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 rounded-xl bg-background/70"
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button type="submit" disabled={submitting} className="h-11 w-full rounded-xl font-bold">
            <LogIn className="h-4 w-4" />
            {submitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default AdminLoginPage;
