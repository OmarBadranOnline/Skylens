import React, { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Hero } from './Hero';

interface SceneProps {
  scrollOffset: number;
}

export const Scene: React.FC<SceneProps> = ({ scrollOffset }) => {
  const { camera } = useThree();

  // Simple vertical takeoff curve
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.5, 5),   // Start (Ground)
      new THREE.Vector3(0, 2, 8),     // Hover up slightly
      new THREE.Vector3(0, 20, 20),   // Fly up and away
    ]);
  }, []);

  const vec = new THREE.Vector3();
  const lookAtTarget = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    // Map scroll 0-1 to curve 0-1
    // We want the drone to leave quickly, so we map the first 30% of scroll to the full curve
    const t = Math.min(1, scrollOffset * 3);

    curve.getPointAt(t, vec);
    
    // Move camera smoothly
    camera.position.lerp(vec, 0.1);
    camera.lookAt(lookAtTarget);
  });

  return (
    <>
      {/* Stars/Dust particles for Hero background */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={500}
            array={new Float32Array(Array.from({length: 1500}, () => (Math.random() - 0.5) * 50))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="white" transparent opacity={0.4} />
      </points>
      
      {/* Hero Drone Only */}
      <group position={[0, 0, 0]}>
        <Hero />
      </group>
    </>
  );
};