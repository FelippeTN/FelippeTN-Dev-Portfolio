import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Clock, Heart, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePublishedPosts } from '@/hooks/usePosts';
import { getBreadcrumbStructuredData } from '@/lib/seo';
import type { Post } from '@/lib/supabase';

/** Tempo de leitura aproximado (200 palavras/min). */
const readingMinutes = (content: string) =>
  Math.max(1, Math.round(content.trim().split(/\s+/).filter(Boolean).length / 200));

const BlogPage = () => {
  const { locale } = useLanguage();
  const { data: posts, isLoading } = usePublishedPosts();

  const copy = locale === 'pt'
    ? {
        badge: 'Blog',
        title: 'Ideias, engenharia e bastidores reais',
        description:
          'Artigos, experimentos e aprendizados sobre backend, IA aplicada, arquitetura e engenharia em produção.',
        back: 'Voltar para o início',
        empty: 'Em breve os primeiros posts.',
        emptyHint: 'A estrutura já está pronta — é só escrever.',
        read: 'Ler artigo',
        min: 'min de leitura',
        count: (n: number) => `${n} ${n === 1 ? 'artigo' : 'artigos'}`,
      }
    : {
        badge: 'Blog',
        title: 'Ideas, engineering, and real behind the scenes',
        description:
          'Articles, experiments, and lessons about backend, applied AI, architecture, and production engineering.',
        back: 'Back to home',
        empty: 'The first posts are coming soon.',
        emptyHint: 'The structure is ready — just write.',
        read: 'Read article',
        min: 'min read',
        count: (n: number) => `${n} ${n === 1 ? 'article' : 'articles'}`,
      };

  const dateFormatter = new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const Meta = ({ post }: { post: Post }) => (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
      <time dateTime={post.created_at}>{dateFormatter.format(new Date(post.created_at))}</time>
      <span aria-hidden className="text-foreground/20">•</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" />
        {readingMinutes(post.content)} {copy.min}
      </span>
      <span aria-hidden className="text-foreground/20">•</span>
      <span className="inline-flex items-center gap-1">
        <Heart className="h-3 w-3" />
        {post.likes_count}
      </span>
    </div>
  );

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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto max-w-7xl"
        >
          {/* Cabeçalho */}
          <header>
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow">{copy.badge}</span>
              {posts && posts.length > 0 && (
                <span className="text-xs font-medium tracking-wide text-muted-foreground">
                  {copy.count(posts.length)}
                </span>
              )}
            </div>

            <h1 className="mt-6 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[2.6rem]">
              {copy.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </header>

          <div className="accent-line mt-9" />

          {/* Conteúdo */}
          {isLoading ? (
            <ul className="mt-4 divide-y divide-foreground/10">
              {[0, 1, 2].map((i) => (
                <li key={i} className="grid gap-6 py-7 sm:grid-cols-[10rem_1fr]">
                  <div className="h-3 w-28 animate-pulse rounded bg-foreground/10" />
                  <div className="space-y-3">
                    <div className="h-5 w-2/3 animate-pulse rounded bg-foreground/10" />
                    <div className="h-3 w-full animate-pulse rounded bg-foreground/5" />
                    <div className="h-3 w-4/5 animate-pulse rounded bg-foreground/5" />
                  </div>
                </li>
              ))}
            </ul>
          ) : posts && posts.length > 0 ? (
            <ul className="mt-2 divide-y divide-foreground/10">
              {posts.map((post, index) => (
                <motion.li
                  key={post.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 + index * 0.04 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block py-7"
                  >
                    <Meta post={post} />

                    <h2 className="mt-2.5 text-balance text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground/65 sm:text-2xl">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                        {post.excerpt}
                      </p>
                    )}

                    <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors group-hover:text-foreground">
                      {copy.read}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 flex items-start gap-4 rounded-2xl bg-secondary/50 p-5 subtle-stroke">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                <PenLine className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{copy.empty}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy.emptyHint}</p>
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BlogPage;
