import { motion } from 'framer-motion';
import { GraduationCap, Medal, NotebookPen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section id="education" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">04 / {ed.title}</span>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl">
            {ed.description}
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="section-frame"
          >
            <div className="section-inner p-6 sm:p-8">
              {ed.items.map((item) => (
                <div key={item.degree}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-primary/12 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/80">
                          {item.period}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">{item.degree}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-8 text-base leading-8 text-muted-foreground">{item.description}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="soft-panel flex items-center gap-3 px-4 py-4"
                      >
                        <NotebookPen className="h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className="text-sm font-semibold text-foreground/88">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="editorial-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-secondary/12 text-secondary">
                <Medal className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/80">
                  05 / {ed.certificationsLabel}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-foreground">{ed.certificationsLabel}</h3>
              </div>
            </div>

            <div className="accent-line my-6" />

            <div className="grid gap-4">
              {ed.certifications.map((certification, index) => (
                <div key={certification.title} className="soft-panel px-4 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-foreground">{certification.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {certification.institution}
                      </p>
                    </div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-secondary/85">
                    {certification.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
