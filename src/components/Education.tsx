import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const ed = t.education;
  const education = ed.items;
  const certifications = ed.certifications;

  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            {ed.title}
          </h2>
          <div className="section-line" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto mt-6">
            {ed.description}
          </p>
        </motion.div>

        {/* Formação Acadêmica */}
        <div className="mb-12">
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span className="text-xs font-medium text-primary/80 bg-primary/[0.08] px-3 py-1 rounded-full self-start">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]"
                        >
                          <BookOpen className="w-3 h-3 text-primary/60" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificações */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5 text-center"
        >
          {ed.certificationsLabel}
        </motion.h3>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group"
            >
              <div className="p-5 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300 h-full">
                <Award className="w-5 h-5 text-primary/60 mb-3" />
                <h4 className="text-sm font-semibold mb-1.5 text-foreground">{cert.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{cert.institution}</p>
                <span className="text-xs font-medium text-primary/70">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
