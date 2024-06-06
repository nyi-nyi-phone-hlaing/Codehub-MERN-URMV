import PropTypes from "prop-types";
import { Link, json } from "react-router-dom";
import { options } from "../utils/options";
import { useEffect, useState } from "react";
const MovieList = ({ movies, sectionName }) => {
  const [details, setDetails] = useState({});

  const getMovieDetails = async (mvId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${mvId}/videos?language=en-US`,
      options
    );

    if (!response.ok) {
      throw json({ message: "Internal Server Error" }, { status: 500 });
    }

    const data = await response.json();
    setDetails((prevDetails) => ({
      ...prevDetails,
      [mvId]: { id: data.id, result: data.results[0] },
    }));
  };

  useEffect(() => {
    movies.forEach((mov) => {
      if (!details[mov.id]) {
        getMovieDetails(mov.id);
      }
    });
  }, [movies, details]);
  return (
    <div className='relative w-full min-h-screen bg-zinc-900 pt-5'>
      <h1 className='font-bold text-3xl text-center text-gray-500 mb-14'>
        {sectionName}
      </h1>
      {movies && movies.length === 0 && (
        <p className='text-center text-rose-600 font-semibold'>
          There is no movies yet!
        </p>
      )}
      <div className='gap-4 px-24 py-4 grid grid-cols-6'>
        {movies &&
          details &&
          movies.map((mv) => (
            <div key={mv.id} className='cursor-pointer'>
              <Link to={`/details/${mv.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${mv.poster_path}`}
                  alt={mv.title}
                  className='w-full aspect-2/3 hover:brightness-50 duration-200 bg-zinc-800'
                />
              </Link>
              <div>
                <div className='flex justify-between items-center mt-1'>
                  <p className=' bg-rose-600 text-white text-sm font-medium rounded-sm px-1'>
                    {details[mv.id] &&
                      details[mv.id].result &&
                      details[mv.id].result.size}
                  </p>
                  <p className=' text-gray-600 text-sm font-semibold'>
                    {mv.release_date ? mv.release_date : "YYYY-MM-DD"}
                  </p>
                </div>
                <p className=' text-rose-600 text-sm font-semibold mt-1'>
                  {details[mv.id] &&
                    details[mv.id].result &&
                    details[mv.id].result.type}
                </p>
                <h1 className='text-gray-300 font-semibold my-2 text-sm'>
                  {mv.title.length > 18
                    ? mv.title.substring(0, 18) + "..."
                    : mv.title}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  sectionName: PropTypes.string,
};

export default MovieList;
