
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  color?: string;
}

const Particles = ({ count = 500, color = "#6d7fff" }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, [count]);
  
  // Animate the particles
  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      mesh.current.rotation.x = time * 0.05;
      mesh.current.rotation.y = time * 0.03;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.03}
        transparent
        color={color}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
