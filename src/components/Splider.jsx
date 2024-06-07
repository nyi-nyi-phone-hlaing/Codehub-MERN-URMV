import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { VscPlay } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Splider = ({ slideMovies }) => {
  return (
    <div className='w-full h-[calc(100vh-3.5rem)] overflow-hidden bg-zinc-900'>
      <Splide
        options={{
          type: "loop",
          arrows: true,
          autoplay: true,
          interval: 5000,
          speed: 2000,
        }}>
        {slideMovies &&
          slideMovies.map((mv) => {
            return (
              <SplideSlide key={mv.id}>
                <div className='relative w-full h-full'>
                  <img
                    className='w-full h-[calc(100vh-3.5rem)] object-cover'
                    src={`https://image.tmdb.org/t/p/original/${mv.backdrop_path}`}
                    alt={mv.title}
                  />
                  <div className='w-fit absolute bottom-20 left-24 z-10 p-3 bg-slate-900 bg-opacity-30 backdrop-blur-sm rounded-md max-md:left-5'>
                    <h1 className='font-bold text-5xl text-rose-600'>
                      {mv.title}
                    </h1>
                    <p className='font-bold text-white mb-2'>
                      {mv.release_date}
                    </p>
                    <Link to={`/watch/${mv.title}/${mv.id}`}>
                      <button className='bg-rose-600 flex items-center justify-center px-2 py-1.5 font-bold text-white hover:bg-rose-700'>
                        <VscPlay className='mr-2' size='1.3rem' /> Watch Now
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
};

Splider.propTypes = {
  slideMovies: PropTypes.array,
};

export default Splider;
