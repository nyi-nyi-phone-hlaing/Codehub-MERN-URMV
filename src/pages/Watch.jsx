import { Link, json, useLoaderData, useParams } from "react-router-dom";
import { options } from "../utils/options";
import { VscArrowLeft } from "react-icons/vsc";
import YouTube from "react-youtube";

/* eslint-disable react-refresh/only-export-components */
const Watch = () => {
  const { title } = useParams();
  const movie = useLoaderData();
  const mv = movie.results[0];
  const deviceWidth = window.innerWidth;
  const opts = {
    width: deviceWidth >= 768 ? "760" : window.innerWidth,
    height: deviceWidth >= 768 ? "400" : "220",
    playerVars: {
      autoplay: 1,
      origin: "https://www.themoviedb.org",
      modestbranding: 1,
      fs: 1,
      autohide: 1,
    },
  };

  return (
    <div>
      <nav className='relative z-20 w-full h-14 bg-zinc-950 flex justify-start items-center px-3 '>
        <Link
          to={"/"}
          className='size-8 aspect-square text-white bg-zinc-900 flex justify-center items-center mr-3'>
          <VscArrowLeft />
        </Link>
        <h1 className='text-lg font-semibold text-white'>{title}</h1>
      </nav>
      <div className='w-full h-[calc(100vh-3.5rem)] bg-zinc-900 flex items-center justify-center max-md:items-start'>
        {mv && mv.key ? (
          <YouTube videoId={mv.key} opts={opts} />
        ) : (
          <h1 className='text-center text-zinc-600 font-semibold'>
            Video is not avaliable.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Watch;

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
    options
  );
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data;
};
