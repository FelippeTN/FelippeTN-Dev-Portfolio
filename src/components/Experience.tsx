import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Freelance',
      period: '2023 - Presente',
      description: 'Desenvolvimento de soluções web personalizadas para diversos clientes, incluindo e-commerce, sistemas de gestão e landing pages. Responsável por todo o ciclo de desenvolvimento, desde o planejamento até a entrega final.',
      achievements: [
        'Desenvolvimento de mais de 10 projetos completos',
        'Implementação de arquiteturas escaláveis e performáticas',
        'Integração com APIs e serviços terceiros',
        'Otimização de performance e SEO',
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Projetos Acadêmicos',
      period: '2022 - 2023',
      description: 'Desenvolvimento de projetos acadêmicos focados em tecnologias web modernas, incluindo React, Node.js e PostgreSQL. Experiência com metodologias ágeis e trabalho em equipe.',
      achievements: [
        'Criação de sistemas de gestão empresarial',
        'Desenvolvimento de aplicações responsivas',
        'Implementação de testes automatizados',
        'Documentação técnica completa',
      ],
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
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
            Experiência <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trajetória de desenvolvimento e crescimento profissional
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-3">
                    Principais Realizações
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
