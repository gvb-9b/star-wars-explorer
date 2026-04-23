import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, NavLink } from "react-router";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`flex justify-between items-center py-5 px-8 sm:px-12 backdrop-blur-md border-b sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors duration-500 ${
      theme === "light" ? "bg-white/85 border-gray-300" : "bg-[#0a0a0f]/85 border-[#ffe81f]/20"
    }`}>
      <Link 
        to="/" 
        className={`font-[Outfit,Inter,sans-serif] text-2xl sm:text-3xl font-extrabold tracking-[0.15em] uppercase m-0 cursor-pointer transition-transform duration-300 hover:scale-105 decoration-none ${
          theme === "light" ? "text-gray-900" : "text-[#ffe81f] [text-shadow:0_0_15px_rgba(255,232,31,0.4)] hover:[text-shadow:0_0_25px_rgba(255,232,31,0.7)]"
        }`}
      >
        Star Wars Explorer
      </Link>
      <nav className="flex items-center gap-8">
        <ul className="flex list-none gap-6 sm:gap-10 m-0 p-0 items-center">
          <li className="relative group">
            <NavLink
              to="/"
              className={`no-underline font-[Inter,sans-serif] text-sm sm:text-base font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-300 inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-sm ${
                theme === "light" ? "text-gray-600 hover:text-black after:bg-black" : "text-gray-200 hover:text-[#ffe81f] after:bg-[#ffe81f]"
              }`}
            >
              Accueil
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/films"
              className={`no-underline font-[Inter,sans-serif] text-sm sm:text-base font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-300 inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-sm ${
                theme === "light" ? "text-gray-600 hover:text-black after:bg-black" : "text-gray-200 hover:text-[#ffe81f] after:bg-[#ffe81f]"
              }`}
            >
              Films
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/personnages"
              className={`no-underline font-[Inter,sans-serif] text-sm sm:text-base font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-300 inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-sm ${
                theme === "light" ? "text-gray-600 hover:text-black after:bg-black" : "text-gray-200 hover:text-[#ffe81f] after:bg-[#ffe81f]"
              }`}
            >
              Personnages
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/planetes"
              className={`no-underline font-[Inter,sans-serif] text-sm sm:text-base font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-300 inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-sm ${
                theme === "light" ? "text-gray-600 hover:text-black after:bg-black" : "text-gray-200 hover:text-[#ffe81f] after:bg-[#ffe81f]"
              }`}
            >
              Planètes
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4 ml-4 border-l pl-8 border-gray-500/20">
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === "light" ? "text-gray-400" : "text-gray-500"}`}>
            Mode: {theme}
          </span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === "light" 
                ? "bg-gray-100 text-gray-800 hover:bg-gray-200" 
                : "bg-white/5 text-[#ffe81f] border border-[#ffe81f]/30 hover:bg-[#ffe81f]/10"
            }`}
            title="Changer le thème"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4-9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
