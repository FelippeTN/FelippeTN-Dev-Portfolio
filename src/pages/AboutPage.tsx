import About from '@/components/About';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getBreadcrumbStructuredData,
  getPersonStructuredData,
  getWebPageStructuredData,
} from '@/lib/seo';

const AboutPage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Conheça a trajetória de Felippe Toscano Nalim, engenheiro de software com foco em backend escalável, arquitetura de sistemas, observabilidade e IA aplicada.'
      : 'Learn more about Felippe Toscano Nalim, a software engineer focused on scalable backend, systems architecture, observability, and applied AI.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Sobre' : 'About'}
        description={description}
        path="/about"
        type="profile"
        keywords={
          locale === 'pt'
            ? ['sobre felippe toscano', 'engenheiro de software', 'backend', 'arquitetura', 'ia aplicada']
            : ['about felippe toscano', 'software engineer', 'backend', 'architecture', 'applied ai']
        }
        structuredData={[
          getPersonStructuredData(locale, '/about'),
          getWebPageStructuredData({
            locale,
            path: '/about',
            type: 'ProfilePage',
            name: locale === 'pt' ? 'Sobre Felippe Toscano Nalim' : 'About Felippe Toscano Nalim',
            description,
          }),
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Sobre' : 'About', path: '/about' },
          ]),
        ]}
      />
      <About />
    </>
  );
};

export default AboutPage;
