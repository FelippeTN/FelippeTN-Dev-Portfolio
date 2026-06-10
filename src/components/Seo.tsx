import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SITE_AUTHOR_URL,
  SITE_DEFAULT_IMAGE,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  type SeoConfig,
  toAbsoluteUrl,
} from '@/lib/seo';

const META_DEFINITIONS = [
  { selector: 'name', key: 'description' },
  { selector: 'name', key: 'keywords' },
  { selector: 'name', key: 'robots' },
  { selector: 'name', key: 'googlebot' },
  { selector: 'name', key: 'author' },
  { selector: 'property', key: 'og:title' },
  { selector: 'property', key: 'og:description' },
  { selector: 'property', key: 'og:type' },
  { selector: 'property', key: 'og:url' },
  { selector: 'property', key: 'og:image' },
  { selector: 'property', key: 'og:image:alt' },
  { selector: 'property', key: 'og:site_name' },
  { selector: 'property', key: 'og:locale' },
  { selector: 'property', key: 'article:author' },
  { selector: 'property', key: 'article:published_time' },
  { selector: 'property', key: 'article:modified_time' },
  { selector: 'property', key: 'article:section' },
  { selector: 'name', key: 'twitter:card' },
  { selector: 'name', key: 'twitter:title' },
  { selector: 'name', key: 'twitter:description' },
  { selector: 'name', key: 'twitter:image' },
  { selector: 'name', key: 'twitter:image:alt' },
];

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!content) {
    meta?.remove();
    return;
  }

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

type SeoProps = SeoConfig & {
  image?: string;
};

const Seo = ({
  title,
  description,
  path,
  type = 'website',
  keywords = [],
  noindex = false,
  structuredData,
  image = SITE_DEFAULT_IMAGE,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SeoProps) => {
  const { locale } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const lang = locale === 'pt' ? 'pt-BR' : 'en';
    const fullTitle = `${title} | ${SITE_TITLE_SUFFIX}`;
    const canonicalUrl = toAbsoluteUrl(path || location.pathname);
    const imageUrl = toAbsoluteUrl(image);
    const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
    const googlebot = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    document.documentElement.lang = lang;
    document.title = fullTitle;

    upsertLink('canonical', canonicalUrl);

    const metaValues: Record<string, string> = {
      description,
      keywords: keywords.join(', '),
      robots,
      googlebot,
      author: SITE_NAME,
      'og:title': fullTitle,
      'og:description': description,
      'og:type': type,
      'og:url': canonicalUrl,
      'og:image': imageUrl,
      'og:image:alt': `${SITE_NAME} - ${title}`,
      'og:site_name': SITE_NAME,
      'og:locale': locale === 'pt' ? 'pt_BR' : 'en_US',
      'article:author': type === 'article' ? SITE_AUTHOR_URL : '',
      'article:published_time': type === 'article' && publishedTime ? publishedTime : '',
      'article:modified_time': type === 'article' && modifiedTime ? modifiedTime : '',
      'article:section': type === 'article' && section ? section : '',
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': imageUrl,
      'twitter:image:alt': `${SITE_NAME} - ${title}`,
    };

    META_DEFINITIONS.forEach(({ selector, key }) => {
      const value = metaValues[key];

      if (value) {
        upsertMeta(selector as 'name' | 'property', key, value);
      }
    });

    document.head
      .querySelectorAll<HTMLMetaElement>('meta[property="article:tag"]')
      .forEach((meta) => meta.remove());

    if (type === 'article') {
      tags.filter(Boolean).forEach((tag) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }

    const existingScript = document.getElementById('seo-structured-data');

    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [
    description,
    image,
    keywords,
    locale,
    location.pathname,
    modifiedTime,
    noindex,
    path,
    publishedTime,
    section,
    structuredData,
    tags,
    title,
    type,
  ]);

  return null;
};

export default Seo;
