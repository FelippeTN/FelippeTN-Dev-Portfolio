import Skills from '@/components/Skills';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBreadcrumbStructuredData } from '@/lib/seo';

const SkillsPage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Habilidades técnicas de Felippe Toscano Nalim em backend, IA, cloud, DevOps, bancos de dados, React, Go, Python e TypeScript.'
      : 'Technical skills of Felippe Toscano Nalim across backend, AI, cloud, DevOps, databases, React, Go, Python, and TypeScript.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}
        description={description}
        path="/skills"
        keywords={
          locale === 'pt'
            ? ['habilidades backend', 'go', 'python', 'typescript', 'react', 'devops', 'cloud', 'ia']
            : ['backend skills', 'go', 'python', 'typescript', 'react', 'devops', 'cloud', 'ai']
        }
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: locale === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills',
            description,
            url: typeof window !== 'undefined' ? `${window.location.origin}/skills` : '/skills',
            inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
          },
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Habilidades' : 'Skills', path: '/skills' },
          ]),
        ]}
      />
      <Skills />
    </>
  );
};

export default SkillsPage;
