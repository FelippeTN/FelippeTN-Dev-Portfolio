import Education from '@/components/Education';
import Seo from '@/components/Seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBreadcrumbStructuredData, getWebPageStructuredData, toAbsoluteUrl } from '@/lib/seo';

const EducationPage = () => {
  const { locale } = useLanguage();
  const description =
    locale === 'pt'
      ? 'Formação acadêmica e certificações de Felippe Toscano Nalim em engenharia de software, ciência de dados, inteligência artificial e desenvolvimento de sistemas.'
      : 'Academic background and certifications of Felippe Toscano Nalim in software engineering, data science, artificial intelligence, and systems development.';

  return (
    <>
      <Seo
        title={locale === 'pt' ? 'Formação e Certificações' : 'Education and Certifications'}
        description={description}
        path="/education"
        keywords={
          locale === 'pt'
            ? ['formação', 'certificações', 'engenharia de software', 'usp', 'inteligência artificial']
            : ['education', 'certifications', 'software engineering', 'usp', 'artificial intelligence']
        }
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'EducationalOccupationalCredential',
            name: locale === 'pt' ? 'Formação e Certificações' : 'Education and Certifications',
            description,
            url: toAbsoluteUrl('/education'),
          },
          getWebPageStructuredData({
            locale,
            path: '/education',
            type: 'CollectionPage',
            name: locale === 'pt' ? 'Formação e Certificações' : 'Education and Certifications',
            description,
          }),
          getBreadcrumbStructuredData(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: locale === 'pt' ? 'Formação' : 'Education', path: '/education' },
          ]),
        ]}
      />
      <Education />
    </>
  );
};

export default EducationPage;
