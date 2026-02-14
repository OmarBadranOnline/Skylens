import React from 'react';

export const Contact: React.FC = () => {
  return (
    <group>
      {/* Landing Pad */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <circleGeometry args={[10, 64]} />
        <meshStandardMaterial 
            color="#111" 
            roughness={0.2} 
            metalness={0.8} 
        />
      </mesh>
      
      {/* Emission Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
         <ringGeometry args={[9.5, 10, 64]} />
         <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2} />
      </mesh>

      {/* Grid Floor replacement */}
      <gridHelper args={[100, 50, 0xffaa00, 0x333333]} position={[0, -0.2, 0]} />
      
      {/* Simple decorative lights */}
      <pointLight position={[-5, 2, -5]} color="#ffaa00" intensity={2} distance={10} />
      <pointLight position={[5, 2, 5]} color="#ffaa00" intensity={2} distance={10} />
    </group>
  );
};