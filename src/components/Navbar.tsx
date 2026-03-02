import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { t, toggleLocale, locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const clickLockRef = useRef<{ id: string; until: number } | null>(null);

  const navItems = t.navbar.items;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const now = Date.now();
      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (isAtPageBottom) {
        setActiveSection('contact');
        return;
      }

      if (clickLockRef.current && now < clickLockRef.current.until) {
        setActiveSection(clickLockRef.current.id);
        return;
      }

      const offset = 120;
      const currentPosition = window.scrollY + offset;
      let currentActiveSection = '';

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
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '#') {
      clickLockRef.current = null;
      setActiveSection('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    clickLockRef.current = { id: targetId, until: Date.now() + 900 };
    setActiveSection(targetId);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('#'); }}
              className="text-foreground font-semibold text-lg tracking-tight hover:text-primary transition-colors duration-300"
              whileTap={{ scale: 0.98 }}
            >
              felippe<span className="text-primary">.</span>dev
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Flag toggle */}
              <button
                onClick={toggleLocale}
                aria-label="Toggle language"
                className="ml-3 relative flex items-center gap-0 rounded-full border border-white/[0.1] bg-white/[0.04] p-0.5 hover:border-primary/40 transition-all duration-300"
              >
                <span
                  className={`relative z-10 flex items-center justify-center w-8 h-7 rounded-full text-base transition-all duration-300 ${
                    locale === 'pt' ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  🇧🇷
                </span>
                <span
                  className={`relative z-10 flex items-center justify-center w-8 h-7 rounded-full text-base transition-all duration-300 ${
                    locale === 'en' ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  🇺🇸
                </span>
                {/* sliding indicator */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute top-0.5 bottom-0.5 w-8 rounded-full bg-primary/20 border border-primary/30"
                  style={{ left: locale === 'pt' ? '2px' : 'calc(50% + 0px)' }}
                />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-card/95 backdrop-blur-xl border-l border-white/[0.06] z-50 md:hidden"
            >
              <div className="flex flex-col p-8 pt-20 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-white/[0.03] rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                {/* Mobile flag toggle */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="mt-3 flex items-center justify-between px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {locale === 'pt' ? 'Idioma' : 'Language'}
                  </span>
                  <button
                    onClick={toggleLocale}
                    aria-label="Toggle language"
                    className="relative flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] p-0.5 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className={`relative z-10 flex items-center justify-center w-9 h-8 rounded-full text-lg transition-all duration-300 ${locale === 'pt' ? 'opacity-100' : 'opacity-35'}`}>🇧🇷</span>
                    <span className={`relative z-10 flex items-center justify-center w-9 h-8 rounded-full text-lg transition-all duration-300 ${locale === 'en' ? 'opacity-100' : 'opacity-35'}`}>🇺🇸</span>
                    <motion.span
                      layout
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute top-0.5 bottom-0.5 w-9 rounded-full bg-primary/20 border border-primary/30"
                      style={{ left: locale === 'pt' ? '2px' : 'calc(50% + 0px)' }}
                    />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
