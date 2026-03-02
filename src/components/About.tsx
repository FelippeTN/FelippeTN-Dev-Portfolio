import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Target, Users, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Engenharia de Software',
      description: 'Arquitetura de sistemas de produção robustos e escaláveis, com foco em mantenabilidade, observabilidade e engenharia de alta qualidade.',
    },
    {
      icon: Sparkles,
      title: 'Operações de IA',
      description: 'Especialista em operacionalizar Inteligência Artificial — transformando modelos experimentais em produtos de software confiáveis e prontos para produção.',
    },
    {
      icon: Zap,
      title: 'Performance & Escalabilidade',
      description: 'Implementação de serviços de alta performance com Go, Python e Node.js, garantindo eficiência sob carga real.',
    },
    {
      icon: Target,
      title: 'Impacto no Negócio',
      description: 'Comprometido com a entrega de soluções que geram valor real, com foco em resultados mensurados e alinhamento estratégico.',
    },
    {
      icon: Users,
      title: 'Colaboração & Liderança Técnica',
      description: 'Experiência em equipes multidisciplinares, mentoria técnica, revisão de código e disseminação de boas práticas de engenharia.',
    },
    {
      icon: Rocket,
      title: 'Aprendizado Contínuo',
      description: 'Estudante na USP (Engenharia de Software) e certificado pela University of Michigan, sempre evoluindo com as melhores práticas do mercado.',
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            Sobre Mim
          </h2>
          <div className="section-line" />
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Engenheiro de Software dedicado a projetar sistemas robustos e prontos para produção.
            Atualmente na PGE-RJ, fazendo a ponte entre a Engenharia de Software 
            tradicional e a Inteligência Artificial moderna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="text-base font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
