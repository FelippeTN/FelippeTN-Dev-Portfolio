import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Target, Users, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência completa em desenvolvimento web, do frontend ao backend, com foco em arquitetura escalável e manutenível',
    },
    {
      icon: Sparkles,
      title: 'UX/UI Design',
      description: 'Criação de interfaces modernas e responsivas que combinam estética com funcionalidade e acessibilidade',
    },
    {
      icon: Zap,
      title: 'Performance & Otimização',
      description: 'Implementação de melhores práticas para garantir aplicações rápidas, eficientes e com excelente experiência do usuário',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Comprometimento com a entrega de soluções que agregam valor real ao negócio e aos usuários finais',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva com equipes multidisciplinares, comunicação clara e compartilhamento de conhecimento',
    },
    {
      icon: Rocket,
      title: 'Inovação Contínua',
      description: 'Aprendizado constante de novas tecnologias e metodologias para entregar soluções cada vez melhores',
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
            Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais. 
            Com sólida formação em Análise e Desenvolvimento de Sistemas e experiência prática 
            em projetos reais, busco constantemente transformar ideias complexas em soluções 
            elegantes e funcionais que fazem a diferença.
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
