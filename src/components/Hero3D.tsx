import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Felippe from '@/assets/Felippe.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero3D = () => {
  const { t } = useLanguage();
  const h = t.hero;

  const highlightIcons = [Star, CheckCircle2, Sparkles, Globe2];

  return (
    <section className="site-shell px-4 pb-10 pt-8 sm:px-6 sm:pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-card shadow-[0_18px_42px_-34px_rgba(17,17,17,0.08)]">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center lg:pr-8"
          >
            <div className="flex flex-wrap gap-3">
              <span className="eyebrow subtle-stroke">
                <MapPin className="h-3.5 w-3.5" />
                {h.locationBadge}
              </span>
              <span className="eyebrow subtle-stroke">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                {h.roleBadge}
              </span>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {h.subtitle}
            </p>

            <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.92] text-foreground sm:text-6xl xl:text-[4.6rem]">
              Felippe Toscano Nalim
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              {h.description}
            </p>

            <div className="mt-8 grid gap-4 text-base text-foreground sm:grid-cols-2">
              {h.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Sparkles;

                return (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-7">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-[1rem] bg-foreground px-6 py-4 text-sm font-bold text-background shadow-[0_12px_30px_-20px_rgba(17,17,17,0.5)]"
              >
                {h.btnProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="subtle-stroke inline-flex items-center gap-2 rounded-[1rem] bg-secondary px-6 py-4 text-sm font-bold text-foreground"
              >
                {h.btnContact}
                <ArrowRight className="h-4 w-4" />
              </Link>
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
                <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary">
                  <img
                    src={Felippe}
                    alt="Felippe Toscano Nalim"
                    className="h-[430px] w-full object-cover object-top sm:h-[520px]"
                  />
                </div>
                <div className="subtle-stroke mt-4 rounded-[1.2rem] bg-[rgba(114,212,142,0.08)] px-6 py-5 shadow-[0_18px_28px_-24px_rgba(34,197,94,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="animate-pulse-soft h-3 w-3 rounded-full bg-[#72d48e]" />
                    <p className="text-sm font-semibold text-foreground">{h.available}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {h.stats.map((stat) => (
                  <div key={stat.label} className="editorial-card min-h-[132px] p-5">
                    <p className="text-4xl font-extrabold tracking-tight text-foreground">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
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
