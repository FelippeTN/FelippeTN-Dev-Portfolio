import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Luna-Chat',
      description: 'Chatbot criado em memória de Luna, minha melhor amiga. Um projeto pessoal construído com Python, demonstrando técnicas de processamento de linguagem natural e integração com modelos de IA conversacional.',
      tags: ['Python', 'IA', 'NLP', 'Chatbot'],
      gradient: 'from-primary to-accent',
      github: 'https://github.com/FelippeTN/Luna-Chat',
      demo: '#',
    },
    {
      title: 'LogicAI Solutions Website',
      description: 'Site institucional da LogicAI Solutions, empresa especializada em soluções de Inteligência Artificial. Desenvolvido com TypeScript e React, com design moderno e responsivo.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
      gradient: 'from-accent to-secondary',
      github: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
      demo: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
    },
    {
      title: 'TeacherApp',
      description: 'Plataforma completa de gerenciamento de estudantes para educadores. Permite o controle de turmas, notas, frequência e comunicação entre professores e alunos.',
      tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-secondary to-primary',
      github: 'https://github.com/FelippeTN/TeacherApp',
      demo: '#',
    },
    {
      title: 'Aggregare School',
      description: 'Sistema de gestão escolar completo, com módulos para administração de alunos, professores, disciplinas e relatórios académicos. Arquitetura orientada a domínio.',
      tags: ['TypeScript', 'React', 'REST API', 'PostgreSQL'],
      gradient: 'from-primary to-secondary',
      github: 'https://github.com/FelippeTN/Aggregare-school',
      demo: '#',
    },
    {
      title: 'Dev Portfolio 3D',
      description: 'Este próprio portfólio — construído com React, Three.js e Framer Motion. Apresenta um campo estelar 3D interativo, animações fluidas e design responsivo de alto impacto visual.',
      tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-accent to-primary',
      github: 'https://github.com/FelippeTN/FelippeTN-Dev-Portfolio',
      demo: '#',
    },
    {
      title: 'myteacher',
      description: 'Plataforma educacional desenvolvida para a LogicAI Solutions, com gestão de alunos, conteúdos e acompanhamento de progresso. Produto com maior volume de contribuições recentes.',
      tags: ['TypeScript', 'React', 'Node.js', 'API REST'],
      gradient: 'from-secondary to-accent',
      github: 'https://github.com/LogicAI-Solutions/myteacher',
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
            Projetos reais de código aberto e produtos que desenvolvi
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
