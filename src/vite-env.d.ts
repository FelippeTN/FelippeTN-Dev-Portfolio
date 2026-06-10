/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  /** E-mail autorizado a acessar o painel de admin do blog. */
  readonly VITE_ADMIN_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
