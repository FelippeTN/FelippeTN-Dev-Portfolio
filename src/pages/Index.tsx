import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
      <Navbar />
      <Hero3D />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
