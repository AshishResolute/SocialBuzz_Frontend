import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";


export const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between sm:justify-between  items-center w-full gap-5 text-white">
      <h1 className="text-3xl text-center inline-block font-bold text-slate-400">
        Social<span className="text-3xl font-bold text-yellow-300">Buzz</span>
      </h1>
      <div className="flex items-center gap-5">
        <label htmlFor="search" className="cursor-pointer">
          <FiSearch className="pointer-events-none text-xl" />
        </label>
        <input
          className="hidden sm:block p-1.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 w-80"
          type="text"
          placeholder="Search here..."
          id="search"
        />
        <GoBell className="text-xl sm:hidden" />
      </div>
      <GoBell className="text-xl hidden sm:block" />
    </nav>
  );
};
