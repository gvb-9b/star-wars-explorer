import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

function ModelLoader({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[scale, scale, scale]} />;
}

interface PlanetCardProps {
  name: string;
  url: string;
  scale?: number;
}

export default function PlanetCard({
  name,
  url,
  scale = 1,
}: PlanetCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      <div className="w-full relative bg-black/80 backdrop-blur-xl border border-[#ffe81f]/30 p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-center rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe81f]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#ffe81f] tracking-[0.2em] uppercase [text-shadow:2px_2px_0_rgba(0,0,0,1),0_0_15px_rgba(255,232,31,0.5)]">
          {name}
        </h2>
      </div>

      <div className="w-full h-[400px] sm:h-[500px] cursor-pointer bg-black/40 rounded-2xl overflow-hidden border border-[#ffe81f]/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black/40 to-black pointer-events-none" />

        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={0.6}
            color="#ffaa55"
          />

          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <ModelLoader url={url} scale={scale} />
            </Bounds>
          </Suspense>

          <OrbitControls makeDefault enableZoom={false} autoRotate={true} autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </div>
  );
}
