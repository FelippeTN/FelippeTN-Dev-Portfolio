import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestão Empresarial',
      description: 'Sistema completo de gestão com módulos de vendas, estoque, financeiro e relatórios gerenciais. Interface intuitiva e dashboard com métricas em tempo real.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Charts.js'],
      gradient: 'from-primary to-accent',
      github: 'https://github.com/FelippeTN',
      demo: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamento integrado, painel administrativo e gestão de produtos com upload de imagens.',
      tags: ['Next.js', 'React', 'Stripe', 'Tailwind', 'API'],
      gradient: 'from-accent to-secondary',
      github: 'https://github.com/FelippeTN',
      demo: '#',
    },
    {
      title: 'Portfolio Interativo 3D',
      description: 'Portfolio pessoal com elementos 3D interativos usando Three.js, animações suaves com Framer Motion e design responsivo moderno.',
      tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      gradient: 'from-secondary to-primary',
      github: 'https://github.com/FelippeTN',
      demo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard analítico para visualização de dados empresariais com gráficos interativos, filtros dinâmicos e exportação de relatórios personalizados.',
      tags: ['React', 'D3.js', 'REST API', 'Material-UI'],
      gradient: 'from-primary to-secondary',
      github: 'https://github.com/FelippeTN',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com recursos de colaboração em equipe, notificações em tempo real e integração com calendário.',
      tags: ['React', 'Firebase', 'WebSocket', 'PWA'],
      gradient: 'from-accent to-primary',
      github: 'https://github.com/FelippeTN',
      demo: '#',
    },
    {
      title: 'Sistema de Reservas',
      description: 'Plataforma de agendamento online com sistema de notificações, integração de calendário e painel de controle administrativo completo.',
      tags: ['Next.js', 'PostgreSQL', 'Node.js', 'SendGrid'],
      gradient: 'from-secondary to-accent',
      github: 'https://github.com/FelippeTN',
      demo: '#',
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
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Código
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
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
