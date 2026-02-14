import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { VideoProject } from '../types';

const projects: VideoProject[] = [
  {
    id: '1',
    title: 'Urban Flow',
    description: 'City Timelapse',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    position: [-3, 2, -20],
    rotation: [0, 0.3, 0]
  },
  {
    id: '2',
    title: 'Mountain Run',
    description: 'FPV Chase',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    position: [3, 4, -30],
    rotation: [0, -0.4, 0]
  },
  {
    id: '3',
    title: 'Ocean Deep',
    description: 'Underwater Drone',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    position: [-2, 1, -40],
    rotation: [0, 0.2, 0]
  },
  {
    id: '4',
    title: 'Night Lights',
    description: 'Neon City',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    position: [4, 3, -50],
    rotation: [0, -0.3, 0]
  },
  {
    id: '5',
    title: 'Desert Drifters',
    description: 'Rally Coverage',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    position: [0, 5, -60],
    rotation: [0.1, 0, 0]
  }
];

// Sub-component to safely use hooks inside the map loop
const GalleryItem: React.FC<{ project: VideoProject }> = ({ project }) => {
  const texture = useLoader(THREE.TextureLoader, project.imageUrl);
  
  return (
    <group position={new THREE.Vector3(...project.position)} rotation={new THREE.Euler(...project.rotation)}>
      <mesh>
        <planeGeometry args={[6, 3.5]} />
        <meshBasicMaterial map={texture} transparent opacity={0.9} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Frame/Glow */}
      <mesh position={[0, 0, -0.05]}>
         <planeGeometry args={[6.2, 3.7]} />
         <meshBasicMaterial color="#ffaa00" opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>
      
      {/* Replaced Text with simple placeholder label geometry or removed. 
          Since 3D Text is hard without Drei, we rely on the HTML UI for details.
          We add a small indicator here.
      */}
      <mesh position={[-2.5, -2.2, 0.1]}>
         <boxGeometry args={[1, 0.1, 0.01]} />
         <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export const Gallery: React.FC = () => {
  return (
    <group>
      {projects.map((project) => (
        <GalleryItem key={project.id} project={project} />
      ))}
    </group>
  );
};