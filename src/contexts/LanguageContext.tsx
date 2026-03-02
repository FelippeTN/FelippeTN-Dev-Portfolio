import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations, { Locale } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  t: typeof translations['pt'];
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectLocale(): Locale {
  const lang = navigator.language?.toLowerCase() ?? '';
  return lang.startsWith('pt') ? 'pt' : 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  const toggleLocale = () => setLocale((prev) => (prev === 'pt' ? 'en' : 'pt'));

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
};
