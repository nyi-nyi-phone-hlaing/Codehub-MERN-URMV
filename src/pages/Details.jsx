import { Link, json, useLoaderData } from "react-router-dom";
import { options } from "../utils/options";
import { VscArrowLeft, VscPlay } from "react-icons/vsc";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Payment from "../components/Payment";

/* eslint-disable react-refresh/only-export-components */
const Details = () => {
  const movie = useLoaderData();
  const [similarMovies, setSimilarMovies] = useState([]);

  const getOtherMovies = async (title) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${title}&page=1&include_adult=false`,
      options // Ensure options is defined
    );
    const data = await response.json();
    setSimilarMovies(data.results); // Use "results" instead of "result"
  };

  useEffect(() => {
    if (movie.title) {
      getOtherMovies(movie.title);
    }
  }, [movie.title]);

  return (
    <div>
      <nav className='relative z-20 w-full h-14 bg-zinc-950 flex justify-start items-center px-3'>
        <Link
          to={"/"}
          className='size-8 aspect-square text-white bg-zinc-900 flex justify-center items-center mr-3'>
          <VscArrowLeft />
        </Link>
        <h1 className='text-lg font-semibold text-white'>{movie.title}</h1>
      </nav>
      <div className='fixed top-0 left-0 w-full h-screen bg-zinc-900'>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className='w-full h-[calc(100vh-12rem)]'></div>
      <div className=' bg-zinc-800 p-5 backdrop-blur-sm flex items-start'>
        <img
          className='w-36 aspect-2/3 duration-200 bg-zinc-800 mr-3'
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1 className='text-white font-semibold text-xl'>{movie.title}</h1>
          <ul className='flex items-center justify-start gap-2 my-2 flex-wrap'>
            {movie.genres &&
              movie.genres.map((genere) => (
                <li
                  className='bg-rose-400 px-2 py-1 font-semibold text-black'
                  key={genere.id}>
                  {genere.name}
                </li>
              ))}
          </ul>
          <p className='text-white font-semibold whitespace-nowrap'>
            Runtime <span className='text-red-500'>{movie.runtime}</span> min
          </p>
          <p className='text-white'>{movie.overview}</p>
          <Link to={`/watch/${movie.title}/${movie.id}`}>
            <button className='bg-rose-600 flex items-center justify-center px-2 py-1.5 font-bold text-white mt-2 hover:bg-rose-700'>
              <VscPlay className='mr-2' size='1.3rem' /> Watch Now
            </button>
          </Link>
        </div>
      </div>
      <MovieList movies={similarMovies} sectionName={"Similar Movies"} />
      <Payment />
    </div>
  );
};

export default Details;

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    options
  );
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data;
};
