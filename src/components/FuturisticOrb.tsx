
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
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
        color="#6d7fff"
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Fallback component when WebGL is not available
const FallbackAnimation = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-primary/30 animate-pulse mb-4"></div>
        <div className="w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary/20 animate-ping"></div>
        <div className="w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/20 animate-ping animation-delay-200"></div>
      </div>
    </div>
  );
};

const FuturisticOrb = () => {
  const [webGLFailed, setWebGLFailed] = useState(false);
  
  useEffect(() => {
    // More comprehensive WebGL detection
    try {
      const canvas = document.createElement('canvas');
      // Try WebGL2 first (more modern)
      let gl: WebGLRenderingContext | WebGL2RenderingContext | null = canvas.getContext('webgl2');
      
      // Fall back to WebGL1 if WebGL2 is not available
      if (!gl) {
        gl = canvas.getContext('webgl') || 
             canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
      }
      
      // Check if we have a valid context
      if (!gl) {
        console.error("No WebGL support detected");
        setWebGLFailed(true);
        return;
      }
      
      // Additional checks for required WebGL extensions
      // Only check extensions if we have a WebGLRenderingContext (not WebGL2)
      if (!(gl instanceof WebGL2RenderingContext) && gl) {
        const requiredExtensions = [
          'OES_texture_float',
          'OES_standard_derivatives'
        ];
        
        // Check if any critical extensions are missing
        const missingExtensions = requiredExtensions.filter(ext => !gl?.getExtension(ext));
        if (missingExtensions.length > 0) {
          console.warn("Missing WebGL extensions:", missingExtensions);
          // Continue anyway as these might not be critical
        }
      }
      
      setWebGLFailed(false);
    } catch (e) {
      console.error("WebGL detection error:", e);
      setWebGLFailed(true);
    }
  }, []);

  // If WebGL is not available, show fallback
  if (webGLFailed) {
    console.log("Using fallback animation - WebGL not available");
    return <FallbackAnimation />;
  }

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0, 0, 0));
        }}
        onError={(e) => {
          console.error("Canvas error occurred:", e);
          setWebGLFailed(true);
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6d7fff" />
        <AnimatedSphere />
        <Particles count={200} />
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
