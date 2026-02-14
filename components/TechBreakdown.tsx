import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const TechBreakdown: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
     if (groupRef.current) {
         groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
         groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
     }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#000" wireframe transparent opacity={0.1} />
      </mesh>
      
      {/* Glowing Tech Sphere */}
      <mesh>
         <icosahedronGeometry args={[1.5, 1]} />
         <meshStandardMaterial 
            color="#ffaa00" 
            wireframe 
            emissive="#ffaa00" 
            emissiveIntensity={2} 
            transparent 
            opacity={0.3} 
         />
      </mesh>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <mesh 
            key={i} 
            position={[
                Math.sin(i) * 3, 
                Math.cos(i * 2) * 3, 
                Math.sin(i * 3) * 3
            ]}
        >
           <boxGeometry args={[0.5, 0.5, 0.5]} />
           <meshBasicMaterial color="#fff" wireframe />
        </mesh>
      ))}
    </group>
  );
};