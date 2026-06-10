import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, locale } = useLanguage();
  const a = t.about;
  const hero = t.hero;

  const introParagraphs =
    locale === 'pt'
      ? [
          'Olá! Sou Felippe Toscano Nalim, engenheiro de software com foco em backend de alta performance e sistemas prontos para produção com IA.',
          'Hoje atuo na PGE-RJ, conectando engenharia de software sólida com inteligência artificial moderna para construir soluções confiáveis, observáveis e escaláveis.',
          'Minha missão é transformar complexidade técnica em sistemas elegantes, úteis e sustentáveis, sempre com atenção real a performance, arquitetura e impacto no negócio.',
        ]
      : [
          'Hi! I am Felippe Toscano Nalim, a software engineer focused on high-performance backend systems and production-grade AI solutions.',
          'Today I work at PGE-RJ, connecting solid software engineering with modern artificial intelligence to build reliable, observable, and scalable systems.',
          'My mission is to turn technical complexity into elegant, useful, and sustainable systems, always with real attention to performance, architecture, and business impact.',
        ];

  const achievements =
    locale === 'pt'
      ? [
          'Backend de alta performance com Go, Python e TypeScript',
          'IA operacionalizada para ambientes de produção reais',
          'Arquiteturas observáveis, escaláveis e confiáveis',
          'Experiência em setor público e produtos de tecnologia',
        ]
      : [
          'High-performance backend with Go, Python, and TypeScript',
          'AI operationalized for real production environments',
          'Observable, scalable, and reliable architectures',
          'Experience across public sector and product teams',
        ];

  const detailCards = [
    {
      id: 'education-mba',
      icon: GraduationCap,
      label: locale === 'pt' ? 'Formação' : 'Education',
      value: locale === 'pt' ? 'MBA - Engenharia de Software' : 'MBA - Software Engineering',
      detail: locale === 'pt' ? 'MBA USP/Esalq' : 'MBA USP/Esalq',
      meta: locale === 'pt' ? 'Atual' : 'Current',
    },
    {
      id: 'education-ads',
      icon: GraduationCap,
      label: locale === 'pt' ? 'Formação' : 'Education',
      value:
        locale === 'pt'
          ? 'Análise e Desenvolvimento de Sistemas'
          : 'Systems Analysis and Development',
      detail:
        locale === 'pt' ? 'Universidade Estácio de Sá' : 'Estacio de Sa University',
      meta: '',
    },
    {
      id: 'experience',
      icon: BriefcaseBusiness,
      label: locale === 'pt' ? 'Experiência' : 'Experience',
      value: locale === 'pt' ? '3+ anos construindo sistemas' : '3+ years building systems',
      detail:
        locale === 'pt'
          ? 'PGE-RJ - Procuradoria-Geral do Estado do Rio de Janeiro'
          : 'PGE-RJ - Attorney General of the State of Rio de Janeiro',
      meta: locale === 'pt' ? '2024 - Presente' : '2024 - Present',
    },
    {
      id: 'location',
      icon: MapPin,
      label: locale === 'pt' ? 'Localização' : 'Location',
      value: hero.stats[2]?.label ?? hero.locationBadge,
      detail: hero.locationBadge,
      meta: locale === 'pt' ? 'Base atual' : 'Current base',
    },
    {
      id: 'role',
      icon: Sparkles,
      label: locale === 'pt' ? 'Posição' : 'Role',
      value: 'Software Engineer',
      detail:
        locale === 'pt' ? 'Engenheiro de Software Autônomo' : 'Independent Software Engineer',
      meta: locale === 'pt' ? '2023 - Presente' : '2023 - Present',
    },
  ];

  return (
    <section id="about" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="px-1 sm:px-2 lg:pt-6"
        >
          <span className="inline-flex items-center rounded-full border border-border/70 bg-card px-3 py-1.5 text-[0.66rem] font-semibold tracking-tight text-foreground shadow-[0_10px_24px_-22px_rgba(17,17,17,0.12)] sm:py-2 sm:text-[0.72rem]">
            {locale === 'pt' ? 'Sobre Felippe Toscano' : 'About Felippe Toscano'}
          </span>

          <h1 className="mt-5 max-w-xl text-balance text-[1.75rem] font-extrabold leading-[1] tracking-tight text-foreground sm:mt-7 sm:text-[2.8rem]">
            {locale === 'pt'
              ? 'Construindo backend robusto com foco em clareza e escala'
              : 'Building robust backend systems with clarity and scale'}
          </h1>

          <p className="mt-4 text-[0.9rem] leading-6 text-muted-foreground sm:mt-5 sm:text-[1.02rem]">{a.description}</p>

          <div className="mt-5 space-y-3 text-[0.84rem] leading-6 text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-[1rem] sm:leading-7">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 sm:mt-10">
            <p className="text-sm font-bold text-foreground sm:text-base">
              {locale === 'pt' ? 'Principais destaques' : 'Key highlights'}
            </p>

            <div className="mt-4 grid gap-x-8 gap-y-2.5 text-[0.82rem] text-foreground sm:mt-5 sm:grid-cols-2 sm:text-[0.92rem]">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground sm:h-2 sm:w-2" />
                  <span className="leading-5 text-muted-foreground sm:leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="flex flex-col gap-3 sm:gap-4 lg:pt-6"
        >
          <div className="grid gap-4">
            {detailCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-[1.25rem] border border-border/70 bg-card px-4 py-3.5 shadow-[0_18px_34px_-30px_rgba(17,17,17,0.12)] sm:rounded-[1.6rem] sm:px-6 sm:py-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-[0.8rem] bg-secondary text-foreground sm:h-10 sm:w-10 sm:rounded-[1rem]">
                        <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                      </div>

                      <div>
                        <p className="text-[0.68rem] font-medium text-muted-foreground sm:text-xs">{card.label}</p>
                        <p className="mt-0.5 text-[0.84rem] font-semibold text-foreground sm:mt-1 sm:text-[0.92rem]">
                          {card.value}
                        </p>
                        <p className="mt-0.5 text-[0.78rem] text-muted-foreground sm:mt-1 sm:text-[0.9rem]">{card.detail}</p>
                      </div>
                    </div>

                    <span className="text-[0.68rem] text-muted-foreground sm:text-xs">{card.meta}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
