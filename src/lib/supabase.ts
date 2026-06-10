import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Aviso amigável durante o desenvolvimento caso o .env não esteja configurado.
  console.warn(
    '[supabase] VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY ausentes. ' +
      'Copie .env.example para .env e preencha com os dados do seu projeto Supabase.',
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');

/** E-mail autorizado a entrar no painel de admin (definido no .env). */
export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL ?? '';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  published: boolean;
  likes_count: number;
  created_at: string;
  updated_at: string;
}
