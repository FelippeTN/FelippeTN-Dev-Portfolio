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
      if (colorChoice < 0.35) {
        // Vercel blue #0070F3
        col[i] = 0.0; col[i + 1] = 0.44; col[i + 2] = 0.95;
      } else if (colorChoice < 0.65) {
        // Indigo #6366F1
        col[i] = 0.39; col[i + 1] = 0.40; col[i + 2] = 0.95;
      } else {
        // Cool white
        col[i] = 0.90; col[i + 1] = 0.91; col[i + 2] = 1.0;
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
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={1.8} color="#0070F3" distance={10} />
          <pointLight position={[8, 5, 5]} intensity={1.4} color="#6366F1" distance={15} />
          <pointLight position={[-8, -5, -5]} intensity={0.9} color="#3B82F6" distance={15} />
          <spotLight 
            position={[15, 15, 15]} 
            angle={0.4} 
            penumbra={1} 
            intensity={1.2}
            color="#ffffff"
            castShadow
          />
          <directionalLight position={[-10, 10, 5]} intensity={0.3} color="#818CF8" />
          
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0070F3] via-indigo-500 to-[#6366F1] rounded-full opacity-45 blur-xl group-hover:opacity-70 animate-pulse transition duration-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0070F3] to-[#6366F1] rounded-full animate-spin-slow opacity-25"></div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-[#0070F3]/25 group-hover:border-[#0070F3]/35 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070F3]/10 to-[#6366F1]/10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src="/profile-photo.jpg"
                  alt="Felippe Toscano Nalim"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = felippeImg;
                  }}
                />
              </div>
              
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#0070F3] rounded-full animate-ping"></div>
              <div className="absolute bottom-10 left-0 w-2 h-2 bg-[#6366F1] rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-10 left-5 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#0070F3]/8 backdrop-blur-md rounded-full border border-[#0070F3]/20 shadow-lg"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90">Aberto a novas oportunidades</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8 backdrop-blur-lg bg-[#111111]/80 p-10 lg:p-12 rounded-3xl border border-[#222222] shadow-2xl shadow-[#0070F3]/8 hover:border-[#0070F3]/25 transition-all duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-medium text-[#0070F3] tracking-wider uppercase px-4 py-2 m-1 bg-[#0070F3]/8 rounded-full border border-[#0070F3]/20">
                Software Engineer
              </span>
              <span className="text-sm font-medium text-[#6366F1] tracking-wider uppercase px-4 py-2 m-1 bg-[#6366F1]/8 rounded-full border border-[#6366F1]/20">
                AI Operations Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold leading-tight text-white"
            >
              Felippe Toscano Nalim
              <span className="block bg-gradient-to-r from-[#0070F3] to-[#6366F1] bg-clip-text text-transparent">
                Engenheiro de Software & IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-200 max-w-xl leading-relaxed"
            >
              Engenheiro de Software na Procuradoria-Geral do Estado do Rio de Janeiro (PGE-RJ), 
              especializado em operacionalizar Inteligência Artificial — transformando modelos experimentais 
              em sistemas de produção robustos, escaláveis e de alta performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg bg-[#0070F3] text-white font-semibold hover:bg-[#0060D0] hover:shadow-[0_0_32px_rgba(0,112,243,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg border border-[#222222] text-[#EEEEEE]/80 font-semibold hover:border-[#0070F3]/50 hover:text-[#EEEEEE] transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
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
