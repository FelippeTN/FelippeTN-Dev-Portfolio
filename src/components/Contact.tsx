import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/FelippeTN', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felippe-toscano-nalim/', color: 'hover:text-accent' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/felippetn/', color: 'hover:text-secondary' },
    { icon: Mail, label: 'Email', href: 'mailto:felippenalim2004@gmail.com', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conversar?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos criar algo incrível juntos!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <social.icon className="w-6 h-6 relative z-10" />
              </motion.a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="mailto:seu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-border/50 text-center text-muted-foreground"
      >
        <p>© 2024 Developer Portfolio. Desenvolvido com React + Three.js</p>
      </motion.div>
    </section>
  );
};

export default Contact;
