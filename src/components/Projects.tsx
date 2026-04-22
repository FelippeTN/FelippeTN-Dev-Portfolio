import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, locale } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">05 / {p.title}</span>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl">
            {p.description}
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {p.items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`editorial-card flex h-full flex-col p-6 ${
                index % 3 === 1 ? 'xl:translate-y-10' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary/80">
                  {locale === 'pt' ? 'Projeto' : 'Project'} {String(index + 1).padStart(2, '0')}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-white/75 text-foreground hover:text-primary"
                  aria-label={project.title}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-2 text-xs font-semibold text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="accent-line my-6" />

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-background"
                >
                  <Github className="h-4 w-4" />
                  {p.codeLabel}
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/75 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {p.demoLabel}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
