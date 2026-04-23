import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

interface Character {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  homeworld: string;
}

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://swapi.info/api/people/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-[#ffe81f] text-2xl font-black tracking-widest animate-pulse uppercase">
          Chargement des données...
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center gap-6">
        <div className="text-red-500 text-2xl font-black tracking-widest uppercase">
          Personnage introuvable
        </div>
        <button
          onClick={() => navigate("/personnages")}
          className="px-8 py-3 border border-[#ffe81f] text-[#ffe81f] hover:bg-[#ffe81f] hover:text-black transition-all duration-300 uppercase font-bold tracking-widest rounded-lg"
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  const attributes = [
    { label: "Date de naissance", value: character.birth_year },
    { label: "Genre", value: character.gender },
    { label: "Taille", value: `${character.height} cm` },
    { label: "Poids", value: `${character.mass} kg` },
    { label: "Couleur des cheveux", value: character.hair_color },
    { label: "Couleur des yeux", value: character.eye_color },
    { label: "Couleur de peau", value: character.skin_color },
  ];

  return (
    <main className="flex-grow w-full flex flex-col items-center justify-start relative overflow-x-hidden bg-black py-12 px-6">
      {/* Decorative background glow */}
      <div className="absolute top-0 inset-x-0 h-[60vh] bg-[radial-gradient(circle_at_center,_rgba(255,232,31,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => navigate("/personnages")}
          className="group flex items-center gap-2 text-[#ffe81f]/60 hover:text-[#ffe81f] transition-colors mb-12 uppercase text-sm font-bold tracking-[0.2em]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l'équipage
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Name and Header */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter [text-shadow:0_0_20px_rgba(255,255,255,0.2)]">
                {character.name}
              </h1>
              <div className="h-1 w-24 bg-[#ffe81f]" />
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-[Inter,sans-serif]">
              Un membre éminent de la saga Star Wars. Voici les informations détaillées extraites des archives impériales.
            </p>

            <div className="p-8 bg-[#0a0a0a] border border-[#ffe81f]/20 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ffe81f]/5 -mr-8 -mt-8 rotate-45 transition-transform group-hover:scale-150 duration-700" />
              <h3 className="text-[#ffe81f] font-black uppercase tracking-widest mb-4">Statut de la mission</h3>
              <p className="text-gray-300 font-mono text-sm uppercase tracking-wider">
                Localisation: {character.homeworld.split("/").pop() === "1" ? "Tatooine" : "Inconnue"}
                <br />
                ID de base: SW-{id?.padStart(4, "0")}
                <br />
                Niveau d'accréditation: ALPHA-1
              </p>
            </div>
          </div>

          {/* Right Column: Attributes Grid */}
          <div className="grid grid-cols-1 gap-4">
            {attributes.map((attr, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-5 bg-[#0a0a0a]/60 backdrop-blur-sm border-b border-[#ffe81f]/10 hover:bg-[#ffe81f]/5 transition-colors duration-300"
              >
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                  {attr.label}
                </span>
                <span className="text-lg font-mono text-[#ffe81f] tracking-wide capitalize">
                  {attr.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
