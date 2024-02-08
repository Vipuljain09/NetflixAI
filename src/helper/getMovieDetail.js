import { API_OPTIONS } from "../utils/constants";

export const getMovieDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    API_OPTIONS
  );
  const data = await res.json();

  console.log(data);
  return data;
};
