import { motion } from 'framer-motion';
import { ArrowLeft, CircleDotDashed, Rocket, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPage = () => {
  const { locale } = useLanguage();

  const copy = locale === 'pt'
    ? {
        badge: 'Blog',
        title: 'Em desenvolvimento',
        description:
          'Estou montando uma área com artigos, experimentos, bastidores de arquitetura e conteúdo técnico com a mesma atenção ao detalhe do restante do portfólio.',
        back: 'Voltar para o início',
        cards: [
          {
            title: 'Artigos técnicos',
            description: 'Conteúdo sobre backend, IA aplicada, arquitetura e engenharia em produção.',
          },
          {
            title: 'Bastidores reais',
            description: 'Aprendizados de projetos, decisões de design e trade-offs do dia a dia.',
          },
          {
            title: 'Lançamento em breve',
            description: 'A estrutura está sendo preparada para receber posts e atualizações contínuas.',
          },
        ],
      }
    : {
        badge: 'Blog',
        title: 'In development',
        description:
          'I am building a space for articles, experiments, architecture notes, and technical writing with the same care as the rest of the portfolio.',
        back: 'Back to home',
        cards: [
          {
            title: 'Technical articles',
            description: 'Content about backend, applied AI, architecture, and production engineering.',
          },
          {
            title: 'Real behind the scenes',
            description: 'Project lessons, design decisions, and day-to-day trade-offs.',
          },
          {
            title: 'Launching soon',
            description: 'The structure is being prepared for regular posts and updates.',
          },
        ],
      };

  const icons = [Rocket, Waves, CircleDotDashed];

  return (
    <section className="site-shell px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-card px-6 py-8 shadow-[0_24px_64px_-34px_rgba(17,17,17,0.14)] [box-shadow:0_24px_64px_-34px_rgba(17,17,17,0.14),inset_0_0_0_1px_rgba(17,17,17,0.06)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(17,17,17,0.03),rgba(17,17,17,0.015))] p-6 [box-shadow:inset_0_0_0_1px_rgba(17,17,17,0.08)] sm:p-8 lg:p-10"
        >
          <div className="absolute -right-14 top-6 h-40 w-40 rounded-full bg-black/6 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-black/5 blur-3xl" />

          <span className="eyebrow relative">
            {copy.badge}
          </span>

          <h1 className="relative mt-5 text-balance text-4xl font-extrabold leading-none text-foreground sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>

          <p className="relative mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {copy.description}
          </p>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
            {copy.cards.map((card, index) => {
              const Icon = icons[index] ?? CircleDotDashed;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
                  className="editorial-card p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-foreground">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </motion.div>
              );
            })}
          </div>

          <Link
            to="/"
            className="relative mt-8 inline-flex items-center gap-2 rounded-[0.9rem] bg-foreground px-5 py-3 text-sm font-bold text-background shadow-[0_12px_30px_-20px_rgba(17,17,17,0.5)] transition-colors duration-200 hover:bg-zinc-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.back}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
