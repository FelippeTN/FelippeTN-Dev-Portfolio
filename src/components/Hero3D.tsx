import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  MapPin,
  Sparkles,
  Star,
  Youtube,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Felippe from '@/assets/Felippe.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero3D = () => {
  const { t, locale } = useLanguage();
  const h = t.hero;
  const youtubeChannels = [
    {
      handle: '@felippetndev',
      href: 'https://www.youtube.com/@felippetndev',
      isNew: true,
    },
  ];

  const highlightIcons = [Star, CheckCircle2, Sparkles, Globe2];

  return (
    <section className="site-shell px-4 pb-10 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-card shadow-[0_18px_42px_-34px_rgba(17,17,17,0.08)]">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center lg:pr-8"
          >
            <div className="flex flex-wrap gap-3">
              <span className="eyebrow subtle-stroke" style={{ fontSize: '0.56rem', letterSpacing: '0.12em' }}>
                <MapPin className="h-3.5 w-3.5" />
                {h.locationBadge}
              </span>
              <span className="eyebrow subtle-stroke" style={{ fontSize: '0.56rem', letterSpacing: '0.12em' }}>
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                {h.roleBadge}
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
              {h.subtitle}
            </p>

            <h1 className="mt-5 text-balance text-[2.45rem] font-extrabold leading-[0.98] text-foreground sm:text-[3rem] xl:text-[3.55rem]">
              Felippe Toscano Nalim
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.02rem]">
              {h.description}
            </p>

            <div className="mt-8 grid gap-4 text-sm text-foreground sm:grid-cols-2 sm:text-[0.95rem]">
              {h.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Sparkles;

                return (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-6">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-[0.8rem] bg-foreground px-12 py-3 text-[0.8rem] font-bold text-background shadow-[0_12px_30px_-20px_rgba(17,17,17,0.5)] transition-colors duration-200 hover:bg-zinc-700 sm:text-sm"
              >
                {h.btnProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="subtle-stroke inline-flex items-center gap-2 rounded-[0.8rem] bg-secondary px-12 py-3 text-[0.8rem] font-bold text-foreground transition-colors duration-200 hover:bg-zinc-200 sm:text-sm"
              >
                {h.btnContact}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-7 px-4 py-4 sm:px-5">
              <p className="text-sm font-semibold text-muted-foreground">
                {locale === 'pt' ? 'Canais no YouTube:' : 'YouTube Channels:'}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {youtubeChannels.map((channel) => (
                  <a
                    key={channel.handle}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-zinc-200"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>{channel.handle}</span>
                    {channel.isNew && (
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                        {locale === 'pt' ? 'Novo' : 'New'}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative lg:pl-6"
          >
            <div className="grid gap-4">
              <div className="rounded-[1.8rem] bg-card p-4 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.12)]">
                <div className="relative rounded-[1.5rem]">
                  <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
                    <img
                      src={Felippe}
                      alt="Felippe Toscano Nalim"
                      className="h-[430px] w-full object-cover object-top sm:h-[520px]"
                    />
                  </div>
                  <div className="subtle-stroke absolute -bottom-3 -right-3 z-10 w-fit max-w-[85%] rounded-[1rem] bg-[rgba(255,255,255)] px-6 py-5 shadow-[0_18px_28px_-24px_rgba(34,197,94,0.28)] backdrop-blur-[2px] sm:-bottom-4 sm:-right-4 sm:max-w-[75%]">
                    <div className="flex items-center gap-3">
                      <span className="animate-pulse-soft h-3 w-3 rounded-full bg-[#72d48e]" />
                      <p className="text-sm font-semibold text-foreground">{h.available}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {h.stats.map((stat) => (
                  <div key={stat.label} className="editorial-card min-h-[132px] p-5">
                    <p className="text-[1.75rem] font-extrabold tracking-tight text-foreground sm:text-[2rem]">{stat.value}</p>
                    <p className="mt-2 text-[0.72rem] leading-5 text-muted-foreground sm:text-[0.82rem] sm:leading-6">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
