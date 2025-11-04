import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, pagamentos integrados e gestão de estoque.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados com gráficos em tempo real e relatórios personalizados.',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      gradient: 'from-accent to-secondary',
    },
    {
      title: 'Social Media App',
      description: 'Aplicativo social com feed em tempo real, sistema de mensagens e autenticação segura.',
      tags: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
      gradient: 'from-secondary to-primary',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Projetos em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos trabalhos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300">
                    <Github className="w-5 h-5" />
                    Código
                  </button>
                  <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
