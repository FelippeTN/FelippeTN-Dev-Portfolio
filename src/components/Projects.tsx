import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Luna-Chat',
      description: 'Chatbot criado em memória de Luna, minha melhor amiga. Construído com Python, demonstrando técnicas de NLP e integração com modelos de IA conversacional.',
      tags: ['Python', 'IA', 'NLP', 'Chatbot'],
      github: 'https://github.com/FelippeTN/Luna-Chat',
      demo: '',
    },
    {
      title: 'LogicAI Solutions Website',
      description: 'Site institucional da LogicAI Solutions. Desenvolvido com TypeScript e React, design moderno e responsivo.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
      demo: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
    },
    {
      title: 'TeacherApp',
      description: 'Plataforma completa de gerenciamento de estudantes para educadores. Controle de turmas, notas, frequência e comunicação.',
      tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/FelippeTN/TeacherApp',
      demo: '',
    },
    {
      title: 'Aggregare School',
      description: 'Sistema de gestão escolar completo com módulos para administração de alunos, professores, disciplinas e relatórios.',
      tags: ['TypeScript', 'React', 'REST API', 'PostgreSQL'],
      github: 'https://github.com/FelippeTN/Aggregare-school',
      demo: '',
    },
    {
      title: 'Dev Portfolio 3D',
      description: 'Este portfólio — construído com React, Three.js e Framer Motion. Campo estelar 3D interativo e animações fluidas.',
      tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/FelippeTN/FelippeTN-Dev-Portfolio',
      demo: '',
    },
    {
      title: 'myteacher',
      description: 'Plataforma educacional para a LogicAI Solutions, com gestão de alunos, conteúdos e acompanhamento de progresso.',
      tags: ['TypeScript', 'React', 'Node.js', 'API REST'],
      github: 'https://github.com/LogicAI-Solutions/myteacher',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            Projetos em Destaque
          </h2>
          <div className="section-line" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto mt-6">
            Projetos reais de código aberto que desenvolvi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Header with title and link */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex-shrink-0 ml-2"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-primary/[0.08] text-primary/80 border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04]">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  )}
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
