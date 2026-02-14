import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Hero: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Floating animation
    groupRef.current.position.y = 0.5 + Math.sin(t * 1) * 0.1;
    groupRef.current.rotation.y = -Math.PI / 6 + Math.sin(t * 0.5) * 0.1;
    // Subtle tilt
    groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.02;
  });

  // Materials
  const bodyBlack = new THREE.MeshStandardMaterial({ 
    color: '#151515', 
    roughness: 0.6, 
    metalness: 0.2 
  });
  
  const gripRubber = new THREE.MeshStandardMaterial({ 
    color: '#080808', 
    roughness: 0.9,
    metalness: 0.1
  });
  
  const lensMetal = new THREE.MeshStandardMaterial({ 
    color: '#1a1a1a', 
    roughness: 0.3, 
    metalness: 0.6 
  });
  
  const glass = new THREE.MeshPhysicalMaterial({ 
    color: '#111', 
    metalness: 0.9, 
    roughness: 0.05, 
    transmission: 0.2, 
    clearcoat: 1,
    reflectivity: 1
  });
  
  const redRing = new THREE.MeshBasicMaterial({ color: '#cc0000' });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* --- BODY --- */}
      <group position={[-0.2, 0, 0]}>
        {/* Main Box */}
        <mesh material={bodyBlack}>
           <boxGeometry args={[1.3, 1.0, 0.6]} />
        </mesh>
        
        {/* Pentaprism / Flash Housing (Top) */}
        <group position={[0, 0.65, 0]}>
           {/* Hump */}
           <mesh material={bodyBlack}>
             <boxGeometry args={[0.55, 0.35, 0.8]} />
           </mesh>
           {/* Logo Plate area */}
           <mesh position={[0, 0.05, 0.41]} rotation={[0.2,0,0]}>
             <planeGeometry args={[0.35, 0.12]} />
             <meshBasicMaterial color="#e0e0e0" />
           </mesh>
        </group>

        {/* Base Plate */}
        <mesh position={[0, -0.55, 0]} material={bodyBlack}>
           <boxGeometry args={[1.3, 0.1, 0.6]} />
        </mesh>
      </group>

      {/* --- GRIP (Right Side) --- */}
      <group position={[0.65, -0.1, 0.15]}>
         {/* Main Grip Cylinder */}
         <mesh material={gripRubber} rotation={[0, 0, -0.1]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.22, 0.9, 16]} />
         </mesh>
         {/* Grip Extension to Body */}
         <mesh position={[-0.15, 0, 0.1]} material={gripRubber} rotation={[0,0,-0.1]}>
             <boxGeometry args={[0.3, 0.8, 0.5]} />
         </mesh>
         
         {/* Shutter Button Mount */}
         <mesh position={[0.05, 0.45, 0.05]} rotation={[0.4, 0, -0.2]}>
             <cylinderGeometry args={[0.25, 0.3, 0.2, 16]} />
             <meshStandardMaterial color="#111" />
         </mesh>
         {/* Shutter Button */}
         <mesh position={[0.05, 0.55, 0.05]} rotation={[0.4, 0, -0.2]}>
             <cylinderGeometry args={[0.1, 0.1, 0.05]} />
             <meshStandardMaterial color="#222" metalness={0.9} />
         </mesh>
      </group>

      {/* --- LENS --- */}
      <group position={[-0.2, 0, 0.3]}>
         {/* Lens Mount Ring */}
         <mesh rotation={[Math.PI/2, 0, 0]} material={new THREE.MeshStandardMaterial({ color: '#555', metalness: 0.8 })}>
            <cylinderGeometry args={[0.44, 0.44, 0.05, 32]} />
         </mesh>
         
         {/* Lens Barrel */}
         <mesh position={[0, 0, 0.45]} rotation={[Math.PI/2, 0, 0]} material={lensMetal}>
            <cylinderGeometry args={[0.4, 0.42, 0.9, 32]} />
         </mesh>
         
         {/* Focus Ring (Ridged texture simulated) */}
         <mesh position={[0, 0, 0.4]} rotation={[Math.PI/2, 0, 0]} material={gripRubber}>
            <cylinderGeometry args={[0.41, 0.41, 0.35, 32]} />
         </mesh>

         {/* Red Ring (Canon L-Series Style) */}
         <mesh position={[0, 0, 0.8]} rotation={[Math.PI/2, 0, 0]} material={redRing}>
            <torusGeometry args={[0.39, 0.008, 16, 64]} />
         </mesh>

         {/* Lens Hood Mount/Rim */}
         <mesh position={[0, 0, 0.88]} rotation={[Math.PI/2, 0, 0]} material={lensMetal}>
             <cylinderGeometry args={[0.42, 0.42, 0.05, 32]} />
         </mesh>

         {/* Front Glass Element */}
         <mesh position={[0, 0, 0.88]} rotation={[Math.PI/2, 0, 0]} material={glass}>
             <cylinderGeometry args={[0.38, 0.38, 0.05, 32]} />
         </mesh>
         
         {/* Internal Reflection Fake */}
         <mesh position={[0, 0, 0.85]} rotation={[0, 0, 0]}>
             <circleGeometry args={[0.35, 32]} />
             <meshBasicMaterial color="#001a33" />
         </mesh>
      </group>
      
      {/* --- DIALS & BUTTONS --- */}
      <group position={[-0.2, 0, 0]}>
          {/* Mode Dial (Left) */}
          <mesh position={[-0.5, 0.52, 0]}>
              <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
              <meshStandardMaterial color="#111" />
          </mesh>
          {/* Top LCD (Right Shoulder) - simplified as plate */}
          <mesh position={[0.4, 0.52, 0]}>
               <boxGeometry args={[0.4, 0.05, 0.3]} />
               <meshStandardMaterial color="#222" />
          </mesh>
          {/* Hot Shoe */}
          <mesh position={[0, 0.83, -0.1]}>
               <boxGeometry args={[0.2, 0.03, 0.2]} />
               <meshStandardMaterial color="#333" metalness={0.8} />
          </mesh>
      </group>
      
      {/* --- REAR SCREEN & VIEWFINDER --- */}
      <group position={[-0.2, 0, -0.31]}>
          {/* Viewfinder Eyecup */}
          <mesh position={[0, 0.5, 0]} material={gripRubber}>
              <boxGeometry args={[0.35, 0.25, 0.1]} />
          </mesh>
          {/* Screen */}
          <mesh position={[0, -0.05, 0]}>
              <boxGeometry args={[1, 0.7, 0.05]} />
              <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[0, -0.05, 0.03]}>
              <planeGeometry args={[0.9, 0.6]} />
              <meshBasicMaterial color="#050505" />
          </mesh>
      </group>

      {/* --- SHADOW --- */}
      <mesh position={[0, -3, 0]} rotation={[-Math.PI/2, 0, 0]}>
         <circleGeometry args={[2, 32]} />
         <meshBasicMaterial color="black" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
