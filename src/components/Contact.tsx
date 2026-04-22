import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, MessageCircleMore } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/FelippeTN' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/felippetn/' },
];

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const whatsappHref = 'https://wa.me/5521979076630';

  return (
    <section id="contact" className="px-4 pb-12 pt-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-frame overflow-hidden"
        >
          <div className="section-inner px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <span className="eyebrow">06 / {c.title}</span>
                <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                  {c.description}
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="subtle-stroke inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-3 text-sm font-semibold text-foreground"
                    >
                      <social.icon className="h-4 w-4 text-primary" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="editorial-card p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary/80">
                  WhatsApp
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {c.description}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-background"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  {c.btnWhatsapp}
                </a>
              </div>
            </div>

            <div className="accent-line my-8" />

            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>{new Date().getFullYear()} Felippe Toscano Nalim</p>
              <p>{c.footer} {c.footerStack}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
