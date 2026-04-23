import type { Locale } from '@/lib/translations';

export const SITE_NAME = 'Felippe Toscano Nalim';
export const SITE_TITLE_SUFFIX = 'Felippe Toscano Nalim';
export const SITE_DEFAULT_IMAGE = '/code.svg';
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '') ?? '';

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'profile' | 'article';
  keywords?: string[];
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function getSiteOrigin() {
  if (SITE_URL) {
    return SITE_URL;
  }

  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  return '';
}

export function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const origin = getSiteOrigin();

  if (!origin) {
    return path;
  }

  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getLocalizedBaseDescription(locale: Locale) {
  if (locale === 'pt') {
    return 'Portfólio de Felippe Toscano Nalim, engenheiro de software especializado em backend de alta performance, IA aplicada, arquitetura escalável e desenvolvimento com Go, Python, React e TypeScript.';
  }

  return 'Portfolio of Felippe Toscano Nalim, a software engineer specialized in high-performance backend, applied AI, scalable architecture, and development with Go, Python, React, and TypeScript.';
}

export function getPersonStructuredData(locale: Locale, pathname: string) {
  const url = toAbsoluteUrl(pathname || '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url,
    image: toAbsoluteUrl('/code.svg'),
    jobTitle: 'Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rio de Janeiro',
      addressCountry: 'BR',
    },
    description: getLocalizedBaseDescription(locale),
    sameAs: [
      'https://github.com/FelippeTN',
      'https://www.linkedin.com/in/felippe-toscano-nalim/',
      'https://www.instagram.com/felippetn/',
      'https://www.youtube.com/@felippetndev',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade de Sao Paulo',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Estacio',
      },
    ],
    knowsAbout: [
      'Backend Engineering',
      'Software Architecture',
      'Artificial Intelligence',
      'Go',
      'Python',
      'TypeScript',
      'React',
      'Node.js',
      'Cloud Infrastructure',
      'Observability',
    ],
  };
}

export function getBreadcrumbStructuredData(
  locale: Locale,
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
    inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
  };
}
