/* eslint-disable react-refresh/only-export-components */
import MovieList from "../components/MovieList";

import Splider from "../components/Splider";
import { json, useLoaderData } from "react-router-dom";
import { options } from "../utils/options";

const Home = () => {
  const moives = useLoaderData();

  return (
    <div>
      <Splider slideMovies={moives} />
      <div className='w-full h-screen bg-white flex justify-center items-center'>
        <div>
          <h1 className='font-bold text-3xl mb-6 text-rose-600'>
            Best pick for hassle-free streaming experience.
          </h1>
          <ul>
            <li className='flex items-center justify-start mb-6'>
              <img
                src='../images/icon01.png'
                alt='icon01'
                className='size-16 mr-5'
              />
              <div>
                <h1 className='font-bold text-lg'>Access while traveling</h1>
                <p>
                  Keep access to your entertainment content while roaming the
                  world.Pick from thousands.
                </p>
              </div>
            </li>
            <li className='flex items-center justify-start mb-6'>
              <img
                src='../images/icon02.png'
                alt='icon01'
                className='size-16 mr-5'
              />
              <div>
                <h1 className='font-bold text-lg'>
                  Stream with no interruptions
                </h1>
                <p>
                  Pause for snacks, not buffering. Stream smoothly with our
                  lightning-fast NordLynx protocol network.
                </p>
              </div>
            </li>
            <li className='flex items-center justify-start'>
              <img
                src='../images/icon03.png'
                alt='icon01'
                className='size-16 mr-5'
              />
              <div>
                <h1 className='font-bold text-lg'>Stay secure at all times</h1>
                <p>
                  Securely access and enjoy your favorite content, even on
                  public Wi-Fi. Your connection
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <MovieList movies={moives} sectionName={"Top Rated Movies"} />
    </div>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
    options
  );
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.results;
};
