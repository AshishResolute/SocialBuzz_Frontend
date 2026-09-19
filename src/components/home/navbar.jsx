import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { useRef } from "react";

export const NavBar = () => {
  const searchRef = useRef(null);
  return (
    <nav className="p-4   flex justify-evenly items-center w-full ">
      <h1 className="text-3xl w-3/4 text-center  font-bold text-slate-400">
        Social<span className="text-3xl font-bold text-yellow-300">Buzz</span>
      </h1>
      <div className="flex items-center gap-4 md:gap-3 text-white ">
        <label htmlFor="search" className="cursor-pointer"><FiSearch className="pointer-events-none text-xl"/></label> 
        <input
          className="hidden sm:block p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
          type="text"
          placeholder="Search here..."
          id="search"
        />
        <GoBell className="text-xl" />
      </div>
    </nav>
  );
};
