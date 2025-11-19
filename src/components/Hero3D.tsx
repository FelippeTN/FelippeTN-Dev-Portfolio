import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sphere, Ring } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Partículas Estelares - Melhoradas
function StarField() {
  const count = 2000;
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
      if (colorChoice < 0.33) {
        col[i] = 0; col[i + 1] = 0.85; col[i + 2] = 1; // Cyan
      } else if (colorChoice < 0.66) {
        col[i] = 0.66; col[i + 1] = 0.36; col[i + 2] = 0.97; // Purple
      } else {
        col[i] = 1; col[i + 1] = 1; col[i + 2] = 1; // White
      }
    }
    return col;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
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
        size={0.025}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}


// Cena Completa
function InterstellarDevScene() {
  return (
    <>
      <StarField />
    </>
  );
}

const Hero3D = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background - Tela Cheia */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas 
          camera={{ position: [0, 2, 10], fov: 65 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          {/* Iluminação Aprimorada */}
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#00D9FF" distance={10} />
          <pointLight position={[8, 5, 5]} intensity={1.5} color="#A855F7" distance={15} />
          <pointLight position={[-8, -5, -5]} intensity={1.2} color="#10B981" distance={15} />
          <spotLight 
            position={[15, 15, 15]} 
            angle={0.4} 
            penumbra={1} 
            intensity={1.5}
            color="#ffffff"
            castShadow
          />
          <directionalLight position={[-10, 10, 5]} intensity={0.5} color="#60A5FA" />
          
          <InterstellarDevScene />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Overlay Gradient para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content com backdrop aprimorado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase px-4 py-2 m-1 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                Software Engineer
              </span>
              <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase px-4 py-2 m-1 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold leading-tight text-white"
            >
              Felippe Toscano Nalim
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Experiências Digitais
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-200 max-w-xl leading-relaxed"
            >
              Desenvolvedor apaixonado por tecnologia, especializado em criar soluções web modernas e interativas com foco em performance e experiência do usuário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg border-2 border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
              >
                Contato
              </a>
            </motion.div>
          </motion.div>

          {/* Espaço vazio para melhor visualização do 3D */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
