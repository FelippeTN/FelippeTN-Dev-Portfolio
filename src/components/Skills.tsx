import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="section-frame mx-auto max-w-7xl">
        <div className="section-inner px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">02 / {s.title}</span>
              <h1 className="mt-4 text-balance text-[1.75rem] font-bold leading-[1.04] text-foreground sm:mt-6 sm:text-[2.65rem]">
                {s.description}
              </h1>
            </motion.div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
              {s.categories.map((category, index) => (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="editorial-card p-4 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-bold text-foreground sm:text-base">{category.title}</h3>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary/80 sm:text-[0.7rem] sm:tracking-[0.24em]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="accent-line my-3.5 sm:my-5" />

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="subtle-stroke rounded-full bg-foreground/[0.04] px-2.5 py-1.5 text-[0.7rem] font-semibold text-foreground sm:px-3 sm:py-2 sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
