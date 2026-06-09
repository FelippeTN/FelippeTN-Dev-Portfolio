-- ============================================================================
--  Blog — schema do Supabase
--  Como usar: Supabase > SQL Editor > New query > cole tudo > Run.
--  Roda mais de uma vez sem problema (idempotente).
-- ============================================================================

-- 1) Tabela de posts ---------------------------------------------------------
create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text not null unique,
  excerpt     text,
  content     text not null default '',
  published   boolean not null default false,
  likes_count integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- 2) Tabela de curtidas (1 por visitante por post) ---------------------------
create table if not exists public.post_likes (
  id         uuid primary key default gen_random_uuid(),
  post_id    uuid not null references public.posts(id) on delete cascade,
  visitor_id text not null,
  ip         text,
  created_at timestamptz not null default now(),
  unique (post_id, visitor_id)
);

-- Caso a tabela já existisse de uma versão anterior, garante a coluna de IP.
alter table public.post_likes add column if not exists ip text;

create index if not exists post_likes_post_id_idx on public.post_likes(post_id);
create index if not exists post_likes_post_ip_idx on public.post_likes(post_id, ip);

-- 3) Trigger que mantém posts.likes_count em sincronia -----------------------
create or replace function public.sync_likes_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (tg_op = 'INSERT') then
    update public.posts set likes_count = likes_count + 1 where id = new.post_id;
    return new;
  elsif (tg_op = 'DELETE') then
    update public.posts set likes_count = greatest(likes_count - 1, 0) where id = old.post_id;
    return old;
  end if;
  return null;
end;
$$;

drop trigger if exists trg_sync_likes_count on public.post_likes;
create trigger trg_sync_likes_count
  after insert or delete on public.post_likes
  for each row execute function public.sync_likes_count();

-- 4) Row Level Security ------------------------------------------------------
alter table public.posts      enable row level security;
alter table public.post_likes enable row level security;

-- Define QUEM é o admin do blog. A escrita é trancada a este e-mail no banco
-- (não só no frontend). Troque pelo seu e-mail e rode o SQL de novo se mudar.
create or replace function public.is_blog_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'felippenalim2004@gmail.com';
$$;

-- Posts:
--  • qualquer visitante lê apenas os PUBLICADOS;
--  • só o admin lê rascunhos e cria/edita/exclui.
drop policy if exists "posts_select_published" on public.posts;
create policy "posts_select_published"
  on public.posts for select
  using (published = true);

drop policy if exists "posts_select_authenticated" on public.posts; -- limpeza de versão antiga
drop policy if exists "posts_admin_read_drafts" on public.posts;
create policy "posts_admin_read_drafts"
  on public.posts for select
  to authenticated
  using (public.is_blog_admin());

drop policy if exists "posts_write_authenticated" on public.posts; -- limpeza de versão antiga
drop policy if exists "posts_admin_write" on public.posts;
create policy "posts_admin_write"
  on public.posts for all
  to authenticated
  using (public.is_blog_admin())
  with check (public.is_blog_admin());

-- Curtidas: qualquer um pode LER (pra mostrar o total). Já a escrita NÃO é
-- direta — ela só acontece pelas funções abaixo, que aplicam o limite por IP.
drop policy if exists "likes_select_all" on public.post_likes;
create policy "likes_select_all"
  on public.post_likes for select
  using (true);

-- Importante: removemos qualquer policy de INSERT/DELETE direto. Sem policy,
-- o cliente anon não consegue inserir/apagar na marra — só via as funções.
drop policy if exists "likes_insert_all" on public.post_likes;
drop policy if exists "likes_delete_all" on public.post_likes;

-- ============================================================================
--  5) Curtir / descurtir com limite de 5 por IP por post
--     As funções rodam como "security definer" (donas da tabela), então
--     conseguem escrever mesmo sem policy de insert/delete para o anon.
-- ============================================================================
-- Quantas curtidas no máximo por IP, em cada post.
create or replace function public.max_likes_per_ip()
returns integer language sql immutable as $$ select 5 $$;

create or replace function public.like_post(p_post_id uuid, p_visitor_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_ip    text;
  v_count integer;
begin
  -- IP real do visitante: primeiro endereço do cabeçalho x-forwarded-for.
  v_ip := nullif(trim(split_part(
    coalesce(current_setting('request.headers', true)::json ->> 'x-forwarded-for', ''),
    ',', 1
  )), '');

  -- Já curtiu por este navegador? Idempotente: não faz nada.
  if exists (
    select 1 from public.post_likes
    where post_id = p_post_id and visitor_id = p_visitor_id
  ) then
    return;
  end if;

  -- Limite por IP neste post.
  if v_ip is not null then
    select count(*) into v_count
    from public.post_likes
    where post_id = p_post_id and ip = v_ip;

    if v_count >= public.max_likes_per_ip() then
      raise exception 'like_limit_reached' using errcode = 'check_violation';
    end if;
  end if;

  insert into public.post_likes (post_id, visitor_id, ip)
  values (p_post_id, p_visitor_id, v_ip)
  on conflict (post_id, visitor_id) do nothing;
end;
$$;

create or replace function public.unlike_post(p_post_id uuid, p_visitor_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.post_likes
  where post_id = p_post_id and visitor_id = p_visitor_id;
end;
$$;

grant execute on function public.like_post(uuid, text)   to anon, authenticated;
grant execute on function public.unlike_post(uuid, text) to anon, authenticated;
