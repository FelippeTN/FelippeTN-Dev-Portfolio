import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/FelippeTN' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/felippetn/' },
    { icon: Mail, label: 'Email', href: 'mailto:felippenalim2004@gmail.com' },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            Vamos Conversar?
          </h2>
          <div className="section-line" />
          
          <p className="text-muted-foreground text-base max-w-lg mx-auto mt-6 mb-10 leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações. 
            Se você tem um projeto desafiador ou uma posição que faça sentido, entre em contato.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-3 mb-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-3 rounded-lg text-muted-foreground hover:text-primary bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href="mailto:felippenalim2004@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
          >
            <Mail className="w-4 h-4" />
            Enviar Email
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Felippe Toscano Nalim
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary" /> React, Three.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
