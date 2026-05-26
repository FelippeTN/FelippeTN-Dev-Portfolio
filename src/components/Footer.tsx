import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const logo = '/code.svg';

const Footer = () => {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  const content = {
    pt: {
      intro: 'Engenheiro de Software com foco em backend de alta performance, IA aplicada e produtos digitais com acabamento sólido.',
      location: 'Rio de Janeiro, Brasil',
      sections: [
        {
          title: 'Conteudo',
          links: [
            { label: 'Inicio', href: '/' },
            { label: 'Sobre', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contato', href: '/contact' },
          ],
        },
        {
          title: 'Aprendizado',
          links: [
            { label: 'Habilidades', href: '/skills' },
            { label: 'Experiencia', href: '/experience' },
            { label: 'Formacao', href: '/education' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { label: 'GitHub', href: 'https://github.com/FelippeTN', external: true },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/felippe-toscano-nalim/',
              external: true,
            },
            { label: 'YouTube', href: 'https://www.youtube.com/@felippetndev', external: true },
            { label: 'WhatsApp', href: 'https://wa.me/5521979076630', external: true },
          ],
        },
        {
          title: 'Comunidade',
          links: [
            { label: 'Instagram', href: 'https://www.instagram.com/felippetn/', external: true },
            { label: 'Contato Direto', href: 'mailto:felippetn@gmail.com', external: true },
          ],
        },
      ],
      rights: `© ${year} Felippe Toscano Nalim. Todos os direitos reservados.`,
      bottomLinks: [
        { label: 'GitHub', href: 'https://github.com/FelippeTN', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/', external: true },
        { label: 'YouTube', href: 'https://www.youtube.com/@felippetndev', external: true },
      ],
    },
    en: {
      intro: 'Software Engineer focused on high-performance backend, applied AI, and digital products with polished execution.',
      location: 'Rio de Janeiro, Brazil',
      sections: [
        {
          title: 'Content',
          links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Learning',
          links: [
            { label: 'Skills', href: '/skills' },
            { label: 'Experience', href: '/experience' },
            { label: 'Education', href: '/education' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'GitHub', href: 'https://github.com/FelippeTN', external: true },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/felippe-toscano-nalim/',
              external: true,
            },
            { label: 'YouTube', href: 'https://www.youtube.com/@felippetndev', external: true },
            { label: 'WhatsApp', href: 'https://wa.me/5521979076630', external: true },
          ],
        },
        {
          title: 'Community',
          links: [
            { label: 'Instagram', href: 'https://www.instagram.com/felippetn/', external: true },
            { label: 'Direct Contact', href: 'mailto:felippetn@gmail.com', external: true },
          ],
        },
      ],
      rights: `© ${year} Felippe Toscano Nalim. All rights reserved.`,
      bottomLinks: [
        { label: 'GitHub', href: 'https://github.com/FelippeTN', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/', external: true },
        { label: 'YouTube', href: 'https://www.youtube.com/@felippetndev', external: true },
      ],
    },
  } as const;

  const copy = content[locale];
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/FelippeTN' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@felippetndev' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/felippetn/' },
    { icon: Mail, label: 'Email', href: 'mailto:felippetn@gmail.com' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-16"
    >
      <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-card px-4 py-6 shadow-[0_18px_45px_-30px_rgba(17,17,17,0.1)] [box-shadow:0_18px_45px_-30px_rgba(17,17,17,0.1),inset_0_0_0_1px_rgba(17,17,17,0.06)] sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden sm:h-12 sm:w-12">
                <img src={logo} alt="Felippe logo" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
              </span>
              <div>
                <p className="text-[1.15rem] font-extrabold tracking-tight text-foreground sm:text-[1.35rem]">Felippe</p>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                  Software Engineer
                </p>
              </div>
            </Link>

            <p className="mt-4 text-[0.82rem] leading-5 text-muted-foreground sm:mt-5 sm:text-[0.94rem] sm:leading-6">
              {copy.intro}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground sm:mt-6 sm:text-sm">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{copy.location}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background sm:h-10 sm:w-10"
                >
                  <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <p className="text-[0.82rem] font-extrabold text-foreground sm:text-sm">{section.title}</p>
              <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {section.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[0.82rem] text-muted-foreground hover:text-foreground sm:text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block text-[0.82rem] text-muted-foreground hover:text-foreground sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 text-[0.78rem] text-muted-foreground sm:mt-6 sm:text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p>{copy.rights}</p>
            <p className="mt-1 text-[0.62rem] text-muted-foreground/70 sm:text-[0.68rem]">
              Inspiração para o site: Augusto Galego
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {copy.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
