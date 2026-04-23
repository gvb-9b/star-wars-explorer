import Header from "./components/Header";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Personnages from "./pages/Character";
import Planetes from "./pages/Planetes";
import CharacterDetails from "./pages/CharacterDetails";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-black text-[#ffe81f] font-[Outfit,Inter,sans-serif] relative overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(255,232,31,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ffe81f]/20 to-transparent pointer-events-none hidden md:block"></div>
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ffe81f]/20 to-transparent pointer-events-none hidden md:block"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/personnages/:id" element={<CharacterDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/planetes" element={<Planetes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
