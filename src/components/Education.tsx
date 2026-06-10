import { motion } from 'framer-motion';
import { GraduationCap, Medal, NotebookPen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section id="education" className="px-4 py-7 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="eyebrow">04 / {ed.title}</span>
          <h1 className="mt-4 max-w-3xl text-balance text-[1.62rem] font-bold leading-[1.08] text-foreground sm:mt-5 sm:text-[2.2rem]">
            {ed.description}
          </h1>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="section-frame lg:max-h-[680px] lg:overflow-hidden"
          >
            <div className="section-inner p-3 sm:p-5">
              <div className="grid gap-2.5 sm:gap-3 lg:max-h-[610px] lg:overflow-y-auto lg:pr-1">
                {ed.items.map((item) => (
                  <article key={item.degree} className="soft-panel px-3 py-3 sm:px-4 sm:py-4">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[0.75rem] bg-primary/12 text-primary sm:h-10 sm:w-10 sm:rounded-[0.9rem]">
                        <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-primary/80 sm:text-[0.64rem] sm:tracking-[0.2em]">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-[0.88rem] font-bold leading-5 text-foreground sm:text-[0.98rem] sm:leading-6">{item.degree}</h3>
                        <p className="mt-0.5 text-[0.72rem] font-medium text-muted-foreground sm:mt-1 sm:text-[0.78rem]">{item.institution}</p>
                        <p className="mt-1.5 text-[0.72rem] leading-5 text-muted-foreground/95 sm:mt-2 sm:text-[0.79rem] sm:leading-6">{item.description}</p>

                        <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border/55 bg-background/45 px-2 py-0.5 text-[0.64rem] font-medium text-foreground/85 sm:px-2.5 sm:py-1 sm:text-[0.7rem]"
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
            className="editorial-card p-3.5 sm:p-5 lg:max-h-[680px] lg:overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-[0.7rem] bg-secondary/12 text-secondary sm:h-10 sm:w-10 sm:rounded-[0.8rem]">
                <Medal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-primary/80 sm:text-[0.7rem] sm:tracking-[0.2em]">
                  05 / {ed.certificationsLabel}
                </p>
                <h3 className="mt-1 text-[0.98rem] font-bold text-foreground sm:text-[1.12rem]">{ed.certificationsLabel}</h3>
              </div>
            </div>

            <div className="accent-line my-3 sm:my-4" />

            <div className="grid gap-2 lg:max-h-[560px] lg:overflow-y-auto lg:pr-1">
              {ed.certifications.map((certification, index) => (
                <div key={certification.title} className="soft-panel px-3 py-2 sm:py-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-[0.78rem] font-bold leading-5 text-foreground sm:text-[0.84rem]">{certification.title}</h4>
                      <p className="mt-0.5 text-[0.7rem] leading-5 text-muted-foreground sm:text-[0.76rem]">
                        {certification.institution}
                      </p>
                    </div>
                    <span className="text-[0.56rem] font-bold uppercase tracking-[0.18em] text-primary/80 sm:text-[0.6rem] sm:tracking-[0.22em]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {certification.issued && (
                    <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary/75 sm:mt-1.5 sm:text-[0.62rem] sm:tracking-[0.16em]">
                      {ed.issuedLabel}: {certification.issued}
                    </p>
                  )}
                  {certification.credentialId && (
                    <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-secondary/85 sm:text-[0.62rem] sm:tracking-[0.16em]">
                      {ed.credentialIdLabel}: {certification.credentialId}
                    </p>
                  )}
                  {certification.skills && certification.skills.length > 0 && (
                    <p className="mt-1 text-[0.64rem] leading-5 text-muted-foreground sm:text-[0.68rem]">
                      <span className="font-semibold text-foreground/90">{ed.skillsLabel}:</span>{' '}
                      {certification.skills.join(' • ')}
                    </p>
                  )}
                  <p className="mt-1.5 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-secondary/85 sm:mt-2 sm:text-[0.58rem] sm:tracking-[0.18em]">
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
