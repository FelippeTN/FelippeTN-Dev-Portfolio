import Projects from '@/components/Projects';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBreadcrumbStructuredData } from '@/lib/seo';

const ProjectsPage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Projetos de software desenvolvidos por Felippe Toscano Nalim com React, TypeScript, Node.js, Python, IA aplicada e arquitetura moderna.'
      : 'Software projects developed by Felippe Toscano Nalim with React, TypeScript, Node.js, Python, applied AI, and modern architecture.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Projetos' : 'Projects'}
        description={description}
        path="/projects"
        keywords={
          locale === 'pt'
            ? ['projetos de software', 'portfólio desenvolvedor', 'react', 'typescript', 'node.js', 'python']
            : ['software projects', 'developer portfolio', 'react', 'typescript', 'node.js', 'python']
        }
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: locale === 'pt' ? 'Projetos em destaque' : 'Featured projects',
            description,
            url: typeof window !== 'undefined' ? `${window.location.origin}/projects` : '/projects',
            inLanguage: locale === 'pt' ? 'pt-BR' : 'en',
          },
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Projetos' : 'Projects', path: '/projects' },
          ]),
        ]}
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
