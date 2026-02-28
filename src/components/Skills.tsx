import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Sistemas',
      skills: ['Go (Golang)', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Express.js', 'GraphQL'],
      color: 'from-primary to-accent',
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion', 'Three.js', 'Responsive Design', 'Bootstrap CSS'],
      color: 'from-accent to-secondary',
    },
    {
      title: 'IA & Dados',
      skills: ['TensorFlow', 'Pandas', 'Operações de IA', 'Machine Learning', 'Pipelines de Dados', 'Análise de Dados'],
      color: 'from-secondary to-primary',
    },
    {
      title: 'DevOps & Infraestrutura',
      skills: ['Docker', 'Linux', 'AWS', 'GCP', 'CI/CD', 'Git', 'GitHub', 'Postman'],
      color: 'from-primary to-secondary',
    },
    {
      title: 'Banco de Dados',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
      color: 'from-accent to-primary',
    },
    {
      title: 'Soft Skills',
      skills: ['Liderança Técnica', 'Comunicação', 'Resolução de Problemas', 'Pensamento Crítico', 'Trabalho em Equipe', 'Gestão de Projetos'],
      color: 'from-secondary to-accent',
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Habilidades & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack técnico orientado a sistemas de produção, IA e infraestrutura em nuvem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/item:scale-150 transition-transform duration-300`} />
                      <span className="text-foreground group-hover/item:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
