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
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Sou um Engenheiro de Software dedicado a projetar e construir sistemas robustos e prontos para produção. 
            Meu foco vai além de escrever código — busco arquitetar soluções que sejam manuteníveis, escaláveis e eficientes.
            Atualmente, na Procuradoria-Geral do Estado do Rio de Janeiro (PGE-RJ), farei a ponte entre a Engenharia de Software 
            tradicional e a Inteligência Artificial moderna, especializando-me em operacionalizar IA e transformar modelos 
            experimentais em produtos de software confiáveis e de alta performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
