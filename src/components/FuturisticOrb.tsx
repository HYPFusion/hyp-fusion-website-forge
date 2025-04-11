
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Color } from 'three';
import Particles from './Particles';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.2}>
      <MeshDistortMaterial 
        color={new Color("#6d7fff")} 
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FuturisticOrb = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6d7fff" />
        <AnimatedSphere />
        <Particles count={300} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default FuturisticOrb;
