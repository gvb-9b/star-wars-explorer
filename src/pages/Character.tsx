import { Suspense, useEffect, useState, useMemo, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import starWarsLogoUrl from "../assets/Star_Wars_Logo.glb?url";

import CharacterCard from "../components/CharacterCard";

interface Person {
  name: string;
  birth_year: string;
  url: string;
}

function LogoModel() {
  const { scene } = useGLTF(starWarsLogoUrl);
  return <primitive object={scene} />;
}

export default function Personnages() {
  const [data, setData] = useState<Person[]>([]);
  const [search, setSearch] = useState("");

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    fetch("https://swapi.info/api/people")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching people:", error);
      });
  }, []);

  // on filtre sur le nom ou sur la date de naissance (mémoïsé)
  const filteredData = useMemo(() => {
    return data.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.birth_year.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <main className="flex-grow w-full flex flex-col items-center justify-start relative overflow-x-hidden bg-black min-h-screen pb-24">
      <div className="absolute top-0 inset-x-0 h-[80vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffe81f]/10 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-6xl h-[40vh] sm:h-[50vh] z-10 cursor-pointer mt-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 20, 20]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight
            position={[-10, -20, 10]}
            intensity={1}
            color="#ffe81f"
          />
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <Center>
                <LogoModel />
              </Center>
            </Bounds>
          </Suspense>
          <OrbitControls
            makeDefault
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={1}
            enablePan={false}
          />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 sm:px-12 mt-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center mb-8 [text-shadow:0_5px_15px_rgba(0,0,0,0.8)]">
          Équipage <span className="text-[#ffe81f]">de la galaxie</span>
        </h2>

        {/* Barre de recherche */}
        <div className="w-full max-w-md mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ffe81f]/20 to-[#ffe81f]/0 rounded-xl blur opacity-25 group-focus-within:opacity-75 transition duration-500"></div>
          <input
            type="text"
            placeholder="Rechercher un membre de la galaxie..."
            value={search}
            onChange={handleChange}
            className="relative w-full bg-black/60 border border-[#ffe81f]/30 text-white px-6 py-4 rounded-xl outline-none focus:border-[#ffe81f] focus:ring-1 focus:ring-[#ffe81f]/50 transition-all font-[Inter,sans-serif] tracking-wider placeholder:text-gray-600"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#ffe81f]/40 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredData.map((person, index) => {
            const id = person.url.split("/").filter(Boolean).pop();
            return (
              <CharacterCard
                key={index}
                id={id || ""}
                name={person.name}
                birthYear={person.birth_year}
              />
            );
          })}
        </div>

        {filteredData.length === 0 && data.length > 0 && (
          <p className="text-gray-500 mt-20 text-center italic tracking-widest uppercase animate-pulse">
            Aucun membre trouvé dans cette partie de la galaxie...
          </p>
        )}
      </div>
    </main>
  );
}
