import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia',
      period: '2022 - 2024',
      description: 'Formação focada em desenvolvimento de software, engenharia de software, banco de dados, arquitetura de sistemas e metodologias ágeis.',
      highlights: [
        'Desenvolvimento Web Full Stack',
        'Banco de Dados e Modelagem',
        'Engenharia de Software',
        'Arquitetura de Sistemas',
        'Metodologias Ágeis (Scrum, Kanban)',
      ],
      icon: GraduationCap,
      color: 'from-primary to-accent',
    },
  ];

  const certifications = [
    {
      title: 'React - The Complete Guide',
      institution: 'Udemy',
      year: '2023',
      icon: Award,
      color: 'from-accent to-secondary',
    },
    {
      title: 'Node.js: Desenvolvedor Backend',
      institution: 'Udemy',
      year: '2023',
      icon: Award,
      color: 'from-secondary to-primary',
    },
    {
      title: 'TypeScript Essentials',
      institution: 'Online Course',
      year: '2023',
      icon: Award,
      color: 'from-primary to-secondary',
    },
  ];

  return (
    <section id="education" className="py-24 relative">
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
            Formação & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certificações</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Educação contínua e aperfeiçoamento profissional
          </p>
        </motion.div>

        {/* Formação Acadêmica */}
        <div className="max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-muted-foreground font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground px-4 py-2 bg-primary/10 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificações */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Certificações e Cursos
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.institution}
                  </p>
                  
                  <span className="text-xs font-medium text-primary">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
