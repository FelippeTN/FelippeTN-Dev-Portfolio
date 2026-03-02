import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Felippe from '@/assets/Felippe.jpg';

const felippeImg = Felippe;

function StarField() {
  const count = 1800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 30;
      pos[i + 1] = (Math.random() - 0.5) * 30;
      pos[i + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Emerald #10b981
        col[i] = 0.063; col[i + 1] = 0.725; col[i + 2] = 0.506;
      } else if (colorChoice < 0.65) {
        // Teal #14b8a6
        col[i] = 0.078; col[i + 1] = 0.722; col[i + 2] = 0.651;
      } else {
        // Cool white
        col[i] = 0.85; col[i + 1] = 0.88; col[i + 2] = 0.92;
      }
    }
    return col;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

const Hero3D = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/FelippeTN', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/felippe-toscano-nalim/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:felippenalim2004@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 2, 10], fov: 65 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 0]} intensity={1.2} color="#10b981" distance={10} />
          <pointLight position={[8, 5, 5]} intensity={0.8} color="#14b8a6" distance={15} />
          <pointLight position={[-8, -5, -5]} intensity={0.6} color="#059669" distance={15} />
          <StarField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Profile photo - left side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/[0.08] group-hover:border-primary/30 transition-all duration-500">
                <img
                  src="/profile-photo.jpg"
                  alt="Felippe Toscano Nalim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = felippeImg; }}
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-white/[0.08] text-xs font-medium text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Disponível
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
            >
              <span className="text-xs font-medium text-primary tracking-widest uppercase px-3 py-1 bg-primary/[0.08] rounded-full border border-primary/20">
                Software Engineer
              </span>
              <span className="text-xs font-medium text-primary tracking-widest uppercase px-3 py-1 bg-primary/[0.08] rounded-full border border-primary/20">
                AI Operations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Felippe Toscano
              <br />
              <span className="text-primary">Nalim</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Engenheiro de Software na PGE-RJ, especializado em operacionalizar
              Inteligência Artificial — transformando modelos experimentais em
              sistemas de produção escaláveis e de alta performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-lg border border-white/[0.1] text-foreground/80 font-semibold text-sm hover:border-primary/40 hover:text-foreground transition-all duration-300"
              >
                Entre em contato
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 mt-10 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/[0.04] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted-foreground/50"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
