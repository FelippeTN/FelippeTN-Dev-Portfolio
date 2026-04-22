import { AnimatePresence, motion } from 'framer-motion';
import {
  Blocks,
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  Home,
  Menu,
  MessageSquareText,
  UserRound,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../F_logo.png';

const Navbar = () => {
  const { t, toggleLocale, locale } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: locale === 'pt' ? 'Início' : 'Home', href: '/', icon: Home },
    { ...t.navbar.items[0], href: '/about', icon: UserRound },
    { ...t.navbar.items[1], href: '/skills', icon: Blocks },
    { ...t.navbar.items[2], href: '/experience', icon: BriefcaseBusiness },
    { ...t.navbar.items[3], href: '/education', icon: GraduationCap },
    { ...t.navbar.items[4], href: '/projects', icon: FolderGit2 },
    { ...t.navbar.items[5], href: '/contact', icon: MessageSquareText },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="sticky inset-x-0 top-0 z-50 bg-background/96 px-4 py-3 backdrop-blur-sm sm:px-6"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden">
              <img src={logo} alt="Felippe logo" className="h-full w-full object-contain" />
            </span>
            <div className="hidden sm:block">
              <p className="text-xl font-extrabold tracking-tight text-foreground">Felippe</p>
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
                      {isActive && (
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
              className="hidden h-11 items-center rounded-[1rem] bg-card px-1 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-[0_14px_32px_-28px_rgba(17,17,17,0.12)] transition-all duration-300 sm:flex [box-shadow:0_14px_32px_-28px_rgba(17,17,17,0.12),inset_0_0_0_1px_rgba(17,17,17,0.08)]"
              aria-label="Toggle language"
            >
              <span
                className={`relative flex h-full min-w-[3rem] items-center justify-center rounded-[1rem] px-3 transition-colors duration-300 ${
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
                className={`relative flex h-full min-w-[3rem] items-center justify-center rounded-[1rem] px-3 transition-colors duration-300 ${
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
              className="fixed inset-x-4 top-[76px] z-50 rounded-[1.8rem] bg-card p-5 shadow-[0_24px_60px_-34px_rgba(17,17,17,0.14)] lg:hidden"
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
                  className="subtle-stroke rounded-full bg-card px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground shadow-[0_8px_18px_-14px_rgba(17,17,17,0.08)]"
                  aria-label="Toggle language"
                >
                  {locale === 'pt' ? 'EN' : 'PT'}
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-[1.15rem] px-4 py-3 text-sm font-semibold ${
                        location.pathname === item.href
                          ? 'bg-card text-foreground [box-shadow:inset_0_0_0_1.5px_rgba(17,17,17,0.16)]'
                          : 'bg-secondary/55 text-foreground'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {item.label}
                      </span>
                    </NavLink>
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
