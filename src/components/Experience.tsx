import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <section id="experience" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">03 / {ex.title}</span>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl">
            {ex.description}
          </h2>
        </motion.div>

        <div className="grid gap-5">
          {ex.items.map((item, index) => (
            <motion.article
              key={item.title + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="section-frame"
            >
              <div className="section-inner grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[0.44fr_1fr] lg:gap-10 lg:px-10 lg:py-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/85">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.company}
                  </p>
                </div>

                <div>
                  <p className="text-base leading-8 text-muted-foreground">{item.description}</p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="soft-panel flex items-start gap-3 px-4 py-4"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-sm leading-7 text-foreground/88">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
