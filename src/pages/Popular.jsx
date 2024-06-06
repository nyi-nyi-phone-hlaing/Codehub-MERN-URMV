/* eslint-disable react-refresh/only-export-components */

import Splider from "../components/Splider";
import MovieList from "../components/MovieList";
import { json, useLoaderData } from "react-router-dom";
import { options } from "../utils/options";

const Popular = () => {
  const movies = useLoaderData();

  return (
    <div>
      <Splider slideMovies={movies} />
      <MovieList movies={movies} sectionName={"Popular Movies"} />
    </div>
  );
};

export default Popular;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.results;
};
