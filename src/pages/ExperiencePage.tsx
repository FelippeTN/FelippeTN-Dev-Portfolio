import Experience from '@/components/Experience';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBreadcrumbStructuredData } from '@/lib/seo';

const ExperiencePage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Experiência profissional de Felippe Toscano Nalim em engenharia de software, backend, IA aplicada e desenvolvimento de sistemas em produção.'
      : 'Professional experience of Felippe Toscano Nalim in software engineering, backend, applied AI, and production systems development.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
        description={description}
        path="/experience"
        keywords={
          locale === 'pt'
            ? ['experiência profissional', 'engenheiro de software', 'backend', 'go', 'python', 'pge-rj']
            : ['professional experience', 'software engineer', 'backend', 'go', 'python', 'pge-rj']
        }
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: locale === 'pt' ? 'Experiência Profissional' : 'Professional Experience',
            description,
            url: typeof window !== 'undefined' ? `${window.location.origin}/experience` : '/experience',
            inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
          },
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Experiência' : 'Experience', path: '/experience' },
          ]),
        ]}
      />
      <Experience />
    </>
  );
};

export default ExperiencePage;
