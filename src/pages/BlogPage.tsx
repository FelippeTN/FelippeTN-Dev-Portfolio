import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, PenLine, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePublishedPosts } from '@/hooks/usePosts';
import { getBreadcrumbStructuredData } from '@/lib/seo';
import type { Post } from '@/lib/supabase';

/** Tempo de leitura aproximado (200 palavras/min). */
const readingMinutes = (content: string) =>
  Math.max(1, Math.round(content.trim().split(/\s+/).filter(Boolean).length / 200));

const ALL = '__all__';

const BlogPage = () => {
  const { locale } = useLanguage();
  const { data: posts, isLoading } = usePublishedPosts();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const searchRef = useRef<HTMLInputElement>(null);

  const copy = locale === 'pt'
    ? {
        brand: 'Felippe Toscano Nalim · Blog',
        title: 'Últimas Atualizações',
        description:
          'Artigos, experimentos e aprendizados sobre backend, IA aplicada, arquitetura e engenharia em produção.',
        search: 'Buscar artigos sobre backend, IA, arquitetura…',
        categories: 'Categorias',
        all: 'Todos os artigos',
        back: 'Voltar para o início',
        empty: 'Em breve os primeiros posts.',
        emptyHint: 'Em breve!',
        noResults: 'Nenhum artigo encontrado.',
        noResultsHint: 'Tente outra busca ou categoria.',
        min: 'min',
      }
    : {
        brand: 'Felippe Toscano Nalim · Blog',
        title: 'Latest Updates',
        description:
          'Articles, experiments, and lessons about backend, applied AI, architecture, and production engineering.',
        search: 'Search articles about backend, AI, architecture…',
        categories: 'Categories',
        all: 'All articles',
        back: 'Back to home',
        empty: 'The first posts are coming soon.',
        emptyHint: 'Coming soon!',
        noResults: 'No articles found.',
        noResultsHint: 'Try another search or category.',
        min: 'min',
      };

  const dateFormatter = new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Categorias com contagem, derivadas dos posts publicados.
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts ?? []) {
      const cat = post.category?.trim();
      if (cat) counts.set(cat, (counts.get(cat) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [posts]);

  // Filtro por categoria + busca textual.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (posts ?? []).filter((post) => {
      const matchesCategory = activeCategory === ALL || post.category?.trim() === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        (post.excerpt ?? '').toLowerCase().includes(q) ||
        (post.category ?? '').toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
      );
    });
  }, [posts, activeCategory, query]);

  // Atalho ⌘K / Ctrl+K para focar a busca.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hasPosts = !!posts && posts.length > 0;

  return (
    <>
      <Seo
        title="Blog"
        description={copy.description}
        path="/blog"
        keywords={locale === 'pt' ? ['blog de tecnologia', 'artigos técnicos'] : ['tech blog', 'technical articles']}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: copy.title,
            description: copy.description,
            url: typeof window !== 'undefined' ? `${window.location.origin}/blog` : '/blog',
            inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
          },
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
      <section className="site-shell px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho com grade de fundo */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative overflow-hidden py-12 sm:py-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage: 'radial-gradient(ellipse 75% 90% at 30% 0%, #000 35%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at 30% 0%, #000 35%, transparent 100%)',
              }}
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {copy.brand}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {copy.title}
            </h1>

            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
              {copy.description}
            </p>

            {/* Busca */}
            <div className="relative mt-8 max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.search}
                aria-label={copy.search}
                className="w-full rounded-2xl bg-card py-3.5 pl-11 pr-16 text-sm text-foreground outline-none transition-shadow [box-shadow:0_0_0_1px_rgba(235,236,237,0.1)] placeholder:text-muted-foreground focus-visible:[box-shadow:0_0_0_2px_hsl(var(--ring))]"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[0.7rem] font-medium text-muted-foreground sm:inline-flex">
                ⌘ K
              </kbd>
            </div>
          </motion.header>

          <div className="accent-line mt-2" />

          {/* Corpo: sidebar de categorias + lista */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-2xl bg-card [box-shadow:0_0_0_1px_rgba(235,236,237,0.08)]">
                <h2 className="border-b border-foreground/10 px-4 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                  {copy.categories}
                </h2>
                <nav className="flex flex-col divide-y divide-foreground/10">
                  <CategoryButton
                    label={copy.all}
                    count={posts?.length ?? 0}
                    active={activeCategory === ALL}
                    onClick={() => setActiveCategory(ALL)}
                  />
                  {categories.map((cat) => (
                    <CategoryButton
                      key={cat.name}
                      label={cat.name}
                      count={cat.count}
                      active={activeCategory === cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                    />
                  ))}
                </nav>
              </div>
            </aside>

            {/* Lista */}
            <main className="min-w-0">
              {isLoading ? (
                <ul className="divide-y divide-foreground/10">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="space-y-3 py-8 first:pt-0">
                      <div className="h-3 w-32 animate-pulse rounded bg-foreground/10" />
                      <div className="h-6 w-2/3 animate-pulse rounded bg-foreground/10" />
                      <div className="h-3 w-full animate-pulse rounded bg-foreground/5" />
                      <div className="h-5 w-24 animate-pulse rounded-full bg-foreground/5" />
                    </li>
                  ))}
                </ul>
              ) : !hasPosts ? (
                <EmptyState icon={<PenLine className="h-4 w-4" />} title={copy.empty} hint={copy.emptyHint} />
              ) : filtered.length === 0 ? (
                <EmptyState icon={<Search className="h-4 w-4" />} title={copy.noResults} hint={copy.noResultsHint} />
              ) : (
                <ul className="divide-y divide-foreground/10">
                  {filtered.map((post, index) => (
                    <ArticleRow
                      key={post.id}
                      post={post}
                      index={index}
                      dateLabel={dateFormatter.format(new Date(post.created_at))}
                      minLabel={copy.min}
                    />
                  ))}
                </ul>
              )}
            </main>
          </div>

          <div className="mt-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const CategoryButton = ({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`flex items-center justify-between gap-3 border-l-2 px-4 py-3 text-left text-sm transition-colors ${
      active
        ? 'border-foreground bg-secondary font-semibold text-foreground'
        : 'border-transparent font-medium text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
    }`}
  >
    <span className="truncate">{label}</span>
    <span className={`shrink-0 text-xs tabular-nums ${active ? 'text-foreground/60' : 'text-foreground/30'}`}>
      [{count}]
    </span>
  </button>
);

const ArticleRow = ({
  post,
  index,
  dateLabel,
  minLabel,
}: {
  post: Post;
  index: number;
  dateLabel: string;
  minLabel: string;
}) => (
  <motion.li
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.04 * index }}
  >
    <Link to={`/blog/${post.slug}`} className="group flex items-start gap-4 py-8 first:pt-0">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-muted-foreground">{dateLabel}</p>

        <h3 className="mt-2 text-balance text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-foreground/65 sm:text-2xl">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        )}

        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          {post.category && (
            <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80">
              {post.category}
            </span>
          )}
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {readingMinutes(post.content)} {minLabel}
          </span>
        </div>
      </div>

      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
    </Link>
  </motion.li>
);

const EmptyState = ({ icon, title, hint }: { icon: React.ReactNode; title: string; hint: string }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-secondary/50 p-5 subtle-stroke">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{hint}</p>
    </div>
  </div>
);

export default BlogPage;
