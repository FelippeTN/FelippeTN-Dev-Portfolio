import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LikeButton from '@/components/LikeButton';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePost } from '@/hooks/usePosts';
import { getBreadcrumbStructuredData } from '@/lib/seo';

/** Tempo de leitura aproximado (200 palavras/min). */
const readingMinutes = (content: string) =>
  Math.max(1, Math.round(content.trim().split(/\s+/).filter(Boolean).length / 200));

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { data: post, isLoading, isError } = usePost(slug);

  const copy = locale === 'pt'
    ? { back: 'Voltar para o blog', notFound: 'Post não encontrado', loading: 'Carregando…', min: 'min de leitura' }
    : { back: 'Back to the blog', notFound: 'Post not found', loading: 'Loading…', min: 'min read' };

  const dateFormatter = new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="site-shell px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-card px-6 py-9 [box-shadow:0_24px_64px_-40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(235,236,237,0.08)] sm:px-12 sm:py-12">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">{copy.loading}</p>
        ) : isError || !post ? (
          <div className="flex flex-col items-start gap-5">
            <Seo title={copy.notFound} description={copy.notFound} path={`/blog/${slug ?? ''}`} noindex />
            <h1 className="text-3xl font-extrabold text-foreground">{copy.notFound}</h1>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-[0.9rem] bg-foreground px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-foreground/85"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
          </div>
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Seo
              title={post.title}
              description={post.excerpt ?? post.title}
              path={`/blog/${post.slug}`}
              type="article"
              structuredData={[
                {
                  '@context': 'https://schema.org',
                  '@type': 'BlogPosting',
                  headline: post.title,
                  description: post.excerpt ?? '',
                  datePublished: post.created_at,
                  dateModified: post.updated_at,
                  url: typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug}` : `/blog/${post.slug}`,
                  inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
                },
                getBreadcrumbStructuredData(locale, [
                  { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
                  { name: 'Blog', path: '/blog' },
                  { name: post.title, path: `/blog/${post.slug}` },
                ]),
              ]}
            />

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <time dateTime={post.created_at}>{dateFormatter.format(new Date(post.created_at))}</time>
              <span aria-hidden className="text-foreground/20">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingMinutes(post.content)} {copy.min}
              </span>
            </div>

            <h1 className="mt-3 max-w-4xl text-balance text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
            )}

            <div className="mt-7 h-px w-full bg-foreground/10" />

            <div className="prose prose-neutral prose-sm mt-7 max-w-none dark:prose-invert sm:prose-base prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-secondary">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-foreground/10 pt-6">
              <LikeButton postId={post.id} likesCount={post.likes_count} />
              <span className="text-sm text-muted-foreground">
                {locale === 'pt' ? 'Curtiu? Deixa um coração.' : 'Liked it? Leave a heart.'}
              </span>
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
};

export default BlogPostPage;
