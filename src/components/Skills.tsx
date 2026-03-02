import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Sistemas',
      skills: ['Go (Golang)', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Express.js', 'GraphQL'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion', 'Three.js', 'Responsive Design', 'Bootstrap CSS'],
    },
    {
      title: 'IA & Dados',
      skills: ['TensorFlow', 'Pandas', 'Operações de IA', 'Machine Learning', 'Pipelines de Dados', 'Análise de Dados'],
    },
    {
      title: 'DevOps & Infraestrutura',
      skills: ['Docker', 'Linux', 'AWS', 'GCP', 'CI/CD', 'Git', 'GitHub', 'Postman'],
    },
    {
      title: 'Banco de Dados',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Soft Skills',
      skills: ['Liderança Técnica', 'Comunicação', 'Resolução de Problemas', 'Pensamento Crítico', 'Trabalho em Equipe', 'Gestão de Projetos'],
    },
  ];

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            Habilidades & Tecnologias
          </h2>
          <div className="section-line" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto mt-6">
            Stack técnico orientado a sistemas de produção, IA e infraestrutura em nuvem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/[0.04] text-foreground/80 border border-white/[0.06] hover:border-primary/30 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
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
