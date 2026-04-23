import { TextFlippingBoard } from "../components/ui/text-flipping-board";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12 relative">
      <div className="max-w-5xl w-full mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#ffe81f] via-black to-[#ffe81f] opacity-20 blur-lg transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
        
        <div className="relative bg-black/80 backdrop-blur-xl border border-[#ffe81f]/30 p-2 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#ffe81f] -translate-x-1 -translate-y-1 shadow-[0_0_15px_rgba(255,232,31,0.5)]"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#ffe81f] translate-x-1 -translate-y-1 shadow-[0_0_15px_rgba(255,232,31,0.5)]"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#ffe81f] -translate-x-1 translate-y-1 shadow-[0_0_15px_rgba(255,232,31,0.5)]"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#ffe81f] translate-x-1 translate-y-1 shadow-[0_0_15px_rgba(255,232,31,0.5)]"></div>

          <div className="py-20 px-8 sm:px-16 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(255,232,31,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

            <div className="w-full relative z-10 mb-10 -mt-6">
              <TextFlippingBoard 
                text="DANS UNE GALAXIE LOINTAINE, TRES LOINTAINE..." 
              />
            </div>
            
            <div className="w-32 h-[2px] bg-[#ffe81f] mb-10 shadow-[0_0_15px_rgba(255,232,31,1)] relative z-10"></div>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed tracking-[0.1em] font-light relative z-10">
              <span className="text-[#ffe81f] font-bold">Star Wars Explorer</span> est une application qui vous permet d' explorer le
              monde de Star Wars.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
