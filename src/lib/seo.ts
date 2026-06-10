import type { Locale } from '@/lib/translations';

export const SITE_NAME = 'Felippe Toscano Nalim';
export const SITE_TITLE_SUFFIX = 'Felippe Toscano Nalim';
export const SITE_DEFAULT_IMAGE = '/code.svg';
export const SITE_AUTHOR_URL = 'https://github.com/FelippeTN';
export const SITE_SOCIAL_LINKS = [
  'https://github.com/FelippeTN',
  'https://www.linkedin.com/in/felippe-toscano-nalim/',
  'https://www.instagram.com/felippetn/',
  'https://www.youtube.com/@felippetndev',
];
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
  publishedTime?: string;
  modifiedTime?: string;
  section?: string | null;
  tags?: string[];
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
    '@id': `${toAbsoluteUrl('/')}#person`,
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
    sameAs: SITE_SOCIAL_LINKS,
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

export function getWebSiteStructuredData(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${toAbsoluteUrl('/')}#website`,
    name: 'Felippe Toscano Nalim Portfolio',
    alternateName: ['FelippeTN', 'Felippe Toscano'],
    url: toAbsoluteUrl('/'),
    description: getLocalizedBaseDescription(locale),
    inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
    publisher: {
      '@id': `${toAbsoluteUrl('/')}#person`,
    },
  };
}

export function getWebPageStructuredData({
  locale,
  path,
  name,
  description,
  type = 'WebPage',
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${toAbsoluteUrl(path)}#webpage`,
    name,
    description,
    url: toAbsoluteUrl(path),
    isPartOf: {
      '@id': `${toAbsoluteUrl('/')}#website`,
    },
    about: {
      '@id': `${toAbsoluteUrl('/')}#person`,
    },
    inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
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
