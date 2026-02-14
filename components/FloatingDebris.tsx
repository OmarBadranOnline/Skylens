import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const FloatingDebris: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 50;

  // Generate random positions along the flight path
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30; // Wide spread X
      const y = (Math.random() - 0.5) * 30; // Wide spread Y
      const z = -Math.random() * 80;        // Along the track Z
      const scale = Math.random() * 0.5 + 0.2;
      const rotation = [Math.random() * Math.PI, Math.random() * Math.PI, 0];
      temp.push({ x, y, z, scale, rotation });
    }
    return temp;
  }, []);

  const dummy = new THREE.Object3D();

  useFrame((state) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      const { x, y, z, scale, rotation } = particle;
      
      // Gentle rotation
      const t = state.clock.getElapsedTime();
      dummy.position.set(x, y + Math.sin(t + i) * 0.5, z);
      dummy.rotation.set(
        rotation[0] + t * 0.1,
        rotation[1] + t * 0.2,
        rotation[2]
      );
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#333" wireframe transparent opacity={0.3} />
      </instancedMesh>
      
      {/* Add some solid "Stickers" / Planes */}
      {particles.slice(0, 10).map((p, i) => (
        <group key={i} position={[p.x * 0.8, p.y * 0.8, p.z]} rotation={[p.rotation[0], p.rotation[1], 0]}>
             <mesh>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial color="#ffaa00" wireframe transparent opacity={0.2} side={THREE.DoubleSide} />
             </mesh>
             <mesh position={[0,0,-0.01]}>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial color="black" transparent opacity={0.5} side={THREE.DoubleSide} />
             </mesh>
        </group>
      ))}
    </>
  );
};