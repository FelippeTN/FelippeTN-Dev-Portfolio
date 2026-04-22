import { AnimatePresence, motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Home,
  Menu,
  MessageCircleMore,
  UserRound,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { t, toggleLocale, locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const clickLockRef = useRef<{ id: string; until: number } | null>(null);

  const navItems = t.navbar.items;
  const navIcons = [
    Home,
    UserRound,
    Wrench,
    BriefcaseBusiness,
    GraduationCap,
    FolderKanban,
    MessageCircleMore,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const now = Date.now();
      if (clickLockRef.current && now < clickLockRef.current.until) {
        setActiveSection(clickLockRef.current.id);
        return;
      }

      const currentPosition = window.scrollY + 160;
      let currentActiveSection = 'about';

      for (const item of navItems) {
        const id = item.href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= currentPosition) {
          currentActiveSection = id;
        }
      }

      setActiveSection(currentActiveSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    clickLockRef.current = { id: targetId, until: Date.now() + 900 };
    setActiveSection(targetId);

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('#about');
            }}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/14 bg-card text-sm font-extrabold tracking-tight text-foreground shadow-[0_8px_18px_-14px_rgba(17,17,17,0.35)]">
              FT
            </span>
            <div className="hidden sm:block">
              <p className="text-xl font-extrabold tracking-tight text-foreground">
                Felippe
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </a>

          <div
            className={`hidden items-center rounded-[1.6rem] border px-2 py-2 transition-all duration-300 lg:flex ${
              isScrolled
                ? 'border-border bg-card/92 shadow-[0_18px_45px_-28px_rgba(17,17,17,0.28)] backdrop-blur-lg'
                : 'border-border/80 bg-card/88 backdrop-blur-lg'
            }`}
          >
            {navItems.map((item, index) => {
              const Icon = navIcons[index] ?? Home;
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative flex h-11 items-center gap-2 rounded-[1rem] px-4 text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {isActive && <span>{item.label}</span>}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-[1rem] border border-border bg-secondary"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="hidden h-11 rounded-[1rem] border border-border bg-card px-4 text-xs font-bold uppercase tracking-[0.22em] text-foreground shadow-[0_10px_24px_-18px_rgba(17,17,17,0.25)] sm:flex"
              aria-label="Toggle language"
            >
              <span className={locale === 'pt' ? 'text-foreground' : 'text-muted-foreground'}>PT</span>
              <span className="mx-1 text-foreground/25">/</span>
              <span className={locale === 'en' ? 'text-foreground' : 'text-muted-foreground'}>EN</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-border bg-card text-foreground shadow-[0_10px_24px_-18px_rgba(17,17,17,0.25)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
            />

            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-20 z-50 rounded-[1.8rem] border border-border bg-card p-5 shadow-[0_24px_60px_-34px_rgba(17,17,17,0.28)] lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between rounded-[1.2rem] bg-secondary px-4 py-3">
                <div>
                  <p className="text-sm font-extrabold tracking-tight text-foreground">Felippe</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Portfolio
                  </p>
                </div>

                <button
                  onClick={toggleLocale}
                  className="rounded-full border border-border bg-card px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground"
                  aria-label="Toggle language"
                >
                  {locale === 'pt' ? 'EN' : 'PT'}
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = navIcons[index] ?? Home;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="flex items-center justify-between rounded-[1.15rem] border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {item.label}
                      </span>
                      <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
