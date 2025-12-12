import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import Felippe from '@/assets/Felippe.jpg';

const felippeImg = Felippe;

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
        col[i] = 0; col[i + 1] = 0.85; col[i + 2] = 1;
      } else if (colorChoice < 0.66) {
        col[i] = 0.66; col[i + 1] = 0.36; col[i + 2] = 0.97;
      } else {
        col[i] = 1; col[i + 1] = 1; col[i + 2] = 1;
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
      <div className="absolute inset-0 w-full h-full">
        <Canvas 
          camera={{ position: [0, 2, 10], fov: 65 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between min-h-screen gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center space-y-6"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-full opacity-75 blur-xl group-hover:opacity-100 animate-pulse transition duration-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-spin-slow opacity-50"></div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-cyan-500/50 group-hover:border-cyan-400/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src="/profile-photo.jpg"
                  alt="Felippe Toscano Nalim"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = felippeImg;
                  }}
                />
              </div>
              
              <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 left-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-10 left-5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-full border border-cyan-500/30 shadow-lg"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90">Disponível para projetos</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8 backdrop-blur-lg bg-gradient-to-br from-black/35 via-black/25 to-black/35 p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500"
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
              Desenvolvedor Full Stack especializado em criar soluções web inovadoras e escaláveis. 
              Com expertise em React, TypeScript, Node.js e cloud computing, transformo ideias complexas 
              em experiências digitais impactantes e funcionais.
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
        </div>
      </div>

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
