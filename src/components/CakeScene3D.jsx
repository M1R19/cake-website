import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Float, Environment, MeshReflectorMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

function CakeImage({ imageUrl }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { viewport, mouse } = useThree();

  const texture = useTexture(imageUrl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Calculate aspect ratio
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1;
  const scale = 4.5;

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation following mouse
      const targetRotationY = mouse.x * 0.15;
      const targetRotationX = -mouse.y * 0.1;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;

      // Scale on hover
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale * scale * aspectRatio, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale * scale, 0.1);
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.3}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={[scale * aspectRatio, scale, 1]}
      >
        <planeGeometry args={[1, 1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
          metalness={0.05}
          roughness={0.9}
          envMapIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function ParallaxLayers({ imageUrl }) {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Parallax effect on mouse movement
      groupRef.current.position.x = mouse.x * 0.1;
      groupRef.current.position.y = mouse.y * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <CakeImage imageUrl={imageUrl} />
    </group>
  );
}

function GoldAccents() {
  const particles = useRef();
  const count = 50;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2 - 1;
  }

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.05;
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particles}>
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
        color="#D4AF37"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ imageUrl }) {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        color="#FFF8DC"
        castShadow
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.25}
        color="#8B0000"
      />
      <pointLight
        position={[0, 2, 2]}
        intensity={0.4}
        color="#FFD700"
        distance={5}
      />
      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.25}
        color="#FFFAF0"
      />

      {/* Main Content */}
      <ParallaxLayers imageUrl={imageUrl} />
      <GoldAccents />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Post Processing */}
      <EffectComposer>
        <Bloom
          intensity={0.15}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.9}
        />
        <Vignette
          offset={0.3}
          darkness={0.5}
        />
      </EffectComposer>
    </>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#722F37" />
    </mesh>
  );
}

export default function CakeScene3D({ imageUrl }) {
  return (
    <div className="cake-scene-container">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
