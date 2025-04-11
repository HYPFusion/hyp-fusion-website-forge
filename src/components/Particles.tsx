
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  color?: string;
}

const Particles = ({ count = 200, color = "#6d7fff" }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 7;
      pos[i3 + 1] = (Math.random() - 0.5) * 7;
      pos[i3 + 2] = (Math.random() - 0.5) * 7;
    }
    return pos;
  }, [count]);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.03;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={color}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
