import { motion } from 'framer-motion';
import { ArrowUpRight, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogTeaser = () => {
  const { locale } = useLanguage();

  const copy = locale === 'pt'
    ? {
        eyebrow: 'Novo Espaço',
        title: 'Blog em construção com ideias, engenharia e bastidores reais.',
        description:
          'Estou preparando um espaço para compartilhar arquitetura, backend, IA aplicada e aprendizados do dia a dia em projetos de produção.',
        primary: 'Ir para o blog',
        tags: ['Artigos técnicos', 'Estudos de caso', 'Aprendizados práticos'],
      }
    : {
        eyebrow: 'New Space',
        title: 'A blog is on the way with engineering notes and real project insights.',
        description:
          'I am preparing a place to share architecture, backend, applied AI, and practical lessons from real production work.',
        primary: 'Visit the blog',
        tags: ['Technical articles', 'Case studies', 'Practical lessons'],
      };

  return (
    <section className="site-shell px-4 pb-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-card px-6 py-8 shadow-[0_24px_60px_-34px_rgba(17,17,17,0.16)] [box-shadow:0_24px_60px_-34px_rgba(17,17,17,0.16),inset_0_0_0_1px_rgba(17,17,17,0.06)] sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <NotebookPen className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>

            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-extrabold leading-tight text-foreground sm:text-[2.4rem]">
              {copy.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-[0.9rem] bg-foreground px-6 py-3 text-sm font-bold text-background shadow-[0_12px_30px_-20px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-foreground/85"
              >
                {copy.primary}
                <ArrowUpRight className="h-4 w-4" />
              </Link>

            </div>
          </div>

          <div className="grid gap-3">
            {copy.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.06 }}
                className="editorial-card p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {locale === 'pt' ? `Bloco 0${index + 1}` : `Block 0${index + 1}`}
                </p>
                <p className="mt-2 text-base font-semibold text-foreground">{tag}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogTeaser;
