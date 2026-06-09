# Felippe Toscano Nalim - Dev Portfolio

Este é o meu portfólio pessoal como Engenheiro de Software. A ideia aqui é centralizar minha trajetória, stack, experiências, projetos, contatos e também um blog técnico que eu consigo administrar pelo próprio site.

O projeto foi construído com React, TypeScript, Vite, Tailwind CSS e Supabase. Também uso Framer Motion, componentes baseados em shadcn/ui e alguns recursos visuais para deixar a experiência mais fluida sem perder o foco no conteúdo.

## Sobre o projeto

Este portfólio apresenta minha atuação em backend, IA aplicada, arquitetura de software, sistemas em produção e liderança técnica. Além da página inicial, ele conta com páginas dedicadas para:

- Sobre mim
- Habilidades
- Experiência profissional
- Formação e certificações
- Projetos em destaque
- Blog
- Contato
- Painel administrativo para posts

Também inclui suporte a idioma português/inglês, rotas públicas para posts e uma área `/admin` protegida por login via Supabase.

## Funcionalidades

- Interface responsiva para desktop e mobile
- Navegação por rotas com React Router
- Conteúdo em português e inglês
- Seções animadas com Framer Motion
- Blog com posts publicados, rascunhos e página individual por slug
- Sistema de curtidas por visitante
- Painel admin para criar, editar, publicar e excluir posts
- Integração com Supabase Auth, Database e Row Level Security
- SEO configurável por página

## Stack principal

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui e Radix UI
- Framer Motion
- React Router DOM
- TanStack React Query
- Supabase
- Lucide React

## Estrutura

```txt
src/
  assets/          imagens usadas no site
  components/      componentes principais e UI
  contexts/        idioma e autenticação
  hooks/           posts, likes, toast e helpers
  lib/             Supabase, SEO, traduções e utilitários
  pages/           páginas e rotas do site
supabase/
  schema.sql       tabelas, policies e triggers do blog
  SETUP.md         passo a passo para configurar o Supabase
```

## Como rodar localmente

Pré-requisitos:

- Node.js 18 ou superior
- npm

Instalação:

```bash
git clone https://github.com/FelippeTN/FelippeTN-Dev-Portfolio.git
cd FelippeTN-Dev-Portfolio
npm install
npm run dev
```

Por padrão, o Vite está configurado para rodar em:

```txt
http://localhost:8080
```

## Variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e preencha:

```env
VITE_SITE_URL=https://seudominio.com
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_ADMIN_EMAIL=
```

Essas variáveis são usadas para SEO, conexão com o Supabase e controle do e-mail autorizado no painel administrativo.

Para configurar o banco, execute o conteúdo de `supabase/schema.sql` no SQL Editor do Supabase. O passo a passo completo está em `supabase/SETUP.md`.

## Scripts

```bash
npm run dev        # inicia o servidor de desenvolvimento
npm run build      # gera o build de produção
npm run build:dev  # gera build em modo development
npm run preview    # abre o preview do build
npm run lint       # executa o ESLint
```

## Rotas principais

- `/` - página inicial
- `/about` - sobre mim
- `/skills` - habilidades
- `/experience` - experiência
- `/education` - formação
- `/contact` - contato
- `/blog` - listagem de posts publicados
- `/blog/:slug` - post individual
- `/admin/login` - login do administrador
- `/admin` - painel de gerenciamento do blog

## Deploy

O projeto pode ser publicado em plataformas como Vercel, Netlify ou qualquer serviço que suporte aplicações Vite.

No deploy, configure as mesmas variáveis do `.env` no painel da plataforma. Como o projeto usa rotas no cliente, o servidor precisa redirecionar as rotas para `index.html` quando necessário.

## Autor

Desenvolvido por **Felippe Toscano Nalim**.

- GitHub: [@FelippeTN](https://github.com/FelippeTN)
- LinkedIn: [felippe-toscano-nalim](https://www.linkedin.com/in/felippe-toscano-nalim/)
- YouTube: [@felippetndev](https://www.youtube.com/@felippetndev)
- Email: felippenalim2004@gmail.com
