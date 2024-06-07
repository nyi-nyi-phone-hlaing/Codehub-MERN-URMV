import { useState } from "react";
import { VscMenu, VscSearch } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const toggleMenu = () => {
    setIsShow((prev) => !prev);
  };

  const searchHandler = () => {
    // e.preventDefault()
    if (searchKey.trim() !== "") {
      navigate(`/search/${searchKey}`);
    } else {
      alert("Type a movie name please");
    }
  };
  return (
    <nav className='relative w-full h-14 bg-zinc-900 flex justify-between items-center px-3'>
      <h1 className='text-2xl font-bold text-white'>
        <span className='text-rose-600'>UR</span>MV
      </h1>
      <ul className='flex gap-3 max-md:hidden'>
        <NavLink to={"/"} className='text-white text-base font-semibold'>
          Home
        </NavLink>
        <NavLink to={"/popular"} className='text-white text-base font-semibold'>
          Popular
        </NavLink>
        <NavLink
          to={"/upcoming"}
          className='text-white text-base font-semibold'>
          Upcoming
        </NavLink>
      </ul>
      <div className='flex items-center bg-zinc-700'>
        <input
          type='search'
          className='bg-transparent text-white outline-none px-2 py-1'
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          onClick={searchHandler}
          className='size-8 aspect-square bg-zinc-800 flex justify-center items-center'>
          <VscSearch className='text-rose-500' />
        </button>
      </div>
      <button
        onClick={toggleMenu}
        className='size-8 aspect-square bg-zinc-800 flex justify-center items-center md:hidden'>
        <VscMenu className='text-rose-500' />
      </button>

      <ul
        className={`absolute top-14 left-0 w-full bg-zinc-800 duration-300 z-40 flex flex-col justify-center items-center py-4 ${
          isShow
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } `}>
        <NavLink to={"/"} className='text-white text-base font-semibold'>
          Home
        </NavLink>
        <NavLink to={"/popular"} className='text-white text-base font-semibold'>
          Popular
        </NavLink>
        <NavLink
          to={"/upcoming"}
          className='text-white text-base font-semibold'>
          Upcoming
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
