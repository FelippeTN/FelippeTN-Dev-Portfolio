# Configurar o blog com Supabase

Passo a passo único. Depois disso é só escrever no painel `/admin`.

## 1. Criar o projeto no Supabase (grátis)

1. Acesse https://supabase.com e crie uma conta (login com GitHub serve).
2. **New project** → escolha um nome, defina uma senha do banco e a região (use uma próxima, ex.: *South America (São Paulo)*).
3. Espere ~1 min até o projeto subir.

## 2. Criar as tabelas e regras

1. No painel do Supabase, vá em **SQL Editor** → **New query**.
2. Cole TODO o conteúdo de [`schema.sql`](./schema.sql) e clique em **Run**.
3. Deve aparecer "Success". Isso cria as tabelas `posts` e `post_likes`, o contador automático de curtidas e as regras de segurança (RLS).

## 3. Criar o seu usuário de login

1. Vá em **Authentication** → **Users** → **Add user** → **Create new user**.
2. Coloque seu e-mail e uma senha. **Marque "Auto Confirm User"** (senão precisa confirmar por e-mail).
3. Esse será o login do painel `/admin`.

> Dica de segurança: em **Authentication → Providers → Email**, desligue **"Allow new users to sign up"**. Assim ninguém cria conta — só você, que já criou seu usuário manualmente.

## 4. Pegar as chaves

Em **Project Settings → API** (ou **Data API**), copie:

- **Project URL** → `VITE_SUPABASE_URL`
- **anon public key** → `VITE_SUPABASE_ANON_KEY`

A chave `anon` pode ir pro frontend sem problema — a segurança vem das policies (RLS), não da chave.

## 5. Configurar o `.env`

Na raiz do projeto, crie um arquivo `.env` (copie de `.env.example`) e preencha:

```
VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
VITE_ADMIN_EMAIL=seuemail@exemplo.com
```

`VITE_ADMIN_EMAIL` é o mesmo e-mail que você cadastrou no passo 3. Reinicie o `npm run dev` depois de criar o `.env`.

## 6. Usar

- **Escrever**: acesse `/admin/login`, entre com seu e-mail/senha, e crie posts no painel `/admin`. Marque "Publicado" pra ele aparecer no blog.
- **Ler**: qualquer pessoa vê os posts publicados em `/blog` e curte sem precisar de login.

## 7. Deploy na Vercel

No projeto da Vercel, vá em **Settings → Environment Variables** e adicione as mesmas 3 variáveis (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_ADMIN_EMAIL`). Faça redeploy.

> Importante (SPA): como o site usa rotas no cliente (ex.: `/blog/meu-post`), garanta que a Vercel faça fallback pro `index.html`. Em projetos Vite isso costuma já funcionar; se um refresh em `/blog/...` der 404, crie um `vercel.json` com um rewrite de `/(.*)` para `/index.html`.
