/* eslint-disable react-refresh/only-export-components */
import { VscArrowLeft } from "react-icons/vsc";
import { Link, json, useLoaderData, useParams } from "react-router-dom";
import { options } from "../utils/options";
import MovieList from "../components/MovieList";

const SearchResult = () => {
  const { title } = useParams();
  const movies = useLoaderData();
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <nav className='w-full h-14 bg-zinc-950 flex justify-start items-center px-3'>
        <Link
          to={"/"}
          className='size-8 aspect-square text-white bg-zinc-900 flex justify-center items-center mr-3'>
          <VscArrowLeft />
        </Link>
        <h1 className='text-lg font-semibold text-white'>{title}</h1>
      </nav>
      <MovieList movies={movies} sectionName={"Search Results"} />
    </div>
  );
};

export default SearchResult;

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${params.title}&page=1&include_adult=false`,
    options
  );
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.results;
};
