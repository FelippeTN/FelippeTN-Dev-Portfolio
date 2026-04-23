import { AnimatePresence, motion } from 'framer-motion';
import {
  Blocks,
  BookOpenText,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  MessageSquareText,
  MoreHorizontal,
  Twitter,
  UserRound,
  Youtube,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../F_logo.png';

const Navbar = () => {
  const { t, toggleLocale, locale } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.min(window.scrollY / documentHeight, 1);
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [location.pathname]);

  const navItems = [
    { label: locale === 'pt' ? 'Início' : 'Home', href: '/', icon: Home },
    { ...t.navbar.items[0], href: '/about', icon: UserRound },
    { ...t.navbar.items[1], href: '/skills', icon: Blocks },
    { ...t.navbar.items[2], href: '/experience', icon: BriefcaseBusiness },
    { ...t.navbar.items[3], href: '/education', icon: GraduationCap },
    { label: locale === 'pt' ? 'Blog' : 'Blog', href: '/blog', icon: BookOpenText },
    {
      label: 'GitHub',
      href: 'https://github.com/FelippeTN',
      icon: Github,
      external: true,
    },
    { ...t.navbar.items[5], href: '/contact', icon: MessageSquareText },
  ];

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/felippe-toscano-nalim/',
    },
    { icon: Twitter, label: 'X', href: 'https://x.com/' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="sticky inset-x-0 top-0 z-50 overflow-hidden border-b border-border/60 bg-background px-4 py-3 shadow-[0_10px_24px_-22px_rgba(17,17,17,0.35)] md:bg-background lg:border-b-0 lg:shadow-none"
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] bg-black"
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ ease: 'easeOut', duration: 0.12 }}
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden">
              <img src={logo} alt="Felippe logo" className="h-full w-full object-contain" />
            </span>
            <div className="hidden sm:block">
              <p className="text-lg font-extrabold tracking-tight text-foreground">Felippe</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center rounded-[1rem] bg-card px-1 py-1 shadow-[0_14px_32px_-28px_rgba(17,17,17,0.12)] lg:flex [box-shadow:0_14px_32px_-28px_rgba(17,17,17,0.12),inset_0_0_0_1px_rgba(17,17,17,0.08)]">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                const showLabel = isActive;

                if (item.external) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="relative flex h-11 w-11 items-center justify-center rounded-[1rem] text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      <motion.span
                        animate={{ x: 2, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="flex items-center"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.span>
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={`relative flex h-11 items-center rounded-[1rem] px-4 text-sm font-semibold transition-colors duration-300 ${
                      isActive ? 'border text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <motion.span
                      animate={{ x: isActive ? 0 : 2, scale: isActive ? 1 : 0.96 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="flex items-center"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.span>

                    <AnimatePresence initial={false}>
                      {showLabel && (
                        <motion.span
                          key={`${item.href}-label`}
                          initial={{ width: 0, opacity: 0, x: -6 }}
                          animate={{ width: 'auto', opacity: 1, x: 0 }}
                          exit={{ width: 0, opacity: 0, x: -6 }}
                          transition={{
                            width: { duration: 0.28, ease: 'easeOut' },
                            opacity: { duration: 0.18, ease: 'easeOut' },
                            x: { duration: 0.22, ease: 'easeOut' },
                          }}
                          className="overflow-hidden whitespace-nowrap"
                        >
                          <span className="ml-2 block">{item.label}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-[1rem] bg-background shadow-[0_10px_24px_-18px_rgba(17,17,17,0.08)] [box-shadow:0_10px_24px_-18px_rgba(17,17,17,0.08),inset_0_0_0_1.5px_rgba(17,17,17,0.16)]"
                        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>

            <button
              onClick={toggleLocale}
              className="hidden items-center rounded-[1rem] bg-card px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-[0_14px_32px_-28px_rgba(17,17,17,0.12)] transition-all duration-300 sm:flex [box-shadow:0_14px_32px_-28px_rgba(17,17,17,0.12),inset_0_0_0_1px_rgba(17,17,17,0.08)]"
              aria-label="Toggle language"
            >
              <span
                className={`relative flex h-11 min-w-[3.5rem] items-center justify-center rounded-[1rem] px-3 transition-colors duration-300 ${
                  locale === 'pt' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {locale === 'pt' && (
                  <motion.span
                    layoutId="locale-active-pill"
                    className="absolute inset-0 -z-10 rounded-[1rem] bg-background shadow-[0_10px_24px_-18px_rgba(17,17,17,0.08)] [box-shadow:0_10px_24px_-18px_rgba(17,17,17,0.08),inset_0_0_0_1.5px_rgba(17,17,17,0.16)]"
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  />
                )}
                PT
              </span>
              <span className="px-1.5 text-[0.65rem] font-medium text-foreground/30">/</span>
              <span
                className={`relative flex h-11 min-w-[3.5rem] items-center justify-center rounded-[1rem] px-3 transition-colors duration-300 ${
                  locale === 'en' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {locale === 'en' && (
                  <motion.span
                    layoutId="locale-active-pill"
                    className="absolute inset-0 -z-10 rounded-[1rem] bg-background shadow-[0_10px_24px_-18px_rgba(17,17,17,0.08)] [box-shadow:0_10px_24px_-18px_rgba(17,17,17,0.08),inset_0_0_0_1.5px_rgba(17,17,17,0.16)]"
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  />
                )}
                EN
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="subtle-stroke flex h-11 w-11 items-center justify-center rounded-[1rem] bg-secondary text-foreground shadow-[0_10px_24px_-18px_rgba(17,17,17,0.08)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <MoreHorizontal className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-background px-5 pb-10 pt-6 lg:hidden"
          >
            <div className="mx-auto w-full max-w-md">
              <div className="flex items-center justify-between border-b border-border/70 pb-6">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="flex h-11 w-11 items-center justify-center overflow-hidden">
                    <img src={logo} alt="Felippe logo" className="h-9 w-9 object-contain" />
                  </span>
                  <p className="text-[1.7rem] font-extrabold tracking-tight text-foreground">Felippe</p>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-x-3 gap-y-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  if (item.external) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label={item.label}
                        title={item.label}
                        className="flex min-h-[5.4rem] flex-col items-center justify-center rounded-[1.4rem] px-2 text-center text-[0.92rem] font-semibold text-muted-foreground transition-colors duration-200"
                      >
                        <Icon className="mb-2 h-[1.1rem] w-[1.1rem]" />
                        <span>{item.label}</span>
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex min-h-[5.4rem] flex-col items-center justify-center rounded-[1.4rem] px-2 text-center text-[0.92rem] font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-card text-foreground [box-shadow:0_14px_30px_-26px_rgba(17,17,17,0.18),inset_0_0_0_1.4px_rgba(17,17,17,0.12)]'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="mb-2 h-[1.1rem] w-[1.1rem]" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={toggleLocale}
                className="mt-10 flex w-full items-center justify-center rounded-[1rem] bg-secondary px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-muted-foreground"
                aria-label="Toggle language"
              >
                {locale === 'pt' ? 'Switch to English' : 'Mudar para Portugues'}
              </button>

              <div className="mt-8 border-t border-border/70 pt-7">
                <p className="text-center text-sm font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                  {locale === 'pt' ? 'Redes Sociais' : 'Social Media'}
                </p>

                <div className="mt-5 flex items-center justify-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-muted-foreground [box-shadow:inset_0_0_0_1px_rgba(17,17,17,0.08)]"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
