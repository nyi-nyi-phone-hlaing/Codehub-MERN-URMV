import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const searchHandler = () => {
    // e.preventDefault()
    if (searchKey.trim() !== "") {
      navigate(`/search/${searchKey}`);
    } else {
      alert("Type a movie name please");
    }
  };
  return (
    <nav className=' w-full h-14 bg-zinc-900 flex justify-between items-center px-3'>
      <h1 className='text-2xl font-bold text-white'>
        <span className='text-rose-600'>UR</span>MV
      </h1>
      <ul className='flex gap-3'>
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
    </nav>
  );
};

export default Navbar;
