"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { SRGBColorSpace } from "three";
import type { Mesh } from "three";

function Portrait() {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture("/profile.jpeg");
  texture.colorSpace = SRGBColorSpace;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { pointer } = state;
    const lerp = 1 - Math.exp(-delta * 4);
    meshRef.current.rotation.y += (pointer.x * 0.35 - meshRef.current.rotation.y) * lerp;
    meshRef.current.rotation.x += (-pointer.y * 0.25 - meshRef.current.rotation.x) * lerp;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={1.3}>
      <mesh scale={1.7} position={[0, 0, -0.05]}>
        <torusGeometry args={[1.12, 0.045, 32, 100]} />
        <meshStandardMaterial
          color="#5b8def"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      <mesh ref={meshRef} scale={1.7}>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.05} />
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
        <Portrait />
      </Suspense>
      <CameraRig />
    </Canvas>
  );
}

export default HeroOrb;
