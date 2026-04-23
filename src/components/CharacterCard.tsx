interface CharacterCardProps {
  id: string;
  name: string;
  birthYear: string;
}

import { memo } from "react";
import { Link } from "react-router";

const CharacterCard = memo(function CharacterCard({ id, name, birthYear }: CharacterCardProps) {
  console.log(`[Render] CharacterCard: ${name}`);
  
  return (
    <Link to={`/personnages/${id}`} className="group relative flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#ffe81f]/20 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.03] hover:border-[#ffe81f]/60 hover:shadow-[0_0_30px_rgba(255,232,31,0.25)] min-h-[180px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffe81f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      
      <div className="relative z-20 flex flex-col items-center gap-3">
        <h3 className="text-xl sm:text-2xl font-black text-[#ffe81f] tracking-widest uppercase text-center [text-shadow:0_0_10px_rgba(255,232,31,0.3)] transition-all duration-300 group-hover:scale-110">
          {name}
        </h3>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">
            Date de naissance
          </span>
          <span className="text-lg font-mono text-gray-200 tracking-wider">
            {birthYear}
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ffe81f]/10 group-hover:border-[#ffe81f]/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ffe81f]/10 group-hover:border-[#ffe81f]/40 transition-colors duration-500" />
    </Link>
  );
});

export default CharacterCard;
