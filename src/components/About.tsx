import { motion } from 'framer-motion';
import { Server, Sparkles, Zap, Target, Users, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  const featureIcons = [Server, Sparkles, Zap, Target, Users, Rocket];
  const features = a.features.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            {a.title}
          </h2>
          <div className="section-line" />
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed mt-6">
            {a.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card/40 border border-white/[0.06] hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="text-base font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
