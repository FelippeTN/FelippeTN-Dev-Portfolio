import { motion } from 'framer-motion';
import { GraduationCap, Medal, NotebookPen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section id="education" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">04 / {ed.title}</span>
          <h2 className="mt-5 max-w-3xl text-balance text-[1.9rem] font-bold leading-[1.08] text-foreground sm:text-[2.2rem]">
            {ed.description}
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="section-frame lg:max-h-[680px] lg:overflow-hidden"
          >
            <div className="section-inner p-4 sm:p-5">
              <div className="grid gap-3 lg:max-h-[610px] lg:overflow-y-auto lg:pr-1">
                {ed.items.map((item) => (
                  <article key={item.degree} className="soft-panel px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[0.9rem] bg-primary/12 text-primary">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-primary/80">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-[0.98rem] font-bold leading-6 text-foreground">{item.degree}</h3>
                        <p className="mt-1 text-[0.78rem] font-medium text-muted-foreground">{item.institution}</p>
                        <p className="mt-2 text-[0.79rem] leading-6 text-muted-foreground/95">{item.description}</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border/55 bg-background/45 px-2.5 py-1 text-[0.7rem] font-medium text-foreground/85"
                            >
                              <NotebookPen className="h-3 w-3 flex-shrink-0 text-secondary" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="editorial-card p-4 sm:p-5 lg:max-h-[680px] lg:overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-secondary/12 text-secondary">
                <Medal className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary/80">
                  05 / {ed.certificationsLabel}
                </p>
                <h3 className="mt-1 text-[1.12rem] font-bold text-foreground">{ed.certificationsLabel}</h3>
              </div>
            </div>

            <div className="accent-line my-4" />

            <div className="grid gap-2.5 lg:max-h-[560px] lg:overflow-y-auto lg:pr-1">
              {ed.certifications.map((certification, index) => (
                <div key={certification.title} className="soft-panel px-3 py-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-[0.84rem] font-bold leading-5 text-foreground">{certification.title}</h4>
                      <p className="mt-0.5 text-[0.76rem] leading-5 text-muted-foreground">
                        {certification.institution}
                      </p>
                    </div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-primary/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {certification.issued && (
                    <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary/75">
                      {ed.issuedLabel}: {certification.issued}
                    </p>
                  )}
                  {certification.credentialId && (
                    <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-secondary/85">
                      {ed.credentialIdLabel}: {certification.credentialId}
                    </p>
                  )}
                  {certification.skills && certification.skills.length > 0 && (
                    <p className="mt-1 text-[0.68rem] leading-5 text-muted-foreground">
                      <span className="font-semibold text-foreground/90">{ed.skillsLabel}:</span>{' '}
                      {certification.skills.join(' • ')}
                    </p>
                  )}
                  <p className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-secondary/85">
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
