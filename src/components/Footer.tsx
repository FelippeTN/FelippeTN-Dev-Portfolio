import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../F_logo.png';

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
            { label: 'Projetos', href: '/projects' },
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
            { label: 'Projects', href: '/projects' },
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
      className="px-4 pb-10 pt-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-card px-6 py-8 shadow-[0_18px_45px_-30px_rgba(17,17,17,0.1)] [box-shadow:0_18px_45px_-30px_rgba(17,17,17,0.1),inset_0_0_0_1px_rgba(17,17,17,0.06)] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden">
                <img src={logo} alt="Felippe logo" className="h-10 w-10 object-contain" />
              </span>
              <div>
                <p className="text-[1.35rem] font-extrabold tracking-tight text-foreground">Felippe</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </Link>

            <p className="mt-5 text-[0.9rem] leading-6 text-muted-foreground sm:text-[0.94rem]">
              {copy.intro}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{copy.location}</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-extrabold text-foreground">{section.title}</p>
              <div className="mt-4 space-y-3">
                {section.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,rgba(17,17,17,0.12),rgba(17,17,17,0.06),transparent)]" />

        <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{copy.rights}</p>
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
