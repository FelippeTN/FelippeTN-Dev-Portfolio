import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <section id="experience" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">03 / {ex.title}</span>
          <h1 className="mt-4 max-w-3xl text-balance text-[1.75rem] font-bold leading-[1.04] text-foreground sm:mt-6 sm:text-[2.65rem]">
            {ex.description}
          </h1>
        </motion.div>

        <div className="grid gap-3.5 sm:gap-5">
          {ex.items.map((item, index) => (
            <motion.article
              key={item.title + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="section-frame"
            >
              <div className="section-inner grid gap-4 px-4 py-4 sm:gap-6 sm:px-8 sm:py-6 lg:grid-cols-[0.44fr_1fr] lg:gap-10 lg:px-10 lg:py-8">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary/85 sm:text-sm sm:tracking-[0.22em]">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-[1.35rem] font-bold leading-tight text-foreground sm:mt-4 sm:text-[1.8rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] leading-5 text-muted-foreground sm:mt-2 sm:text-[0.95rem] sm:leading-relaxed">
                    {item.company}
                  </p>
                </div>

                <div>
                  <p className="text-[0.84rem] leading-6 text-muted-foreground sm:text-[0.96rem] sm:leading-7">{item.description}</p>

                  <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-2">
                    {item.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="soft-panel flex items-start gap-2.5 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4"
                      >
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary sm:h-4 sm:w-4" />
                        <p className="text-[0.78rem] leading-5 text-foreground/88 sm:text-[0.88rem] sm:leading-6">{achievement}</p>
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
