"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function Orb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.55} floatIntensity={1.3}>
      <mesh ref={meshRef} scale={1.7}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#5b8def"
          distort={0.42}
          speed={1.8}
          roughness={0.35}
          metalness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.55}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.4} />
      <hemisphereLight intensity={0.8} color="#93c5fd" groundColor="#1e1b4b" />
      <pointLight position={[4, 4, 4]} intensity={6} color="#60a5fa" />
      <pointLight position={[-4, -2, -3]} intensity={6} color="#a78bfa" />
      <pointLight position={[0, 4, -4]} intensity={3} color="#22d3ee" />
      <pointLight position={[0, -3, 4]} intensity={2.5} color="#ffffff" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
      <CameraRig />
    </Canvas>
  );
}

export default HeroOrb;
