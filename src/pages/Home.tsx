import Hero3D from '@/components/Hero3D';
import BlogTeaser from '@/components/BlogTeaser';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getBreadcrumbStructuredData,
  getLocalizedBaseDescription,
  getPersonStructuredData,
  getWebPageStructuredData,
  getWebSiteStructuredData,
} from '@/lib/seo';

const Home = () => {
  const { locale } = useLanguage();
  const description = getLocalizedBaseDescription(locale);

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Engenheiro de Software e Backend com IA' : 'Software Engineer and AI Backend Specialist'}
        description={description}
        path="/"
        keywords={
          locale === 'pt'
            ? [
                'engenheiro de software',
                'desenvolvedor backend',
                'desenvolvedor full stack',
                'ia aplicada',
                'go',
                'python',
                'typescript',
                'react',
                'rio de janeiro',
              ]
            : [
                'software engineer',
                'backend engineer',
                'full stack developer',
                'applied ai',
                'go',
                'python',
                'typescript',
                'react',
                'rio de janeiro',
              ]
        }
        structuredData={[
          getPersonStructuredData(locale, '/'),
          getWebSiteStructuredData(locale),
          getWebPageStructuredData({
            locale,
            path: '/',
            name: locale === 'pt' ? 'Página inicial' : 'Home page',
            description,
          }),
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
          ]),
        ]}
      />
      <Hero3D />
      <BlogTeaser />
    </>
  );
};

export default Home;
