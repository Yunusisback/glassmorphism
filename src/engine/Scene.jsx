import { useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function GoldParticles() {
  const ref = useRef();

  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.8 }));

  // Her framede animasyon
  useFrame((state, delta) => {
   
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 30;

    const s = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FFD700"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
          blending={2}
        />
      </Points>
    </group>
  );
}

function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <GoldParticles />
      </Canvas>

      {/* efekt */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/60 opacity-70" />
    </div>
  );
}

export default Scene;