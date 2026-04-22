import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="px-4 py-10 sm:px-6">
      <div className="section-frame mx-auto max-w-7xl">
        <div className="section-inner px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">02 / {s.title}</span>
              <h2 className="mt-6 text-balance text-[2.1rem] font-bold leading-[1.04] text-foreground sm:text-[2.65rem]">
                {s.description}
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {s.categories.map((category, index) => (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="editorial-card p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-bold text-foreground">{category.title}</h3>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="accent-line my-5" />

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="subtle-stroke rounded-full bg-foreground/[0.04] px-3 py-2 text-xs font-semibold text-foreground"
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
