import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, LineChart, Rocket, Server, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  const featureIcons = [Server, BrainCircuit, LineChart, Layers3, Users, Rocket];

  return (
    <section id="about" className="px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="section-frame"
        >
          <div className="section-inner p-6 sm:p-8 lg:p-10">
            <span className="eyebrow">01 / {a.title}</span>
            <h2 className="text-balance mt-6 max-w-lg text-4xl font-bold leading-[1] text-foreground sm:text-5xl">
              {a.description}
            </h2>
            <div className="accent-line my-8" />
            <div className="rounded-[1.55rem] bg-secondary p-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {a.funFactLabel}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/88">{a.funFact}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {a.features.map((feature, index) => {
            const Icon = featureIcons[index];

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="editorial-card p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-secondary text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
