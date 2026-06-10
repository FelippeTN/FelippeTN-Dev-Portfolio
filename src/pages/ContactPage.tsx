import Contact from '@/components/Contact';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBreadcrumbStructuredData, getWebPageStructuredData } from '@/lib/seo';

const ContactPage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Entre em contato com Felippe Toscano Nalim para oportunidades, projetos de software, consultoria técnica, backend, IA aplicada e produtos digitais.'
      : 'Get in touch with Felippe Toscano Nalim for opportunities, software projects, technical consulting, backend, applied AI, and digital products.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Contato' : 'Contact'}
        description={description}
        path="/contact"
        keywords={
          locale === 'pt'
            ? ['contato engenheiro de software', 'freelancer backend', 'consultoria técnica', 'projeto de software']
            : ['contact software engineer', 'backend freelancer', 'technical consulting', 'software project']
        }
        structuredData={[
          getWebPageStructuredData({
            locale,
            path: '/contact',
            type: 'ContactPage',
            name: locale === 'pt' ? 'Contato' : 'Contact',
            description,
          }),
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Contato' : 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
