import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Github, Linkedin, ArrowDown, MapPin, BriefcaseBusiness, Clock3, Globe } from 'lucide-react';
import Felippe from '@/assets/Felippe.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

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
        // Blue #3b82f6
        col[i] = 0.231; col[i + 1] = 0.510; col[i + 2] = 0.965;
      } else if (colorChoice < 0.65) {
        // Light blue #60a5fa
        col[i] = 0.376; col[i + 1] = 0.647; col[i + 2] = 0.980;
      } else {
        // Cool white
        col[i] = 0.88; col[i + 1] = 0.90; col[i + 2] = 0.96;
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
  const { t } = useLanguage();
  const h = t.hero;

  const socialLinks = [
    { icon: Github, href: 'https://github.com/FelippeTN', label: 'GitHub', isCustom: false },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/felippe-toscano-nalim/', label: 'LinkedIn', isCustom: false },
    { icon: null, href: 'https://wa.me/5521979076630', label: 'WhatsApp', isCustom: true },
  ];

  const highlights = h.highlights;

  const statIcons = [BriefcaseBusiness, Clock3, Globe];
  const stats = h.stats.map((s, i) => ({ ...s, icon: statIcons[i] }));

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
          <pointLight position={[0, 0, 0]} intensity={1.2} color="#3b82f6" distance={10} />
          <pointLight position={[8, 5, 5]} intensity={0.8} color="#60a5fa" distance={15} />
          <pointLight position={[-8, -5, -5]} intensity={0.6} color="#2563eb" distance={15} />
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_45%)] pointer-events-none" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 justify-center lg:justify-start mb-5"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {h.locationBadge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <BriefcaseBusiness className="w-3.5 h-3.5 text-primary" /> {h.roleBadge}
              </span>
            </motion.div>

            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/80 font-semibold mb-4">
              {h.subtitle}
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight mb-5"
            >
              Felippe Toscano Nalim
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6"
            >
              {h.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-2.5 text-sm text-foreground/85 mb-8"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 justify-center lg:justify-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.35)]"
              >
                {h.btnProjects}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-xl border border-white/[0.12] text-foreground/85 font-semibold text-sm hover:border-primary/45 hover:text-foreground transition-all duration-300 bg-white/[0.02]"
              >
                {h.btnContact}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - image + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="max-w-[460px] mx-auto lg:ml-auto">
              <div className="relative group mb-5">
                <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-card/80 backdrop-blur-sm">
                  <img
                    src="/profile-photo.jpg"
                    alt="Felippe Toscano Nalim"
                    className="w-full aspect-[1/1] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = felippeImg; }}
                  />
                </div>

                <div className="absolute -bottom-4 right-4 sm:right-6">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card/95 backdrop-blur-md rounded-xl border border-white/[0.12] text-xs font-semibold text-foreground/85 shadow-xl shadow-primary/10">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    {h.available}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 bg-card/65 border border-white/[0.08] backdrop-blur-sm"
                  >
                    <item.icon className="w-4 h-4 text-primary mb-2" />
                    <p className="text-xl font-bold leading-none mb-1">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted-foreground/55"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
