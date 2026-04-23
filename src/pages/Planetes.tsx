import PlanetCard from "../components/PlanetCard";

// Import de tous les modèles 3D
import tatooineUrl from "../assets/Tatooine_3D_Model.glb?url";
import coruscantUrl from "../assets/Coruscant_3D_Model.glb?url";
import deathStarUrl from "../assets/Death_Star_Star_Wars.glb?url";
import keplerUrl from "../assets/Kepler_22b.glb?url";

export default function Planetes() {
  const planets = [
    { name: "Tatooine", url: tatooineUrl, scale: 1 },
    { name: "Coruscant", url: coruscantUrl, scale: 4 },
    { name: "Étoile de la Mort", url: deathStarUrl, scale: 1 },
    { name: "Kepler-22b", url: keplerUrl, scale: 1 }
  ];

  return (
    <main className="flex-grow flex flex-col p-6 sm:p-10 lg:p-16 relative overflow-hidden min-h-screen">
      
      <div className="w-full text-center mt-4 mb-16 relative z-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-widest uppercase opacity-90 [text-shadow:0_10px_20px_rgba(0,0,0,0.8)]">
          Base de Données <span className="text-[#ffe81f] block sm:inline mt-2 sm:mt-0">Galactique</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 w-full max-w-[1400px] mx-auto z-10 pb-20">
        {planets.map((planet, index) => (
          <PlanetCard 
            key={index} 
            name={planet.name} 
            url={planet.url} 
            scale={planet.scale} 
          />
        ))}
      </div>
    </main>
  );
}
